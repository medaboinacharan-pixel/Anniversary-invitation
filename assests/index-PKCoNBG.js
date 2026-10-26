import {r as de, j as h} from "./index-gni17x6h.js";
function xr(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function ba(o, e) {
    o.prototype = Object.create(e.prototype),
    o.prototype.constructor = o,
    o.__proto__ = e
}
var It = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, ai = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Js, Je, we, Ht = 1e8, me = 1 / Ht, Cs = Math.PI * 2, Xl = Cs / 4, Wl = 0, wa = Math.sqrt, Gl = Math.cos, ql = Math.sin, Ge = function(e) {
    return typeof e == "string"
}, Oe = function(e) {
    return typeof e == "function"
}, Tr = function(e) {
    return typeof e == "number"
}, Zs = function(e) {
    return typeof e > "u"
}, fr = function(e) {
    return typeof e == "object"
}, bt = function(e) {
    return e !== !1
}, eo = function() {
    return typeof window < "u"
}, ki = function(e) {
    return Oe(e) || Ge(e)
}, Ta = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, ct = Array.isArray, Ql = /random\([^)]+\)/g, Kl = /,\s*/g, Eo = /(?:-?\.?\d|\.)+/gi, Sa = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, yn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, fs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ka = /[+-]=-?[.\d]+/, Jl = /[^,'"\[\]\s]+/gi, Zl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ce, sr, Ps, to, Ft = {}, Wi = {}, Ca, Pa = function(e) {
    return (Wi = Mn(e, Ft)) && kt
}, ro = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, li = function(e, t) {
    return !t && console.warn(e)
}, ja = function(e, t) {
    return e && (Ft[e] = t) && Wi && (Wi[e] = t) || Ft
}, ci = function() {
    return 0
}, ec = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Fi = {
    suppressEvents: !0,
    kill: !1
}, tc = {
    suppressEvents: !0
}, no = {}, Rr = [], js = {}, Ma, Ot = {}, ds = {}, Do = 30, zi = [], io = "", so = function(e) {
    var t = e[0], r, n;
    if (fr(t) || Oe(t) || (e = [e]),
    !(r = (t._gsap || {}).harness)) {
        for (n = zi.length; n-- && !zi[n].targetTest(t); )
            ;
        r = zi[n]
    }
    for (n = e.length; n--; )
        e[n] && (e[n]._gsap || (e[n]._gsap = new Ka(e[n],r))) || e.splice(n, 1);
    return e
}, Zr = function(e) {
    return e._gsap || so(Xt(e))[0]._gsap
}, Na = function(e, t, r) {
    return (r = e[t]) && Oe(r) ? e[t]() : Zs(r) && e.getAttribute && e.getAttribute(t) || r
}, wt = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, Ie = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, ke = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, wn = function(e, t) {
    var r = t.charAt(0)
      , n = parseFloat(t.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + n : r === "-" ? e - n : r === "*" ? e * n : e / n
}, rc = function(e, t) {
    for (var r = t.length, n = 0; e.indexOf(t[n]) < 0 && ++n < r; )
        ;
    return n < r
}, Gi = function() {
    var e = Rr.length, t = Rr.slice(0), r, n;
    for (js = {},
    Rr.length = 0,
    r = 0; r < e; r++)
        n = t[r],
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
}, oo = function(e) {
    return !!(e._initted || e._startAt || e.add)
}, Oa = function(e, t, r, n) {
    Rr.length && !Je && Gi(),
    e.render(t, r, !!(Je && t < 0 && oo(e))),
    Rr.length && !Je && Gi()
}, Ea = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Jl).length < 2 ? t : Ge(e) ? e.trim() : e
}, Da = function(e) {
    return e
}, zt = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, nc = function(e) {
    return function(t, r) {
        for (var n in r)
            n in t || n === "duration" && e || n === "ease" || (t[n] = r[n])
    }
}, Mn = function(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}, Ao = function o(e, t) {
    for (var r in t)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = fr(t[r]) ? o(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e
}, qi = function(e, t) {
    var r = {}, n;
    for (n in e)
        n in t || (r[n] = e[n]);
    return r
}, Gn = function(e) {
    var t = e.parent || Ce
      , r = e.keyframes ? nc(ct(e.keyframes)) : zt;
    if (bt(e.inherit))
        for (; t; )
            r(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, ic = function(e, t) {
    for (var r = e.length, n = r === t.length; n && r-- && e[r] === t[r]; )
        ;
    return r < 0
}, Aa = function(e, t, r, n, i) {
    var s = e[n], a;
    if (i)
        for (a = t[i]; s && s[i] > a; )
            s = s._prev;
    return s ? (t._next = s._next,
    s._next = t) : (t._next = e[r],
    e[r] = t),
    t._next ? t._next._prev = t : e[n] = t,
    t._prev = s,
    t.parent = t._dp = e,
    t
}, ss = function(e, t, r, n) {
    r === void 0 && (r = "_first"),
    n === void 0 && (n = "_last");
    var i = t._prev
      , s = t._next;
    i ? i._next = s : e[r] === t && (e[r] = s),
    s ? s._prev = i : e[n] === t && (e[n] = i),
    t._next = t._prev = t.parent = null
}, Fr = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, en = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, sc = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, Ms = function(e, t, r, n) {
    return e._startAt && (Je ? e._startAt.revert(Fi) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, n))
}, oc = function o(e) {
    return !e || e._ts && o(e.parent)
}, Ro = function(e) {
    return e._repeat ? Nn(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Nn = function(e, t) {
    var r = Math.floor(e = ke(e / t));
    return e && r === e ? r - 1 : r
}, Qi = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, os = function(e) {
    return e._end = ke(e._start + (e._tDur / Math.abs(e._ts || e._rts || me) || 0))
}, as = function(e, t) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = ke(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    os(e),
    r._dirty || en(r, e)),
    e
}, Ra = function(e, t) {
    var r;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Qi(e.rawTime(), t),
    (!t._dur || vi(0, t.totalDuration(), r) - t._tTime > me) && t.render(r, !0)),
    en(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -me
    }
}, ar = function(e, t, r, n) {
    return t.parent && Fr(t),
    t._start = ke((Tr(r) ? r : r || e !== Ce ? Vt(e, r, t) : e._time) + t._delay),
    t._end = ke(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    Aa(e, t, "_first", "_last", e._sort ? "_start" : 0),
    Ns(t) || (e._recent = t),
    n || Ra(e, t),
    e._ts < 0 && as(e, e._tTime),
    e
}, La = function(e, t) {
    return (Ft.ScrollTrigger || ro("scrollTrigger", t)) && Ft.ScrollTrigger.create(t, e)
}, Ia = function(e, t, r, n, i) {
    if (lo(e, t, i),
    !e._initted)
        return 1;
    if (!r && e._pt && !Je && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ma !== Dt.frame)
        return Rr.push(e),
        e._lazy = [i, n],
        1
}, ac = function o(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t))
}, Ns = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, lc = function(e, t, r, n) {
    var i = e.ratio, s = t < 0 || !t && (!e._start && ac(e) && !(!e._initted && Ns(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ns(e)) ? 0 : 1, a = e._rDelay, l = 0, c, u, p;
    if (a && e._repeat && (l = vi(0, e._tDur, t),
    u = Nn(l, a),
    e._yoyo && u & 1 && (s = 1 - s),
    u !== Nn(e._tTime, a) && (i = 1 - s,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    s !== i || Je || n || e._zTime === me || !t && e._zTime) {
        if (!e._initted && Ia(e, t, n, r, l))
            return;
        for (p = e._zTime,
        e._zTime = t || (r ? me : 0),
        r || (r = t && !p),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = l,
        c = e._pt; c; )
            c.r(s, c.d),
            c = c._next;
        t < 0 && Ms(e, t, r, !0),
        e._onUpdate && !r && Rt(e, "onUpdate"),
        l && e._repeat && !r && e.parent && Rt(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === s && (s && Fr(e, 1),
        !r && !Je && (Rt(e, s ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, cc = function(e, t, r) {
    var n;
    if (r > t)
        for (n = e._first; n && n._start <= r; ) {
            if (n.data === "isPause" && n._start > t)
                return n;
            n = n._next
        }
    else
        for (n = e._last; n && n._start >= r; ) {
            if (n.data === "isPause" && n._start < t)
                return n;
            n = n._prev
        }
}, On = function(e, t, r, n) {
    var i = e._repeat
      , s = ke(t) || 0
      , a = e._tTime / e._tDur;
    return a && !n && (e._time *= s / e._dur),
    e._dur = s,
    e._tDur = i ? i < 0 ? 1e10 : ke(s * (i + 1) + e._rDelay * i) : s,
    a > 0 && !n && as(e, e._tTime = e._tDur * a),
    e.parent && os(e),
    r || en(e.parent, e),
    e
}, Lo = function(e) {
    return e instanceof vt ? en(e) : On(e, e._dur)
}, uc = {
    _start: 0,
    endTime: ci,
    totalDuration: ci
}, Vt = function o(e, t, r) {
    var n = e.labels, i = e._recent || uc, s = e.duration() >= Ht ? i.endTime(!1) : e._dur, a, l, c;
    return Ge(t) && (isNaN(t) || t in n) ? (l = t.charAt(0),
    c = t.substr(-1) === "%",
    a = t.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")),
    (l === "<" ? i._start : i.endTime(i._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? i : r).totalDuration() / 100 : 1)) : a < 0 ? (t in n || (n[t] = s),
    n[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)),
    c && r && (l = l / 100 * (ct(r) ? r[0] : r).totalDuration()),
    a > 1 ? o(e, t.substr(0, a - 1), r) + l : s + l)) : t == null ? s : +t
}, qn = function(e, t, r) {
    var n = Tr(t[1]), i = (n ? 2 : 1) + (e < 2 ? 0 : 1), s = t[i], a, l;
    if (n && (s.duration = t[1]),
    s.parent = r,
    e) {
        for (a = s,
        l = r; l && !("immediateRender" in a); )
            a = l.vars.defaults || {},
            l = bt(l.vars.inherit) && l.parent;
        s.immediateRender = bt(a.immediateRender),
        e < 2 ? s.runBackwards = 1 : s.startAt = t[i - 1]
    }
    return new Be(t[0],s,t[i + 1])
}, Vr = function(e, t) {
    return e || e === 0 ? t(e) : t
}, vi = function(e, t, r) {
    return r < e ? e : r > t ? t : r
}, at = function(e, t) {
    return !Ge(e) || !(t = Zl.exec(e)) ? "" : t[1]
}, fc = function(e, t, r) {
    return Vr(r, function(n) {
        return vi(e, t, n)
    })
}, Os = [].slice, Fa = function(e, t) {
    return e && fr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && fr(e[0])) && !e.nodeType && e !== sr
}, dc = function(e, t, r) {
    return r === void 0 && (r = []),
    e.forEach(function(n) {
        var i;
        return Ge(n) && !t || Fa(n, 1) ? (i = r).push.apply(i, Xt(n)) : r.push(n)
    }) || r
}, Xt = function(e, t, r) {
    return we && !t && we.selector ? we.selector(e) : Ge(e) && !r && (Ps || !En()) ? Os.call((t || to).querySelectorAll(e), 0) : ct(e) ? dc(e, r) : Fa(e) ? Os.call(e, 0) : e ? [e] : []
}, Es = function(e) {
    return e = Xt(e)[0] || li("Invalid scope") || {},
    function(t) {
        var r = e.current || e.nativeElement || e;
        return Xt(t, r.querySelectorAll ? r : r === e ? li("Invalid scope") || to.createElement("div") : e)
    }
}, za = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Ba = function(e) {
    if (Oe(e))
        return e;
    var t = fr(e) ? e : {
        each: e
    }
      , r = tn(t.ease)
      , n = t.from || 0
      , i = parseFloat(t.base) || 0
      , s = {}
      , a = n > 0 && n < 1
      , l = isNaN(n) || a
      , c = t.axis
      , u = n
      , p = n;
    return Ge(n) ? u = p = {
        center: .5,
        edges: .5,
        end: 1
    }[n] || 0 : !a && l && (u = n[0],
    p = n[1]),
    function(m, f, _) {
        var d = (_ || t).length, g = s[d], x, y, w, T, k, M, b, j, C;
        if (!g) {
            if (C = t.grid === "auto" ? 0 : (t.grid || [1, Ht])[1],
            !C) {
                for (b = -Ht; b < (b = _[C++].getBoundingClientRect().left) && C < d; )
                    ;
                C < d && C--
            }
            for (g = s[d] = [],
            x = l ? Math.min(C, d) * u - .5 : n % C,
            y = C === Ht ? 0 : l ? d * p / C - .5 : n / C | 0,
            b = 0,
            j = Ht,
            M = 0; M < d; M++)
                w = M % C - x,
                T = y - (M / C | 0),
                g[M] = k = c ? Math.abs(c === "y" ? T : w) : wa(w * w + T * T),
                k > b && (b = k),
                k < j && (j = k);
            n === "random" && za(g),
            g.max = b - j,
            g.min = j,
            g.v = d = (parseFloat(t.amount) || parseFloat(t.each) * (C > d ? d - 1 : c ? c === "y" ? d / C : C : Math.max(C, d / C)) || 0) * (n === "edges" ? -1 : 1),
            g.b = d < 0 ? i - d : i,
            g.u = at(t.amount || t.each) || 0,
            r = r && d < 0 ? kc(r) : r
        }
        return d = (g[m] - g.min) / g.max || 0,
        ke(g.b + (r ? r(d) : d) * g.v) + g.u
    }
}, Ds = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var n = ke(Math.round(parseFloat(r) / e) * e * t);
        return (n - n % 1) / t + (Tr(r) ? 0 : at(r))
    }
}, Ya = function(e, t) {
    var r = ct(e), n, i;
    return !r && fr(e) && (n = r = e.radius || Ht,
    e.values ? (e = Xt(e.values),
    (i = !Tr(e[0])) && (n *= n)) : e = Ds(e.increment)),
    Vr(t, r ? Oe(e) ? function(s) {
        return i = e(s),
        Math.abs(i - s) <= n ? i : s
    }
    : function(s) {
        for (var a = parseFloat(i ? s.x : s), l = parseFloat(i ? s.y : 0), c = Ht, u = 0, p = e.length, m, f; p--; )
            i ? (m = e[p].x - a,
            f = e[p].y - l,
            m = m * m + f * f) : m = Math.abs(e[p] - a),
            m < c && (c = m,
            u = p);
        return u = !n || c <= n ? e[u] : s,
        i || u === s || Tr(s) ? u : u + at(s)
    }
    : Ds(e))
}, Va = function(e, t, r, n) {
    return Vr(ct(e) ? !t : r === !0 ? !!(r = 0) : !n, function() {
        return ct(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * .99)) / r) * r * n) / n
    })
}, hc = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(n) {
        return t.reduce(function(i, s) {
            return s(i)
        }, n)
    }
}, pc = function(e, t) {
    return function(r) {
        return e(parseFloat(r)) + (t || at(r))
    }
}, mc = function(e, t, r) {
    return Ua(e, t, 0, 1, r)
}, $a = function(e, t, r) {
    return Vr(r, function(n) {
        return e[~~t(n)]
    })
}, _c = function o(e, t, r) {
    var n = t - e;
    return ct(e) ? $a(e, o(0, e.length), t) : Vr(r, function(i) {
        return (n + (i - e) % n) % n + e
    })
}, gc = function o(e, t, r) {
    var n = t - e
      , i = n * 2;
    return ct(e) ? $a(e, o(0, e.length - 1), t) : Vr(r, function(s) {
        return s = (i + (s - e) % i) % i || 0,
        e + (s > n ? i - s : s)
    })
}, ui = function(e) {
    return e.replace(Ql, function(t) {
        var r = t.indexOf("[") + 1
          , n = t.substring(r || 7, r ? t.indexOf("]") : t.length - 1).split(Kl);
        return Va(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)
    })
}, Ua = function(e, t, r, n, i) {
    var s = t - e
      , a = n - r;
    return Vr(i, function(l) {
        return r + ((l - e) / s * a || 0)
    })
}, xc = function o(e, t, r, n) {
    var i = isNaN(e + t) ? 0 : function(f) {
        return (1 - f) * e + f * t
    }
    ;
    if (!i) {
        var s = Ge(e), a = {}, l, c, u, p, m;
        if (r === !0 && (n = 1) && (r = null),
        s)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (ct(e) && !ct(t)) {
            for (u = [],
            p = e.length,
            m = p - 2,
            c = 1; c < p; c++)
                u.push(o(e[c - 1], e[c]));
            p--,
            i = function(_) {
                _ *= p;
                var d = Math.min(m, ~~_);
                return u[d](_ - d)
            }
            ,
            r = t
        } else
            n || (e = Mn(ct(e) ? [] : {}, e));
        if (!u) {
            for (l in t)
                ao.call(a, e, l, "get", t[l]);
            i = function(_) {
                return fo(_, a) || (s ? e.p : e)
            }
        }
    }
    return Vr(r, i)
}, Io = function(e, t, r) {
    var n = e.labels, i = Ht, s, a, l;
    for (s in n)
        a = n[s] - t,
        a < 0 == !!r && a && i > (a = Math.abs(a)) && (l = s,
        i = a);
    return l
}, Rt = function(e, t, r) {
    var n = e.vars, i = n[t], s = we, a = e._ctx, l, c, u;
    if (i)
        return l = n[t + "Params"],
        c = n.callbackScope || e,
        r && Rr.length && Gi(),
        a && (we = a),
        u = l ? i.apply(c, l) : i.call(c),
        we = s,
        u
}, Bn = function(e) {
    return Fr(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Je),
    e.progress() < 1 && Rt(e, "onInterrupt"),
    e
}, vn, Ha = [], Xa = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        eo() || e.headless) {
            var t = e.name
              , r = Oe(e)
              , n = t && !r && e.init ? function() {
                this._props = []
            }
            : e
              , i = {
                init: ci,
                render: fo,
                add: ao,
                kill: Rc,
                modifier: Ac,
                rawVars: 0
            }
              , s = {
                targetTest: 0,
                get: 0,
                getSetter: uo,
                aliases: {},
                register: 0
            };
            if (En(),
            e !== n) {
                if (Ot[t])
                    return;
                zt(n, zt(qi(e, i), s)),
                Mn(n.prototype, Mn(i, qi(e, s))),
                Ot[n.prop = t] = n,
                e.targetTest && (zi.push(n),
                no[t] = 1),
                t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            ja(t, n),
            e.register && e.register(kt, n, Tt)
        } else
            Ha.push(e)
}, pe = 255, Yn = {
    aqua: [0, pe, pe],
    lime: [0, pe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, pe],
    navy: [0, 0, 128],
    white: [pe, pe, pe],
    olive: [128, 128, 0],
    yellow: [pe, pe, 0],
    orange: [pe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [pe, 0, 0],
    pink: [pe, 192, 203],
    cyan: [0, pe, pe],
    transparent: [pe, pe, pe, 0]
}, hs = function(e, t, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (r - t) * e * 6 : e < .5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * pe + .5 | 0
}, Wa = function(e, t, r) {
    var n = e ? Tr(e) ? [e >> 16, e >> 8 & pe, e & pe] : 0 : Yn.black, i, s, a, l, c, u, p, m, f, _;
    if (!n) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Yn[e])
            n = Yn[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (i = e.charAt(1),
            s = e.charAt(2),
            a = e.charAt(3),
            e = "#" + i + i + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return n = parseInt(e.substr(1, 6), 16),
                [n >> 16, n >> 8 & pe, n & pe, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            n = [e >> 16, e >> 8 & pe, e & pe]
        } else if (e.substr(0, 3) === "hsl") {
            if (n = _ = e.match(Eo),
            !t)
                l = +n[0] % 360 / 360,
                c = +n[1] / 100,
                u = +n[2] / 100,
                s = u <= .5 ? u * (c + 1) : u + c - u * c,
                i = u * 2 - s,
                n.length > 3 && (n[3] *= 1),
                n[0] = hs(l + 1 / 3, i, s),
                n[1] = hs(l, i, s),
                n[2] = hs(l - 1 / 3, i, s);
            else if (~e.indexOf("="))
                return n = e.match(Sa),
                r && n.length < 4 && (n[3] = 1),
                n
        } else
            n = e.match(Eo) || Yn.transparent;
        n = n.map(Number)
    }
    return t && !_ && (i = n[0] / pe,
    s = n[1] / pe,
    a = n[2] / pe,
    p = Math.max(i, s, a),
    m = Math.min(i, s, a),
    u = (p + m) / 2,
    p === m ? l = c = 0 : (f = p - m,
    c = u > .5 ? f / (2 - p - m) : f / (p + m),
    l = p === i ? (s - a) / f + (s < a ? 6 : 0) : p === s ? (a - i) / f + 2 : (i - s) / f + 4,
    l *= 60),
    n[0] = ~~(l + .5),
    n[1] = ~~(c * 100 + .5),
    n[2] = ~~(u * 100 + .5)),
    r && n.length < 4 && (n[3] = 1),
    n
}, Ga = function(e) {
    var t = []
      , r = []
      , n = -1;
    return e.split(Lr).forEach(function(i) {
        var s = i.match(yn) || [];
        t.push.apply(t, s),
        r.push(n += s.length + 1)
    }),
    t.c = r,
    t
}, Fo = function(e, t, r) {
    var n = "", i = (e + n).match(Lr), s = t ? "hsla(" : "rgba(", a = 0, l, c, u, p;
    if (!i)
        return e;
    if (i = i.map(function(m) {
        return (m = Wa(m, t, 1)) && s + (t ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3] : m.join(",")) + ")"
    }),
    r && (u = Ga(e),
    l = r.c,
    l.join(n) !== u.c.join(n)))
        for (c = e.replace(Lr, "1").split(yn),
        p = c.length - 1; a < p; a++)
            n += c[a] + (~l.indexOf(a) ? i.shift() || s + "0,0,0,0)" : (u.length ? u : i.length ? i : r).shift());
    if (!c)
        for (c = e.split(Lr),
        p = c.length - 1; a < p; a++)
            n += c[a] + i[a];
    return n + c[p]
}, Lr = (function() {
    var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Yn)
        o += "|" + e + "\\b";
    return new RegExp(o + ")","gi")
}
)(), yc = /hsl[a]?\(/, qa = function(e) {
    var t = e.join(" "), r;
    if (Lr.lastIndex = 0,
    Lr.test(t))
        return r = yc.test(t),
        e[1] = Fo(e[1], r),
        e[0] = Fo(e[0], r, Ga(e[1])),
        !0
}, fi, Dt = (function() {
    var o = Date.now, e = 500, t = 33, r = o(), n = r, i = 1e3 / 240, s = i, a = [], l, c, u, p, m, f, _ = function d(g) {
        var x = o() - n, y = g === !0, w, T, k, M;
        if ((x > e || x < 0) && (r += x - t),
        n += x,
        k = n - r,
        w = k - s,
        (w > 0 || y) && (M = ++p.frame,
        m = k - p.time * 1e3,
        p.time = k = k / 1e3,
        s += w + (w >= i ? 4 : i - w),
        T = 1),
        y || (l = c(d)),
        T)
            for (f = 0; f < a.length; f++)
                a[f](k, m, M, g)
    };
    return p = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(g) {
            return m / (1e3 / (g || 60))
        },
        wake: function() {
            Ca && (!Ps && eo() && (sr = Ps = window,
            to = sr.document || {},
            Ft.gsap = kt,
            (sr.gsapVersions || (sr.gsapVersions = [])).push(kt.version),
            Pa(Wi || sr.GreenSockGlobals || !sr.gsap && sr || {}),
            Ha.forEach(Xa)),
            u = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            l && p.sleep(),
            c = u || function(g) {
                return setTimeout(g, s - p.time * 1e3 + 1 | 0)
            }
            ,
            fi = 1,
            _(2))
        },
        sleep: function() {
            (u ? cancelAnimationFrame : clearTimeout)(l),
            fi = 0,
            c = ci
        },
        lagSmoothing: function(g, x) {
            e = g || 1 / 0,
            t = Math.min(x || 33, e)
        },
        fps: function(g) {
            i = 1e3 / (g || 240),
            s = p.time * 1e3 + i
        },
        add: function(g, x, y) {
            var w = x ? function(T, k, M, b) {
                g(T, k, M, b),
                p.remove(w)
            }
            : g;
            return p.remove(g),
            a[y ? "unshift" : "push"](w),
            En(),
            w
        },
        remove: function(g, x) {
            ~(x = a.indexOf(g)) && a.splice(x, 1) && f >= x && f--
        },
        _listeners: a
    },
    p
}
)(), En = function() {
    return !fi && Dt.wake()
}, ne = {}, vc = /^[\d.\-M][\d.\-,\s]/, bc = /["']/g, wc = function(e) {
    for (var t = {}, r = e.substr(1, e.length - 3).split(":"), n = r[0], i = 1, s = r.length, a, l, c; i < s; i++)
        l = r[i],
        a = i !== s - 1 ? l.lastIndexOf(",") : l.length,
        c = l.substr(0, a),
        t[n] = isNaN(c) ? c.replace(bc, "").trim() : +c,
        n = l.substr(a + 1).trim();
    return t
}, Tc = function(e) {
    var t = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , n = e.indexOf("(", t);
    return e.substring(t, ~n && n < r ? e.indexOf(")", r + 1) : r)
}, Sc = function(e) {
    var t = (e + "").split("(")
      , r = ne[t[0]];
    return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [wc(t[1])] : Tc(e).split(",").map(Ea)) : ne._CE && vc.test(e) ? ne._CE("", e) : r
}, kc = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, tn = function(e, t) {
    return e && (Oe(e) ? e : ne[e] || Sc(e)) || t
}, fn = function(e, t, r, n) {
    r === void 0 && (r = function(l) {
        return 1 - t(1 - l)
    }
    ),
    n === void 0 && (n = function(l) {
        return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    }
    );
    var i = {
        easeIn: t,
        easeOut: r,
        easeInOut: n
    }, s;
    return wt(e, function(a) {
        ne[a] = Ft[a] = i,
        ne[s = a.toLowerCase()] = r;
        for (var l in i)
            ne[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ne[a + "." + l] = i[l]
    }),
    i
}, Qa = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, ps = function o(e, t, r) {
    var n = t >= 1 ? t : 1
      , i = (r || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , s = i / Cs * (Math.asin(1 / n) || 0)
      , a = function(u) {
        return u === 1 ? 1 : n * Math.pow(2, -10 * u) * ql((u - s) * i) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(c) {
        return 1 - a(1 - c)
    }
    : Qa(a);
    return i = Cs / i,
    l.config = function(c, u) {
        return o(e, c, u)
    }
    ,
    l
}, ms = function o(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function(s) {
        return s ? --s * s * ((t + 1) * s + t) + 1 : 0
    }
      , n = e === "out" ? r : e === "in" ? function(i) {
        return 1 - r(1 - i)
    }
    : Qa(r);
    return n.config = function(i) {
        return o(e, i)
    }
    ,
    n
};
wt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
    var t = e < 5 ? e + 1 : e;
    fn(o + ",Power" + (t - 1), e ? function(r) {
        return Math.pow(r, t)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
ne.Linear.easeNone = ne.none = ne.Linear.easeIn;
fn("Elastic", ps("in"), ps("out"), ps());
(function(o, e) {
    var t = 1 / e
      , r = 2 * t
      , n = 2.5 * t
      , i = function(a) {
        return a < t ? o * a * a : a < r ? o * Math.pow(a - 1.5 / e, 2) + .75 : a < n ? o * (a -= 2.25 / e) * a + .9375 : o * Math.pow(a - 2.625 / e, 2) + .984375
    };
    fn("Bounce", function(s) {
        return 1 - i(1 - s)
    }, i)
}
)(7.5625, 2.75);
fn("Expo", function(o) {
    return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o)
});
fn("Circ", function(o) {
    return -(wa(1 - o * o) - 1)
});
fn("Sine", function(o) {
    return o === 1 ? 1 : -Gl(o * Xl) + 1
});
fn("Back", ms("in"), ms("out"), ms());
ne.SteppedEase = ne.steps = Ft.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , n = e + (t ? 0 : 1)
          , i = t ? 1 : 0
          , s = 1 - me;
        return function(a) {
            return ((n * vi(0, s, a) | 0) + i) * r
        }
    }
};
ai.ease = ne["quad.out"];
wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return io += o + "," + o + "Params,"
});
var Ka = function(e, t) {
    this.id = Wl++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Na,
    this.set = t ? t.getSetter : uo
}
  , di = (function() {
    function o(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        On(this, +t.duration, 1, 1),
        this.data = t.data,
        we && (this._ctx = we,
        we.data.push(this)),
        fi || Dt.wake()
    }
    var e = o.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        On(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, n) {
        if (En(),
        !arguments.length)
            return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
            for (as(this, r),
            !i._dp || i.parent || Ra(i, this); i && i.parent; )
                i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0),
                i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ar(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !n || this._initted && Math.abs(this._zTime) === me || !this._initted && this._dur && r || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        Oa(this, r, n)),
        this
    }
    ,
    e.time = function(r, n) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Ro(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), n) : this._time
    }
    ,
    e.totalProgress = function(r, n) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    e.progress = function(r, n) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Ro(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(r, n) {
        var i = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * i, n) : this._repeat ? Nn(this._tTime, i) + 1 : 1
    }
    ,
    e.timeScale = function(r, n) {
        if (!arguments.length)
            return this._rts === -me ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var i = this.parent && this._ts ? Qi(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -me ? 0 : this._rts,
        this.totalTime(vi(-Math.abs(this._delay), this.totalDuration(), i), n !== !1),
        os(this),
        sc(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (En(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== me && (this._tTime -= me)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = ke(r);
            var n = this.parent || this._dp;
            return n && (n._sort || !this.parent) && ar(n, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (bt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var n = this.parent || this._dp;
        return n ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qi(n.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = tc);
        var n = Je;
        return Je = r,
        oo(this) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Je = n,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var n = this, i = arguments.length ? r : n.rawTime(); n; )
            i = n._start + i / (Math.abs(n._ts) || 1),
            n = n._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : i
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Lo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var n = this._time;
            return this._rDelay = r,
            Lo(this),
            n ? this.time(n) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, n) {
        return this.totalTime(Vt(this, r), bt(n))
    }
    ,
    e.restart = function(r, n) {
        return this.play().totalTime(r ? -this._delay : 0, bt(n)),
        this._dur || (this._zTime = -me),
        this
    }
    ,
    e.play = function(r, n) {
        return r != null && this.seek(r, n),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, n) {
        return r != null && this.seek(r || this.totalDuration(), n),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, n) {
        return r != null && this.seek(r, n),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -me : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -me,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, n = this._start, i;
        return !!(!r || this._ts && this._initted && r.isActive() && (i = r.rawTime(!0)) >= n && i < this.endTime(!0) - me)
    }
    ,
    e.eventCallback = function(r, n, i) {
        var s = this.vars;
        return arguments.length > 1 ? (n ? (s[r] = n,
        i && (s[r + "Params"] = i),
        r === "onUpdate" && (this._onUpdate = n)) : delete s[r],
        this) : s[r]
    }
    ,
    e.then = function(r) {
        var n = this
          , i = n._prom;
        return new Promise(function(s) {
            var a = Oe(r) ? r : Da
              , l = function() {
                var u = n.then;
                n.then = null,
                i && i(),
                Oe(a) && (a = a(n)) && (a.then || a === n) && (n.then = u),
                s(a),
                n.then = u
            };
            n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? l() : n._prom = l
        }
        )
    }
    ,
    e.kill = function() {
        Bn(this)
    }
    ,
    o
}
)();
zt(di.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -me,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var vt = (function(o) {
    ba(e, o);
    function e(r, n) {
        var i;
        return r === void 0 && (r = {}),
        i = o.call(this, r) || this,
        i.labels = {},
        i.smoothChildTiming = !!r.smoothChildTiming,
        i.autoRemoveChildren = !!r.autoRemoveChildren,
        i._sort = bt(r.sortChildren),
        Ce && ar(r.parent || Ce, xr(i), n),
        r.reversed && i.reverse(),
        r.paused && i.paused(!0),
        r.scrollTrigger && La(xr(i), r.scrollTrigger),
        i
    }
    var t = e.prototype;
    return t.to = function(n, i, s) {
        return qn(0, arguments, this),
        this
    }
    ,
    t.from = function(n, i, s) {
        return qn(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(n, i, s, a) {
        return qn(2, arguments, this),
        this
    }
    ,
    t.set = function(n, i, s) {
        return i.duration = 0,
        i.parent = this,
        Gn(i).repeatDelay || (i.repeat = 0),
        i.immediateRender = !!i.immediateRender,
        new Be(n,i,Vt(this, s),1),
        this
    }
    ,
    t.call = function(n, i, s) {
        return ar(this, Be.delayedCall(0, n, i), s)
    }
    ,
    t.staggerTo = function(n, i, s, a, l, c, u) {
        return s.duration = i,
        s.stagger = s.stagger || a,
        s.onComplete = c,
        s.onCompleteParams = u,
        s.parent = this,
        new Be(n,s,Vt(this, l)),
        this
    }
    ,
    t.staggerFrom = function(n, i, s, a, l, c, u) {
        return s.runBackwards = 1,
        Gn(s).immediateRender = bt(s.immediateRender),
        this.staggerTo(n, i, s, a, l, c, u)
    }
    ,
    t.staggerFromTo = function(n, i, s, a, l, c, u, p) {
        return a.startAt = s,
        Gn(a).immediateRender = bt(a.immediateRender),
        this.staggerTo(n, i, a, l, c, u, p)
    }
    ,
    t.render = function(n, i, s) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = n <= 0 ? 0 : ke(n), p = this._zTime < 0 != n < 0 && (this._initted || !c), m, f, _, d, g, x, y, w, T, k, M, b;
        if (this !== Ce && u > l && n >= 0 && (u = l),
        u !== this._tTime || s || p) {
            if (a !== this._time && c && (u += this._time - a,
            n += this._time - a),
            m = u,
            T = this._start,
            w = this._ts,
            x = !w,
            p && (c || (a = this._zTime),
            (n || !i) && (this._zTime = n)),
            this._repeat) {
                if (M = this._yoyo,
                g = c + this._rDelay,
                this._repeat < -1 && n < 0)
                    return this.totalTime(g * 100 + n, i, s);
                if (m = ke(u % g),
                u === l ? (d = this._repeat,
                m = c) : (k = ke(u / g),
                d = ~~k,
                d && d === k && (m = c,
                d--),
                m > c && (m = c)),
                k = Nn(this._tTime, g),
                !a && this._tTime && k !== d && this._tTime - k * g - this._dur <= 0 && (k = d),
                M && d & 1 && (m = c - m,
                b = 1),
                d !== k && !this._lock) {
                    var j = M && k & 1
                      , C = j === (M && d & 1);
                    if (d < k && (j = !j),
                    a = j ? 0 : u % c ? c : u,
                    this._lock = 1,
                    this.render(a || (b ? 0 : ke(d * g)), i, !c)._lock = 0,
                    this._tTime = u,
                    !i && this.parent && Rt(this, "onRepeat"),
                    this.vars.repeatRefresh && !b && (this.invalidate()._lock = 1,
                    k = d),
                    a && a !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (c = this._dur,
                    l = this._tDur,
                    C && (this._lock = 2,
                    a = j ? c : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !b && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !x)
                        return this
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = cc(this, ke(a), ke(m)),
            y && (u -= m - (m = y._start))),
            this._tTime = u,
            this._time = m,
            this._act = !!w,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = n,
            a = 0),
            !a && u && c && !i && !k && (Rt(this, "onStart"),
            this._tTime !== u))
                return this;
            if (m >= a && n >= 0)
                for (f = this._first; f; ) {
                    if (_ = f._next,
                    (f._act || m >= f._start) && f._ts && y !== f) {
                        if (f.parent !== this)
                            return this.render(n, i, s);
                        if (f.render(f._ts > 0 ? (m - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (m - f._start) * f._ts, i, s),
                        m !== this._time || !this._ts && !x) {
                            y = 0,
                            _ && (u += this._zTime = -me);
                            break
                        }
                    }
                    f = _
                }
            else {
                f = this._last;
                for (var P = n < 0 ? n : m; f; ) {
                    if (_ = f._prev,
                    (f._act || P <= f._end) && f._ts && y !== f) {
                        if (f.parent !== this)
                            return this.render(n, i, s);
                        if (f.render(f._ts > 0 ? (P - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (P - f._start) * f._ts, i, s || Je && oo(f)),
                        m !== this._time || !this._ts && !x) {
                            y = 0,
                            _ && (u += this._zTime = P ? -me : me);
                            break
                        }
                    }
                    f = _
                }
            }
            if (y && !i && (this.pause(),
            y.render(m >= a ? 0 : -me)._zTime = m >= a ? 1 : -1,
            this._ts))
                return this._start = T,
                os(this),
                this.render(n, i, s);
            this._onUpdate && !i && Rt(this, "onUpdate", !0),
            (u === l && this._tTime >= this.totalDuration() || !u && a) && (T === this._start || Math.abs(w) !== Math.abs(this._ts)) && (this._lock || ((n || !c) && (u === l && this._ts > 0 || !u && this._ts < 0) && Fr(this, 1),
            !i && !(n < 0 && !a) && (u || a || !l) && (Rt(this, u === l && n >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(u < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(n, i) {
        var s = this;
        if (Tr(i) || (i = Vt(this, i, n)),
        !(n instanceof di)) {
            if (ct(n))
                return n.forEach(function(a) {
                    return s.add(a, i)
                }),
                this;
            if (Ge(n))
                return this.addLabel(n, i);
            if (Oe(n))
                n = Be.delayedCall(0, n);
            else
                return this
        }
        return this !== n ? ar(this, n, i) : this
    }
    ,
    t.getChildren = function(n, i, s, a) {
        n === void 0 && (n = !0),
        i === void 0 && (i = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -Ht);
        for (var l = [], c = this._first; c; )
            c._start >= a && (c instanceof Be ? i && l.push(c) : (s && l.push(c),
            n && l.push.apply(l, c.getChildren(!0, i, s)))),
            c = c._next;
        return l
    }
    ,
    t.getById = function(n) {
        for (var i = this.getChildren(1, 1, 1), s = i.length; s--; )
            if (i[s].vars.id === n)
                return i[s]
    }
    ,
    t.remove = function(n) {
        return Ge(n) ? this.removeLabel(n) : Oe(n) ? this.killTweensOf(n) : (n.parent === this && ss(this, n),
        n === this._recent && (this._recent = this._last),
        en(this))
    }
    ,
    t.totalTime = function(n, i) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = ke(Dt.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))),
        o.prototype.totalTime.call(this, n, i),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(n, i) {
        return this.labels[n] = Vt(this, i),
        this
    }
    ,
    t.removeLabel = function(n) {
        return delete this.labels[n],
        this
    }
    ,
    t.addPause = function(n, i, s) {
        var a = Be.delayedCall(0, i || ci, s);
        return a.data = "isPause",
        this._hasPause = 1,
        ar(this, a, Vt(this, n))
    }
    ,
    t.removePause = function(n) {
        var i = this._first;
        for (n = Vt(this, n); i; )
            i._start === n && i.data === "isPause" && Fr(i),
            i = i._next
    }
    ,
    t.killTweensOf = function(n, i, s) {
        for (var a = this.getTweensOf(n, s), l = a.length; l--; )
            Nr !== a[l] && a[l].kill(n, i);
        return this
    }
    ,
    t.getTweensOf = function(n, i) {
        for (var s = [], a = Xt(n), l = this._first, c = Tr(i), u; l; )
            l instanceof Be ? rc(l._targets, a) && (c ? (!Nr || l._initted && l._ts) && l.globalTime(0) <= i && l.globalTime(l.totalDuration()) > i : !i || l.isActive()) && s.push(l) : (u = l.getTweensOf(a, i)).length && s.push.apply(s, u),
            l = l._next;
        return s
    }
    ,
    t.tweenTo = function(n, i) {
        i = i || {};
        var s = this, a = Vt(s, n), l = i, c = l.startAt, u = l.onStart, p = l.onStartParams, m = l.immediateRender, f, _ = Be.to(s, zt({
            ease: i.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: i.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || me,
            onStart: function() {
                if (s.pause(),
                !f) {
                    var g = i.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale());
                    _._dur !== g && On(_, g, 0, 1).render(_._time, !0, !0),
                    f = 1
                }
                u && u.apply(_, p || [])
            }
        }, i));
        return m ? _.render(0) : _
    }
    ,
    t.tweenFromTo = function(n, i, s) {
        return this.tweenTo(i, zt({
            startAt: {
                time: Vt(this, n)
            }
        }, s))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(n) {
        return n === void 0 && (n = this._time),
        Io(this, Vt(this, n))
    }
    ,
    t.previousLabel = function(n) {
        return n === void 0 && (n = this._time),
        Io(this, Vt(this, n), 1)
    }
    ,
    t.currentLabel = function(n) {
        return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + me)
    }
    ,
    t.shiftChildren = function(n, i, s) {
        s === void 0 && (s = 0);
        var a = this._first, l = this.labels, c;
        for (n = ke(n); a; )
            a._start >= s && (a._start += n,
            a._end += n),
            a = a._next;
        if (i)
            for (c in l)
                l[c] >= s && (l[c] += n);
        return en(this)
    }
    ,
    t.invalidate = function(n) {
        var i = this._first;
        for (this._lock = 0; i; )
            i.invalidate(n),
            i = i._next;
        return o.prototype.invalidate.call(this, n)
    }
    ,
    t.clear = function(n) {
        n === void 0 && (n = !0);
        for (var i = this._first, s; i; )
            s = i._next,
            this.remove(i),
            i = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        en(this)
    }
    ,
    t.totalDuration = function(n) {
        var i = 0, s = this, a = s._last, l = Ht, c, u, p;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -n : n));
        if (s._dirty) {
            for (p = s.parent; a; )
                c = a._prev,
                a._dirty && a.totalDuration(),
                u = a._start,
                u > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                ar(s, a, u - a._delay, 1)._lock = 0) : l = u,
                u < 0 && a._ts && (i -= u,
                (!p && !s._dp || p && p.smoothChildTiming) && (s._start += ke(u / s._ts),
                s._time -= u,
                s._tTime -= u),
                s.shiftChildren(-u, !1, -1 / 0),
                l = 0),
                a._end > i && a._ts && (i = a._end),
                a = c;
            On(s, s === Ce && s._time > i ? s._time : i, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(n) {
        if (Ce._ts && (Oa(Ce, Qi(n, Ce)),
        Ma = Dt.frame),
        Dt.frame >= Do) {
            Do += It.autoSleep || 120;
            var i = Ce._first;
            if ((!i || !i._ts) && It.autoSleep && Dt._listeners.length < 2) {
                for (; i && !i._ts; )
                    i = i._next;
                i || Dt.sleep()
            }
        }
    }
    ,
    e
}
)(di);
zt(vt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Cc = function(e, t, r, n, i, s, a) {
    var l = new Tt(this._pt,e,t,0,1,nl,null,i), c = 0, u = 0, p, m, f, _, d, g, x, y;
    for (l.b = r,
    l.e = n,
    r += "",
    n += "",
    (x = ~n.indexOf("random(")) && (n = ui(n)),
    s && (y = [r, n],
    s(y, e, t),
    r = y[0],
    n = y[1]),
    m = r.match(fs) || []; p = fs.exec(n); )
        _ = p[0],
        d = n.substring(c, p.index),
        f ? f = (f + 1) % 5 : d.substr(-5) === "rgba(" && (f = 1),
        _ !== m[u++] && (g = parseFloat(m[u - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: d || u === 1 ? d : ",",
            s: g,
            c: _.charAt(1) === "=" ? wn(g, _) - g : parseFloat(_) - g,
            m: f && f < 4 ? Math.round : 0
        },
        c = fs.lastIndex);
    return l.c = c < n.length ? n.substring(c, n.length) : "",
    l.fp = a,
    (ka.test(n) || x) && (l.e = 0),
    this._pt = l,
    l
}, ao = function(e, t, r, n, i, s, a, l, c, u) {
    Oe(n) && (n = n(i || 0, e, s));
    var p = e[t], m = r !== "get" ? r : Oe(p) ? c ? e[t.indexOf("set") || !Oe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c) : e[t]() : p, f = Oe(p) ? c ? Oc : tl : co, _;
    if (Ge(n) && (~n.indexOf("random(") && (n = ui(n)),
    n.charAt(1) === "=" && (_ = wn(m, n) + (at(m) || 0),
    (_ || _ === 0) && (n = _))),
    !u || m !== n || As)
        return !isNaN(m * n) && n !== "" ? (_ = new Tt(this._pt,e,t,+m || 0,n - (m || 0),typeof p == "boolean" ? Dc : rl,0,f),
        c && (_.fp = c),
        a && _.modifier(a, this, e),
        this._pt = _) : (!p && !(t in e) && ro(t, n),
        Cc.call(this, e, t, m, n, f, l || It.stringFilter, c))
}, Pc = function(e, t, r, n, i) {
    if (Oe(e) && (e = Qn(e, i, t, r, n)),
    !fr(e) || e.style && e.nodeType || ct(e) || Ta(e))
        return Ge(e) ? Qn(e, i, t, r, n) : e;
    var s = {}, a;
    for (a in e)
        s[a] = Qn(e[a], i, t, r, n);
    return s
}, Ja = function(e, t, r, n, i, s) {
    var a, l, c, u;
    if (Ot[e] && (a = new Ot[e]).init(i, a.rawVars ? t[e] : Pc(t[e], n, i, s, r), r, n, s) !== !1 && (r._pt = l = new Tt(r._pt,i,e,0,1,a.render,a,0,a.priority),
    r !== vn))
        for (c = r._ptLookup[r._targets.indexOf(i)],
        u = a._props.length; u--; )
            c[a._props[u]] = l;
    return a
}, Nr, As, lo = function o(e, t, r) {
    var n = e.vars, i = n.ease, s = n.startAt, a = n.immediateRender, l = n.lazy, c = n.onUpdate, u = n.runBackwards, p = n.yoyoEase, m = n.keyframes, f = n.autoRevert, _ = e._dur, d = e._startAt, g = e._targets, x = e.parent, y = x && x.data === "nested" ? x.vars.targets : g, w = e._overwrite === "auto" && !Js, T = e.timeline, k = n.easeReverse || p, M, b, j, C, P, D, N, V, A, z, Y, L, $;
    if (T && (!m || !i) && (i = "none"),
    e._ease = tn(i, ai.ease),
    e._rEase = k && (tn(k) || e._ease),
    e._from = !T && !!n.runBackwards,
    e._from && (e.ratio = 1),
    !T || m && !n.stagger) {
        if (V = g[0] ? Zr(g[0]).harness : 0,
        L = V && n[V.prop],
        M = qi(n, no),
        d && (d._zTime < 0 && d.progress(1),
        t < 0 && u && a && !f ? d.render(-1, !0) : d.revert(u && _ ? Fi : ec),
        d._lazy = 0),
        s) {
            if (Fr(e._startAt = Be.set(g, zt({
                data: "isStart",
                overwrite: !1,
                parent: x,
                immediateRender: !0,
                lazy: !d && bt(l),
                startAt: null,
                delay: 0,
                onUpdate: c && function() {
                    return Rt(e, "onUpdate")
                }
                ,
                stagger: 0
            }, s))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (Je || !a && !f) && e._startAt.revert(Fi),
            a && _ && t <= 0 && r <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (u && _ && !d) {
            if (t && (a = !1),
            j = zt({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !d && bt(l),
                immediateRender: a,
                stagger: 0,
                parent: x
            }, M),
            L && (j[V.prop] = L),
            Fr(e._startAt = Be.set(g, j)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (Je ? e._startAt.revert(Fi) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !a)
                o(e._startAt, me, me);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = _ && bt(l) || l && !_,
        b = 0; b < g.length; b++) {
            if (P = g[b],
            N = P._gsap || so(g)[b]._gsap,
            e._ptLookup[b] = z = {},
            js[N.id] && Rr.length && Gi(),
            Y = y === g ? b : y.indexOf(P),
            V && (A = new V).init(P, L || M, e, Y, y) !== !1 && (e._pt = C = new Tt(e._pt,P,A.name,0,1,A.render,A,0,A.priority),
            A._props.forEach(function(q) {
                z[q] = C
            }),
            A.priority && (D = 1)),
            !V || L)
                for (j in M)
                    Ot[j] && (A = Ja(j, M, e, Y, P, y)) ? A.priority && (D = 1) : z[j] = C = ao.call(e, P, j, "get", M[j], Y, y, 0, n.stringFilter);
            e._op && e._op[b] && e.kill(P, e._op[b]),
            w && e._pt && (Nr = e,
            Ce.killTweensOf(P, z, e.globalTime(t)),
            $ = !e.parent,
            Nr = 0),
            e._pt && l && (js[N.id] = 1)
        }
        D && il(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = c,
    e._initted = (!e._op || e._pt) && !$,
    m && t <= 0 && T.render(Ht, !0, !0)
}, jc = function(e, t, r, n, i, s, a, l) {
    var c = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, p, m, f;
    if (!c)
        for (c = e._ptCache[t] = [],
        m = e._ptLookup,
        f = e._targets.length; f--; ) {
            if (u = m[f][t],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
                    u = u._next;
            if (!u)
                return As = 1,
                e.vars[t] = "+=0",
                lo(e, a),
                As = 0,
                l ? li(t + " not eligible for reset. Try splitting into individual properties") : 1;
            c.push(u)
        }
    for (f = c.length; f--; )
        p = c[f],
        u = p._pt || p,
        u.s = (n || n === 0) && !i ? n : u.s + (n || 0) + s * u.c,
        u.c = r - u.s,
        p.e && (p.e = Ie(r) + at(p.e)),
        p.b && (p.b = u.s + at(p.b))
}, Mc = function(e, t) {
    var r = e[0] ? Zr(e[0]).harness : 0, n = r && r.aliases, i, s, a, l;
    if (!n)
        return t;
    i = Mn({}, t);
    for (s in n)
        if (s in i)
            for (l = n[s].split(","),
            a = l.length; a--; )
                i[l[a]] = i[s];
    return i
}, Nc = function(e, t, r, n) {
    var i = t.ease || n || "power1.inOut", s, a;
    if (ct(t))
        a = r[e] || (r[e] = []),
        t.forEach(function(l, c) {
            return a.push({
                t: c / (t.length - 1) * 100,
                v: l,
                e: i
            })
        });
    else
        for (s in t)
            a = r[s] || (r[s] = []),
            s === "ease" || a.push({
                t: parseFloat(e),
                v: t[s],
                e: i
            })
}, Qn = function(e, t, r, n, i) {
    return Oe(e) ? e.call(t, r, n, i) : Ge(e) && ~e.indexOf("random(") ? ui(e) : e
}, Za = io + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", el = {};
wt(Za + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return el[o] = 1
});
var Be = (function(o) {
    ba(e, o);
    function e(r, n, i, s) {
        var a;
        typeof n == "number" && (i.duration = n,
        n = i,
        i = null),
        a = o.call(this, s ? n : Gn(n)) || this;
        var l = a.vars, c = l.duration, u = l.delay, p = l.immediateRender, m = l.stagger, f = l.overwrite, _ = l.keyframes, d = l.defaults, g = l.scrollTrigger, x = n.parent || Ce, y = (ct(r) || Ta(r) ? Tr(r[0]) : "length" in n) ? [r] : Xt(r), w, T, k, M, b, j, C, P;
        if (a._targets = y.length ? so(y) : li("GSAP target " + r + " not found. https://gsap.com", !It.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = f,
        _ || m || ki(c) || ki(u)) {
            n = a.vars;
            var D = n.easeReverse || n.yoyoEase;
            if (w = a.timeline = new vt({
                data: "nested",
                defaults: d || {},
                targets: x && x.data === "nested" ? x.vars.targets : y
            }),
            w.kill(),
            w.parent = w._dp = xr(a),
            w._start = 0,
            m || ki(c) || ki(u)) {
                if (M = y.length,
                C = m && Ba(m),
                fr(m))
                    for (b in m)
                        ~Za.indexOf(b) && (P || (P = {}),
                        P[b] = m[b]);
                for (T = 0; T < M; T++)
                    k = qi(n, el),
                    k.stagger = 0,
                    D && (k.easeReverse = D),
                    P && Mn(k, P),
                    j = y[T],
                    k.duration = +Qn(c, xr(a), T, j, y),
                    k.delay = (+Qn(u, xr(a), T, j, y) || 0) - a._delay,
                    !m && M === 1 && k.delay && (a._delay = u = k.delay,
                    a._start += u,
                    k.delay = 0),
                    w.to(j, k, C ? C(T, j, y) : 0),
                    w._ease = ne.none;
                w.duration() ? c = u = 0 : a.timeline = 0
            } else if (_) {
                Gn(zt(w.vars.defaults, {
                    ease: "none"
                })),
                w._ease = tn(_.ease || n.ease || "none");
                var N = 0, V, A, z;
                if (ct(_))
                    _.forEach(function(Y) {
                        return w.to(y, Y, ">")
                    }),
                    w.duration();
                else {
                    k = {};
                    for (b in _)
                        b === "ease" || b === "easeEach" || Nc(b, _[b], k, _.easeEach);
                    for (b in k)
                        for (V = k[b].sort(function(Y, L) {
                            return Y.t - L.t
                        }),
                        N = 0,
                        T = 0; T < V.length; T++)
                            A = V[T],
                            z = {
                                ease: A.e,
                                duration: (A.t - (T ? V[T - 1].t : 0)) / 100 * c
                            },
                            z[b] = A.v,
                            w.to(y, z, N),
                            N += z.duration;
                    w.duration() < c && w.to({}, {
                        duration: c - w.duration()
                    })
                }
            }
            c || a.duration(c = w.duration())
        } else
            a.timeline = 0;
        return f === !0 && !Js && (Nr = xr(a),
        Ce.killTweensOf(y),
        Nr = 0),
        ar(x, xr(a), i),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (p || !c && !_ && a._start === ke(x._time) && bt(p) && oc(xr(a)) && x.data !== "nested") && (a._tTime = -me,
        a.render(Math.max(0, -u) || 0)),
        g && La(xr(a), g),
        a
    }
    var t = e.prototype;
    return t.render = function(n, i, s) {
        var a = this._time, l = this._tDur, c = this._dur, u = n < 0, p = n > l - me && !u ? l : n < me ? 0 : n, m, f, _, d, g, x, y, w;
        if (!c)
            lc(this, n, i, s);
        else if (p !== this._tTime || !n || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
            if (m = p,
            w = this.timeline,
            this._repeat) {
                if (d = c + this._rDelay,
                this._repeat < -1 && u)
                    return this.totalTime(d * 100 + n, i, s);
                if (m = ke(p % d),
                p === l ? (_ = this._repeat,
                m = c) : (g = ke(p / d),
                _ = ~~g,
                _ && _ === g ? (m = c,
                _--) : m > c && (m = c)),
                x = this._yoyo && _ & 1,
                x && (m = c - m),
                g = Nn(this._tTime, d),
                m === a && !s && this._initted && _ === g)
                    return this._tTime = p,
                    this;
                _ !== g && this.vars.repeatRefresh && !x && !this._lock && m !== d && this._initted && (this._lock = s = 1,
                this.render(ke(d * _), !0).invalidate()._lock = 0)
            }
            if (!this._initted) {
                if (Ia(this, u ? n : m, s, i, p))
                    return this._tTime = 0,
                    this;
                if (a !== this._time && !(s && this.vars.repeatRefresh && _ !== g))
                    return this;
                if (c !== this._dur)
                    return this.render(n, i, s)
            }
            if (this._rEase) {
                var T = m < a;
                if (T !== this._inv) {
                    var k = T ? a : c - a;
                    this._inv = T,
                    this._from && (this.ratio = 1 - this.ratio),
                    this._invRatio = this.ratio,
                    this._invTime = a,
                    this._invRecip = k ? (T ? -1 : 1) / k : 0,
                    this._invScale = T ? -this.ratio : 1 - this.ratio,
                    this._invEase = T ? this._rEase : this._ease
                }
                this.ratio = y = this._invRatio + this._invScale * this._invEase((m - this._invTime) * this._invRecip)
            } else
                this.ratio = y = this._ease(m / c);
            if (this._from && (this.ratio = y = 1 - y),
            this._tTime = p,
            this._time = m,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            !a && p && !i && !g && (Rt(this, "onStart"),
            this._tTime !== p))
                return this;
            for (f = this._pt; f; )
                f.r(y, f.d),
                f = f._next;
            w && w.render(n < 0 ? n : w._dur * w._ease(m / this._dur), i, s) || this._startAt && (this._zTime = n),
            this._onUpdate && !i && (u && Ms(this, n, i, s),
            Rt(this, "onUpdate")),
            this._repeat && _ !== g && this.vars.onRepeat && !i && this.parent && Rt(this, "onRepeat"),
            (p === this._tDur || !p) && this._tTime === p && (u && !this._onUpdate && Ms(this, n, !0, !0),
            (n || !c) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Fr(this, 1),
            !i && !(u && !a) && (p || a || x) && (Rt(this, p === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(p < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(n) {
        return (!n || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(n),
        o.prototype.invalidate.call(this, n)
    }
    ,
    t.resetTo = function(n, i, s, a, l) {
        fi || Dt.wake(),
        this._ts || this.play();
        var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || lo(this, c),
        u = this._ease(c / this._dur),
        jc(this, n, i, s, a, u, c, l) ? this.resetTo(n, i, s, a, 1) : (as(this, 0),
        this.parent || Aa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(n, i) {
        if (i === void 0 && (i = "all"),
        !n && (!i || i === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Bn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Je),
            this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, i, Nr && Nr.vars.overwrite !== !0)._first || Bn(this),
            this.parent && s !== this.timeline.totalDuration() && On(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var a = this._targets, l = n ? Xt(n) : a, c = this._ptLookup, u = this._pt, p, m, f, _, d, g, x;
        if ((!i || i === "all") && ic(a, l))
            return i === "all" && (this._pt = 0),
            Bn(this);
        for (p = this._op = this._op || [],
        i !== "all" && (Ge(i) && (d = {},
        wt(i, function(y) {
            return d[y] = 1
        }),
        i = d),
        i = Mc(a, i)),
        x = a.length; x--; )
            if (~l.indexOf(a[x])) {
                m = c[x],
                i === "all" ? (p[x] = i,
                _ = m,
                f = {}) : (f = p[x] = p[x] || {},
                _ = i);
                for (d in _)
                    g = m && m[d],
                    g && ((!("kill" in g.d) || g.d.kill(d) === !0) && ss(this, g, "_pt"),
                    delete m[d]),
                    f !== "all" && (f[d] = 1)
            }
        return this._initted && !this._pt && u && Bn(this),
        this
    }
    ,
    e.to = function(n, i) {
        return new e(n,i,arguments[2])
    }
    ,
    e.from = function(n, i) {
        return qn(1, arguments)
    }
    ,
    e.delayedCall = function(n, i, s, a) {
        return new e(i,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: n,
            onComplete: i,
            onReverseComplete: i,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(n, i, s) {
        return qn(2, arguments)
    }
    ,
    e.set = function(n, i) {
        return i.duration = 0,
        i.repeatDelay || (i.repeat = 0),
        new e(n,i)
    }
    ,
    e.killTweensOf = function(n, i, s) {
        return Ce.killTweensOf(n, i, s)
    }
    ,
    e
}
)(di);
zt(Be.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
wt("staggerTo,staggerFrom,staggerFromTo", function(o) {
    Be[o] = function() {
        var e = new vt
          , t = Os.call(arguments, 0);
        return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0),
        e[o].apply(e, t)
    }
});
var co = function(e, t, r) {
    return e[t] = r
}
  , tl = function(e, t, r) {
    return e[t](r)
}
  , Oc = function(e, t, r, n) {
    return e[t](n.fp, r)
}
  , Ec = function(e, t, r) {
    return e.setAttribute(t, r)
}
  , uo = function(e, t) {
    return Oe(e[t]) ? tl : Zs(e[t]) && e.setAttribute ? Ec : co
}
  , rl = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , Dc = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , nl = function(e, t) {
    var r = t._pt
      , n = "";
    if (!e && t.b)
        n = t.b;
    else if (e === 1 && t.e)
        n = t.e;
    else {
        for (; r; )
            n = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + n,
            r = r._next;
        n += t.c
    }
    t.set(t.t, t.p, n, t)
}
  , fo = function(e, t) {
    for (var r = t._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , Ac = function(e, t, r, n) {
    for (var i = this._pt, s; i; )
        s = i._next,
        i.p === n && i.modifier(e, t, r),
        i = s
}
  , Rc = function(e) {
    for (var t = this._pt, r, n; t; )
        n = t._next,
        t.p === e && !t.op || t.op === e ? ss(this, t, "_pt") : t.dep || (r = 1),
        t = n;
    return !r
}
  , Lc = function(e, t, r, n) {
    n.mSet(e, t, n.m.call(n.tween, r, n.mt), n)
}
  , il = function(e) {
    for (var t = e._pt, r, n, i, s; t; ) {
        for (r = t._next,
        n = i; n && n.pr > t.pr; )
            n = n._next;
        (t._prev = n ? n._prev : s) ? t._prev._next = t : i = t,
        (t._next = n) ? n._prev = t : s = t,
        t = r
    }
    e._pt = i
}
  , Tt = (function() {
    function o(t, r, n, i, s, a, l, c, u) {
        this.t = r,
        this.s = i,
        this.c = s,
        this.p = n,
        this.r = a || rl,
        this.d = l || this,
        this.set = c || co,
        this.pr = u || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = o.prototype;
    return e.modifier = function(r, n, i) {
        this.mSet = this.mSet || this.set,
        this.set = Lc,
        this.m = r,
        this.mt = i,
        this.tween = n
    }
    ,
    o
}
)();
wt(io + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(o) {
    return no[o] = 1
});
Ft.TweenMax = Ft.TweenLite = Be;
Ft.TimelineLite = Ft.TimelineMax = vt;
Ce = new vt({
    sortChildren: !1,
    defaults: ai,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
It.stringFilter = qa;
var rn = []
  , Bi = {}
  , Ic = []
  , zo = 0
  , Fc = 0
  , _s = function(e) {
    return (Bi[e] || Ic).map(function(t) {
        return t()
    })
}
  , Rs = function() {
    var e = Date.now()
      , t = [];
    e - zo > 2 && (_s("matchMediaInit"),
    rn.forEach(function(r) {
        var n = r.queries, i = r.conditions, s, a, l, c;
        for (a in n)
            s = sr.matchMedia(n[a]).matches,
            s && (l = 1),
            s !== i[a] && (i[a] = s,
            c = 1);
        c && (r.revert(),
        l && t.push(r))
    }),
    _s("matchMediaRevert"),
    t.forEach(function(r) {
        return r.onMatch(r, function(n) {
            return r.add(null, n)
        })
    }),
    zo = e,
    _s("matchMedia"))
}
  , sl = (function() {
    function o(t, r) {
        this.selector = r && Es(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Fc++,
        t && this.add(t)
    }
    var e = o.prototype;
    return e.add = function(r, n, i) {
        Oe(r) && (i = n,
        n = r,
        r = Oe);
        var s = this
          , a = function() {
            var c = we, u = s.selector, p;
            return c && c !== s && c.data.push(s),
            i && (s.selector = Es(i)),
            we = s,
            p = n.apply(s, arguments),
            Oe(p) && s._r.push(p),
            we = c,
            s.selector = u,
            s.isReverted = !1,
            p
        };
        return s.last = a,
        r === Oe ? a(s, function(l) {
            return s.add(null, l)
        }) : r ? s[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var n = we;
        we = null,
        r(this),
        we = n
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(n) {
            return n instanceof o ? r.push.apply(r, n.getTweens()) : n instanceof Be && !(n.parent && n.parent.data === "nested") && r.push(n)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, n) {
        var i = this;
        if (r ? (function() {
            for (var a = i.getTweens(), l = i.data.length, c; l--; )
                c = i.data[l],
                c.data === "isFlip" && (c.revert(),
                c.getChildren(!0, !0, !1).forEach(function(u) {
                    return a.splice(a.indexOf(u), 1)
                }));
            for (a.map(function(u) {
                return {
                    g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
                    t: u
                }
            }).sort(function(u, p) {
                return p.g - u.g || -1 / 0
            }).forEach(function(u) {
                return u.t.revert(r)
            }),
            l = i.data.length; l--; )
                c = i.data[l],
                c instanceof vt ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(),
                c.kill()) : !(c instanceof Be) && c.revert && c.revert(r);
            i._r.forEach(function(u) {
                return u(r, i)
            }),
            i.isReverted = !0
        }
        )() : this.data.forEach(function(a) {
            return a.kill && a.kill()
        }),
        this.clear(),
        n)
            for (var s = rn.length; s--; )
                rn[s].id === this.id && rn.splice(s, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    o
}
)()
  , zc = (function() {
    function o(t) {
        this.contexts = [],
        this.scope = t,
        we && we.data.push(this)
    }
    var e = o.prototype;
    return e.add = function(r, n, i) {
        fr(r) || (r = {
            matches: r
        });
        var s = new sl(0,i || this.scope), a = s.conditions = {}, l, c, u;
        we && !s.selector && (s.selector = we.selector),
        this.contexts.push(s),
        n = s.add("onMatch", n),
        s.queries = r;
        for (c in r)
            c === "all" ? u = 1 : (l = sr.matchMedia(r[c]),
            l && (rn.indexOf(s) < 0 && rn.push(s),
            (a[c] = l.matches) && (u = 1),
            l.addListener ? l.addListener(Rs) : l.addEventListener("change", Rs)));
        return u && n(s, function(p) {
            return s.add(null, p)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(n) {
            return n.kill(r, !0)
        })
    }
    ,
    o
}
)()
  , Ki = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        t.forEach(function(n) {
            return Xa(n)
        })
    },
    timeline: function(e) {
        return new vt(e)
    },
    getTweensOf: function(e, t) {
        return Ce.getTweensOf(e, t)
    },
    getProperty: function(e, t, r, n) {
        Ge(e) && (e = Xt(e)[0]);
        var i = Zr(e || {}).get
          , s = r ? Da : Ea;
        return r === "native" && (r = ""),
        e && (t ? s((Ot[t] && Ot[t].get || i)(e, t, r, n)) : function(a, l, c) {
            return s((Ot[a] && Ot[a].get || i)(e, a, l, c))
        }
        )
    },
    quickSetter: function(e, t, r) {
        if (e = Xt(e),
        e.length > 1) {
            var n = e.map(function(u) {
                return kt.quickSetter(u, t, r)
            })
              , i = n.length;
            return function(u) {
                for (var p = i; p--; )
                    n[p](u)
            }
        }
        e = e[0] || {};
        var s = Ot[t]
          , a = Zr(e)
          , l = a.harness && (a.harness.aliases || {})[t] || t
          , c = s ? function(u) {
            var p = new s;
            vn._pt = 0,
            p.init(e, r ? u + r : u, vn, 0, [e]),
            p.render(1, p),
            vn._pt && fo(1, vn)
        }
        : a.set(e, l);
        return s ? c : function(u) {
            return c(e, l, r ? u + r : u, a, 1)
        }
    },
    quickTo: function(e, t, r) {
        var n, i = kt.to(e, zt((n = {},
        n[t] = "+=0.1",
        n.paused = !0,
        n.stagger = 0,
        n), r || {})), s = function(l, c, u) {
            return i.resetTo(t, l, c, u)
        };
        return s.tween = i,
        s
    },
    isTweening: function(e) {
        return Ce.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = tn(e.ease, ai.ease)),
        Ao(ai, e || {})
    },
    config: function(e) {
        return Ao(It, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , r = e.effect
          , n = e.plugins
          , i = e.defaults
          , s = e.extendTimeline;
        (n || "").split(",").forEach(function(a) {
            return a && !Ot[a] && !Ft[a] && li(t + " effect requires " + a + " plugin.")
        }),
        ds[t] = function(a, l, c) {
            return r(Xt(a), zt(l || {}, i), c)
        }
        ,
        s && (vt.prototype[t] = function(a, l, c) {
            return this.add(ds[t](a, fr(l) ? l : (c = l) && {}, this), c)
        }
        )
    },
    registerEase: function(e, t) {
        ne[e] = tn(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? tn(e, t) : ne
    },
    getById: function(e) {
        return Ce.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var r = new vt(e), n, i;
        for (r.smoothChildTiming = bt(e.smoothChildTiming),
        Ce.remove(r),
        r._dp = 0,
        r._time = r._tTime = Ce._time,
        n = Ce._first; n; )
            i = n._next,
            (t || !(!n._dur && n instanceof Be && n.vars.onComplete === n._targets[0])) && ar(r, n, n._start - n._delay),
            n = i;
        return ar(Ce, r, 0),
        r
    },
    context: function(e, t) {
        return e ? new sl(e,t) : we
    },
    matchMedia: function(e) {
        return new zc(e)
    },
    matchMediaRefresh: function() {
        return rn.forEach(function(e) {
            var t = e.conditions, r, n;
            for (n in t)
                t[n] && (t[n] = !1,
                r = 1);
            r && e.revert()
        }) || Rs()
    },
    addEventListener: function(e, t) {
        var r = Bi[e] || (Bi[e] = []);
        ~r.indexOf(t) || r.push(t)
    },
    removeEventListener: function(e, t) {
        var r = Bi[e]
          , n = r && r.indexOf(t);
        n >= 0 && r.splice(n, 1)
    },
    utils: {
        wrap: _c,
        wrapYoyo: gc,
        distribute: Ba,
        random: Va,
        snap: Ya,
        normalize: mc,
        getUnit: at,
        clamp: fc,
        splitColor: Wa,
        toArray: Xt,
        selector: Es,
        mapRange: Ua,
        pipe: hc,
        unitize: pc,
        interpolate: xc,
        shuffle: za
    },
    install: Pa,
    effects: ds,
    ticker: Dt,
    updateRoot: vt.updateRoot,
    plugins: Ot,
    globalTimeline: Ce,
    core: {
        PropTween: Tt,
        globals: ja,
        Tween: Be,
        Timeline: vt,
        Animation: di,
        getCache: Zr,
        _removeLinkedListItem: ss,
        reverting: function() {
            return Je
        },
        context: function(e) {
            return e && we && (we.data.push(e),
            e._ctx = we),
            we
        },
        suppressOverwrites: function(e) {
            return Js = e
        }
    }
};
wt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return Ki[o] = Be[o]
});
Dt.add(vt.updateRoot);
vn = Ki.to({}, {
    duration: 0
});
var Bc = function(e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
    return r
}
  , Yc = function(e, t) {
    var r = e._targets, n, i, s;
    for (n in t)
        for (i = r.length; i--; )
            s = e._ptLookup[i][n],
            s && (s = s.d) && (s._pt && (s = Bc(s, n)),
            s && s.modifier && s.modifier(t[n], e, r[i], n))
}
  , gs = function(e, t) {
    return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function(n, i, s) {
            s._onInit = function(a) {
                var l, c;
                if (Ge(i) && (l = {},
                wt(i, function(u) {
                    return l[u] = 1
                }),
                i = l),
                t) {
                    l = {};
                    for (c in i)
                        l[c] = t(i[c]);
                    i = l
                }
                Yc(a, i)
            }
        }
    }
}
  , kt = Ki.registerPlugin({
    name: "attr",
    init: function(e, t, r, n, i) {
        var s, a, l;
        this.tween = r;
        for (s in t)
            l = e.getAttribute(s) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", t[s], n, i, 0, 0, s),
            a.op = s,
            a.b = l,
            this._props.push(s)
    },
    render: function(e, t) {
        for (var r = t._pt; r; )
            Je ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(e, t) {
        for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
    }
}, gs("roundProps", Ds), gs("modifiers"), gs("snap", Ya)) || Ki;
Be.version = vt.version = kt.version = "3.15.0";
Ca = 1;
eo() && En();
ne.Power0;
ne.Power1;
ne.Power2;
ne.Power3;
ne.Power4;
ne.Linear;
ne.Quad;
ne.Cubic;
ne.Quart;
ne.Quint;
ne.Strong;
ne.Elastic;
ne.Back;
ne.SteppedEase;
ne.Bounce;
ne.Sine;
ne.Expo;
ne.Circ;
var Bo, Or, Tn, ho, Kr, Yo, po, Vc = function() {
    return typeof window < "u"
}, Sr = {}, Gr = 180 / Math.PI, Sn = Math.PI / 180, hn = Math.atan2, Vo = 1e8, mo = /([A-Z])/g, $c = /(left|right|width|margin|padding|x)/i, Uc = /[\s,\(]\S/, lr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Ls = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Hc = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Xc = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Wc = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Gc = function(e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
}, ol = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, al = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, qc = function(e, t, r) {
    return e.style[t] = r
}, Qc = function(e, t, r) {
    return e.style.setProperty(t, r)
}, Kc = function(e, t, r) {
    return e._gsap[t] = r
}, Jc = function(e, t, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, Zc = function(e, t, r, n, i) {
    var s = e._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(i, s)
}, eu = function(e, t, r, n, i) {
    var s = e._gsap;
    s[t] = r,
    s.renderTransform(i, s)
}, Pe = "transform", St = Pe + "Origin", tu = function o(e, t) {
    var r = this
      , n = this.target
      , i = n.style
      , s = n._gsap;
    if (e in Sr && i) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = lr[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return r.tfm[a] = yr(n, a)
            }) : this.tfm[e] = s.x ? s[e] : yr(n, e),
            e === St && (this.tfm.zOrigin = s.zOrigin);
        else
            return lr.transform.split(",").forEach(function(a) {
                return o.call(r, a, t)
            });
        if (this.props.indexOf(Pe) >= 0)
            return;
        s.svg && (this.svgo = n.getAttribute("data-svg-origin"),
        this.props.push(St, t, "")),
        e = Pe
    }
    (i || t) && this.props.push(e, t, i[e])
}, ll = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, ru = function() {
    var e = this.props, t = this.target, r = t.style, n = t._gsap, i, s;
    for (i = 0; i < e.length; i += 3)
        e[i + 1] ? e[i + 1] === 2 ? t[e[i]](e[i + 2]) : t[e[i]] = e[i + 2] : e[i + 2] ? r[e[i]] = e[i + 2] : r.removeProperty(e[i].substr(0, 2) === "--" ? e[i] : e[i].replace(mo, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            n[s] = this.tfm[s];
        n.svg && (n.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        i = po(),
        (!i || !i.isStart) && !r[Pe] && (ll(r),
        n.zOrigin && r[St] && (r[St] += " " + n.zOrigin + "px",
        n.zOrigin = 0,
        n.renderTransform()),
        n.uncache = 1)
    }
}, cl = function(e, t) {
    var r = {
        target: e,
        props: [],
        revert: ru,
        save: tu
    };
    return e._gsap || kt.core.getCache(e),
    t && e.style && e.nodeType && t.split(",").forEach(function(n) {
        return r.save(n)
    }),
    r
}, ul, Is = function(e, t) {
    var r = Or.createElementNS ? Or.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Or.createElement(e);
    return r && r.style ? r : Or.createElement(e)
}, Lt = function o(e, t, r) {
    var n = getComputedStyle(e);
    return n[t] || n.getPropertyValue(t.replace(mo, "-$1").toLowerCase()) || n.getPropertyValue(t) || !r && o(e, Dn(t) || t, 1) || ""
}, $o = "O,Moz,ms,Ms,Webkit".split(","), Dn = function(e, t, r) {
    var n = t || Kr
      , i = n.style
      , s = 5;
    if (e in i && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !($o[s] + e in i); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? $o[s] : "") + e
}, Fs = function() {
    Vc() && window.document && (Bo = window,
    Or = Bo.document,
    Tn = Or.documentElement,
    Kr = Is("div") || {
        style: {}
    },
    Is("div"),
    Pe = Dn(Pe),
    St = Pe + "Origin",
    Kr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    ul = !!Dn("perspective"),
    po = kt.core.reverting,
    ho = 1)
}, Uo = function(e) {
    var t = e.ownerSVGElement, r = Is("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = e.cloneNode(!0), i;
    n.style.display = "block",
    r.appendChild(n),
    Tn.appendChild(r);
    try {
        i = n.getBBox()
    } catch {}
    return r.removeChild(n),
    Tn.removeChild(r),
    i
}, Ho = function(e, t) {
    for (var r = t.length; r--; )
        if (e.hasAttribute(t[r]))
            return e.getAttribute(t[r])
}, fl = function(e) {
    var t, r;
    try {
        t = e.getBBox()
    } catch {
        t = Uo(e),
        r = 1
    }
    return t && (t.width || t.height) || r || (t = Uo(e)),
    t && !t.width && !t.x && !t.y ? {
        x: +Ho(e, ["x", "cx", "x1"]) || 0,
        y: +Ho(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, dl = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && fl(e))
}, zr = function(e, t) {
    if (t) {
        var r = e.style, n;
        t in Sr && t !== St && (t = Pe),
        r.removeProperty ? (n = t.substr(0, 2),
        (n === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        r.removeProperty(n === "--" ? t : t.replace(mo, "-$1").toLowerCase())) : r.removeAttribute(t)
    }
}, Er = function(e, t, r, n, i, s) {
    var a = new Tt(e._pt,t,r,0,1,s ? al : ol);
    return e._pt = a,
    a.b = n,
    a.e = i,
    e._props.push(r),
    a
}, Xo = {
    deg: 1,
    rad: 1,
    turn: 1
}, nu = {
    grid: 1,
    flex: 1
}, Br = function o(e, t, r, n) {
    var i = parseFloat(r) || 0, s = (r + "").trim().substr((i + "").length) || "px", a = Kr.style, l = $c.test(t), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (l ? "Width" : "Height"), p = 100, m = n === "px", f = n === "%", _, d, g, x;
    if (n === s || !i || Xo[n] || Xo[s])
        return i;
    if (s !== "px" && !m && (i = o(e, t, r, "px")),
    x = e.getCTM && dl(e),
    (f || s === "%") && (Sr[t] || ~t.indexOf("adius")))
        return _ = x ? e.getBBox()[l ? "width" : "height"] : e[u],
        Ie(f ? i / _ * p : i / 100 * _);
    if (a[l ? "width" : "height"] = p + (m ? s : n),
    d = n !== "rem" && ~t.indexOf("adius") || n === "em" && e.appendChild && !c ? e : e.parentNode,
    x && (d = (e.ownerSVGElement || {}).parentNode),
    (!d || d === Or || !d.appendChild) && (d = Or.body),
    g = d._gsap,
    g && f && g.width && l && g.time === Dt.time && !g.uncache)
        return Ie(i / g.width * p);
    if (f && (t === "height" || t === "width")) {
        var y = e.style[t];
        e.style[t] = p + n,
        _ = e[u],
        y ? e.style[t] = y : zr(e, t)
    } else
        (f || s === "%") && !nu[Lt(d, "display")] && (a.position = Lt(e, "position")),
        d === e && (a.position = "static"),
        d.appendChild(Kr),
        _ = Kr[u],
        d.removeChild(Kr),
        a.position = "absolute";
    return l && f && (g = Zr(d),
    g.time = Dt.time,
    g.width = d[u]),
    Ie(m ? _ * i / p : _ && i ? p / _ * i : 0)
}, yr = function(e, t, r, n) {
    var i;
    return ho || Fs(),
    t in lr && t !== "transform" && (t = lr[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    Sr[t] && t !== "transform" ? (i = pi(e, n),
    i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : Zi(Lt(e, St)) + " " + i.zOrigin + "px") : (i = e.style[t],
    (!i || i === "auto" || n || ~(i + "").indexOf("calc(")) && (i = Ji[t] && Ji[t](e, t, r) || Lt(e, t) || Na(e, t) || (t === "opacity" ? 1 : 0))),
    r && !~(i + "").trim().indexOf(" ") ? Br(e, t, i, r) + r : i
}, iu = function(e, t, r, n) {
    if (!r || r === "none") {
        var i = Dn(t, e, 1)
          , s = i && Lt(e, i, 1);
        s && s !== r ? (t = i,
        r = s) : t === "borderColor" && (r = Lt(e, "borderTopColor"))
    }
    var a = new Tt(this._pt,e.style,t,0,1,nl), l = 0, c = 0, u, p, m, f, _, d, g, x, y, w, T, k;
    if (a.b = r,
    a.e = n,
    r += "",
    n += "",
    n.substring(0, 6) === "var(--" && (n = Lt(e, n.substring(4, n.indexOf(")")))),
    n === "auto" && (d = e.style[t],
    e.style[t] = n,
    n = Lt(e, t) || n,
    d ? e.style[t] = d : zr(e, t)),
    u = [r, n],
    qa(u),
    r = u[0],
    n = u[1],
    m = r.match(yn) || [],
    k = n.match(yn) || [],
    k.length) {
        for (; p = yn.exec(n); )
            g = p[0],
            y = n.substring(l, p.index),
            _ ? _ = (_ + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (_ = 1),
            g !== (d = m[c++] || "") && (f = parseFloat(d) || 0,
            T = d.substr((f + "").length),
            g.charAt(1) === "=" && (g = wn(f, g) + T),
            x = parseFloat(g),
            w = g.substr((x + "").length),
            l = yn.lastIndex - w.length,
            w || (w = w || It.units[t] || T,
            l === n.length && (n += w,
            a.e += w)),
            T !== w && (f = Br(e, t, d, w) || 0),
            a._pt = {
                _next: a._pt,
                p: y || c === 1 ? y : ",",
                s: f,
                c: x - f,
                m: _ && _ < 4 || t === "zIndex" ? Math.round : 0
            });
        a.c = l < n.length ? n.substring(l, n.length) : ""
    } else
        a.r = t === "display" && n === "none" ? al : ol;
    return ka.test(n) && (a.e = 0),
    this._pt = a,
    a
}, Wo = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, su = function(e) {
    var t = e.split(" ")
      , r = t[0]
      , n = t[1] || "50%";
    return (r === "top" || r === "bottom" || n === "left" || n === "right") && (e = r,
    r = n,
    n = e),
    t[0] = Wo[r] || r,
    t[1] = Wo[n] || n,
    t.join(" ")
}, ou = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t, n = r.style, i = t.u, s = r._gsap, a, l, c;
        if (i === "all" || i === !0)
            n.cssText = "",
            l = 1;
        else
            for (i = i.split(","),
            c = i.length; --c > -1; )
                a = i[c],
                Sr[a] && (l = 1,
                a = a === "transformOrigin" ? St : Pe),
                zr(r, a);
        l && (zr(r, Pe),
        s && (s.svg && r.removeAttribute("transform"),
        n.scale = n.rotate = n.translate = "none",
        pi(r, 1),
        s.uncache = 1,
        ll(n)))
    }
}, Ji = {
    clearProps: function(e, t, r, n, i) {
        if (i.data !== "isFromStart") {
            var s = e._pt = new Tt(e._pt,t,r,0,0,ou);
            return s.u = n,
            s.pr = -10,
            s.tween = i,
            e._props.push(r),
            1
        }
    }
}, hi = [1, 0, 0, 1, 0, 0], hl = {}, pl = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Go = function(e) {
    var t = Lt(e, Pe);
    return pl(t) ? hi : t.substr(7).match(Sa).map(Ie)
}, _o = function(e, t) {
    var r = e._gsap || Zr(e), n = e.style, i = Go(e), s, a, l, c;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    i = [l.a, l.b, l.c, l.d, l.e, l.f],
    i.join(",") === "1,0,0,1,0,0" ? hi : i) : (i === hi && !e.offsetParent && e !== Tn && !r.svg && (l = n.display,
    n.display = "block",
    s = e.parentNode,
    (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (c = 1,
    a = e.nextElementSibling,
    Tn.appendChild(e)),
    i = Go(e),
    l ? n.display = l : zr(e, "display"),
    c && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : Tn.removeChild(e))),
    t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i)
}, zs = function(e, t, r, n, i, s) {
    var a = e._gsap, l = i || _o(e, !0), c = a.xOrigin || 0, u = a.yOrigin || 0, p = a.xOffset || 0, m = a.yOffset || 0, f = l[0], _ = l[1], d = l[2], g = l[3], x = l[4], y = l[5], w = t.split(" "), T = parseFloat(w[0]) || 0, k = parseFloat(w[1]) || 0, M, b, j, C;
    r ? l !== hi && (b = f * g - _ * d) && (j = T * (g / b) + k * (-d / b) + (d * y - g * x) / b,
    C = T * (-_ / b) + k * (f / b) - (f * y - _ * x) / b,
    T = j,
    k = C) : (M = fl(e),
    T = M.x + (~w[0].indexOf("%") ? T / 100 * M.width : T),
    k = M.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * M.height : k)),
    n || n !== !1 && a.smooth ? (x = T - c,
    y = k - u,
    a.xOffset = p + (x * f + y * d) - x,
    a.yOffset = m + (x * _ + y * g) - y) : a.xOffset = a.yOffset = 0,
    a.xOrigin = T,
    a.yOrigin = k,
    a.smooth = !!n,
    a.origin = t,
    a.originIsAbsolute = !!r,
    e.style[St] = "0px 0px",
    s && (Er(s, a, "xOrigin", c, T),
    Er(s, a, "yOrigin", u, k),
    Er(s, a, "xOffset", p, a.xOffset),
    Er(s, a, "yOffset", m, a.yOffset)),
    e.setAttribute("data-svg-origin", T + " " + k)
}, pi = function(e, t) {
    var r = e._gsap || new Ka(e);
    if ("x" in r && !t && !r.uncache)
        return r;
    var n = e.style, i = r.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(e), c = Lt(e, St) || "0", u, p, m, f, _, d, g, x, y, w, T, k, M, b, j, C, P, D, N, V, A, z, Y, L, $, q, v, J, ge, Ee, se, Te;
    return u = p = m = d = g = x = y = w = T = 0,
    f = _ = 1,
    r.svg = !!(e.getCTM && dl(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (n[Pe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Pe] !== "none" ? l[Pe] : "")),
    n.scale = n.rotate = n.translate = "none"),
    b = _o(e, r.svg),
    r.svg && (r.uncache ? ($ = e.getBBox(),
    c = r.xOrigin - $.x + "px " + (r.yOrigin - $.y) + "px",
    L = "") : L = !t && e.getAttribute("data-svg-origin"),
    zs(e, L || c, !!L || r.originIsAbsolute, r.smooth !== !1, b)),
    k = r.xOrigin || 0,
    M = r.yOrigin || 0,
    b !== hi && (D = b[0],
    N = b[1],
    V = b[2],
    A = b[3],
    u = z = b[4],
    p = Y = b[5],
    b.length === 6 ? (f = Math.sqrt(D * D + N * N),
    _ = Math.sqrt(A * A + V * V),
    d = D || N ? hn(N, D) * Gr : 0,
    y = V || A ? hn(V, A) * Gr + d : 0,
    y && (_ *= Math.abs(Math.cos(y * Sn))),
    r.svg && (u -= k - (k * D + M * V),
    p -= M - (k * N + M * A))) : (Te = b[6],
    Ee = b[7],
    v = b[8],
    J = b[9],
    ge = b[10],
    se = b[11],
    u = b[12],
    p = b[13],
    m = b[14],
    j = hn(Te, ge),
    g = j * Gr,
    j && (C = Math.cos(-j),
    P = Math.sin(-j),
    L = z * C + v * P,
    $ = Y * C + J * P,
    q = Te * C + ge * P,
    v = z * -P + v * C,
    J = Y * -P + J * C,
    ge = Te * -P + ge * C,
    se = Ee * -P + se * C,
    z = L,
    Y = $,
    Te = q),
    j = hn(-V, ge),
    x = j * Gr,
    j && (C = Math.cos(-j),
    P = Math.sin(-j),
    L = D * C - v * P,
    $ = N * C - J * P,
    q = V * C - ge * P,
    se = A * P + se * C,
    D = L,
    N = $,
    V = q),
    j = hn(N, D),
    d = j * Gr,
    j && (C = Math.cos(j),
    P = Math.sin(j),
    L = D * C + N * P,
    $ = z * C + Y * P,
    N = N * C - D * P,
    Y = Y * C - z * P,
    D = L,
    z = $),
    g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0,
    x = 180 - x),
    f = Ie(Math.sqrt(D * D + N * N + V * V)),
    _ = Ie(Math.sqrt(Y * Y + Te * Te)),
    j = hn(z, Y),
    y = Math.abs(j) > 2e-4 ? j * Gr : 0,
    T = se ? 1 / (se < 0 ? -se : se) : 0),
    r.svg && (L = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !pl(Lt(e, Pe)),
    L && e.setAttribute("transform", L))),
    Math.abs(y) > 90 && Math.abs(y) < 270 && (i ? (f *= -1,
    y += d <= 0 ? 180 : -180,
    d += d <= 0 ? 180 : -180) : (_ *= -1,
    y += y <= 0 ? 180 : -180)),
    t = t || r.uncache,
    r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s,
    r.y = p - ((r.yPercent = p && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s,
    r.z = m + s,
    r.scaleX = Ie(f),
    r.scaleY = Ie(_),
    r.rotation = Ie(d) + a,
    r.rotationX = Ie(g) + a,
    r.rotationY = Ie(x) + a,
    r.skewX = y + a,
    r.skewY = w + a,
    r.transformPerspective = T + s,
    (r.zOrigin = parseFloat(c.split(" ")[2]) || !t && r.zOrigin || 0) && (n[St] = Zi(c)),
    r.xOffset = r.yOffset = 0,
    r.force3D = It.force3D,
    r.renderTransform = r.svg ? lu : ul ? ml : au,
    r.uncache = 0,
    r
}, Zi = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, xs = function(e, t, r) {
    var n = at(t);
    return Ie(parseFloat(t) + parseFloat(Br(e, "x", r + "px", n))) + n
}, au = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    ml(e, t)
}, Xr = "0deg", In = "0px", Wr = ") ", ml = function(e, t) {
    var r = t || this
      , n = r.xPercent
      , i = r.yPercent
      , s = r.x
      , a = r.y
      , l = r.z
      , c = r.rotation
      , u = r.rotationY
      , p = r.rotationX
      , m = r.skewX
      , f = r.skewY
      , _ = r.scaleX
      , d = r.scaleY
      , g = r.transformPerspective
      , x = r.force3D
      , y = r.target
      , w = r.zOrigin
      , T = ""
      , k = x === "auto" && e && e !== 1 || x === !0;
    if (w && (p !== Xr || u !== Xr)) {
        var M = parseFloat(u) * Sn, b = Math.sin(M), j = Math.cos(M), C;
        M = parseFloat(p) * Sn,
        C = Math.cos(M),
        s = xs(y, s, b * C * -w),
        a = xs(y, a, -Math.sin(M) * -w),
        l = xs(y, l, j * C * -w + w)
    }
    g !== In && (T += "perspective(" + g + Wr),
    (n || i) && (T += "translate(" + n + "%, " + i + "%) "),
    (k || s !== In || a !== In || l !== In) && (T += l !== In || k ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + Wr),
    c !== Xr && (T += "rotate(" + c + Wr),
    u !== Xr && (T += "rotateY(" + u + Wr),
    p !== Xr && (T += "rotateX(" + p + Wr),
    (m !== Xr || f !== Xr) && (T += "skew(" + m + ", " + f + Wr),
    (_ !== 1 || d !== 1) && (T += "scale(" + _ + ", " + d + Wr),
    y.style[Pe] = T || "translate(0, 0)"
}, lu = function(e, t) {
    var r = t || this, n = r.xPercent, i = r.yPercent, s = r.x, a = r.y, l = r.rotation, c = r.skewX, u = r.skewY, p = r.scaleX, m = r.scaleY, f = r.target, _ = r.xOrigin, d = r.yOrigin, g = r.xOffset, x = r.yOffset, y = r.forceCSS, w = parseFloat(s), T = parseFloat(a), k, M, b, j, C;
    l = parseFloat(l),
    c = parseFloat(c),
    u = parseFloat(u),
    u && (u = parseFloat(u),
    c += u,
    l += u),
    l || c ? (l *= Sn,
    c *= Sn,
    k = Math.cos(l) * p,
    M = Math.sin(l) * p,
    b = Math.sin(l - c) * -m,
    j = Math.cos(l - c) * m,
    c && (u *= Sn,
    C = Math.tan(c - u),
    C = Math.sqrt(1 + C * C),
    b *= C,
    j *= C,
    u && (C = Math.tan(u),
    C = Math.sqrt(1 + C * C),
    k *= C,
    M *= C)),
    k = Ie(k),
    M = Ie(M),
    b = Ie(b),
    j = Ie(j)) : (k = p,
    j = m,
    M = b = 0),
    (w && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (w = Br(f, "x", s, "px"),
    T = Br(f, "y", a, "px")),
    (_ || d || g || x) && (w = Ie(w + _ - (_ * k + d * b) + g),
    T = Ie(T + d - (_ * M + d * j) + x)),
    (n || i) && (C = f.getBBox(),
    w = Ie(w + n / 100 * C.width),
    T = Ie(T + i / 100 * C.height)),
    C = "matrix(" + k + "," + M + "," + b + "," + j + "," + w + "," + T + ")",
    f.setAttribute("transform", C),
    y && (f.style[Pe] = C)
}, cu = function(e, t, r, n, i) {
    var s = 360, a = Ge(i), l = parseFloat(i) * (a && ~i.indexOf("rad") ? Gr : 1), c = l - n, u = n + c + "deg", p, m;
    return a && (p = i.split("_")[1],
    p === "short" && (c %= s,
    c !== c % (s / 2) && (c += c < 0 ? s : -s)),
    p === "cw" && c < 0 ? c = (c + s * Vo) % s - ~~(c / s) * s : p === "ccw" && c > 0 && (c = (c - s * Vo) % s - ~~(c / s) * s)),
    e._pt = m = new Tt(e._pt,t,r,n,c,Hc),
    m.e = u,
    m.u = "deg",
    e._props.push(r),
    m
}, qo = function(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}, uu = function(e, t, r) {
    var n = qo({}, r._gsap), i = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, l, c, u, p, m, f, _;
    n.svg ? (c = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    s[Pe] = t,
    a = pi(r, 1),
    zr(r, Pe),
    r.setAttribute("transform", c)) : (c = getComputedStyle(r)[Pe],
    s[Pe] = t,
    a = pi(r, 1),
    s[Pe] = c);
    for (l in Sr)
        c = n[l],
        u = a[l],
        c !== u && i.indexOf(l) < 0 && (f = at(c),
        _ = at(u),
        p = f !== _ ? Br(r, l, c, _) : parseFloat(c),
        m = parseFloat(u),
        e._pt = new Tt(e._pt,a,l,p,m - p,Ls),
        e._pt.u = _ || 0,
        e._props.push(l));
    qo(a, n)
};
wt("padding,margin,Width,Radius", function(o, e) {
    var t = "Top"
      , r = "Right"
      , n = "Bottom"
      , i = "Left"
      , s = (e < 3 ? [t, r, n, i] : [t + i, t + r, n + r, n + i]).map(function(a) {
        return e < 2 ? o + a : "border" + a + o
    });
    Ji[e > 1 ? "border" + o : o] = function(a, l, c, u, p) {
        var m, f;
        if (arguments.length < 4)
            return m = s.map(function(_) {
                return yr(a, _, c)
            }),
            f = m.join(" "),
            f.split(m[0]).length === 5 ? m[0] : f;
        m = (u + "").split(" "),
        f = {},
        s.forEach(function(_, d) {
            return f[_] = m[d] = m[d] || m[(d - 1) / 2 | 0]
        }),
        a.init(l, f, p)
    }
});
var _l = {
    name: "css",
    register: Fs,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, r, n, i) {
        var s = this._props, a = e.style, l = r.vars.startAt, c, u, p, m, f, _, d, g, x, y, w, T, k, M, b, j, C;
        ho || Fs(),
        this.styles = this.styles || cl(e),
        j = this.styles.props,
        this.tween = r;
        for (d in t)
            if (d !== "autoRound" && (u = t[d],
            !(Ot[d] && Ja(d, t, r, n, e, i)))) {
                if (f = typeof u,
                _ = Ji[d],
                f === "function" && (u = u.call(r, n, e, i),
                f = typeof u),
                f === "string" && ~u.indexOf("random(") && (u = ui(u)),
                _)
                    _(this, e, d, u, r) && (b = 1);
                else if (d.substr(0, 2) === "--")
                    c = (getComputedStyle(e).getPropertyValue(d) + "").trim(),
                    u += "",
                    Lr.lastIndex = 0,
                    Lr.test(c) || (g = at(c),
                    x = at(u),
                    x ? g !== x && (c = Br(e, d, c, x) + x) : g && (u += g)),
                    this.add(a, "setProperty", c, u, n, i, 0, 0, d),
                    s.push(d),
                    j.push(d, 0, a[d]);
                else if (f !== "undefined") {
                    if (l && d in l ? (c = typeof l[d] == "function" ? l[d].call(r, n, e, i) : l[d],
                    Ge(c) && ~c.indexOf("random(") && (c = ui(c)),
                    at(c + "") || c === "auto" || (c += It.units[d] || at(yr(e, d)) || ""),
                    (c + "").charAt(1) === "=" && (c = yr(e, d))) : c = yr(e, d),
                    m = parseFloat(c),
                    y = f === "string" && u.charAt(1) === "=" && u.substr(0, 2),
                    y && (u = u.substr(2)),
                    p = parseFloat(u),
                    d in lr && (d === "autoAlpha" && (m === 1 && yr(e, "visibility") === "hidden" && p && (m = 0),
                    j.push("visibility", 0, a.visibility),
                    Er(this, a, "visibility", m ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)),
                    d !== "scale" && d !== "transform" && (d = lr[d],
                    ~d.indexOf(",") && (d = d.split(",")[0]))),
                    w = d in Sr,
                    w) {
                        if (this.styles.save(d),
                        C = u,
                        f === "string" && u.substring(0, 6) === "var(--") {
                            if (u = Lt(e, u.substring(4, u.indexOf(")"))),
                            u.substring(0, 5) === "calc(") {
                                var P = e.style.perspective;
                                e.style.perspective = u,
                                u = Lt(e, "perspective"),
                                P ? e.style.perspective = P : zr(e, "perspective")
                            }
                            p = parseFloat(u)
                        }
                        if (T || (k = e._gsap,
                        k.renderTransform && !t.parseTransform || pi(e, t.parseTransform),
                        M = t.smoothOrigin !== !1 && k.smooth,
                        T = this._pt = new Tt(this._pt,a,Pe,0,1,k.renderTransform,k,0,-1),
                        T.dep = 1),
                        d === "scale")
                            this._pt = new Tt(this._pt,k,"scaleY",k.scaleY,(y ? wn(k.scaleY, y + p) : p) - k.scaleY || 0,Ls),
                            this._pt.u = 0,
                            s.push("scaleY", d),
                            d += "X";
                        else if (d === "transformOrigin") {
                            j.push(St, 0, a[St]),
                            u = su(u),
                            k.svg ? zs(e, u, 0, M, 0, this) : (x = parseFloat(u.split(" ")[2]) || 0,
                            x !== k.zOrigin && Er(this, k, "zOrigin", k.zOrigin, x),
                            Er(this, a, d, Zi(c), Zi(u)));
                            continue
                        } else if (d === "svgOrigin") {
                            zs(e, u, 1, M, 0, this);
                            continue
                        } else if (d in hl) {
                            cu(this, k, d, m, y ? wn(m, y + u) : u);
                            continue
                        } else if (d === "smoothOrigin") {
                            Er(this, k, "smooth", k.smooth, u);
                            continue
                        } else if (d === "force3D") {
                            k[d] = u;
                            continue
                        } else if (d === "transform") {
                            uu(this, u, e);
                            continue
                        }
                    } else
                        d in a || (d = Dn(d) || d);
                    if (w || (p || p === 0) && (m || m === 0) && !Uc.test(u) && d in a)
                        g = (c + "").substr((m + "").length),
                        p || (p = 0),
                        x = at(u) || (d in It.units ? It.units[d] : g),
                        g !== x && (m = Br(e, d, c, x)),
                        this._pt = new Tt(this._pt,w ? k : a,d,m,(y ? wn(m, y + p) : p) - m,!w && (x === "px" || d === "zIndex") && t.autoRound !== !1 ? Gc : Ls),
                        this._pt.u = x || 0,
                        w && C !== u ? (this._pt.b = c,
                        this._pt.e = C,
                        this._pt.r = Wc) : g !== x && x !== "%" && (this._pt.b = c,
                        this._pt.r = Xc);
                    else if (d in a)
                        iu.call(this, e, d, c, y ? y + u : u);
                    else if (d in e)
                        this.add(e, d, c || e[d], y ? y + u : u, n, i);
                    else if (d !== "parseTransform") {
                        ro(d, u);
                        continue
                    }
                    w || (d in a ? j.push(d, 0, a[d]) : typeof e[d] == "function" ? j.push(d, 2, e[d]()) : j.push(d, 1, c || e[d])),
                    s.push(d)
                }
            }
        b && il(this)
    },
    render: function(e, t) {
        if (t.tween._time || !po())
            for (var r = t._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            t.styles.revert()
    },
    get: yr,
    aliases: lr,
    getSetter: function(e, t, r) {
        var n = lr[t];
        return n && n.indexOf(",") < 0 && (t = n),
        t in Sr && t !== St && (e._gsap.x || yr(e, "x")) ? r && Yo === r ? t === "scale" ? Jc : Kc : (Yo = r || {}) && (t === "scale" ? Zc : eu) : e.style && !Zs(e.style[t]) ? qc : ~t.indexOf("-") ? Qc : uo(e, t)
    },
    core: {
        _removeProperty: zr,
        _getMatrix: _o
    }
};
kt.utils.checkPrefix = Dn;
kt.core.getStyleSaver = cl;
(function(o, e, t, r) {
    var n = wt(o + "," + e + "," + t, function(i) {
        Sr[i] = 1
    });
    wt(e, function(i) {
        It.units[i] = "deg",
        hl[i] = 1
    }),
    lr[n[13]] = o + "," + e,
    wt(r, function(i) {
        var s = i.split(":");
        lr[s[1]] = n[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    It.units[o] = "px"
});
kt.registerPlugin(_l);
var Kt = kt.registerPlugin(_l) || kt;
Kt.core.Tween;
function fu({onOpen: o}) {
    const e = de.useRef(null)
      , t = de.useRef(null)
      , r = de.useRef(null)
      , n = de.useRef(null)
      , [i,s] = de.useState(!1)
      , a = () => {
        if (i)
            return;
        s(!0),
        Kt.timeline({
            onComplete: () => {
                o(),
                Kt.to(n.current, {
                    autoAlpha: 0,
                    duration: .8,
                    delay: .2,
                    onComplete: () => {
                        n.current && (n.current.style.display = "none")
                    }
                })
            }
        }).to(r.current, {
            autoAlpha: 0,
            y: -20,
            duration: .7,
            ease: "power2.in"
        }, 0).to(e.current, {
            x: "-105%",
            duration: 3.2,
            ease: "power3.inOut"
        }, .2).to(t.current, {
            x: "105%",
            duration: 3.2,
            ease: "power3.inOut"
        }, .2)
    }
    ;
    return de.useEffect( () => {
        Kt.from(r.current, {
            autoAlpha: 0,
            y: 40,
            duration: 1.6,
            ease: "power2.out"
        })
    }
    , []),
    h.jsxs("div", {
        ref: n,
        className: "fixed inset-0 z-[100] overflow-hidden bg-night",
        "aria-hidden": i,
        children: [h.jsx("div", {
            className: "absolute inset-0",
            style: {
                background: "radial-gradient(ellipse at center, rgba(212,175,55,0.18), transparent 55%), #140707"
            }
        }), h.jsxs("svg", {
            className: "absolute inset-0 h-full w-full",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: [h.jsxs("defs", {
                children: [h.jsxs("linearGradient", {
                    id: "velvetLeft",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    children: [h.jsx("stop", {
                        offset: "0%",
                        stopColor: "#3a0008"
                    }), h.jsx("stop", {
                        offset: "8%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "16%",
                        stopColor: "#4a000d"
                    }), h.jsx("stop", {
                        offset: "24%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "34%",
                        stopColor: "#5C0013"
                    }), h.jsx("stop", {
                        offset: "44%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "55%",
                        stopColor: "#4a000d"
                    }), h.jsx("stop", {
                        offset: "68%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "80%",
                        stopColor: "#5C0013"
                    }), h.jsx("stop", {
                        offset: "92%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "100%",
                        stopColor: "#2a0007"
                    })]
                }), h.jsxs("linearGradient", {
                    id: "velvetRight",
                    x1: "1",
                    y1: "0",
                    x2: "0",
                    y2: "0",
                    children: [h.jsx("stop", {
                        offset: "0%",
                        stopColor: "#3a0008"
                    }), h.jsx("stop", {
                        offset: "8%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "16%",
                        stopColor: "#4a000d"
                    }), h.jsx("stop", {
                        offset: "24%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "34%",
                        stopColor: "#5C0013"
                    }), h.jsx("stop", {
                        offset: "44%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "55%",
                        stopColor: "#4a000d"
                    }), h.jsx("stop", {
                        offset: "68%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "80%",
                        stopColor: "#5C0013"
                    }), h.jsx("stop", {
                        offset: "92%",
                        stopColor: "#7A0019"
                    }), h.jsx("stop", {
                        offset: "100%",
                        stopColor: "#2a0007"
                    })]
                }), h.jsxs("linearGradient", {
                    id: "goldEdge",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [h.jsx("stop", {
                        offset: "0%",
                        stopColor: "#f5d77a"
                    }), h.jsx("stop", {
                        offset: "50%",
                        stopColor: "#D4AF37"
                    }), h.jsx("stop", {
                        offset: "100%",
                        stopColor: "#8a6d1a"
                    })]
                }), h.jsxs("linearGradient", {
                    id: "valance",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [h.jsx("stop", {
                        offset: "0%",
                        stopColor: "#5C0013"
                    }), h.jsx("stop", {
                        offset: "100%",
                        stopColor: "#7A0019"
                    })]
                })]
            }), h.jsxs("g", {
                children: [h.jsx("rect", {
                    x: "0",
                    y: "0",
                    width: "100",
                    height: "8",
                    fill: "url(#valance)"
                }), h.jsx("path", {
                    d: "M0 8 Q5 14 10 8 T20 8 T30 8 T40 8 T50 8 T60 8 T70 8 T80 8 T90 8 T100 8 L100 0 L0 0 Z",
                    fill: "url(#valance)"
                }), h.jsx("path", {
                    d: "M0 8 Q5 14 10 8 T20 8 T30 8 T40 8 T50 8 T60 8 T70 8 T80 8 T90 8 T100 8",
                    stroke: "url(#goldEdge)",
                    strokeWidth: "0.4",
                    fill: "none"
                }), Array.from({
                    length: 11
                }).map( (l, c) => h.jsxs("g", {
                    children: [h.jsx("circle", {
                        cx: c * 10,
                        cy: 13.5,
                        r: .7,
                        fill: "#D4AF37"
                    }), h.jsx("line", {
                        x1: c * 10,
                        y1: 14,
                        x2: c * 10,
                        y2: 16.5,
                        stroke: "#D4AF37",
                        strokeWidth: .25
                    })]
                }, c))]
            }), h.jsxs("g", {
                ref: e,
                children: [h.jsx("rect", {
                    x: "0",
                    y: "0",
                    width: "50",
                    height: "100",
                    fill: "url(#velvetLeft)"
                }), [6, 14, 22, 30, 38, 46].map(l => h.jsx("rect", {
                    x: l,
                    y: "0",
                    width: "0.4",
                    height: "100",
                    fill: "rgba(0,0,0,0.35)"
                }, l)), h.jsx("rect", {
                    x: "49.4",
                    y: "0",
                    width: "0.6",
                    height: "100",
                    fill: "url(#goldEdge)"
                }), h.jsx("g", {
                    opacity: "0.85",
                    children: Array.from({
                        length: 20
                    }).map( (l, c) => h.jsx("circle", {
                        cx: 48.8,
                        cy: c * 5 + 2,
                        r: .25,
                        fill: "#D4AF37"
                    }, c))
                }), h.jsxs("g", {
                    children: [h.jsx("path", {
                        d: "M30 55 Q42 58 47 62 Q49 64 47 66 Q42 68 30 65",
                        stroke: "url(#goldEdge)",
                        strokeWidth: "0.7",
                        fill: "none"
                    }), h.jsx("ellipse", {
                        cx: "30",
                        cy: "60",
                        rx: "1.6",
                        ry: "2",
                        fill: "url(#goldEdge)"
                    }), h.jsx("ellipse", {
                        cx: "30",
                        cy: "60",
                        rx: "0.8",
                        ry: "1.1",
                        fill: "#8a6d1a"
                    }), h.jsx("ellipse", {
                        cx: "30",
                        cy: "63.5",
                        rx: "1.8",
                        ry: "2.4",
                        fill: "url(#goldEdge)"
                    }), Array.from({
                        length: 9
                    }).map( (l, c) => h.jsx("line", {
                        x1: 28.4 + c * .4,
                        y1: "65.5",
                        x2: 28.2 + c * .45,
                        y2: "71",
                        stroke: "#D4AF37",
                        strokeWidth: "0.22"
                    }, c)), h.jsx("ellipse", {
                        cx: "30",
                        cy: "71.2",
                        rx: "2",
                        ry: "0.35",
                        fill: "#8a6d1a",
                        opacity: "0.6"
                    })]
                })]
            }), h.jsxs("g", {
                ref: t,
                children: [h.jsx("rect", {
                    x: "50",
                    y: "0",
                    width: "50",
                    height: "100",
                    fill: "url(#velvetRight)"
                }), [54, 62, 70, 78, 86, 94].map(l => h.jsx("rect", {
                    x: l,
                    y: "0",
                    width: "0.4",
                    height: "100",
                    fill: "rgba(0,0,0,0.35)"
                }, l)), h.jsx("rect", {
                    x: "50",
                    y: "0",
                    width: "0.6",
                    height: "100",
                    fill: "url(#goldEdge)"
                }), h.jsx("g", {
                    opacity: "0.85",
                    children: Array.from({
                        length: 20
                    }).map( (l, c) => h.jsx("circle", {
                        cx: 51.2,
                        cy: c * 5 + 2,
                        r: .25,
                        fill: "#D4AF37"
                    }, c))
                }), h.jsxs("g", {
                    children: [h.jsx("path", {
                        d: "M70 55 Q58 58 53 62 Q51 64 53 66 Q58 68 70 65",
                        stroke: "url(#goldEdge)",
                        strokeWidth: "0.7",
                        fill: "none"
                    }), h.jsx("ellipse", {
                        cx: "70",
                        cy: "60",
                        rx: "1.6",
                        ry: "2",
                        fill: "url(#goldEdge)"
                    }), h.jsx("ellipse", {
                        cx: "70",
                        cy: "60",
                        rx: "0.8",
                        ry: "1.1",
                        fill: "#8a6d1a"
                    }), h.jsx("ellipse", {
                        cx: "70",
                        cy: "63.5",
                        rx: "1.8",
                        ry: "2.4",
                        fill: "url(#goldEdge)"
                    }), Array.from({
                        length: 9
                    }).map( (l, c) => h.jsx("line", {
                        x1: 68.4 + c * .4,
                        y1: "65.5",
                        x2: 68.2 + c * .45,
                        y2: "71",
                        stroke: "#D4AF37",
                        strokeWidth: "0.22"
                    }, c)), h.jsx("ellipse", {
                        cx: "70",
                        cy: "71.2",
                        rx: "2",
                        ry: "0.35",
                        fill: "#8a6d1a",
                        opacity: "0.6"
                    })]
                })]
            })]
        }), h.jsxs("div", {
            ref: r,
            className: "relative z-10 flex h-full flex-col items-center justify-center px-5 text-center",
            children: [h.jsx("p", {
                className: "font-display text-[10px] tracking-[0.3em] text-gold sm:text-xs sm:tracking-[0.4em]",
                children: "✦  FIVE YEARS OF LOVE  ✦"
            }), h.jsxs("h1", {
                className: "mt-6 font-serif-lux text-4xl font-medium leading-tight text-ivory sm:text-7xl md:text-8xl",
                children: ["Mallesh ", h.jsx("span", {
                    className: "gold-gradient font-script text-5xl sm:text-8xl md:text-9xl",
                    children: "&"
                }), " Sukanya"]
            }), h.jsx("div", {
                className: "mt-6 max-w-xl px-2 sm:mt-8",
                children: h.jsx("p", {
                    className: "font-serif-lux italic text-sm text-champagne/90 sm:text-lg",
                    children: "Join us as we celebrate five beautiful years of love."
                })
            }), h.jsx("button", {
                onClick: a,
                className: "btn-royal mt-10 text-xs sm:mt-12 sm:text-sm",
                children: "Open Invitation"
            }), h.jsx("p", {
                className: "mt-6 px-4 text-[9px] tracking-[0.3em] text-champagne/60 sm:text-[10px] sm:tracking-[0.4em]",
                children: "— A ROYAL EXPERIENCE AWAITS —"
            })]
        })]
    })
}
function du({active: o}) {
    const e = de.useRef(null);
    if (de.useEffect( () => {
        if (!o || !e.current)
            return;
        e.current.querySelectorAll("[data-particle]").forEach(n => {
            const i = parseFloat(n.dataset.duration || "6")
              , s = parseFloat(n.dataset.delay || "0")
              , a = (Math.random() - .5) * 200;
            Kt.fromTo(n, {
                y: -80,
                x: 0,
                opacity: 0,
                rotation: 0
            }, {
                y: window.innerHeight + 100,
                x: a,
                opacity: 1,
                rotation: 360 + Math.random() * 360,
                duration: i,
                delay: s,
                ease: "sine.inOut",
                repeat: -1,
                repeatDelay: Math.random() * 2
            })
        }
        ),
        Kt.to(e.current, {
            opacity: .7,
            duration: 4,
            delay: 4
        })
    }
    , [o]),
    !o)
        return null;
    const t = Array.from({
        length: 40
    }).map( (r, n) => ({
        id: n,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 6,
        size: 8 + Math.random() * 18,
        rotation: Math.random() * 360,
        type: n % 5 === 0 ? "sparkle" : n % 3 === 0 ? "flower" : "petal"
    }));
    return h.jsx("div", {
        ref: e,
        className: "pointer-events-none fixed inset-0 z-[60] overflow-hidden",
        children: t.map(r => h.jsxs("div", {
            "data-particle": !0,
            "data-delay": r.delay,
            "data-duration": r.duration,
            className: "absolute",
            style: {
                left: `${r.left}%`,
                top: 0,
                width: r.size,
                height: r.size
            },
            children: [r.type === "petal" && h.jsxs("svg", {
                viewBox: "0 0 24 24",
                className: "h-full w-full",
                children: [h.jsx("path", {
                    d: "M12 2 C16 6 18 10 14 18 C12 22 12 22 10 18 C6 10 8 6 12 2 Z",
                    fill: "#c81e3a",
                    opacity: "0.85"
                }), h.jsx("path", {
                    d: "M12 4 C14 8 15 12 12 16",
                    stroke: "#7A0019",
                    strokeWidth: "0.5",
                    fill: "none"
                })]
            }), r.type === "flower" && h.jsxs("svg", {
                viewBox: "0 0 24 24",
                className: "h-full w-full",
                children: [[0, 72, 144, 216, 288].map(n => h.jsx("ellipse", {
                    cx: "12",
                    cy: "7",
                    rx: "3",
                    ry: "5",
                    fill: "#e63950",
                    opacity: "0.8",
                    transform: `rotate(${n} 12 12)`
                }, n)), h.jsx("circle", {
                    cx: "12",
                    cy: "12",
                    r: "1.5",
                    fill: "#D4AF37"
                })]
            }), r.type === "sparkle" && h.jsx("svg", {
                viewBox: "0 0 24 24",
                className: "h-full w-full",
                children: h.jsx("path", {
                    d: "M12 0 L13 11 L24 12 L13 13 L12 24 L11 13 L0 12 L11 11 Z",
                    fill: "#D4AF37",
                    opacity: "0.9"
                })
            })]
        }, r.id))
    })
}
function hu(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value" in r && (r.writable = !0),
        Object.defineProperty(o, r.key, r)
    }
}
function pu(o, e, t) {
    return e && hu(o.prototype, e),
    o
}
var Ke, Yi, At, Dr, Ar, kn, gl, qr, Cn, xl, br, Qt, yl, vl = function() {
    return Ke || typeof window < "u" && (Ke = window.gsap) && Ke.registerPlugin && Ke
}, bl = 1, bn = [], ee = [], ur = [], Kn = Date.now, Bs = function(e, t) {
    return t
}, mu = function() {
    var e = Cn.core
      , t = e.bridge || {}
      , r = e._scrollers
      , n = e._proxies;
    r.push.apply(r, ee),
    n.push.apply(n, ur),
    ee = r,
    ur = n,
    Bs = function(s, a) {
        return t[s](a)
    }
}, Ir = function(e, t) {
    return ~ur.indexOf(e) && ur[ur.indexOf(e) + 1][t]
}, Jn = function(e) {
    return !!~xl.indexOf(e)
}, ft = function(e, t, r, n, i) {
    return e.addEventListener(t, r, {
        passive: n !== !1,
        capture: !!i
    })
}, ut = function(e, t, r, n) {
    return e.removeEventListener(t, r, !!n)
}, Ci = "scrollLeft", Pi = "scrollTop", Ys = function() {
    return br && br.isPressed || ee.cache++
}, es = function(e, t) {
    var r = function n(i) {
        if (i || i === 0) {
            bl && (At.history.scrollRestoration = "manual");
            var s = br && br.isPressed;
            i = n.v = Math.round(i) || (br && br.iOS ? 1 : 0),
            e(i),
            n.cacheID = ee.cache,
            s && Bs("ss", i)
        } else
            (t || ee.cache !== n.cacheID || Bs("ref")) && (n.cacheID = ee.cache,
            n.v = e());
        return n.v + n.offset
    };
    return r.offset = 0,
    e && r
}, mt = {
    s: Ci,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: es(function(o) {
        return arguments.length ? At.scrollTo(o, $e.sc()) : At.pageXOffset || Dr[Ci] || Ar[Ci] || kn[Ci] || 0
    })
}, $e = {
    s: Pi,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: mt,
    sc: es(function(o) {
        return arguments.length ? At.scrollTo(mt.sc(), o) : At.pageYOffset || Dr[Pi] || Ar[Pi] || kn[Pi] || 0
    })
}, yt = function(e, t) {
    return (t && t._ctx && t._ctx.selector || Ke.utils.toArray)(e)[0] || (typeof e == "string" && Ke.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, _u = function(e, t) {
    for (var r = t.length; r--; )
        if (t[r] === e || t[r].contains(e))
            return !0;
    return !1
}, Yr = function(e, t) {
    var r = t.s
      , n = t.sc;
    Jn(e) && (e = Dr.scrollingElement || Ar);
    var i = ee.indexOf(e)
      , s = n === $e.sc ? 1 : 2;
    !~i && (i = ee.push(e) - 1),
    ee[i + s] || ft(e, "scroll", Ys);
    var a = ee[i + s]
      , l = a || (ee[i + s] = es(Ir(e, r), !0) || (Jn(e) ? n : es(function(c) {
        return arguments.length ? e[r] = c : e[r]
    })));
    return l.target = e,
    a || (l.smooth = Ke.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, Vs = function(e, t, r) {
    var n = e
      , i = e
      , s = Kn()
      , a = s
      , l = t || 50
      , c = Math.max(500, l * 3)
      , u = function(_, d) {
        var g = Kn();
        d || g - s > l ? (i = n,
        n = _,
        a = s,
        s = g) : r ? n += _ : n = i + (_ - i) / (g - a) * (s - a)
    }
      , p = function() {
        i = n = r ? 0 : n,
        a = s = 0
    }
      , m = function(_) {
        var d = a
          , g = i
          , x = Kn();
        return (_ || _ === 0) && _ !== n && u(_),
        s === a || x - a > c ? 0 : (n + (r ? g : -g)) / ((r ? x : s) - d) * 1e3
    };
    return {
        update: u,
        reset: p,
        getVelocity: m
    }
}, Fn = function(e, t) {
    return t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Qo = function(e) {
    var t = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r
}, wl = function() {
    Cn = Ke.core.globals().ScrollTrigger,
    Cn && Cn.core && mu()
}, Tl = function(e) {
    return Ke = e || vl(),
    !Yi && Ke && typeof document < "u" && document.body && (At = window,
    Dr = document,
    Ar = Dr.documentElement,
    kn = Dr.body,
    xl = [At, Dr, Ar, kn],
    Ke.utils.clamp,
    yl = Ke.core.context || function() {}
    ,
    qr = "onpointerenter" in kn ? "pointer" : "mouse",
    gl = Fe.isTouch = At.matchMedia && At.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in At || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Qt = Fe.eventTypes = ("ontouchstart" in Ar ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ar ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return bl = 0
    }, 500),
    Yi = 1),
    Cn || wl(),
    Yi
};
mt.op = $e;
ee.cache = 0;
var Fe = (function() {
    function o(t) {
        this.init(t)
    }
    var e = o.prototype;
    return e.init = function(r) {
        Yi || Tl(Ke) || console.warn("Please gsap.registerPlugin(Observer)"),
        Cn || wl();
        var n = r.tolerance
          , i = r.dragMinimum
          , s = r.type
          , a = r.target
          , l = r.lineHeight
          , c = r.debounce
          , u = r.preventDefault
          , p = r.onStop
          , m = r.onStopDelay
          , f = r.ignore
          , _ = r.wheelSpeed
          , d = r.event
          , g = r.onDragStart
          , x = r.onDragEnd
          , y = r.onDrag
          , w = r.onPress
          , T = r.onRelease
          , k = r.onRight
          , M = r.onLeft
          , b = r.onUp
          , j = r.onDown
          , C = r.onChangeX
          , P = r.onChangeY
          , D = r.onChange
          , N = r.onToggleX
          , V = r.onToggleY
          , A = r.onHover
          , z = r.onHoverEnd
          , Y = r.onMove
          , L = r.ignoreCheck
          , $ = r.isNormalizer
          , q = r.onGestureStart
          , v = r.onGestureEnd
          , J = r.onWheel
          , ge = r.onEnable
          , Ee = r.onDisable
          , se = r.onClick
          , Te = r.scrollSpeed
          , Me = r.capture
          , ie = r.allowClicks
          , oe = r.lockAxis
          , _e = r.onLockAxis;
        this.target = a = yt(a) || Ar,
        this.vars = r,
        f && (f = Ke.utils.toArray(f)),
        n = n || 1e-9,
        i = i || 0,
        _ = _ || 1,
        Te = Te || 1,
        s = s || "wheel,touch,pointer",
        c = c !== !1,
        l || (l = parseFloat(At.getComputedStyle(kn).lineHeight) || 22);
        var De, Q, E, I, X, le, xe, S = this, Ae = 0, Ue = 0, Ze = r.passive || !u && r.passive !== !1, fe = Yr(a, mt), Ct = Yr(a, $e), Bt = fe(), Zt = Ct(), Re = ~s.indexOf("touch") && !~s.indexOf("pointer") && Qt[0] === "pointerdown", er = Jn(a), ye = a.ownerDocument || Dr, Pt = [0, 0, 0], et = [0, 0, 0], tt = 0, dr = function() {
            return tt = Kn()
        }, ve = function(B, ae) {
            return (S.event = B) && f && _u(B.target, f) || ae && Re && B.pointerType !== "touch" || L && L(B, ae)
        }, hr = function() {
            S._vx.reset(),
            S._vy.reset(),
            Q.pause(),
            p && p(S)
        }, Gt = function() {
            var B = S.deltaX = Qo(Pt)
              , ae = S.deltaY = Qo(et)
              , O = Math.abs(B) >= n
              , U = Math.abs(ae) >= n;
            D && (O || U) && D(S, B, ae, Pt, et),
            O && (k && S.deltaX > 0 && k(S),
            M && S.deltaX < 0 && M(S),
            C && C(S),
            N && S.deltaX < 0 != Ae < 0 && N(S),
            Ae = S.deltaX,
            Pt[0] = Pt[1] = Pt[2] = 0),
            U && (j && S.deltaY > 0 && j(S),
            b && S.deltaY < 0 && b(S),
            P && P(S),
            V && S.deltaY < 0 != Ue < 0 && V(S),
            Ue = S.deltaY,
            et[0] = et[1] = et[2] = 0),
            (I || E) && (Y && Y(S),
            E && (g && E === 1 && g(S),
            y && y(S),
            E = 0),
            I = !1),
            le && !(le = !1) && _e && _e(S),
            X && (J(S),
            X = !1),
            De = 0
        }, Cr = function(B, ae, O) {
            Pt[O] += B,
            et[O] += ae,
            S._vx.update(B),
            S._vy.update(ae),
            c ? De || (De = requestAnimationFrame(Gt)) : Gt()
        }, Pr = function(B, ae) {
            oe && !xe && (S.axis = xe = Math.abs(B) > Math.abs(ae) ? "x" : "y",
            le = !0),
            xe !== "y" && (Pt[2] += B,
            S._vx.update(B, !0)),
            xe !== "x" && (et[2] += ae,
            S._vy.update(ae, !0)),
            c ? De || (De = requestAnimationFrame(Gt)) : Gt()
        }, tr = function(B) {
            if (!ve(B, 1)) {
                B = Fn(B, u);
                var ae = B.clientX
                  , O = B.clientY
                  , U = ae - S.x
                  , F = O - S.y
                  , H = S.isDragging;
                S.x = ae,
                S.y = O,
                (H || (U || F) && (Math.abs(S.startX - ae) >= i || Math.abs(S.startY - O) >= i)) && (E || (E = H ? 2 : 1),
                H || (S.isDragging = !0),
                Pr(U, F))
            }
        }, pr = S.onPress = function(W) {
            ve(W, 1) || W && W.button || (S.axis = xe = null,
            Q.pause(),
            S.isPressed = !0,
            W = Fn(W),
            Ae = Ue = 0,
            S.startX = S.x = W.clientX,
            S.startY = S.y = W.clientY,
            S._vx.reset(),
            S._vy.reset(),
            ft($ ? a : ye, Qt[1], tr, Ze, !0),
            S.deltaX = S.deltaY = 0,
            w && w(S))
        }
        , G = S.onRelease = function(W) {
            if (!ve(W, 1)) {
                ut($ ? a : ye, Qt[1], tr, !0);
                var B = !isNaN(S.y - S.startY)
                  , ae = S.isDragging
                  , O = ae && (Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3)
                  , U = Fn(W);
                !O && B && (S._vx.reset(),
                S._vy.reset(),
                u && ie && Ke.delayedCall(.08, function() {
                    if (Kn() - tt > 300 && !W.defaultPrevented) {
                        if (W.target.click)
                            W.target.click();
                        else if (ye.createEvent) {
                            var F = ye.createEvent("MouseEvents");
                            F.initMouseEvent("click", !0, !0, At, 1, U.screenX, U.screenY, U.clientX, U.clientY, !1, !1, !1, !1, 0, null),
                            W.target.dispatchEvent(F)
                        }
                    }
                })),
                S.isDragging = S.isGesturing = S.isPressed = !1,
                p && ae && !$ && Q.restart(!0),
                E && Gt(),
                x && ae && x(S),
                T && T(S, O)
            }
        }
        , mr = function(B) {
            return B.touches && B.touches.length > 1 && (S.isGesturing = !0) && q(B, S.isDragging)
        }, _t = function() {
            return (S.isGesturing = !1) || v(S)
        }, gt = function(B) {
            if (!ve(B)) {
                var ae = fe()
                  , O = Ct();
                Cr((ae - Bt) * Te, (O - Zt) * Te, 1),
                Bt = ae,
                Zt = O,
                p && Q.restart(!0)
            }
        }, xt = function(B) {
            if (!ve(B)) {
                B = Fn(B, u),
                J && (X = !0);
                var ae = (B.deltaMode === 1 ? l : B.deltaMode === 2 ? At.innerHeight : 1) * _;
                Cr(B.deltaX * ae, B.deltaY * ae, 0),
                p && !$ && Q.restart(!0)
            }
        }, _r = function(B) {
            if (!ve(B)) {
                var ae = B.clientX
                  , O = B.clientY
                  , U = ae - S.x
                  , F = O - S.y;
                S.x = ae,
                S.y = O,
                I = !0,
                p && Q.restart(!0),
                (U || F) && Pr(U, F)
            }
        }, gr = function(B) {
            S.event = B,
            A(S)
        }, Yt = function(B) {
            S.event = B,
            z(S)
        }, Ur = function(B) {
            return ve(B) || Fn(B, u) && se(S)
        };
        Q = S._dc = Ke.delayedCall(m || .25, hr).pause(),
        S.deltaX = S.deltaY = 0,
        S._vx = Vs(0, 50, !0),
        S._vy = Vs(0, 50, !0),
        S.scrollX = fe,
        S.scrollY = Ct,
        S.isDragging = S.isGesturing = S.isPressed = !1,
        yl(this),
        S.enable = function(W) {
            return S.isEnabled || (ft(er ? ye : a, "scroll", Ys),
            s.indexOf("scroll") >= 0 && ft(er ? ye : a, "scroll", gt, Ze, Me),
            s.indexOf("wheel") >= 0 && ft(a, "wheel", xt, Ze, Me),
            (s.indexOf("touch") >= 0 && gl || s.indexOf("pointer") >= 0) && (ft(a, Qt[0], pr, Ze, Me),
            ft(ye, Qt[2], G),
            ft(ye, Qt[3], G),
            ie && ft(a, "click", dr, !0, !0),
            se && ft(a, "click", Ur),
            q && ft(ye, "gesturestart", mr),
            v && ft(ye, "gestureend", _t),
            A && ft(a, qr + "enter", gr),
            z && ft(a, qr + "leave", Yt),
            Y && ft(a, qr + "move", _r)),
            S.isEnabled = !0,
            S.isDragging = S.isGesturing = S.isPressed = I = E = !1,
            S._vx.reset(),
            S._vy.reset(),
            Bt = fe(),
            Zt = Ct(),
            W && W.type && pr(W),
            ge && ge(S)),
            S
        }
        ,
        S.disable = function() {
            S.isEnabled && (bn.filter(function(W) {
                return W !== S && Jn(W.target)
            }).length || ut(er ? ye : a, "scroll", Ys),
            S.isPressed && (S._vx.reset(),
            S._vy.reset(),
            ut($ ? a : ye, Qt[1], tr, !0)),
            ut(er ? ye : a, "scroll", gt, Me),
            ut(a, "wheel", xt, Me),
            ut(a, Qt[0], pr, Me),
            ut(ye, Qt[2], G),
            ut(ye, Qt[3], G),
            ut(a, "click", dr, !0),
            ut(a, "click", Ur),
            ut(ye, "gesturestart", mr),
            ut(ye, "gestureend", _t),
            ut(a, qr + "enter", gr),
            ut(a, qr + "leave", Yt),
            ut(a, qr + "move", _r),
            S.isEnabled = S.isPressed = S.isDragging = !1,
            Ee && Ee(S))
        }
        ,
        S.kill = S.revert = function() {
            S.disable();
            var W = bn.indexOf(S);
            W >= 0 && bn.splice(W, 1),
            br === S && (br = 0)
        }
        ,
        bn.push(S),
        $ && Jn(a) && (br = S),
        S.enable(d)
    }
    ,
    pu(o, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    o
}
)();
Fe.version = "3.15.0";
Fe.create = function(o) {
    return new Fe(o)
}
;
Fe.register = Tl;
Fe.getAll = function() {
    return bn.slice()
}
;
Fe.getById = function(o) {
    return bn.filter(function(e) {
        return e.vars.id === o
    })[0]
}
;
vl() && Ke.registerPlugin(Fe);
var R, gn, Z, ue, Et, ce, go, ts, mi, Zn, Vn, ji, st, ls, $s, ht, Ko, Jo, xn, Sl, ys, kl, dt, Us, Cl, Pl, Mr, Hs, xo, Pn, yo, ei, Xs, vs, Mi = 1, ot = Date.now, bs = ot(), Wt = 0, $n = 0, Zo = function(e, t, r) {
    var n = Nt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + t + "Clamp"] = n,
    n ? e.substr(6, e.length - 7) : e
}, ea = function(e, t) {
    return t && (!Nt(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, gu = function o() {
    return $n && requestAnimationFrame(o)
}, ta = function() {
    return ls = 1
}, ra = function() {
    return ls = 0
}, or = function(e) {
    return e
}, Un = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, jl = function() {
    return typeof window < "u"
}, Ml = function() {
    return R || jl() && (R = window.gsap) && R.registerPlugin && R
}, an = function(e) {
    return !!~go.indexOf(e)
}, Nl = function(e) {
    return (e === "Height" ? yo : Z["inner" + e]) || Et["client" + e] || ce["client" + e]
}, Ol = function(e) {
    return Ir(e, "getBoundingClientRect") || (an(e) ? function() {
        return Xi.width = Z.innerWidth,
        Xi.height = yo,
        Xi
    }
    : function() {
        return vr(e)
    }
    )
}, xu = function(e, t, r) {
    var n = r.d
      , i = r.d2
      , s = r.a;
    return (s = Ir(e, "getBoundingClientRect")) ? function() {
        return s()[n]
    }
    : function() {
        return (t ? Nl(i) : e["client" + i]) || 0
    }
}, yu = function(e, t) {
    return !t || ~ur.indexOf(e) ? Ol(e) : function() {
        return Xi
    }
}, cr = function(e, t) {
    var r = t.s
      , n = t.d2
      , i = t.d
      , s = t.a;
    return Math.max(0, (r = "scroll" + n) && (s = Ir(e, r)) ? s() - Ol(e)()[i] : an(e) ? (Et[r] || ce[r]) - Nl(n) : e[r] - e["offset" + n])
}, Ni = function(e, t) {
    for (var r = 0; r < xn.length; r += 3)
        (!t || ~t.indexOf(xn[r + 1])) && e(xn[r], xn[r + 1], xn[r + 2])
}, Nt = function(e) {
    return typeof e == "string"
}, lt = function(e) {
    return typeof e == "function"
}, Hn = function(e) {
    return typeof e == "number"
}, Qr = function(e) {
    return typeof e == "object"
}, zn = function(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause()
}, pn = function(e, t, r) {
    if (e.enabled) {
        var n = e._ctx ? e._ctx.add(function() {
            return t(e, r)
        }) : t(e, r);
        n && n.totalTime && (e.callbackAnimation = n)
    }
}, mn = Math.abs, El = "left", Dl = "top", vo = "right", bo = "bottom", nn = "width", sn = "height", ti = "Right", ri = "Left", ni = "Top", ii = "Bottom", ze = "padding", $t = "margin", An = "Width", wo = "Height", Ve = "px", Ut = function(e) {
    return Z.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e)
}, vu = function(e) {
    var t = Ut(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, na = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, vr = function(e, t) {
    var r = t && Ut(e)[$s] !== "matrix(1, 0, 0, 1, 0, 0)" && R.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , n = e.getBoundingClientRect ? e.getBoundingClientRect() : e.scrollingElement.getBoundingClientRect();
    return r && r.progress(0).kill(),
    n
}, rs = function(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0
}, Al = function(e) {
    var t = [], r = e.labels, n = e.duration(), i;
    for (i in r)
        t.push(r[i] / n);
    return t
}, bu = function(e) {
    return function(t) {
        return R.utils.snap(Al(e), t)
    }
}, To = function(e) {
    var t = R.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(n, i) {
        return n - i
    });
    return r ? function(n, i, s) {
        s === void 0 && (s = .001);
        var a;
        if (!i)
            return t(n);
        if (i > 0) {
            for (n -= s,
            a = 0; a < r.length; a++)
                if (r[a] >= n)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            n += s; a--; )
                if (r[a] <= n)
                    return r[a];
        return r[0]
    }
    : function(n, i, s) {
        s === void 0 && (s = .001);
        var a = t(n);
        return !i || Math.abs(a - n) < s || a - n < 0 == i < 0 ? a : t(i < 0 ? n - e : n + e)
    }
}, wu = function(e) {
    return function(t, r) {
        return To(Al(e))(t, r.direction)
    }
}, Oi = function(e, t, r, n) {
    return r.split(",").forEach(function(i) {
        return e(t, i, n)
    })
}, We = function(e, t, r, n, i) {
    return e.addEventListener(t, r, {
        passive: !n,
        capture: !!i
    })
}, Xe = function(e, t, r, n) {
    return e.removeEventListener(t, r, !!n)
}, Ei = function(e, t, r) {
    r = r && r.wheelHandler,
    r && (e(t, "wheel", r),
    e(t, "touchmove", r))
}, ia = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Di = {
    toggleActions: "play",
    anticipatePin: 0
}, ns = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Vi = function(e, t) {
    if (Nt(e)) {
        var r = e.indexOf("=")
          , n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (n *= t / 100),
        e = e.substr(0, r - 1)),
        e = n + (e in ns ? ns[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, Ai = function(e, t, r, n, i, s, a, l) {
    var c = i.startColor
      , u = i.endColor
      , p = i.fontSize
      , m = i.indent
      , f = i.fontWeight
      , _ = ue.createElement("div")
      , d = an(r) || Ir(r, "pinType") === "fixed"
      , g = e.indexOf("scroller") !== -1
      , x = d ? ce : r.tagName === "IFRAME" ? r.contentDocument.body : r
      , y = e.indexOf("start") !== -1
      , w = y ? c : u
      , T = "border-color:" + w + ";font-size:" + p + ";color:" + w + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return T += "position:" + ((g || l) && d ? "fixed;" : "absolute;"),
    (g || l || !d) && (T += (n === $e ? vo : bo) + ":" + (s + parseFloat(m)) + "px;"),
    a && (T += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    _._isStart = y,
    _.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
    _.style.cssText = T,
    _.innerText = t || t === 0 ? e + "-" + t : e,
    x.children[0] ? x.insertBefore(_, x.children[0]) : x.appendChild(_),
    _._offset = _["offset" + n.op.d2],
    $i(_, 0, n, y),
    _
}, $i = function(e, t, r, n) {
    var i = {
        display: "block"
    }
      , s = r[n ? "os2" : "p2"]
      , a = r[n ? "p2" : "os2"];
    e._isFlipped = n,
    i[r.a + "Percent"] = n ? -100 : 0,
    i[r.a] = n ? "1px" : 0,
    i["border" + s + An] = 1,
    i["border" + a + An] = 0,
    i[r.p] = t + "px",
    R.set(e, i)
}, K = [], Ws = {}, _i, sa = function() {
    return ot() - Wt > 34 && (_i || (_i = requestAnimationFrame(wr)))
}, _n = function() {
    (!dt || !dt.isPressed || dt.startX > ce.clientWidth) && (ee.cache++,
    dt ? _i || (_i = requestAnimationFrame(wr)) : wr(),
    Wt || cn("scrollStart"),
    Wt = ot())
}, ws = function() {
    Pl = Z.innerWidth,
    Cl = Z.innerHeight
}, Xn = function(e) {
    ee.cache++,
    (e === !0 || !st && !kl && !ue.fullscreenElement && !ue.webkitFullscreenElement && (!Us || Pl !== Z.innerWidth || Math.abs(Z.innerHeight - Cl) > Z.innerHeight * .25)) && ts.restart(!0)
}, ln = {}, Tu = [], Rl = function o() {
    return Xe(te, "scrollEnd", o) || Jr(!0)
}, cn = function(e) {
    return ln[e] && ln[e].map(function(t) {
        return t()
    }) || Tu
}, Mt = [], Ll = function(e) {
    for (var t = 0; t < Mt.length; t += 5)
        (!e || Mt[t + 4] && Mt[t + 4].query === e) && (Mt[t].style.cssText = Mt[t + 1],
        Mt[t].getBBox && Mt[t].setAttribute("transform", Mt[t + 2] || ""),
        Mt[t + 3].uncache = 1)
}, Il = function() {
    return ee.forEach(function(e) {
        return lt(e) && ++e.cacheID && (e.rec = e())
    })
}, So = function(e, t) {
    var r;
    for (ht = 0; ht < K.length; ht++)
        r = K[ht],
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    ei = !0,
    t && Ll(t),
    t || cn("revert")
}, Fl = function(e, t) {
    ee.cache++,
    (t || !pt) && ee.forEach(function(r) {
        return lt(r) && r.cacheID++ && (r.rec = 0)
    }),
    Nt(e) && (Z.history.scrollRestoration = xo = e)
}, pt, on = 0, oa, Su = function() {
    if (oa !== on) {
        var e = oa = on;
        requestAnimationFrame(function() {
            return e === on && Jr(!0)
        })
    }
}, zl = function() {
    ce.appendChild(Pn),
    yo = !dt && Pn.offsetHeight || Z.innerHeight,
    ce.removeChild(Pn)
}, aa = function(e) {
    return mi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
        return t.style.display = e ? "none" : "block"
    })
}, Jr = function(e, t) {
    if (Et = ue.documentElement,
    ce = ue.body,
    go = [Z, ue, Et, ce],
    Wt && !e && !ei) {
        We(te, "scrollEnd", Rl);
        return
    }
    zl(),
    pt = te.isRefreshing = !0,
    ei || Il();
    var r = cn("refreshInit");
    Sl && te.sort(),
    t || So(),
    ee.forEach(function(n) {
        lt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"),
        n(0))
    }),
    K.slice(0).forEach(function(n) {
        return n.refresh()
    }),
    ei = !1,
    K.forEach(function(n) {
        if (n._subPinOffset && n.pin) {
            var i = n.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , s = n.pin[i];
            n.revert(!0, 1),
            n.adjustPinSpacing(n.pin[i] - s),
            n.refresh()
        }
    }),
    Xs = 1,
    aa(!0),
    K.forEach(function(n) {
        var i = cr(n.scroller, n._dir)
          , s = n.vars.end === "max" || n._endClamp && n.end > i
          , a = n._startClamp && n.start >= i;
        (s || a) && n.setPositions(a ? i - 1 : n.start, s ? Math.max(a ? i : n.start + 1, i) : n.end, !0)
    }),
    aa(!1),
    Xs = 0,
    r.forEach(function(n) {
        return n && n.render && n.render(-1)
    }),
    ee.forEach(function(n) {
        lt(n) && (n.smooth && requestAnimationFrame(function() {
            return n.target.style.scrollBehavior = "smooth"
        }),
        n.rec && n(n.rec))
    }),
    Fl(xo, 1),
    ts.pause(),
    on++,
    pt = 2,
    wr(2),
    K.forEach(function(n) {
        return lt(n.vars.onRefresh) && n.vars.onRefresh(n)
    }),
    pt = te.isRefreshing = !1,
    cn("refresh")
}, Gs = 0, Ui = 1, si, wr = function(e) {
    if (e === 2 || !pt && !ei) {
        te.isUpdating = !0,
        si && si.update(0);
        var t = K.length
          , r = ot()
          , n = r - bs >= 50
          , i = t && K[0].scroll();
        if (Ui = Gs > i ? -1 : 1,
        pt || (Gs = i),
        n && (Wt && !ls && r - Wt > 200 && (Wt = 0,
        cn("scrollEnd")),
        Vn = bs,
        bs = r),
        Ui < 0) {
            for (ht = t; ht-- > 0; )
                K[ht] && K[ht].update(0, n);
            Ui = 1
        } else
            for (ht = 0; ht < t; ht++)
                K[ht] && K[ht].update(0, n);
        te.isUpdating = !1
    }
    _i = 0
}, qs = [El, Dl, bo, vo, $t + ii, $t + ti, $t + ni, $t + ri, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Hi = qs.concat([nn, sn, "boxSizing", "max" + An, "max" + wo, "position", $t, ze, ze + ni, ze + ti, ze + ii, ze + ri]), ku = function(e, t, r) {
    jn(r);
    var n = e._gsap;
    if (n.spacerIsNative)
        jn(n.spacerState);
    else if (e._gsap.swappedIn) {
        var i = t.parentNode;
        i && (i.insertBefore(e, t),
        i.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, Ts = function(e, t, r, n) {
    if (!e._gsap.swappedIn) {
        for (var i = qs.length, s = t.style, a = e.style, l; i--; )
            l = qs[i],
            s[l] = r[l];
        s.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (s.display = "inline-block"),
        a[bo] = a[vo] = "auto",
        s.flexBasis = r.flexBasis || "auto",
        s.overflow = "visible",
        s.boxSizing = "border-box",
        s[nn] = rs(e, mt) + Ve,
        s[sn] = rs(e, $e) + Ve,
        s[ze] = a[$t] = a[Dl] = a[El] = "0",
        jn(n),
        a[nn] = a["max" + An] = r[nn],
        a[sn] = a["max" + wo] = r[sn],
        a[ze] = r[ze],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, Cu = /([A-Z])/g, jn = function(e) {
    if (e) {
        var t = e.t.style, r = e.length, n = 0, i, s;
        for ((e.t._gsap || R.core.getCache(e.t)).uncache = 1; n < r; n += 2)
            s = e[n + 1],
            i = e[n],
            s ? t[i] = s : t[i] && t.removeProperty(i.replace(Cu, "-$1").toLowerCase())
    }
}, Ri = function(e) {
    for (var t = Hi.length, r = e.style, n = [], i = 0; i < t; i++)
        n.push(Hi[i], r[Hi[i]]);
    return n.t = e,
    n
}, Pu = function(e, t, r) {
    for (var n = [], i = e.length, s = r ? 8 : 0, a; s < i; s += 2)
        a = e[s],
        n.push(a, a in t ? t[a] : e[s + 1]);
    return n.t = e.t,
    n
}, Xi = {
    left: 0,
    top: 0
}, la = function(e, t, r, n, i, s, a, l, c, u, p, m, f, _) {
    lt(e) && (e = e(l)),
    Nt(e) && e.substr(0, 3) === "max" && (e = m + (e.charAt(4) === "=" ? Vi("0" + e.substr(3), r) : 0));
    var d = f ? f.time() : 0, g, x, y;
    if (f && f.seek(0),
    isNaN(e) || (e = +e),
    Hn(e))
        f && (e = R.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, m, e)),
        a && $i(a, r, n, !0);
    else {
        lt(t) && (t = t(l));
        var w = (e || "0").split(" "), T, k, M, b;
        y = yt(t, l) || ce,
        T = vr(y) || {},
        (!T || !T.left && !T.top) && Ut(y).display === "none" && (b = y.style.display,
        y.style.display = "block",
        T = vr(y),
        b ? y.style.display = b : y.style.removeProperty("display")),
        k = Vi(w[0], T[n.d]),
        M = Vi(w[1] || "0", r),
        e = T[n.p] - c[n.p] - u + k + i - M,
        a && $i(a, M, n, r - M < 20 || a._isStart && M > 20),
        r -= r - M
    }
    if (_ && (l[_] = e || -.001,
    e < 0 && (e = 0)),
    s) {
        var j = e + r
          , C = s._isStart;
        g = "scroll" + n.d2,
        $i(s, j, n, C && j > 20 || !C && (p ? Math.max(ce[g], Et[g]) : s.parentNode[g]) <= j + 1),
        p && (c = vr(a),
        p && (s.style[n.op.p] = c[n.op.p] - n.op.m - s._offset + Ve))
    }
    return f && y && (g = vr(y),
    f.seek(m),
    x = vr(y),
    f._caScrollDist = g[n.p] - x[n.p],
    e = e / f._caScrollDist * m),
    f && f.seek(d),
    f ? e : Math.round(e)
}, ju = /(webkit|moz|length|cssText|inset)/i, ca = function(e, t, r, n) {
    if (e.parentNode !== t) {
        var i = e.style, s, a;
        if (t === ce) {
            e._stOrig = i.cssText,
            a = Ut(e);
            for (s in a)
                !+s && !ju.test(s) && a[s] && typeof i[s] == "string" && s !== "0" && (i[s] = a[s]);
            i.top = r,
            i.left = n
        } else
            i.cssText = e._stOrig;
        R.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, Bl = function(e, t, r) {
    var n = t
      , i = n;
    return function(s) {
        var a = Math.round(e());
        return a !== n && a !== i && Math.abs(a - n) > 3 && Math.abs(a - i) > 3 && (s = a,
        r && r()),
        i = n,
        n = Math.round(s),
        n
    }
}, Li = function(e, t, r) {
    var n = {};
    n[t.p] = "+=" + r,
    R.set(e, n)
}, ua = function(e, t) {
    var r = Yr(e, t)
      , n = "_scroll" + t.p2
      , i = function s(a, l, c, u, p) {
        var m = s.tween
          , f = l.onComplete
          , _ = {};
        c = c || r();
        var d = Bl(r, c, function() {
            m.kill(),
            s.tween = 0
        });
        return p = u && p || 0,
        u = u || a - c,
        m && m.kill(),
        l[n] = a,
        l.inherit = !1,
        l.modifiers = _,
        _[n] = function() {
            return d(c + u * m.ratio + p * m.ratio * m.ratio)
        }
        ,
        l.onUpdate = function() {
            ee.cache++,
            s.tween && wr()
        }
        ,
        l.onComplete = function() {
            s.tween = 0,
            f && f.call(m)
        }
        ,
        m = s.tween = R.to(e, l),
        m
    };
    return e[n] = r,
    r.wheelHandler = function() {
        return i.tween && i.tween.kill() && (i.tween = 0)
    }
    ,
    We(e, "wheel", r.wheelHandler),
    te.isTouch && We(e, "touchmove", r.wheelHandler),
    i
}, te = (function() {
    function o(t, r) {
        gn || o.register(R) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Hs(this),
        this.init(t, r)
    }
    var e = o.prototype;
    return e.init = function(r, n) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !$n) {
            this.update = this.refresh = this.kill = or;
            return
        }
        r = na(Nt(r) || Hn(r) || r.nodeType ? {
            trigger: r
        } : r, Di);
        var i = r, s = i.onUpdate, a = i.toggleClass, l = i.id, c = i.onToggle, u = i.onRefresh, p = i.scrub, m = i.trigger, f = i.pin, _ = i.pinSpacing, d = i.invalidateOnRefresh, g = i.anticipatePin, x = i.onScrubComplete, y = i.onSnapComplete, w = i.once, T = i.snap, k = i.pinReparent, M = i.pinSpacer, b = i.containerAnimation, j = i.fastScrollEnd, C = i.preventOverlaps, P = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? mt : $e, D = !p && p !== 0, N = yt(r.scroller || Z), V = R.core.getCache(N), A = an(N), z = ("pinType" in r ? r.pinType : Ir(N, "pinType") || A && "fixed") === "fixed", Y = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], L = D && r.toggleActions.split(" "), $ = "markers" in r ? r.markers : Di.markers, q = A ? 0 : parseFloat(Ut(N)["border" + P.p2 + An]) || 0, v = this, J = r.onRefreshInit && function() {
            return r.onRefreshInit(v)
        }
        , ge = xu(N, A, P), Ee = yu(N, A), se = 0, Te = 0, Me = 0, ie = Yr(N, P), oe, _e, De, Q, E, I, X, le, xe, S, Ae, Ue, Ze, fe, Ct, Bt, Zt, Re, er, ye, Pt, et, tt, dr, ve, hr, Gt, Cr, Pr, tr, pr, G, mr, _t, gt, xt, _r, gr, Yt;
        if (v._startClamp = v._endClamp = !1,
        v._dir = P,
        g *= 45,
        v.scroller = N,
        v.scroll = b ? b.time.bind(b) : ie,
        Q = ie(),
        v.vars = r,
        n = n || r.animation,
        "refreshPriority" in r && (Sl = 1,
        r.refreshPriority === -9999 && (si = v)),
        V.tweenScroll = V.tweenScroll || {
            top: ua(N, $e),
            left: ua(N, mt)
        },
        v.tweenTo = oe = V.tweenScroll[P.p],
        v.scrubDuration = function(O) {
            mr = Hn(O) && O,
            mr ? G ? G.duration(O) : G = R.to(n, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: mr,
                paused: !0,
                onComplete: function() {
                    return x && x(v)
                }
            }) : (G && G.progress(1).kill(),
            G = 0)
        }
        ,
        n && (n.vars.lazy = !1,
        n._initted && !v.isReverted || n.vars.immediateRender !== !1 && r.immediateRender !== !1 && n.duration() && n.render(0, !0, !0),
        v.animation = n.pause(),
        n.scrollTrigger = v,
        v.scrubDuration(p),
        tr = 0,
        l || (l = n.vars.id)),
        T && ((!Qr(T) || T.push) && (T = {
            snapTo: T
        }),
        "scrollBehavior" in ce.style && R.set(A ? [ce, Et] : N, {
            scrollBehavior: "auto"
        }),
        ee.forEach(function(O) {
            return lt(O) && O.target === (A ? ue.scrollingElement || Et : N) && (O.smooth = !1)
        }),
        De = lt(T.snapTo) ? T.snapTo : T.snapTo === "labels" ? bu(n) : T.snapTo === "labelsDirectional" ? wu(n) : T.directional !== !1 ? function(O, U) {
            return To(T.snapTo)(O, ot() - Te < 500 ? 0 : U.direction)
        }
        : R.utils.snap(T.snapTo),
        _t = T.duration || {
            min: .1,
            max: 2
        },
        _t = Qr(_t) ? Zn(_t.min, _t.max) : Zn(_t, _t),
        gt = R.delayedCall(T.delay || mr / 2 || .1, function() {
            var O = ie()
              , U = ot() - Te < 500
              , F = oe.tween;
            if ((U || Math.abs(v.getVelocity()) < 10) && !F && !ls && se !== O) {
                var H = (O - I) / fe, He = n && !D ? n.totalProgress() : H, re = U ? 0 : (He - pr) / (ot() - Vn) * 1e3 || 0, Le = R.utils.clamp(-H, 1 - H, mn(re / 2) * re / .185), rt = H + (T.inertia === !1 ? 0 : Le), Ne, be, he = T, qt = he.onStart, Se = he.onInterrupt, jt = he.onComplete;
                if (Ne = De(rt, v),
                Hn(Ne) || (Ne = rt),
                be = Math.max(0, Math.round(I + Ne * fe)),
                O <= X && O >= I && be !== O) {
                    if (F && !F._initted && F.data <= mn(be - O))
                        return;
                    T.inertia === !1 && (Le = Ne - H),
                    oe(be, {
                        duration: _t(mn(Math.max(mn(rt - He), mn(Ne - He)) * .185 / re / .05 || 0)),
                        ease: T.ease || "power3",
                        data: mn(be - O),
                        onInterrupt: function() {
                            return gt.restart(!0) && Se && pn(v, Se)
                        },
                        onComplete: function() {
                            v.update(),
                            se = ie(),
                            n && !D && (G ? G.resetTo("totalProgress", Ne, n._tTime / n._tDur) : n.progress(Ne)),
                            tr = pr = n && !D ? n.totalProgress() : v.progress,
                            y && y(v),
                            jt && pn(v, jt)
                        }
                    }, O, Le * fe, be - O - Le * fe),
                    qt && pn(v, qt, oe.tween)
                }
            } else
                v.isActive && se !== O && gt.restart(!0)
        }).pause()),
        l && (Ws[l] = v),
        m = v.trigger = yt(m || f !== !0 && f),
        Yt = m && m._gsap && m._gsap.stRevert,
        Yt && (Yt = Yt(v)),
        f = f === !0 ? m : yt(f),
        Nt(a) && (a = {
            targets: m,
            className: a
        }),
        f && (_ === !1 || _ === $t || (_ = !_ && f.parentNode && f.parentNode.style && Ut(f.parentNode).display === "flex" ? !1 : ze),
        v.pin = f,
        _e = R.core.getCache(f),
        _e.spacer ? Ct = _e.pinState : (M && (M = yt(M),
        M && !M.nodeType && (M = M.current || M.nativeElement),
        _e.spacerIsNative = !!M,
        M && (_e.spacerState = Ri(M))),
        _e.spacer = Re = M || ue.createElement("div"),
        Re.classList.add("pin-spacer"),
        l && Re.classList.add("pin-spacer-" + l),
        _e.pinState = Ct = Ri(f)),
        r.force3D !== !1 && R.set(f, {
            force3D: !0
        }),
        v.spacer = Re = _e.spacer,
        Pr = Ut(f),
        dr = Pr[_ + P.os2],
        ye = R.getProperty(f),
        Pt = R.quickSetter(f, P.a, Ve),
        Ts(f, Re, Pr),
        Zt = Ri(f)),
        $) {
            Ue = Qr($) ? na($, ia) : ia,
            S = Ai("scroller-start", l, N, P, Ue, 0),
            Ae = Ai("scroller-end", l, N, P, Ue, 0, S),
            er = S["offset" + P.op.d2];
            var Ur = yt(Ir(N, "content") || N);
            le = this.markerStart = Ai("start", l, Ur, P, Ue, er, 0, b),
            xe = this.markerEnd = Ai("end", l, Ur, P, Ue, er, 0, b),
            b && (gr = R.quickSetter([le, xe], P.a, Ve)),
            !z && !(ur.length && Ir(N, "fixedMarkers") === !0) && (vu(A ? ce : N),
            R.set([S, Ae], {
                force3D: !0
            }),
            hr = R.quickSetter(S, P.a, Ve),
            Cr = R.quickSetter(Ae, P.a, Ve))
        }
        if (b) {
            var W = b.vars.onUpdate
              , B = b.vars.onUpdateParams;
            b.eventCallback("onUpdate", function() {
                v.update(0, 0, 1),
                W && W.apply(b, B || [])
            })
        }
        if (v.previous = function() {
            return K[K.indexOf(v) - 1]
        }
        ,
        v.next = function() {
            return K[K.indexOf(v) + 1]
        }
        ,
        v.revert = function(O, U) {
            if (!U)
                return v.kill(!0);
            var F = O !== !1 || !v.enabled
              , H = st;
            F !== v.isReverted && (F && (xt = Math.max(ie(), v.scroll.rec || 0),
            Me = v.progress,
            _r = n && n.progress()),
            le && [le, xe, S, Ae].forEach(function(He) {
                return He.style.display = F ? "none" : "block"
            }),
            F && (st = v,
            v.update(F)),
            f && (!k || !v.isActive) && (F ? ku(f, Re, Ct) : Ts(f, Re, Ut(f), ve)),
            F || v.update(F),
            st = H,
            v.isReverted = F)
        }
        ,
        v.refresh = function(O, U, F, H) {
            if (!((st || !v.enabled) && !U)) {
                if (f && O && Wt) {
                    We(o, "scrollEnd", Rl);
                    return
                }
                !pt && J && J(v),
                st = v,
                oe.tween && !F && (oe.tween.kill(),
                oe.tween = 0),
                G && G.pause(),
                d && n && (n.revert({
                    kill: !1
                }).invalidate(),
                n.getChildren ? n.getChildren(!0, !0, !1).forEach(function(jr) {
                    return jr.vars.immediateRender && jr.render(0, !0, !0)
                }) : n.vars.immediateRender && n.render(0, !0, !0)),
                v.isReverted || v.revert(!0, !0),
                v._subPinOffset = !1;
                var He = ge(), re = Ee(), Le = b ? b.duration() : cr(N, P), rt = fe <= .01 || !fe, Ne = 0, be = H || 0, he = Qr(F) ? F.end : r.end, qt = r.endTrigger || m, Se = Qr(F) ? F.start : r.start || (r.start === 0 || !m ? 0 : f ? "0 0" : "0 100%"), jt = v.pinnedContainer = r.pinnedContainer && yt(r.pinnedContainer, v), rr = m && Math.max(0, K.indexOf(v)) || 0, qe = rr, Qe, nt, Hr, Ti, it, Ye, nr, us, Oo, Rn, ir, Ln, Si;
                for ($ && Qr(F) && (Ln = R.getProperty(S, P.p),
                Si = R.getProperty(Ae, P.p)); qe-- > 0; )
                    Ye = K[qe],
                    Ye.end || Ye.refresh(0, 1) || (st = v),
                    nr = Ye.pin,
                    nr && (nr === m || nr === f || nr === jt) && !Ye.isReverted && (Rn || (Rn = []),
                    Rn.unshift(Ye),
                    Ye.revert(!0, !0)),
                    Ye !== K[qe] && (rr--,
                    qe--);
                for (lt(Se) && (Se = Se(v)),
                Se = Zo(Se, "start", v),
                I = la(Se, m, He, P, ie(), le, S, v, re, q, z, Le, b, v._startClamp && "_startClamp") || (f ? -.001 : 0),
                lt(he) && (he = he(v)),
                Nt(he) && !he.indexOf("+=") && (~he.indexOf(" ") ? he = (Nt(Se) ? Se.split(" ")[0] : "") + he : (Ne = Vi(he.substr(2), He),
                he = Nt(Se) ? Se : (b ? R.utils.mapRange(0, b.duration(), b.scrollTrigger.start, b.scrollTrigger.end, I) : I) + Ne,
                qt = m)),
                he = Zo(he, "end", v),
                X = Math.max(I, la(he || (qt ? "100% 0" : Le), qt, He, P, ie() + Ne, xe, Ae, v, re, q, z, Le, b, v._endClamp && "_endClamp")) || -.001,
                Ne = 0,
                qe = rr; qe--; )
                    Ye = K[qe] || {},
                    nr = Ye.pin,
                    nr && Ye.start - Ye._pinPush <= I && !b && Ye.end > 0 && (Qe = Ye.end - (v._startClamp ? Math.max(0, Ye.start) : Ye.start),
                    (nr === m && Ye.start - Ye._pinPush < I || nr === jt) && isNaN(Se) && (Ne += Qe * (1 - Ye.progress)),
                    nr === f && (be += Qe));
                if (I += Ne,
                X += Ne,
                v._startClamp && (v._startClamp += Ne),
                v._endClamp && !pt && (v._endClamp = X || -.001,
                X = Math.min(X, cr(N, P))),
                fe = X - I || (I -= .01) && .001,
                rt && (Me = R.utils.clamp(0, 1, R.utils.normalize(I, X, xt))),
                v._pinPush = be,
                le && Ne && (Qe = {},
                Qe[P.a] = "+=" + Ne,
                jt && (Qe[P.p] = "-=" + ie()),
                R.set([le, xe], Qe)),
                f && !(Xs && v.end >= cr(N, P)))
                    Qe = Ut(f),
                    Ti = P === $e,
                    Hr = ie(),
                    et = parseFloat(ye(P.a)) + be,
                    !Le && X > 1 && (ir = (A ? ue.scrollingElement || Et : N).style,
                    ir = {
                        style: ir,
                        value: ir["overflow" + P.a.toUpperCase()]
                    },
                    A && Ut(ce)["overflow" + P.a.toUpperCase()] !== "scroll" && (ir.style["overflow" + P.a.toUpperCase()] = "scroll")),
                    Ts(f, Re, Qe),
                    Zt = Ri(f),
                    nt = vr(f, !0),
                    us = z && Yr(N, Ti ? mt : $e)(),
                    _ ? (ve = [_ + P.os2, fe + be + Ve],
                    ve.t = Re,
                    qe = _ === ze ? rs(f, P) + fe + be : 0,
                    qe && (ve.push(P.d, qe + Ve),
                    Re.style.flexBasis !== "auto" && (Re.style.flexBasis = qe + Ve)),
                    jn(ve),
                    jt && K.forEach(function(jr) {
                        jr.pin === jt && jr.vars.pinSpacing !== !1 && (jr._subPinOffset = !0)
                    }),
                    z && ie(xt)) : (qe = rs(f, P),
                    qe && Re.style.flexBasis !== "auto" && (Re.style.flexBasis = qe + Ve)),
                    z && (it = {
                        top: nt.top + (Ti ? Hr - I : us) + Ve,
                        left: nt.left + (Ti ? us : Hr - I) + Ve,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    it[nn] = it["max" + An] = Math.ceil(nt.width) + Ve,
                    it[sn] = it["max" + wo] = Math.ceil(nt.height) + Ve,
                    it[$t] = it[$t + ni] = it[$t + ti] = it[$t + ii] = it[$t + ri] = "0",
                    it[ze] = Qe[ze],
                    it[ze + ni] = Qe[ze + ni],
                    it[ze + ti] = Qe[ze + ti],
                    it[ze + ii] = Qe[ze + ii],
                    it[ze + ri] = Qe[ze + ri],
                    Bt = Pu(Ct, it, k),
                    pt && ie(0)),
                    n ? (Oo = n._initted,
                    ys(1),
                    n.render(n.duration(), !0, !0),
                    tt = ye(P.a) - et + fe + be,
                    Gt = Math.abs(fe - tt) > 1,
                    z && Gt && Bt.splice(Bt.length - 2, 2),
                    n.render(0, !0, !0),
                    Oo || n.invalidate(!0),
                    n.parent || n.totalTime(n.totalTime()),
                    ys(0)) : tt = fe,
                    ir && (ir.value ? ir.style["overflow" + P.a.toUpperCase()] = ir.value : ir.style.removeProperty("overflow-" + P.a));
                else if (m && ie() && !b)
                    for (nt = m.parentNode; nt && nt !== ce; )
                        nt._pinOffset && (I -= nt._pinOffset,
                        X -= nt._pinOffset),
                        nt = nt.parentNode;
                Rn && Rn.forEach(function(jr) {
                    return jr.revert(!1, !0)
                }),
                v.start = I,
                v.end = X,
                Q = E = pt ? xt : ie(),
                !b && !pt && (Q < xt && ie(xt),
                v.scroll.rec = 0),
                v.revert(!1, !0),
                Te = ot(),
                gt && (se = -1,
                gt.restart(!0)),
                st = 0,
                n && D && (n._initted || _r) && n.progress() !== _r && n.progress(_r || 0, !0).render(n.time(), !0, !0),
                (rt || Me !== v.progress || b || d || n && !n._initted) && (n && !D && (n._initted || Me || n.vars.immediateRender !== !1) && n.totalProgress(b && I < -.001 && !Me ? R.utils.normalize(I, X, 0) : Me, !0),
                v.progress = rt || (Q - I) / fe === Me ? 0 : Me),
                f && _ && (Re._pinOffset = Math.round(v.progress * tt)),
                G && G.invalidate(),
                isNaN(Ln) || (Ln -= R.getProperty(S, P.p),
                Si -= R.getProperty(Ae, P.p),
                Li(S, P, Ln),
                Li(le, P, Ln - (H || 0)),
                Li(Ae, P, Si),
                Li(xe, P, Si - (H || 0))),
                rt && !pt && v.update(),
                u && !pt && !Ze && (Ze = !0,
                u(v),
                Ze = !1)
            }
        }
        ,
        v.getVelocity = function() {
            return (ie() - E) / (ot() - Vn) * 1e3 || 0
        }
        ,
        v.endAnimation = function() {
            zn(v.callbackAnimation),
            n && (G ? G.progress(1) : n.paused() ? D || zn(n, v.direction < 0, 1) : zn(n, n.reversed()))
        }
        ,
        v.labelToScroll = function(O) {
            return n && n.labels && (I || v.refresh() || I) + n.labels[O] / n.duration() * fe || 0
        }
        ,
        v.getTrailing = function(O) {
            var U = K.indexOf(v)
              , F = v.direction > 0 ? K.slice(0, U).reverse() : K.slice(U + 1);
            return (Nt(O) ? F.filter(function(H) {
                return H.vars.preventOverlaps === O
            }) : F).filter(function(H) {
                return v.direction > 0 ? H.end <= I : H.start >= X
            })
        }
        ,
        v.update = function(O, U, F) {
            if (!(b && !F && !O)) {
                var H = pt === !0 ? xt : v.scroll(), He = O ? 0 : (H - I) / fe, re = He < 0 ? 0 : He > 1 ? 1 : He || 0, Le = v.progress, rt, Ne, be, he, qt, Se, jt, rr;
                if (U && (E = Q,
                Q = b ? ie() : H,
                T && (pr = tr,
                tr = n && !D ? n.totalProgress() : re)),
                g && f && !st && !Mi && Wt && (!re && I < H + (H - E) / (ot() - Vn) * g ? re = 1e-4 : re === 1 && X > H + (H - E) / (ot() - Vn) * g && (re = .9999)),
                re !== Le && v.enabled) {
                    if (rt = v.isActive = !!re && re < 1,
                    Ne = !!Le && Le < 1,
                    Se = rt !== Ne,
                    qt = Se || !!re != !!Le,
                    v.direction = re > Le ? 1 : -1,
                    v.progress = re,
                    qt && !st && (be = re && !Le ? 0 : re === 1 ? 1 : Le === 1 ? 2 : 3,
                    D && (he = !Se && L[be + 1] !== "none" && L[be + 1] || L[be],
                    rr = n && (he === "complete" || he === "reset" || he in n))),
                    C && (Se || rr) && (rr || p || !n) && (lt(C) ? C(v) : v.getTrailing(C).forEach(function(Hr) {
                        return Hr.endAnimation()
                    })),
                    D || (G && !st && !Mi ? (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start),
                    G.resetTo ? G.resetTo("totalProgress", re, n._tTime / n._tDur) : (G.vars.totalProgress = re,
                    G.invalidate().restart())) : n && n.totalProgress(re, !!(st && (Te || O)))),
                    f) {
                        if (O && _ && (Re.style[_ + P.os2] = dr),
                        !z)
                            Pt(Un(et + tt * re));
                        else if (qt) {
                            if (jt = !O && re > Le && X + 1 > H && H + 1 >= cr(N, P),
                            k)
                                if (!O && (rt || jt)) {
                                    var qe = vr(f, !0)
                                      , Qe = H - I;
                                    ca(f, ce, qe.top + (P === $e ? Qe : 0) + Ve, qe.left + (P === $e ? 0 : Qe) + Ve)
                                } else
                                    ca(f, Re);
                            jn(rt || jt ? Bt : Zt),
                            Gt && re < 1 && rt || Pt(et + (re === 1 && !jt ? tt : 0))
                        }
                    }
                    T && !oe.tween && !st && !Mi && gt.restart(!0),
                    a && (Se || w && re && (re < 1 || !vs)) && mi(a.targets).forEach(function(Hr) {
                        return Hr.classList[rt || w ? "add" : "remove"](a.className)
                    }),
                    s && !D && !O && s(v),
                    qt && !st ? (D && (rr && (he === "complete" ? n.pause().totalProgress(1) : he === "reset" ? n.restart(!0).pause() : he === "restart" ? n.restart(!0) : n[he]()),
                    s && s(v)),
                    (Se || !vs) && (c && Se && pn(v, c),
                    Y[be] && pn(v, Y[be]),
                    w && (re === 1 ? v.kill(!1, 1) : Y[be] = 0),
                    Se || (be = re === 1 ? 1 : 3,
                    Y[be] && pn(v, Y[be]))),
                    j && !rt && Math.abs(v.getVelocity()) > (Hn(j) ? j : 2500) && (zn(v.callbackAnimation),
                    G ? G.progress(1) : zn(n, he === "reverse" ? 1 : !re, 1))) : D && s && !st && s(v)
                }
                if (Cr) {
                    var nt = b ? H / b.duration() * (b._caScrollDist || 0) : H;
                    hr(nt + (S._isFlipped ? 1 : 0)),
                    Cr(nt)
                }
                gr && gr(-H / b.duration() * (b._caScrollDist || 0))
            }
        }
        ,
        v.enable = function(O, U) {
            v.enabled || (v.enabled = !0,
            We(N, "resize", Xn),
            A || We(N, "scroll", _n),
            J && We(o, "refreshInit", J),
            O !== !1 && (v.progress = Me = 0,
            Q = E = se = ie()),
            U !== !1 && v.refresh())
        }
        ,
        v.getTween = function(O) {
            return O && oe ? oe.tween : G
        }
        ,
        v.setPositions = function(O, U, F, H) {
            if (b) {
                var He = b.scrollTrigger
                  , re = b.duration()
                  , Le = He.end - He.start;
                O = He.start + Le * O / re,
                U = He.start + Le * U / re
            }
            v.refresh(!1, !1, {
                start: ea(O, F && !!v._startClamp),
                end: ea(U, F && !!v._endClamp)
            }, H),
            v.update()
        }
        ,
        v.adjustPinSpacing = function(O) {
            if (ve && O) {
                var U = ve.indexOf(P.d) + 1;
                ve[U] = parseFloat(ve[U]) + O + Ve,
                ve[1] = parseFloat(ve[1]) + O + Ve,
                jn(ve)
            }
        }
        ,
        v.disable = function(O, U) {
            if (O !== !1 && v.revert(!0, !0),
            v.enabled && (v.enabled = v.isActive = !1,
            U || G && G.pause(),
            xt = 0,
            _e && (_e.uncache = 1),
            J && Xe(o, "refreshInit", J),
            gt && (gt.pause(),
            oe.tween && oe.tween.kill() && (oe.tween = 0)),
            !A)) {
                for (var F = K.length; F--; )
                    if (K[F].scroller === N && K[F] !== v)
                        return;
                Xe(N, "resize", Xn),
                A || Xe(N, "scroll", _n)
            }
        }
        ,
        v.kill = function(O, U) {
            v.disable(O, U),
            G && !U && G.kill(),
            l && delete Ws[l];
            var F = K.indexOf(v);
            F >= 0 && K.splice(F, 1),
            F === ht && Ui > 0 && ht--,
            F = 0,
            K.forEach(function(H) {
                return H.scroller === v.scroller && (F = 1)
            }),
            F || pt || (v.scroll.rec = 0),
            n && (n.scrollTrigger = null,
            O && n.revert({
                kill: !1
            }),
            U || n.kill()),
            le && [le, xe, S, Ae].forEach(function(H) {
                return H.parentNode && H.parentNode.removeChild(H)
            }),
            si === v && (si = 0),
            f && (_e && (_e.uncache = 1),
            F = 0,
            K.forEach(function(H) {
                return H.pin === f && F++
            }),
            F || (_e.spacer = 0)),
            r.onKill && r.onKill(v)
        }
        ,
        K.push(v),
        v.enable(!1, !1),
        Yt && Yt(v),
        n && n.add && !fe) {
            var ae = v.update;
            v.update = function() {
                v.update = ae,
                ee.cache++,
                I || X || v.refresh()
            }
            ,
            R.delayedCall(.01, v.update),
            fe = .01,
            I = X = 0
        } else
            v.refresh();
        f && Su()
    }
    ,
    o.register = function(r) {
        return gn || (R = r || Ml(),
        jl() && window.document && o.enable(),
        gn = $n),
        gn
    }
    ,
    o.defaults = function(r) {
        if (r)
            for (var n in r)
                Di[n] = r[n];
        return Di
    }
    ,
    o.disable = function(r, n) {
        $n = 0,
        K.forEach(function(s) {
            return s[n ? "kill" : "disable"](r)
        }),
        Xe(Z, "wheel", _n),
        Xe(ue, "scroll", _n),
        clearInterval(ji),
        Xe(ue, "touchcancel", or),
        Xe(ce, "touchstart", or),
        Oi(Xe, ue, "pointerdown,touchstart,mousedown", ta),
        Oi(Xe, ue, "pointerup,touchend,mouseup", ra),
        ts.kill(),
        Ni(Xe);
        for (var i = 0; i < ee.length; i += 3)
            Ei(Xe, ee[i], ee[i + 1]),
            Ei(Xe, ee[i], ee[i + 2])
    }
    ,
    o.enable = function() {
        if (Z = window,
        ue = document,
        Et = ue.documentElement,
        ce = ue.body,
        R) {
            if (mi = R.utils.toArray,
            Zn = R.utils.clamp,
            Hs = R.core.context || or,
            ys = R.core.suppressOverwrites || or,
            xo = Z.history.scrollRestoration || "auto",
            Gs = Z.pageYOffset || 0,
            R.core.globals("ScrollTrigger", o),
            ce) {
                $n = 1,
                Pn = document.createElement("div"),
                Pn.style.height = "100vh",
                Pn.style.position = "absolute",
                zl(),
                gu(),
                Fe.register(R),
                o.isTouch = Fe.isTouch,
                Mr = Fe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                Us = Fe.isTouch === 1,
                We(Z, "wheel", _n),
                go = [Z, ue, Et, ce],
                R.matchMedia ? (o.matchMedia = function(u) {
                    var p = R.matchMedia(), m;
                    for (m in u)
                        p.add(m, u[m]);
                    return p
                }
                ,
                R.addEventListener("matchMediaInit", function() {
                    Il(),
                    So()
                }),
                R.addEventListener("matchMediaRevert", function() {
                    return Ll()
                }),
                R.addEventListener("matchMedia", function() {
                    Jr(0, 1),
                    cn("matchMedia")
                }),
                R.matchMedia().add("(orientation: portrait)", function() {
                    return ws(),
                    ws
                })) : console.warn("Requires GSAP 3.11.0 or later"),
                ws(),
                We(ue, "scroll", _n);
                var r = ce.hasAttribute("style"), n = ce.style, i = n.borderTopStyle, s = R.core.Animation.prototype, a, l;
                for (s.revert || Object.defineProperty(s, "revert", {
                    value: function() {
                        return this.time(-.01, !0)
                    }
                }),
                n.borderTopStyle = "solid",
                a = vr(ce),
                $e.m = Math.round(a.top + $e.sc()) || 0,
                mt.m = Math.round(a.left + mt.sc()) || 0,
                i ? n.borderTopStyle = i : n.removeProperty("border-top-style"),
                r || (ce.setAttribute("style", ""),
                ce.removeAttribute("style")),
                ji = setInterval(sa, 250),
                R.delayedCall(.5, function() {
                    return Mi = 0
                }),
                We(ue, "touchcancel", or),
                We(ce, "touchstart", or),
                Oi(We, ue, "pointerdown,touchstart,mousedown", ta),
                Oi(We, ue, "pointerup,touchend,mouseup", ra),
                $s = R.utils.checkPrefix("transform"),
                Hi.push($s),
                gn = ot(),
                ts = R.delayedCall(.2, Jr).pause(),
                xn = [ue, "visibilitychange", function() {
                    var u = Z.innerWidth
                      , p = Z.innerHeight;
                    ue.hidden ? (Ko = u,
                    Jo = p) : (Ko !== u || Jo !== p) && Xn()
                }
                , ue, "DOMContentLoaded", Jr, Z, "load", Jr, Z, "resize", Xn],
                Ni(We),
                K.forEach(function(u) {
                    return u.enable(0, 1)
                }),
                l = 0; l < ee.length; l += 3)
                    Ei(Xe, ee[l], ee[l + 1]),
                    Ei(Xe, ee[l], ee[l + 2])
            } else if (ue) {
                var c = function u() {
                    o.enable(),
                    ue.removeEventListener("DOMContentLoaded", u)
                };
                ue.addEventListener("DOMContentLoaded", c)
            }
        }
    }
    ,
    o.config = function(r) {
        "limitCallbacks" in r && (vs = !!r.limitCallbacks);
        var n = r.syncInterval;
        n && clearInterval(ji) || (ji = n) && setInterval(sa, n),
        "ignoreMobileResize" in r && (Us = o.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents" in r && (Ni(Xe) || Ni(We, r.autoRefreshEvents || "none"),
        kl = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    o.scrollerProxy = function(r, n) {
        var i = yt(r)
          , s = ee.indexOf(i)
          , a = an(i);
        ~s && ee.splice(s, a ? 6 : 2),
        n && (a ? ur.unshift(Z, n, ce, n, Et, n) : ur.unshift(i, n))
    }
    ,
    o.clearMatchMedia = function(r) {
        K.forEach(function(n) {
            return n._ctx && n._ctx.query === r && n._ctx.kill(!0, !0)
        })
    }
    ,
    o.isInViewport = function(r, n, i) {
        var s = (Nt(r) ? yt(r) : r).getBoundingClientRect()
          , a = s[i ? nn : sn] * n || 0;
        return i ? s.right - a > 0 && s.left + a < Z.innerWidth : s.bottom - a > 0 && s.top + a < Z.innerHeight
    }
    ,
    o.positionInViewport = function(r, n, i) {
        Nt(r) && (r = yt(r));
        var s = r.getBoundingClientRect()
          , a = s[i ? nn : sn]
          , l = n == null ? a / 2 : n in ns ? ns[n] * a : ~n.indexOf("%") ? parseFloat(n) * a / 100 : parseFloat(n) || 0;
        return i ? (s.left + l) / Z.innerWidth : (s.top + l) / Z.innerHeight
    }
    ,
    o.killAll = function(r) {
        if (K.slice(0).forEach(function(i) {
            return i.vars.id !== "ScrollSmoother" && i.kill()
        }),
        r !== !0) {
            var n = ln.killAll || [];
            ln = {},
            n.forEach(function(i) {
                return i()
            })
        }
    }
    ,
    o
}
)();
te.version = "3.15.0";
te.saveStyles = function(o) {
    return o ? mi(o).forEach(function(e) {
        if (e && e.style) {
            var t = Mt.indexOf(e);
            t >= 0 && Mt.splice(t, 5),
            Mt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), R.core.getCache(e), Hs())
        }
    }) : Mt
}
;
te.revert = function(o, e) {
    return So(!o, e)
}
;
te.create = function(o, e) {
    return new te(o,e)
}
;
te.refresh = function(o) {
    return o ? Xn(!0) : (gn || te.register()) && Jr(!0)
}
;
te.update = function(o) {
    return ++ee.cache && wr(o === !0 ? 2 : 0)
}
;
te.clearScrollMemory = Fl;
te.maxScroll = function(o, e) {
    return cr(o, e ? mt : $e)
}
;
te.getScrollFunc = function(o, e) {
    return Yr(yt(o), e ? mt : $e)
}
;
te.getById = function(o) {
    return Ws[o]
}
;
te.getAll = function() {
    return K.filter(function(o) {
        return o.vars.id !== "ScrollSmoother"
    })
}
;
te.isScrolling = function() {
    return !!Wt
}
;
te.snapDirectional = To;
te.addEventListener = function(o, e) {
    var t = ln[o] || (ln[o] = []);
    ~t.indexOf(e) || t.push(e)
}
;
te.removeEventListener = function(o, e) {
    var t = ln[o]
      , r = t && t.indexOf(e);
    r >= 0 && t.splice(r, 1)
}
;
te.batch = function(o, e) {
    var t = [], r = {}, n = e.interval || .016, i = e.batchMax || 1e9, s = function(c, u) {
        var p = []
          , m = []
          , f = R.delayedCall(n, function() {
            u(p, m),
            p = [],
            m = []
        }).pause();
        return function(_) {
            p.length || f.restart(!0),
            p.push(_.trigger),
            m.push(_),
            i <= p.length && f.progress(1)
        }
    }, a;
    for (a in e)
        r[a] = a.substr(0, 2) === "on" && lt(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
    return lt(i) && (i = i(),
    We(te, "refresh", function() {
        return i = e.batchMax()
    })),
    mi(o).forEach(function(l) {
        var c = {};
        for (a in r)
            c[a] = r[a];
        c.trigger = l,
        t.push(te.create(c))
    }),
    t
}
;
var fa = function(e, t, r, n) {
    return t > n ? e(n) : t < 0 && e(0),
    r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
}, Ss = function o(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Fe.isTouch ? " pinch-zoom" : "") : "none",
    e === Et && o(ce, t)
}, Ii = {
    auto: 1,
    scroll: 1
}, Mu = function(e) {
    var t = e.event, r = e.target, n = e.axis, i = (t.changedTouches ? t.changedTouches[0] : t).target, s = i._gsap || R.core.getCache(i), a = ot(), l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
        for (; i && i !== ce && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Ii[(l = Ut(i)).overflowY] || Ii[l.overflowX])); )
            i = i.parentNode;
        s._isScroll = i && i !== r && !an(i) && (Ii[(l = Ut(i)).overflowY] || Ii[l.overflowX]),
        s._isScrollT = a
    }
    (s._isScroll || n === "x") && (t.stopPropagation(),
    t._gsapAllow = !0)
}, Yl = function(e, t, r, n) {
    return Fe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: n = n && Mu,
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function() {
            return r && We(ue, Fe.eventTypes[0], ha, !1, !0)
        },
        onDisable: function() {
            return Xe(ue, Fe.eventTypes[0], ha, !0)
        }
    })
}, Nu = /(input|label|select|textarea)/i, da, ha = function(e) {
    var t = Nu.test(e.target.tagName);
    (t || da) && (e._gsapAllow = !0,
    da = t)
}, Ou = function(e) {
    Qr(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var t = e, r = t.normalizeScrollX, n = t.momentum, i = t.allowNestedScroll, s = t.onRelease, a, l, c = yt(e.target) || Et, u = R.core.globals().ScrollSmoother, p = u && u.get(), m = Mr && (e.content && yt(e.content) || p && e.content !== !1 && !p.smooth() && p.content()), f = Yr(c, $e), _ = Yr(c, mt), d = 1, g = (Fe.isTouch && Z.visualViewport ? Z.visualViewport.scale * Z.visualViewport.width : Z.outerWidth) / Z.innerWidth, x = 0, y = lt(n) ? function() {
        return n(a)
    }
    : function() {
        return n || 2.8
    }
    , w, T, k = Yl(c, e.type, !0, i), M = function() {
        return T = !1
    }, b = or, j = or, C = function() {
        l = cr(c, $e),
        j = Zn(Mr ? 1 : 0, l),
        r && (b = Zn(0, cr(c, mt))),
        w = on
    }, P = function() {
        m._gsap.y = Un(parseFloat(m._gsap.y) + f.offset) + "px",
        m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)",
        f.offset = f.cacheID = 0
    }, D = function() {
        if (T) {
            requestAnimationFrame(M);
            var $ = Un(a.deltaY / 2)
              , q = j(f.v - $);
            if (m && q !== f.v + f.offset) {
                f.offset = q - f.v;
                var v = Un((parseFloat(m && m._gsap.y) || 0) - f.offset);
                m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + v + ", 0, 1)",
                m._gsap.y = v + "px",
                f.cacheID = ee.cache,
                wr()
            }
            return !0
        }
        f.offset && P(),
        T = !0
    }, N, V, A, z, Y = function() {
        C(),
        N.isActive() && N.vars.scrollY > l && (f() > l ? N.progress(1) && f(l) : N.resetTo("scrollY", l))
    };
    return m && R.set(m, {
        y: "+=0"
    }),
    e.ignoreCheck = function(L) {
        return Mr && L.type === "touchmove" && D() || d > 1.05 && L.type !== "touchstart" || a.isGesturing || L.touches && L.touches.length > 1
    }
    ,
    e.onPress = function() {
        T = !1;
        var L = d;
        d = Un((Z.visualViewport && Z.visualViewport.scale || 1) / g),
        N.pause(),
        L !== d && Ss(c, d > 1.01 ? !0 : r ? !1 : "x"),
        V = _(),
        A = f(),
        C(),
        w = on
    }
    ,
    e.onRelease = e.onGestureStart = function(L, $) {
        if (f.offset && P(),
        !$)
            z.restart(!0);
        else {
            ee.cache++;
            var q = y(), v, J;
            r && (v = _(),
            J = v + q * .05 * -L.velocityX / .227,
            q *= fa(_, v, J, cr(c, mt)),
            N.vars.scrollX = b(J)),
            v = f(),
            J = v + q * .05 * -L.velocityY / .227,
            q *= fa(f, v, J, cr(c, $e)),
            N.vars.scrollY = j(J),
            N.invalidate().duration(q).play(.01),
            (Mr && N.vars.scrollY >= l || v >= l - 1) && R.to({}, {
                onUpdate: Y,
                duration: q
            })
        }
        s && s(L)
    }
    ,
    e.onWheel = function() {
        N._ts && N.pause(),
        ot() - x > 1e3 && (w = 0,
        x = ot())
    }
    ,
    e.onChange = function(L, $, q, v, J) {
        if (on !== w && C(),
        $ && r && _(b(v[2] === $ ? V + (L.startX - L.x) : _() + $ - v[1])),
        q) {
            f.offset && P();
            var ge = J[2] === q
              , Ee = ge ? A + L.startY - L.y : f() + q - J[1]
              , se = j(Ee);
            ge && Ee !== se && (A += se - Ee),
            f(se)
        }
        (q || $) && wr()
    }
    ,
    e.onEnable = function() {
        Ss(c, r ? !1 : "x"),
        te.addEventListener("refresh", Y),
        We(Z, "resize", Y),
        f.smooth && (f.target.style.scrollBehavior = "auto",
        f.smooth = _.smooth = !1),
        k.enable()
    }
    ,
    e.onDisable = function() {
        Ss(c, !0),
        Xe(Z, "resize", Y),
        te.removeEventListener("refresh", Y),
        k.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    a = new Fe(e),
    a.iOS = Mr,
    Mr && !f() && f(1),
    Mr && R.ticker.add(or),
    z = a._dc,
    N = R.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Bl(f, f(), function() {
                return N.pause()
            })
        },
        onUpdate: wr,
        onComplete: z.vars.onComplete
    }),
    a
};
te.sort = function(o) {
    if (lt(o))
        return K.sort(o);
    var e = Z.pageYOffset || 0;
    return te.getAll().forEach(function(t) {
        return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + Z.innerHeight
    }),
    K.sort(o || function(t, r) {
        return (t.vars.refreshPriority || 0) * -1e6 + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((r.vars.containerAnimation ? 1e6 : r._sortY) + (r.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
te.observe = function(o) {
    return new Fe(o)
}
;
te.normalizeScroll = function(o) {
    if (typeof o > "u")
        return dt;
    if (o === !0 && dt)
        return dt.enable();
    if (o === !1) {
        dt && dt.kill(),
        dt = o;
        return
    }
    var e = o instanceof Fe ? o : Ou(o);
    return dt && dt.target === e.target && dt.kill(),
    an(e.target) && (dt = e),
    e
}
;
te.core = {
    _getVelocityProp: Vs,
    _inputObserver: Yl,
    _scrollers: ee,
    _proxies: ur,
    bridge: {
        ss: function() {
            Wt || cn("scrollStart"),
            Wt = ot()
        },
        ref: function() {
            return st
        }
    }
};
Ml() && R.registerPlugin(te);
function Eu(o) {
    return Object.prototype.toString.call(o) === "[object Object]"
}
function pa(o) {
    return Eu(o) || Array.isArray(o)
}
function Du() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
function ko(o, e) {
    const t = Object.keys(o)
      , r = Object.keys(e);
    if (t.length !== r.length)
        return !1;
    const n = JSON.stringify(Object.keys(o.breakpoints || {}))
      , i = JSON.stringify(Object.keys(e.breakpoints || {}));
    return n !== i ? !1 : t.every(s => {
        const a = o[s]
          , l = e[s];
        return typeof a == "function" ? `${a}` == `${l}` : !pa(a) || !pa(l) ? a === l : ko(a, l)
    }
    )
}
function ma(o) {
    return o.concat().sort( (e, t) => e.name > t.name ? 1 : -1).map(e => e.options)
}
function Au(o, e) {
    if (o.length !== e.length)
        return !1;
    const t = ma(o)
      , r = ma(e);
    return t.every( (n, i) => {
        const s = r[i];
        return ko(n, s)
    }
    )
}
function Co(o) {
    return typeof o == "number"
}
function Qs(o) {
    return typeof o == "string"
}
function cs(o) {
    return typeof o == "boolean"
}
function _a(o) {
    return Object.prototype.toString.call(o) === "[object Object]"
}
function je(o) {
    return Math.abs(o)
}
function Po(o) {
    return Math.sign(o)
}
function oi(o, e) {
    return je(o - e)
}
function Ru(o, e) {
    if (o === 0 || e === 0 || je(o) <= je(e))
        return 0;
    const t = oi(je(o), je(e));
    return je(t / o)
}
function Lu(o) {
    return Math.round(o * 100) / 100
}
function gi(o) {
    return xi(o).map(Number)
}
function Jt(o) {
    return o[bi(o)]
}
function bi(o) {
    return Math.max(0, o.length - 1)
}
function jo(o, e) {
    return e === bi(o)
}
function ga(o, e=0) {
    return Array.from(Array(o), (t, r) => e + r)
}
function xi(o) {
    return Object.keys(o)
}
function Vl(o, e) {
    return [o, e].reduce( (t, r) => (xi(r).forEach(n => {
        const i = t[n]
          , s = r[n]
          , a = _a(i) && _a(s);
        t[n] = a ? Vl(i, s) : s
    }
    ),
    t), {})
}
function Ks(o, e) {
    return typeof e.MouseEvent < "u" && o instanceof e.MouseEvent
}
function Iu(o, e) {
    const t = {
        start: r,
        center: n,
        end: i
    };
    function r() {
        return 0
    }
    function n(l) {
        return i(l) / 2
    }
    function i(l) {
        return e - l
    }
    function s(l, c) {
        return Qs(o) ? t[o](l) : o(e, l, c)
    }
    return {
        measure: s
    }
}
function yi() {
    let o = [];
    function e(n, i, s, a={
        passive: !0
    }) {
        let l;
        if ("addEventListener" in n)
            n.addEventListener(i, s, a),
            l = () => n.removeEventListener(i, s, a);
        else {
            const c = n;
            c.addListener(s),
            l = () => c.removeListener(s)
        }
        return o.push(l),
        r
    }
    function t() {
        o = o.filter(n => n())
    }
    const r = {
        add: e,
        clear: t
    };
    return r
}
function Fu(o, e, t, r) {
    const n = yi()
      , i = 1e3 / 60;
    let s = null
      , a = 0
      , l = 0;
    function c() {
        n.add(o, "visibilitychange", () => {
            o.hidden && _()
        }
        )
    }
    function u() {
        f(),
        n.clear()
    }
    function p(g) {
        if (!l)
            return;
        s || (s = g,
        t(),
        t());
        const x = g - s;
        for (s = g,
        a += x; a >= i; )
            t(),
            a -= i;
        const y = a / i;
        r(y),
        l && (l = e.requestAnimationFrame(p))
    }
    function m() {
        l || (l = e.requestAnimationFrame(p))
    }
    function f() {
        e.cancelAnimationFrame(l),
        s = null,
        a = 0,
        l = 0
    }
    function _() {
        s = null,
        a = 0
    }
    return {
        init: c,
        destroy: u,
        start: m,
        stop: f,
        update: t,
        render: r
    }
}
function zu(o, e) {
    const t = e === "rtl"
      , r = o === "y"
      , n = r ? "y" : "x"
      , i = r ? "x" : "y"
      , s = !r && t ? -1 : 1
      , a = u()
      , l = p();
    function c(_) {
        const {height: d, width: g} = _;
        return r ? d : g
    }
    function u() {
        return r ? "top" : t ? "right" : "left"
    }
    function p() {
        return r ? "bottom" : t ? "left" : "right"
    }
    function m(_) {
        return _ * s
    }
    return {
        scroll: n,
        cross: i,
        startEdge: a,
        endEdge: l,
        measureSize: c,
        direction: m
    }
}
function un(o=0, e=0) {
    const t = je(o - e);
    function r(c) {
        return c < o
    }
    function n(c) {
        return c > e
    }
    function i(c) {
        return r(c) || n(c)
    }
    function s(c) {
        return i(c) ? r(c) ? o : e : c
    }
    function a(c) {
        return t ? c - t * Math.ceil((c - e) / t) : c
    }
    return {
        length: t,
        max: e,
        min: o,
        constrain: s,
        reachedAny: i,
        reachedMax: n,
        reachedMin: r,
        removeOffset: a
    }
}
function $l(o, e, t) {
    const {constrain: r} = un(0, o)
      , n = o + 1;
    let i = s(e);
    function s(m) {
        return t ? je((n + m) % n) : r(m)
    }
    function a() {
        return i
    }
    function l(m) {
        return i = s(m),
        p
    }
    function c(m) {
        return u().set(a() + m)
    }
    function u() {
        return $l(o, a(), t)
    }
    const p = {
        get: a,
        set: l,
        add: c,
        clone: u
    };
    return p
}
function Bu(o, e, t, r, n, i, s, a, l, c, u, p, m, f, _, d, g, x, y) {
    const {cross: w, direction: T} = o
      , k = ["INPUT", "SELECT", "TEXTAREA"]
      , M = {
        passive: !1
    }
      , b = yi()
      , j = yi()
      , C = un(50, 225).constrain(f.measure(20))
      , P = {
        mouse: 300,
        touch: 400
    }
      , D = {
        mouse: 500,
        touch: 600
    }
      , N = _ ? 43 : 25;
    let V = !1
      , A = 0
      , z = 0
      , Y = !1
      , L = !1
      , $ = !1
      , q = !1;
    function v(E) {
        if (!y)
            return;
        function I(le) {
            (cs(y) || y(E, le)) && Me(le)
        }
        const X = e;
        b.add(X, "dragstart", le => le.preventDefault(), M).add(X, "touchmove", () => {}
        , M).add(X, "touchend", () => {}
        ).add(X, "touchstart", I).add(X, "mousedown", I).add(X, "touchcancel", oe).add(X, "contextmenu", oe).add(X, "click", _e, !0)
    }
    function J() {
        b.clear(),
        j.clear()
    }
    function ge() {
        const E = q ? t : e;
        j.add(E, "touchmove", ie, M).add(E, "touchend", oe).add(E, "mousemove", ie, M).add(E, "mouseup", oe)
    }
    function Ee(E) {
        const I = E.nodeName || "";
        return k.includes(I)
    }
    function se() {
        return (_ ? D : P)[q ? "mouse" : "touch"]
    }
    function Te(E, I) {
        const X = p.add(Po(E) * -1)
          , le = u.byDistance(E, !_).distance;
        return _ || je(E) < C ? le : g && I ? le * .5 : u.byIndex(X.get(), 0).distance
    }
    function Me(E) {
        const I = Ks(E, r);
        q = I,
        $ = _ && I && !E.buttons && V,
        V = oi(n.get(), s.get()) >= 2,
        !(I && E.button !== 0) && (Ee(E.target) || (Y = !0,
        i.pointerDown(E),
        c.useFriction(0).useDuration(0),
        n.set(s),
        ge(),
        A = i.readPoint(E),
        z = i.readPoint(E, w),
        m.emit("pointerDown")))
    }
    function ie(E) {
        if (!Ks(E, r) && E.touches.length >= 2)
            return oe(E);
        const X = i.readPoint(E)
          , le = i.readPoint(E, w)
          , xe = oi(X, A)
          , S = oi(le, z);
        if (!L && !q && (!E.cancelable || (L = xe > S,
        !L)))
            return oe(E);
        const Ae = i.pointerMove(E);
        xe > d && ($ = !0),
        c.useFriction(.3).useDuration(.75),
        a.start(),
        n.add(T(Ae)),
        E.preventDefault()
    }
    function oe(E) {
        const X = u.byDistance(0, !1).index !== p.get()
          , le = i.pointerUp(E) * se()
          , xe = Te(T(le), X)
          , S = Ru(le, xe)
          , Ae = N - 10 * S
          , Ue = x + S / 50;
        L = !1,
        Y = !1,
        j.clear(),
        c.useDuration(Ae).useFriction(Ue),
        l.distance(xe, !_),
        q = !1,
        m.emit("pointerUp")
    }
    function _e(E) {
        $ && (E.stopPropagation(),
        E.preventDefault(),
        $ = !1)
    }
    function De() {
        return Y
    }
    return {
        init: v,
        destroy: J,
        pointerDown: De
    }
}
function Yu(o, e) {
    let r, n;
    function i(p) {
        return p.timeStamp
    }
    function s(p, m) {
        const _ = `client${(m || o.scroll) === "x" ? "X" : "Y"}`;
        return (Ks(p, e) ? p : p.touches[0])[_]
    }
    function a(p) {
        return r = p,
        n = p,
        s(p)
    }
    function l(p) {
        const m = s(p) - s(n)
          , f = i(p) - i(r) > 170;
        return n = p,
        f && (r = p),
        m
    }
    function c(p) {
        if (!r || !n)
            return 0;
        const m = s(n) - s(r)
          , f = i(p) - i(r)
          , _ = i(p) - i(n) > 170
          , d = m / f;
        return f && !_ && je(d) > .1 ? d : 0
    }
    return {
        pointerDown: a,
        pointerMove: l,
        pointerUp: c,
        readPoint: s
    }
}
function Vu() {
    function o(t) {
        const {offsetTop: r, offsetLeft: n, offsetWidth: i, offsetHeight: s} = t;
        return {
            top: r,
            right: n + i,
            bottom: r + s,
            left: n,
            width: i,
            height: s
        }
    }
    return {
        measure: o
    }
}
function $u(o) {
    function e(r) {
        return o * (r / 100)
    }
    return {
        measure: e
    }
}
function Uu(o, e, t, r, n, i, s) {
    const a = [o].concat(r);
    let l, c, u = [], p = !1;
    function m(g) {
        return n.measureSize(s.measure(g))
    }
    function f(g) {
        if (!i)
            return;
        c = m(o),
        u = r.map(m);
        function x(y) {
            for (const w of y) {
                if (p)
                    return;
                const T = w.target === o
                  , k = r.indexOf(w.target)
                  , M = T ? c : u[k]
                  , b = m(T ? o : r[k]);
                if (je(b - M) >= .5) {
                    g.reInit(),
                    e.emit("resize");
                    break
                }
            }
        }
        l = new ResizeObserver(y => {
            (cs(i) || i(g, y)) && x(y)
        }
        ),
        t.requestAnimationFrame( () => {
            a.forEach(y => l.observe(y))
        }
        )
    }
    function _() {
        p = !0,
        l && l.disconnect()
    }
    return {
        init: f,
        destroy: _
    }
}
function Hu(o, e, t, r, n, i) {
    let s = 0
      , a = 0
      , l = n
      , c = i
      , u = o.get()
      , p = 0;
    function m() {
        const M = r.get() - o.get()
          , b = !l;
        let j = 0;
        return b ? (s = 0,
        t.set(r),
        o.set(r),
        j = M) : (t.set(o),
        s += M / l,
        s *= c,
        u += s,
        o.add(s),
        j = u - p),
        a = Po(j),
        p = u,
        k
    }
    function f() {
        const M = r.get() - e.get();
        return je(M) < .001
    }
    function _() {
        return l
    }
    function d() {
        return a
    }
    function g() {
        return s
    }
    function x() {
        return w(n)
    }
    function y() {
        return T(i)
    }
    function w(M) {
        return l = M,
        k
    }
    function T(M) {
        return c = M,
        k
    }
    const k = {
        direction: d,
        duration: _,
        velocity: g,
        seek: m,
        settled: f,
        useBaseFriction: y,
        useBaseDuration: x,
        useFriction: T,
        useDuration: w
    };
    return k
}
function Xu(o, e, t, r, n) {
    const i = n.measure(10)
      , s = n.measure(50)
      , a = un(.1, .99);
    let l = !1;
    function c() {
        return !(l || !o.reachedAny(t.get()) || !o.reachedAny(e.get()))
    }
    function u(f) {
        if (!c())
            return;
        const _ = o.reachedMin(e.get()) ? "min" : "max"
          , d = je(o[_] - e.get())
          , g = t.get() - e.get()
          , x = a.constrain(d / s);
        t.subtract(g * x),
        !f && je(g) < i && (t.set(o.constrain(t.get())),
        r.useDuration(25).useBaseFriction())
    }
    function p(f) {
        l = !f
    }
    return {
        shouldConstrain: c,
        constrain: u,
        toggleActive: p
    }
}
function Wu(o, e, t, r, n) {
    const i = un(-e + o, 0)
      , s = p()
      , a = u()
      , l = m();
    function c(_, d) {
        return oi(_, d) <= 1
    }
    function u() {
        const _ = s[0]
          , d = Jt(s)
          , g = s.lastIndexOf(_)
          , x = s.indexOf(d) + 1;
        return un(g, x)
    }
    function p() {
        return t.map( (_, d) => {
            const {min: g, max: x} = i
              , y = i.constrain(_)
              , w = !d
              , T = jo(t, d);
            return w ? x : T || c(g, y) ? g : c(x, y) ? x : y
        }
        ).map(_ => parseFloat(_.toFixed(3)))
    }
    function m() {
        if (e <= o + n)
            return [i.max];
        if (r === "keepSnaps")
            return s;
        const {min: _, max: d} = a;
        return s.slice(_, d)
    }
    return {
        snapsContained: l,
        scrollContainLimit: a
    }
}
function Gu(o, e, t) {
    const r = e[0]
      , n = t ? r - o : Jt(e);
    return {
        limit: un(n, r)
    }
}
function qu(o, e, t, r) {
    const i = e.min + .1
      , s = e.max + .1
      , {reachedMin: a, reachedMax: l} = un(i, s);
    function c(m) {
        return m === 1 ? l(t.get()) : m === -1 ? a(t.get()) : !1
    }
    function u(m) {
        if (!c(m))
            return;
        const f = o * (m * -1);
        r.forEach(_ => _.add(f))
    }
    return {
        loop: u
    }
}
function Qu(o) {
    const {max: e, length: t} = o;
    function r(i) {
        const s = i - e;
        return t ? s / -t : 0
    }
    return {
        get: r
    }
}
function Ku(o, e, t, r, n) {
    const {startEdge: i, endEdge: s} = o
      , {groupSlides: a} = n
      , l = p().map(e.measure)
      , c = m()
      , u = f();
    function p() {
        return a(r).map(d => Jt(d)[s] - d[0][i]).map(je)
    }
    function m() {
        return r.map(d => t[i] - d[i]).map(d => -je(d))
    }
    function f() {
        return a(c).map(d => d[0]).map( (d, g) => d + l[g])
    }
    return {
        snaps: c,
        snapsAligned: u
    }
}
function Ju(o, e, t, r, n, i) {
    const {groupSlides: s} = n
      , {min: a, max: l} = r
      , c = u();
    function u() {
        const m = s(i)
          , f = !o || e === "keepSnaps";
        return t.length === 1 ? [i] : f ? m : m.slice(a, l).map( (_, d, g) => {
            const x = !d
              , y = jo(g, d);
            if (x) {
                const w = Jt(g[0]) + 1;
                return ga(w)
            }
            if (y) {
                const w = bi(i) - Jt(g)[0] + 1;
                return ga(w, Jt(g)[0])
            }
            return _
        }
        )
    }
    return {
        slideRegistry: c
    }
}
function Zu(o, e, t, r, n) {
    const {reachedAny: i, removeOffset: s, constrain: a} = r;
    function l(_) {
        return _.concat().sort( (d, g) => je(d) - je(g))[0]
    }
    function c(_) {
        const d = o ? s(_) : a(_)
          , g = e.map( (y, w) => ({
            diff: u(y - d, 0),
            index: w
        })).sort( (y, w) => je(y.diff) - je(w.diff))
          , {index: x} = g[0];
        return {
            index: x,
            distance: d
        }
    }
    function u(_, d) {
        const g = [_, _ + t, _ - t];
        if (!o)
            return _;
        if (!d)
            return l(g);
        const x = g.filter(y => Po(y) === d);
        return x.length ? l(x) : Jt(g) - t
    }
    function p(_, d) {
        const g = e[_] - n.get()
          , x = u(g, d);
        return {
            index: _,
            distance: x
        }
    }
    function m(_, d) {
        const g = n.get() + _
          , {index: x, distance: y} = c(g)
          , w = !o && i(g);
        if (!d || w)
            return {
                index: x,
                distance: _
            };
        const T = e[x] - y
          , k = _ + u(T, 0);
        return {
            index: x,
            distance: k
        }
    }
    return {
        byDistance: m,
        byIndex: p,
        shortcut: u
    }
}
function ef(o, e, t, r, n, i, s) {
    function a(p) {
        const m = p.distance
          , f = p.index !== e.get();
        i.add(m),
        m && (r.duration() ? o.start() : (o.update(),
        o.render(1),
        o.update())),
        f && (t.set(e.get()),
        e.set(p.index),
        s.emit("select"))
    }
    function l(p, m) {
        const f = n.byDistance(p, m);
        a(f)
    }
    function c(p, m) {
        const f = e.clone().set(p)
          , _ = n.byIndex(f.get(), m);
        a(_)
    }
    return {
        distance: l,
        index: c
    }
}
function tf(o, e, t, r, n, i, s, a) {
    const l = {
        passive: !0,
        capture: !0
    };
    let c = 0;
    function u(f) {
        if (!a)
            return;
        function _(d) {
            if (new Date().getTime() - c > 10)
                return;
            s.emit("slideFocusStart"),
            o.scrollLeft = 0;
            const y = t.findIndex(w => w.includes(d));
            Co(y) && (n.useDuration(0),
            r.index(y, 0),
            s.emit("slideFocus"))
        }
        i.add(document, "keydown", p, !1),
        e.forEach( (d, g) => {
            i.add(d, "focus", x => {
                (cs(a) || a(f, x)) && _(g)
            }
            , l)
        }
        )
    }
    function p(f) {
        f.code === "Tab" && (c = new Date().getTime())
    }
    return {
        init: u
    }
}
function Wn(o) {
    let e = o;
    function t() {
        return e
    }
    function r(l) {
        e = s(l)
    }
    function n(l) {
        e += s(l)
    }
    function i(l) {
        e -= s(l)
    }
    function s(l) {
        return Co(l) ? l : l.get()
    }
    return {
        get: t,
        set: r,
        add: n,
        subtract: i
    }
}
function Ul(o, e) {
    const t = o.scroll === "x" ? s : a
      , r = e.style;
    let n = null
      , i = !1;
    function s(m) {
        return `translate3d(${m}px,0px,0px)`
    }
    function a(m) {
        return `translate3d(0px,${m}px,0px)`
    }
    function l(m) {
        if (i)
            return;
        const f = Lu(o.direction(m));
        f !== n && (r.transform = t(f),
        n = f)
    }
    function c(m) {
        i = !m
    }
    function u() {
        i || (r.transform = "",
        e.getAttribute("style") || e.removeAttribute("style"))
    }
    return {
        clear: u,
        to: l,
        toggleActive: c
    }
}
function rf(o, e, t, r, n, i, s, a, l) {
    const u = gi(n)
      , p = gi(n).reverse()
      , m = x().concat(y());
    function f(b, j) {
        return b.reduce( (C, P) => C - n[P], j)
    }
    function _(b, j) {
        return b.reduce( (C, P) => f(C, j) > 0 ? C.concat([P]) : C, [])
    }
    function d(b) {
        return i.map( (j, C) => ({
            start: j - r[C] + .5 + b,
            end: j + e - .5 + b
        }))
    }
    function g(b, j, C) {
        const P = d(j);
        return b.map(D => {
            const N = C ? 0 : -t
              , V = C ? t : 0
              , A = C ? "end" : "start"
              , z = P[D][A];
            return {
                index: D,
                loopPoint: z,
                slideLocation: Wn(-1),
                translate: Ul(o, l[D]),
                target: () => a.get() > z ? N : V
            }
        }
        )
    }
    function x() {
        const b = s[0]
          , j = _(p, b);
        return g(j, t, !1)
    }
    function y() {
        const b = e - s[0] - 1
          , j = _(u, b);
        return g(j, -t, !0)
    }
    function w() {
        return m.every( ({index: b}) => {
            const j = u.filter(C => C !== b);
            return f(j, e) <= .1
        }
        )
    }
    function T() {
        m.forEach(b => {
            const {target: j, translate: C, slideLocation: P} = b
              , D = j();
            D !== P.get() && (C.to(D),
            P.set(D))
        }
        )
    }
    function k() {
        m.forEach(b => b.translate.clear())
    }
    return {
        canLoop: w,
        clear: k,
        loop: T,
        loopPoints: m
    }
}
function nf(o, e, t) {
    let r, n = !1;
    function i(l) {
        if (!t)
            return;
        function c(u) {
            for (const p of u)
                if (p.type === "childList") {
                    l.reInit(),
                    e.emit("slidesChanged");
                    break
                }
        }
        r = new MutationObserver(u => {
            n || (cs(t) || t(l, u)) && c(u)
        }
        ),
        r.observe(o, {
            childList: !0
        })
    }
    function s() {
        r && r.disconnect(),
        n = !0
    }
    return {
        init: i,
        destroy: s
    }
}
function sf(o, e, t, r) {
    const n = {};
    let i = null, s = null, a, l = !1;
    function c() {
        a = new IntersectionObserver(_ => {
            l || (_.forEach(d => {
                const g = e.indexOf(d.target);
                n[g] = d
            }
            ),
            i = null,
            s = null,
            t.emit("slidesInView"))
        }
        ,{
            root: o.parentElement,
            threshold: r
        }),
        e.forEach(_ => a.observe(_))
    }
    function u() {
        a && a.disconnect(),
        l = !0
    }
    function p(_) {
        return xi(n).reduce( (d, g) => {
            const x = parseInt(g)
              , {isIntersecting: y} = n[x];
            return (_ && y || !_ && !y) && d.push(x),
            d
        }
        , [])
    }
    function m(_=!0) {
        if (_ && i)
            return i;
        if (!_ && s)
            return s;
        const d = p(_);
        return _ && (i = d),
        _ || (s = d),
        d
    }
    return {
        init: c,
        destroy: u,
        get: m
    }
}
function of(o, e, t, r, n, i) {
    const {measureSize: s, startEdge: a, endEdge: l} = o
      , c = t[0] && n
      , u = _()
      , p = d()
      , m = t.map(s)
      , f = g();
    function _() {
        if (!c)
            return 0;
        const y = t[0];
        return je(e[a] - y[a])
    }
    function d() {
        if (!c)
            return 0;
        const y = i.getComputedStyle(Jt(r));
        return parseFloat(y.getPropertyValue(`margin-${l}`))
    }
    function g() {
        return t.map( (y, w, T) => {
            const k = !w
              , M = jo(T, w);
            return k ? m[w] + u : M ? m[w] + p : T[w + 1][a] - y[a]
        }
        ).map(je)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: f,
        startGap: u,
        endGap: p
    }
}
function af(o, e, t, r, n, i, s, a, l) {
    const {startEdge: c, endEdge: u, direction: p} = o
      , m = Co(t);
    function f(x, y) {
        return gi(x).filter(w => w % y === 0).map(w => x.slice(w, w + y))
    }
    function _(x) {
        return x.length ? gi(x).reduce( (y, w, T) => {
            const k = Jt(y) || 0
              , M = k === 0
              , b = w === bi(x)
              , j = n[c] - i[k][c]
              , C = n[c] - i[w][u]
              , P = !r && M ? p(s) : 0
              , D = !r && b ? p(a) : 0
              , N = je(C - D - (j + P));
            return T && N > e + l && y.push(w),
            b && y.push(x.length),
            y
        }
        , []).map( (y, w, T) => {
            const k = Math.max(T[w - 1] || 0);
            return x.slice(k, y)
        }
        ) : []
    }
    function d(x) {
        return m ? f(x, t) : _(x)
    }
    return {
        groupSlides: d
    }
}
function lf(o, e, t, r, n, i, s) {
    const {align: a, axis: l, direction: c, startIndex: u, loop: p, duration: m, dragFree: f, dragThreshold: _, inViewThreshold: d, slidesToScroll: g, skipSnaps: x, containScroll: y, watchResize: w, watchSlides: T, watchDrag: k, watchFocus: M} = i
      , b = 2
      , j = Vu()
      , C = j.measure(e)
      , P = t.map(j.measure)
      , D = zu(l, c)
      , N = D.measureSize(C)
      , V = $u(N)
      , A = Iu(a, N)
      , z = !p && !!y
      , Y = p || !!y
      , {slideSizes: L, slideSizesWithGaps: $, startGap: q, endGap: v} = of(D, C, P, t, Y, n)
      , J = af(D, N, g, p, C, P, q, v, b)
      , {snaps: ge, snapsAligned: Ee} = Ku(D, A, C, P, J)
      , se = -Jt(ge) + Jt($)
      , {snapsContained: Te, scrollContainLimit: Me} = Wu(N, se, Ee, y, b)
      , ie = z ? Te : Ee
      , {limit: oe} = Gu(se, ie, p)
      , _e = $l(bi(ie), u, p)
      , De = _e.clone()
      , Q = gi(t)
      , E = ({dragHandler: tt, scrollBody: dr, scrollBounds: ve, options: {loop: hr}}) => {
        hr || ve.constrain(tt.pointerDown()),
        dr.seek()
    }
      , I = ({scrollBody: tt, translate: dr, location: ve, offsetLocation: hr, previousLocation: Gt, scrollLooper: Cr, slideLooper: Pr, dragHandler: tr, animation: pr, eventHandler: G, scrollBounds: mr, options: {loop: _t}}, gt) => {
        const xt = tt.settled()
          , _r = !mr.shouldConstrain()
          , gr = _t ? xt : xt && _r
          , Yt = gr && !tr.pointerDown();
        Yt && pr.stop();
        const Ur = ve.get() * gt + Gt.get() * (1 - gt);
        hr.set(Ur),
        _t && (Cr.loop(tt.direction()),
        Pr.loop()),
        dr.to(hr.get()),
        Yt && G.emit("settle"),
        gr || G.emit("scroll")
    }
      , X = Fu(r, n, () => E(et), tt => I(et, tt))
      , le = .68
      , xe = ie[_e.get()]
      , S = Wn(xe)
      , Ae = Wn(xe)
      , Ue = Wn(xe)
      , Ze = Wn(xe)
      , fe = Hu(S, Ue, Ae, Ze, m, le)
      , Ct = Zu(p, ie, se, oe, Ze)
      , Bt = ef(X, _e, De, fe, Ct, Ze, s)
      , Zt = Qu(oe)
      , Re = yi()
      , er = sf(e, t, s, d)
      , {slideRegistry: ye} = Ju(z, y, ie, Me, J, Q)
      , Pt = tf(o, t, ye, Bt, fe, Re, s, M)
      , et = {
        ownerDocument: r,
        ownerWindow: n,
        eventHandler: s,
        containerRect: C,
        slideRects: P,
        animation: X,
        axis: D,
        dragHandler: Bu(D, o, r, n, Ze, Yu(D, n), S, X, Bt, fe, Ct, _e, s, V, f, _, x, le, k),
        eventStore: Re,
        percentOfView: V,
        index: _e,
        indexPrevious: De,
        limit: oe,
        location: S,
        offsetLocation: Ue,
        previousLocation: Ae,
        options: i,
        resizeHandler: Uu(e, s, n, t, D, w, j),
        scrollBody: fe,
        scrollBounds: Xu(oe, Ue, Ze, fe, V),
        scrollLooper: qu(se, oe, Ue, [S, Ue, Ae, Ze]),
        scrollProgress: Zt,
        scrollSnapList: ie.map(Zt.get),
        scrollSnaps: ie,
        scrollTarget: Ct,
        scrollTo: Bt,
        slideLooper: rf(D, N, se, L, $, ge, ie, Ue, t),
        slideFocus: Pt,
        slidesHandler: nf(e, s, T),
        slidesInView: er,
        slideIndexes: Q,
        slideRegistry: ye,
        slidesToScroll: J,
        target: Ze,
        translate: Ul(D, e)
    };
    return et
}
function cf() {
    let o = {}, e;
    function t(c) {
        e = c
    }
    function r(c) {
        return o[c] || []
    }
    function n(c) {
        return r(c).forEach(u => u(e, c)),
        l
    }
    function i(c, u) {
        return o[c] = r(c).concat([u]),
        l
    }
    function s(c, u) {
        return o[c] = r(c).filter(p => p !== u),
        l
    }
    function a() {
        o = {}
    }
    const l = {
        init: t,
        emit: n,
        off: s,
        on: i,
        clear: a
    };
    return l
}
const uf = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};
function ff(o) {
    function e(i, s) {
        return Vl(i, s || {})
    }
    function t(i) {
        const s = i.breakpoints || {}
          , a = xi(s).filter(l => o.matchMedia(l).matches).map(l => s[l]).reduce( (l, c) => e(l, c), {});
        return e(i, a)
    }
    function r(i) {
        return i.map(s => xi(s.breakpoints || {})).reduce( (s, a) => s.concat(a), []).map(o.matchMedia)
    }
    return {
        mergeOptions: e,
        optionsAtMedia: t,
        optionsMediaQueries: r
    }
}
function df(o) {
    let e = [];
    function t(i, s) {
        return e = s.filter( ({options: a}) => o.optionsAtMedia(a).active !== !1),
        e.forEach(a => a.init(i, o)),
        s.reduce( (a, l) => Object.assign(a, {
            [l.name]: l
        }), {})
    }
    function r() {
        e = e.filter(i => i.destroy())
    }
    return {
        init: t,
        destroy: r
    }
}
function is(o, e, t) {
    const r = o.ownerDocument
      , n = r.defaultView
      , i = ff(n)
      , s = df(i)
      , a = yi()
      , l = cf()
      , {mergeOptions: c, optionsAtMedia: u, optionsMediaQueries: p} = i
      , {on: m, off: f, emit: _} = l
      , d = D;
    let g = !1, x, y = c(uf, is.globalOptions), w = c(y), T = [], k, M, b;
    function j() {
        const {container: Q, slides: E} = w;
        M = (Qs(Q) ? o.querySelector(Q) : Q) || o.children[0];
        const X = Qs(E) ? M.querySelectorAll(E) : E;
        b = [].slice.call(X || M.children)
    }
    function C(Q) {
        const E = lf(o, M, b, r, n, Q, l);
        if (Q.loop && !E.slideLooper.canLoop()) {
            const I = Object.assign({}, Q, {
                loop: !1
            });
            return C(I)
        }
        return E
    }
    function P(Q, E) {
        g || (y = c(y, Q),
        w = u(y),
        T = E || T,
        j(),
        x = C(w),
        p([y, ...T.map( ({options: I}) => I)]).forEach(I => a.add(I, "change", D)),
        w.active && (x.translate.to(x.location.get()),
        x.animation.init(),
        x.slidesInView.init(),
        x.slideFocus.init(De),
        x.eventHandler.init(De),
        x.resizeHandler.init(De),
        x.slidesHandler.init(De),
        x.options.loop && x.slideLooper.loop(),
        M.offsetParent && b.length && x.dragHandler.init(De),
        k = s.init(De, T)))
    }
    function D(Q, E) {
        const I = J();
        N(),
        P(c({
            startIndex: I
        }, Q), E),
        l.emit("reInit")
    }
    function N() {
        x.dragHandler.destroy(),
        x.eventStore.clear(),
        x.translate.clear(),
        x.slideLooper.clear(),
        x.resizeHandler.destroy(),
        x.slidesHandler.destroy(),
        x.slidesInView.destroy(),
        x.animation.destroy(),
        s.destroy(),
        a.clear()
    }
    function V() {
        g || (g = !0,
        a.clear(),
        N(),
        l.emit("destroy"),
        l.clear())
    }
    function A(Q, E, I) {
        !w.active || g || (x.scrollBody.useBaseFriction().useDuration(E === !0 ? 0 : w.duration),
        x.scrollTo.index(Q, I || 0))
    }
    function z(Q) {
        const E = x.index.add(1).get();
        A(E, Q, -1)
    }
    function Y(Q) {
        const E = x.index.add(-1).get();
        A(E, Q, 1)
    }
    function L() {
        return x.index.add(1).get() !== J()
    }
    function $() {
        return x.index.add(-1).get() !== J()
    }
    function q() {
        return x.scrollSnapList
    }
    function v() {
        return x.scrollProgress.get(x.offsetLocation.get())
    }
    function J() {
        return x.index.get()
    }
    function ge() {
        return x.indexPrevious.get()
    }
    function Ee() {
        return x.slidesInView.get()
    }
    function se() {
        return x.slidesInView.get(!1)
    }
    function Te() {
        return k
    }
    function Me() {
        return x
    }
    function ie() {
        return o
    }
    function oe() {
        return M
    }
    function _e() {
        return b
    }
    const De = {
        canScrollNext: L,
        canScrollPrev: $,
        containerNode: oe,
        internalEngine: Me,
        destroy: V,
        off: f,
        on: m,
        emit: _,
        plugins: Te,
        previousScrollSnap: ge,
        reInit: d,
        rootNode: ie,
        scrollNext: z,
        scrollPrev: Y,
        scrollProgress: v,
        scrollSnapList: q,
        scrollTo: A,
        selectedScrollSnap: J,
        slideNodes: _e,
        slidesInView: Ee,
        slidesNotInView: se
    };
    return P(e, t),
    setTimeout( () => l.emit("init"), 0),
    De
}
is.globalOptions = void 0;
function Mo(o={}, e=[]) {
    const t = de.useRef(o)
      , r = de.useRef(e)
      , [n,i] = de.useState()
      , [s,a] = de.useState()
      , l = de.useCallback( () => {
        n && n.reInit(t.current, r.current)
    }
    , [n]);
    return de.useEffect( () => {
        ko(t.current, o) || (t.current = o,
        l())
    }
    , [o, l]),
    de.useEffect( () => {
        Au(r.current, e) || (r.current = e,
        l())
    }
    , [e, l]),
    de.useEffect( () => {
        if (Du() && s) {
            is.globalOptions = Mo.globalOptions;
            const c = is(s, t.current, r.current);
            return i(c),
            () => c.destroy()
        } else
            i(void 0)
    }
    , [s, i]),
    [a, n]
}
Mo.globalOptions = void 0;
const hf = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null
};
function pf(o, e) {
    const t = o.scrollSnapList();
    return typeof e == "number" ? t.map( () => e) : e(t, o)
}
function mf(o, e) {
    const t = o.rootNode();
    return e && e(t) || t
}
function No(o={}) {
    let e, t, r, n, i = null, s = 0, a = !1, l = !1, c = !1, u = !1;
    function p(A, z) {
        t = A;
        const {mergeOptions: Y, optionsAtMedia: L} = z
          , $ = Y(hf, No.globalOptions)
          , q = Y($, o);
        if (e = L(q),
        t.scrollSnapList().length <= 1)
            return;
        u = e.jump,
        r = !1,
        n = pf(t, e.delay);
        const {eventStore: v, ownerDocument: J} = t.internalEngine()
          , ge = !!t.internalEngine().options.watchDrag
          , Ee = mf(t, e.rootNode);
        v.add(J, "visibilitychange", x),
        ge && t.on("pointerDown", w),
        ge && !e.stopOnInteraction && t.on("pointerUp", T),
        e.stopOnMouseEnter && v.add(Ee, "mouseenter", k),
        e.stopOnMouseEnter && !e.stopOnInteraction && v.add(Ee, "mouseleave", M),
        e.stopOnFocusIn && t.on("slideFocusStart", g),
        e.stopOnFocusIn && !e.stopOnInteraction && v.add(t.containerNode(), "focusout", d),
        e.playOnInit && d()
    }
    function m() {
        t.off("pointerDown", w).off("pointerUp", T).off("slideFocusStart", g),
        g(),
        r = !0,
        a = !1
    }
    function f() {
        const {ownerWindow: A} = t.internalEngine();
        A.clearTimeout(s),
        s = A.setTimeout(D, n[t.selectedScrollSnap()]),
        i = new Date().getTime(),
        t.emit("autoplay:timerset")
    }
    function _() {
        const {ownerWindow: A} = t.internalEngine();
        A.clearTimeout(s),
        s = 0,
        i = null,
        t.emit("autoplay:timerstopped")
    }
    function d() {
        if (!r) {
            if (y()) {
                c = !0;
                return
            }
            a || t.emit("autoplay:play"),
            f(),
            a = !0
        }
    }
    function g() {
        r || (a && t.emit("autoplay:stop"),
        _(),
        a = !1)
    }
    function x() {
        if (y())
            return c = a,
            g();
        c && d()
    }
    function y() {
        const {ownerDocument: A} = t.internalEngine();
        return A.visibilityState === "hidden"
    }
    function w() {
        l || g()
    }
    function T() {
        l || d()
    }
    function k() {
        l = !0,
        g()
    }
    function M() {
        l = !1,
        d()
    }
    function b(A) {
        typeof A < "u" && (u = A),
        d()
    }
    function j() {
        a && g()
    }
    function C() {
        a && d()
    }
    function P() {
        return a
    }
    function D() {
        const {index: A} = t.internalEngine()
          , z = A.clone().add(1).get()
          , Y = t.scrollSnapList().length - 1
          , L = e.stopOnLastSnap && z === Y;
        if (t.canScrollNext() ? t.scrollNext(u) : t.scrollTo(0, u),
        t.emit("autoplay:select"),
        L)
            return g();
        d()
    }
    function N() {
        if (!i)
            return null;
        const A = n[t.selectedScrollSnap()]
          , z = new Date().getTime() - i;
        return A - z
    }
    return {
        name: "autoplay",
        options: o,
        init: p,
        destroy: m,
        play: b,
        stop: j,
        reset: C,
        isPlaying: P,
        timeUntilNext: N
    }
}
No.globalOptions = void 0;
const _f = new Date("2027-04-24T17:00:00").getTime();
function xa() {
    const o = _f - Date.now()
      , e = Math.max(0, o);
    return {
        days: Math.floor(e / 864e5),
        hours: Math.floor(e / 36e5 % 24),
        minutes: Math.floor(e / 6e4 % 60),
        seconds: Math.floor(e / 1e3 % 60)
    }
}
function gf() {
    const [o,e] = de.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
      , [t,r] = de.useState(!1);
    de.useEffect( () => {
        r(!0),
        e(xa());
        const i = setInterval( () => e(xa()), 1e3);
        return () => clearInterval(i)
    }
    , []);
    const n = [{
        label: "Days",
        value: o.days
    }, {
        label: "Hours",
        value: o.hours
    }, {
        label: "Minutes",
        value: o.minutes
    }, {
        label: "Seconds",
        value: o.seconds
    }];
    return h.jsx("div", {
        className: "flex flex-nowrap justify-center gap-2 sm:gap-6",
        suppressHydrationWarning: !0,
        children: n.map(i => h.jsxs("div", {
            className: "luxury-card flex w-[68px] flex-col items-center px-1 py-3 sm:w-28 sm:px-2 sm:py-6",
            children: [h.jsx("span", {
                className: "font-serif-lux text-2xl font-semibold text-gold sm:text-5xl",
                suppressHydrationWarning: !0,
                children: t ? String(i.value).padStart(2, "0") : "--"
            }), h.jsx("span", {
                className: "mt-1 font-display text-[9px] tracking-[0.2em] text-champagne sm:text-xs sm:tracking-[0.3em]",
                children: i.label
            })]
        }, i.label))
    })
}
function dn({className: o=""}) {
    return h.jsx("div", {
        className: `ornament-divider ${o}`,
        children: h.jsx("svg", {
            width: "60",
            height: "20",
            viewBox: "0 0 60 20",
            className: "text-gold",
            children: h.jsxs("g", {
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1",
                children: [h.jsx("path", {
                    d: "M30 4 Q22 10 30 16 Q38 10 30 4 Z",
                    fill: "currentColor",
                    opacity: "0.85"
                }), h.jsx("circle", {
                    cx: "30",
                    cy: "10",
                    r: "1.5",
                    fill: "#FFF8F0"
                })]
            })
        })
    })
}
function wi() {
    return h.jsx("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        children: Array.from({
            length: 10
        }).map( (o, e) => h.jsx("svg", {
            viewBox: "0 0 24 24",
            className: "absolute text-gold animate-pulse",
            style: {
                width: 14 + e % 3 * 6,
                height: 14 + e % 3 * 6,
                top: `${(e * 13 + 5) % 90}%`,
                left: `${(e * 23 + 7) % 95}%`,
                opacity: .18,
                animationDelay: `${e * .7}s`,
                animationDuration: `${4 + e % 4}s`
            },
            children: h.jsx("path", {
                d: "M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z",
                fill: "currentColor"
            })
        }, e))
    })
}
typeof window < "u" && Kt.registerPlugin(te);
const xf = "./images/hero.jpg"
  , ya = ["./images/1.jpeg", "./images/d2e161ce5fb8496ca147e57aba9c24bc.jpg", "./images/hero.jpg", "./images/IMG-20240529-WA0005.jpg", "./images/IMG-20241012-WA0001.jpg", "./images/profile_picture_20220427151836.jpg", "./images/profile_picture_20220512211522.jpg", "./images/profile_picture_20220513083436.jpg"];
function kr() {
    const o = de.useRef(null);
    return de.useEffect( () => {
        if (!o.current)
            return;
        o.current.querySelectorAll("[data-reveal]").forEach(t => {
            Kt.fromTo(t, {
                y: 50,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: t,
                    start: "top 85%"
                }
            })
        }
        )
    }
    , []),
    o
}
function yf() {
    const o = kr();
    return h.jsxs("section", {
        ref: o,
        className: "relative flex min-h-screen items-center justify-center overflow-hidden py-24 sm:py-28 md:py-32",
        children: [h.jsx("div", {
            className: "absolute inset-0 bg-cover bg-center",
            style: {
                backgroundImage: `url(${xf})`
            }
        }), h.jsx("div", {
            className: "absolute inset-0",
            style: {
                background: "linear-gradient(180deg, rgba(20,7,7,0.85) 0%, rgba(20,7,7,0.65) 50%, rgba(20,7,7,0.95) 100%)"
            }
        }), h.jsx(wi, {}), h.jsxs("div", {
            className: "relative z-10 mx-auto max-w-4xl px-5 py-10 text-center sm:px-6",
            children: [h.jsx("p", {
                "data-reveal": !0,
                className: "font-display text-[10px] tracking-[0.4em] text-gold sm:text-xs sm:tracking-[0.5em]",
                children: "✦  CELEBRATING FIVE YEARS  ✦"
            }), h.jsxs("h1", {
                "data-reveal": !0,
                className: "mt-6 font-serif-lux text-4xl font-medium leading-[1.05] text-ivory sm:mt-8 sm:text-7xl md:text-8xl",
                children: ["Mallesh", h.jsx("span", {
                    className: "my-2 block font-script text-4xl text-gold sm:text-7xl",
                    children: "&"
                }), "Sukanya"]
            }), h.jsx(dn, {
                className: "my-10"
            }), h.jsxs("p", {
                "data-reveal": !0,
                className: "font-serif-lux text-base italic leading-relaxed text-champagne sm:text-2xl",
                children: ["Five Years of Love, ", h.jsx("br", {
                    className: "sm:hidden"
                }), " Laughter, ", h.jsx("br", {
                    className: "sm:hidden"
                }), " and a Lifetime Ahead"]
            }), h.jsx("p", {
                "data-reveal": !0,
                className: "mt-8 font-display text-xs tracking-[0.3em] text-gold sm:text-base sm:tracking-[0.4em]",
                children: "24 · APRIL · 2027"
            }), h.jsx("div", {
                "data-reveal": !0,
                className: "mt-12",
                children: h.jsx(gf, {})
            }), h.jsxs("div", {
                "data-reveal": !0,
                className: "mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-4",
                children: [h.jsx("a", {
                    href: "#invitation",
                    className: "btn-royal w-full max-w-xs text-xs sm:w-auto sm:text-sm",
                    children: "View Invitation"
                }), h.jsx("a", {
                    href: "#rsvp",
                    className: "btn-ghost-gold w-full max-w-xs text-xs sm:w-auto sm:text-sm",
                    children: "RSVP Now"
                })]
            })]
        }), h.jsx("div", {
            className: "absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold/70 sm:block",
            children: h.jsx("div", {
                className: "h-10 w-px animate-pulse bg-gold/70"
            })
        })]
    })
}
function $r({kicker: o, title: e}) {
    return h.jsxs("div", {
        "data-reveal": !0,
        className: "mb-14 text-center",
        children: [h.jsx("p", {
            className: "font-display text-[10px] tracking-[0.5em] text-gold sm:text-xs",
            children: o
        }), h.jsx("h2", {
            className: "mt-3 font-serif-lux text-4xl font-medium text-ivory sm:text-5xl md:text-6xl",
            children: e
        }), h.jsx(dn, {
            className: "mx-auto mt-5 max-w-xs"
        })]
    })
}
const vf = [{
    title: "The Beginning",
    date: "24 April 2022",
    text: "The day our forever began, filled with love, promise, and joy."
}, {
    title: "Growing Together",
    date: "2022 – 2024",
    text: "Every shared dream and small adventure made our bond stronger."
}, {
    title: "A Thousand Memories",
    date: "2024 – 2026",
    text: "Through every season, we found more reasons to laugh, love, and be grateful."
}, {
    title: "Five Years Together",
    date: "24 April 2027",
    text: "Celebrating five beautiful years and all the memories still to come."
}];
function bf() {
    const o = kr();
    return h.jsxs("section", {
        ref: o,
        className: "relative royal-bg py-24 sm:py-32",
        children: [h.jsx(wi, {}), h.jsxs("div", {
            className: "relative mx-auto max-w-5xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "FIVE YEARS OF US",
                title: "Our Anniversary Story"
            }), h.jsxs("div", {
                className: "relative",
                children: [h.jsx("div", {
                    className: "absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:left-1/2"
                }), vf.map( (e, t) => h.jsxs("div", {
                    "data-reveal": !0,
                    className: `relative mb-12 flex flex-col sm:flex-row ${t % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`,
                    children: [h.jsx("div", {
                        className: "absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_18px_rgba(212,175,55,0.8)] sm:left-1/2"
                    }), h.jsxs("div", {
                        className: `luxury-card ml-10 max-w-full p-5 sm:ml-0 sm:max-w-md sm:p-8 ${t % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"}`,
                        children: [h.jsx("p", {
                            className: "font-display text-[10px] tracking-[0.4em] text-gold",
                            children: e.date
                        }), h.jsx("h3", {
                            className: "mt-2 font-serif-lux text-2xl text-ivory sm:text-3xl",
                            children: e.title
                        }), h.jsx("div", {
                            className: "gold-divider my-3 w-12"
                        }), h.jsx("p", {
                            className: "font-serif-lux italic text-champagne/90",
                            children: e.text
                        })]
                    })]
                }, e.title))]
            })]
        })]
    })
}
const Hl = [{
    name: "Fifth Anniversary Celebration",
    date: "24 April 2027",
    time: "To be announced",
    venue: "Venue to be announced",
    icon: "❤"
}];
function wf() {
    const o = kr();
    return h.jsx("section", {
        ref: o,
        className: "relative bg-night py-24 sm:py-32",
        children: h.jsxs("div", {
            className: "relative mx-auto max-w-6xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "A SPECIAL MILESTONE",
                title: "Anniversary Celebration"
            }), h.jsx("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: Hl.map(e => h.jsxs("div", {
                    "data-reveal": !0,
                    className: "luxury-card group relative overflow-hidden p-8 text-center transition-transform duration-500 hover:-translate-y-2",
                    children: [h.jsx("div", {
                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                        style: {
                            background: "radial-gradient(circle at center, rgba(212,175,55,0.18), transparent 60%)"
                        }
                    }), h.jsxs("div", {
                        className: "relative",
                        children: [h.jsx("div", {
                            className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 text-2xl text-gold",
                            children: e.icon
                        }), h.jsx("h3", {
                            className: "mt-5 font-serif-lux text-2xl text-ivory",
                            children: e.name
                        }), h.jsx("div", {
                            className: "gold-divider my-3 mx-auto w-12"
                        }), h.jsx("p", {
                            className: "font-display text-xs tracking-[0.3em] text-gold",
                            children: e.date
                        }), h.jsx("p", {
                            className: "mt-1 font-serif-lux italic text-champagne",
                            children: e.time
                        }), h.jsx("p", {
                            className: "mt-3 text-sm text-champagne/80",
                            children: e.venue
                        })]
                    })]
                }, e.name))
            })]
        })
    })
}
function Tf() {
    const o = kr();
    return h.jsxs("section", {
        id: "invitation",
        ref: o,
        className: "relative royal-bg py-24 sm:py-32",
        children: [h.jsx(wi, {}), h.jsxs("div", {
            className: "relative mx-auto max-w-3xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "WITH LOVE & GRATITUDE",
                title: "Anniversary Invitation"
            }), h.jsx("div", {
                "data-reveal": !0,
                className: "relative mx-auto overflow-hidden p-1",
                style: {
                    background: "linear-gradient(135deg, #f5d77a, #D4AF37, #8a6d1a, #D4AF37)"
                },
                children: h.jsxs("div", {
                    className: "relative px-4 py-12 text-center sm:px-14 sm:py-20",
                    style: {
                        background: "radial-gradient(ellipse at top, #2a0a0c 0%, #140707 80%)"
                    },
                    children: [h.jsx("div", {
                        className: "pointer-events-none absolute inset-3 border border-gold/40"
                    }), h.jsx("div", {
                        className: "pointer-events-none absolute inset-5 border border-gold/20"
                    }), ["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map(e => h.jsxs("svg", {
                        className: `absolute h-10 w-10 text-gold ${e}`,
                        viewBox: "0 0 40 40",
                        children: [h.jsx("path", {
                            d: "M2 2 H18 M2 2 V18 M2 10 H10 V2",
                            stroke: "currentColor",
                            strokeWidth: "1",
                            fill: "none"
                        }), h.jsx("circle", {
                            cx: "10",
                            cy: "10",
                            r: "1.2",
                            fill: "currentColor"
                        })]
                    }, e)), h.jsx("p", {
                        className: "font-display text-[10px] tracking-[0.4em] text-gold sm:tracking-[0.5em]",
                        children: "✦ FIVE YEARS TOGETHER ✦"
                    }), h.jsxs("p", {
                        className: "mt-6 font-serif-lux text-sm italic text-champagne/90 sm:text-base",
                        children: ["With love from ", h.jsx("span", {
                            className: "mx-2 text-gold sm:mx-3",
                            children: "•"
                        }), " Mallesh & Sukanya"]
                    }), h.jsx("p", {
                        className: "mt-2 text-xs text-champagne/70 sm:text-sm",
                        children: "invite you to celebrate their fifth wedding anniversary"
                    }), h.jsx("h3", {
                        className: "mt-8 font-serif-lux text-4xl text-ivory sm:text-6xl",
                        children: "Mallesh"
                    }), h.jsx("p", {
                        className: "my-2 font-script text-3xl text-gold sm:text-4xl",
                        children: "&"
                    }), h.jsx("h3", {
                        className: "font-serif-lux text-4xl text-ivory sm:text-6xl",
                        children: "Sukanya"
                    }), h.jsx(dn, {
                        className: "my-8"
                    }), h.jsx("p", {
                        className: "font-display text-[11px] tracking-[0.25em] text-gold sm:text-sm sm:tracking-[0.35em]",
                        children: "24 APRIL 2027"
                    }), h.jsx("p", {
                        className: "mt-3 font-serif-lux text-sm italic text-champagne sm:text-base",
                        children: "Venue and time to be announced"
                    }), h.jsx("div", {
                        className: "mt-10 grid gap-4 sm:grid-cols-3",
                        children: [{
                            t: "FIVE YEARS",
                            d: "One beautiful journey"
                        }, {
                            t: "24 APRIL 2027",
                            d: "Save the date"
                        }, {
                            t: "CELEBRATION",
                            d: "Venue and time to be announced"
                        }].map(e => h.jsxs("div", {
                            className: "border border-gold/30 p-3",
                            children: [h.jsx("p", {
                                className: "font-display text-[10px] tracking-[0.3em] text-gold",
                                children: e.t
                            }), h.jsx("p", {
                                className: "mt-1 font-serif-lux italic text-sm text-champagne",
                                children: e.d
                            })]
                        }, e.t))
                    })]
                })
            })]
        })]
    })
}
function Sf() {
    const o = kr()
      , [e,t] = de.useState(null)
      , [r,n] = Mo({
        loop: !0,
        align: "center"
    }, [No({
        delay: 3800,
        stopOnInteraction: !1
    })])
      , [i,s] = de.useState(0);
    return de.useEffect( () => {
        if (!n)
            return;
        const a = () => s(n.selectedScrollSnap());
        return n.on("select", a),
        a(),
        () => {
            n.off("select", a)
        }
    }
    , [n]),
    h.jsxs("section", {
        ref: o,
        className: "relative bg-night py-24 sm:py-32",
        children: [h.jsxs("div", {
            className: "relative mx-auto max-w-6xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "MEMORIES",
                title: "Moments of Love"
            }), h.jsxs("div", {
                "data-reveal": !0,
                className: "relative",
                children: [h.jsx("div", {
                    className: "overflow-hidden",
                    ref: r,
                    children: h.jsx("div", {
                        className: "flex",
                        children: ya.map( (a, l) => {
                            const c = l === i;
                            return h.jsx("div", {
                                className: "relative shrink-0 grow-0 basis-[80%] px-3 sm:basis-[55%] md:basis-[42%] lg:basis-[34%]",
                                children: h.jsxs("button", {
                                    onClick: () => t(a),
                                    className: `group relative block w-full overflow-hidden rounded-lg border transition-all duration-700 ${c ? "scale-100 border-gold shadow-[0_30px_80px_-20px_rgba(212,175,55,0.45)]" : "scale-90 border-gold/20 opacity-60"}`,
                                    children: [h.jsx("img", {
                                        src: a,
                                        alt: `Memory ${l + 1}`,
                                        loading: "lazy",
                                        className: "h-[420px] w-full object-cover transition-transform duration-1000 group-hover:scale-110 sm:h-[480px]"
                                    }), h.jsx("div", {
                                        className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent"
                                    })]
                                })
                            }, a)
                        }
                        )
                    })
                }), h.jsx("button", {
                    "aria-label": "Previous",
                    onClick: () => n?.scrollPrev(),
                    className: "absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:flex",
                    children: "‹"
                }), h.jsx("button", {
                    "aria-label": "Next",
                    onClick: () => n?.scrollNext(),
                    className: "absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-night/70 text-gold backdrop-blur transition hover:bg-gold hover:text-night sm:flex",
                    children: "›"
                }), h.jsx("div", {
                    className: "mt-8 flex justify-center gap-2",
                    children: ya.map( (a, l) => h.jsx("button", {
                        "aria-label": `Slide ${l + 1}`,
                        onClick: () => n?.scrollTo(l),
                        className: `h-1.5 rounded-full transition-all duration-500 ${l === i ? "w-8 bg-gold" : "w-2 bg-gold/30"}`
                    }, l))
                })]
            })]
        }), e && h.jsx("div", {
            className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-6 animate-in",
            onClick: () => t(null),
            children: h.jsx("img", {
                src: e,
                alt: "Selected memory",
                className: "max-h-[90vh] max-w-full border border-gold/40"
            })
        })]
    })
}
function kf() {
    const o = kr();
    return h.jsx("section", {
        ref: o,
        className: "relative royal-bg py-24 sm:py-32",
        children: h.jsxs("div", {
            className: "relative mx-auto max-w-6xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "CELEBRATION DETAILS",
                title: "The Celebration"
            }), h.jsxs("div", {
                "data-reveal": !0,
                className: "luxury-card grid overflow-hidden md:grid-cols-2",
                children: [h.jsxs("div", {
                    className: "flex min-h-64 items-center justify-center bg-night p-8 text-center",
                    children: [h.jsx("span", {
                        className: "font-script text-5xl text-gold",
                        children: "♥"
                    }), h.jsx("p", {
                        className: "mt-4 font-serif-lux italic text-champagne",
                        children: "A special place to be announced"
                    })]
                }), h.jsxs("div", {
                    className: "flex flex-col justify-center p-6 sm:p-12",
                    children: [h.jsx("p", {
                        className: "font-display text-[10px] tracking-[0.4em] text-gold",
                        children: "VENUE"
                    }), h.jsx("h3", {
                        className: "mt-3 font-serif-lux text-3xl text-ivory sm:text-4xl",
                        children: "24 April 2027"
                    }), h.jsx("div", {
                        className: "gold-divider my-4 w-16"
                    }), h.jsxs("p", {
                        className: "font-serif-lux italic text-champagne/90",
                        children: "Venue and time to be announced"
                    }), h.jsx("p", {
                        className: "mt-5 text-sm text-champagne/80",
                        children: "We can’t wait to celebrate five wonderful years with you. Location and timing details will be shared soon."
                    })]
                })]
            })]
        })
    })
}
function Cf() {
    const o = kr()
      , [e,t] = de.useState(!1);
    return h.jsxs("section", {
        id: "rsvp",
        ref: o,
        className: "relative bg-night py-28 sm:py-36",
        children: [h.jsx(wi, {}), h.jsxs("div", {
            className: "relative mx-auto max-w-3xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "YOUR PRESENCE",
                title: "Celebrate With Us"
            }), h.jsxs("form", {
                "data-reveal": !0,
                onSubmit: r => {
                    r.preventDefault(),
                    t(!0)
                }
                ,
                className: "luxury-card relative overflow-hidden rounded-2xl p-5 sm:p-14",
                style: {
                    background: "linear-gradient(180deg, rgba(50,14,18,0.9) 0%, rgba(20,7,7,0.95) 100%)"
                },
                children: [h.jsx("div", {
                    className: "pointer-events-none absolute inset-0 rounded-2xl",
                    style: {
                        background: "radial-gradient(circle at top, rgba(212,175,55,0.12), transparent 60%)"
                    }
                }), h.jsx("div", {
                    className: "pointer-events-none absolute inset-3 rounded-xl border border-gold/20"
                }), e ? h.jsxs("div", {
                    className: "relative py-16 text-center",
                    children: [h.jsx("p", {
                        className: "font-script text-6xl text-gold sm:text-7xl",
                        children: "Dhanyavaad"
                    }), h.jsx(dn, {
                        className: "mx-auto my-6 max-w-xs"
                    }), h.jsx("p", {
                        className: "font-serif-lux text-lg italic text-champagne",
                        children: "Your blessings have reached us."
                    })]
                }) : h.jsxs("div", {
                    className: "relative space-y-6",
                    children: [h.jsx("p", {
                        className: "text-center font-serif-lux italic text-champagne/80",
                        children: "Your presence will make our celebration complete."
                    }), h.jsxs("div", {
                        className: "grid gap-5 sm:grid-cols-2",
                        children: [h.jsxs("div", {
                            className: "field-float",
                            children: [h.jsx("input", {
                                required: !0,
                                type: "text",
                                name: "name",
                                placeholder: " ",
                                className: "field-input peer"
                            }), h.jsx("label", {
                                className: "field-label",
                                children: "Full Name"
                            })]
                        }), h.jsxs("div", {
                            className: "field-float",
                            children: [h.jsx("input", {
                                required: !0,
                                type: "tel",
                                name: "phone",
                                placeholder: " ",
                                className: "field-input peer"
                            }), h.jsx("label", {
                                className: "field-label",
                                children: "Phone Number"
                            })]
                        }), h.jsxs("div", {
                            className: "field-float",
                            children: [h.jsx("input", {
                                required: !0,
                                type: "number",
                                min: 1,
                                name: "guests",
                                placeholder: " ",
                                className: "field-input peer"
                            }), h.jsx("label", {
                                className: "field-label",
                                children: "Guest Count"
                            })]
                        }), h.jsxs("div", {
                            className: "field-float",
                            children: [h.jsxs("select", {
                                required: !0,
                                name: "attendance",
                                className: "field-input peer appearance-none",
                                children: [h.jsx("option", {
                                    value: "",
                                    className: "bg-night",
                                    children: "Select"
                                }), h.jsx("option", {
                                    className: "bg-night",
                                    children: "Joyfully attending"
                                }), h.jsx("option", {
                                    className: "bg-night",
                                    children: "Regretfully declines"
                                })]
                            }), h.jsx("label", {
                                className: "field-label",
                                children: "Attendance"
                            })]
                        })]
                    }), h.jsxs("div", {
                        className: "field-float",
                        children: [h.jsx("textarea", {
                            rows: 4,
                            name: "message",
                            placeholder: " ",
                            className: "field-input peer resize-none"
                        }), h.jsx("label", {
                            className: "field-label",
                            children: "Message / Blessing"
                        })]
                    }), h.jsx("div", {
                        className: "pt-2 text-center",
                        children: h.jsx("button", {
                            type: "submit",
                            className: "btn-royal w-full text-sm sm:w-auto sm:px-16",
                            children: "Send RSVP"
                        })
                    })]
                })]
            })]
        })]
    })
}
const va = {
    bride: {
        title: "Five Years",
        parents: "Mallesh & Sukanya",
        members: ["Five years of love and laughter", "A lifetime of memories to come"]
    },
    groom: {
        title: "Our Journey",
        parents: "Together, every step of the way",
        members: ["Celebrating 24 April 2027"]
    }
};
function Pf() {
    const o = kr();
    return h.jsx("section", {
        ref: o,
        className: "relative royal-bg py-24 sm:py-32",
        children: h.jsxs("div", {
            className: "relative mx-auto max-w-5xl px-6",
            children: [h.jsx($r, {
                kicker: "OUR LOVED ONES",
                title: "The Families"
            }), h.jsx("div", {
                className: "grid gap-10 md:grid-cols-2",
                children: [va.bride, va.groom].map(e => h.jsxs("div", {
                    "data-reveal": !0,
                    className: "luxury-card p-8 text-center sm:p-10",
                    children: [h.jsx("p", {
                        className: "font-display text-[10px] tracking-[0.4em] text-gold",
                        children: e.title.toUpperCase()
                    }), h.jsx(dn, {
                        className: "my-5"
                    }), h.jsx("h3", {
                        className: "font-serif-lux text-2xl text-ivory",
                        children: e.parents
                    }), h.jsx("div", {
                        className: "gold-divider mx-auto my-5 w-16"
                    }), h.jsx("ul", {
                        className: "space-y-2 font-serif-lux italic text-champagne/90",
                        children: e.members.map(t => h.jsx("li", {
                            children: t
                        }, t))
                    })]
                }, e.title))
            })]
        })
    })
}
function jf() {
    const o = de.useRef(null);
    return de.useEffect( () => {
        if (!o.current)
            return;
        const e = o.current.querySelectorAll("[data-sched-item]")
          , t = o.current.querySelector("[data-sched-line]");
        t && Kt.fromTo(t, {
            scaleY: 0,
            transformOrigin: "top center"
        }, {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
                trigger: o.current,
                start: "top 70%",
                end: "bottom 80%",
                scrub: !0
            }
        }),
        e.forEach( (r, n) => {
            const i = n % 2 === 0 ? -60 : 60;
            Kt.fromTo(r, {
                x: i,
                autoAlpha: 0,
                y: 30
            }, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 1.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: r,
                    start: "top 80%"
                }
            });
            const s = r.querySelector("[data-sched-dot]");
            s && Kt.fromTo(s, {
                scale: 0,
                boxShadow: "0 0 0 rgba(212,175,55,0)"
            }, {
                scale: 1,
                duration: .8,
                ease: "back.out(2)",
                scrollTrigger: {
                    trigger: r,
                    start: "top 80%"
                }
            })
        }
        )
    }
    , []),
    h.jsx("section", {
        ref: o,
        className: "relative bg-night py-28 sm:py-36",
        children: h.jsxs("div", {
            className: "relative mx-auto max-w-4xl px-4 sm:px-6",
            children: [h.jsx($r, {
                kicker: "SAVE THE DATE",
                title: "Anniversary Celebration"
            }), h.jsxs("div", {
                className: "relative mt-10",
                children: [h.jsx("div", {
                    className: "pointer-events-none absolute left-4 top-0 h-full w-px bg-gold/10 sm:left-1/2 sm:-translate-x-1/2"
                }), h.jsx("div", {
                    "data-sched-line": !0,
                    className: "pointer-events-none absolute left-4 top-0 h-full w-[2px] sm:left-1/2 sm:-translate-x-1/2",
                    style: {
                        background: "linear-gradient(180deg, transparent, #D4AF37 15%, #D4AF37 85%, transparent)",
                        boxShadow: "0 0 18px rgba(212,175,55,0.45)"
                    }
                }), h.jsx("div", {
                    className: "space-y-12 sm:space-y-28",
                    children: Hl.map( (e, t) => {
                        const r = t % 2 === 0;
                        return h.jsxs("div", {
                            "data-sched-item": !0,
                            className: "relative flex items-start gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-8",
                            children: [h.jsx("div", {
                                className: `hidden sm:block ${r ? "text-right" : ""}`,
                                children: r && h.jsx(ks, {
                                    event: e,
                                    index: t,
                                    align: "right"
                                })
                            }), h.jsx("div", {
                                className: "relative mt-2 flex h-8 w-8 shrink-0 items-center justify-center sm:mt-0",
                                children: h.jsx("span", {
                                    "data-sched-dot": !0,
                                    className: "block h-4 w-4 rounded-full bg-gold",
                                    style: {
                                        boxShadow: "0 0 0 4px rgba(212,175,55,0.18), 0 0 28px rgba(212,175,55,0.85)"
                                    }
                                })
                            }), h.jsx("div", {
                                className: "min-w-0 flex-1 sm:hidden",
                                children: h.jsx(ks, {
                                    event: e,
                                    index: t,
                                    align: "left"
                                })
                            }), h.jsx("div", {
                                className: `hidden sm:block ${r ? "" : "text-left"}`,
                                children: !r && h.jsx(ks, {
                                    event: e,
                                    index: t,
                                    align: "left"
                                })
                            })]
                        }, e.name)
                    }
                    )
                })]
            })]
        })
    })
}
function ks({event: o, index: e, align: t}) {
    return h.jsxs("div", {
        className: `luxury-card inline-block w-full max-w-md rounded-xl p-5 sm:p-8 ${t === "right" ? "text-right" : "text-left"}`,
        children: [h.jsxs("div", {
            className: `flex items-center gap-3 ${t === "right" ? "justify-end" : "justify-start"}`,
            children: [h.jsx("span", {
                className: "text-2xl text-gold",
                children: o.icon
            }), h.jsxs("p", {
                className: "font-display text-[10px] tracking-[0.4em] text-gold",
                children: ["DAY ", e + 1]
            })]
        }), h.jsx("h3", {
            className: "mt-3 font-serif-lux text-2xl text-ivory sm:text-4xl",
            children: o.name
        }), h.jsx("div", {
            className: `gold-divider my-4 w-16 ${t === "right" ? "ml-auto" : ""}`
        }), h.jsxs("p", {
            className: "font-serif-lux text-base italic text-champagne",
            children: [o.date, " · ", o.time]
        }), h.jsx("p", {
            className: "mt-1 text-sm text-champagne/70",
            children: o.venue
        })]
    })
}
function Mf() {
    const o = kr();
    return h.jsxs("section", {
        ref: o,
        className: "relative royal-bg py-24 sm:py-32",
        children: [h.jsx(wi, {}), h.jsxs("div", {
            "data-reveal": !0,
            className: "relative mx-auto max-w-3xl px-6 text-center",
            children: [h.jsx("p", {
                className: "font-script text-7xl text-gold sm:text-8xl",
                children: '"'
            }), h.jsx("p", {
                className: "-mt-6 font-serif-lux text-2xl italic leading-relaxed text-ivory sm:text-3xl md:text-4xl",
                children: "Your love and blessings have made these five years even more beautiful. Thank you for being part of our story."
            }), h.jsx(dn, {
                className: "mx-auto mt-8 max-w-xs"
            }), h.jsx("p", {
                className: "mt-4 font-display text-xs tracking-[0.4em] text-gold",
                children: "— MALLESH & SUKANYA"
            })]
        })]
    })
}
function Nf() {
    return h.jsxs("footer", {
        className: "relative bg-night py-16 text-center",
        children: [h.jsx("div", {
            className: "gold-divider mx-auto mb-10 max-w-md"
        }), h.jsxs("div", {
            className: "px-6",
            children: [h.jsx("p", {
                className: "font-script text-5xl text-gold",
                children: "Mallesh & Sukanya"
            }), h.jsx("p", {
                className: "mt-2 font-display text-xs tracking-[0.4em] text-champagne",
                children: "24 · APRIL · 2027"
            }), h.jsx(dn, {
                className: "mx-auto my-6 max-w-xs"
            }), h.jsx("p", {
                className: "font-serif-lux italic text-champagne/80",
                children: "With love and gratitude — thank you for being part of our story."
            }), h.jsx("div", {
                className: "mt-6 flex justify-center gap-5 text-gold",
                children: ["Instagram", "Facebook", "WhatsApp"].map(o => h.jsx("a", {
                    href: "#",
                    className: "font-display text-[10px] tracking-[0.3em] hover:text-champagne",
                    children: o.toUpperCase()
                }, o))
            }), h.jsx("p", {
                className: "mt-8 text-[10px] tracking-[0.3em] text-champagne/40",
                children: "© 2027 · CELEBRATING FIVE YEARS OF LOVE"
            })]
        })]
    })
}
function Ef() {
    const [o,e] = de.useState(!1);
    return h.jsxs("main", {
        className: "relative",
        children: [h.jsx(fu, {
            onOpen: () => e(!0)
        }), h.jsx(du, {
            active: o
        }), h.jsx(yf, {}), h.jsx(bf, {}), h.jsx(wf, {}), h.jsx(Tf, {}), h.jsx(Sf, {}), h.jsx(kf, {}), h.jsx(jf, {        }), null, h.jsx(Mf, {}), h.jsx(Cf, {}), h.jsx(Nf, {})]
    })
}
export {Ef as component};
