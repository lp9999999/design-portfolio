# -*- coding: utf-8 -*-
"""
build_page.py — 作品集快速构建脚本（GitHub Pages 版）
与 rebuild_all.py 的区别：不做进度条/链接修复，仅提取正文 + 注入埋点 + 输出 index.html。
输出与 rebuild_all.py 一致：index.html（含访客埋点、隐私页脚）。
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

with open(INPUT_RENDERED, 'r', encoding='utf-8') as f:
    rendered = f.read()

pattern = r'<div id="container">(.*?)<noscript'
match = re.search(pattern, rendered, re.DOTALL)
if not match:
    print("ERROR: Could not find container content")
    exit(1)

container_html = html_mod.unescape(match.group(1))

# 链接修复（与 rebuild_all.py 一致）
container_html = container_html.replace('hover:text-blue-500 transition-colors', 'transition-colors')
container_html = container_html.replace('group-hover:w-full', '')

# 静态资源相对路径修正（防御性，防 GitHub Pages 子路径 404）
container_html = re.sub(r'(src|href)="/(?!/)', r'\1="./', container_html)

with open(INPUT_CSS, 'r', encoding='utf-8') as f:
    tailwind_css = f.read()
tailwind_css_clean = re.sub(r'@import"[^"]*fonts\.googleapis[^"]*";', '', tailwind_css)

print(f"Tailwind CSS size: {len(tailwind_css_clean)} chars")
print(f"Container HTML size: {len(container_html)} chars")

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

    var progressBars = document.querySelectorAll('.progress-bar');
    var animatedSet = new WeakSet();
    var progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !animatedSet.has(entry.target)) {
                animatedSet.add(entry.target);
                setTimeout(function() { entry.target.classList.add('animated'); }, 80);
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

# 51LA 访客统计代码（V6 SDK，自动上报 IP/属地/UA/URL/时间）
tracker_js = ('<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>\n'
              '    <script>LA.init({id:"' + LA_ID + '",ck:"' + LA_CK + '"})</script>')

privacy_footer = '''
    <div style="text-align:center;padding:28px 16px;font-size:12px;color:#c0c0c0;letter-spacing:0.02em;font-family:'Noto Sans SC',sans-serif;">
        本站记录基础访问日志（含IP属地），仅用于作品访问统计，不会对外泄露访客信息
    </div>
'''

complete_html = '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n'
complete_html += '    <meta charset="utf-8" />\n'
complete_html += '    <meta name="viewport" content="width=device-width, initial-scale=1" />\n'
complete_html += '    <meta name="color-scheme" content="light" />\n'
complete_html += '    <meta name="description" content="TangYiLing - Visual Design Portfolio" />\n'
complete_html += '    <meta name="robots" content="noindex" />\n'
complete_html += '    <title>TangYiLing - 视觉设计全案 · Design Portfolio</title>\n'
complete_html += '    <link rel="preconnect" href="https://fonts.googleapis.com" />\n'
complete_html += '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n'
complete_html += '    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet" />\n'
complete_html += '    <style>\n'
complete_html += '        /* Tailwind CSS v4 - MUST be first */\n'
complete_html += '        ' + tailwind_css_clean + '\n'
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

print(f'index.html saved to {OUTPUT_HTML}')
print(f'Total size: {len(complete_html)} chars')
print(f'51LA ID: {LA_ID}')
