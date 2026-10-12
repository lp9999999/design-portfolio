const nd = () => Promise.resolve().then(() => td), Hr = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: rt, jsx: c, jsxs: m } = Hr;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function ss(e) {
  const t = e?.props?._fgT, i = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && i;
}
function Ce(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function rs(e) {
  const { _fgT: t, _fgS: i, _fgB: n, _fgD: s, ...a } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...a,
    key: e.key
  }, a.children);
}
function Ye(e) {
  return ss(e) ? rs(e) : Ce(e) ? e.props.children : e;
}
const ke = globalThis.__GLOBALS__.React.Children, $r = {
  map(e, t, i) {
    return ke.map(e, (n, s) => {
      const a = Ye(n);
      return Ce(n) ? null : t.call(i, a, s);
    });
  },
  forEach(e, t, i) {
    ke.forEach(e, (n, s) => {
      if (Ce(n))
        return;
      const a = Ye(n);
      t.call(i, a, s);
    });
  },
  count(e) {
    let t = 0;
    return ke.forEach(e, (i) => {
      Ce(i) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return ke.forEach(e, (i) => {
      Ce(i) || t.push(Ye(i));
    }), t;
  },
  only(e) {
    const t = ke.only(e);
    return Ye(t);
  }
}, yt = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function zr(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let i = !1;
  for (let s = 0; s < yt.length; s++)
    if (yt[s] in e) {
      i = !0;
      break;
    }
  if (!i) return e;
  const n = {};
  for (let s = 0; s < t.length; s++) {
    const a = t[s];
    yt.indexOf(a) === -1 && (n[a] = e[a]);
  }
  return n;
}
const _i = globalThis.__GLOBALS__.React.cloneElement, Gr = (e, ...t) => {
  if (ss(e)) {
    const i = rs(e), n = t[0];
    return n != null && typeof n == "object" && (t = [
      zr(n),
      ...t.slice(1)
    ]), _i(i, ...t);
  }
  return _i(e, ...t);
};
({
  ...globalThis.__GLOBALS__.React
});
const { Component: as, createContext: Pe, createElement: at, createFactory: sd, createRef: rd, forwardRef: ei, Fragment: os, isValidElement: Xr, lazy: ad, memo: od, Profiler: ld, PureComponent: cd, startTransition: ud, StrictMode: dd, Suspense: hd, use: fd, useCallback: ht, useContext: O, useDebugValue: pd, useDeferredValue: md, useEffect: fe, useId: ti, useImperativeHandle: gd, useInsertionEffect: ls, useLayoutEffect: Yr, useMemo: he, useReducer: yd, useRef: te, useState: we, useSyncExternalStore: xd, useTransition: vd, version: bd, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: wd } = globalThis.__GLOBALS__.React, ii = Pe({});
function ni(e) {
  const t = te(null);
  return t.current === null && (t.current = e()), t.current;
}
const si = typeof window < "u", cs = si ? Yr : fe, ft = /* @__PURE__ */ Pe(null);
function ri(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ai(e, t) {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}
const Z = (e, t, i) => i > t ? t : i < e ? e : i;
let oi = () => {
};
const J = {}, us = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function ds(e) {
  return typeof e == "object" && e !== null;
}
const hs = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function li(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const G = /* @__NO_SIDE_EFFECTS__ */ (e) => e, qr = (e, t) => (i) => t(e(i)), Ke = (...e) => e.reduce(qr), Fe = /* @__NO_SIDE_EFFECTS__ */ (e, t, i) => {
  const n = t - e;
  return n === 0 ? 1 : (i - e) / n;
};
class ci {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ri(this.subscriptions, t), () => ai(this.subscriptions, t);
  }
  notify(t, i, n) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, i, n);
      else
        for (let a = 0; a < s; a++) {
          const r = this.subscriptions[a];
          r && r(t, i, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Y = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, z = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function fs(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const ps = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e, Zr = 1e-7, Jr = 12;
function Qr(e, t, i, n, s) {
  let a, r, o = 0;
  do
    r = t + (i - t) / 2, a = ps(r, n, s) - e, a > 0 ? i = r : t = r;
  while (Math.abs(a) > Zr && ++o < Jr);
  return r;
}
function He(e, t, i, n) {
  if (e === t && i === n)
    return G;
  const s = (a) => Qr(a, 0, 1, e, i);
  return (a) => a === 0 || a === 1 ? a : ps(s(a), t, n);
}
const ms = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, gs = (e) => (t) => 1 - e(1 - t), ys = /* @__PURE__ */ He(0.33, 1.53, 0.69, 0.99), ui = /* @__PURE__ */ gs(ys), xs = /* @__PURE__ */ ms(ui), vs = (e) => (e *= 2) < 1 ? 0.5 * ui(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), di = (e) => 1 - Math.sin(Math.acos(e)), bs = gs(di), ws = ms(di), ea = /* @__PURE__ */ He(0.42, 0, 1, 1), ta = /* @__PURE__ */ He(0, 0, 0.58, 1), Ts = /* @__PURE__ */ He(0.42, 0, 0.58, 1), ia = (e) => Array.isArray(e) && typeof e[0] != "number", Ss = (e) => Array.isArray(e) && typeof e[0] == "number", na = {
  linear: G,
  easeIn: ea,
  easeInOut: Ts,
  easeOut: ta,
  circIn: di,
  circInOut: ws,
  circOut: bs,
  backIn: ui,
  backInOut: xs,
  backOut: ys,
  anticipate: vs
}, sa = (e) => typeof e == "string", Ui = (e) => {
  if (Ss(e)) {
    oi(e.length === 4);
    const [t, i, n, s] = e;
    return He(t, i, n, s);
  } else if (sa(e))
    return na[e];
  return e;
}, qe = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function ra(e, t) {
  let i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, a = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    r.has(u) && (d.schedule(u), e()), u(o);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, h = !1, f = !1) => {
      const g = f && s ? i : n;
      return h && r.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), r.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, s) {
        a = !0;
        return;
      }
      s = !0, [i, n] = [n, i], i.forEach(l), i.clear(), s = !1, a && (a = !1, d.process(u));
    }
  };
  return d;
}
const aa = 40;
function Ps(e, t) {
  let i = !1, n = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, a = () => i = !0, r = qe.reduce((b, N) => (b[N] = ra(a), b), {}), { setup: o, read: l, resolveKeyframes: d, preUpdate: u, update: h, preRender: f, render: p, postRender: g } = r, v = () => {
    const b = J.useManualTiming ? s.timestamp : performance.now();
    i = !1, J.useManualTiming || (s.delta = n ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, aa), 1)), s.timestamp = b, s.isProcessing = !0, o.process(s), l.process(s), d.process(s), u.process(s), h.process(s), f.process(s), p.process(s), g.process(s), s.isProcessing = !1, i && t && (n = !1, e(v));
  }, w = () => {
    i = !0, n = !0, s.isProcessing || e(v);
  };
  return { schedule: qe.reduce((b, N) => {
    const S = r[N];
    return b[N] = (V, k = !1, A = !1) => (i || w(), S.schedule(V, k, A)), b;
  }, {}), cancel: (b) => {
    for (let N = 0; N < qe.length; N++)
      r[qe[N]].cancel(b);
  }, state: s, steps: r };
}
const { schedule: E, cancel: ie, state: F, steps: xt } = /* @__PURE__ */ Ps(typeof requestAnimationFrame < "u" ? requestAnimationFrame : G, !0);
let et;
function oa() {
  et = void 0;
}
const W = {
  now: () => (et === void 0 && W.set(F.isProcessing || J.useManualTiming ? F.timestamp : performance.now()), et),
  set: (e) => {
    et = e, queueMicrotask(oa);
  }
}, As = (e) => (t) => typeof t == "string" && t.startsWith(e), hi = /* @__PURE__ */ As("--"), la = /* @__PURE__ */ As("var(--"), fi = (e) => la(e) ? ca.test(e.split("/*")[0].trim()) : !1, ca = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ae = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Oe = {
  ...Ae,
  transform: (e) => Z(0, 1, e)
}, Ze = {
  ...Ae,
  default: 1
}, Me = (e) => Math.round(e * 1e5) / 1e5, pi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ua(e) {
  return e == null;
}
const da = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, mi = (e, t) => (i) => !!(typeof i == "string" && da.test(i) && i.startsWith(e) || t && !ua(i) && Object.prototype.hasOwnProperty.call(i, t)), Ns = (e, t, i) => (n) => {
  if (typeof n != "string")
    return n;
  const [s, a, r, o] = n.match(pi);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(a),
    [i]: parseFloat(r),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, ha = (e) => Z(0, 255, e), vt = {
  ...Ae,
  transform: (e) => Math.round(ha(e))
}, le = {
  test: /* @__PURE__ */ mi("rgb", "red"),
  parse: /* @__PURE__ */ Ns("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: i, alpha: n = 1 }) => "rgba(" + vt.transform(e) + ", " + vt.transform(t) + ", " + vt.transform(i) + ", " + Me(Oe.transform(n)) + ")"
};
function fa(e) {
  let t = "", i = "", n = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), n = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), n = e.substring(3, 4), s = e.substring(4, 5), t += t, i += i, n += n, s += s), {
    red: parseInt(t, 16),
    green: parseInt(i, 16),
    blue: parseInt(n, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Rt = {
  test: /* @__PURE__ */ mi("#"),
  parse: fa,
  transform: le.transform
}, $e = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ee = /* @__PURE__ */ $e("deg"), q = /* @__PURE__ */ $e("%"), P = /* @__PURE__ */ $e("px"), pa = /* @__PURE__ */ $e("vh"), ma = /* @__PURE__ */ $e("vw"), Wi = {
  ...q,
  parse: (e) => q.parse(e) / 100,
  transform: (e) => q.transform(e * 100)
}, me = {
  test: /* @__PURE__ */ mi("hsl", "hue"),
  parse: /* @__PURE__ */ Ns("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: i, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + q.transform(Me(t)) + ", " + q.transform(Me(i)) + ", " + Me(Oe.transform(n)) + ")"
}, R = {
  test: (e) => le.test(e) || Rt.test(e) || me.test(e),
  parse: (e) => le.test(e) ? le.parse(e) : me.test(e) ? me.parse(e) : Rt.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? le.transform(e) : me.transform(e),
  getAnimatableNone: (e) => {
    const t = R.parse(e);
    return t.alpha = 0, R.transform(t);
  }
}, ga = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function ya(e) {
  return isNaN(e) && typeof e == "string" && (e.match(pi)?.length || 0) + (e.match(ga)?.length || 0) > 0;
}
const Vs = "number", ks = "color", xa = "var", va = "var(", Ki = "${}", ba = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function je(e) {
  const t = e.toString(), i = [], n = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let a = 0;
  const o = t.replace(ba, (l) => (R.test(l) ? (n.color.push(a), s.push(ks), i.push(R.parse(l))) : l.startsWith(va) ? (n.var.push(a), s.push(xa), i.push(l)) : (n.number.push(a), s.push(Vs), i.push(parseFloat(l))), ++a, Ki)).split(Ki);
  return { values: i, split: o, indexes: n, types: s };
}
function Es(e) {
  return je(e).values;
}
function Cs(e) {
  const { split: t, types: i } = je(e), n = t.length;
  return (s) => {
    let a = "";
    for (let r = 0; r < n; r++)
      if (a += t[r], s[r] !== void 0) {
        const o = i[r];
        o === Vs ? a += Me(s[r]) : o === ks ? a += R.transform(s[r]) : a += s[r];
      }
    return a;
  };
}
const wa = (e) => typeof e == "number" ? 0 : R.test(e) ? R.getAnimatableNone(e) : e;
function Ta(e) {
  const t = Es(e);
  return Cs(e)(t.map(wa));
}
const ne = {
  test: ya,
  parse: Es,
  createTransformer: Cs,
  getAnimatableNone: Ta
};
function bt(e, t, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + (t - e) * 6 * i : i < 1 / 2 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
}
function Sa({ hue: e, saturation: t, lightness: i, alpha: n }) {
  e /= 360, t /= 100, i /= 100;
  let s = 0, a = 0, r = 0;
  if (!t)
    s = a = r = i;
  else {
    const o = i < 0.5 ? i * (1 + t) : i + t - i * t, l = 2 * i - o;
    s = bt(l, o, e + 1 / 3), a = bt(l, o, e), r = bt(l, o, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(a * 255),
    blue: Math.round(r * 255),
    alpha: n
  };
}
function ot(e, t) {
  return (i) => i > 0 ? t : e;
}
const C = (e, t, i) => e + (t - e) * i, wt = (e, t, i) => {
  const n = e * e, s = i * (t * t - n) + n;
  return s < 0 ? 0 : Math.sqrt(s);
}, Pa = [Rt, le, me], Aa = (e) => Pa.find((t) => t.test(e));
function Hi(e) {
  const t = Aa(e);
  if (!t)
    return !1;
  let i = t.parse(e);
  return t === me && (i = Sa(i)), i;
}
const $i = (e, t) => {
  const i = Hi(e), n = Hi(t);
  if (!i || !n)
    return ot(e, t);
  const s = { ...i };
  return (a) => (s.red = wt(i.red, n.red, a), s.green = wt(i.green, n.green, a), s.blue = wt(i.blue, n.blue, a), s.alpha = C(i.alpha, n.alpha, a), le.transform(s));
}, Lt = /* @__PURE__ */ new Set(["none", "hidden"]);
function Na(e, t) {
  return Lt.has(e) ? (i) => i <= 0 ? e : t : (i) => i >= 1 ? t : e;
}
function Va(e, t) {
  return (i) => C(e, t, i);
}
function gi(e) {
  return typeof e == "number" ? Va : typeof e == "string" ? fi(e) ? ot : R.test(e) ? $i : Ca : Array.isArray(e) ? Ds : typeof e == "object" ? R.test(e) ? $i : ka : ot;
}
function Ds(e, t) {
  const i = [...e], n = i.length, s = e.map((a, r) => gi(a)(a, t[r]));
  return (a) => {
    for (let r = 0; r < n; r++)
      i[r] = s[r](a);
    return i;
  };
}
function ka(e, t) {
  const i = { ...e, ...t }, n = {};
  for (const s in i)
    e[s] !== void 0 && t[s] !== void 0 && (n[s] = gi(e[s])(e[s], t[s]));
  return (s) => {
    for (const a in n)
      i[a] = n[a](s);
    return i;
  };
}
function Ea(e, t) {
  const i = [], n = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const a = t.types[s], r = e.indexes[a][n[a]], o = e.values[r] ?? 0;
    i[s] = o, n[a]++;
  }
  return i;
}
const Ca = (e, t) => {
  const i = ne.createTransformer(t), n = je(e), s = je(t);
  return n.indexes.var.length === s.indexes.var.length && n.indexes.color.length === s.indexes.color.length && n.indexes.number.length >= s.indexes.number.length ? Lt.has(e) && !s.values.length || Lt.has(t) && !n.values.length ? Na(e, t) : Ke(Ds(Ea(n, s), s.values), i) : ot(e, t);
};
function Ms(e, t, i) {
  return typeof e == "number" && typeof t == "number" && typeof i == "number" ? C(e, t, i) : gi(e)(e, t);
}
const Da = (e) => {
  const t = ({ timestamp: i }) => e(i);
  return {
    start: (i = !0) => E.update(t, i),
    stop: () => ie(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => F.isProcessing ? F.timestamp : W.now()
  };
}, Rs = (e, t, i = 10) => {
  let n = "";
  const s = Math.max(Math.round(t / i), 2);
  for (let a = 0; a < s; a++)
    n += Math.round(e(a / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
}, lt = 2e4;
function yi(e) {
  let t = 0;
  const i = 50;
  let n = e.next(t);
  for (; !n.done && t < lt; )
    t += i, n = e.next(t);
  return t >= lt ? 1 / 0 : t;
}
function Ma(e, t = 100, i) {
  const n = i({ ...e, keyframes: [0, t] }), s = Math.min(yi(n), lt);
  return {
    type: "keyframes",
    ease: (a) => n.next(s * a).value / t,
    duration: /* @__PURE__ */ z(s)
  };
}
const Ra = 5;
function Ls(e, t, i) {
  const n = Math.max(t - Ra, 0);
  return fs(i - e(n), t - n);
}
const D = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Tt = 1e-3;
function La({ duration: e = D.duration, bounce: t = D.bounce, velocity: i = D.velocity, mass: n = D.mass }) {
  let s, a, r = 1 - t;
  r = Z(D.minDamping, D.maxDamping, r), e = Z(D.minDuration, D.maxDuration, /* @__PURE__ */ z(e)), r < 1 ? (s = (d) => {
    const u = d * r, h = u * e, f = u - i, p = Bt(d, r), g = Math.exp(-h);
    return Tt - f / p * g;
  }, a = (d) => {
    const h = d * r * e, f = h * i + i, p = Math.pow(r, 2) * Math.pow(d, 2) * e, g = Math.exp(-h), v = Bt(Math.pow(d, 2), r);
    return (-s(d) + Tt > 0 ? -1 : 1) * ((f - p) * g) / v;
  }) : (s = (d) => {
    const u = Math.exp(-d * e), h = (d - i) * e + 1;
    return -Tt + u * h;
  }, a = (d) => {
    const u = Math.exp(-d * e), h = (i - d) * (e * e);
    return u * h;
  });
  const o = 5 / e, l = Ia(s, a, o);
  if (e = /* @__PURE__ */ Y(e), isNaN(l))
    return {
      stiffness: D.stiffness,
      damping: D.damping,
      duration: e
    };
  {
    const d = Math.pow(l, 2) * n;
    return {
      stiffness: d,
      damping: r * 2 * Math.sqrt(n * d),
      duration: e
    };
  }
}
const Ba = 12;
function Ia(e, t, i) {
  let n = i;
  for (let s = 1; s < Ba; s++)
    n = n - e(n) / t(n);
  return n;
}
function Bt(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Fa = ["duration", "bounce"], Oa = ["stiffness", "damping", "mass"];
function zi(e, t) {
  return t.some((i) => e[i] !== void 0);
}
function ja(e) {
  let t = {
    velocity: D.velocity,
    stiffness: D.stiffness,
    damping: D.damping,
    mass: D.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!zi(e, Oa) && zi(e, Fa))
    if (e.visualDuration) {
      const i = e.visualDuration, n = 2 * Math.PI / (i * 1.2), s = n * n, a = 2 * Z(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: D.mass,
        stiffness: s,
        damping: a
      };
    } else {
      const i = La(e);
      t = {
        ...t,
        ...i,
        mass: D.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function ct(e = D.visualDuration, t = D.bounce) {
  const i = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: n, restDelta: s } = i;
  const a = i.keyframes[0], r = i.keyframes[i.keyframes.length - 1], o = { done: !1, value: a }, { stiffness: l, damping: d, mass: u, duration: h, velocity: f, isResolvedFromDuration: p } = ja({
    ...i,
    velocity: -/* @__PURE__ */ z(i.velocity || 0)
  }), g = f || 0, v = d / (2 * Math.sqrt(l * u)), w = r - a, x = /* @__PURE__ */ z(Math.sqrt(l / u)), T = Math.abs(w) < 5;
  n || (n = T ? D.restSpeed.granular : D.restSpeed.default), s || (s = T ? D.restDelta.granular : D.restDelta.default);
  let b;
  if (v < 1) {
    const S = Bt(x, v);
    b = (V) => {
      const k = Math.exp(-v * x * V);
      return r - k * ((g + v * x * w) / S * Math.sin(S * V) + w * Math.cos(S * V));
    };
  } else if (v === 1)
    b = (S) => r - Math.exp(-x * S) * (w + (g + x * w) * S);
  else {
    const S = x * Math.sqrt(v * v - 1);
    b = (V) => {
      const k = Math.exp(-v * x * V), A = Math.min(S * V, 300);
      return r - k * ((g + v * x * w) * Math.sinh(A) + S * w * Math.cosh(A)) / S;
    };
  }
  const N = {
    calculatedDuration: p && h || null,
    next: (S) => {
      const V = b(S);
      if (p)
        o.done = S >= h;
      else {
        let k = S === 0 ? g : 0;
        v < 1 && (k = S === 0 ? /* @__PURE__ */ Y(g) : Ls(b, S, V));
        const A = Math.abs(k) <= n, B = Math.abs(r - V) <= s;
        o.done = A && B;
      }
      return o.value = o.done ? r : V, o;
    },
    toString: () => {
      const S = Math.min(yi(N), lt), V = Rs((k) => N.next(S * k).value, S, 30);
      return S + "ms " + V;
    },
    toTransition: () => {
    }
  };
  return N;
}
ct.applyToOptions = (e) => {
  const t = Ma(e, 100, ct);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Y(t.duration), e.type = "keyframes", e;
};
function It({ keyframes: e, velocity: t = 0, power: i = 0.8, timeConstant: n = 325, bounceDamping: s = 10, bounceStiffness: a = 500, modifyTarget: r, min: o, max: l, restDelta: d = 0.5, restSpeed: u }) {
  const h = e[0], f = {
    done: !1,
    value: h
  }, p = (A) => o !== void 0 && A < o || l !== void 0 && A > l, g = (A) => o === void 0 ? l : l === void 0 || Math.abs(o - A) < Math.abs(l - A) ? o : l;
  let v = i * t;
  const w = h + v, x = r === void 0 ? w : r(w);
  x !== w && (v = x - h);
  const T = (A) => -v * Math.exp(-A / n), b = (A) => x + T(A), N = (A) => {
    const B = T(A), _ = b(A);
    f.done = Math.abs(B) <= d, f.value = f.done ? x : _;
  };
  let S, V;
  const k = (A) => {
    p(f.value) && (S = A, V = ct({
      keyframes: [f.value, g(f.value)],
      velocity: Ls(b, A, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: a,
      restDelta: d,
      restSpeed: u
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (A) => {
      let B = !1;
      return !V && S === void 0 && (B = !0, N(A), k(A)), S !== void 0 && A >= S ? V.next(A - S) : (!B && N(A), f);
    }
  };
}
function _a(e, t, i) {
  const n = [], s = i || J.mix || Ms, a = e.length - 1;
  for (let r = 0; r < a; r++) {
    let o = s(e[r], e[r + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[r] || G : t;
      o = Ke(l, o);
    }
    n.push(o);
  }
  return n;
}
function Ua(e, t, { clamp: i = !0, ease: n, mixer: s } = {}) {
  const a = e.length;
  if (oi(a === t.length), a === 1)
    return () => t[0];
  if (a === 2 && t[0] === t[1])
    return () => t[1];
  const r = e[0] === e[1];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = _a(t, n, s), l = o.length, d = (u) => {
    if (r && u < e[0])
      return t[0];
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ Fe(e[h], e[h + 1], u);
    return o[h](f);
  };
  return i ? (u) => d(Z(e[0], e[a - 1], u)) : d;
}
function Wa(e, t) {
  const i = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const s = /* @__PURE__ */ Fe(0, t, n);
    e.push(C(i, 1, s));
  }
}
function Ka(e) {
  const t = [0];
  return Wa(t, e.length - 1), t;
}
function Ha(e, t) {
  return e.map((i) => i * t);
}
function $a(e, t) {
  return e.map(() => t || Ts).splice(0, e.length - 1);
}
function Re({ duration: e = 300, keyframes: t, times: i, ease: n = "easeInOut" }) {
  const s = ia(n) ? n.map(Ui) : Ui(n), a = {
    done: !1,
    value: t[0]
  }, r = Ha(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === t.length ? i : Ka(t),
    e
  ), o = Ua(r, t, {
    ease: Array.isArray(s) ? s : $a(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = o(l), a.done = l >= e, a)
  };
}
const za = (e) => e !== null;
function xi(e, { repeat: t, repeatType: i = "loop" }, n, s = 1) {
  const a = e.filter(za), o = s < 0 || t && i !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
  return !o || n === void 0 ? a[o] : n;
}
const Ga = {
  decay: It,
  inertia: It,
  tween: Re,
  keyframes: Re,
  spring: ct
};
function Bs(e) {
  typeof e.type == "string" && (e.type = Ga[e.type]);
}
class vi {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, i) {
    return this.finished.then(t, i);
  }
}
const Xa = (e) => e / 100;
class bi extends vi {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: i } = this.options;
      i && i.updatedAt !== W.now() && this.tick(W.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Bs(t);
    const { type: i = Re, repeat: n = 0, repeatDelay: s = 0, repeatType: a, velocity: r = 0 } = t;
    let { keyframes: o } = t;
    const l = i || Re;
    l !== Re && typeof o[0] != "number" && (this.mixKeyframes = Ke(Xa, Ms(o[0], o[1])), o = [0, 100]);
    const d = l({ ...t, keyframes: o });
    a === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...o].reverse(),
      velocity: -r
    })), d.calculatedDuration === null && (d.calculatedDuration = yi(d));
    const { calculatedDuration: u } = d;
    this.calculatedDuration = u, this.resolvedDuration = u + s, this.totalDuration = this.resolvedDuration * (n + 1) - s, this.generator = d;
  }
  updateTime(t) {
    const i = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(t, i = !1) {
    const { generator: n, totalDuration: s, mixKeyframes: a, mirroredGenerator: r, resolvedDuration: o, calculatedDuration: l } = this;
    if (this.startTime === null)
      return n.next(0);
    const { delay: d = 0, keyframes: u, repeat: h, repeatType: f, repeatDelay: p, type: g, onUpdate: v, finalKeyframe: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)), i ? this.currentTime = t : this.updateTime(t);
    const x = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), T = this.playbackSpeed >= 0 ? x < 0 : x > s;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let b = this.currentTime, N = n;
    if (h) {
      const A = Math.min(this.currentTime, s) / o;
      let B = Math.floor(A), _ = A % 1;
      !_ && A >= 1 && (_ = 1), _ === 1 && B--, B = Math.min(B, h + 1), !!(B % 2) && (f === "reverse" ? (_ = 1 - _, p && (_ -= p / o)) : f === "mirror" && (N = r)), b = Z(0, 1, _) * o;
    }
    const S = T ? { done: !1, value: u[0] } : N.next(b);
    a && (S.value = a(S.value));
    let { done: V } = S;
    !T && l !== null && (V = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && V);
    return k && g !== It && (S.value = xi(u, this.options, w, this.speed)), v && v(S.value), k && this.finish(), S;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, i) {
    return this.finished.then(t, i);
  }
  get duration() {
    return /* @__PURE__ */ z(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ z(t);
  }
  get time() {
    return /* @__PURE__ */ z(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Y(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(W.now());
    const i = this.playbackSpeed !== t;
    this.playbackSpeed = t, i && (this.time = /* @__PURE__ */ z(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Da, startTime: i } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), this.options.onPlay?.();
    const n = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = i ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(W.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function Ya(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const ce = (e) => e * 180 / Math.PI, Ft = (e) => {
  const t = ce(Math.atan2(e[1], e[0]));
  return Ot(t);
}, qa = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Ft,
  rotateZ: Ft,
  skewX: (e) => ce(Math.atan(e[1])),
  skewY: (e) => ce(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ot = (e) => (e = e % 360, e < 0 && (e += 360), e), Gi = Ft, Xi = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Yi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Za = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Xi,
  scaleY: Yi,
  scale: (e) => (Xi(e) + Yi(e)) / 2,
  rotateX: (e) => Ot(ce(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Ot(ce(Math.atan2(-e[2], e[0]))),
  rotateZ: Gi,
  rotate: Gi,
  skewX: (e) => ce(Math.atan(e[4])),
  skewY: (e) => ce(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function jt(e) {
  return e.includes("scale") ? 1 : 0;
}
function _t(e, t) {
  if (!e || e === "none")
    return jt(t);
  const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, s;
  if (i)
    n = Za, s = i;
  else {
    const o = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    n = qa, s = o;
  }
  if (!s)
    return jt(t);
  const a = n[t], r = s[1].split(",").map(Qa);
  return typeof a == "function" ? a(r) : r[a];
}
const Ja = (e, t) => {
  const { transform: i = "none" } = getComputedStyle(e);
  return _t(i, t);
};
function Qa(e) {
  return parseFloat(e.trim());
}
const Ne = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ve = new Set(Ne), qi = (e) => e === Ae || e === P, eo = /* @__PURE__ */ new Set(["x", "y", "z"]), to = Ne.filter((e) => !eo.has(e));
function io(e) {
  const t = [];
  return to.forEach((i) => {
    const n = e.getValue(i);
    n !== void 0 && (t.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
  }), t;
}
const ue = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(i),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(i),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => _t(t, "x"),
  y: (e, { transform: t }) => _t(t, "y")
};
ue.translateX = ue.x;
ue.translateY = ue.y;
const de = /* @__PURE__ */ new Set();
let Ut = !1, Wt = !1, Kt = !1;
function Is() {
  if (Wt) {
    const e = Array.from(de).filter((n) => n.needsMeasurement), t = new Set(e.map((n) => n.element)), i = /* @__PURE__ */ new Map();
    t.forEach((n) => {
      const s = io(n);
      s.length && (i.set(n, s), n.render());
    }), e.forEach((n) => n.measureInitialState()), t.forEach((n) => {
      n.render();
      const s = i.get(n);
      s && s.forEach(([a, r]) => {
        n.getValue(a)?.set(r);
      });
    }), e.forEach((n) => n.measureEndState()), e.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  Wt = !1, Ut = !1, de.forEach((e) => e.complete(Kt)), de.clear();
}
function Fs() {
  de.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Wt = !0);
  });
}
function no() {
  Kt = !0, Fs(), Is(), Kt = !1;
}
class wi {
  constructor(t, i, n, s, a, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = i, this.name = n, this.motionValue = s, this.element = a, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (de.add(this), Ut || (Ut = !0, E.read(Fs), E.resolveKeyframes(Is))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: i, element: n, motionValue: s } = this;
    if (t[0] === null) {
      const a = s?.get(), r = t[t.length - 1];
      if (a !== void 0)
        t[0] = a;
      else if (n && i) {
        const o = n.readValue(i, r);
        o != null && (t[0] = o);
      }
      t[0] === void 0 && (t[0] = r), s && a === void 0 && s.set(t[0]);
    }
    Ya(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), de.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (de.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const so = (e) => e.startsWith("--");
function ro(e, t, i) {
  so(t) ? e.style.setProperty(t, i) : e.style[t] = i;
}
const ao = /* @__PURE__ */ li(() => window.ScrollTimeline !== void 0), oo = {};
function lo(e, t) {
  const i = /* @__PURE__ */ li(e);
  return () => oo[t] ?? i();
}
const Os = /* @__PURE__ */ lo(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), De = ([e, t, i, n]) => `cubic-bezier(${e}, ${t}, ${i}, ${n})`, Zi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ De([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ De([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ De([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ De([0.33, 1.53, 0.69, 0.99])
};
function js(e, t) {
  if (e)
    return typeof e == "function" ? Os() ? Rs(e, t) : "ease-out" : Ss(e) ? De(e) : Array.isArray(e) ? e.map((i) => js(i, t) || Zi.easeOut) : Zi[e];
}
function co(e, t, i, { delay: n = 0, duration: s = 300, repeat: a = 0, repeatType: r = "loop", ease: o = "easeOut", times: l } = {}, d = void 0) {
  const u = {
    [t]: i
  };
  l && (u.offset = l);
  const h = js(o, s);
  Array.isArray(h) && (u.easing = h);
  const f = {
    delay: n,
    duration: s,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: a + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return d && (f.pseudoElement = d), e.animate(u, f);
}
function _s(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function uo({ type: e, ...t }) {
  return _s(e) && Os() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class ho extends vi {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: i, name: n, keyframes: s, pseudoElement: a, allowFlatten: r = !1, finalKeyframe: o, onComplete: l } = t;
    this.isPseudoElement = !!a, this.allowFlatten = r, this.options = t, oi(typeof t.type != "string");
    const d = uo(t);
    this.animation = co(i, n, s, d, a), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !a) {
        const u = xi(s, this.options, o, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : ro(i, n, u), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ z(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ z(t);
  }
  get time() {
    return /* @__PURE__ */ z(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Y(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && ao() ? (this.animation.timeline = t, G) : i(this);
  }
}
const Us = {
  anticipate: vs,
  backInOut: xs,
  circInOut: ws
};
function fo(e) {
  return e in Us;
}
function po(e) {
  typeof e.ease == "string" && fo(e.ease) && (e.ease = Us[e.ease]);
}
const Ji = 10;
class mo extends ho {
  constructor(t) {
    po(t), Bs(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: i, onUpdate: n, onComplete: s, element: a, ...r } = this.options;
    if (!i)
      return;
    if (t !== void 0) {
      i.set(t);
      return;
    }
    const o = new bi({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ Y(this.finishedTime ?? this.time);
    i.setWithVelocity(o.sample(l - Ji).value, o.sample(l).value, Ji), o.stop();
  }
}
const Qi = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(ne.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function go(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let i = 0; i < e.length; i++)
    if (e[i] !== t)
      return !0;
}
function yo(e, t, i, n) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const a = e[e.length - 1], r = Qi(s, t), o = Qi(a, t);
  return !r || !o ? !1 : go(e) || (i === "spring" || _s(i)) && n;
}
function Ht(e) {
  e.duration = 0, e.type = "keyframes";
}
const xo = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), vo = /* @__PURE__ */ li(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function bo(e) {
  const { motionValue: t, name: i, repeatDelay: n, repeatType: s, damping: a, type: r } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: d } = t.owner.getProps();
  return vo() && i && xo.has(i) && (i !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !n && s !== "mirror" && a !== 0 && r !== "inertia";
}
const wo = 40;
class To extends vi {
  constructor({ autoplay: t = !0, delay: i = 0, type: n = "keyframes", repeat: s = 0, repeatDelay: a = 0, repeatType: r = "loop", keyframes: o, name: l, motionValue: d, element: u, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = W.now();
    const f = {
      autoplay: t,
      delay: i,
      type: n,
      repeat: s,
      repeatDelay: a,
      repeatType: r,
      name: l,
      motionValue: d,
      element: u,
      ...h
    }, p = u?.KeyframeResolver || wi;
    this.keyframeResolver = new p(o, (g, v, w) => this.onKeyframesResolved(g, v, f, !w), l, d, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, i, n, s) {
    this.keyframeResolver = void 0;
    const { name: a, type: r, velocity: o, delay: l, isHandoff: d, onUpdate: u } = n;
    this.resolvedAt = W.now(), yo(t, a, r, o) || ((J.instantAnimations || !l) && u?.(xi(t, n, i)), t[0] = t[t.length - 1], Ht(n), n.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > wo ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: i,
      ...n,
      keyframes: t
    }, p = !d && bo(f) ? new mo({
      ...f,
      element: f.motionValue.owner.current
    }) : new bi(f);
    p.finished.then(() => this.notifyFinished()).catch(G), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, i) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), no()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const So = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Po(e) {
  const t = So.exec(e);
  if (!t)
    return [,];
  const [, i, n, s] = t;
  return [`--${i ?? n}`, s];
}
function Ws(e, t, i = 1) {
  const [n, s] = Po(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  if (a) {
    const r = a.trim();
    return us(r) ? parseFloat(r) : r;
  }
  return fi(s) ? Ws(s, t, i + 1) : s;
}
function Ti(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const Ks = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ne
]), Ao = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Hs = (e) => (t) => t.test(e), $s = [Ae, P, q, ee, ma, pa, Ao], en = (e) => $s.find(Hs(e));
function No(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || hs(e) : !0;
}
const Vo = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ko(e) {
  const [t, i] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = i.match(pi) || [];
  if (!n)
    return e;
  const s = i.replace(n, "");
  let a = Vo.has(t) ? 1 : 0;
  return n !== i && (a *= 100), t + "(" + a + s + ")";
}
const Eo = /\b([a-z-]*)\(.*?\)/gu, $t = {
  ...ne,
  getAnimatableNone: (e) => {
    const t = e.match(Eo);
    return t ? t.map(ko).join(" ") : e;
  }
}, tn = {
  ...Ae,
  transform: Math.round
}, Co = {
  rotate: ee,
  rotateX: ee,
  rotateY: ee,
  rotateZ: ee,
  scale: Ze,
  scaleX: Ze,
  scaleY: Ze,
  scaleZ: Ze,
  skew: ee,
  skewX: ee,
  skewY: ee,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: Oe,
  originX: Wi,
  originY: Wi,
  originZ: P
}, Si = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...Co,
  zIndex: tn,
  // SVG
  fillOpacity: Oe,
  strokeOpacity: Oe,
  numOctaves: tn
}, Do = {
  ...Si,
  // Color props
  color: R,
  backgroundColor: R,
  outlineColor: R,
  fill: R,
  stroke: R,
  // Border props
  borderColor: R,
  borderTopColor: R,
  borderRightColor: R,
  borderBottomColor: R,
  borderLeftColor: R,
  filter: $t,
  WebkitFilter: $t
}, zs = (e) => Do[e];
function Gs(e, t) {
  let i = zs(e);
  return i !== $t && (i = ne), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0;
}
const Mo = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ro(e, t, i) {
  let n = 0, s;
  for (; n < e.length && !s; ) {
    const a = e[n];
    typeof a == "string" && !Mo.has(a) && je(a).values.length && (s = e[n]), n++;
  }
  if (s && i)
    for (const a of t)
      e[a] = Gs(i, s);
}
class Lo extends wi {
  constructor(t, i, n, s, a) {
    super(t, i, n, s, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: i, name: n } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let d = t[l];
      if (typeof d == "string" && (d = d.trim(), fi(d))) {
        const u = Ws(d, i.current);
        u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Ks.has(n) || t.length !== 2)
      return;
    const [s, a] = t, r = en(s), o = en(a);
    if (r !== o)
      if (qi(r) && qi(o))
        for (let l = 0; l < t.length; l++) {
          const d = t[l];
          typeof d == "string" && (t[l] = parseFloat(d));
        }
      else ue[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: i } = this, n = [];
    for (let s = 0; s < t.length; s++)
      (t[s] === null || No(t[s])) && n.push(s);
    n.length && Ro(t, n, i);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: i, name: n } = this;
    if (!t || !t.current)
      return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ue[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i[0] = this.measuredOrigin;
    const s = i[i.length - 1];
    s !== void 0 && t.getValue(n, s).jump(s, !1);
  }
  measureEndState() {
    const { element: t, name: i, unresolvedKeyframes: n } = this;
    if (!t || !t.current)
      return;
    const s = t.getValue(i);
    s && s.jump(this.measuredOrigin, !1);
    const a = n.length - 1, r = n[a];
    n[a] = ue[i](t.measureViewportBox(), window.getComputedStyle(t.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([o, l]) => {
      t.getValue(o).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Bo(e, t, i) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let n = document;
    const s = i?.[e] ?? n.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
const Xs = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Ys(e) {
  return ds(e) && "offsetHeight" in e;
}
const nn = 30, Io = (e) => !isNaN(parseFloat(e));
class Fo {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
      const s = W.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const a of this.dependents)
          a.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = i.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = W.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Io(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, i) {
    this.events[t] || (this.events[t] = new ci());
    const n = this.events[t].add(i);
    return t === "change" ? () => {
      n(), E.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, i) {
    this.passiveEffect = t, this.stopPassiveEffect = i;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, i, n) {
    this.set(i), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, i = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = W.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > nn)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, nn);
    return fs(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = t(i), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Te(e, t) {
  return new Fo(e, t);
}
const { schedule: Pi } = /* @__PURE__ */ Ps(queueMicrotask, !1), X = {
  x: !1,
  y: !1
};
function qs() {
  return X.x || X.y;
}
function Oo(e) {
  return e === "x" || e === "y" ? X[e] ? null : (X[e] = !0, () => {
    X[e] = !1;
  }) : X.x || X.y ? null : (X.x = X.y = !0, () => {
    X.x = X.y = !1;
  });
}
function Zs(e, t) {
  const i = Bo(e), n = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: n.signal
  };
  return [i, s, () => n.abort()];
}
function sn(e) {
  return !(e.pointerType === "touch" || qs());
}
function jo(e, t, i = {}) {
  const [n, s, a] = Zs(e, i), r = (o) => {
    if (!sn(o))
      return;
    const { target: l } = o, d = t(l, o);
    if (typeof d != "function" || !l)
      return;
    const u = (h) => {
      sn(h) && (d(h), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, s);
  };
  return n.forEach((o) => {
    o.addEventListener("pointerenter", r, s);
  }), a;
}
const Js = (e, t) => t ? e === t ? !0 : Js(e, t.parentElement) : !1, Ai = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, _o = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Uo(e) {
  return _o.has(e.tagName) || e.tabIndex !== -1;
}
const tt = /* @__PURE__ */ new WeakSet();
function rn(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function St(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Wo = (e, t) => {
  const i = e.currentTarget;
  if (!i)
    return;
  const n = rn(() => {
    if (tt.has(i))
      return;
    St(i, "down");
    const s = rn(() => {
      St(i, "up");
    }), a = () => St(i, "cancel");
    i.addEventListener("keyup", s, t), i.addEventListener("blur", a, t);
  });
  i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t);
};
function an(e) {
  return Ai(e) && !qs();
}
function Ko(e, t, i = {}) {
  const [n, s, a] = Zs(e, i), r = (o) => {
    const l = o.currentTarget;
    if (!an(o))
      return;
    tt.add(l);
    const d = t(l, o), u = (p, g) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), tt.has(l) && tt.delete(l), an(p) && typeof d == "function" && d(p, { success: g });
    }, h = (p) => {
      u(p, l === window || l === document || i.useGlobalTarget || Js(l, p.target));
    }, f = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", h, s), window.addEventListener("pointercancel", f, s);
  };
  return n.forEach((o) => {
    (i.useGlobalTarget ? window : o).addEventListener("pointerdown", r, s), Ys(o) && (o.addEventListener("focus", (d) => Wo(d, s)), !Uo(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
  }), a;
}
function Qs(e) {
  return ds(e) && "ownerSVGElement" in e;
}
function Ho(e) {
  return Qs(e) && e.tagName === "svg";
}
const j = (e) => !!(e && e.getVelocity), $o = [...$s, R, ne], zo = (e) => $o.find(Hs(e)), Ni = Pe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function on(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Go(...e) {
  return (t) => {
    let i = !1;
    const n = e.map((s) => {
      const a = on(s, t);
      return !i && typeof a == "function" && (i = !0), a;
    });
    if (i)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const a = n[s];
          typeof a == "function" ? a() : on(e[s], null);
        }
      };
  };
}
function Xo(...e) {
  return ht(Go(...e), e);
}
class Yo extends as {
  getSnapshotBeforeUpdate(t) {
    const i = this.props.childRef.current;
    if (i && t.isPresent && !this.props.isPresent) {
      const n = i.offsetParent, s = Ys(n) && n.offsetWidth || 0, a = this.props.sizeRef.current;
      a.height = i.offsetHeight || 0, a.width = i.offsetWidth || 0, a.top = i.offsetTop, a.left = i.offsetLeft, a.right = s - a.width - a.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function qo({ children: e, isPresent: t, anchorX: i, root: n }) {
  const s = ti(), a = te(null), r = te({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: o } = O(Ni), l = Xo(a, e?.ref);
  return ls(() => {
    const { width: d, height: u, top: h, left: f, right: p } = r.current;
    if (t || !a.current || !d || !u)
      return;
    const g = i === "left" ? `left: ${f}` : `right: ${p}`;
    a.current.dataset.motionPopId = s;
    const v = document.createElement("style");
    o && (v.nonce = o);
    const w = n ?? document.head;
    return w.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${u}px !important;
            ${g}px !important;
            top: ${h}px !important;
          }
        `), () => {
      w.contains(v) && w.removeChild(v);
    };
  }, [t]), c(Yo, { isPresent: t, childRef: a, sizeRef: r, children: Gr(e, { ref: l }) });
}
const Zo = ({ children: e, initial: t, isPresent: i, onExitComplete: n, custom: s, presenceAffectsLayout: a, mode: r, anchorX: o, root: l }) => {
  const d = ni(Jo), u = ti();
  let h = !0, f = he(() => (h = !1, {
    id: u,
    initial: t,
    isPresent: i,
    custom: s,
    onExitComplete: (p) => {
      d.set(p, !0);
      for (const g of d.values())
        if (!g)
          return;
      n && n();
    },
    register: (p) => (d.set(p, !1), () => d.delete(p))
  }), [i, d, n]);
  return a && h && (f = { ...f }), he(() => {
    d.forEach((p, g) => d.set(g, !1));
  }, [i]), fe(() => {
    !i && !d.size && n && n();
  }, [i]), r === "popLayout" && (e = c(qo, { isPresent: i, anchorX: o, root: l, children: e })), c(ft.Provider, { value: f, children: e });
};
function Jo() {
  return /* @__PURE__ */ new Map();
}
function er(e = !0) {
  const t = O(ft);
  if (t === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: n, register: s } = t, a = ti();
  fe(() => {
    if (e)
      return s(a);
  }, [e]);
  const r = ht(() => e && n && n(a), [a, n, e]);
  return !i && n ? [!1, r] : [!0];
}
const Je = (e) => e.key || "";
function ln(e) {
  const t = [];
  return $r.forEach(e, (i) => {
    Xr(i) && t.push(i);
  }), t;
}
const Qo = ({ children: e, custom: t, initial: i = !0, onExitComplete: n, presenceAffectsLayout: s = !0, mode: a = "sync", propagate: r = !1, anchorX: o = "left", root: l }) => {
  const [d, u] = er(r), h = he(() => ln(e), [e]), f = r && !d ? [] : h.map(Je), p = te(!0), g = te(h), v = ni(() => /* @__PURE__ */ new Map()), [w, x] = we(h), [T, b] = we(h);
  cs(() => {
    p.current = !1, g.current = h;
    for (let V = 0; V < T.length; V++) {
      const k = Je(T[V]);
      f.includes(k) ? v.delete(k) : v.get(k) !== !0 && v.set(k, !1);
    }
  }, [T, f.length, f.join("-")]);
  const N = [];
  if (h !== w) {
    let V = [...h];
    for (let k = 0; k < T.length; k++) {
      const A = T[k], B = Je(A);
      f.includes(B) || (V.splice(k, 0, A), N.push(A));
    }
    return a === "wait" && N.length && (V = N), b(ln(V)), x(h), null;
  }
  const { forceRender: S } = O(ii);
  return c(rt, { children: T.map((V) => {
    const k = Je(V), A = r && !d ? !1 : h === T || f.includes(k), B = () => {
      if (v.has(k))
        v.set(k, !0);
      else
        return;
      let _ = !0;
      v.forEach((Q) => {
        Q || (_ = !1);
      }), _ && (S?.(), b(g.current), r && u?.(), n && n());
    };
    return c(Zo, { isPresent: A, initial: !p.current || i ? void 0 : !1, custom: t, presenceAffectsLayout: s, mode: a, root: l, onExitComplete: A ? void 0 : B, anchorX: o, children: V }, k);
  }) });
}, tr = Pe({ strict: !1 }), cn = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Se = {};
for (const e in cn)
  Se[e] = {
    isEnabled: (t) => cn[e].some((i) => !!t[i])
  };
function el(e) {
  for (const t in e)
    Se[t] = {
      ...Se[t],
      ...e[t]
    };
}
const tl = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ut(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tl.has(e);
}
let ir = (e) => !ut(e);
function il(e) {
  typeof e == "function" && (ir = (t) => t.startsWith("on") ? !ut(t) : e(t));
}
try {
  il(require("@emotion/is-prop-valid").default);
} catch {
}
function nl(e, t, i) {
  const n = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (ir(s) || i === !0 && ut(s) || !t && !ut(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (n[s] = e[s]);
  return n;
}
const pt = /* @__PURE__ */ Pe({});
function mt(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function _e(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Vi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ki = ["initial", ...Vi];
function gt(e) {
  return mt(e.animate) || ki.some((t) => _e(e[t]));
}
function nr(e) {
  return !!(gt(e) || e.variants);
}
function sl(e, t) {
  if (gt(e)) {
    const { initial: i, animate: n } = e;
    return {
      initial: i === !1 || _e(i) ? i : void 0,
      animate: _e(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function rl(e) {
  const { initial: t, animate: i } = sl(e, O(pt));
  return he(() => ({ initial: t, animate: i }), [un(t), un(i)]);
}
function un(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ue = {};
function al(e) {
  for (const t in e)
    Ue[t] = e[t], hi(t) && (Ue[t].isCSSVariable = !0);
}
function sr(e, { layout: t, layoutId: i }) {
  return Ve.has(e) || e.startsWith("origin") || (t || i !== void 0) && (!!Ue[e] || e === "opacity");
}
const ol = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, ll = Ne.length;
function cl(e, t, i) {
  let n = "", s = !0;
  for (let a = 0; a < ll; a++) {
    const r = Ne[a], o = e[r];
    if (o === void 0)
      continue;
    let l = !0;
    if (typeof o == "number" ? l = o === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(o) === 0, !l || i) {
      const d = Xs(o, Si[r]);
      if (!l) {
        s = !1;
        const u = ol[r] || r;
        n += `${u}(${d}) `;
      }
      i && (t[r] = d);
    }
  }
  return n = n.trim(), i ? n = i(t, s ? "" : n) : s && (n = "none"), n;
}
function Ei(e, t, i) {
  const { style: n, vars: s, transformOrigin: a } = e;
  let r = !1, o = !1;
  for (const l in t) {
    const d = t[l];
    if (Ve.has(l)) {
      r = !0;
      continue;
    } else if (hi(l)) {
      s[l] = d;
      continue;
    } else {
      const u = Xs(d, Si[l]);
      l.startsWith("origin") ? (o = !0, a[l] = u) : n[l] = u;
    }
  }
  if (t.transform || (r || i ? n.transform = cl(t, e.transform, i) : n.transform && (n.transform = "none")), o) {
    const { originX: l = "50%", originY: d = "50%", originZ: u = 0 } = a;
    n.transformOrigin = `${l} ${d} ${u}`;
  }
}
const Ci = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function rr(e, t, i) {
  for (const n in t)
    !j(t[n]) && !sr(n, i) && (e[n] = t[n]);
}
function ul({ transformTemplate: e }, t) {
  return he(() => {
    const i = Ci();
    return Ei(i, t, e), Object.assign({}, i.vars, i.style);
  }, [t]);
}
function dl(e, t) {
  const i = e.style || {}, n = {};
  return rr(n, i, e), Object.assign(n, ul(e, t)), n;
}
function hl(e, t) {
  const i = {}, n = dl(e, t);
  return e.drag && e.dragListener !== !1 && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0), i.style = n, i;
}
const fl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, pl = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ml(e, t, i = 1, n = 0, s = !0) {
  e.pathLength = 1;
  const a = s ? fl : pl;
  e[a.offset] = P.transform(-n);
  const r = P.transform(t), o = P.transform(i);
  e[a.array] = `${r} ${o}`;
}
function ar(e, {
  attrX: t,
  attrY: i,
  attrScale: n,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...o
}, l, d, u) {
  if (Ei(e, o, d), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: f } = e;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), i !== void 0 && (h.y = i), n !== void 0 && (h.scale = n), s !== void 0 && ml(h, s, a, r, !1);
}
const or = () => ({
  ...Ci(),
  attrs: {}
}), lr = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function gl(e, t, i, n) {
  const s = he(() => {
    const a = or();
    return ar(a, t, lr(n), e.transformTemplate, e.style), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    rr(a, e.style, e), s.style = { ...a, ...s.style };
  }
  return s;
}
const yl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Di(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(yl.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function xl(e, t, i, { latestValues: n }, s, a = !1) {
  const o = (Di(e) ? gl : hl)(t, n, s, e), l = nl(t, typeof e == "string", a), d = e !== os ? { ...l, ...o, ref: i } : {}, { children: u } = t, h = he(() => j(u) ? u.get() : u, [u]);
  return at(e, {
    ...d,
    children: h
  });
}
function dn(e) {
  const t = [{}, {}];
  return e?.values.forEach((i, n) => {
    t[0][n] = i.get(), t[1][n] = i.getVelocity();
  }), t;
}
function Mi(e, t, i, n) {
  if (typeof t == "function") {
    const [s, a] = dn(n);
    t = t(i !== void 0 ? i : e.custom, s, a);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, a] = dn(n);
    t = t(i !== void 0 ? i : e.custom, s, a);
  }
  return t;
}
function it(e) {
  return j(e) ? e.get() : e;
}
function vl({ scrapeMotionValuesFromProps: e, createRenderState: t }, i, n, s) {
  return {
    latestValues: bl(i, n, s, e),
    renderState: t()
  };
}
function bl(e, t, i, n) {
  const s = {}, a = n(e, {});
  for (const f in a)
    s[f] = it(a[f]);
  let { initial: r, animate: o } = e;
  const l = gt(e), d = nr(e);
  t && d && !l && e.inherit !== !1 && (r === void 0 && (r = t.initial), o === void 0 && (o = t.animate));
  let u = i ? i.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? o : r;
  if (h && typeof h != "boolean" && !mt(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let p = 0; p < f.length; p++) {
      const g = Mi(e, f[p]);
      if (g) {
        const { transitionEnd: v, transition: w, ...x } = g;
        for (const T in x) {
          let b = x[T];
          if (Array.isArray(b)) {
            const N = u ? b.length - 1 : 0;
            b = b[N];
          }
          b !== null && (s[T] = b);
        }
        for (const T in v)
          s[T] = v[T];
      }
    }
  }
  return s;
}
const cr = (e) => (t, i) => {
  const n = O(pt), s = O(ft), a = () => vl(e, t, n, s);
  return i ? a() : ni(a);
};
function Ri(e, t, i) {
  const { style: n } = e, s = {};
  for (const a in n)
    (j(n[a]) || t.style && j(t.style[a]) || sr(a, e) || i?.getValue(a)?.liveStyle !== void 0) && (s[a] = n[a]);
  return s;
}
const wl = /* @__PURE__ */ cr({
  scrapeMotionValuesFromProps: Ri,
  createRenderState: Ci
});
function ur(e, t, i) {
  const n = Ri(e, t, i);
  for (const s in e)
    if (j(e[s]) || j(t[s])) {
      const a = Ne.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      n[a] = e[s];
    }
  return n;
}
const Tl = /* @__PURE__ */ cr({
  scrapeMotionValuesFromProps: ur,
  createRenderState: or
}), Sl = Symbol.for("motionComponentSymbol");
function ge(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Pl(e, t, i) {
  return ht(
    (n) => {
      n && e.onMount && e.onMount(n), t && (n ? t.mount(n) : t.unmount()), i && (typeof i == "function" ? i(n) : ge(i) && (i.current = n));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const Li = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Al = "framerAppearId", dr = "data-" + Li(Al), hr = Pe({});
function Nl(e, t, i, n, s) {
  const { visualElement: a } = O(pt), r = O(tr), o = O(ft), l = O(Ni).reducedMotion, d = te(null);
  n = n || r.renderer, !d.current && n && (d.current = n(e, {
    visualState: t,
    parent: a,
    props: i,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = d.current, h = O(hr);
  u && !u.projection && s && (u.type === "html" || u.type === "svg") && Vl(d.current, i, s, h);
  const f = te(!1);
  ls(() => {
    u && f.current && u.update(i, o);
  });
  const p = i[dr], g = te(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
  return cs(() => {
    u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), g.current && u.animationState && u.animationState.animateChanges());
  }), fe(() => {
    u && (!g.current && u.animationState && u.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(p);
    }), g.current = !1), u.enteringChildren = void 0);
  }), u;
}
function Vl(e, t, i, n) {
  const { layoutId: s, layout: a, drag: r, dragConstraints: o, layoutScroll: l, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new i(e.latestValues, t["data-framer-portal-id"] ? void 0 : fr(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: a,
    alwaysMeasureLayout: !!r || o && ge(o),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof a == "string" ? a : "both",
    initialPromotionConfig: n,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: d
  });
}
function fr(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : fr(e.parent);
}
function Pt(e, { forwardMotionProps: t = !1 } = {}, i, n) {
  i && el(i);
  const s = Di(e) ? Tl : wl;
  function a(o, l) {
    let d;
    const u = {
      ...O(Ni),
      ...o,
      layoutId: kl(o)
    }, { isStatic: h } = u, f = rl(o), p = s(o, h);
    if (!h && si) {
      El();
      const g = Cl(u);
      d = g.MeasureLayout, f.visualElement = Nl(e, p, u, n, g.ProjectionNode);
    }
    return m(pt.Provider, { value: f, children: [d && f.visualElement ? c(d, { visualElement: f.visualElement, ...u }) : null, xl(e, o, Pl(p, f.visualElement, l), p, h, t)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const r = ei(a);
  return r[Sl] = e, r;
}
function kl({ layoutId: e }) {
  const t = O(ii).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function El(e, t) {
  O(tr).strict;
}
function Cl(e) {
  const { drag: t, layout: i } = Se;
  if (!t && !i)
    return {};
  const n = { ...t, ...i };
  return {
    MeasureLayout: t?.isEnabled(e) || i?.isEnabled(e) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
function Dl(e, t) {
  if (typeof Proxy > "u")
    return Pt;
  const i = /* @__PURE__ */ new Map(), n = (a, r) => Pt(a, r, e, t), s = (a, r) => n(a, r);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (a, r) => r === "create" ? n : (i.has(r) || i.set(r, Pt(r, void 0, e, t)), i.get(r))
  });
}
function pr({ top: e, left: t, right: i, bottom: n }) {
  return {
    x: { min: t, max: i },
    y: { min: e, max: n }
  };
}
function Ml({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Rl(e, t) {
  if (!t)
    return e;
  const i = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: n.y,
    right: n.x
  };
}
function At(e) {
  return e === void 0 || e === 1;
}
function zt({ scale: e, scaleX: t, scaleY: i }) {
  return !At(e) || !At(t) || !At(i);
}
function oe(e) {
  return zt(e) || mr(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function mr(e) {
  return hn(e.x) || hn(e.y);
}
function hn(e) {
  return e && e !== "0%";
}
function dt(e, t, i) {
  const n = e - i, s = t * n;
  return i + s;
}
function fn(e, t, i, n, s) {
  return s !== void 0 && (e = dt(e, s, n)), dt(e, i, n) + t;
}
function Gt(e, t = 0, i = 1, n, s) {
  e.min = fn(e.min, t, i, n, s), e.max = fn(e.max, t, i, n, s);
}
function gr(e, { x: t, y: i }) {
  Gt(e.x, t.translate, t.scale, t.originPoint), Gt(e.y, i.translate, i.scale, i.originPoint);
}
const pn = 0.999999999999, mn = 1.0000000000001;
function Ll(e, t, i, n = !1) {
  const s = i.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let a, r;
  for (let o = 0; o < s; o++) {
    a = i[o], r = a.projectionDelta;
    const { visualElement: l } = a.options;
    l && l.props.style && l.props.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && xe(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), r && (t.x *= r.x.scale, t.y *= r.y.scale, gr(e, r)), n && oe(a.latestValues) && xe(e, a.latestValues));
  }
  t.x < mn && t.x > pn && (t.x = 1), t.y < mn && t.y > pn && (t.y = 1);
}
function ye(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function gn(e, t, i, n, s = 0.5) {
  const a = C(e.min, e.max, s);
  Gt(e, t, i, a, n);
}
function xe(e, t) {
  gn(e.x, t.x, t.scaleX, t.scale, t.originX), gn(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function yr(e, t) {
  return pr(Rl(e.getBoundingClientRect(), t));
}
function Bl(e, t, i) {
  const n = yr(e, i), { scroll: s } = t;
  return s && (ye(n.x, s.offset.x), ye(n.y, s.offset.y)), n;
}
const yn = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ve = () => ({
  x: yn(),
  y: yn()
}), xn = () => ({ min: 0, max: 0 }), M = () => ({
  x: xn(),
  y: xn()
}), Xt = { current: null }, xr = { current: !1 };
function Il() {
  if (xr.current = !0, !!si)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xt.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Xt.current = !1;
}
const Fl = /* @__PURE__ */ new WeakMap();
function Ol(e, t, i) {
  for (const n in t) {
    const s = t[n], a = i[n];
    if (j(s))
      e.addValue(n, s);
    else if (j(a))
      e.addValue(n, Te(s, { owner: e }));
    else if (a !== s)
      if (e.hasValue(n)) {
        const r = e.getValue(n);
        r.liveStyle === !0 ? r.jump(s) : r.hasAnimated || r.set(s);
      } else {
        const r = e.getStaticValue(n);
        e.addValue(n, Te(r !== void 0 ? r : s, { owner: e }));
      }
  }
  for (const n in i)
    t[n] === void 0 && e.removeValue(n);
  return t;
}
const vn = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class jl {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, i, n) {
    return {};
  }
  constructor({ parent: t, props: i, presenceContext: n, reducedMotionConfig: s, blockInitialAnimation: a, visualState: r }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wi, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = W.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, E.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: d } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = i.initial ? { ...l } : {}, this.renderState = d, this.parent = t, this.props = i, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = o, this.blockInitialAnimation = !!a, this.isControllingVariants = gt(i), this.isVariantNode = nr(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const f in h) {
      const p = h[f];
      l[f] !== void 0 && j(p) && p.set(l[f]);
    }
  }
  mount(t) {
    this.current = t, Fl.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, n) => this.bindToMotionValue(n, i)), xr.current || Il(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xt.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ie(this.notifyUpdate), ie(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const i = this.features[t];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, i) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const n = Ve.has(t);
    n && this.onBindTransform && this.onBindTransform();
    const s = i.on("change", (r) => {
      this.latestValues[t] = r, this.props.onUpdate && E.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let a;
    window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, i)), this.valueSubscriptions.set(t, () => {
      s(), a && a(), i.owner && i.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Se) {
      const i = Se[t];
      if (!i)
        continue;
      const { isEnabled: n, Feature: s } = i;
      if (!this.features[t] && s && n(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const a = this.features[t];
        a.isMounted ? a.update() : (a.mount(), a.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : M();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, i) {
    this.latestValues[t] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, i) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let n = 0; n < vn.length; n++) {
      const s = vn[n];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const a = "on" + s, r = t[a];
      r && (this.propEventSubscriptions[s] = this.on(s, r));
    }
    this.prevMotionValues = Ol(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(t), () => i.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, i) {
    const n = this.values.get(t);
    i !== n && (n && this.removeValue(t), this.bindToMotionValue(t, i), this.values.set(t, i), this.latestValues[t] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const i = this.valueSubscriptions.get(t);
    i && (i(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, i) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && i !== void 0 && (n = Te(i === null ? void 0 : i, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, i) {
    let n = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return n != null && (typeof n == "string" && (us(n) || hs(n)) ? n = parseFloat(n) : !zo(n) && ne.test(i) && (n = Gs(t, i)), this.setBaseTarget(t, j(n) ? n.get() : n)), j(n) ? n.get() : n;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, i) {
    this.baseTarget[t] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: i } = this.props;
    let n;
    if (typeof i == "string" || typeof i == "object") {
      const a = Mi(this.props, i, this.presenceContext?.custom);
      a && (n = a[t]);
    }
    if (i && n !== void 0)
      return n;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !j(s) ? s : this.initialValues[t] !== void 0 && n === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, i) {
    return this.events[t] || (this.events[t] = new ci()), this.events[t].add(i);
  }
  notify(t, ...i) {
    this.events[t] && this.events[t].notify(...i);
  }
  scheduleRenderMicrotask() {
    Pi.render(this.render);
  }
}
class vr extends jl {
  constructor() {
    super(...arguments), this.KeyframeResolver = Lo;
  }
  sortInstanceNodePosition(t, i) {
    return t.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, i) {
    return t.style ? t.style[i] : void 0;
  }
  removeValueFromRenderState(t, { vars: i, style: n }) {
    delete i[t], delete n[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    j(t) && (this.childSubscription = t.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function br(e, { style: t, vars: i }, n, s) {
  const a = e.style;
  let r;
  for (r in t)
    a[r] = t[r];
  s?.applyProjectionStyles(a, n);
  for (r in i)
    a.setProperty(r, i[r]);
}
function _l(e) {
  return window.getComputedStyle(e);
}
class Ul extends vr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = br;
  }
  readValueFromInstance(t, i) {
    if (Ve.has(i))
      return this.projection?.isProjecting ? jt(i) : Ja(t, i);
    {
      const n = _l(t), s = (hi(i) ? n.getPropertyValue(i) : n[i]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: i }) {
    return yr(t, i);
  }
  build(t, i, n) {
    Ei(t, i, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, i, n) {
    return Ri(t, i, n);
  }
}
const wr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Wl(e, t, i, n) {
  br(e, t, void 0, n);
  for (const s in t.attrs)
    e.setAttribute(wr.has(s) ? s : Li(s), t.attrs[s]);
}
class Kl extends vr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = M;
  }
  getBaseTargetFromProps(t, i) {
    return t[i];
  }
  readValueFromInstance(t, i) {
    if (Ve.has(i)) {
      const n = zs(i);
      return n && n.default || 0;
    }
    return i = wr.has(i) ? i : Li(i), t.getAttribute(i);
  }
  scrapeMotionValuesFromProps(t, i, n) {
    return ur(t, i, n);
  }
  build(t, i, n) {
    ar(t, i, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(t, i, n, s) {
    Wl(t, i, n, s);
  }
  mount(t) {
    this.isSVGTag = lr(t.tagName), super.mount(t);
  }
}
const Hl = (e, t) => Di(e) ? new Kl(t) : new Ul(t, {
  allowProjection: e !== os
});
function be(e, t, i) {
  const n = e.getProps();
  return Mi(n, t, i !== void 0 ? i : n.custom, e);
}
const Yt = (e) => Array.isArray(e);
function $l(e, t, i) {
  e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, Te(i));
}
function zl(e) {
  return Yt(e) ? e[e.length - 1] || 0 : e;
}
function Gl(e, t) {
  const i = be(e, t);
  let { transitionEnd: n = {}, transition: s = {}, ...a } = i || {};
  a = { ...a, ...n };
  for (const r in a) {
    const o = zl(a[r]);
    $l(e, r, o);
  }
}
function Xl(e) {
  return !!(j(e) && e.add);
}
function qt(e, t) {
  const i = e.getValue("willChange");
  if (Xl(i))
    return i.add(t);
  if (!i && J.WillChange) {
    const n = new J.WillChange("auto");
    e.addValue("willChange", n), n.add(t);
  }
}
function Tr(e) {
  return e.props[dr];
}
const Yl = (e) => e !== null;
function ql(e, { repeat: t, repeatType: i = "loop" }, n) {
  const s = e.filter(Yl), a = t && i !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return s[a];
}
const Zl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Jl = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ql = {
  type: "keyframes",
  duration: 0.8
}, ec = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, tc = (e, { keyframes: t }) => t.length > 2 ? Ql : Ve.has(e) ? e.startsWith("scale") ? Jl(t[1]) : Zl : ec;
function ic({ when: e, delay: t, delayChildren: i, staggerChildren: n, staggerDirection: s, repeat: a, repeatType: r, repeatDelay: o, from: l, elapsed: d, ...u }) {
  return !!Object.keys(u).length;
}
const Bi = (e, t, i, n = {}, s, a) => (r) => {
  const o = Ti(n, e) || {}, l = o.delay || n.delay || 0;
  let { elapsed: d = 0 } = n;
  d = d - /* @__PURE__ */ Y(l);
  const u = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...o,
    delay: -d,
    onUpdate: (f) => {
      t.set(f), o.onUpdate && o.onUpdate(f);
    },
    onComplete: () => {
      r(), o.onComplete && o.onComplete();
    },
    name: e,
    motionValue: t,
    element: a ? void 0 : s
  };
  ic(o) || Object.assign(u, tc(e, u)), u.duration && (u.duration = /* @__PURE__ */ Y(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Y(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Ht(u), u.delay === 0 && (h = !0)), (J.instantAnimations || J.skipAnimations) && (h = !0, Ht(u), u.delay = 0), u.allowFlatten = !o.type && !o.ease, h && !a && t.get() !== void 0) {
    const f = ql(u.keyframes, o);
    if (f !== void 0) {
      E.update(() => {
        u.onUpdate(f), u.onComplete();
      });
      return;
    }
  }
  return o.isSync ? new bi(u) : new To(u);
};
function nc({ protectedKeys: e, needsAnimating: t }, i) {
  const n = e.hasOwnProperty(i) && t[i] !== !0;
  return t[i] = !1, n;
}
function Sr(e, t, { delay: i = 0, transitionOverride: n, type: s } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: r, ...o } = t;
  n && (a = n);
  const l = [], d = s && e.animationState && e.animationState.getState()[s];
  for (const u in o) {
    const h = e.getValue(u, e.latestValues[u] ?? null), f = o[u];
    if (f === void 0 || d && nc(d, u))
      continue;
    const p = {
      delay: i,
      ...Ti(a || {}, u)
    }, g = h.get();
    if (g !== void 0 && !h.isAnimating && !Array.isArray(f) && f === g && !p.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const x = Tr(e);
      if (x) {
        const T = window.MotionHandoffAnimation(x, u, E);
        T !== null && (p.startTime = T, v = !0);
      }
    }
    qt(e, u), h.start(Bi(u, h, f, e.shouldReduceMotion && Ks.has(u) ? { type: !1 } : p, e, v));
    const w = h.animation;
    w && l.push(w);
  }
  return r && Promise.all(l).then(() => {
    E.update(() => {
      r && Gl(e, r);
    });
  }), l;
}
function Pr(e, t, i, n = 0, s = 1) {
  const a = Array.from(e).sort((d, u) => d.sortNodePosition(u)).indexOf(t), r = e.size, o = (r - 1) * n;
  return typeof i == "function" ? i(a, r) : s === 1 ? a * n : o - a * n;
}
function Zt(e, t, i = {}) {
  const n = be(e, t, i.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = n || {};
  i.transitionOverride && (s = i.transitionOverride);
  const a = n ? () => Promise.all(Sr(e, n, i)) : () => Promise.resolve(), r = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: h } = s;
    return sc(e, t, l, d, u, h, i);
  } : () => Promise.resolve(), { when: o } = s;
  if (o) {
    const [l, d] = o === "beforeChildren" ? [a, r] : [r, a];
    return l().then(() => d());
  } else
    return Promise.all([a(), r(i.delay)]);
}
function sc(e, t, i = 0, n = 0, s = 0, a = 1, r) {
  const o = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), o.push(Zt(l, t, {
      ...r,
      delay: i + (typeof n == "function" ? 0 : n) + Pr(e.variantChildren, l, n, s, a)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(o);
}
function rc(e, t, i = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const s = t.map((a) => Zt(e, a, i));
    n = Promise.all(s);
  } else if (typeof t == "string")
    n = Zt(e, t, i);
  else {
    const s = typeof t == "function" ? be(e, t, i.custom) : t;
    n = Promise.all(Sr(e, s, i));
  }
  return n.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Ar(e, t) {
  if (!Array.isArray(t))
    return !1;
  const i = t.length;
  if (i !== e.length)
    return !1;
  for (let n = 0; n < i; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
const ac = ki.length;
function Nr(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const i = e.parent ? Nr(e.parent) || {} : {};
    return e.props.initial !== void 0 && (i.initial = e.props.initial), i;
  }
  const t = {};
  for (let i = 0; i < ac; i++) {
    const n = ki[i], s = e.props[n];
    (_e(s) || s === !1) && (t[n] = s);
  }
  return t;
}
const oc = [...Vi].reverse(), lc = Vi.length;
function cc(e) {
  return (t) => Promise.all(t.map(({ animation: i, options: n }) => rc(e, i, n)));
}
function uc(e) {
  let t = cc(e), i = bn(), n = !0;
  const s = (l) => (d, u) => {
    const h = be(e, u, l === "exit" ? e.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: p, ...g } = h;
      d = { ...d, ...g, ...p };
    }
    return d;
  };
  function a(l) {
    t = l(e);
  }
  function r(l) {
    const { props: d } = e, u = Nr(e.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let w = 0; w < lc; w++) {
      const x = oc[w], T = i[x], b = d[x] !== void 0 ? d[x] : u[x], N = _e(b), S = x === l ? T.isActive : null;
      S === !1 && (g = w);
      let V = b === u[x] && b !== d[x] && N;
      if (V && n && e.manuallyAnimateOnMount && (V = !1), T.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !b && !T.prevProp || // Or if the prop doesn't define an animation
      mt(b) || typeof b == "boolean")
        continue;
      const k = dc(T.prevProp, b);
      let A = k || // If we're making this variant active, we want to always make it active
      x === l && T.isActive && !V && N || // If we removed a higher-priority variant (i is in reverse order)
      w > g && N, B = !1;
      const _ = Array.isArray(b) ? b : [b];
      let Q = _.reduce(s(x), {});
      S === !1 && (Q = {});
      const { prevResolvedValues: Fi = {} } = T, Wr = {
        ...Fi,
        ...Q
      }, Oi = (I) => {
        A = !0, f.has(I) && (B = !0, f.delete(I)), T.needsAnimating[I] = !0;
        const K = e.getValue(I);
        K && (K.liveStyle = !1);
      };
      for (const I in Wr) {
        const K = Q[I], re = Fi[I];
        if (p.hasOwnProperty(I))
          continue;
        let pe = !1;
        Yt(K) && Yt(re) ? pe = !Ar(K, re) : pe = K !== re, pe ? K != null ? Oi(I) : f.add(I) : K !== void 0 && f.has(I) ? Oi(I) : T.protectedKeys[I] = !0;
      }
      T.prevProp = b, T.prevResolvedValues = Q, T.isActive && (p = { ...p, ...Q }), n && e.blockInitialAnimation && (A = !1);
      const ji = V && k;
      A && (!ji || B) && h.push(..._.map((I) => {
        const K = { type: x };
        if (typeof I == "string" && n && !ji && e.manuallyAnimateOnMount && e.parent) {
          const { parent: re } = e, pe = be(re, I);
          if (re.enteringChildren && pe) {
            const { delayChildren: Kr } = pe.transition || {};
            K.delay = Pr(re.enteringChildren, e, Kr);
          }
        }
        return {
          animation: I,
          options: K
        };
      }));
    }
    if (f.size) {
      const w = {};
      if (typeof d.initial != "boolean") {
        const x = be(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        x && x.transition && (w.transition = x.transition);
      }
      f.forEach((x) => {
        const T = e.getBaseTarget(x), b = e.getValue(x);
        b && (b.liveStyle = !0), w[x] = T ?? null;
      }), h.push({ animation: w });
    }
    let v = !!h.length;
    return n && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (v = !1), n = !1, v ? t(h) : Promise.resolve();
  }
  function o(l, d) {
    if (i[l].isActive === d)
      return Promise.resolve();
    e.variantChildren?.forEach((h) => h.animationState?.setActive(l, d)), i[l].isActive = d;
    const u = r(l);
    for (const h in i)
      i[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: r,
    setActive: o,
    setAnimateFunction: a,
    getState: () => i,
    reset: () => {
      i = bn();
    }
  };
}
function dc(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ar(t, e) : !1;
}
function ae(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function bn() {
  return {
    animate: ae(!0),
    whileInView: ae(),
    whileHover: ae(),
    whileTap: ae(),
    whileDrag: ae(),
    whileFocus: ae(),
    exit: ae()
  };
}
class se {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class hc extends se {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = uc(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    mt(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    t !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let fc = 0;
class pc extends se {
  constructor() {
    super(...arguments), this.id = fc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: i } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === n)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    i && !t && s.then(() => {
      i(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const mc = {
  animation: {
    Feature: hc
  },
  exit: {
    Feature: pc
  }
};
function We(e, t, i, n = { passive: !0 }) {
  return e.addEventListener(t, i, n), () => e.removeEventListener(t, i);
}
function ze(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const gc = (e) => (t) => Ai(t) && e(t, ze(t));
function Le(e, t, i, n) {
  return We(e, t, gc(i), n);
}
const Vr = 1e-4, yc = 1 - Vr, xc = 1 + Vr, kr = 0.01, vc = 0 - kr, bc = 0 + kr;
function U(e) {
  return e.max - e.min;
}
function wc(e, t, i) {
  return Math.abs(e - t) <= i;
}
function wn(e, t, i, n = 0.5) {
  e.origin = n, e.originPoint = C(t.min, t.max, e.origin), e.scale = U(i) / U(t), e.translate = C(i.min, i.max, e.origin) - e.originPoint, (e.scale >= yc && e.scale <= xc || isNaN(e.scale)) && (e.scale = 1), (e.translate >= vc && e.translate <= bc || isNaN(e.translate)) && (e.translate = 0);
}
function Be(e, t, i, n) {
  wn(e.x, t.x, i.x, n ? n.originX : void 0), wn(e.y, t.y, i.y, n ? n.originY : void 0);
}
function Tn(e, t, i) {
  e.min = i.min + t.min, e.max = e.min + U(t);
}
function Tc(e, t, i) {
  Tn(e.x, t.x, i.x), Tn(e.y, t.y, i.y);
}
function Sn(e, t, i) {
  e.min = t.min - i.min, e.max = e.min + U(t);
}
function Ie(e, t, i) {
  Sn(e.x, t.x, i.x), Sn(e.y, t.y, i.y);
}
function $(e) {
  return [e("x"), e("y")];
}
const Er = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Pn = (e, t) => Math.abs(e - t);
function Sc(e, t) {
  const i = Pn(e.x, t.x), n = Pn(e.y, t.y);
  return Math.sqrt(i ** 2 + n ** 2);
}
class Cr {
  constructor(t, i, { transformPagePoint: n, contextWindow: s = window, dragSnapToOrigin: a = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Vt(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, g = Sc(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !g)
        return;
      const { point: v } = f, { timestamp: w } = F;
      this.history.push({ ...v, timestamp: w });
      const { onStart: x, onMove: T } = this.handlers;
      p || (x && x(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), T && T(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, p) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Nt(p, this.transformPagePoint), E.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, p) => {
      this.end();
      const { onEnd: g, onSessionEnd: v, resumeAnimation: w } = this.handlers;
      if (this.dragSnapToOrigin && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const x = Vt(f.type === "pointercancel" ? this.lastMoveEventInfo : Nt(p, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, x), v && v(f, x);
    }, !Ai(t))
      return;
    this.dragSnapToOrigin = a, this.handlers = i, this.transformPagePoint = n, this.distanceThreshold = r, this.contextWindow = s || window;
    const o = ze(t), l = Nt(o, this.transformPagePoint), { point: d } = l, { timestamp: u } = F;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: h } = i;
    h && h(t, Vt(l, this.history)), this.removeListeners = Ke(Le(this.contextWindow, "pointermove", this.handlePointerMove), Le(this.contextWindow, "pointerup", this.handlePointerUp), Le(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ie(this.updatePoint);
  }
}
function Nt(e, t) {
  return t ? { point: t(e.point) } : e;
}
function An(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vt({ point: e }, t) {
  return {
    point: e,
    delta: An(e, Dr(t)),
    offset: An(e, Pc(t)),
    velocity: Ac(t, 0.1)
  };
}
function Pc(e) {
  return e[0];
}
function Dr(e) {
  return e[e.length - 1];
}
function Ac(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let i = e.length - 1, n = null;
  const s = Dr(e);
  for (; i >= 0 && (n = e[i], !(s.timestamp - n.timestamp > /* @__PURE__ */ Y(t))); )
    i--;
  if (!n)
    return { x: 0, y: 0 };
  const a = /* @__PURE__ */ z(s.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (s.x - n.x) / a,
    y: (s.y - n.y) / a
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Nc(e, { min: t, max: i }, n) {
  return t !== void 0 && e < t ? e = n ? C(t, e, n.min) : Math.max(e, t) : i !== void 0 && e > i && (e = n ? C(i, e, n.max) : Math.min(e, i)), e;
}
function Nn(e, t, i) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0
  };
}
function Vc(e, { top: t, left: i, bottom: n, right: s }) {
  return {
    x: Nn(e.x, i, s),
    y: Nn(e.y, t, n)
  };
}
function Vn(e, t) {
  let i = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([i, n] = [n, i]), { min: i, max: n };
}
function kc(e, t) {
  return {
    x: Vn(e.x, t.x),
    y: Vn(e.y, t.y)
  };
}
function Ec(e, t) {
  let i = 0.5;
  const n = U(e), s = U(t);
  return s > n ? i = /* @__PURE__ */ Fe(t.min, t.max - n, e.min) : n > s && (i = /* @__PURE__ */ Fe(e.min, e.max - s, t.min)), Z(0, 1, i);
}
function Cc(e, t) {
  const i = {};
  return t.min !== void 0 && (i.min = t.min - e.min), t.max !== void 0 && (i.max = t.max - e.min), i;
}
const Jt = 0.35;
function Dc(e = Jt) {
  return e === !1 ? e = 0 : e === !0 && (e = Jt), {
    x: kn(e, "left", "right"),
    y: kn(e, "top", "bottom")
  };
}
function kn(e, t, i) {
  return {
    min: En(e, t),
    max: En(e, i)
  };
}
function En(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Mc = /* @__PURE__ */ new WeakMap();
class Rc {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = M(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: i = !1, distanceThreshold: n } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const a = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(ze(h).point);
    }, r = (h, f) => {
      const { drag: p, dragPropagation: g, onDragStart: v } = this.getProps();
      if (p && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = Oo(p), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $((x) => {
        let T = this.getAxisMotionValue(x).get() || 0;
        if (q.test(T)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const N = b.layout.layoutBox[x];
            N && (T = U(N) * (parseFloat(T) / 100));
          }
        }
        this.originPoint[x] = T;
      }), v && E.postRender(() => v(h, f)), qt(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, o = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: p, dragDirectionLock: g, onDirectionLock: v, onDrag: w } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: x } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Lc(x), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, x), this.updateAxis("y", f.point, x), this.visualElement.render(), w && w(h, f);
    }, l = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => $((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Cr(t, {
      onSessionStart: a,
      onStart: r,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: n,
      contextWindow: Er(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, i) {
    const n = t || this.latestPointerEvent, s = i || this.latestPanInfo, a = this.isDragging;
    if (this.cancel(), !a || !s || !n)
      return;
    const { velocity: r } = s;
    this.startAnimation(r);
    const { onDragEnd: o } = this.getProps();
    o && E.postRender(() => o(n, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: i } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(t, i, n) {
    const { drag: s } = this.getProps();
    if (!n || !Qe(t, s, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let r = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (r = Nc(r, this.constraints[t], this.elastic[t])), a.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: i } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    t && ge(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = Vc(n.layoutBox, t) : this.constraints = !1, this.elastic = Dc(i), s !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && $((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = Cc(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: i } = this.getProps();
    if (!t || !ge(t))
      return !1;
    const n = t.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const a = Bl(n, s.root, this.visualElement.getTransformPagePoint());
    let r = kc(s.layout.layoutBox, a);
    if (i) {
      const o = i(Ml(r));
      this.hasMutatedConstraints = !!o, o && (r = pr(o));
    }
    return r;
  }
  startAnimation(t) {
    const { drag: i, dragMomentum: n, dragElastic: s, dragTransition: a, dragSnapToOrigin: r, onDragTransitionEnd: o } = this.getProps(), l = this.constraints || {}, d = $((u) => {
      if (!Qe(u, i, this.currentDirection))
        return;
      let h = l && l[u] || {};
      r && (h = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, p = s ? 40 : 1e7, g = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...h
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(d).then(o);
  }
  startAxisValueAnimation(t, i) {
    const n = this.getAxisMotionValue(t);
    return qt(this.visualElement, t), n.start(Bi(t, n, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    $((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    $((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const i = `_drag${t.toUpperCase()}`, n = this.visualElement.getProps(), s = n[i];
    return s || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    $((i) => {
      const { drag: n } = this.getProps();
      if (!Qe(i, n, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, a = this.getAxisMotionValue(i);
      if (s && s.layout) {
        const { min: r, max: o } = s.layout.layoutBox[i];
        a.set(t[i] - C(r, o, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: i } = this.getProps(), { projection: n } = this.visualElement;
    if (!ge(i) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    $((r) => {
      const o = this.getAxisMotionValue(r);
      if (o && this.constraints !== !1) {
        const l = o.get();
        s[r] = Ec({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), $((r) => {
      if (!Qe(r, t, null))
        return;
      const o = this.getAxisMotionValue(r), { min: l, max: d } = this.constraints[r];
      o.set(C(l, d, s[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Mc.set(this.visualElement, this);
    const t = this.visualElement.current, i = Le(t, "pointerdown", (l) => {
      const { drag: d, dragListener: u = !0 } = this.getProps();
      d && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      ge(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, a = s.addEventListener("measure", n);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), E.read(n);
    const r = We(window, "resize", () => this.scalePositionWithinConstraints()), o = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: d }) => {
      this.isDragging && d && ($((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      r(), i(), a(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: n = !1, dragPropagation: s = !1, dragConstraints: a = !1, dragElastic: r = Jt, dragMomentum: o = !0 } = t;
    return {
      ...t,
      drag: i,
      dragDirectionLock: n,
      dragPropagation: s,
      dragConstraints: a,
      dragElastic: r,
      dragMomentum: o
    };
  }
}
function Qe(e, t, i) {
  return (t === !0 || t === e) && (i === null || i === e);
}
function Lc(e, t = 10) {
  let i = null;
  return Math.abs(e.y) > t ? i = "y" : Math.abs(e.x) > t && (i = "x"), i;
}
class Bc extends se {
  constructor(t) {
    super(t), this.removeGroupControls = G, this.removeListeners = G, this.controls = new Rc(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || G;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Cn = (e) => (t, i) => {
  e && E.postRender(() => e(t, i));
};
class Ic extends se {
  constructor() {
    super(...arguments), this.removePointerDownListener = G;
  }
  onPointerDown(t) {
    this.session = new Cr(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Er(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: i, onPan: n, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Cn(t),
      onStart: Cn(i),
      onMove: n,
      onEnd: (a, r) => {
        delete this.session, s && E.postRender(() => s(a, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Le(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const nt = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Dn(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Ee = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (P.test(e))
        e = parseFloat(e);
      else
        return e;
    const i = Dn(e, t.target.x), n = Dn(e, t.target.y);
    return `${i}% ${n}%`;
  }
}, Fc = {
  correct: (e, { treeScale: t, projectionDelta: i }) => {
    const n = e, s = ne.parse(e);
    if (s.length > 5)
      return n;
    const a = ne.createTransformer(e), r = typeof s[0] != "number" ? 1 : 0, o = i.x.scale * t.x, l = i.y.scale * t.y;
    s[0 + r] /= o, s[1 + r] /= l;
    const d = C(o, l, 0.5);
    return typeof s[2 + r] == "number" && (s[2 + r] /= d), typeof s[3 + r] == "number" && (s[3 + r] /= d), a(s);
  }
};
let kt = !1;
class Oc extends as {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: n, layoutId: s } = this.props, { projection: a } = t;
    al(jc), a && (i.group && i.group.add(a), n && n.register && s && n.register(a), kt && a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), nt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: i, visualElement: n, drag: s, isPresent: a } = this.props, { projection: r } = n;
    return r && (r.isPresent = a, kt = !0, s || t.layoutDependency !== i || i === void 0 || t.isPresent !== a ? r.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? r.promote() : r.relegate() || E.postRender(() => {
      const o = r.getStack();
      (!o || !o.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Pi.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: i, switchLayoutGroup: n } = this.props, { projection: s } = t;
    kt = !0, s && (s.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(s), n && n.deregister && n.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Mr(e) {
  const [t, i] = er(), n = O(ii);
  return c(Oc, { ...e, layoutGroup: n, switchLayoutGroup: O(hr), isPresent: t, safeToRemove: i });
}
const jc = {
  borderRadius: {
    ...Ee,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Ee,
  borderTopRightRadius: Ee,
  borderBottomLeftRadius: Ee,
  borderBottomRightRadius: Ee,
  boxShadow: Fc
};
function _c(e, t, i) {
  const n = j(e) ? e : Te(e);
  return n.start(Bi("", n, t, i)), n.animation;
}
const Uc = (e, t) => e.depth - t.depth;
class Wc {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ri(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ai(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Uc), this.isDirty = !1, this.children.forEach(t);
  }
}
function Kc(e, t) {
  const i = W.now(), n = ({ timestamp: s }) => {
    const a = s - i;
    a >= t && (ie(n), e(a - t));
  };
  return E.setup(n, !0), () => ie(n);
}
const Rr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Hc = Rr.length, Mn = (e) => typeof e == "string" ? parseFloat(e) : e, Rn = (e) => typeof e == "number" || P.test(e);
function $c(e, t, i, n, s, a) {
  s ? (e.opacity = C(0, i.opacity ?? 1, zc(n)), e.opacityExit = C(t.opacity ?? 1, 0, Gc(n))) : a && (e.opacity = C(t.opacity ?? 1, i.opacity ?? 1, n));
  for (let r = 0; r < Hc; r++) {
    const o = `border${Rr[r]}Radius`;
    let l = Ln(t, o), d = Ln(i, o);
    if (l === void 0 && d === void 0)
      continue;
    l || (l = 0), d || (d = 0), l === 0 || d === 0 || Rn(l) === Rn(d) ? (e[o] = Math.max(C(Mn(l), Mn(d), n), 0), (q.test(d) || q.test(l)) && (e[o] += "%")) : e[o] = d;
  }
  (t.rotate || i.rotate) && (e.rotate = C(t.rotate || 0, i.rotate || 0, n));
}
function Ln(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const zc = /* @__PURE__ */ Lr(0, 0.5, bs), Gc = /* @__PURE__ */ Lr(0.5, 0.95, G);
function Lr(e, t, i) {
  return (n) => n < e ? 0 : n > t ? 1 : i(/* @__PURE__ */ Fe(e, t, n));
}
function Bn(e, t) {
  e.min = t.min, e.max = t.max;
}
function H(e, t) {
  Bn(e.x, t.x), Bn(e.y, t.y);
}
function In(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Fn(e, t, i, n, s) {
  return e -= t, e = dt(e, 1 / i, n), s !== void 0 && (e = dt(e, 1 / s, n)), e;
}
function Xc(e, t = 0, i = 1, n = 0.5, s, a = e, r = e) {
  if (q.test(t) && (t = parseFloat(t), t = C(r.min, r.max, t / 100) - r.min), typeof t != "number")
    return;
  let o = C(a.min, a.max, n);
  e === a && (o -= t), e.min = Fn(e.min, t, i, o, s), e.max = Fn(e.max, t, i, o, s);
}
function On(e, t, [i, n, s], a, r) {
  Xc(e, t[i], t[n], t[s], t.scale, a, r);
}
const Yc = ["x", "scaleX", "originX"], qc = ["y", "scaleY", "originY"];
function jn(e, t, i, n) {
  On(e.x, t, Yc, i ? i.x : void 0, n ? n.x : void 0), On(e.y, t, qc, i ? i.y : void 0, n ? n.y : void 0);
}
function _n(e) {
  return e.translate === 0 && e.scale === 1;
}
function Br(e) {
  return _n(e.x) && _n(e.y);
}
function Un(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Zc(e, t) {
  return Un(e.x, t.x) && Un(e.y, t.y);
}
function Wn(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Ir(e, t) {
  return Wn(e.x, t.x) && Wn(e.y, t.y);
}
function Kn(e) {
  return U(e.x) / U(e.y);
}
function Hn(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Jc {
  constructor() {
    this.members = [];
  }
  add(t) {
    ri(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ai(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(t) {
    const i = this.members.findIndex((s) => t === s);
    if (i === 0)
      return !1;
    let n;
    for (let s = i; s >= 0; s--) {
      const a = this.members[s];
      if (a.isPresent !== !1) {
        n = a;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, i) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, i && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: i, resumingFrom: n } = t;
      i.onExitComplete && i.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Qc(e, t, i) {
  let n = "";
  const s = e.x.translate / t.x, a = e.y.translate / t.y, r = i?.z || 0;
  if ((s || a || r) && (n = `translate3d(${s}px, ${a}px, ${r}px) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), i) {
    const { transformPerspective: d, rotate: u, rotateX: h, rotateY: f, skewX: p, skewY: g } = i;
    d && (n = `perspective(${d}px) ${n}`), u && (n += `rotate(${u}deg) `), h && (n += `rotateX(${h}deg) `), f && (n += `rotateY(${f}deg) `), p && (n += `skewX(${p}deg) `), g && (n += `skewY(${g}deg) `);
  }
  const o = e.x.scale * t.x, l = e.y.scale * t.y;
  return (o !== 1 || l !== 1) && (n += `scale(${o}, ${l})`), n || "none";
}
const Et = ["", "X", "Y", "Z"], eu = 1e3;
let tu = 0;
function Ct(e, t, i, n) {
  const { latestValues: s } = t;
  s[e] && (i[e] = s[e], t.setStaticValue(e, 0), n && (n[e] = 0));
}
function Fr(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const i = Tr(t);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: s, layoutId: a } = e.options;
    window.MotionCancelOptimisedAnimation(i, "transform", E, !(s || a));
  }
  const { parent: n } = e;
  n && !n.hasCheckedOptimisedAppear && Fr(n);
}
function Or({ attachResizeListener: e, defaultParent: t, measureScroll: i, checkIsScrollRoot: n, resetTransform: s }) {
  return class {
    constructor(r = {}, o = t?.()) {
      this.id = tu++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(su), this.nodes.forEach(lu), this.nodes.forEach(cu), this.nodes.forEach(ru);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Wc());
    }
    addEventListener(r, o) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new ci()), this.eventHandlers.get(r).add(o);
    }
    notifyListeners(r, ...o) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...o);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = Qs(r) && !Ho(r), this.instance = r;
      const { layoutId: o, layout: l, visualElement: d } = this.options;
      if (d && !d.current && d.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || o) && (this.isLayoutDirty = !0), e) {
        let u, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        E.read(() => {
          h = window.innerWidth;
        }), e(r, () => {
          const p = window.innerWidth;
          p !== h && (h = p, this.root.updateBlockedByResize = !0, u && u(), u = Kc(f, 250), nt.hasAnimatedSinceResize && (nt.hasAnimatedSinceResize = !1, this.nodes.forEach(Gn)));
        });
      }
      o && this.root.registerSharedNode(o, this), this.options.animate !== !1 && d && (o || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || d.getDefaultTransition() || pu, { onLayoutAnimationStart: v, onLayoutAnimationComplete: w } = d.getProps(), x = !this.targetLayout || !Ir(this.targetLayout, p), T = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || T || h && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const b = {
            ...Ti(g, "layout"),
            onPlay: v,
            onComplete: w
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b), this.setAnimationOrigin(u, T);
        } else
          h || Gn(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ie(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(uu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Fr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: o, layout: l } = this.options;
      if (o === void 0 && !l)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($n);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(zn);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ou), this.nodes.forEach(iu), this.nodes.forEach(nu)) : this.nodes.forEach(zn), this.clearAllSnapshots();
      const o = W.now();
      F.delta = Z(0, 1e3 / 60, o - F.timestamp), F.timestamp = o, F.isProcessing = !0, xt.update.process(F), xt.preRender.process(F), xt.render.process(F), F.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Pi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(au), this.sharedNodes.forEach(du);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, E.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      E.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !U(this.snapshot.measuredBox.x) && !U(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = M(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o && o.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (o = !1), o && this.instance) {
        const l = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !Br(this.projectionDelta), l = this.getTransformTemplate(), d = l ? l(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      r && this.instance && (o || oe(this.latestValues) || u) && (s(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const o = this.measurePageBox();
      let l = this.removeElementScroll(o);
      return r && (l = this.removeTransform(l)), mu(l), {
        animationId: this.root.animationId,
        measuredBox: o,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return M();
      const o = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(gu))) {
        const { scroll: d } = this.root;
        d && (ye(o.x, d.offset.x), ye(o.y, d.offset.y));
      }
      return o;
    }
    removeElementScroll(r) {
      const o = M();
      if (H(o, r), this.scroll?.wasRoot)
        return o;
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l], { scroll: u, options: h } = d;
        d !== this.root && u && h.layoutScroll && (u.wasRoot && H(o, r), ye(o.x, u.offset.x), ye(o.y, u.offset.y));
      }
      return o;
    }
    applyTransform(r, o = !1) {
      const l = M();
      H(l, r);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !o && u.options.layoutScroll && u.scroll && u !== u.root && xe(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), oe(u.latestValues) && xe(l, u.latestValues);
      }
      return oe(this.latestValues) && xe(l, this.latestValues), l;
    }
    removeTransform(r) {
      const o = M();
      H(o, r);
      for (let l = 0; l < this.path.length; l++) {
        const d = this.path[l];
        if (!d.instance || !oe(d.latestValues))
          continue;
        zt(d.latestValues) && d.updateSnapshot();
        const u = M(), h = d.measurePageBox();
        H(u, h), jn(o, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u);
      }
      return oe(this.latestValues) && jn(o, this.latestValues), o;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const o = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== o;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Ie(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), H(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = M(), this.targetWithTransforms = M()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : H(this.target, this.layout.layoutBox), gr(this.target, this.targetDelta)) : H(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Ie(this.relativeTargetOrigin, this.target, f.target), H(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || zt(this.parent.latestValues) || mr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const r = this.getLead(), o = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === F.timestamp && (l = !1), l)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      H(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      Ll(this.layoutCorrected, this.treeScale, this.path, o), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = M());
      const { target: p } = r;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (In(this.prevProjectionDelta.x, this.projectionDelta.x), In(this.prevProjectionDelta.y, this.projectionDelta.y)), Be(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !Hn(this.projectionDelta.x, this.prevProjectionDelta.x) || !Hn(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ve(), this.projectionDelta = ve(), this.projectionDeltaWithTransform = ve();
    }
    setAnimationOrigin(r, o = !1) {
      const l = this.snapshot, d = l ? l.latestValues : {}, u = { ...this.latestValues }, h = ve();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
      const f = M(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = p !== g, w = this.getStack(), x = !w || w.members.length <= 1, T = !!(v && !x && this.options.crossfade === !0 && !this.path.some(fu));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (N) => {
        const S = N / 1e3;
        Xn(h.x, r.x, S), Xn(h.y, r.y, S), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ie(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), hu(this.relativeTarget, this.relativeTargetOrigin, f, S), b && Zc(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = M()), H(b, this.relativeTarget)), v && (this.animationValues = u, $c(u, d, this.latestValues, S, T, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ie(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = E.update(() => {
        nt.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Te(0)), this.currentAnimation = _c(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (o) => {
            this.mixTargetDelta(o), r.onUpdate && r.onUpdate(o);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(eu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: o, target: l, layout: d, latestValues: u } = r;
      if (!(!o || !l || !d)) {
        if (this !== r && this.layout && d && jr(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          l = this.target || M();
          const h = U(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = U(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        H(o, l), xe(o, u), Be(this.projectionDeltaWithTransform, this.layoutCorrected, o, u);
      }
    }
    registerSharedNode(r, o) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Jc()), this.sharedNodes.get(r).add(o);
      const d = o.options.initialPromotionConfig;
      o.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(o) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: o, preserveFollowOpacity: l } = {}) {
      const d = this.getStack();
      d && d.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), o && this.setOptions({ transition: o });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let o = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (o = !0), !o)
        return;
      const d = {};
      l.z && Ct("z", r, d, this.animationValues);
      for (let u = 0; u < Et.length; u++)
        Ct(`rotate${Et[u]}`, r, d, this.animationValues), Ct(`skew${Et[u]}`, r, d, this.animationValues);
      r.render();
      for (const u in d)
        r.setStaticValue(u, d[u]), this.animationValues && (this.animationValues[u] = d[u]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, o) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = it(o?.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = it(o?.pointerEvents) || ""), this.hasProjected && !oe(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const u = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let h = Qc(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (h = l(u, h)), r.transform = h;
      const { x: f, y: p } = this.projectionDelta;
      r.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, d.animationValues ? r.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : r.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const g in Ue) {
        if (u[g] === void 0)
          continue;
        const { correct: v, applyTo: w, isCSSVariable: x } = Ue[g], T = h === "none" ? u[g] : v(u[g], d);
        if (w) {
          const b = w.length;
          for (let N = 0; N < b; N++)
            r[w[N]] = T;
        } else
          x ? this.options.visualElement.renderState.vars[g] = T : r[g] = T;
      }
      this.options.layoutId && (r.pointerEvents = d === this ? it(o?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach($n), this.root.sharedNodes.clear();
    }
  };
}
function iu(e) {
  e.updateLayout();
}
function nu(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: n } = e.layout, { animationType: s } = e.options, a = t.source !== e.layout.source;
    s === "size" ? $((u) => {
      const h = a ? t.measuredBox[u] : t.layoutBox[u], f = U(h);
      h.min = i[u].min, h.max = h.min + f;
    }) : jr(s, t.layoutBox, i) && $((u) => {
      const h = a ? t.measuredBox[u] : t.layoutBox[u], f = U(i[u]);
      h.max = h.min + f, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + f);
    });
    const r = ve();
    Be(r, i, t.layoutBox);
    const o = ve();
    a ? Be(o, e.applyTransform(n, !0), t.measuredBox) : Be(o, i, t.layoutBox);
    const l = !Br(r);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: f } = u;
        if (h && f) {
          const p = M();
          Ie(p, t.layoutBox, h.layoutBox);
          const g = M();
          Ie(g, i, f.layoutBox), Ir(p, g) || (d = !0), u.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = p, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: i,
      snapshot: t,
      delta: o,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: i } = e.options;
    i && i();
  }
  e.options.transition = void 0;
}
function su(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ru(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function au(e) {
  e.clearSnapshot();
}
function $n(e) {
  e.clearMeasurements();
}
function zn(e) {
  e.isLayoutDirty = !1;
}
function ou(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Gn(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function lu(e) {
  e.resolveTargetDelta();
}
function cu(e) {
  e.calcProjection();
}
function uu(e) {
  e.resetSkewAndRotation();
}
function du(e) {
  e.removeLeadSnapshot();
}
function Xn(e, t, i) {
  e.translate = C(t.translate, 0, i), e.scale = C(t.scale, 1, i), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Yn(e, t, i, n) {
  e.min = C(t.min, i.min, n), e.max = C(t.max, i.max, n);
}
function hu(e, t, i, n) {
  Yn(e.x, t.x, i.x, n), Yn(e.y, t.y, i.y, n);
}
function fu(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const pu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, qn = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Zn = qn("applewebkit/") && !qn("chrome/") ? Math.round : G;
function Jn(e) {
  e.min = Zn(e.min), e.max = Zn(e.max);
}
function mu(e) {
  Jn(e.x), Jn(e.y);
}
function jr(e, t, i) {
  return e === "position" || e === "preserve-aspect" && !wc(Kn(t), Kn(i), 0.2);
}
function gu(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const yu = Or({
  attachResizeListener: (e, t) => We(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Dt = {
  current: void 0
}, _r = Or({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Dt.current) {
      const e = new yu({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Dt.current = e;
    }
    return Dt.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), xu = {
  pan: {
    Feature: Ic
  },
  drag: {
    Feature: Bc,
    ProjectionNode: _r,
    MeasureLayout: Mr
  }
};
function Qn(e, t, i) {
  const { props: n } = e;
  e.animationState && n.whileHover && e.animationState.setActive("whileHover", i === "Start");
  const s = "onHover" + i, a = n[s];
  a && E.postRender(() => a(t, ze(t)));
}
class vu extends se {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = jo(t, (i, n) => (Qn(this.node, n, "Start"), (s) => Qn(this.node, s, "End"))));
  }
  unmount() {
  }
}
class bu extends se {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ke(We(this.node.current, "focus", () => this.onFocus()), We(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function es(e, t, i) {
  const { props: n } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && n.whileTap && e.animationState.setActive("whileTap", i === "Start");
  const s = "onTap" + (i === "End" ? "" : i), a = n[s];
  a && E.postRender(() => a(t, ze(t)));
}
class wu extends se {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Ko(t, (i, n) => (es(this.node, n, "Start"), (s, { success: a }) => es(this.node, s, a ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Qt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Tu = (e) => {
  const t = Qt.get(e.target);
  t && t(e);
}, Su = (e) => {
  e.forEach(Tu);
};
function Pu({ root: e, ...t }) {
  const i = e || document;
  Mt.has(i) || Mt.set(i, {});
  const n = Mt.get(i), s = JSON.stringify(t);
  return n[s] || (n[s] = new IntersectionObserver(Su, { root: e, ...t })), n[s];
}
function Au(e, t, i) {
  const n = Pu(t);
  return Qt.set(e, i), n.observe(e), () => {
    Qt.delete(e), n.unobserve(e);
  };
}
const Nu = {
  some: 0,
  all: 1
};
class Vu extends se {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: i, margin: n, amount: s = "some", once: a } = t, r = {
      root: i ? i.current : void 0,
      rootMargin: n,
      threshold: typeof s == "number" ? s : Nu[s]
    }, o = (l) => {
      const { isIntersecting: d } = l;
      if (this.isInView === d || (this.isInView = d, a && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), f = d ? u : h;
      f && f(l);
    };
    return Au(this.node.current, r, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(ku(t, i)) && this.startObserver();
  }
  unmount() {
  }
}
function ku({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (i) => e[i] !== t[i];
}
const Eu = {
  inView: {
    Feature: Vu
  },
  tap: {
    Feature: wu
  },
  focus: {
    Feature: bu
  },
  hover: {
    Feature: vu
  }
}, Cu = {
  layout: {
    ProjectionNode: _r,
    MeasureLayout: Mr
  }
}, Du = {
  ...mc,
  ...Eu,
  ...xu,
  ...Cu
}, y = /* @__PURE__ */ Dl(Du, Hl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ru = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, i, n) => n ? n.toUpperCase() : i.toLowerCase()
), ts = (e) => {
  const t = Ru(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ur = (...e) => e.filter((t, i, n) => !!t && t.trim() !== "" && n.indexOf(t) === i).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Lu = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bu = ei(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: a,
    iconNode: r,
    ...o
  }, l) => at(
    "svg",
    {
      ref: l,
      ...Lu,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(i) * 24 / Number(t) : i,
      className: Ur("lucide", s),
      ...o
    },
    [
      ...r.map(([d, u]) => at(d, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = (e, t) => {
  const i = ei(
    ({ className: n, ...s }, a) => at(Bu, {
      ref: a,
      iconNode: t,
      className: Ur(
        `lucide-${Mu(ts(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return i.displayName = ts(e), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iu = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Fu = Ii("arrow-right", Iu);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], ju = Ii("menu", Ou);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Uu = Ii("x", _u), st = [
  { id: "cover", label: "å°é¢" },
  { id: "resume", label: "ç®å" },
  { id: "toc", label: "ç®å½" },
  { id: "skillmap", label: "æè½å¾è°±" },
  { id: "works-cover", label: "ä½åå°é¢" },
  { id: "case1", label: "æ¡ä¾ä¸" },
  { id: "case2", label: "æ¡ä¾äº" },
  { id: "case3", label: "æ¡ä¾ä¸" },
  { id: "case4", label: "æ¡ä¾å" },
  { id: "skill-supplement", label: "åé¡¹è½åè¡¥å" },
  { id: "backcover", label: "èç³»æ¹å¼" }
];
function Wu({
  currentSection: e,
  onNavigate: t
}) {
  const [i, n] = we(!1), s = st.findIndex((a) => a.id === e);
  return /* @__PURE__ */ m(rt, { children: [
    /* @__PURE__ */ c("nav", { className: "fixed right-7 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 items-center", children: st.map((a, r) => /* @__PURE__ */ m(
      "button",
      {
        onClick: () => t(a.id),
        className: "group relative flex items-center h-4",
        "aria-label": a.label,
        children: [
          /* @__PURE__ */ c(
            y.span,
            {
              initial: !1,
              animate: {
                opacity: r === s ? 1 : 0,
                x: r === s ? 0 : 8
              },
              transition: { duration: 0.2 },
              className: "absolute right-7 whitespace-nowrap text-[10px] text-[#888] tracking-[0.06em]",
              children: a.label
            }
          ),
          /* @__PURE__ */ c("span", { className: "absolute right-7 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-[#888] tracking-[0.06em]", children: a.label }),
          /* @__PURE__ */ c(
            y.span,
            {
              animate: {
                width: r === s ? 20 : 6,
                height: 2,
                backgroundColor: r === s ? "#222" : "#d0d0d0"
              },
              whileHover: { backgroundColor: "#888", width: 14 },
              transition: { duration: 0.3, ease: "easeOut" },
              className: "block rounded-full"
            }
          )
        ]
      },
      a.id
    )) }),
    /* @__PURE__ */ c(
      y.button,
      {
        whileTap: { scale: 0.92 },
        className: "fixed top-5 right-5 z-[60] lg:hidden w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-[#f0f0f0]",
        onClick: () => n(!i),
        children: i ? /* @__PURE__ */ c(Uu, { size: 16, strokeWidth: 1.5 }) : /* @__PURE__ */ c(ju, { size: 16, strokeWidth: 1.5 })
      }
    ),
    /* @__PURE__ */ c(Qo, { children: i && /* @__PURE__ */ m(rt, { children: [
      /* @__PURE__ */ c(
        y.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "fixed inset-0 bg-black/10 z-40 lg:hidden",
          onClick: () => n(!1)
        }
      ),
      /* @__PURE__ */ c(
        y.div,
        {
          initial: { opacity: 0, x: 80 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 80 },
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          className: "fixed inset-y-0 right-0 w-60 bg-white/98 backdrop-blur-lg z-50 shadow-2xl flex flex-col pt-20 px-5 gap-0.5 lg:hidden border-l border-[#f0f0f0]",
          children: st.map((a, r) => /* @__PURE__ */ m(
            y.button,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: r * 0.03, duration: 0.25 },
              onClick: () => {
                t(a.id), n(!1);
              },
              className: `text-left py-2.5 px-3 rounded-lg text-[13px] tracking-[0.04em] transition-all ${r === s ? "bg-[#f5f5f5] text-[#111]" : "text-[#999] hover:text-[#444] hover:bg-[#fafafa]"}`,
              children: [
                /* @__PURE__ */ c("span", { className: "text-[10px] text-[#ccc] mr-2.5 tracking-[0.1em]", children: String(r + 1).padStart(2, "0") }),
                a.label
              ]
            },
            a.id
          ))
        }
      )
    ] }) })
  ] });
}
function Ku({
  coverInfo: e
}) {
  const [t, i] = we({ x: 0, y: 0 });
  fe(() => {
    let a;
    const r = (o) => {
      cancelAnimationFrame(a), a = requestAnimationFrame(() => {
        const l = window.innerWidth / 2, d = window.innerHeight / 2;
        i({
          x: (o.clientX - l) / l * 8,
          y: (o.clientY - d) / d * 8
        });
      });
    };
    return window.addEventListener("mousemove", r), () => {
      window.removeEventListener("mousemove", r), cancelAnimationFrame(a);
    };
  }, []);
  const n = 1 + (Math.abs(t.x) + Math.abs(t.y)) * 1e-3, s = Math.min(Math.max(n, 0.98), 1.02);
  return /* @__PURE__ */ m(
    "section",
    {
      id: "cover",
      className: "min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#fcfcfc]",
      style: { fontFamily: "'Noto Sans SC', sans-serif" },
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "absolute inset-0 opacity-[0.025] transition-transform duration-500 ease-out",
            style: { transform: `translate(${t.x}px, ${t.y}px)` },
            children: /* @__PURE__ */ c(
              "div",
              {
                className: "w-full h-full",
                style: {
                  backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                  backgroundSize: "100px 100px"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            className: "absolute inset-0 pointer-events-none transition-transform duration-500 ease-out",
            style: { transform: `translate(${t.x * 0.6}px, ${t.y * 0.6}px)` },
            children: /* @__PURE__ */ c(
              y.div,
              {
                initial: { opacity: 0.3 },
                animate: { opacity: [0.3, 0.7, 0.3] },
                transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-transparent rounded-full blur-3xl"
              }
            )
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 1 },
            className: "absolute top-10 left-10 w-16 h-16",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-full h-px bg-[#ddd]" }),
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-px h-full bg-[#ddd]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1, duration: 1 },
            className: "absolute bottom-10 right-10 w-16 h-16",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-full h-px bg-[#ddd]" }),
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-px h-full bg-[#ddd]" })
            ]
          }
        ),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            transition: { duration: 1.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            className: "absolute top-[36%] left-[12%] right-[12%] h-px bg-[#eee] origin-left"
          }
        ),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            transition: { duration: 1.6, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] },
            className: "absolute bottom-[36%] left-[12%] right-[12%] h-px bg-[#eee] origin-right"
          }
        ),
        /* @__PURE__ */ m(
          "div",
          {
            className: "relative z-10 text-center px-8 max-w-3xl transition-transform duration-300 ease-out",
            style: { transform: `scale(${s})` },
            children: [
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.3 },
                  children: /* @__PURE__ */ c("span", { className: "text-[9px] tracking-[0.7em] text-[#c0c0c0] uppercase", children: "Design Portfolio Â· 2024" })
                }
              ),
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                  whileHover: {
                    textShadow: "2px 2px 0px rgba(0,0,0,0.06), 1px 1px 0px rgba(0,0,0,0.04)"
                  },
                  className: "mt-10 cursor-pointer group",
                  children: /* @__PURE__ */ c("h1", { className: "text-[#111] text-[clamp(1.8rem,5vw,3.5rem)] tracking-[0.14em] leading-[1.25] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#1a1a1a] group-hover:via-[#555] group-hover:to-[#1a1a1a] group-hover:bg-clip-text group-hover:text-transparent", children: "è§è§è®¾è®¡å¨æ¡" })
                }
              ),
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.7 },
                  whileHover: { scale: 1.02 },
                  className: "mt-4 cursor-pointer",
                  children: /* @__PURE__ */ c("h2", { className: "text-[#aaa] text-[clamp(0.7rem,1.5vw,0.95rem)] tracking-[0.25em] uppercase transition-all duration-300 hover:tracking-[0.3em]", children: "Design Manager / Visual Supervisor" })
                }
              ),
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: { duration: 0.6, delay: 1 },
                  className: "w-8 h-px bg-[#d0d0d0] mx-auto mt-10 mb-10 origin-center"
                }
              ),
              /* @__PURE__ */ m(
                y.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 0.8, delay: 1.1 },
                  children: [
                    /* @__PURE__ */ c("p", { className: "text-[#999] text-[clamp(0.68rem,1.1vw,0.8rem)] tracking-[0.06em] leading-[2.4] max-w-md mx-auto", children: "å¨é¾è·¯è§è§ç®¡ç Â· å¢éSOPä½ç³»æ­å»º Â· 1350+ SKUè·¨å¹³å°ç»ç­¹" }),
                    /* @__PURE__ */ c("p", { className: "text-[#bbb] text-[clamp(0.65rem,1vw,0.75rem)] tracking-[0.06em] leading-[2.4] mt-1", children: "ææ Â· ç²¾ä¿® Â· åªè¾ Â· 3Dåä½ Â· å¨æ¡è½å°" })
                  ]
                }
              ),
              /* @__PURE__ */ m(
                y.div,
                {
                  initial: { opacity: 0, y: 3 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 1.5 },
                  className: "mt-20 space-y-3",
                  children: [
                    /* @__PURE__ */ c(
                      y.div,
                      {
                        whileHover: {
                          scale: 1.03,
                          y: -3,
                          boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
                        },
                        className: "inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gray-50/80 to-gray-100/60 shadow-sm transition-all duration-300",
                        children: /* @__PURE__ */ m("div", { className: "text-[11px] tracking-[0.12em] text-[#888]", children: [
                          /* @__PURE__ */ c("span", { children: e.name }),
                          "Â Â·Â ",
                          /* @__PURE__ */ c("span", { children: e.phone })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ c(
                      y.div,
                      {
                        whileHover: {
                          scale: 1.03,
                          y: -3,
                          boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
                        },
                        className: "inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-gray-50/80 to-gray-100/60 shadow-sm transition-all duration-300",
                        children: /* @__PURE__ */ c("p", { className: "text-[11px] tracking-[0.08em] text-[#999]", children: e.email })
                      }
                    ),
                    /* @__PURE__ */ c("div", { className: "relative inline-block" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2.2 },
            className: "absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3",
            children: [
              /* @__PURE__ */ c("span", { className: "text-[8px] tracking-[0.35em] text-[#ccc] uppercase", children: "Scroll" }),
              /* @__PURE__ */ c(
                y.div,
                {
                  animate: { scaleY: [0.4, 1, 0.4] },
                  transition: { repeat: 1 / 0, duration: 2.5, ease: "easeInOut" },
                  className: "w-px h-7 bg-[#ddd] origin-top"
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Ge({
  id: e,
  children: t,
  className: i = "",
  dark: n = !1,
  pageNum: s
}) {
  const a = n ? "bg-[#0c0c0c]" : "bg-white", r = n ? "text-white" : "text-[#1a1a1a]", o = n ? "text-white/20" : "text-[#d0d0d0]", [l, d] = we({ x: 0, y: 0 });
  return fe(() => {
    let u;
    const h = (f) => {
      cancelAnimationFrame(u), u = requestAnimationFrame(() => {
        const p = window.innerWidth / 2, g = window.innerHeight / 2;
        d({
          x: (f.clientX - p) / p * 30,
          y: (f.clientY - g) / g * 30
        });
      });
    };
    return window.addEventListener("mousemove", h), () => {
      window.removeEventListener("mousemove", h), cancelAnimationFrame(u);
    };
  }, []), /* @__PURE__ */ m(
    "section",
    {
      id: e,
      className: `min-h-screen w-full relative flex flex-col ${a} ${r} ${i} overflow-hidden`,
      style: { fontFamily: "'Noto Sans SC', 'Alibaba PuHuiTi', sans-serif" },
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "absolute inset-0 pointer-events-none transition-transform duration-300 ease-out",
            style: { transform: `translate(${l.x}px, ${l.y}px)` },
            children: /* @__PURE__ */ c(
              y.div,
              {
                initial: { opacity: 0.3 },
                animate: { opacity: [0.3, 0.7, 0.3] },
                transition: { duration: 5, repeat: 1 / 0, ease: "easeInOut", delay: 0.1 },
                className: `absolute top-1/3 left-1/3 w-[500px] h-[500px] ${n ? "bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-transparent" : "bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-transparent"} rounded-full blur-3xl`
              }
            )
          }
        ),
        /* @__PURE__ */ c("div", { className: `absolute top-0 left-[8%] right-[8%] h-px ${n ? "bg-white/[0.04]" : "bg-[#f0f0f0]"}` }),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { opacity: 0, rotateY: -15, scale: 0.95 },
            whileInView: { opacity: 1, rotateY: 0, scale: 1 },
            viewport: { once: !0, amount: 0.08 },
            transition: {
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 0.8 }
            },
            style: {
              perspective: "2000px",
              transformStyle: "preserve-3d"
            },
            className: "flex-1 flex flex-col",
            children: t
          }
        ),
        s !== void 0 && /* @__PURE__ */ c("div", { className: `absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] ${o}`, children: String(s).padStart(2, "0") })
      ]
    }
  );
}
function L({
  children: e,
  delay: t = 0,
  y: i = 20,
  className: n = ""
}) {
  return /* @__PURE__ */ c(
    y.div,
    {
      initial: { opacity: 0, y: i },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.6, delay: t, ease: [0.25, 0.1, 0.25, 1] },
      className: n,
      children: e
    }
  );
}
function Xe({
  en: e,
  zh: t,
  sub: i,
  dark: n = !1
}) {
  const s = n ? "text-white/30" : "text-[#b0b0b0]", a = n ? "text-white" : "text-[#111]", r = n ? "bg-white/10" : "bg-[#e0e0e0]", o = n ? "text-white/25" : "text-[#c0c0c0]";
  return /* @__PURE__ */ m(
    y.div,
    {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      className: "mb-10 md:mb-14",
      children: [
        /* @__PURE__ */ c("div", { className: `text-[10px] tracking-[0.5em] ${s} mb-3 uppercase`, children: e }),
        /* @__PURE__ */ c(
          y.h2,
          {
            whileHover: {
              textShadow: "1.5px 1.5px 4px rgba(0,0,0,0.08)",
              scale: 1.01
            },
            whileTap: { scale: 0.98 },
            className: `text-[clamp(1.2rem,2.8vw,1.9rem)] tracking-[0.1em] ${a} leading-[1.4] cursor-pointer relative inline-block`,
            children: t
          }
        ),
        /* @__PURE__ */ c("div", { className: `w-10 h-px ${r} mt-4` }),
        i && /* @__PURE__ */ c("p", { className: `text-[11px] ${o} mt-3 tracking-[0.04em]`, children: i })
      ]
    }
  );
}
function Hu({
  coverInfo: e,
  resumeData: t
}) {
  return /* @__PURE__ */ c(Ge, { id: "resume", pageNum: 2, children: /* @__PURE__ */ c("div", { className: "flex-1 flex items-start justify-center py-14 md:py-20 px-6 md:px-10", children: /* @__PURE__ */ m("div", { className: "w-full max-w-[900px]", children: [
    /* @__PURE__ */ c(Xe, { en: "Resume", zh: "ä¸ªäººç®å", sub: "è®¾è®¡ç®¡çå² Â· å¨é¾è·¯è§è§ä¸»ç®¡" }),
    /* @__PURE__ */ c(L, { delay: 0.1, children: /* @__PURE__ */ c("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-5 mb-12", children: [
      { label: "å§å", value: e.name },
      { label: "çµè¯", value: e.phone },
      { label: "é®ç®±", value: e.email },
      { label: "ä½åé", value: e.portfolio }
    ].map((i) => /* @__PURE__ */ m(
      y.div,
      {
        whileHover: {
          scale: 1.02,
          textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.06)"
        },
        whileTap: { scale: 0.98 },
        className: "cursor-pointer relative group",
        children: [
          /* @__PURE__ */ c("div", { className: "text-[9px] tracking-[0.2em] text-[#b8b8b8] uppercase mb-1.5", children: i.label === "ä½åé" ? "ä½åéï¼ç¹å»è·³è½¬ï¼" : i.label }),
          /* @__PURE__ */ m(
            "a",
            {
              href: i.label === "é®ç®±" ? `mailto:${i.value}` : i.label === "çµè¯" ? `tel:${i.value}` : i.label === "ä½åé" ? "https://my.feishu.cn/wiki/GykTw9DSAicyUwkWdAecgP1knKb?from=from_copylink" : i.value,
              target: i.label === "ä½åé" ? "_blank" : void 0,
              rel: i.label === "ä½åé" ? "noopener noreferrer" : void 0,
              className: "text-[13px] text-[#333] tracking-[0.02em] relative block hover:text-blue-500 transition-colors break-words overflow-wrap-anywhere max-w-full",
              children: [
                i.label === "ä½åé" ? "https://my.feishu.cn/wiki/GykTw9DSAicyUwkWdAecgP1knKb?from=from_copylink" : i.value,
                /* @__PURE__ */ c(
                  y.div,
                  {
                    className: "absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-blue-400/60 to-purple-400/60",
                    initial: { width: 0 },
                    whileHover: { width: "100%" },
                    transition: { duration: 0.3, ease: "easeOut" }
                  }
                )
              ]
            }
          )
        ]
      },
      i.label
    )) }) }),
    /* @__PURE__ */ c(L, { delay: 0.15, children: /* @__PURE__ */ m("div", { className: "mb-12 relative pl-5 border-l-[2px] border-[#eee]", children: [
      /* @__PURE__ */ c(
        y.h3,
        {
          whileHover: {
            textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)"
          },
          className: "text-[10px] tracking-[0.25em] text-[#aaa] mb-3 uppercase cursor-pointer",
          children: "æ ¸å¿å®ä½ Â· Core Positioning"
        }
      ),
      /* @__PURE__ */ c("div", { className: "text-[13px] leading-[2.2] text-[#555] tracking-[0.01em] whitespace-pre-wrap", children: `æé¿ä» 0 å° 1 æ­å»ºè®¾è®¡æ åå SOP ä½ç³»ï¼ä¸»å¯¼å¢éè§æ¨¡åçµåè§è§æ´ä½äº¤ä»ãæ ¸å¿æ·±èç³»ç»åæµç¨ç®¡çä¸å¨é¾è·¯è§è§è½å°æ§è¡ï¼å¯é«æç»ç­¹ 2D è®¾è®¡ãè§é¢å¶ä½ã3D æ¸²æå¤æ¨¡åååä½ä¸ï¼ç»ç­¹å¤åºéºå¨åç±» SKU è§è§è§èä¸åè§ç®¡çï¼è½ç»åå¢éåå±èå¥ï¼æç»­ä¼åäººæéç½®ä¸ææ¬ç®¡æ§ã

å·å¤å®æåé¡¹ç®æè§£æç»´ï¼åäºæå¤æé¡¹ç®åæ¨¡ååæåãæµç¨åæ¢³çï¼æ¨å¨å¢éä»ç»éªååä½åæ ååãä½ç³»åè¿ä½è½¬åãçæäºé©¬éè·¨å¢è§è§å¨æ¡ææ³ï¼å¯ç¬ç«ç»ç­¹æ°åè§è§å¨æ¡ãå®è£å¯¼åè§é¢ãæ¹éç©æç­é«åéç¹é¡¹ç®ï¼éè¿è§è§ä½ç³»ä¼åæåé¡µé¢åç°ææä¸ç¨æ·ä½éªï¼æ¹åæµéæ¿æ¥ä¸è½¬åè¡¨ç°ã

çç»è¿ç¨åç±»ä¸ä¸è®¾è®¡ååå¬è¾å©å·¥å·ï¼åå©å·¥å·èµè½ç²¾ç®éå¤æµç¨ãæè´¨ææï¼åæ¶éè¿å®å SOP è§èä¸å¸¸æåæ°æ®å¤çï¼ä¼åæ°äººå¹å»ä½ç³»ï¼ç²¾ç®ä¸æå¨æï¼éä½è®¾è®¡è¿å·¥é¢æ¬¡ï¼ç¨³æ­¥æåå¢éæ´ä½äº¤ä»è´¨éä¸å±¥çº¦æçã` })
    ] }) }),
    /* @__PURE__ */ c(L, { delay: 0.2, children: /* @__PURE__ */ m(
      y.h3,
      {
        whileHover: {
          textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)",
          scale: 1.01
        },
        whileTap: { scale: 0.98 },
        className: "text-[10px] tracking-[0.25em] text-[#aaa] mb-6 uppercase cursor-pointer inline-block relative group",
        children: [
          "æ ¸å¿æè½ Â· Core Skills",
          /* @__PURE__ */ c(
            y.div,
            {
              className: "absolute bottom-0 left-0 h-[1px] bg-black/20",
              initial: { width: 0 },
              whileHover: { width: "100%" },
              transition: { duration: 0.3, ease: "easeOut" }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-14", children: [
      {
        num: "01",
        title: "è®¾è®¡ç¡¬æè½",
        items: [
          "Photoshop / Illustratorï¼æ ¸å¿é«é¢å·¥å·ï¼",
          "After Effectsï¼çµåå¨ç»/å®è£å¼å¯¼åè£ï¼",
          "Premiere Proï¼åäºé»è¾/èå¥ææ§ï¼",
          "Blenderï¼åºç¡å»ºæ¨¡+æ¸²æ+å¨ç»åä½ï¼",
          "Figmaï¼äº¤äºåå/ç½é¡µæ­å»ºï¼",
          "AIå·¥å·ï¼å¯çµ AI / è±å / å³æ¢¦"
        ]
      },
      {
        num: "02",
        title: "ä¸ä¸è½å",
        items: [
          "æ·±åº¦çæAmazonè§è§è§èä¸åè§çº¢çº¿",
          "å¨é¾è·¯è§è§è½å°ï¼ä»ææå°ä¸æ¶å¨æµç¨ï¼",
          "3Däº§åå¯è§ååç°ä¸å»ºæ¨¡å¢éé«æå¯¹æ¥",
          "å¤åºéº/å¤§è§æ¨¡SKUç»ç­¹ï¼1350+ SKUï¼",
          "å¯å¤ç¨è§è§æ¨¡æ¿ä½ç³»æ­å»º",
          "èªå¨ååå¬ä¸èæ¬ææï¼æä»¶æ¹ç®¡ç+èæ¬åºç¨ä¸èªå®ä¹å¼åï¼"
        ]
      },
      {
        num: "03",
        title: "ç®¡çè½å",
        items: [
          "å¢éSOPä½ç³»ä»0å°1æ­å»ºä¸æç»­ä¼å",
          "æ°äººå¸¦æä½ç³»ï¼4åæ°äººç¬ç«ä¸å²ï¼",
          "è·¨é¨é¨é«æåä½ï¼è¿è¥/éè´­/å»ºæ¨¡ï¼",
          "å¨æµç¨æ°æ®å¤çä¸ç¶é¢åæ",
          "ææ¬ç®¡æ§ä¸äººåèµæºä¼åéç½®"
        ]
      }
    ].map((i, n) => /* @__PURE__ */ c(L, { delay: 0.22 + n * 0.08, children: /* @__PURE__ */ m(
      y.div,
      {
        whileHover: { scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
        className: "bg-[#fafafa] rounded-2xl p-6 h-full transition-shadow duration-300",
        children: [
          /* @__PURE__ */ m("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ c("span", { className: "w-7 h-7 rounded-full bg-[#111] text-white text-[9px] flex items-center justify-center tracking-[0.05em]", children: i.num }),
            /* @__PURE__ */ c(
              y.h4,
              {
                whileHover: {
                  textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)"
                },
                className: "text-[12px] tracking-[0.08em] text-[#222] cursor-pointer",
                children: i.title
              }
            )
          ] }),
          /* @__PURE__ */ c("ul", { className: "space-y-2", children: i.items.map((s) => /* @__PURE__ */ m(
            y.li,
            {
              whileHover: {
                x: 3,
                textShadow: "1px 1px 2px rgba(0,0,0,0.05)"
              },
              className: "text-[11px] text-[#666] flex items-start gap-2.5 leading-[1.7] cursor-pointer",
              children: [
                /* @__PURE__ */ c("span", { className: "w-[3px] h-[3px] rounded-full bg-[#d0d0d0] mt-[7px] shrink-0" }),
                s
              ]
            },
            s
          )) })
        ]
      }
    ) }, i.num)) }),
    /* @__PURE__ */ c(L, { delay: 0.35, children: /* @__PURE__ */ m("div", { className: "mb-12", children: [
      /* @__PURE__ */ m(
        y.h3,
        {
          whileHover: {
            textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)",
            scale: 1.01
          },
          whileTap: { scale: 0.98 },
          className: "text-[10px] tracking-[0.25em] text-[#aaa] mb-5 uppercase cursor-pointer inline-block relative group",
          children: [
            "å·¥ä½ç»å Â· Experience",
            /* @__PURE__ */ c(
              y.div,
              {
                className: "absolute bottom-0 left-0 h-[1px] bg-black/20",
                initial: { width: 0 },
                whileHover: { width: "100%" },
                transition: { duration: 0.3, ease: "easeOut" }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ c(
        y.div,
        {
          whileHover: { scale: 1.01, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" },
          className: "border border-[#eee] rounded-2xl p-6 md:p-7 transition-all duration-300",
          children: /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2] text-[#666] whitespace-pre-wrap", children: `2023.04 - è³ä» | Amazon è§è§ä¸»ç®¡
æ¥æä¸å¹´å·¦å³è·¨å¢çµåè§è§ä»ä¸ç§¯æ·ï¼åæ¶å·å¤ä¸¤å¹´å¢éä¸»ç®¡ç®¡çç»éªï¼æ·±èçµåè§è§ä¸çº¿å®æä¸å¢éç»ç­¹ç®¡çå¨ç»´åº¦è½åã

å¢éç®¡çï¼å¸¦é¢å°åè®¾è®¡å¢éï¼ç»ç­¹å¤åºéºå¨åç±»è§è§å¨æ¡è¾åºï¼æ¶µçäº§åç²¾ä¿®ãA + é¡µé¢æé ãå®è£è§é¢å¶ä½ãè¥éç©æç­å¨é¾è·¯è§è§æ¯æå·¥ä½ãä¸»å¯¼ä»é¶æ­å»ºå¢éæ åå SOP ç®¡çä½ç³»ï¼å®åè®¾è®¡è§èãç¨¿ä»¶å®¡æ ¸æµç¨åé¡¹ç®æææºå¶ï¼å»ºç«å®æ´æ°äººå¹è®­ä¸å¨å²å¸¦æä½ç³»ï¼å©åæ°äººå¿«éééä¸å¡ãç¬ç«å±¥èãæç»­ä¼åå¢éåä½æµç¨ä¸äººåéç½®ï¼ç²¾ç®åä½å·¥ä½ç¯èï¼ç¨³æ­¥æåå¢éæ´ä½äº¤ä»åè´¨ä¸åä½æçã

æ ¸å¿ä¸å¡ï¼è´è´£äºé©¬éå¹³å°å¨é¾è·¯è§è§è½å°ï¼åå«äº§åä¸»å¾ç²¾ä¿®ãA + åçæäºãè¯´æä¹¦ãå¾åãå±ä¼æµ·æ¥è®¾è®¡ãå®è£å¼å¯¼è§é¢åä½ï¼æé¿ç»å 3D æ¸²æãå®ææ··åªå AE å¨æåè£å®æåå®¹è¾åºãå¸¸æåä¸è¿è¥ãéè´­ãå»ºæ¨¡ç­è·¨é¨é¨é«æååï¼ç²¾åå¯¹æ¥ä¸å¡éæ±ä¸é¡¹ç®èç¹ï¼ä¸¥æ ¼ææ§å¹³å°è§è§åè§æ åä¸åçç»ä¸è°æ§ãéè¿ä¼åè§è§åç°é»è¾ä¸åå®¹è¡¨è¾¾ï¼æåäº§åæµéæ¿æ¥ä¸ç¨æ·æµè§ä½éªï¼ææéä½ç¸å³å¨è¯¢è¯æ±ï¼èµè½åºéºæ´ä½è¿è¥ç¨³å¥åå±ã` })
        }
      )
    ] }) }),
    /* @__PURE__ */ c(L, { delay: 0.4, children: /* @__PURE__ */ m(
      y.h3,
      {
        whileHover: {
          textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)",
          scale: 1.01
        },
        whileTap: { scale: 0.98 },
        className: "text-[10px] tracking-[0.25em] text-[#aaa] mb-5 uppercase text-center cursor-pointer inline-block relative group mx-auto block",
        children: [
          "å¯éåæ ¸å¿ææ",
          /* @__PURE__ */ c(
            y.div,
            {
              className: "absolute bottom-0 left-0 h-[1px] bg-black/20",
              initial: { width: 0 },
              whileHover: { width: "100%" },
              transition: { duration: 0.3, ease: "easeOut" }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ m("div", { className: "mb-14 space-y-4", children: [
      /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[660px] mx-auto", children: [
        { num: "4å¨", sub: "â 2ä¸ªæ", label: "æ°äººå¹è®­å¨æ" },
        { num: "25%", sub: "â", label: "äº¤ä»æçæå" },
        { num: "15%", sub: "â 35%", label: "è¿å·¥çä¼å" }
      ].map((i, n) => /* @__PURE__ */ c(L, { delay: 0.42 + n * 0.04, children: /* @__PURE__ */ m(
        y.div,
        {
          whileHover: {
            scale: 1.05,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)"
          },
          whileTap: { scale: 0.98 },
          className: "text-center py-5 bg-[#fafafa] rounded-xl cursor-pointer transition-all duration-300",
          children: [
            /* @__PURE__ */ m(
              y.div,
              {
                whileHover: {
                  textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)"
                },
                className: "text-[clamp(0.95rem,1.6vw,1.15rem)] text-[#111] tracking-[0.04em]",
                children: [
                  i.num,
                  i.sub && /* @__PURE__ */ c("span", { className: "text-[10px] text-[#bbb] ml-1", children: i.sub })
                ]
              }
            ),
            /* @__PURE__ */ c("div", { className: "text-[10px] text-[#aaa] mt-1.5 tracking-[0.05em]", children: i.label })
          ]
        }
      ) }, i.label)) }),
      /* @__PURE__ */ c("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        { num: "100%", sub: "", label: "è§è§åè§ç" },
        { num: "12", sub: "åºéº", label: "å¤å¹³å°ç»ç­¹" },
        { num: "1350+", sub: "SKU", label: "å¤§è§æ¨¡ç®¡ç" },
        { num: "4äºº", sub: "", label: "å¸¦æç¬ç«ä¸å²" }
      ].map((i, n) => /* @__PURE__ */ c(L, { delay: 0.42 + (n + 3) * 0.04, children: /* @__PURE__ */ m(
        y.div,
        {
          whileHover: {
            scale: 1.05,
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)"
          },
          whileTap: { scale: 0.98 },
          className: "text-center py-5 bg-[#fafafa] rounded-xl cursor-pointer transition-all duration-300",
          children: [
            /* @__PURE__ */ m(
              y.div,
              {
                whileHover: {
                  textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)"
                },
                className: "text-[clamp(0.95rem,1.6vw,1.15rem)] text-[#111] tracking-[0.04em]",
                children: [
                  i.num,
                  i.sub && /* @__PURE__ */ c("span", { className: "text-[10px] text-[#bbb] ml-1", children: i.sub })
                ]
              }
            ),
            /* @__PURE__ */ c("div", { className: "text-[10px] text-[#aaa] mt-1.5 tracking-[0.05em]", children: i.label })
          ]
        }
      ) }, i.label)) })
    ] }),
    /* @__PURE__ */ c(L, { delay: 0.55, children: /* @__PURE__ */ m(
      y.h3,
      {
        whileHover: {
          textShadow: "1.5px 1.5px 3px rgba(0,0,0,0.08)",
          scale: 1.01
        },
        whileTap: { scale: 0.98 },
        className: "text-[10px] tracking-[0.25em] text-[#aaa] mb-5 uppercase cursor-pointer inline-block relative group",
        children: [
          "æ ¸å¿é¡¹ç®æ¦è§ Â· Project Highlights",
          /* @__PURE__ */ c(
            y.div,
            {
              className: "absolute bottom-0 left-0 h-[1px] bg-black/20",
              initial: { width: 0 },
              whileHover: { width: "100%" },
              transition: { duration: 0.3, ease: "easeOut" }
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: t.projects.map((i, n) => /* @__PURE__ */ c(L, { delay: 0.58 + n * 0.06, children: /* @__PURE__ */ m(
      y.div,
      {
        whileHover: {
          borderColor: "#c0c0c0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          scale: 1.02
        },
        whileTap: { scale: 0.98 },
        className: "border border-[#eee] rounded-xl p-5 transition-all duration-300 cursor-pointer",
        children: [
          /* @__PURE__ */ m("div", { className: "flex items-center gap-3 mb-2.5", children: [
            /* @__PURE__ */ c("span", { className: "text-[9px] tracking-[0.15em] text-[#ccc]", children: i.num }),
            /* @__PURE__ */ c("h4", { className: "text-[12px] text-[#222] tracking-[0.03em]", children: i.title })
          ] }),
          n === 0 ? /* @__PURE__ */ c("p", { className: "text-[11px] leading-[1.9] text-[#888]", children: "ä»0æ­å»ºå¢éSOPä½ç³»ï¼è¦çè®¾è®¡è§èãå®¡æ ¸æµç¨ãæææºå¶ä¸æ°äººå¹è®­ãè¿å·¥çä»35%éè³15%ï¼æ°äººä¸å²å¨æç¼©ç­50%ã" }) : n === 1 ? /* @__PURE__ */ c("p", { className: "text-[11px] leading-[1.9] text-[#888]", children: "ä¸»å¯¼ç³»åæ°åå¨æ¡è§è§è½å°ï¼æ¶µçäº§åç²¾ä¿®ãä¸»å¾å¥è£å A + é¡µé¢å¨å¥ç©æè¾åºï¼ç»ä¸åçè§è§è°æ§ï¼ä¸¥æ ¼éµå¾ªå¹³å°è§èææ§è§è§åè§ä¸åºåæ åã" }) : n === 2 ? /* @__PURE__ */ c("p", { className: "text-[11px] leading-[1.9] text-[#888]", children: "ç¬ç«å®æå®è£ç±»è§é¢ç­åãèæ¬ãå®æåªè¾ã3D æ¸²æå AE åè£å¨æµç¨å¶ä½ï¼ä¼ååå®¹åäºé»è¾ï¼æ¸æ°åç°å®è£æ­¥éª¤ï¼æåç¨æ·èªä¸»çè§£ä¸æä½ä½éªã" }) : n === 3 ? /* @__PURE__ */ c("p", { className: "text-[11px] leading-[1.9] text-[#888]", children: "ç»ç­¹å¤åºéºå¨åç±» SKU è§è§æ¹éäº¤ä»ï¼æ­å»ºæ ååææãå®¡æ ¸ä¸åä½æºå¶ï¼ä¼åä½ä¸æµç¨åå¢éåå·¥ï¼æåæ´ä½äº¤ä»æçä¸äººåå©ç¨æè½ã" }) : /* @__PURE__ */ c("p", { className: "text-[11px] leading-[1.9] text-[#888]", children: i.desc })
        ]
      }
    ) }, i.num)) })
  ] }) }) });
}
const $u = [
  { num: "01", label: "ä¸ªäººç®å", desc: "Resume Â· Core Positioning & Skills", target: "resume", pages: "P02" },
  { num: "02", label: "æè½å¾è°±", desc: "Skill Map Â· Full-Chain Capabilities", target: "skillmap", pages: "P04" },
  { num: "03", label: "æ ¸å¿æ¡ä¾", desc: "4 Core Cases Â· Team / Product / Video / Multi-Store", target: "case1", pages: "P06â09" },
  { num: "04", label: "åé¡¹è½åè¡¥å", desc: "Skill Supplement Â· Extended Capabilities", target: "skill-supplement", pages: "P10â11" },
  { num: "05", label: "èç³»æ¹å¼", desc: "Contact Â· Career Vision & Back Cover", target: "backcover", pages: "P12" }
];
function zu({ onNavigate: e }) {
  return /* @__PURE__ */ c(Ge, { id: "toc", pageNum: 3, children: /* @__PURE__ */ c("div", { className: "flex-1 flex items-center justify-center px-6 md:px-10 py-16", children: /* @__PURE__ */ m("div", { className: "w-full max-w-[680px]", children: [
    /* @__PURE__ */ c(Xe, { en: "Contents", zh: "ç®å½", sub: "å¨12é¡µ Â· ç¹å»è·³è½¬è³å¯¹åºç« è" }),
    /* @__PURE__ */ c("div", { className: "space-y-0", children: $u.map((t, i) => /* @__PURE__ */ m(
      y.button,
      {
        initial: { opacity: 0, x: -16 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.45, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] },
        whileHover: { x: 4 },
        onClick: () => e(t.target),
        className: "w-full group flex items-center py-6 border-b border-[#f0f0f0] hover:border-[#e0e0e0] transition-colors text-left",
        children: [
          /* @__PURE__ */ c("span", { className: "text-[10px] tracking-[0.25em] text-[#d0d0d0] group-hover:text-[#aaa] transition-colors w-10 shrink-0", children: t.num }),
          /* @__PURE__ */ m("span", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ c("span", { className: "text-[15px] tracking-[0.08em] text-[#222] group-hover:text-[#000] transition-colors", children: t.label }),
            /* @__PURE__ */ c("span", { className: "ml-4 text-[10px] tracking-[0.04em] text-[#ccc] hidden sm:inline", children: t.desc })
          ] }),
          /* @__PURE__ */ c("span", { className: "text-[9px] text-[#ddd] tracking-[0.12em] mr-4 hidden sm:block", children: t.pages }),
          /* @__PURE__ */ c(
            y.span,
            {
              className: "text-[11px] text-[#ddd] group-hover:text-[#aaa] transition-colors",
              whileHover: { x: 3 },
              children: "â"
            }
          )
        ]
      },
      t.num
    )) })
  ] }) }) });
}
const is = [
  {
    title: "2Dè§è§è®¾è®¡",
    en: "2D Visual Design",
    level: "ç²¾é",
    percent: 95,
    tools: ["Photoshop", "Illustrator", "PS AI"],
    items: [
      "äº§åç²¾ä¿®ä¸åå½±éå¡ï¼ç½åºå¾/åºæ¯å¾/ç»èå¾ï¼",
      "A+é¡µé¢è§è§è®¾è®¡ä¸åç¹ä¿¡æ¯æ¶ææç",
      "AIè¾å©è®¾è®¡å·¥å·é«æåºå¾",
      "äº§ååè£è®¾è®¡ä¸è¯´æä¹¦è§è§ä¼å"
    ],
    desc: "æ ¸å¿é«é¢æè½ãè½é«æå®æä»äº§åç½åºç²¾ä¿®å°åçå¨æ¡è§è§çå¨æµç¨è¾åºï¼åäºå©ç¨AIå·¥å·æåæç30%+ã"
  },
  {
    title: "è§é¢å¨æ¡å¶ä½",
    en: "Video Production",
    level: "ç²¾é",
    percent: 90,
    tools: ["Premiere Pro", "After Effects", "è¾¾è¬å¥"],
    items: [
      "PRåäºåªè¾ï¼äº§åå±ç¤º/å®è£å¼å¯¼/åçå®£ä¼ ï¼",
      "AEçµåå¨ç»åè£ï¼å®è£æ­¥éª¤/åè½äº®ç¹/åç¹å¨æï¼",
      "è§é¢èæ¬ç­åä¸åéè®¾è®¡",
      "æ¹éåè§é¢ç´ æè¾åºï¼æ¯æå¤SKUåæ­¥äº¤ä»ï¼",
      "è§é¢å¶ä½æ ååSOPæ­å»º"
    ],
    desc: "è½ç¬ç«å®æä»èæ¬ç­åå°æçè¾åºçå¨æµç¨ãæé¿æ¢³çåäºé»è¾ä¸ææ§æçèå¥ï¼å·å¤å¤§è§æ¨¡æ¹éçäº§è½åã"
  },
  {
    title: "3Dåä½è½å",
    en: "3D Collaboration",
    level: "çç»",
    percent: 75,
    tools: ["Blender", "æè´¨ç¯å"],
    items: [
      "Blenderåºç¡å»ºæ¨¡ä¸æ¸²ææä½",
      "ä¸ä¸å»ºæ¨¡å¢éé«æå¯¹æ¥ä¸éæ±æ²é",
      "3Dæ¸²æææå¨ç¨ææ§ï¼æè´¨/åå½±/è§åº¦ï¼",
      "äº§åå¨ç»åä½ä¸è½å°ææå®¡æ ¸",
      "å»ºæ¨¡è¿å·¥çéä½40%çæ²éæ¹æ³è®º"
    ],
    desc: "æ ¸å¿ä»·å¼å¨äºé«æå¯¹æ¥ä¸ä¸å»ºæ¨¡å¢éãç²¾åä¼ è¾¾éæ±ãå¨ç¨ææ§æ¸²æè½å°ææï¼å¤§å¹éä½æ²éè¿å·¥ææ¬ã"
  },
  {
    title: "å¢éç®¡çç»ç­¹",
    en: "Team Management",
    level: "çç»",
    percent: 85,
    tools: ["é£ä¹¦", "Notion", "Excel"],
    items: [
      "å¢éSOPä½ç³»ä»0å°1æ­å»ºï¼è®¾è®¡è§è/å®¡æ ¸/ææï¼",
      "æ°äººå¹è®­ä½ç³»ä¸å¸¦ææºå¶ï¼4äººç¬ç«ä¸å²ï¼",
      "å¤é¡¹ç®å¹¶è¡ç®¡çä¸ä¼åçº§ææ",
      "è·¨é¨é¨åä½æµç¨ä¼åï¼è¿è¥/éè´­/å»ºæ¨¡ï¼",
      "å¨æµç¨æ°æ®å¤çä¸æçç¶é¢åæ"
    ],
    desc: "æé¿å°æ¨¡ç³çå¢éçç¹è½¬åä¸ºå¯è½å°çæ ååæµç¨ã2å¹´ä¸»ç®¡ç»éªï¼äººåæçæå30%ã"
  },
  {
    title: "äº§åè§è§è½å°",
    en: "Product Implementation",
    level: "ç²¾é",
    percent: 92,
    tools: ["Amazon Seller Central", "å¨é¾è·¯å·¥å·é¾"],
    items: [
      "Amazonè§è§è§èä¸åè§çº¢çº¿æ·±åº¦çè§£",
      "äº§å0â1å¨é¾è·¯è§è§è½å°ï¼ä»ææå°ä¸æ¶ï¼",
      "å®è£è¯´æä¹¦/æä½æåè§è§è®¾è®¡",
      "è§è§ç©æå¨æ¡ç­åä¸æ§è¡",
      "å¤å¹³å°è§è§ééï¼Amazon/eBayï¼"
    ],
    desc: "æ·±åº¦çæAmazonå¹³å°è§è§è§èï¼åè§ç100%é¶è¿è§ï¼å¯å¤ç¨æ¨¡æ¿ä½ç³»æ¯æè§æ¨¡åè¿è¥ã"
  }
];
function Gu() {
  return /* @__PURE__ */ c(Ge, { id: "skillmap", pageNum: 4, children: /* @__PURE__ */ c("div", { className: "flex-1 flex items-start justify-center px-6 md:px-10 py-14 md:py-20", children: /* @__PURE__ */ m("div", { className: "w-full max-w-[1000px]", children: [
    /* @__PURE__ */ c(
      Xe,
      {
        en: "Skill Map",
        zh: "æè½å¾è°±",
        sub: "è¦çè§è§è®¾è®¡å¨é¾è·¯ Â· ä»æ§è¡å°ç®¡ççå¤ååè½åä½ç³»"
      }
    ),
    /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5 mb-5", children: is.slice(0, 3).map((e, t) => /* @__PURE__ */ c(ns, { skill: e, index: t }, e.title)) }),
    /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[660px] mx-auto", children: is.slice(3).map((e, t) => /* @__PURE__ */ c(ns, { skill: e, index: t + 3 }, e.title)) })
  ] }) }) });
}
function ns({ skill: e, index: t }) {
  return /* @__PURE__ */ c(L, { delay: 0.08 + t * 0.07, children: /* @__PURE__ */ m(
    y.div,
    {
      whileHover: { y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" },
      transition: { duration: 0.3 },
      className: "border border-[#eee] hover:border-[#ddd] rounded-2xl p-6 transition-colors h-full flex flex-col bg-white",
      children: [
        /* @__PURE__ */ m("div", { className: "flex items-start justify-between mb-4", children: [
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("h3", { className: "text-[14px] tracking-[0.06em] text-[#111]", children: e.title }),
            /* @__PURE__ */ c("span", { className: "text-[9px] tracking-[0.18em] text-[#ccc] uppercase", children: e.en })
          ] }),
          /* @__PURE__ */ c("span", { className: "text-[9px] tracking-[0.1em] px-2.5 py-1 rounded-full bg-[#f5f5f5] text-[#999]", children: e.level })
        ] }),
        /* @__PURE__ */ c("div", { className: "w-full h-[3px] bg-[#f0f0f0] rounded-full mb-4 overflow-hidden", children: /* @__PURE__ */ c(
          y.div,
          {
            initial: { width: 0 },
            whileInView: { width: `${e.percent}%` },
            viewport: { once: !0 },
            transition: { duration: 1.2, delay: 0.3 + t * 0.08, ease: [0.25, 0.1, 0.25, 1] },
            className: "h-full bg-[#222] rounded-full"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "flex flex-wrap gap-1.5 mb-5", children: e.tools.map((i) => /* @__PURE__ */ c("span", { className: "text-[9px] px-2 py-[3px] rounded-md bg-[#f8f8f8] text-[#999] border border-[#f0f0f0]", children: i }, i)) }),
        /* @__PURE__ */ c("ul", { className: "space-y-2 mb-5 flex-1", children: e.items.map((i) => /* @__PURE__ */ m("li", { className: "text-[11px] text-[#777] flex items-start gap-2.5 leading-[1.7]", children: [
          /* @__PURE__ */ c("span", { className: "w-[3px] h-[3px] rounded-full bg-[#d8d8d8] mt-[7px] shrink-0" }),
          i
        ] }, i)) }),
        /* @__PURE__ */ c("p", { className: "text-[11px] leading-[1.8] text-[#aaa] border-t border-[#f0f0f0] pt-4", children: e.desc })
      ]
    }
  ) });
}
function Xu() {
  return /* @__PURE__ */ m(
    "section",
    {
      id: "works-cover",
      className: "min-h-screen w-full relative flex items-center justify-center bg-[#fcfcfc] overflow-hidden",
      style: { fontFamily: "'Noto Sans SC', sans-serif" },
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "absolute inset-0 opacity-[0.02]",
            style: {
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "80px 80px"
            }
          }
        ),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: !0 },
            transition: { duration: 1.2, delay: 0.3 },
            className: "absolute top-[35%] left-[15%] right-[15%] h-px bg-[#eee] origin-left"
          }
        ),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: !0 },
            transition: { duration: 1.2, delay: 0.5 },
            className: "absolute bottom-[35%] left-[15%] right-[15%] h-px bg-[#eee] origin-right"
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.8 },
            className: "absolute top-10 left-10 w-12 h-12",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-full h-px bg-[#e0e0e0]" }),
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-px h-full bg-[#e0e0e0]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.8 },
            className: "absolute bottom-10 right-10 w-12 h-12",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-full h-px bg-[#e0e0e0]" }),
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-px h-full bg-[#e0e0e0]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            className: "relative z-10 text-center px-6",
            children: [
              /* @__PURE__ */ c("div", { className: "text-[9px] tracking-[0.6em] text-[#c0c0c0] mb-10 uppercase", children: "Core Cases" }),
              /* @__PURE__ */ c("h2", { className: "text-[#111] text-[clamp(1.5rem,3.5vw,2.6rem)] tracking-[0.18em] leading-[1.3]", children: "æ ¸å¿æ¡ä¾å±ç¤º" }),
              /* @__PURE__ */ c("div", { className: "w-8 h-px bg-[#d0d0d0] mx-auto mt-8 mb-8" }),
              /* @__PURE__ */ m("p", { className: "text-[12px] text-[#aaa] tracking-[0.06em] leading-[2.2] max-w-sm mx-auto", children: [
                "4ä¸ªæ ¸å¿é¡¹ç®æ¡ä¾",
                /* @__PURE__ */ c("br", {}),
                "æ¶µçå¢éç®¡çãå¨æ¡è½å°ãè§é¢å¶ä½ãå¤åºéºç»ç­¹"
              ] }),
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.6 },
                  className: "mt-16 flex justify-center gap-12",
                  children: [
                    { num: "04", label: "æ ¸å¿æ¡ä¾" }
                  ].map((e) => /* @__PURE__ */ m("div", { className: "text-center", children: [
                    /* @__PURE__ */ c("div", { className: "text-[clamp(1.1rem,2vw,1.5rem)] text-[#222] tracking-[0.08em]", children: e.num }),
                    /* @__PURE__ */ c("div", { className: "text-[9px] text-[#c0c0c0] mt-1.5 tracking-[0.12em] uppercase", children: e.label })
                  ] }, e.label))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[#d0d0d0]", children: "05" })
      ]
    }
  );
}
function Yu({
  data: e
}) {
  return /* @__PURE__ */ c(Ge, { id: e.id, pageNum: e.pageNum, children: /* @__PURE__ */ c("div", { className: "flex-1 flex items-start justify-center px-6 md:px-10 py-14 md:py-18", children: /* @__PURE__ */ m("div", { className: "w-full max-w-[960px]", children: [
    /* @__PURE__ */ c(
      Xe,
      {
        en: `Case ${e.num}`,
        zh: e.title,
        sub: e.subtitle
      }
    ),
    e.keyMetrics.length > 0 && /* @__PURE__ */ c(L, { delay: 0.1, children: /* @__PURE__ */ c("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: e.keyMetrics.map((t, i) => /* @__PURE__ */ m(
      y.div,
      {
        whileHover: { y: -2, boxShadow: "0 4px 20px rgba(0,0,0,0.03)" },
        transition: { duration: 0.25 },
        className: "bg-[#fafafa] rounded-xl py-4 px-4 text-center border border-transparent hover:border-[#eee] transition-colors",
        children: [
          /* @__PURE__ */ c("div", { className: "text-[clamp(0.9rem,1.4vw,1.1rem)] text-[#111] tracking-[0.04em]", children: t.value }),
          /* @__PURE__ */ c("div", { className: "text-[10px] text-[#aaa] mt-1 tracking-[0.04em]", children: t.label })
        ]
      },
      t.label
    )) }) }),
    /* @__PURE__ */ c(L, { delay: 0.15, children: /* @__PURE__ */ m("div", { className: "mb-10 relative pl-5 border-l-[2px] border-[#eee]", children: [
      /* @__PURE__ */ c("h4", { className: "text-[10px] tracking-[0.2em] text-[#b0b0b0] mb-3 uppercase", children: "é¡¹ç®èæ¯" }),
      e.id === "case1" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "ä¸»å¯¼è®¾è®¡å¢éå·¥ä½æµç¨ä¼åä¸è§èæ­å»ºï¼å¢éä» 2 äººæ©è³ 4 äººï¼æç»ç¨³å® 3â5 äººï¼ï¼åææååä¸ºæ°äººï¼è§è§æ åä¸ç»ä¸ãæ°äººä¸ææ¢ãè¿å·¥çé«ï¼å½±åäº¤ä»æçï¼å æ­¤çµå¤´ä¼åæµç¨å¹¶å»ºç«ç¸å³è§èï¼éæ­¥å®åå½¢æå¯å¤ç¨æ¹æ³è®ºã" }) : e.id === "case2" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "éå¯¹äºé©¬éæ°å 0-1 ä¸çº¿ï¼éä»é¶æ­å»ºä¸æ´å¥è§è§ä½ç³»ï¼å¶å®å¯å¤ç¨çæ ååå·¥ä½æµç¨ï¼éä½åæåç±»äº§åè§è§äº¤ä»ææ¬ãæåæçï¼æ¯ææ°åè§æ¨¡åä¸çº¿ï¼ä¸¥æ ¼éµå¾ªäºé©¬éå¹³å°è§è§åè§è¦æ±ã" }) : e.id === "case3" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "äº§åå®è£æ­¥éª¤å¤æï¼å¯¼è´ç¨æ·å¨è¯¢éé«ãå®åååå¤§ï¼éå¶ä½å¸¦æè¾å©å¨æçè§è§å®è£è§é¢ï¼ééå¤å¹³å°ååä¸è§æ¨¡åå¤ç¨ï¼æ§å¶è§é¢å¶ä½ææ¬ã" }) : e.id === "case4" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "åè° 11 å®¶ AMZ åºéºä¸ 1 å®¶ EBAY åºéºçè§è§ç»ä¸ä¼åä¸æ¥å¸¸ç©æäº¤ä»ï¼ç¡®ä¿å¤åºéºè§è§è°æ§ä¸è´ãäº¤ä»åæ¶ï¼æ§å¶å¢éæ§è¡è´¨éï¼æ¯æå¤åºéºè§æ¨¡åè¿è¥ï¼ç¡®ä¿è§è§åè§ã" }) : /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: e.background })
    ] }) }),
    /* @__PURE__ */ c(L, { delay: 0.2, children: /* @__PURE__ */ m("div", { className: "mb-10 relative pl-5 border-l-[2px] border-[#eee]", children: [
      /* @__PURE__ */ c("h4", { className: "text-[10px] tracking-[0.2em] text-[#b0b0b0] mb-3 uppercase", children: "æ ¸å¿èè´£" }),
      e.id === "case1" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "æ¢³çç°ææµç¨ï¼ç²¾åå®ä½æ ¸å¿çç¹ï¼ææä¸æ¸æ°ãæ å®¡æ ¸æ åãæ²éææ¬é«ï¼ï¼å¶å®ãä»»å¡ææè¡¨+å®¡æ ¸æµç¨+è§è§è§è+ç»©æèæ ¸æ åãï¼æç¡®å·¥ä½æ åä¸åå·¥ï¼æ­å»ºæ°äººå¹è®­ä½ç³»ä¸ä¸é¡¹å¹å»è®¡åï¼ç»ç»å¢éå®æå¤çï¼æç»­ä¼åæµç¨ï¼å°æçæµç¨æ ååå½¢æå¯å¤ç¨ç®¡çæ¹æ³è®ºã" }) : e.id === "case2" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "å¨ç¨è´è´£äº§åå¸æ¯ãç¯åå¸ç½®ãæ ååææãPS/AI ç²¾ä¿®ä¸æçãäº§åå®è£è¯´æä¹¦å¾çå¶ä½ï¼å»ºç«ææä¸è®¾è®¡æ ååå·¥ä½æµç¨ï¼å®æå¨é¾è·¯æ°æ®å½æ¡£ï¼å¯¹æ¥è¿è¥ç¡®è®¤äº§ååç¹ï¼ç¡®ä¿è§è§ç©æè´´åå¸åºéæ±ã" }) : e.id === "case3" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "æ°åææä¸ç¼è¾èæ¬ï¼ç°åºææäº§åå®è£éå¤´ï¼ä½¿ç¨ PR è¿è¡åäºåªè¾ï¼AE è¿è¡å¨æåè£ï¼å¯¹æ¥å»ºæ¨¡å¢éè·è¿ 3D è¾å©å¨ç»ï¼å¨ç¨ææ§è½å°ææï¼å¶å®å¯å¤ç¨çè§é¢æ¨¡æ¿ï¼ä¼åæææµç¨ï¼éä½å¶ä½ææ¬ã" }) : e.id === "case4" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "éä¸å¯¹æ¥ååºéºè¿è¥å¢éï¼ç¡®è®¤è§è§éæ±ä¸äº¤ä»èç¹ï¼æåå·¥ä½ä»»å¡ãåéç»å¢éæåï¼ä¸¥æ ¼æ§å¶äº¤ä»è´¨éä¸è¿åº¦ï¼æç»­ä¼åè§è§è§èï¼å»ºç«å¤åºéºç»ä¸è§è§æ åï¼å»ºç«ç©æå®¡æ ¸æºå¶ï¼éä½è¿è§é£é©ã" }) : /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: e.responsibilities })
    ] }) }),
    /* @__PURE__ */ c(L, { delay: 0.25, children: /* @__PURE__ */ m("div", { className: "mb-10", children: [
      /* @__PURE__ */ m("h4", { className: "text-[10px] tracking-[0.2em] text-[#b0b0b0] mb-4 uppercase flex items-center gap-2", children: [
        /* @__PURE__ */ c("span", { className: "w-4 h-px bg-[#d8d8d8]" }),
        "å¯éåææ"
      ] }),
      /* @__PURE__ */ c("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5", children: e.achievements.map((t, i) => /* @__PURE__ */ m(
        y.div,
        {
          initial: { opacity: 0, x: -8 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: !0 },
          transition: { delay: 0.27 + i * 0.04 },
          className: "flex items-start gap-2.5 leading-[1.9]",
          children: [
            /* @__PURE__ */ c(Fu, { size: 10, className: "mt-[6px] shrink-0 text-[#ccc]" }),
            /* @__PURE__ */ c("span", { className: "text-[12px] text-[#555] flex-1", children: t })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ c(L, { delay: 0.3, children: /* @__PURE__ */ m("div", { className: "mb-14 relative pl-5 border-l-[2px] border-[#eee]", children: [
      /* @__PURE__ */ c("h4", { className: "text-[10px] tracking-[0.2em] text-[#b0b0b0] mb-3 uppercase", children: "å¯å¤ç¨ä»·å¼" }),
      e.id === "case1" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "å½¢æçå¢éç®¡çæ ååæµç¨ãæ°äººå¹å»æ¹æ¡ãå®¡æ ¸æµç¨å¯ç´æ¥åºç¨äºåè§æ¨¡è®¾è®¡å¢éï¼å¿«éè§£å³æ°äººä¸ææ¢ãæ åä¸ç»ä¸ç­çç¹ï¼æåå¢éæ´ä½äº¤ä»æçã" }) : e.id === "case2" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "æ°åè§è§å¨é¾è·¯æ ååå·¥ä½æµç¨ãææè§èãç²¾ä¿®æ åï¼å¯ç´æ¥åºç¨äºåç±»äºé©¬éæ°åè§è§äº¤ä»ï¼åå°éå¤å·¥ä½ï¼éä½äººåææ¬ï¼ç¡®ä¿è§è§åè§æ§ä¸ä¸è´æ§ã" }) : e.id === "case3" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "å®è£è§é¢èæ¬æ¨¡æ¿ãç¼è¾å¨æè§èã3D ååå¯¹æ¥æµç¨ï¼å¯ç´æ¥åºç¨äºåç±»å¤æäº§åå®è£è§é¢å¶ä½ï¼ç¼©ç­å¶ä½å¨æãéä½ææ¬ï¼æåè§é¢å®ç¨æ§ä¸æ¨å¹¿ææã" }) : e.id === "case4" ? /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "å¤åºéºç»ä¸è§è§æ åãç©æå®¡æ ¸æºå¶ãä»»å¡åéæ¹æ³ï¼å¯ç´æ¥åºç¨äºå¤å¹³å°ãå¤åºéºè§è§åè°å·¥ä½ï¼æåäº¤ä»æçä¸è´¨éï¼éä½åè§é£é©ã" }) : /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: e.reusableValue })
    ] }) }),
    e.id !== "case4" && /* @__PURE__ */ m(rt, { children: [
      /* @__PURE__ */ c(L, { delay: 0.4, children: /* @__PURE__ */ m("div", { className: "flex items-center gap-4 mb-10", children: [
        /* @__PURE__ */ c("div", { className: "flex-1 h-px bg-[#f0f0f0]" }),
        /* @__PURE__ */ c("span", { className: "text-[9px] tracking-[0.3em] text-[#ccc] uppercase", children: "Work Display" }),
        /* @__PURE__ */ c("div", { className: "flex-1 h-px bg-[#f0f0f0]" })
      ] }) }),
      e.id === "case2" ? /* @__PURE__ */ m("div", { className: "space-y-6 mb-8", children: [
        /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
          "img",
          {
            src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/PKKT/1780X1187/1.jpg/webp",
            alt: "ä½åå±ç¤ºå¾ 1",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
          "img",
          {
            src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/YtAg/1780X1187/2.jpg/webp",
            alt: "ä½åå±ç¤ºå¾ 2",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
          "img",
          {
            src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/nEfA/1780X1187/3.jpg/webp",
            alt: "ä½åå±ç¤ºå¾ 3",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
          "img",
          {
            src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/qgKv/1780X1187/4.jpg/webp",
            alt: "ä½åå±ç¤ºå¾ 4",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ m("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: [
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-[4/3] w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "img",
              {
                src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/V9rZ/1243X791/%25E5%25AE%2589%25E8%25A3%2585%25E8%25AF%25B4%25E6%2598%258E%25E4%25B9%25A601.gif/webp",
                alt: "å¨æææå¾ 1",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "01åä½å·¥å·ç®±" })
          ] }),
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-[4/3] w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "img",
              {
                src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/1kFg/1282X781/%25E5%25AE%2589%25E8%25A3%2585%25E8%25AF%25B4%25E6%2598%258E%25E4%25B9%25A603.gif/webp",
                alt: "å¨æææå¾ 2",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "02åä½å·¥å·ç®±" })
          ] }),
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-[4/3] w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "img",
              {
                src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/4uiY/1277X784/%25E5%25AE%2589%25E8%25A3%2585%25E8%25AF%25B4%25E6%2598%258E%25E4%25B9%25A602.gif/webp",
                alt: "å¨æææå¾ 3",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "03åä½ä¿é©æ " })
          ] })
        ] })
      ] }) : e.id === "case3" ? (
        /* Case 3 special layout - 2 videos + 1 image */
        /* @__PURE__ */ m("div", { className: "space-y-6 mb-8", children: [
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-[3/1] w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "video",
              {
                src: "https://videos.tuchuangyun.top/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/aQY3/%25E5%25AE%259E%25E6%258B%258D%25E5%258E%259F%25E7%2589%2587%26%25E7%2594%25B5%25E5%2595%2586%25E8%25B0%2583%25E8%2589%25B2%25E5%25AF%25B9%25E6%25AF%2594%2520%25E5%258E%258B%25E7%25BC%25A9%25E5%2590%258E%2520.mp4",
                className: "absolute inset-0 w-full h-full object-cover",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "çµåçº§è°è² vs åºååç" })
          ] }),
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "video",
              {
                src: "https://videos.tuchuangyun.top/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/YxzV/AE%25E5%258A%25A8%25E6%2595%2588%25E5%2590%2588%25E9%259B%2586%2520%25E5%258E%258B%25E7%25BC%25A9%25E5%2590%258E.mp4",
                className: "absolute inset-0 w-full h-full object-cover",
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "çµåAEåæå¨æåé" })
          ] }),
          /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-[4/5] w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "img",
              {
                src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/7ibq/977X1147/3d%25E5%25AF%25B9%25E6%258E%25A5%25E6%25B5%2581%25E7%25A8%258B.png/webp",
                alt: "ä½åå±ç¤ºå¾",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "3D ååå¨æµç¨æ ¸å¿åå®¹" })
          ] })
        ] })
      ) : (
        /* Other cases - default 3 rows layout */
        /* @__PURE__ */ m("div", { className: "space-y-6 mb-8", children: [
          e.id === "case1" ? /* @__PURE__ */ m(
            y.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 0.42, ease: "easeOut" },
              children: [
                /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0] flex flex-col items-center justify-center", children: /* @__PURE__ */ c(
                  "img",
                  {
                    src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/OtCw/2066X846/SOP%25E6%2596%2587%25E6%25A1%25A3%2520%25E5%258A%25A8%25E5%259B%25BE.gif/webp",
                    alt: "ä½åå±ç¤ºå¾ 1",
                    className: "absolute inset-0 w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "äº§åææ+æ ·åç»´æ¤+ç´ ææ´ç+äº§åå»ºæ¨¡+å¨ç»åæ" })
              ]
            }
          ) : /* @__PURE__ */ c(
            UploadFrame,
            {
              label: "ä½åå±ç¤ºå¾ 1",
              aspect: "aspect-video",
              delay: 0.42,
              description: e.id === "case1" ? "äº§åææ+æ ·åç»´æ¤+ç´ ææ´ç+äº§åå»ºæ¨¡+å¨ç»åæ" : void 0
            }
          ),
          e.id === "case1" ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "img",
              {
                src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/31gD/2516X1078/%25E4%25BB%25BB%25E5%258A%25A1%25E6%258E%2592%25E6%259C%259F%25E8%25A1%25A8%2520%25E5%258A%25A8%25E5%259B%25BE.gif/webp",
                alt: "å¨æææå¾ 1",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "ï¼å¶å¾+å»ºæ¨¡+ææ+äº§åå°ºå¯¸ï¼ä»»å¡ä¸è§" })
          ] }) : /* @__PURE__ */ c(
            UploadFrame,
            {
              label: "å¨æææå¾ 1 Â· æ¯æGIFå¾ªç¯æ­æ¾",
              aspect: "aspect-video",
              delay: 0.48,
              isAnimated: !0,
              description: e.id === "case1" ? "ï¼å¶å¾+å»ºæ¨¡+ææ+äº§åå°ºå¯¸ï¼ä»»å¡ä¸è§" : void 0
            }
          ),
          e.id === "case1" ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
              "img",
              {
                src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260512/djCn/1000X503/%25E6%2596%25B0%25E4%25BA%25BA%25E5%259F%25B9%25E8%25AE%25AD%25E8%25AF%25BE%25E4%25BB%25B6%2520%25E5%258A%25A8%25E5%259B%25BE.gif/webp",
                alt: "å¨æææå¾ 2",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ c("p", { className: "text-[10px] text-[#b8b8b8] mt-2 tracking-[0.03em]", children: "å¹è®­è¯¾ä»¶ï¼èéï¼" })
          ] }) : /* @__PURE__ */ c(
            UploadFrame,
            {
              label: "å¨æææå¾ 2 Â· æ¯æGIFå¾ªç¯æ­æ¾",
              aspect: "aspect-video",
              delay: 0.54,
              isAnimated: !0,
              description: e.id === "case1" ? "å¹è®­è¯¾ä»¶ï¼èéï¼" : void 0
            }
          )
        ] })
      )
    ] })
  ] }) }) });
}
function qu() {
  return /* @__PURE__ */ m(
    "section",
    {
      id: "skill-supplement-cover",
      className: "min-h-screen w-full relative flex items-center justify-center bg-[#fcfcfc] overflow-hidden",
      style: { fontFamily: "'Noto Sans SC', sans-serif" },
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "absolute inset-0 opacity-[0.02]",
            style: {
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "80px 80px"
            }
          }
        ),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: !0 },
            transition: { duration: 1.2, delay: 0.3 },
            className: "absolute top-[35%] left-[15%] right-[15%] h-px bg-[#eee] origin-left"
          }
        ),
        /* @__PURE__ */ c(
          y.div,
          {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: !0 },
            transition: { duration: 1.2, delay: 0.5 },
            className: "absolute bottom-[35%] left-[15%] right-[15%] h-px bg-[#eee] origin-right"
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.8 },
            className: "absolute top-10 left-10 w-12 h-12",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-full h-px bg-[#e0e0e0]" }),
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-px h-full bg-[#e0e0e0]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.8 },
            className: "absolute bottom-10 right-10 w-12 h-12",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-full h-px bg-[#e0e0e0]" }),
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-px h-full bg-[#e0e0e0]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            className: "relative z-10 text-center px-6",
            children: [
              /* @__PURE__ */ c("div", { className: "text-[9px] tracking-[0.6em] text-[#c0c0c0] mb-10 uppercase", children: "Skill Supplement" }),
              /* @__PURE__ */ c("h2", { className: "text-[#111] text-[clamp(1.5rem,3.5vw,2.6rem)] tracking-[0.18em] leading-[1.3]", children: "åé¡¹è½åè¡¥å" }),
              /* @__PURE__ */ c("div", { className: "w-8 h-px bg-[#d0d0d0] mx-auto mt-8 mb-8" }),
              /* @__PURE__ */ m("p", { className: "text-[12px] text-[#aaa] tracking-[0.06em] leading-[2.2] max-w-sm mx-auto", children: [
                "è¡¥åå±ç¤ºå¶ä»ä¸é¡¹æè½",
                /* @__PURE__ */ c("br", {}),
                "æå±è½åç»´åº¦ä¸ä½åç±»å"
              ] }),
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.6 },
                  className: "mt-16 flex justify-center gap-12",
                  children: [
                    { num: "01", label: "åé¡¹è½å" }
                  ].map((e) => /* @__PURE__ */ m("div", { className: "text-center", children: [
                    /* @__PURE__ */ c("div", { className: "text-[clamp(1.1rem,2vw,1.5rem)] text-[#222] tracking-[0.08em]", children: e.num }),
                    /* @__PURE__ */ c("div", { className: "text-[9px] text-[#c0c0c0] mt-1.5 tracking-[0.12em] uppercase", children: e.label })
                  ] }, e.label))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[#d0d0d0]", children: "10" })
      ]
    }
  );
}
function Zu() {
  return /* @__PURE__ */ c(Ge, { id: "skill-supplement", pageNum: 11, children: /* @__PURE__ */ c("div", { className: "flex-1 flex items-start justify-center px-6 md:px-10 py-14 md:py-18", children: /* @__PURE__ */ m("div", { className: "w-full max-w-[960px]", children: [
    /* @__PURE__ */ c(
      Xe,
      {
        en: "Skill Supplement",
        zh: "Blender ä¸ç»´æ¸²æ",
        sub: "æå±è½åç»´åº¦ Â· å¤ååä½åå±ç¤º"
      }
    ),
    /* @__PURE__ */ c(L, { delay: 0.1, children: /* @__PURE__ */ m("div", { className: "mb-10 relative pl-5 border-l-[2px] border-[#eee]", children: [
      /* @__PURE__ */ c("h4", { className: "text-[10px] tracking-[0.2em] text-[#b0b0b0] mb-3 uppercase", children: "è½åè¯´æ" }),
      /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.1] text-[#666]", children: "å·å¤ Blender åºç¡æ¸²æå®æè½åï¼å¯ç¬ç«å®æäº§ååºç¡æåãæè´¨è°èãåºæ¯æ­å»ºä¸æåæ¸²æè¾åºãè¡¥åå¹³é¢ä¸è§é¢ä¹å¤çå¤åè§è§åç°å½¢å¼ã" })
    ] }) }),
    /* @__PURE__ */ c(L, { delay: 0.4, children: /* @__PURE__ */ m("div", { className: "flex items-center gap-4 mb-10", children: [
      /* @__PURE__ */ c("div", { className: "flex-1 h-px bg-[#f0f0f0]" }),
      /* @__PURE__ */ c("span", { className: "text-[9px] tracking-[0.3em] text-[#ccc] uppercase", children: "Work Display" }),
      /* @__PURE__ */ c("div", { className: "flex-1 h-px bg-[#f0f0f0]" })
    ] }) }),
    /* @__PURE__ */ m("div", { className: "space-y-6 mb-8", children: [
      /* @__PURE__ */ c("div", { className: "aspect-[21/9] w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
        "img",
        {
          src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/wZo8/2000X926/%25E6%2597%25A0%25E4%25BA%25BA%25E6%259C%25BA21-9.jpg/webp",
          alt: "ä½åå±ç¤ºå¾ 1",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
        "img",
        {
          src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/TE8C/2000X1101/%25E6%25B1%25BD%25E8%25BD%25A6%25E6%25B8%25B2%25E6%259F%2593.png/webp",
          alt: "ä½åå±ç¤ºå¾ 2",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ c("div", { className: "aspect-video w-full rounded-xl overflow-hidden relative bg-[#f0f0f0]", children: /* @__PURE__ */ c(
        "img",
        {
          src: "https://test.fukit.cn/autoupload/f/pNAFWI3tPHUq_bGP-T8tDaNdx9J-4ccugcpyhybV9Yo/20260513/x6nc/2000X1134/%25E6%25B4%2597%25E8%25A1%25A3%25E6%259C%25BA.png/webp",
          alt: "ä½åå±ç¤ºå¾ 3",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ) })
    ] })
  ] }) }) });
}
function Ju({
  coverInfo: e,
  backCoverData: t
}) {
  return /* @__PURE__ */ m(
    "section",
    {
      id: "backcover",
      className: "min-h-screen w-full relative flex items-center justify-center bg-[#fcfcfc] overflow-hidden",
      style: { fontFamily: "'Noto Sans SC', sans-serif" },
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "absolute inset-0 opacity-[0.02]",
            style: {
              backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "80px 80px"
            }
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.5 },
            className: "absolute top-10 left-10 w-12 h-12",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-full h-px bg-[#e0e0e0]" }),
              /* @__PURE__ */ c("div", { className: "absolute top-0 left-0 w-px h-full bg-[#e0e0e0]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.5 },
            className: "absolute bottom-10 right-10 w-12 h-12",
            children: [
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-full h-px bg-[#e0e0e0]" }),
              /* @__PURE__ */ c("div", { className: "absolute bottom-0 right-0 w-px h-full bg-[#e0e0e0]" })
            ]
          }
        ),
        /* @__PURE__ */ m(
          y.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
            className: "relative z-10 text-center px-8 max-w-[580px]",
            children: [
              /* @__PURE__ */ c("div", { className: "text-[9px] tracking-[0.6em] text-[#c0c0c0] mb-12 uppercase", children: "Thank You for Reviewing" }),
              /* @__PURE__ */ c("h2", { className: "text-[#111] text-[clamp(1.3rem,3vw,2rem)] tracking-[0.14em] mb-4 leading-[1.4]", children: "æè°¢æ¨çæ¶é´" }),
              /* @__PURE__ */ c("div", { className: "w-8 h-px bg-[#d0d0d0] mx-auto mb-10" }),
              /* @__PURE__ */ m("div", { className: "space-y-2 text-[12px] text-[#999] mb-14", children: [
                /* @__PURE__ */ m("p", { children: [
                  /* @__PURE__ */ c("span", { className: "text-[#444]", children: e.name }),
                  "Â Â·Â ",
                  /* @__PURE__ */ c("span", { className: "text-[12px] text-[#999]", children: e.phone })
                ] }),
                /* @__PURE__ */ m("p", { children: [
                  "Emailï¼",
                  /* @__PURE__ */ c("span", { className: "text-[12px] text-[#999]", children: e.email })
                ] }),
                /* @__PURE__ */ m("p", { children: [
                  "å®æ´ä½åéé¾æ¥ï¼",
                  /* @__PURE__ */ c(
                    "a",
                    {
                      href: "https://my.feishu.cn/wiki/GykTw9DSAicyUwkWdAecgP1knKb?from=from_copylink",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-[12px] text-[#999] hover:text-blue-500 underline transition-colors",
                      children: "https://my.feishu.cn/wiki/GykTw9DSAicyUwkWdAecgP1knKb?from=from_copylink"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ c(
                y.div,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.4 },
                  className: "flex flex-wrap justify-center gap-10 mb-14",
                  children: [
                    { num: "1350+", label: "SKUè§è§ç®¡ç" },
                    { num: "12", label: "åºéºç»ç­¹" },
                    { num: "100%", label: "è§è§åè§ç" }
                  ].map((i) => /* @__PURE__ */ m("div", { className: "text-center", children: [
                    /* @__PURE__ */ c("div", { className: "text-[clamp(1rem,2vw,1.3rem)] text-[#222] tracking-[0.06em]", children: i.num }),
                    /* @__PURE__ */ c("div", { className: "text-[9px] text-[#bbb] tracking-[0.1em] mt-1.5", children: i.label })
                  ] }, i.label))
                }
              ),
              /* @__PURE__ */ m(
                y.div,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: !0 },
                  transition: { delay: 0.5 },
                  className: "border-t border-[#eee] pt-10",
                  children: [
                    /* @__PURE__ */ c("h4", { className: "text-[9px] tracking-[0.25em] text-[#c0c0c0] mb-5 uppercase", children: "èä¸æ¿æ¯ Â· Career Vision" }),
                    /* @__PURE__ */ c("div", { className: "text-[12px] leading-[2.2] text-[#999]", children: "å¸æå¨è·¨å¢çµåè§è§é¢åæ·±èï¼ä¾æä½ç³»åè½åä¸è§æ¨¡åé¡¹ç®ç»éªï¼æ¯æå¬å¸è§æ¨¡åè¿è¥ï¼æç»­æåèªèº«ä¸ä¸è½åä¸ååè½åï¼ä¸å¬å¸å®ç°å±èµ¢ã" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c("div", { className: "absolute bottom-7 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-[#d0d0d0]", children: "12" })
      ]
    }
  );
}
const Qu = [
  {
    id: "case1",
    pageNum: 6,
    num: "01",
    title: "è®¾è®¡å¢éæµç¨ä¼åä¸è§èæ­å»º",
    subtitle: "æ ¸å¿ä¸»ç®¡æ¡ä¾ Â· Team Process Optimization & SOP System",
    background: "å¢éé¿æé¢ä¸´ä¸å¤§æ ¸å¿çç¹ï¼æææ··ä¹±å¯¼è´é¡¹ç®äº¤åå²çªé¢åï¼è®¾è®¡è¿å·¥çé«è¾¾35%ä¸¥éæ¶èå¢éäº§è½ï¼æ°äººå¥èåä¸æå¨æé¿è¾¾1ä¸ªæå½±åå¢éæ©å±æçãè¿äºé®é¢çæ ¹æºå¨äºç¼ºä¹æ ååçç®¡çä½ç³»ââå¢éä¾èµä¸ªäººç»éªèéç³»ç»æµç¨è¿ä½ï¼ç¥è¯ä¼ æ¿æ­å±ï¼è´¨éæ åæ¨¡ç³ã",
    approach: "éç¨ãè¯æ­âæè§£âæ­å»ºâéªè¯âè¿­ä»£ãçç³»ç»åæ¹æ³è®ºãé¦åéè¿æ°æ®æ¸åºæ¢³çç°ææµç¨ä¸­çå³é®ç¶é¢èç¹ï¼ç¶åå°å¤æé®é¢æè§£ä¸ºå¯æ§è¡çæ ååæ¨¡åï¼éæ­¥æ­å»ºè¦çå¨æµç¨çSOPä½ç³»ï¼å¹¶éè¿å®éé¡¹ç®éªè¯è¿­ä»£ä¼åã",
    responsibilities: "ä¸»å¯¼æ¢³çç°ææµç¨å¨é¨çç¹ï¼ä»0æ­å»ºæ ååSOPä½ç³»ï¼å«è®¾è®¡è§èææ¡£ãåçº§å®¡æ ¸æµç¨ãä¼åçº§æææºå¶ãè´¨éæ£æ¥æ¸åï¼ï¼å»ºç«æ°äººå¹è®­è¯¾ä»¶ä¸é¶æ¢¯å¼å¸¦ææºå¶ï¼æ¨å¨å¢éä»ãç»éªé©±å¨ãè½¬åãæ ååè¿ä½ãï¼å½¢æä¸å¥å¯ç´æ¥å¤ç¨äºä¸­å°åè®¾è®¡å¢éçç®¡çæ¹æ³è®ºã",
    achievements: [
      "æ°åå·¥å¥èå¹è®­å¨æä»2ä¸ªæç¼©ç­è³4å¨ï¼ä¸ææçæå100%",
      "å¢éæ´ä½äº¤ä»å¨æç¼©ç­25%ï¼é¡¹ç®ææå²çªçä¸é60%",
      "è®¾è®¡è¿å·¥çä»35%éè³15%ï¼èçå¤§ééå¤å³å¨ææ¬",
      "ç´¯è®¡å¸¦æ4åæ°äººå¨é¨ç¬ç«ä¸å²ï¼å¢éäººåæçæå30%",
      "å½¢æå®æ´SOPææ¡£åºï¼å¯ç´æ¥å¤ç¨äºæ°å¢éæ­å»º"
    ],
    reusableValue: "æ¬é¡¹ç®æ²æ·çå®æ´SOPææ¡£åºå¯ç´æ¥åºç¨äºä¸­å°åè®¾è®¡å¢éçå¿«éæ­å»ºï¼æ°äººå¹è®­è¯¾ä»¶ä¸é¶æ¢¯å¼å¸¦ææºå¶å·²è¢«å¢éæç»­ä½¿ç¨ï¼åçº§å®¡æ ¸æµç¨ä¸ä¼åçº§æææºå¶æä¸ºå¢éæ¥å¸¸è¿ä½çæ ¸å¿æ¯æãæ´å¥ç®¡çæ¹æ³è®ºå¯å¤ç¨æ§å¼ºï¼éç¨äº3-10äººè§æ¨¡ççµåè§è§å¢éæ ååç®¡çåºæ¯ã",
    keyMetrics: [
      { value: "4å¨", label: "æ°äººä¸å²å¨æ" },
      { value: "25%", label: "äº¤ä»å¨æç¼©ç­" },
      { value: "15%", label: "è¿å·¥çéè³" },
      { value: "30%", label: "äººåæçæå" }
    ],
    imageSlots: [
      { label: "SOPæ ååææ¡£æªå¾" },
      { label: "å¢éåä½æµç¨å¾" },
      { label: "ä»»å¡ææçæ¿æªå¾" },
      { label: "æ°äººå¹è®­è¯¾ä»¶æªå¾" },
      { label: "è®¾è®¡è§èææ¡£ç¤ºä¾" },
      { label: "è´¨éå®¡æ ¸æ¸åæªå¾" }
    ],
    videoSlots: [{ label: "å¢éå¹è®­è¿ç¨å½å± / SOPæ¼ç¤ºè§é¢" }],
    beforeAfterLabel: "æµç¨ä¼åååå¯¹æ¯ï¼ä»æ··ä¹±ææå°æ ååçæ¿ç®¡ç"
  },
  {
    id: "case2",
    pageNum: 7,
    num: "02",
    title: "Amazonæ°åè§è§å¨æ¡",
    subtitle: "å¨é¾è·¯å®ææ¡ä¾ Â· New Product Visual Full Case",
    background: "æ°åä¸çº¿éè¦å¨ç´§åçææåå®æå¨å¥è§è§ç©æè¾åºââåæ¬ä¸»å¾ç³»åï¼ç½åºå¾/åºæ¯å¾/ç»èå¾/å°ºå¯¸å¾ï¼ãA+åçæäºé¡µé¢ãäº§åå®è£å¼å¯¼è§é¢ãå¤§ä¿æ´»å¨Bannerç­ï¼åæ¶å¿é¡»ä¸¥æ ¼éµå®Amazonè§è§åè§è¦æ±ï¼å¾çå°ºå¯¸/ç½åºå æ¯/æå­è§èç­ï¼ï¼å¹¶ç²¾åå¯¹æ¥è¿è¥èç¹ç¡®ä¿æ°åææ¶ä¸æ¶ãè¿æ¯ä¸ä¸ªå¸åçãé«è´¨é+é«æç+å¼ºåè§ãä¸éååå¹¶è¡çå¨é¾è·¯é¡¹ç®ã",
    approach: "å»ºç«ãç©ææ¸åâæ¨¡æ¿åçäº§âåçº§å®¡æ ¸âåè§èªæ£ãçæ ååå¨æ¡å·¥ä½æµãéè¿åæä¸è¿è¥æ·±åº¦å¯¹é½éæ±æ¸åï¼ä¸­æå©ç¨å¯å¤ç¨æ¨¡æ¿å éæ¹éçäº§ï¼åæéè¿åçº§å®¡æ ¸ä¸åè§èªæ£è¡¨ç¡®ä¿é¶è¿è§ä¸çº¿ã",
    responsibilities: "å¸¦é¢å¢éå®æ10+ SKUå¨ç³»åè§è§ç©æè¾åºï¼åæ¬ï¼äº§åç²¾ä¿®ä¸»å¾ç³»åè®¾è®¡ãA+é¡µé¢è§è§æ¶æä¸è½å°ãå®è£å¼å¯¼è§é¢åªè¾åè£ãå¤§ä¿Bannerä¸æ´»å¨æµ·æ¥è®¾è®¡ãç²¾åå¯¹æ¥è¿è¥éæ±èç¹ï¼æ­å»ºå¤§ä¿è§è§ç©æå¯å¤ç¨æ¨¡æ¿åºï¼æ¯ææ°åé¡ºå©ä¸æ¶ä¸å¤§ä¿æ´»å¨è½å°ã",
    achievements: [
      "æ­å»ºå¯å¤ç¨å¤§ä¿è§è§æ¨¡æ¿åºï¼åç»­é¡¹ç®äº¤ä»æçæå40%",
      "å¨é¨ç©æè§è§åè§ç90%ä»¥ä¸ï¼é¶è¿è§é¶è¿å·¥"
    ],
    reusableValue: "æ¬é¡¹ç®æ­å»ºçå¤§ä¿è§è§æ¨¡æ¿åºå·²æä¸ºå¢éæ ¸å¿èµäº§ï¼æç»­æ¯æåç»­æ°åä¸æ¶ä¸å¤§ä¿æ´»å¨çå¿«éäº¤ä»ãAmazonåè§èªæ£æ¸åä¸åçº§å®¡æ ¸æµç¨ç¡®ä¿é¶è¿è§çï¼å¯ç´æ¥åºç¨äºåç±»çµåå¹³å°çè§è§å¨æ¡é¡¹ç®ãA+é¡µé¢ä¿¡æ¯æ¶æè®¾è®¡æ¹æ³è®ºå¯å¤ç¨äºä¸ååç±»äº§åçåç¹åç°åºæ¯ã",
    keyMetrics: [],
    imageSlots: [
      { label: "äº§åä¸»å¾ç²¾ä¿®ï¼ç½åºå¾ï¼" },
      { label: "äº§ååºæ¯å¾å±ç¤º" },
      { label: "A+åçæäºé¡µé¢è®¾è®¡" },
      { label: "å¤§ä¿Bannerè®¾è®¡" },
      { label: "æ´»å¨æµ·æ¥è®¾è®¡" },
      { label: "äº§åç»è/å°ºå¯¸å¾" }
    ],
    videoSlots: [{ label: "äº§åå®è£å¼å¯¼è§é¢ Â· å®æ´æç" }],
    beforeAfterLabel: "äº§åç²¾ä¿®ååå¯¹æ¯ï¼ä»åå§ç´ æå°ä¸æ¶çº§æå"
  },
  {
    id: "case3",
    pageNum: 8,
    num: "03",
    title: "å®è£å¯¼ååè§é¢å¨æ¡",
    subtitle: "åªè¾ + 3Dåä½æ¡ä¾ Â· Installation Video Full Production",
    background: "ç¾å¼å¡è½¦/ç®å¡éä»¶ç±»äº§åï¼å¦è½¦é¡¶è¡ææ¶ãä¾§è¸æ¿ãä¿é©æ ç­ï¼å®è£æµç¨å¤æï¼ç¨æ·å¨è´­ä¹°åéè¦æ¸æ°äºè§£å®è£é¾åº¦ä¸æ­¥éª¤ãåææå­è¯´æä¹¦ç¨æ·çè§£ææ¬é«ï¼å¯¼è´å®åå¨è¯¢éå¤§ãéè´§çåé«ãéè¦éè¿ä¸ä¸çå®è£å¼å¯¼è§é¢ââç»å3Dæ¸²æå¨ç»ä¸å®æç´ æââç´è§å±ç¤ºå®è£å¨æµç¨ï¼æåç¨æ·è´­ä¹°ä¿¡å¿ãéä½å®åååã",
    approach: "éç¨ã3Dæ¸²æ + å®ææ··åªãçåæ°æ¨¡å¼ãåéè¿3Dæ¸²ææ¸æ°å±ç¤ºäº§åç»æä¸å®è£é»è¾ï¼åç»åå®æç´ æå±ç¤ºçå®å®è£åºæ¯ãç¨AEè¿è¡ä¸ä¸å¨ç»åè£ï¼æ­¥éª¤æ æ³¨/ç®­å¤´å¼å¯¼/æå­æç¤ºï¼ï¼ç¡®ä¿ç¨æ·ä¸çå°±æã",
    responsibilities: "ç¬ç«å®æè§é¢å¨æ¡ç­åä¸æ§è¡ââä»èæ¬æ°åãåéè®¾è®¡ãå®æç´ ææ´çï¼å°3Då»ºæ¨¡å¢éå¯¹æ¥æ²éãAEå¨ç»åè£ãPRåäºåªè¾ä¸æçè¾åºãå¨ç¨ææ§è§é¢åè´¨ä¸äº¤ä»èå¥ï¼ç¡®ä¿æååæ¶ç¬¦åAmazonè§é¢è§èä¸ç¨æ·ä½éªéæ±ã",
    achievements: [
      "äº§åå®è£è§é¢å®æ­çæå25%ï¼ç¨æ·è§çæ·±åº¦æ¾èæé«",
      "å»ºç«è§é¢å¶ä½æ ååSOPæµç¨ï¼åç»­åç±»è§é¢äº§åºæçæå30%",
      "3Dåä½æ²éæ¹æ³è®ºè½å°ï¼å»ºæ¨¡è¿å·¥çéä½40%",
      "ç´¯è®¡äº§åº15+æ¯å®è£å¼å¯¼è§é¢ï¼è¦çæ ¸å¿SKUäº§åçº¿"
    ],
    reusableValue: "æ¬é¡¹ç®å»ºç«çè§é¢å¶ä½æ ååSOPæµç¨ï¼å«èæ¬æ¨¡æ¿ãåéæ¡æ¶ãAEåè£é¢è®¾ï¼å·²æä¸ºå¢éè§é¢çäº§çæ ¸å¿è§èï¼3Dåä½æ²éæ¹æ³è®ºï¼éæ±æè§£è¡¨+è§è§åèåº+åæ­¥éªæ¶æºå¶ï¼ææéä½å»ºæ¨¡è¿å·¥çï¼å¯ç´æ¥åºç¨äºåç±»äº§åçè§é¢å¶ä½åºæ¯ãã3Dæ¸²æ+å®ææ··åªãçåæ°æ¨¡å¼ä¸ºå¤æäº§åçå¯è§ååç°æä¾äºå¯å¤ç¨çè§£å³æ¹æ¡ã",
    keyMetrics: [
      { value: "25%", label: "å®æ­çæå" },
      { value: "15%", label: "å¨è¯¢çä¸é" },
      { value: "30%", label: "äº§åºæçæå" },
      { value: "15+", label: "è§é¢äº§åºæ°" }
    ],
    imageSlots: [
      { label: "PRåªè¾æ¶é´çº¿æªå¾" },
      { label: "AEå¨ç»åè£æææªå¾" },
      { label: "3Dæ¸²æäº§ååè§£å¾" },
      { label: "è§é¢åéèæ¬è®¾è®¡" },
      { label: "å®è£æ­¥éª¤å³é®å¸§æªå¾" },
      { label: "æçå¸§æªå¾" }
    ],
    videoSlots: [{ label: "å®è£å¼å¯¼è§é¢æç Â· 3Dæ¸²æ + å®ææ··åª" }],
    beforeAfterLabel: "è§é¢ä¼åååå¯¹æ¯ï¼ä»æå­è¯´æå°è§é¢å¼å¯¼"
  },
  {
    id: "case4",
    pageNum: 9,
    num: "04",
    title: "å¤åºéºè§è§ç»ç­¹é¡¹ç®",
    subtitle: "Multi-Store Visual Coordination (12 Stores / 1350+ SKU)",
    background: "åæ¶ç®¡ç11ä¸ªAmazonåºéº + 1ä¸ªeBayåºéºçè§è§è¾åºä½ç³»ï¼æ¶å1350+ SKUï¼è¦çç¾å¼å¡è½¦éä»¶ãç®å¡æ¹è£ä»¶ãè½¦è½½å·¥å·ç­å¤ä¸ªå­ç±»ç®ï¼ãæ¯ä¸ªåºéºæç¬ç«çè¿è¥èå¥ä¸è§è§éæ±ï¼éè¦å¨ä¿è¯ç»ä¸åè´¨æ åä¸å¹³å°åè§çåæä¸ï¼å®ç°é«æçãä½ææ¬çè§æ¨¡åè§è§äº¤ä»ãæ ¸å¿ææå¨äºï¼å¤çº¿ç¨å¹¶è¡ãèµæºæéãåè§è¦æ±ä¸¥æ ¼ã",
    approach: "æ­å»ºãåå±ç®¡ç+ä¼åçº§ææ+æ¨¡æ¿å¤ç¨+æ°æ®é©±å¨ãçå¤åºéºè§è§ç®¡çä½ç³»ãå°åºéºæä¸å¡éè¦æ§åçº§ï¼å»ºç«å¨æä¼åçº§æææºå¶ï¼éè¿æ¨¡æ¿åºéä½éå¤å³å¨ï¼ç¨æ°æ®å¤çæç»­ä¼åæµç¨æçã",
    responsibilities: "æ­å»ºå¤åºéºè§è§ç®¡çä½ç³»ââåæ¬åºéºåçº§ç®¡çç­ç¥ãå¨æä¼åçº§æææºå¶ãè·¨é¨é¨åä½æ åæµç¨ï¼è¿è¥/éè´­/å»ºæ¨¡ä¸æ¹å¯¹é½ï¼ãå¨æµç¨æ°æ®å¤çä¸é®é¢è¿½è¸ªçæ¿ãç»ç­¹å¢éèµæºåéï¼ç¡®ä¿12ä¸ªåºéºçè§è§åè§çä¸äº¤ä»æçåæ­¥æåã",
    achievements: [
      "12åºéºè§è§åè§çé¿æä¿æ90%ä»¥ä¸ï¼é¶è¿è§è®°å½",
      "å¤åºéºååè¿ä½æçæå35%ï¼ææå²çªçä¸é70%",
      "äººåææ¬èç20%ï¼å¨ä¸å¢å äººåçåæä¸æ¯æè§æ¨¡åæ©å¼ ",
      "å»ºç«å®æ´çå¤åºéºè§è§æ°æ®å°è´¦ï¼æ¯æç®¡çå±å³ç­"
    ],
    reusableValue: "æ¬é¡¹ç®æ­å»ºçå¤åºéºè§è§ç®¡çä½ç³»ï¼åºéºåçº§ç­ç¥+å¨ææææºå¶+æ°æ®å°è´¦æ¨¡æ¿ï¼å¯ç´æ¥åºç¨äºå¤åç/å¤å¹³å°çè§æ¨¡åè§è§ç®¡çåºæ¯ï¼è·¨é¨é¨åä½æ åæµç¨æææåè¿è¥/éè´­/è®¾è®¡ä¸æ¹ååæçãæ°æ®é©±å¨çç®¡çæ¹æ³è®ºï¼å«KPIçæ¿+ç¶é¢åæè¡¨ï¼ä¸ºå¢éæç»­ä¼åæä¾å³ç­æ¯æï¼éç¨äºä¸­å¤§åçµåå¢éçç²¾ç»åç®¡çéæ±ã",
    keyMetrics: [
      { value: "12", label: "åºéºç»ç­¹" },
      { value: "1350+", label: "SKUç®¡ç" },
      { value: "90%ä»¥ä¸", label: "åè§ç" },
      { value: "20%", label: "ææ¬èç" }
    ],
    imageSlots: [
      { label: "å¤åºéºè§è§äº§åºå¯¹æ¯" },
      { label: "äº§åçº¿è§è§ä½ç³»å±ç¤º" },
      { label: "æ°æ®å°è´¦çæ¿æªå¾" },
      { label: "äº§åç²¾ä¿®æ¹éäº§åºç¤ºä¾" },
      { label: "è·¨é¨é¨åä½æµç¨å¾" },
      { label: "ä»»å¡ç®¡æ§æ¥è¡¨æªå¾" }
    ],
    videoSlots: [{ label: "å¤åºéºç®¡çæµç¨æ¼ç¤º / æ°æ®å¤çå½å±" }],
    beforeAfterLabel: "ç®¡çä½ç³»åçº§ååï¼ä»äººå·¥è·è¿å°ç³»ç»åå°è´¦ç®¡ç"
  }
];
function ed() {
  const [e, t] = we("cover"), i = {
    name: "æ±¤ç¿è",
    phone: "18036388334",
    email: "tmsx123456@163.com",
    portfolio: "XXXï¼å«è§é¢/å¨ç»/æ¨¡æ¿ç¤ºä¾ï¼"
  }, n = {
    corePositioning: "ææ¯ä¸åè®¾è®¡ä¸»ç®¡ï¼æ¥æ2å¹´å¢éç®¡çç»éªï¼æé¿ä»0æ­å»ºæ ååSOPä½ç³»å¹¶å¸¦é¢å¢éå®æå¤§è§æ¨¡çµåè§è§äº¤ä»ãæçæ ¸å¿ä¼å¿å¨äºãç³»ç»åæµç¨ç®¡çãä¸ãå¨é¾è·¯è§è§è½å°æ§è¡ãââè½å¤é«ææ´å2Dè®¾è®¡ãè§é¢å¶ä½ã3Dæ¸²æåä½ä¸ä¸ªæ¨¡åï¼ç¡®ä¿12ä¸ªåºéº1350+ SKUçè§è§åè§ç90%ä»¥ä¸ï¼å¹¶å¨å¢éæ©å¼ è¿ç¨ä¸­æç»­ä¼åäººæä¸ææ¬ç®¡æ§ãæå·å¤å®æé©±å¨åæç»´ï¼æé¿å°å¤æé¡¹ç®æè§£ä¸ºæ ååæ¨¡åï¼æ¨å¨å¢éä»ãç»éªä¾èµãåãæ ååè¿ä½ãè½¬åãå¨Amazonå¨æ¡é¡¹ç®ä¸­ï¼æä¸»å¯¼å®æäºæ°åè§è§å¨æ¡äº¤ä»ãå®è£å¯¼ååè§é¢å¶ä½ãå¤§ä¿ç©ææ¹éäº§åºç­é«åä»»å¡ï¼æ¨å¨ä¸»å¾ç¹å»çæå18%ãè½¬åçæå12%ãå®è£å¨è¯¢çä¸é15%ãåæ¶ï¼æéè¿æ­å»ºSOPä½ç³»ä¸æ°æ®å¤çæºå¶ï¼æåå°æ°åå·¥å¹è®­å¨æä»2ä¸ªæç¼©ç­è³4å¨ãè®¾è®¡è¿å·¥çä»35%éè³15%ãå¢éæ´ä½äº¤ä»å¨æç¼©ç­25%ã",
    workExperience: `2023.03 - è³ä» | Amazonè§è§ä¸»ç®¡ | æ·±å³å¸æè·¨å¢çµåå¬å¸
å¢éç®¡çï¼å¸¦é¢3-5äººè®¾è®¡å¢éï¼è´è´£12ä¸ªåºéº1350+ SKUçè§è§å¨æ¡è¾åºï¼åæ¬äº§åç²¾ä¿®ãA+é¡µé¢ãå®è£è§é¢ãå¤§ä¿ç©æç­å¨é¾è·¯è§è§æ¯æãä¸»å¯¼ä»0æ­å»ºå¢éSOPä½ç³»ï¼å«è®¾è®¡è§èãå®¡æ ¸æµç¨ãä¼åçº§æææºå¶ï¼ãå»ºç«æ°äººå¹è®­ä¸å¸¦ææºå¶ï¼ç´¯è®¡å¸¦æ4åæ°äººç¬ç«ä¸å²ãæ¨å¨å¢éäº¤ä»å¨æç¼©ç­25%ãè¿å·¥çä»35%éè³15%ãæ°äººä¸å²å¨æä»2ä¸ªæç¼©è³4å¨ãæ ¸å¿ä¸å¡ï¼è´è´£Amazonå¨é¾è·¯è§è§äº¤ä»ââäº§åä¸»å¾ç²¾ä¿®ãA+åçæäºé¡µé¢è®¾è®¡ãå®è£å¼å¯¼è§é¢å¶ä½ï¼3Dæ¸²æ+å®ææ··åª+AEåè£ï¼ãå¤§ä¿æ´»å¨ç©ææ¹éçäº§ãä¸è¿è¥/éè´­/å»ºæ¨¡å¢éæ·±åº¦åä½ï¼ç²¾åå¯¹æ¥ä¸å¡éæ±èç¹ï¼ç¡®ä¿è§è§åè§ç90%ä»¥ä¸ãä¸»å¾ç¹å»çæå18%ãè½¬åçæå12%ãå®è£å¨è¯¢çä¸é15%ã`,
    projects: [
      { num: "01", title: "è®¾è®¡å¢éæµç¨ä¼åä¸è§èæ­å»º", desc: "ä»0æ­å»ºå¢éSOPä½ç³»ï¼è¦çè®¾è®¡è§èãå®¡æ ¸æµç¨ãæææºå¶ä¸æ°äººå¹è®­ãè¿å·¥çä»35%éè³15%ï¼æ°äººä¸å²å¨æç¼©ç­50%ã" },
      { num: "02", title: "Amazonæ°åè§è§å¨æ¡", desc: "ä¸»å¯¼10+ SKUå¨ç³»åè§è§ç©æè¾åºãä¸»å¾ç¹å»çæå18%ï¼è½¬åçæå12%ï¼è§è§åè§ç90%ä»¥ä¸ã" },
      { num: "03", title: "å®è£å¯¼ååè§é¢å¨æ¡", desc: "ç¬ç«å®æè§é¢å¨æ¡ç­åä¸æ§è¡ï¼å®æ­çæå25%ï¼å®åå¨è¯¢çä¸é15%ã" },
      { num: "04", title: "å¤åºéºè§è§ç»ç­¹é¡¹ç®", desc: "åæ¶ç®¡ç12ä¸ªåºéº1350+ SKUè§è§è¾åºï¼åSKUäº¤ä»å¨æä»7å¤©ç¼©è³5å¤©ï¼äººåææ¬èç20%ã" }
    ]
  }, s = {
    thankYouMessage: "æè°¢æ¨ç¿»éè¿ä»½ä½åéãæç¨10é¡µåç°äºæå¨Amazonè§è§ä½ç³»ä¸­çå®æ´å®æç»éªââä»åä¸ªSKUçè§è§ç²¾ä¿®å°1350+ SKUçå¨æµç¨ç®¡çï¼ä»è§é¢åªè¾åè£å°å¢éSOPæ­å»ºï¼ä»0å°1çé¡¹ç®å¨æ¡è½åä¸è§æ¨¡åç®¡çè½åå¹¶è¡ãæç¸ä¿¡ä¼ç§çè®¾è®¡ä¸ä»ä»æ¯å¥½ççç»é¢ï¼æ´æ¯ç³»ç»åçæµç¨æ¯æä¸æ°æ®é©±å¨çæçä¼åã",
    careerVision: "ææå¾å å¥ä¸å®¶éè§è®¾è®¡ä½ç³»åå»ºè®¾çå¬å¸ï¼æä»»è§è§ä¸»ç®¡æé«çº§è§è§è®¾è®¡å¸è§è²ï¼ç»§ç»­æ·±èçµåå¨é¾è·¯è§è§ä½ç³»ââæ¢è½å¸¦é¢å¢éæ­å»ºæ ååSOPãä¼åç®¡çæçï¼ä¹è½äº²èªä¸åºå®æé«è´¨éè§è§è¾åºãæå¸æå¨ä¸ä¸ä»½å·¥ä½ä¸­ï¼å°ãè®¾è®¡ç®¡çè½åãä¸ãå¨é¾è·¯æ§è¡è½åãè¿ä¸æ­¥èåï¼æ¨å¨å¢éä»ä¼ç§èµ°ååè¶ã"
  }, a = Qu, r = ht((o) => {
    const l = document.getElementById(o);
    l && l.scrollIntoView({ behavior: "smooth" });
  }, []);
  return fe(() => {
    const o = new IntersectionObserver(
      (l) => {
        for (const d of l)
          d.isIntersecting && t(d.target.id);
      },
      { threshold: 0.3 }
    );
    return st.forEach((l) => {
      const d = document.getElementById(l.id);
      d && o.observe(d);
    }), () => o.disconnect();
  }, []), /* @__PURE__ */ m(
    "div",
    {
      className: "w-full",
      style: { fontFamily: "'Noto Sans SC', 'Alibaba PuHuiTi', sans-serif" },
      children: [
        /* @__PURE__ */ c(Wu, { currentSection: e, onNavigate: r }),
        /* @__PURE__ */ c(Ku, { coverInfo: i }),
        /* @__PURE__ */ c(
          Hu,
          {
            coverInfo: i,
            resumeData: n
          }
        ),
        /* @__PURE__ */ c(zu, { onNavigate: r }),
        /* @__PURE__ */ c(Gu, {}),
        /* @__PURE__ */ c(Xu, {}),
        a.map((o) => /* @__PURE__ */ c(
          Yu,
          {
            data: o
          },
          o.id
        )),
        /* @__PURE__ */ c(qu, {}),
        /* @__PURE__ */ c(Zu, {}),
        /* @__PURE__ */ c(
          Ju,
          {
            coverInfo: i,
            backCoverData: s
          }
        )
      ]
    }
  );
}
const td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ed
}, Symbol.toStringTag, { value: "Module" }));
export {
  nd as Code0_8
};

