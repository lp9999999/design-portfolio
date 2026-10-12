# -*- coding: utf-8 -*-
"""
rebuild_all.py — 作品集完整构建脚本（GitHub Pages 版）
功能：
  1. 从 rendered_page.html 提取 React 渲染后的正文
  2. 修复链接 hover 彩色下划线 + 技能进度条宽度/动画
  3. 注入 51LA 访客统计代码（V6 SDK，head 内，</head> 前）
  4. 页尾追加隐私提示
  5. 静态资源相对路径防御性修正（GitHub Pages 子路径部署不 404）
  6. 输出 index.html（GitHub Pages 入口文件名）

统计后台：https://ia.51.la （登录后查看访客 IP/属地/UA/URL，前端零展示）
"""
import re
import os
import html as html_mod

# ================= 配置区 =================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 51LA 访客统计（更换应用时改这两处即可）
LA_ID = '3RU7fkG3ygBm0WXA'   # 51LA 应用 id
LA_CK = '3RU7fkG3ygBm0WXA'   # 51LA ck 密钥

INPUT_RENDERED = os.path.join(BASE_DIR, 'rendered_page.html')
INPUT_CSS = os.path.join(BASE_DIR, 'figma_components.css')
OUTPUT_HTML = os.path.join(BASE_DIR, 'index.html')
# ==========================================

# ---------- 1. 提取正文 ----------
with open(INPUT_RENDERED, 'r', encoding='utf-8') as f:
    rendered = f.read()

pattern = r'<div id="container">(.*?)<noscript'
match = re.search(pattern, rendered, re.DOTALL)
if not match:
    print("ERROR: Could not find container")
    exit(1)

container_html = html_mod.unescape(match.group(1))

# ---------- 2. 链接修复：去 hover 变色 / 渐变下划线扩张 ----------
container_html = container_html.replace('hover:text-blue-500 transition-colors', 'transition-colors')
container_html = container_html.replace('group-hover:w-full', '')
print("Removed hover link colors and gradient underline expansion")

# ---------- 3. 技能进度条 ----------
skill_widths = [
    ('2D视觉设计', '98%'),
    ('视频全案制作', '85%'),
    ('3D协作能力', '80%'),
    ('团队管理统筹', '90%'),
    ('产品视觉落地', '95%'),
]

applied = 0
for skill_name, target_w in skill_widths:
    idx = container_html.find(skill_name)
    if idx == -1:
        print(f"  WARNING: '{skill_name}' not found")
        continue
    chunk = container_html[idx:idx + 4000]
    fill_re = re.compile(
        r'(<div\s+class="h-full\s+bg-\[#222\]\s+rounded-full"\s+style=")width:\s*0px;(")',
        re.IGNORECASE)
    fill_match = fill_re.search(chunk)
    if fill_match:
        old = fill_match.group(0)
        new = (
            '<div class="h-full bg-[#222] rounded-full progress-fill progress-bar" '
            'data-target="' + target_w + '" '
            'style="--target-width: ' + target_w + '; width: 0%;"')
        container_html = container_html.replace(old, new, 1)
        applied += 1
        print(f"  [{skill_name}] -> {target_w}")
    else:
        print(f"  [{skill_name}] progress fill NOT FOUND")
print(f"Progress bars updated: {applied}/5")

# ---------- 4. 静态资源相对路径修正（防御性） ----------
# 本页图片/视频均为 https CDN，无本地资源；此处防止未来出现 / 开头的根路径引用
# 导致 GitHub Pages 项目子路径（user.github.io/repo/）下 404
before = len(container_html)
container_html = re.sub(r'(src|href)="/(?!/)', r'\1="./', container_html)
print(f"Relative-path pass done ({before} -> {len(container_html)} chars)")

# ---------- 5. CSS ----------
with open(INPUT_CSS, 'r', encoding='utf-8') as f:
    tailwind_css = f.read()
tailwind_css = re.sub(r'@import"[^"]*fonts\.googleapis[^"]*";', '', tailwind_css)

extra_css = """
/* Progress bar animation */
.progress-bar { width: 0% !important; transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.progress-bar.animated { width: var(--target-width) !important; }
"""

# ---------- 6. 页面交互 JS（原版不动） ----------
scroll_js = '''
(function() {
    var navButtons = document.querySelectorAll('nav button');
    var sections = document.querySelectorAll('section');

    var revealElements = document.querySelectorAll('[style*="opacity: 0"]');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(function(el) { observer.observe(el); });

    // 进度条动画 - 只触发一次
    var progressBars = document.querySelectorAll('.progress-bar');
    var animatedSet = new WeakSet();
    var progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !animatedSet.has(entry.target)) {
                animatedSet.add(entry.target);
                var fill = entry.target;
                setTimeout(function() { fill.classList.add('animated'); }, 80);
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });
    progressBars.forEach(function(bar) { progressObserver.observe(bar); });

    var sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var sectionIndex = Array.from(sections).indexOf(entry.target);
                if (sectionIndex >= 0 && sectionIndex < navButtons.length) {
                    updateNav(sectionIndex);
                }
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(function(section) { sectionObserver.observe(section); });

    function updateNav(activeIndex) {
        navButtons.forEach(function(btn, i) {
            var dot = btn.querySelector('span[class*="rounded-full"]') || btn.querySelector('span:last-child');
            var labels = btn.querySelectorAll('span[class*="whitespace-nowrap"]');
            if (dot) {
                if (i === activeIndex) {
                    dot.style.width = '20px';
                    dot.style.backgroundColor = 'rgb(34, 34, 34)';
                } else {
                    dot.style.width = '6px';
                    dot.style.backgroundColor = 'rgb(208, 208, 208)';
                }
                dot.style.transition = 'width 0.3s ease, background-color 0.3s ease';
            }
            labels.forEach(function(label) {
                if (i === activeIndex) {
                    label.style.opacity = '1';
                    label.style.transform = 'none';
                } else {
                    label.style.opacity = '0';
                    label.style.transform = 'translateX(8px)';
                }
            });
        });
    }

    navButtons.forEach(function(btn, i) {
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function() {
            if (sections[i]) { sections[i].scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    navButtons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            var sps = this.getElementsByTagName('span');
            for (var s of sps) {
                if (s.style.opacity !== '1') {
                    s.style.opacity = '1';
                    s.style.transform = 'none';
                    s.style.transition = 'opacity 0.2s, transform 0.2s';
                }
            }
        });
    });

    document.querySelectorAll('.transition-shadow, .transition-all').forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.06)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
})();
'''

# ---------- 7. 51LA 访客统计代码（V6 SDK，自动上报 IP/属地/UA/URL/时间） ----------
tracker_js = ('<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>\n'
              '    <script>LA.init({id:"' + LA_ID + '",ck:"' + LA_CK + '"})</script>')

# ---------- 8. 隐私提示页脚 ----------
privacy_footer = '''
    <div style="text-align:center;padding:28px 16px;font-size:12px;color:#c0c0c0;letter-spacing:0.02em;font-family:'Noto Sans SC',sans-serif;">
        本站记录基础访问日志（含IP属地），仅用于作品访问统计，不会对外泄露访客信息
    </div>
'''

# ---------- 9. 拼装输出 ----------
complete_html = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n'
complete_html += '    <meta charset="utf-8" />\n'
complete_html += '    <meta name="viewport" content="width=device-width, initial-scale=1" />\n'
complete_html += '    <meta name="color-scheme" content="light" />\n'
complete_html += '    <meta name="robots" content="noindex" />\n'
complete_html += '    <title>TangYiLing - 视觉设计全案 · Design Portfolio</title>\n'
complete_html += '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
complete_html += '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
complete_html += '    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet" />\n'
complete_html += '    <style>\n'
complete_html += '        ' + tailwind_css + '\n'
complete_html += extra_css + '\n'
complete_html += '    </style>\n'
complete_html += '    <style>\n'
complete_html += '        *, *::before, *::after { box-sizing: border-box; }\n'
complete_html += '        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }\n'
complete_html += '        body { font-family: "Noto Sans SC", "Alibaba PuHuiTi", sans-serif; background-color: #fff; color: #222; margin: 0; padding: 0; }\n'
complete_html += '        a, a:link, a:visited, a:hover, a:active { text-decoration: none !important; }\n'
complete_html += '    </style>\n'
complete_html += '    ' + tracker_js + '\n'
complete_html += '</head>\n<body>\n'
complete_html += '    <div id="container">\n'
complete_html += '        ' + container_html + '\n'
complete_html += '    </div>\n'
complete_html += privacy_footer + '\n'
complete_html += '    <script>\n' + scroll_js + '\n    </script>\n'
complete_html += '</body>\n</html>'

with open(OUTPUT_HTML, 'w', encoding='utf-8') as f:
    f.write(complete_html)

print(f'\nFile saved: {OUTPUT_HTML}')
print(f'Size: {len(complete_html)} chars')
print(f'51LA ID: {LA_ID}')
