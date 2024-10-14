!function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
    "use strict";
    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        e(t)
    }
    function t(e) {
        return function(t) {
            var n = t.dispatch
              , r = t.getState;
            return function(t) {
                return function(o) {
                    return "function" == typeof o ? o(n, r, e) : t(o)
                }
            }
        }
    }
    !function(t) {
        var n = function(t) {
            var n, r = Object.prototype, o = r.hasOwnProperty, a = "function" == typeof Symbol ? Symbol : {}, i = a.iterator || "@@iterator", c = a.asyncIterator || "@@asyncIterator", u = a.toStringTag || "@@toStringTag";
            function l(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                l({}, "")
            } catch (e) {
                l = function(e, t, n) {
                    return e[t] = n
                }
            }
            function s(e, t, n, r) {
                var o = t && t.prototype instanceof b ? t : b
                  , a = Object.create(o.prototype)
                  , i = new R(r || []);
                return a._invoke = function(e, t, n) {
                    var r = d;
                    return function(o, a) {
                        if (r === m)
                            throw new Error("Generator is already running");
                        if (r === h) {
                            if ("throw" === o)
                                throw a;
                            return P()
                        }
                        for (n.method = o,
                        n.arg = a; ; ) {
                            var i = n.delegate;
                            if (i) {
                                var c = S(i, n);
                                if (c) {
                                    if (c === y)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === d)
                                    throw r = h,
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = m;
                            var u = f(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? h : p,
                                u.arg === y)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = h,
                            n.method = "throw",
                            n.arg = u.arg)
                        }
                    }
                }(e, n, i),
                a
            }
            function f(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            t.wrap = s;
            var d = "suspendedStart"
              , p = "suspendedYield"
              , m = "executing"
              , h = "completed"
              , y = {};
            function b() {}
            function v() {}
            function g() {}
            var O = {};
            l(O, i, (function() {
                return this
            }
            ));
            var _ = Object.getPrototypeOf
              , E = _ && _(_(I([])));
            E && E !== r && o.call(E, i) && (O = E);
            var w = g.prototype = b.prototype = Object.create(O);
            function A(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    l(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function C(t, n) {
                function r(a, i, c, u) {
                    var l = f(t[a], t, i);
                    if ("throw" !== l.type) {
                        var s = l.arg
                          , d = s.value;
                        return d && "object" === e(d) && o.call(d, "__await") ? n.resolve(d.__await).then((function(e) {
                            r("next", e, c, u)
                        }
                        ), (function(e) {
                            r("throw", e, c, u)
                        }
                        )) : n.resolve(d).then((function(e) {
                            s.value = e,
                            c(s)
                        }
                        ), (function(e) {
                            return r("throw", e, c, u)
                        }
                        ))
                    }
                    u(l.arg)
                }
                var a;
                this._invoke = function(e, t) {
                    function o() {
                        return new n((function(n, o) {
                            r(e, t, n, o)
                        }
                        ))
                    }
                    return a = a ? a.then(o, o) : o()
                }
            }
            function S(e, t) {
                var r = e.iterator[t.method];
                if (r === n) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = n,
                        S(e, t),
                        "throw" === t.method))
                            return y;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var o = f(r, e.iterator, t.arg);
                if ("throw" === o.type)
                    return t.method = "throw",
                    t.arg = o.arg,
                    t.delegate = null,
                    y;
                var a = o.arg;
                return a ? a.done ? (t[e.resultName] = a.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = n),
                t.delegate = null,
                y) : a : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                y)
            }
            function j(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function T(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function R(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(j, this),
                this.reset(!0)
            }
            function I(e) {
                if (e) {
                    var t = e[i];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var r = -1
                          , a = function t() {
                            for (; ++r < e.length; )
                                if (o.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = n,
                            t.done = !0,
                            t
                        };
                        return a.next = a
                    }
                }
                return {
                    next: P
                }
            }
            function P() {
                return {
                    value: n,
                    done: !0
                }
            }
            return v.prototype = g,
            l(w, "constructor", g),
            l(g, "constructor", v),
            v.displayName = l(g, u, "GeneratorFunction"),
            t.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            t.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g,
                l(e, u, "GeneratorFunction")),
                e.prototype = Object.create(w),
                e
            }
            ,
            t.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            A(C.prototype),
            l(C.prototype, c, (function() {
                return this
            }
            )),
            t.AsyncIterator = C,
            t.async = function(e, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new C(s(e, n, r, o),a);
                return t.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }
                ))
            }
            ,
            A(w),
            l(w, u, "Generator"),
            l(w, i, (function() {
                return this
            }
            )),
            l(w, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            t.values = I,
            R.prototype = {
                constructor: R,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = n,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = n,
                    this.tryEntries.forEach(T),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function r(r, o) {
                        return c.type = "throw",
                        c.arg = e,
                        t.next = r,
                        o && (t.method = "next",
                        t.arg = n),
                        !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a]
                          , c = i.completion;
                        if ("root" === i.tryLoc)
                            return r("end");
                        if (i.tryLoc <= this.prev) {
                            var u = o.call(i, "catchLoc")
                              , l = o.call(i, "finallyLoc");
                            if (u && l) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            } else if (u) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0)
                            } else {
                                if (!l)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e,
                    i.arg = t,
                    a ? (this.method = "next",
                    this.next = a.finallyLoc,
                    y) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    y
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            T(n),
                            y
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                T(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, r) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: t,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = n),
                    y
                }
            },
            t
        }(t.exports);
        try {
            regeneratorRuntime = n
        } catch (t) {
            "object" === ("undefined" == typeof globalThis ? "undefined" : e(globalThis)) ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n)
        }
    }({
        exports: {}
    });
    var n = t();
    n.withExtraArgument = t;
    var r = n
      , o = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
      , a = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
        return function() {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t, r = "", o = n; o--; )
                r += e[Math.random() * e.length | 0];
            return r
        }
    }
      , i = function() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21, t = "", n = e; n--; )
            t += o[64 * Math.random() | 0];
        return t
    };
    function c() {
        var e = {};
        function t(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            1 === arguments.length && !0 === arguments[0] && (t = !0),
            e = Number.isInteger(e) && e > 0 ? e : 10;
            var n = (!0 === t ? a("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 3 * e) : i.bind(null, 3 * e))();
            return n.replace(/_/g, "-").replace(/(^[-\d]+?|-+?$)/g, "").slice(0, e)
        }
        return (c = function() {
            for (var n = t(); n in e && (n = t()); )
                ;
            return e[n] = 1,
            n
        }
        )()
    }
    var u = c()
      , l = c()
      , s = c()
      , f = c()
      , d = c()
      , p = c()
      , m = c()
      , h = c()
      , y = c()
      , b = c()
      , v = c()
      , g = c()
      , O = c()
      , _ = c()
      , E = c()
      , w = c();
    function A(e) {
        return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        A(e)
    }
    function C(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return S(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return i = e.done,
                e
            },
            e: function(e) {
                c = !0,
                a = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (c)
                        throw a
                }
            }
        }
    }
    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function j() {}
    function T(e) {
        return e
    }
    function R(e) {
        return function() {
            return e
        }
    }
    function I(e) {
        return "string" == typeof e
    }
    function P(e) {
        return "boolean" == typeof e
    }
    function D(e) {
        return "function" == typeof e
    }
    function N(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function M(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return Object.defineProperties(e, N(t) ? Object.keys(t).reduce((function(e, r) {
            return e[r] = {
                enumerable: !0,
                writable: !0 === n,
                value: t[r]
            },
            e
        }
        ), {}) : {})
    }
    function k(e, t) {
        var n = D(t) ? t.length ? {
            setter: t
        } : {
            getter: t
        } : N(t) ? t : {}
          , r = n.getter
          , o = n.setter
          , a = n.extendable
          , i = void 0 === a ? arguments[2] : a;
        Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0 === i,
            get: D(r) ? r.bind(this) : j,
            set: D(o) ? o.bind(this) : j
        })
    }
    function x(e, t) {
        return D(e) ? e : D(t) ? t : j
    }
    function L(e, t) {
        return e instanceof RegExp && t && e.test(String(t).trim()) && t.trim() || null
    }
    function $(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return [!0, "true", 1, "1"].indexOf(e) >= 0 || !([!1, "false", 0, "0"].indexOf(e) >= 0) && !0 === $(t)
    }
    function U(e, t) {
        t = (t ? String(t) : String()).replace(/\[((?:['"])?)([^[\]]*)\1\]/g, (function(e, t, n) {
            return ".".concat(Number(n) || String(n))
        }
        )).split(/\.+/).filter(Boolean);
        var n, r = e, o = C(t);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                var a = n.value;
                try {
                    if (void 0 === (r = (r instanceof Object || N(r)) && a in r ? r[a] : r[r instanceof Array ? Number(a) : a]))
                        break
                } catch (e) {
                    r = void 0;
                    break
                }
            }
        } catch (e) {
            o.e(e)
        } finally {
            o.f()
        }
        return r
    }
    function V(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          , n = this || Object.create(null);
        if (N(e)) {
            var r = k.bind(n);
            Object.keys(e).forEach((function(t) {
                r(t, e[t])
            }
            ))
        }
        return !1 === t || n === this ? n : Object.freeze(n)
    }
    function F(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        function n(e) {
            var t, n = this;
            function r() {
                return t
            }
            function o(e) {
                t = e
            }
            return arguments.length && (I(e) || "symbol" === A(e)) && N(n) && (o = function(r) {
                t !== r && (n[e]instanceof Array && n[e].forEach((function(e) {
                    D(e) && e(r, t)
                }
                )),
                t = r)
            }
            ),
            {
                getter: r,
                setter: o
            }
        }
        return F = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , r = N(e);
            return V.call(this, [].concat(r ? Object.keys(e) : e).reduce((function(t, o) {
                return (I(o) || "symbol" === A(o)) && (t[o] = r ? n.call(e, o) : n()),
                t
            }
            ), {}), t)
        }
        ,
        F(e, t)
    }
    function B(e) {
        return [].concat(e).filter(Boolean)
    }
    function G(e, t) {
        return (e = B(e)).concat(e.indexOf(t) < 0 ? t : [])
    }
    function H(e, t) {
        var n = (e = B(e)).indexOf(t);
        return n = ~n ? n : e.length,
        e.slice(0, n).concat(e.slice(n + 1))
    }
    function z() {
        var e = Object.create(null);
        return M(e, {
            NAME: "dcc",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = N(t.payload) ? t.payload : {};
                if (t.type === y) {
                    var r = n.dcc;
                    return r || null
                }
                return e
            }
        }),
        z = e
    }
    var W = function() {
        var e = 2147483647
          , t = -2147483648;
        function n(e) {
            return (1 << e) - 1
        }
        function r(e, t) {
            return t ? e & n(t) : e
        }
        return {
            MAX_NUMBER: e,
            MIN_NUMBER: t,
            clamp: function(e, t) {
                return Math.min(e, n(t))
            },
            difference: function(e, t, n) {
                return r(e, n) ^ r(t, n)
            },
            maxima: n,
            overflows: function(e, t) {
                return e !== r(e, t)
            },
            size: function(n) {
                return n >= t && n <= e ? n >= 0 ? Math.ceil(Math.log2(n + 1)) : 31 : null
            },
            truncate: r
        }
    }();
    var K = function(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
        n.observable = t) : t = "@@observable",
        t
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : module);
    function q(e) {
        return q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        q(e)
    }
    var Y = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    }
      , Z = {
        INIT: "@@redux/INIT" + Y(),
        REPLACE: "@@redux/REPLACE" + Y(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Y()
        }
    };
    function Q(e) {
        if ("object" !== q(e) || null === e)
            return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }
    function X(e, t) {
        var n = t && t.type;
        return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }
    function J(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
            var o = t[r];
            "function" == typeof e[o] && (n[o] = e[o])
        }
        var a, i = Object.keys(n);
        try {
            !function(e) {
                Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    if (void 0 === n(void 0, {
                        type: Z.INIT
                    }))
                        throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                    if (void 0 === n(void 0, {
                        type: Z.PROBE_UNKNOWN_ACTION()
                    }))
                        throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + Z.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                }
                ))
            }(n)
        } catch (e) {
            a = e
        }
        return function(e, t) {
            if (void 0 === e && (e = {}),
            a)
                throw a;
            for (var r = !1, o = {}, c = 0; c < i.length; c++) {
                var u = i[c]
                  , l = n[u]
                  , s = e[u]
                  , f = l(s, t);
                if (void 0 === f) {
                    var d = X(u, t);
                    throw new Error(d)
                }
                o[u] = f,
                r = r || f !== s
            }
            return (r = r || i.length !== Object.keys(e).length) ? o : e
        }
    }
    function ee(e, t) {
        return function() {
            return t(e.apply(this, arguments))
        }
    }
    function te(e, t) {
        if ("function" == typeof e)
            return ee(e, t);
        if ("object" !== q(e) || null === e)
            throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : q(e)) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        var n = {};
        for (var r in e) {
            var o = e[r];
            "function" == typeof o && (n[r] = ee(o, t))
        }
        return n
    }
    function ne(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function re(e, t) {
        var n = Object.keys(e);
        return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)),
        t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        n
    }
    function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? re(n, !0).forEach((function(t) {
                ne(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(n).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function ae() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e
        }
        : 1 === t.length ? t[0] : t.reduce((function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments))
            }
        }
        ))
    }
    var ie = V({
        localStorage: function() {
            try {
                if ("localStorage"in self) {
                    var e, t = "___".concat(Date.now()).concat(String(1e5 * Math.random()).split(".")[1], "___");
                    return localStorage.setItem(t, "1"),
                    e = localStorage.getItem(t),
                    localStorage.removeItem(t),
                    "1" === e
                }
            } catch (e) {}
            return !1
        },
        matchMedia: function() {
            return "matchMedia"in self
        },
        performance: function() {
            return "performance"in self && D(performance.now)
        },
        worker: function() {
            return "Worker"in self
        }
    });
    function ce(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return ue(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ue(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return i = e.done,
                e
            },
            e: function(e) {
                c = !0,
                a = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (c)
                        throw a
                }
            }
        }
    }
    function ue(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var le = ["no-preference", "light", "dark"]
      , se = V({
        browser: function() {
            var e = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
              , t = "undefined" != typeof InstallTrigger
              , n = /constructor/i.test(window.HTMLElement) || (i = !window.safari || n.pushNotification,
            "[object SafariRemoteNotification]" === i.toString())
              , r = !!document.documentMode
              , o = !r && !!window.StyleMedia
              , a = !!window.chrome && !!window.chrome.webstore;
            var i;
            return withProperties(Object.create(null), {
                chrome: a,
                edge: o,
                firefox: t,
                ie: r,
                opera: e,
                safari: n
            })
        },
        cookies: fe,
        darkMode: function() {
            return "dark" === de()
        },
        isMobile: function() {
            return e = navigator.userAgent || navigator.vendor || window.opera,
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4));
            var e
        },
        thirdPartyCookies: function() {
            return fe() && ie.localStorage
        }
    });
    function fe() {
        return "navigator"in self && navigator.cookieEnabled
    }
    function de() {
        if (ie.matchMedia) {
            var e, t = ce(le);
            try {
                for (t.s(); !(e = t.n()).done; ) {
                    var n = e.value;
                    if (matchMedia("(prefers-color-scheme: ".concat(n, ")")).matches)
                        return "no-preference" !== n ? n : null
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
        }
        return null
    }
    function pe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function me(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? pe(Object(n), !0).forEach((function(t) {
                he(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function he(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var ye, be, ve, ge = {
        darkMode: !1,
        overrideSystem: !1
    }, Oe = 0;
    function _e() {
        var e = Object.create(null)
          , t = this.dispatch;
        function n() {
            return W.truncate(Oe, 2)
        }
        function r(e) {
            Oe = W.truncate(e, 2)
        }
        function o() {
            return !!(1 & n())
        }
        function a() {
            return function(t) {
                e.STATE.overrideSystem ? D(ye) && ye((function() {
                    ye = void 0
                }
                )) : D(ye) || (ye = function(e) {
                    if (ie.matchMedia) {
                        var t, n, r, o, a;
                        function i(e) {
                            e.matches || c(u)
                        }
                        function c(e) {
                            r(i),
                            D(e) && e()
                        }
                        function u() {
                            var c = t;
                            t = de() || "no-preference",
                            a = matchMedia("(prefers-color-scheme: ".concat(t, ")")),
                            void 0 === o && (o = D(a.addEventListener)),
                            o ? (n = a.addEventListener.bind(a, "change"),
                            r = a.removeEventListener.bind(a, "change")) : (n = a.addListener.bind(a),
                            r = a.removeListener.bind(a)),
                            n(i),
                            void 0 !== c && e(t, c)
                        }
                        return e = x(e),
                        u(),
                        c
                    }
                }((function(e) {
                    t({
                        type: v,
                        payload: {
                            dark: "dark" === e
                        }
                    })
                }
                )))
            }
        }
        function i(t) {
            return function(o) {
                var a = e.STATE
                  , i = a.darkMode;
                a.overrideSystem && (t = !0 === t) !== i && (o({
                    type: v,
                    payload: {
                        dark: t
                    }
                }),
                r(1 ^ n()))
            }
        }
        function c(t) {
            return function(o) {
                var i = e.STATE.overrideSystem;
                (t = !0 === t) !== i && (o({
                    type: g,
                    payload: {
                        override: t
                    }
                }),
                r(2 ^ n()),
                o(a()))
            }
        }
        return M(e, {
            NAME: "color",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ge
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = N(t.payload) ? t.payload : {};
                switch (t.type) {
                case v:
                    var r = n.dark
                      , a = e.darkMode;
                    return (r = !0 === r) !== a ? me(me({}, e), {}, {
                        darkMode: r
                    }) : e;
                case g:
                    var i = n.override
                      , c = e.overrideSystem;
                    return (i = !0 === i) !== c ? {
                        darkMode: i ? o() : se.darkMode,
                        overrideSystem: i
                    } : e;
                default:
                    return e
                }
            },
            actions: M(Object.create(null), {
                updateDarkMode: i,
                updateOverrideSystem: c
            }),
            exposedActions: M(Object.create(null), {
                AutoColorMode: te({
                    on: function() {
                        return function(e) {
                            e(c(!1))
                        }
                    },
                    off: function() {
                        return function(e) {
                            e(c(!0))
                        }
                    }
                }, t),
                DarkMode: te({
                    on: function() {
                        return function(e) {
                            e(i(!0))
                        }
                    },
                    off: function() {
                        return function(e) {
                            e(i(!1))
                        }
                    }
                }, t)
            })
        }),
        setTimeout((function() {
            var e = !!(2 & n());
            t({
                type: g,
                payload: {
                    override: e
                }
            }),
            t({
                type: v,
                payload: {
                    dark: e ? o() : se.darkMode
                }
            }),
            t(a())
        }
        ), 0),
        _e = e
    }
    function Ee() {
        var e = Object.create(null)
          , t = 0;
        return M(e, {
            NAME: "error",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = N(t.payload) ? t.payload : {};
                if (t.type === b) {
                    var r = n.error;
                    return (I(r) ? r.trim() : "") || null
                }
                return e
            },
            actions: M(Object.create(null), {
                updateErrorMessage: function(e, n) {
                    var r = arguments;
                    return function(o, a) {
                        var i = U(a(), "error");
                        ((I(e) ? e.trim() : "") || null) !== i && (n = r.length > 1 ? isNaN(n = Number(n)) ? 1 / 0 : Math.round(1e3 * Math.max(n, 10)) : 1 / 0,
                        t && (clearTimeout(t),
                        t = 0),
                        o({
                            type: b,
                            payload: {
                                error: e
                            }
                        }),
                        n !== 1 / 0 && (t = setTimeout((function() {
                            clearTimeout(t),
                            t = 0,
                            o({
                                type: b
                            })
                        }
                        ), n)))
                    }
                }
            })
        }),
        Ee = e
    }
    function we() {
        var e = Object.create(null)
          , t = this.data;
        return M(e, {
            NAME: "amount",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U(t, "amount") || null
                  , n = arguments.length > 1 ? arguments[1] : void 0
                  , r = N(n.payload) ? n.payload : {};
                if (n.type === h) {
                    var o = r.amount;
                    return +o || e
                }
                return e
            },
            actions: M(Object.create(null), {
                updateChargeAmount: function(e) {
                    return function(t) {
                        t({
                            type: h,
                            payload: {
                                amount: U(e, "charge_amount") || e
                            }
                        }),
                        t({
                            type: y,
                            payload: {
                                dcc: U(e, "dcc")
                            }
                        })
                    }
                }
            })
        }),
        we = e
    }
    function Ae(e) {
        return e = N(e) ? e : {},
        M(Object.create(null), Object.keys(e).reduce((function(t, n) {
            var r = e[n];
            return t[n] = R(null == r ? null : r),
            t
        }
        ), {}))
    }
    function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ce(Object(n), !0).forEach((function(t) {
                je(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function je(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Te() {
        var e, t = Object.create(null), n = this.data, r = {
            new_amount: U(n, "new_amount"),
            is_discounted: U(n, "is_discounted"),
            discount: U(n, "discount"),
            discounted_value: U(n, "discounted_value"),
            discount_type: U(n, "discount_type")
        };
        U(n, "campaign") && (e = Se(Se({}, U(n, "campaign")), r));
        var o = Ae(Se({}, e));
        return M(t, {
            NAME: "campaign",
            Reducer: J(Se({}, o))
        }),
        Te = t
    }
    function Re(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    Re(be = {}, 1, "TEXT"),
    Re(be, 2, "CLASS"),
    Re(be, 4, "STYLE"),
    Re(be, 8, "PROPS"),
    Re(be, 16, "FULL_PROPS"),
    Re(be, 32, "HYDRATE_EVENTS"),
    Re(be, 64, "STABLE_FRAGMENT"),
    Re(be, 128, "KEYED_FRAGMENT"),
    Re(be, 256, "UNKEYED_FRAGMENT"),
    Re(be, 512, "NEED_PATCH"),
    Re(be, 1024, "DYNAMIC_SLOTS"),
    Re(be, 2048, "DEV_ROOT_FRAGMENT"),
    Re(be, -1, "HOISTED"),
    Re(be, -2, "BAIL"),
    Re(ve = {}, 1, "STABLE"),
    Re(ve, 2, "DYNAMIC"),
    Re(ve, 3, "FORWARDED");
    var Ie = Object.prototype.toString
      , Pe = function(e) {
        return "[object Object]" === (t = e,
        Ie.call(t));
        var t
    }
      , De = Object.freeze(function() {
        try {
            return new DOMException("Aborted","AbortError")
        } catch (e) {
            return Me("Aborted", "AbortError")
        }
    }())
      , Ne = Object.freeze(Me("Timeout", "TimeoutError"));
    function Me(e, t) {
        var n = new Error(e);
        return n.name = t,
        n
    }
    function ke(e) {
        return ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        ke(e)
    }
    function xe() {}
    function Le(e) {
        return function() {
            return e
        }
    }
    function $e(e) {
        return e && "function" == typeof e
    }
    function Ue(e) {
        return e && "object" === ke(e) && $e(e.then) && e instanceof Promise
    }
    function Ve(e) {
        return e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function Fe(e) {
        return Ve(e) && 0 === Object.getOwnPropertyNames(e).length
    }
    function Be(e) {
        return e && "object" === ke(e) && $e(e.clone) && e instanceof Response
    }
    function Ge(e) {
        return e && "object" === ke(e) && "boolean" == typeof e.aborted && e instanceof AbortSignal
    }
    function He(e) {
        return Ge(e) && e.aborted
    }
    function ze(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t = !0 === t,
        Object.defineProperties(this, Object.keys(e).reduce((function(n, r) {
            return n[r] = {
                writable: t,
                value: e[r]
            },
            n
        }
        ), Object.create(null)))
    }
    var We = Object.freeze(new Promise(xe))
      , Ke = Object.freeze(Promise.reject.bind(Promise))
      , qe = Object.freeze(Promise.resolve.bind(Promise));
    function Ye() {
        var e = new AbortController;
        return {
            signal: e.signal,
            abort: e.abort.bind(e)
        }
    }
    function Ze(e) {
        return Ge(e) && !He(e) ? new Promise((function(t, n) {
            e.addEventListener("abort", (function() {
                return n(De)
            }
            ))
        }
        )) : We
    }
    var Qe = 1e4
      , Xe = ["cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal"];
    var Je = "RF-OPTRY"
      , et = Object.freeze(Le(0))
      , tt = rt((function(e) {
        return 10 * ot(e)
    }
    ))
      , nt = rt((function(e) {
        return 10 * (1 << Math.max(e >> 2, 10))
    }
    ));
    function rt(e) {
        return e = $e(e) ? e : et,
        Object.freeze((function(t) {
            var n;
            return e !== et && void 0 !== e["RF-OPTRY"] && (n = e["RF-OPTRY"]),
            t = Math.min(Math.max(0, t), 10) || 1,
            function(r) {
                var o = (r = Math.max(0, Math.min(r, 1 / 0)) || 0) >= n ? Qe : Math.min(e(r), Qe);
                if (o >= Qe && void 0 === n)
                    try {
                        e !== et && Object.defineProperty(e, Je, {
                            value: r
                        })
                    } finally {
                        n = r
                    }
                return o * t
            }
        }
        ))
    }
    function ot(e) {
        var t = [];
        return ot = function e(n) {
            switch (!0) {
            case n > 0 && t[n]:
                return t[n];
            case n <= 0:
                return t[n] = 0;
            case n <= 2:
                return t[n] = 1;
            default:
                return t[n] = e(n - 1) + e(n - 2)
            }
        }
        ,
        ot(e)
    }
    function at(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
            return Ke(Ne)
        }
          , n = 0
          , r = Ye()
          , o = r.signal
          , a = r.abort
          , i = He(o) ? c(Ke) : new Promise((function(r, a) {
            n = setTimeout((function() {
                c((function() {
                    r($e(t) ? t() : t)
                }
                ))
            }
            ), e),
            o.addEventListener("abort", (function() {
                c(a)
            }
            ))
        }
        ));
        return Object.defineProperty(i, "clear", {
            value: a
        });
        function c(e) {
            return n && clearTimeout(n),
            n = 0,
            (c = function(e) {
                return $e(e) && e()
            }
            )(e)
        }
    }
    function it(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return e = Math.max(0, e = +parseFloat(e)),
        e = Number.isFinite(e) ? e : +parseFloat(t),
        Number.isFinite(e) ? e : 0
    }
    function ct(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function ut(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ct(Object(n), !0).forEach((function(t) {
                lt(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function lt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function st(e) {
        return function(e) {
            if (Array.isArray(e))
                return ft(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return ft(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return ft(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function ft(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function dt(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var pt = Object.freeze(["delay", "init", "limit", "many", "one", "retry", "timeout"].reduce((function(e, t) {
        return e[t] = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return e = "$".concat(e),
            lt({}, !0 === t ? "get" : "value", (function() {
                try {
                    if ($e(Object.getPrototypeOf(this.$context)[e])) {
                        var t, n = (t = this.$context.$$clone())[e].apply(t, arguments);
                        return yt.call(n)
                    }
                } catch (e) {}
                return this
            }
            ))
        }(t, ["many", "one"].indexOf(t) >= 0),
        e
    }
    ), {}))
      , mt = Object.freeze(ze.call(Object.create(null), {
        $delay: function(e) {
            if (!$e(e))
                if (0 === (e = it(e)))
                    e = et;
                else
                    e = Le(e);
            return $e(e) && e !== this.retryDelaySequence && (this.retryDelaySequence = e),
            this
        },
        $init: function(e) {
            var t = Ve(e) ? e : {}
              , n = t.headers
              , r = dt(t, ["headers"])
              , o = Object.keys(r).reduce((function(e, t) {
                if (Xe.indexOf(t) >= 0) {
                    var n = r[t];
                    void 0 !== n && e.push(function(e, t) {
                        var n = Xe.indexOf(e) >= 0 && "headers" !== e
                          , r = arguments.length > 1;
                        return n && r ? function(n) {
                            Ve(n) && !Object.hasOwnProperty(n, e) && (n[e] = t)
                        }
                        : xe
                    }(t, n))
                }
                return e
            }
            ), []);
            return void 0 !== n && o.push(function(e) {
                return Ve(e) && !Fe(e) && (e = new Headers(e)),
                e instanceof Headers ? function(t) {
                    if (Ve(t)) {
                        var n = t.headers;
                        (n = new Headers(Ve(n) ? n : {}))instanceof Headers && (e.forEach((function(e, t) {
                            try {
                                n.has(t) || n.set(t, e)
                            } catch (e) {}
                        }
                        )),
                        t.headers = n)
                    }
                }
                : xe
            }(n)),
            this.initResolvers = o,
            this
        },
        $limit: function(e) {
            return e = 0 == (e = +e) ? 0 : Math.max(0, e),
            Number.isInteger(e) && this.limit !== (e = 0 === e ? 1 / 0 : e) && (this.limit = e),
            this
        },
        $many: function() {
            return !1 === this.multiple && (this.multiple = !0),
            this
        },
        $one: function() {
            return !0 === this.multiple && (this.multiple = !1),
            this
        },
        $retry: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var r = (t = t.filter($e)).length;
            return (r || 0 === r && r !== this.retryPredicates.length) && (this.retryPredicates = t),
            this
        },
        $timeout: function(e) {
            return e = 0 == (e = +e) ? 0 : Math.max(50, Math.min(e, 1e5)),
            Number.isFinite(e) && this.timeout !== e && (this.timeout = e),
            this
        },
        $$clone: function() {
            return ht.call(this)
        }
    }));
    function ht() {
        var e = this
          , t = Ve(e) && Object.getPrototypeOf(e) === mt;
        return ze.call(Object.create(mt), {
            limit: t ? e.limit : 1,
            timeout: t ? e.timeout : 0,
            multiple: !t || e.multiple,
            initResolvers: st(t ? e.initResolvers : []),
            retryPredicates: st(t ? e.retryPredicates : []),
            retryDelaySequence: t ? e.retryDelaySequence : et
        }, !0)
    }
    function yt() {
        var e, t, n = this, r = n.timeout > 0, o = !0 !== n.multiple;
        function a() {
            var n = Ye();
            e = n.abort,
            (t = n.signal).addEventListener("abort", a)
        }
        function i(e, r) {
            e = $e(e) ? e : noop,
            r = [].concat(r).filter(Ue);
            var o = 0;
            return function(a) {
                return function(e) {
                    return Promise.all(n.retryPredicates.map((function(t) {
                        return qe(t(Be(e) ? e.clone() : e)).then(Boolean, (function() {
                            return !1
                        }
                        ))
                    }
                    ))).then((function(e) {
                        return e.reduce((function(e, t) {
                            return e || t
                        }
                        ), !1)
                    }
                    ))
                }(a).then((function(i) {
                    return i && ++o < n.limit && a !== De ? new Promise((function(a, i) {
                        var c = at(it(n.retryDelaySequence(o)), e);
                        Promise.race([c, Ze(t)].concat(st(r))).catch((function(e) {
                            return e === De && $e(c.clear) && c.clear(),
                            Ke(e)
                        }
                        )).then(a, i)
                    }
                    )) : (Be(a) ? qe : Ke)(a)
                }
                ))
            }
        }
        function c(e) {
            return e = Ve(e) ? e : {},
            n.initResolvers.forEach((function(t) {
                return t(e)
            }
            )),
            e
        }
        function u() {
            o && e();
            for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
                l[s] = arguments[s];
            var f = l[0]
              , d = l[1]
              , p = c(d)
              , m = p.signal
              , h = dt(p, ["signal"])
              , y = Ze(m)
              , b = i(v, [y]);
            return v();
            function v() {
                if (He(m))
                    return Ke(De);
                He(t) && a();
                var e = Ye()
                  , o = r ? at(n.timeout) : We;
                return Promise.race([o, Ze(t), y, fetch(f, ut(ut({}, h), {}, {
                    signal: e.signal
                }))]).catch((function(t) {
                    return (t === De || t === Ne) && e.abort(),
                    Ke(t)
                }
                )).finally((function() {
                    r && $e(o.clear) && o.clear()
                }
                )).then(b, b)
            }
        }
        return a(),
        Object.defineProperties(Object.defineProperty(u, "abort", {
            enumerable: !0,
            get: function() {
                return e
            }
        }), pt),
        Object.defineProperty(u, "$context", {
            value: Object.freeze(n)
        })
    }
    function bt() {
        return yt.call(ht())
    }
    var vt = Object.freeze((function(e) {
        return !Be(e)
    }
    ))
      , gt = Object.freeze((function(e) {
        return !(Be(e) || e === De || e === Ne)
    }
    ))
      , Ot = Object.freeze((function(e) {
        return e === Ne
    }
    ));
    Object.defineProperties(bt, ["delay", "init", "limit", "many", "one", "retry", "timeout"].reduce((function(e, t) {
        return e[t] = {
            get: function() {
                return bt()[t]
            }
        },
        e
    }
    ), {})),
    ze.call(bt, {
        ABORT_ERROR: De,
        TIMEOUT_ERROR: Ne,
        FibonacciDelay: tt,
        ProgressiveDelay: nt,
        RetryOnError: vt,
        RetryOnNetworkError: gt,
        RetryOnTimeout: Ot
    });
    var _t, Et, wt, At, Ct = /^[a-z]{2}$/i, St = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i, jt = /^flwpubk(?:_test)?-[\da-f]{32}-x$/i, Tt = /^[\da-f]{32}(?:[\da-f]{8}(?:[\da-f]{24})?)?$/i, Rt = /((?:\*\d+)(?:\*\d+(?:\+\d+)*)+#)(?:\|(\d+))?/, It = /^(?:(?:[1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:[1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])$/, Pt = {
        AED: 1,
        ALL: 1,
        ARS: 1,
        AUD: 1,
        BGN: 1,
        BHD: 1,
        BIF: 5,
        BND: 1,
        BRL: 1,
        BWP: 1,
        CAD: 1,
        CDF: 1,
        CFA: 1,
        CHF: 1,
        CLP: 5,
        CNY: 1,
        COP: 1,
        CRC: 1,
        CVE: 1,
        CZK: 1,
        DJF: 4,
        DKK: 1,
        DOP: 1,
        DZD: 1,
        EGP: 1,
        ETB: 1,
        EUR: 3,
        GBP: 3,
        GHS: 1,
        GMD: 1,
        GNF: 5,
        GTQ: 1,
        HKD: 1,
        HNL: 1,
        HUF: 1,
        IDR: 1,
        ILS: 1,
        INR: 1,
        IQD: 1,
        ISK: 5,
        JOD: 1,
        JPY: 5,
        KES: 1,
        KHR: 1,
        KMF: 4,
        KRW: 5,
        KWD: 1,
        LBP: 1,
        LKR: 1,
        LRD: 1,
        LYD: 1,
        MAD: 1,
        MOP: 1,
        MUR: 1,
        MWK: 1,
        MXN: 1,
        MYR: 1,
        MZN: 1,
        ZAR: 3,
        NOK: 1,
        NZD: 1,
        OMR: 1,
        PAB: 1,
        PEN: 1,
        PHP: 1,
        PLN: 1,
        PYG: 5,
        QAR: 1,
        RUB: 1,
        RWF: 5,
        SAR: 1,
        SDD: 1,
        SEK: 1,
        SGD: 1,
        SLL: 1,
        STD: 1,
        SVC: 1,
        SYP: 1,
        THB: 1,
        TND: 5,
        TRY: 1,
        TWD: 1,
        TZS: 1,
        UGX: 5,
        USD: 3,
        UYI: 4,
        VEF: 1,
        VND: 5,
        VUV: 4,
        XAF: 5,
        XOF: 5,
        XPF: 4,
        YER: 1,
        ZAR: 3,
        ZMK: 1,
        ZMW: 1,
        ZWD: 1
    }, Dt = /^\s*[a-z]{3}\s*$/i, Nt = "CurrencyValidationError", Mt = Ut("ERR_EMPTY_CURRENCY"), kt = Ut("ERR_ABNORMAL_CURRENCY"), xt = Ut("ERR_UNSUPPORTED_CURRENCY"), Lt = function() {
        function e(e) {
            var t = Bt(e)
              , n = Ft(e)
              , r = t ? n : "XXX"
              , o = Pt[r] || 0;
            Object.defineProperties(this, {
                isEmpty: {
                    value: R(!n)
                },
                isCurrencyLike: {
                    value: R(t)
                },
                toString: {
                    value: R(r)
                },
                valueOf: {
                    value: R(o)
                }
            })
        }
        return Object.defineProperties(e.prototype, {
            test: {
                value: function(e) {
                    return !!this.isCurrencyLike() && (this & (e = Number.isInteger(e) ? 7 & Math.max(e, 0) : 0)) === e
                }
            }
        }),
        function(t) {
            return new e(t)
        }
    }(), $t = (_t = Vt(),
    Et = _t.supported,
    wt = _t.rounded,
    At = _t.dcc,
    Object.freeze(M(Object.create(null), {
        DCC: At,
        ROUNDED: wt,
        SUPPORTED: Et,
        NONE: "XXX",
        VALIDATION_ERR: Nt,
        FLAG_DCC: 2,
        FLAG_ROUNDED: 4,
        FLAG_SUPPORTED: 1,
        from: Lt,
        validate: Wt,
        defaultValidate: Kt,
        isCurrencyLike: Bt,
        isSupported: Gt,
        isDCCTarget: Ht,
        usesRoundedAmount: zt
    })));
    function Ut(e) {
        var t, n = new TypeError((t = e,
        I(t) && (t = t.toLowerCase().trim()) ? t.replace(/[^a-z0-9_]+/g, "_").replace(/^_+|_+(?=_)|_+$/g, "") : String()).toUpperCase() || void 0);
        return n.name = Nt,
        Object.freeze(n)
    }
    function Vt() {
        var e = []
          , t = []
          , n = [];
        return Object.keys(Pt).forEach((function(r) {
            var o = Pt[r = Ft(r)] || 0;
            o && (1 & o && e.push(r),
            2 & o && n.push(r),
            4 & o && t.push(r))
        }
        )),
        (Vt = R({
            supported: Object.freeze(e),
            rounded: Object.freeze(t),
            dcc: Object.freeze(n)
        }))()
    }
    function Ft(e) {
        return I(e) ? e.trim().toUpperCase() : ""
    }
    function Bt(e) {
        return Dt.test(String(e))
    }
    function Gt(e) {
        return Lt(e).test(1)
    }
    function Ht(e, t) {
        return Lt(e).test(2 | (!0 === t && 1))
    }
    function zt(e, t) {
        return Lt(e).test(4 | (!0 === t && 1))
    }
    function Wt(e, t) {
        var n, r = t, o = N(e) ? e : {
            currency: e
        };
        e = o.currency,
        n = o.support,
        t = o.silent,
        e = Lt(e),
        t = P(r) ? r : !0 === t,
        n = !1 !== n && (7 & n || 1);
        try {
            if (e.isEmpty())
                throw Mt;
            if (!e.isCurrencyLike())
                throw kt;
            if (n && !e.test(n))
                throw xt;
            return !!t || String.call(null, e)
        } catch (e) {
            if (t)
                return !1;
            throw e
        }
    }
    function Kt(e, t) {
        try {
            return Wt(e, t)
        } catch (e) {
            switch (e) {
            case Mt:
                e = "Currency not provided or could not be resolved.";
                break;
            case kt:
                e = "Currency not provided in three-letter code format.";
                break;
            case xt:
                e = "Currency not supported for payments at this time."
            }
            if (I(e)) {
                var n = new TypeError(e);
                throw n.name = Nt,
                n
            }
            throw new Error("Currency validation failed.")
        }
    }
    function qt(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || Zt(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Yt(e) {
        return function(e) {
            if (Array.isArray(e))
                return Qt(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || Zt(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Zt(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Qt(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qt(e, t) : void 0
        }
    }
    function Qt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Xt, Jt, en, tn = 256, nn = 1024, rn = 1536, on = 2048, an = 4096, cn = {
        amount: 10241,
        campaign_id: 0,
        country: 64,
        currency: 129,
        customer_email: 3,
        customer_firstname: 0,
        customer_fullname: 0,
        customer_lastname: 0,
        customer_phone: 4,
        custom_description: 0,
        custom_logo: 8,
        custom_narration: 0,
        custom_title: 0,
        default_account: 0,
        disable_pwb: tn,
        exclude_banks: 5120,
        custom_pwbt_expiry: rn,
        include_discount_amount: 768,
        init_url: 8,
        integrity_hash: 32,
        checkout_hash: 32,
        payload_hash: 32,
        is_event_tx: nn,
        mobilemoney_network: 0,
        payment_method: 0,
        payment_options: an,
        payment_page: 0,
        payment_plan: on,
        PBFPubKey: 17,
        recurring_stop: 0,
        redirect_no_json: tn,
        redirect_post: tn,
        redirect_url: 8,
        settlement_token: 0,
        txref: 1,
        custom_session_duration: rn,
        custom_retry: on
    }, un = function e(t, n) {
        var r, o = I(n) && n.trim() || null, a = fn.bind((this.value = o || n,
        this));
        if (t)
            try {
                if (1 & t && null === o)
                    throw new TypeError("Missing parameter value.");
                if (t & rn && null !== o)
                    try {
                        var i = Number(parseFloat(o));
                        if (isNaN(i) && (i < 60 || i > 31536e3))
                            throw "DURATION_ERR";
                        return i
                    } catch (e) {
                        throw a("valid expiration period value")
                    }
                if (t & an) {
                    var c = e.bind(Object.create(null), t ^ an);
                    return Object.freeze([].concat(o.split(/\s*,\s*/)).filter(Boolean).map(c))
                }
                if (2 & t)
                    try {
                        return L(St, o).toLowerCase()
                    } catch (e) {
                        throw a("valid email")
                    }
                if (8 & t)
                    try {
                        return new URL(decodeURIComponent(o)).href
                    } catch (e) {
                        throw a("valid url")
                    }
                if (16 & t)
                    try {
                        return L(jt, o).toUpperCase().replace(/-[\da-f]{32}-/gi, D(r = String.prototype.toLowerCase) ? Function.prototype.call.bind(r) : r)
                    } catch (e) {
                        throw a("valid public key")
                    }
                if (32 & t)
                    try {
                        return L(Tt, o).toLowerCase()
                    } catch (e) {
                        throw a("valid checksum value")
                    }
                if (64 & t)
                    try {
                        return L(Ct, o).toUpperCase()
                    } catch (e) {
                        throw a("2-character country-like code")
                    }
                if (128 & t)
                    return $t.defaultValidate(o);
                if (t & tn)
                    return $(o, !!(512 & t));
                if (t & nn)
                    try {
                        return L(/^[+-]?\d+(?:\.\d+)?$/, o).slice()
                    } catch (e) {
                        throw a("valid numeric value")
                    }
                if (8192 & t)
                    try {
                        var u = Number(parseFloat(o));
                        if (isNaN(u) || u <= 0)
                            throw "AMOUNT_ERR";
                        return u
                    } catch (e) {
                        throw a("amount")
                    }
                if (t & on)
                    try {
                        var l = Number(parseInt(o));
                        if (isNaN(l) || l <= 0)
                            throw "NUMBER_ERR";
                        return l
                    } catch (e) {
                        throw a("number")
                    }
                return o
            } catch (e) {
                if (1 & t)
                    throw e;
                return null
            }
        return o
    }
    .bind(Object.create(null)), ln = (Xt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    Jt = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    en = Object.freeze(Object.create(null, {
        encode: {
            value: function(e) {
                return function(e) {
                    for (var t, n, r, o, a = "", i = 0, c = (e = String(e)).length % 3; i < e.length; ) {
                        if ((n = e.charCodeAt(i++)) > 255 || (r = e.charCodeAt(i++)) > 255 || (o = e.charCodeAt(i++)) > 255)
                            throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
                        a += Xt.charAt((t = n << 16 | r << 8 | o) >> 18 & 63) + Xt.charAt(t >> 12 & 63) + Xt.charAt(t >> 6 & 63) + Xt.charAt(63 & t)
                    }
                    return c ? a.slice(0, c - 3) + "===".substring(c) : a
                }(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                    return String.fromCharCode("0x" + t)
                }
                )))
            }
        },
        decode: {
            value: function(e) {
                return decodeURIComponent(escape(function(e) {
                    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""),
                    !Jt.test(e))
                        throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
                    e += "==".slice(2 - (3 & e.length));
                    for (var t, n, r, o = "", a = 0; a < e.length; )
                        t = Xt.indexOf(e.charAt(a++)) << 18 | Xt.indexOf(e.charAt(a++)) << 12 | (n = Xt.indexOf(e.charAt(a++))) << 6 | (r = Xt.indexOf(e.charAt(a++))),
                        o += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                    return o
                }(e)))
            }
        }
    })),
    function() {
        var e;
        try {
            e = en.decode(new URLSearchParams(window.location.search).get("__").replace(/\s/g, "+")).replace(/([+])/g, (function(e, t) {
                return encodeURIComponent(t)
            }
            ))
        } catch (t) {
            e = new URLSearchParams(window.location.search.replace(/([+])/g, (function(e, t) {
                return encodeURIComponent(t)
            }
            )))
        }
        return new URLSearchParams(e)
    }
    ), sn = function() {
        var e, t = Object.create(null), n = Object.create(null), r = ln(), o = Yt(r.keys()), a = Object.fromEntries(Yt(r.entries()).sort((function(e, t) {
            var n = qt(e, 1)[0]
              , r = qt(t, 1)[0];
            return (n = n.toLowerCase()) > (r = r.toLowerCase()) ? 1 : n < r ? -1 : 0
        }
        )));
        for (var i in cn) {
            var c = String()
              , u = RegExp("^".concat(i, "$"), "i")
              , l = o.findIndex(u.test.bind(u));
            l >= 0 && (c = r.get(o[l]) || c,
            o.splice(l, 1));
            try {
                n[i] = (void 0,
                un((e = i)in cn ? cn[e] : 0, c))
            } catch (e) {
                t[i] = e.message
            }
        }
        return Object.freeze(M(Object.create(null), {
            get: function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r];
                if (!t.every(I))
                    throw new TypeError("Expects parameter name to be a string.");
                var o = t.reduce((function(e, t) {
                    return e[t] = n[t],
                    e
                }
                ), Object.create(null));
                return 1 === t.length ? o[t[0]] : o
            },
            getError: function() {
                for (var e, n, r = 0, o = Object.keys(t); r < o.length; r++) {
                    var a = o[r];
                    if (e = t[n = a])
                        break
                }
                var i = e && e.replace(/(?:(parameter) value\.\s*)((?:.*?(?=, but got))?).*$/, (function(e, t, r) {
                    return "".concat(t, "(`").concat(n, "`): Kindly terminate this session and reconfirm the data.")
                }
                ))
                  , c = i.includes(":") ? i.split(":") : i;
                return c[1].includes("Kindly terminate") && (c[0].includes("Missing") ? i = "init.missing.parameter.".concat(n) : c[0].includes("Invalid") && (i = "init.invalid.parameter.".concat(n))),
                i
            },
            hasErrors: function() {
                return !Fe(t)
            },
            raw: Object.freeze(a),
            parsed: Object.freeze(n)
        }))
    }();
    function fn(e) {
        return e = "".concat(["a", "e", "i", "o", "u"].indexOf(String(e)[0]) >= 0 ? "an" : "a", " ").concat(e),
        new TypeError("Invalid parameter value. Expected ".concat(e, ", but got ").concat("" === this.value ? "nothing" : '"'.concat(this.value, '" instead'), "."))
    }
    function dn() {
        for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        for (var o = 0, a = n; o < a.length; o++) {
            var i = a[o]
              , c = String(i).split("::")
              , u = qt(c, 2)
              , l = u[0]
              , s = u[1]
              , f = void 0 === s ? l : s;
            l && (e[l] = f)
        }
        var d = sn.get.apply(sn, Yt(Object.keys(e)));
        return 1 === Object.keys(e).length ? d : Object.keys(d).reduce((function(t, n) {
            return t[e[n]] = d[n],
            t
        }
        ), {})
    }
    function pn(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return mn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return mn(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function mn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function hn(e) {
        return hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        hn(e)
    }
    var yn, bn, vn = Function.prototype.call.bind(Object.prototype.toString);
    function gn(e) {
        return "object" === hn(e) && "[object Object]" === vn(e)
    }
    function On(e, t) {
        if (e && "object" === hn(e)) {
            for (var n, r = 0, o = Object.entries(e); r < o.length; r++) {
                var a = pn(o[r], 2)
                  , i = a[0]
                  , c = a[1];
                i === t && (n = c)
            }
            return n
        }
    }
    function _n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function En(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? _n(Object(n), !0).forEach((function(t) {
                wn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _n(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function wn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    yn = !1,
    bn = function(e) {
        !0 !== yn && (yn = !0),
        e
    }
    ,
    addEventListener("on:CurrentViewChange", (function(e) {
        var t = e.detail;
        setTimeout(bn, 0, t)
    }
    )),
    Object.defineProperties(function e(t) {
        try {
            if (!(t instanceof HTMLSelectElement && t.classList.contains("selectbox__native")))
                throw new Error;
            if (!(this instanceof e))
                return new e(t);
            var n = t.closest(".selectbox");
            if (!n || n === t)
                throw new Error;
            this.$select = t,
            this.$options = t.options,
            this.$container = n,
            this.$updatePlaceholder = this.updatePlaceholder.bind(this),
            t.addEventListener("change", this.$updatePlaceholder, !1),
            this.updateElements()
        } catch (e) {
            throw console.log(e),
            new Error("Expects a <select> element that meets all selectbox requirements.")
        }
    }
    .prototype, {
        updateElements: {
            value: function() {
                var e = this.$container.querySelector("select.selectbox__native")
                  , t = this.$container.querySelector(".selectbox__placeholder");
                e && t && (this.$select !== e && (e.addEventListener("change", this.$updatePlaceholder, !1),
                this.$select.removeEventListener("change", this.$updatePlaceholder, !1),
                this.$select = e,
                this.$options = e.options),
                this.$placeholder !== t && (this.$placeholder = t),
                this.updatePlaceholder())
            }
        },
        updatePlaceholder: {
            value: function() {
                var e = this.$options[this.$select.selectedIndex].textContent;
                e !== this.$placeholder.textContent && (this.$placeholder.textContent = e)
            }
        }
    });
    var An, Cn, Sn, jn = Le(null), Tn = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }, Rn = [function(e) {
        return Be(e) && !(Pn(e) && e.ok)
    }
    , bt.RetryOnNetworkError, bt.RetryOnTimeout], In = 5e3;
    function Pn(e) {
        if (Be(e))
            try {
                var t = e.headers.get("content-type");
                return /\bapplication\/json\b/i.test(t)
            } catch (e) {}
        return !1
    }
    function Dn(e) {
        var t = Object.getOwnPropertyDescriptors(e);
        return Object.defineProperties((function(t, n) {
            var r = gn(n) ? n : {}
              , o = U(Df.getState(), "locale") || Do(sn.get("currency"));
            return e(t, En(En({}, r), {}, {
                headers: {
                    "x-flw-lang": o.toUpperCase()
                }
            }))
        }
        ), t)
    }
    function Nn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Mn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Nn(Object(n), !0).forEach((function(t) {
                kn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function kn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function xn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Ln, $n, Un = "".concat("https://api.ravepay.co", "/v3/checkout/initialize"), Vn = ((Ln = new Error("INITIALIZATION_FAILED")).name = "ERR_INITIALIZATION_FAILURE",
    Object.freeze(Ln)), Fn = Dn((An = bt.one.limit(5).init(Tn)).retry.apply(An, ($n = Rn,
    function(e) {
        if (Array.isArray(e))
            return xn(e)
    }($n) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e)
    }($n) || function(e, t) {
        if (e) {
            if ("string" == typeof e)
                return xn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xn(e, t) : void 0
        }
    }($n) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }())).timeout(1e4)), Bn = ["card", "paypal", "applepay", "googlepay", "ussd", "account", "banktransfer", "internetbanking", "enaira", "mobilemoneyfranco", "mobilemoneyghana", "mobilemoneymalawi", "mobilemoneyrwanda", "mobilemoneytanzania", "mobilemoneyuganda", "mobilemoneyzambia", "mpesa", "1voucher", "qr", "barter", "opay", "bankreference", "fawrypay", "payattitude", "paga", "nqr", "credit", "wechat", "cryptocurrency", "mcash", "alipay"];
    function Gn() {
        return Cn ? Promise.resolve(Cn) : (sn.hasErrors() ? new Promise((function(e, t) {
            setTimeout(t, 100)
        }
        )) : Fn(Un, {
            body: JSON.stringify(Mn(Mn({}, dn("amount", "country", "currency", "customer_email", "disable_pwb", "init_url", "integrity_hash", "checkout_hash", "payload_hash", "payment_plan", "payment_method", "payment_options", "PBFPubKey::public_key", "txref::tx_ref")), {}, {
                last_used_payment_option: ie.localStorage ? localStorage.getItem("lastUsedOption") : null,
                payment_options_sequence: "".concat(Bn)
            }))
        }).then((function(e) {
            return Sn = null,
            Pn(e) ? e.json().then((function(e) {
                try {
                    if ("error" === e.status)
                        return Sn = e.message || null,
                        Promise.reject(Vn)
                } catch (e) {}
                if (N(e) && N(e.data)) {
                    var t = Mn({}, e.data)
                      , n = "custom_retry"in sn.raw ? sn.get("custom_retry") || 0 : null;
                    return null !== n && ie.localStorage && localStorage.setItem("retryAttempts", btoa(String(100 * Math.round(Number(n))))),
                    Object.defineProperty(t, "get", {
                        value: function(e) {
                            var n = U(t, e);
                            return void 0 === n ? null : n
                        }
                    }),
                    Cn = t
                }
                return Promise.reject(Vn)
            }
            )) : Promise.reject(Vn)
        }
        ))).catch((function() {
            var e = Sn || "Initialization failed";
            return e && (e = e.replace(/\.?\s*?$/, "").trim()) && setTimeout((function() {
                var t = "".concat(e, ": Kindly terminate this session and try again.");
                if ("Initialization failed" === e)
                    t = "init.generic.notice";
                sn.hasErrors() || Df.dispatch(Ee.actions.updateErrorMessage(t))
            }
            ), 100),
            Cn = Object.create(null, {
                get: {
                    value: function() {
                        return null
                    }
                }
            })
        }
        ))
    }
    var Hn = null;
    function zn() {
        return Promise.resolve(function() {
            if (Hn)
                return Hn;
            if (ie.worker) {
                var e = new Worker("/js".concat("/workers/fingerprint.js"));
                return new Promise((function(t) {
                    e.postMessage(null),
                    e.onmessage = function(n) {
                        return n.data ? t(Hn = n.data) : e.postMessage(null)
                    }
                }
                )).finally((function() {
                    e.terminate()
                }
                ))
            }
            return null
        }())
    }
    function Wn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Kn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Wn(Object(n), !0).forEach((function(t) {
                qn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function qn(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Yn(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Zn(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Qn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Qn(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Qn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Xn(e) {
        return Object.prototype.toString.call(e).replace(/^\[object\s+(.+?)]$/i, "$1").toLowerCase()
    }
    function Jn(e) {
        return N(e) ? e : D(e) ? {
            onComplete: e
        } : {}
    }
    function er(e, t) {
        var n, r, o = Jn(e);
        n = o.data,
        e = Yn(o, ["data"]);
        var a = Jn(t);
        r = a.data,
        t = Yn(a, ["data"]),
        Object.keys(t).forEach((function(n) {
            var r = e[n]
              , o = t[n];
            D(o) && (e[n] = D(r) ? function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                o.call.apply(o, [this].concat(t)),
                r.call.apply(r, [this].concat(t))
            }
            : o)
        }
        ));
        try {
            Object.defineProperty(e, "data", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return Kn(Kn({}, N(n) ? n : {}), N(r) ? r : {})
                }
            })
        } catch (e) {}
        return e
    }
    function tr(e) {
        return function(e) {
            if (Array.isArray(e))
                return nr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return nr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return nr(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function nr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var rr = Object.freeze(R(!1));
    function or() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        var r = (t = tr(t)).length;
        function o(e, n) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (a === r)
                return 0;
            try {
                var i = t[a]
                  , c = e[i]
                  , u = n[i];
                return "number" != typeof c && "number" != typeof u && (c = String(c).toLowerCase(),
                u = String(u).toLowerCase()),
                c > u ? 1 : c < u ? -1 : o(e, n, ++a)
            } catch (e) {
                return -1
            }
        }
        return function(e, t) {
            return o(e, t, 0)
        }
    }
    function ar(e) {
        return ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        ar(e)
    }
    var ir = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    function cr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        var r = M(Object.create(null), t.reduce((function(e, t) {
            return (I(t) || "symbol" === ar(t)) && (e[t] = []),
            e
        }
        ), {}), !0);
        return Object.defineProperties(F.call(this, r, !1), {
            $subscribe: {
                value: function(e) {
                    if (ir(r, e)) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        n.forEach((function(t) {
                            D(t) && (r[e] = G(r[e], t))
                        }
                        ))
                    }
                }
            },
            $unsubscribe: {
                value: function(e) {
                    if (ir(r, e)) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
                            n[o - 1] = arguments[o];
                        n.forEach((function(t) {
                            r[e] = H(r[e], t)
                        }
                        ))
                    }
                }
            }
        })
    }
    function ur(e) {
        if (!N(e) || !Object.isExtensible(e))
            throw new Error("Cannot setup reactive fields without appropriate context object.");
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        return cr.call.apply(cr, [e].concat(n))
    }
    var lr = Dn(bt.one.limit(5).timeout(6e3).init(Tn).retry(Rn))
      , sr = Object.freeze(M(Object.create(null), {
        toString: function() {
            var e = this.masked_pan;
            return I(e) ? e.replace(/^[*\d]+?(\d{4})$/, (function(e, t) {
                return "**** ".concat(t)
            }
            )) : e
        }
    }))
      , fr = Object.create(null)
      , dr = [];
    function pr(e) {
        return !0 !== U(this, "preferences[blacklist_saved_cards]") && (!D(e) || e())
    }
    function mr() {
        var e = this
          , t = ie.localStorage ? localStorage.getItem("device_mobile_key") : null;
        return Promise.resolve(pr.call(this, (function() {
            return Object.isFrozen(fr) || (null !== t ? lr(new URL("/v2/gpx/users/lookup","https://api.ravepay.co"), {
                body: JSON.stringify({
                    modalauditid: U(e, "modalauditid"),
                    public_key: U(e, "PBFPubKey"),
                    device_key: t
                })
            }).then((function(e) {
                if (Pn(e) && e.ok)
                    return e.json().then((function(e) {
                        var t = !1
                          , n = !1
                          , r = N(e) ? e : {}
                          , o = r.data;
                        return "success" === r.status && "array" === Xn(o) && (o.forEach((function(e) {
                            if (N(e)) {
                                if (!n) {
                                    var t = e.device
                                      , r = e.mobile_number
                                      , o = e.email
                                      , a = M(Object.create(null), {
                                        id: t,
                                        email: o,
                                        phone: r
                                    });
                                    M(fr, {
                                        device: Object.freeze(a)
                                    }),
                                    n = !0
                                }
                                var i = e.card
                                  , c = e.card_hash
                                  , u = N(i) ? i : {}
                                  , l = u.card_brand
                                  , s = u.masked_pan
                                  , f = String(s).substring(0, 6);
                                /\d{6}/.test(f) && !/^(506(?:099|1(?:[0-9][0-8]|[0-8]9))|6500(?:[0-2][2-7]|[01][89]|[12][01]))$/.test(f) && dr.push(M(Object.create(sr), {
                                    brand: l,
                                    hash: c,
                                    masked_pan: s
                                }))
                            }
                        }
                        )),
                        Object.freeze(dr) && V.call(fr, {
                            cards: function() {
                                return dr
                            }
                        }, !1),
                        !0 !== t && (t = !0)),
                        !(!0 !== t || !Object.freeze(fr))
                    }
                    ))
            }
            )).catch(rr) : void 0)
        }
        )))
    }
    function hr(e) {
        var t = this
          , n = null;
        return Promise.resolve(pr.call(this, (function() {
            return (n = yr(dr, e)) && lr(new URL("/v2/gpx/users/remove","https://api.ravepay.co"), {
                body: JSON.stringify({
                    public_key: U(t, "PBFPubKey"),
                    mobile_number: U(fr, "device.phone"),
                    card_hash: U(n, "hash")
                })
            }).then((function(e) {
                if (Pn(e) && e.ok)
                    return e.json().then((function(e) {
                        var t = N(e) ? e : {}
                          , r = t.message;
                        return "success" === t.status && "USER-REMOVED" === r && (dr = H(dr, n),
                        !!Object.freeze(dr))
                    }
                    ))
            }
            )).catch(rr)
        }
        )))
    }
    function yr(e, t) {
        if ("array" !== Xn(e))
            return null;
        if (e.indexOf(t) < 0) {
            var n = N(t)
              , r = n ? t : {
                hash: t = String(t),
                masked_pan: t
            }
              , o = r.hash
              , a = r.masked_pan;
            o = null != o && (o = RegExp("^".concat(o.replace(/\*/g, "\\*")), "i")),
            a = null != a && (a = RegExp("^".concat(a.replace(/\*/g, "\\*")), "i")),
            t = e.find((function(e) {
                if (N(e)) {
                    if (String(e).replace(/\s/g, "") === String(t).replace(/\s/g, ""))
                        return !0;
                    var r = e.hash
                      , i = e.masked_pan
                      , c = o || a ? 1 : 0;
                    return n ? (o && (c &= o.test(r)),
                    a && (c &= a.test(i))) : c &= !!o && o.test(r) || !!a && a.test(i),
                    c
                }
            }
            ))
        }
        return t || null
    }
    function br(e, t) {
        if (!N(e) || !Object.isExtensible(e))
            throw new Error("Cannot setup input fields without appropriate context object.");
        return setTimeout((function() {
            var n = e.DATA
              , r = U(n, "saved_cards")
              , o = pr.call(n)
              , a = N(r) ? r : {}
              , i = a.device
              , c = a.cards
              , u = ur(Object.create(null), "CARDS")
              , l = M(Object.create(null), {
                enabled: o,
                fetch: function() {
                    if (o) {
                        var e = !1
                          , t = mr.bind(n);
                        return function() {
                            e || t().then((function() {
                                var t = U(n, "saved_cards")
                                  , r = N(t) ? t : {};
                                i = r.device,
                                c = r.cards,
                                u.CARDS = c,
                                e = !0
                            }
                            ))
                        }
                    }
                    return rr
                }(),
                remove: function() {
                    if (o) {
                        var e = hr.bind(n);
                        return function(t) {
                            U(c, "length") > 0 && e(t).then((function() {
                                var e = U(n, "saved_cards")
                                  , t = N(e) ? e : {};
                                c = t.cards,
                                u.CARDS = c
                            }
                            ))
                        }
                    }
                    return rr
                }()
            });
            V.call(l, {
                cards: function() {
                    return c
                },
                device: function() {
                    return i
                }
            }, !1),
            u.CARDS = c,
            Object.defineProperties(l, {
                $subscribe: {
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return u.$subscribe.apply(u, ["CARDS"].concat(t))
                    }
                },
                $unsubscribe: {
                    value: function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        return u.$unsubscribe.apply(u, ["CARDS"].concat(t))
                    }
                }
            }),
            M(e, {
                $savedCards: l
            }),
            D(t) && t.call(e)
        }
        ), 0),
        e
    }
    var vr = bt.one.limit(5).timeout(6e3).retry(Rn)
      , gr = or("name", "code")
      , Or = or("label", "name")
      , _r = M(Object.create(null), {
        GH: Object.freeze([{
            name: "AIRTEL",
            identifier: "TIGO",
            label: "AIRTEL/TIGO"
        }, {
            name: "MTN",
            identifier: "MTN",
            label: "MTN"
        }, {
            name: "VODACOM",
            identifier: "VODAFONE",
            label: "VODAFONE"
        }].sort(Or)),
        KE: Object.freeze([{
            name: "AIRTEL",
            identifier: "AIRTEL",
            label: "AIRTEL"
        }, {
            name: "MPESA",
            identifier: "SAFARICOM",
            label: "M-PESA"
        }].sort(Or)),
        TZ: Object.freeze([{
            name: "AIRTEL",
            identifier: "AIRTEL",
            label: "AIRTEL"
        }, {
            name: "VODACOM",
            identifier: "VODAFONE",
            label: "VODACOM"
        }, {
            name: "TIGOPESA",
            identifier: "TIGOPESA",
            label: "TIGO"
        }, {
            name: "HALOPESA",
            identifier: "HALOPESA",
            label: "HALOPESA"
        }].sort(Or)),
        ZM: Object.freeze([{
            name: "AIRTEL",
            identifier: "AIRTEL",
            label: "AIRTEL"
        }, {
            name: "MTN",
            identifier: "MTN",
            label: "MTN"
        }, {
            name: "ZAMTEL",
            identifier: "ZAMTEL",
            label: "ZAMTEL"
        }].sort(Or))
    })
      , Er = Object.freeze([{
        name: "Burkina Faso",
        code: "BF",
        currency: "XOF"
    }, {
        name: "Cameroon",
        code: "CM",
        currency: "XAF"
    }, {
        name: "Côte d'Ivoire",
        code: "CI",
        currency: "XOF"
    }, {
        name: "Senegal",
        code: "SN",
        currency: "XOF"
    }].sort(gr));
    function wr(e) {
        return Promise.resolve(Object.isFrozen(_r) || vr(new URL("/services/fetch/mobilemoneyfranco/networks","https://checkout.flutterwave.com")).then((function(e) {
            if (Pn(e) && e.ok)
                return e.json().then((function(e) {
                    var t = !1
                      , n = N(e) ? e : {}
                      , r = n.data;
                    return "00" === n.response_code && "array" === Xn(r) && r.forEach((function(e) {
                        if (N(e)) {
                            var n = e.operators
                              , r = e.country_code;
                            if (/^[a-z]{2}$/i.test(r) && "array" === Xn(n) && (n = n.reduce((function(e, t) {
                                if (N(t)) {
                                    var n = t.name
                                      , r = t.code;
                                    n && r && I(n) && I(r) && e.push({
                                        name: n,
                                        identifier: r,
                                        label: n
                                    })
                                }
                                return e
                            }
                            ), [])).length > 0)
                                try {
                                    M(_r, (o = {},
                                    a = r.toUpperCase(),
                                    i = Object.freeze(n.sort(Or)),
                                    a in o ? Object.defineProperty(o, a, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : o[a] = i,
                                    o)),
                                    !0 !== t && (t = !0)
                                } catch (e) {}
                        }
                        var o, a, i
                    }
                    )),
                    !(!0 !== t || !Object.freeze(_r))
                }
                ))
        }
        )).catch((function() {
            setTimeout((function() {
                ["XAF", "XOF"].includes(U(e, "DATA.currency")) && e.dispatch(Ee.actions.updateErrorMessage("network.fetch.error"))
            }
            ), 100)
        }
        )))
    }
    function Ar(e, t) {
        if ("array" !== Xn(e))
            return null;
        if (e.indexOf(t) < 0) {
            var n = N(t) ? t : /^[A-Z]{2}$/.test(t) ? {
                code: t
            } : {
                name: String(t)
            }
              , r = n.name
              , o = n.code;
            t = e.find((function(e) {
                if (N(e)) {
                    var t = e.name
                      , n = e.code
                      , a = void 0 !== r
                      , i = void 0 !== o
                      , c = a || i ? 1 : 0;
                    return a && (c &= r === t),
                    i && (c &= o === n),
                    c
                }
            }
            ))
        }
        return t || null
    }
    function Cr(e, t) {
        if ("array" !== Xn(e))
            return null;
        if (e.indexOf(t) < 0) {
            var n = N(t)
              , r = n ? t : {
                name: t = String(t),
                identifier: t
            }
              , o = r.name
              , a = r.identifier;
            t = e.find((function(e) {
                if (N(e)) {
                    var t = e.name
                      , r = e.identifier
                      , i = void 0 !== o
                      , c = void 0 !== a
                      , u = i || c ? 1 : 0;
                    return n ? (i && (u &= o === t),
                    c && (u &= a === r)) : u &= i && o === t || c && a === r,
                    u
                }
            }
            ))
        }
        return t || null
    }
    var Sr, jr, Tr, Rr, Ir = Object.freeze([{
        name: "QR",
        identifier: "QR",
        label: "QR"
    }, {
        name: "Token",
        identifier: "TOKEN",
        label: "Token"
    }, {
        name: "Direct Wallet Debit",
        identifier: "DIRECT_WALLET_DEBIT",
        label: "Direct Wallet Debit"
    }]);
    function Pr(e, t) {
        if ("array" !== Xn(e))
            return null;
        if (e.indexOf(t) < 0) {
            var n = N(t)
              , r = n ? t : {
                name: t = String(t),
                identifier: t
            }
              , o = r.name
              , a = r.identifier;
            t = e.find((function(e) {
                if (N(e)) {
                    var t = e.name
                      , r = e.identifier
                      , i = void 0 !== o
                      , c = void 0 !== a
                      , u = i || c ? 1 : 0;
                    return n ? (i && (u &= o === t),
                    c && (u &= a === r)) : u &= i && o === t || c && a === r,
                    u
                }
            }
            ))
        }
        return t || null
    }
    function Dr(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Nr(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Nr(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return i = e.done,
                e
            },
            e: function(e) {
                c = !0,
                a = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (c)
                        throw a
                }
            }
        }
    }
    function Nr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Mr = "AED ALL AUD BGN BHD BND CAD CHF CLP CNY COP CRC CZK DKK DOP DZD EGP EUR GBP GHS GMD GTQ HKD HNL HUF IDR ILS INR IQD ISK JOD JPY KHR KRW KWD LBP LKR LYD MAD MOP MYR ZAR NOK NZD OMR PAB PHP PYG QAR SAR SDD SEK SGD SLL SVC SYP THB TND TWD TZS UGX USD VND YER ZAR ZMK ZMW".split(" ");
    function kr(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
            n[r - 1] = arguments[r];
        if (I(e) && N(jr)) {
            var o = [].concat(e.split(/\s*\|\s*/).filter(Boolean));
            o.forEach((function(e) {
                e in jr && n.forEach((function(t) {
                    jr[e] = H(jr[e], t)
                }
                ))
            }
            ))
        }
    }
    function xr(e) {
        if (jr = N(e) ? e : {},
        sn.hasErrors()) {
            var t = Object.create(null);
            Object.keys(jr).forEach((function(e) {
                t[e] = Object.freeze([])
            }
            )),
            jr = t
        }
        !0 === U(Br, "allowApplePay") || function() {
            try {
                return "ApplePaySession"in window && !0 === window.ApplePaySession.canMakePayments()
            } catch (e) {
                return !1
            }
        }() || Mr.forEach((function(e) {
            e in jr && kr(e, "applepay")
        }
        )),
        kr("ZAR", "credit", "internetbanking", "qr", "payattitude"),
        kr("USD | EUR", "banktransfer"),
        kr("KES", "wechat"),
        kr("USD", "account"),
        Sr = Object.keys(jr).filter((function(e) {
            return sn.get("currency") === (e = String(e).toUpperCase()) || $t.DCC.indexOf($t) >= 0
        }
        )),
        Tr = Sr.reduce((function(e, t) {
            if (!sn.hasErrors()) {
                var n, r = Dr(jr[t]);
                try {
                    for (r.s(); !(n = r.n()).done; ) {
                        var o = n.value;
                        e.indexOf(o) < 0 && e.push(o)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
            return e
        }
        ), [])
    }
    var Lr = []
      , $r = []
      , Ur = [];
    function Vr(e) {
        var t = "test" !== this.get("env");
        e = "array" === Xn(e) ? e : [];
        [{
            name: "Access Bank",
            code: "044",
            availability: 7
        }, {
            name: "Ecobank",
            code: "050",
            availability: 2
        }, {
            name: "First City Monument Bank (FCMB)",
            code: "214",
            availability: 2
        }, {
            name: "Fidelity Bank",
            code: "070",
            availability: 6
        }, {
            name: "First Bank of Nigeria",
            code: "011",
            availability: 3
        }, {
            name: "FSDH Merchant Bank Limited",
            code: "601",
            availability: 0
        }, {
            name: "GTBank",
            code: "058",
            availability: 7
        }, {
            name: "Heritage Bank",
            code: "030",
            availability: 2
        }, {
            name: "Keystone Bank",
            code: "082",
            availability: 2
        }, {
            name: "Lotus Bank",
            code: "303",
            availability: 2
        }, {
            name: "Polaris Bank",
            code: "076",
            availability: 0
        }, {
            name: "Premium Trust Bank",
            code: "105",
            availability: 2
        }, {
            name: "Providus Bank",
            code: "101",
            availability: !t && 1
        }, {
            name: "Stanbic IBTC Bank",
            code: "221",
            availability: 2 | (!t && 1)
        }, {
            name: "Sterling Bank",
            code: "232",
            availability: 3
        }, {
            name: "United Bank for Africa",
            code: "033",
            availability: 3
        }, {
            name: "Union Bank",
            code: "032",
            availability: 2
        }, {
            name: "Unity Bank",
            code: "215",
            availability: 2 | (!t && 1)
        }, {
            name: "VFD Microfinance Bank",
            code: "090110",
            availability: 2
        }, {
            name: "Wema Bank",
            code: "035",
            availability: 2
        }, {
            name: "Zenith Bank",
            code: "057",
            availability: 3
        }].sort(or("name", "code")).forEach((function(t) {
            var n = t.name
              , r = t.code
              , o = t.availability
              , a = Object.freeze({
                name: n,
                code: r
            });
            o && (1 & o && e.indexOf(r) < 0 && Lr.push(a),
            4 & o && $r.push(a),
            2 & o && Ur.push(a))
        }
        )),
        Object.freeze(Lr),
        Object.freeze($r),
        Object.freeze(Ur)
    }
    function Fr(e, t) {
        if ("array" !== Xn(e))
            return null;
        if (e.indexOf(t) < 0) {
            var n = N(t) ? t : /^\d{2,}$/.test(t) ? {
                code: t
            } : {
                name: String(t)
            }
              , r = n.name
              , o = n.code;
            t = e.find((function(e) {
                if (N(e)) {
                    var t = e.name
                      , n = e.code
                      , a = void 0 !== r
                      , i = void 0 !== o
                      , c = a || i ? 1 : 0;
                    return a && (c &= r === t),
                    i && (c &= o === n),
                    c
                }
            }
            ))
        }
        return t || null
    }
    var Br, Gr, Hr = Object.freeze([{
        id: 1,
        sortname: "AF",
        name: "Afghanistan",
        phoneCode: 93
    }, {
        id: 2,
        sortname: "AL",
        name: "Albania",
        phoneCode: 355
    }, {
        id: 3,
        sortname: "DZ",
        name: "Algeria",
        phoneCode: 213
    }, {
        id: 4,
        sortname: "AS",
        name: "American Samoa",
        phoneCode: 1684
    }, {
        id: 5,
        sortname: "AD",
        name: "Andorra",
        phoneCode: 376
    }, {
        id: 6,
        sortname: "AO",
        name: "Angola",
        phoneCode: 1783
    }, {
        id: 7,
        sortname: "AI",
        name: "Anguilla",
        phoneCode: 1264
    }, {
        id: 8,
        sortname: "AQ",
        name: "Antarctica",
        phoneCode: 0
    }, {
        id: 9,
        sortname: "AG",
        name: "Antigua And Barbuda",
        phoneCode: 1268
    }, {
        id: 10,
        sortname: "AR",
        name: "Argentina",
        phoneCode: 54
    }, {
        id: 11,
        sortname: "AM",
        name: "Armenia",
        phoneCode: 374
    }, {
        id: 12,
        sortname: "AW",
        name: "Aruba",
        phoneCode: 297
    }, {
        id: 13,
        sortname: "AU",
        name: "Australia",
        phoneCode: 61
    }, {
        id: 14,
        sortname: "AT",
        name: "Austria",
        phoneCode: 43
    }, {
        id: 15,
        sortname: "AZ",
        name: "Azerbaijan",
        phoneCode: 994
    }, {
        id: 16,
        sortname: "BS",
        name: "Bahamas The",
        phoneCode: 1242
    }, {
        id: 17,
        sortname: "BH",
        name: "Bahrain",
        phoneCode: 973
    }, {
        id: 18,
        sortname: "BD",
        name: "Bangladesh",
        phoneCode: 880
    }, {
        id: 19,
        sortname: "BB",
        name: "Barbados",
        phoneCode: 1246
    }, {
        id: 20,
        sortname: "BY",
        name: "Belarus",
        phoneCode: 375
    }, {
        id: 21,
        sortname: "BE",
        name: "Belgium",
        phoneCode: 32
    }, {
        id: 22,
        sortname: "BZ",
        name: "Belize",
        phoneCode: 501
    }, {
        id: 23,
        sortname: "BJ",
        name: "Benin",
        phoneCode: 229
    }, {
        id: 24,
        sortname: "BM",
        name: "Bermuda",
        phoneCode: 1441
    }, {
        id: 25,
        sortname: "BT",
        name: "Bhutan",
        phoneCode: 975
    }, {
        id: 26,
        sortname: "BO",
        name: "Bolivia",
        phoneCode: 591
    }, {
        id: 27,
        sortname: "BA",
        name: "Bosnia and Herzegovina",
        phoneCode: 387
    }, {
        id: 28,
        sortname: "BW",
        name: "Botswana",
        phoneCode: 267
    }, {
        id: 29,
        sortname: "BV",
        name: "Bouvet Island",
        phoneCode: 0
    }, {
        id: 30,
        sortname: "BR",
        name: "Brazil",
        phoneCode: 55
    }, {
        id: 31,
        sortname: "IO",
        name: "British Indian Ocean Territory",
        phoneCode: 246
    }, {
        id: 32,
        sortname: "BN",
        name: "Brunei",
        phoneCode: 673
    }, {
        id: 33,
        sortname: "BG",
        name: "Bulgaria",
        phoneCode: 359
    }, {
        id: 34,
        sortname: "BF",
        name: "Burkina Faso",
        phoneCode: 226
    }, {
        id: 35,
        sortname: "BI",
        name: "Burundi",
        phoneCode: 257
    }, {
        id: 36,
        sortname: "KH",
        name: "Cambodia",
        phoneCode: 855
    }, {
        id: 37,
        sortname: "CM",
        name: "Cameroon",
        phoneCode: 237
    }, {
        id: 38,
        sortname: "CA",
        name: "Canada",
        phoneCode: 1
    }, {
        id: 39,
        sortname: "CV",
        name: "Cape Verde",
        phoneCode: 238
    }, {
        id: 40,
        sortname: "KY",
        name: "Cayman Islands",
        phoneCode: 1345
    }, {
        id: 41,
        sortname: "CF",
        name: "Central African Republic",
        phoneCode: 236
    }, {
        id: 42,
        sortname: "TD",
        name: "Chad",
        phoneCode: 235
    }, {
        id: 43,
        sortname: "CL",
        name: "Chile",
        phoneCode: 56
    }, {
        id: 44,
        sortname: "CN",
        name: "China",
        phoneCode: 86
    }, {
        id: 45,
        sortname: "CX",
        name: "Christmas Island",
        phoneCode: 61
    }, {
        id: 46,
        sortname: "CC",
        name: "Cocos (Keeling) Islands",
        phoneCode: 672
    }, {
        id: 47,
        sortname: "CO",
        name: "Colombia",
        phoneCode: 57
    }, {
        id: 48,
        sortname: "KM",
        name: "Comoros",
        phoneCode: 269
    }, {
        id: 49,
        sortname: "CG",
        name: "Republic Of The Congo",
        phoneCode: 242
    }, {
        id: 50,
        sortname: "CD",
        name: "Democratic Republic Of The Congo",
        phoneCode: 242
    }, {
        id: 51,
        sortname: "CK",
        name: "Cook Islands",
        phoneCode: 682
    }, {
        id: 52,
        sortname: "CR",
        name: "Costa Rica",
        phoneCode: 506
    }, {
        id: 53,
        sortname: "CI",
        name: "Cote D''Ivoire (Ivory Coast)",
        phoneCode: 225
    }, {
        id: 54,
        sortname: "HR",
        name: "Croatia (Hrvatska)",
        phoneCode: 385
    }, {
        id: 55,
        sortname: "CU",
        name: "Cuba",
        phoneCode: 53
    }, {
        id: 56,
        sortname: "CY",
        name: "Cyprus",
        phoneCode: 357
    }, {
        id: 57,
        sortname: "CZ",
        name: "Czech Republic",
        phoneCode: 420
    }, {
        id: 58,
        sortname: "DK",
        name: "Denmark",
        phoneCode: 45
    }, {
        id: 59,
        sortname: "DJ",
        name: "Djibouti",
        phoneCode: 253
    }, {
        id: 60,
        sortname: "DM",
        name: "Dominica",
        phoneCode: 1767
    }, {
        id: 61,
        sortname: "DO",
        name: "Dominican Republic",
        phoneCode: 1809
    }, {
        id: 62,
        sortname: "TP",
        name: "East Timor",
        phoneCode: 670
    }, {
        id: 63,
        sortname: "EC",
        name: "Ecuador",
        phoneCode: 593
    }, {
        id: 64,
        sortname: "EG",
        name: "Egypt",
        phoneCode: 20
    }, {
        id: 65,
        sortname: "SV",
        name: "El Salvador",
        phoneCode: 503
    }, {
        id: 66,
        sortname: "GQ",
        name: "Equatorial Guinea",
        phoneCode: 240
    }, {
        id: 67,
        sortname: "ER",
        name: "Eritrea",
        phoneCode: 291
    }, {
        id: 68,
        sortname: "EE",
        name: "Estonia",
        phoneCode: 372
    }, {
        id: 69,
        sortname: "ET",
        name: "Ethiopia",
        phoneCode: 251
    }, {
        id: 70,
        sortname: "XA",
        name: "External Territories of Australia",
        phoneCode: 61
    }, {
        id: 71,
        sortname: "FK",
        name: "Falkland Islands",
        phoneCode: 500
    }, {
        id: 72,
        sortname: "FO",
        name: "Faroe Islands",
        phoneCode: 298
    }, {
        id: 73,
        sortname: "FJ",
        name: "Fiji Islands",
        phoneCode: 679
    }, {
        id: 74,
        sortname: "FI",
        name: "Finland",
        phoneCode: 358
    }, {
        id: 75,
        sortname: "FR",
        name: "France",
        phoneCode: 33
    }, {
        id: 76,
        sortname: "GF",
        name: "French Guiana",
        phoneCode: 594
    }, {
        id: 77,
        sortname: "PF",
        name: "French Polynesia",
        phoneCode: 689
    }, {
        id: 78,
        sortname: "TF",
        name: "French Southern Territories",
        phoneCode: 0
    }, {
        id: 79,
        sortname: "GA",
        name: "Gabon",
        phoneCode: 241
    }, {
        id: 80,
        sortname: "GM",
        name: "Gambia The",
        phoneCode: 220
    }, {
        id: 81,
        sortname: "GE",
        name: "Georgia",
        phoneCode: 995
    }, {
        id: 82,
        sortname: "DE",
        name: "Germany",
        phoneCode: 49
    }, {
        id: 83,
        sortname: "GH",
        name: "Ghana",
        phoneCode: 233
    }, {
        id: 84,
        sortname: "GI",
        name: "Gibraltar",
        phoneCode: 350
    }, {
        id: 85,
        sortname: "GR",
        name: "Greece",
        phoneCode: 30
    }, {
        id: 86,
        sortname: "GL",
        name: "Greenland",
        phoneCode: 299
    }, {
        id: 87,
        sortname: "GD",
        name: "Grenada",
        phoneCode: 1473
    }, {
        id: 88,
        sortname: "GP",
        name: "Guadeloupe",
        phoneCode: 590
    }, {
        id: 89,
        sortname: "GU",
        name: "Guam",
        phoneCode: 1671
    }, {
        id: 90,
        sortname: "GT",
        name: "Guatemala",
        phoneCode: 502
    }, {
        id: 91,
        sortname: "XU",
        name: "Guernsey and Alderney",
        phoneCode: 44
    }, {
        id: 92,
        sortname: "GN",
        name: "Guinea",
        phoneCode: 224
    }, {
        id: 93,
        sortname: "GW",
        name: "Guinea-Bissau",
        phoneCode: 245
    }, {
        id: 94,
        sortname: "GY",
        name: "Guyana",
        phoneCode: 592
    }, {
        id: 95,
        sortname: "HT",
        name: "Haiti",
        phoneCode: 509
    }, {
        id: 96,
        sortname: "HM",
        name: "Heard and McDonald Islands",
        phoneCode: 0
    }, {
        id: 97,
        sortname: "HN",
        name: "Honduras",
        phoneCode: 504
    }, {
        id: 98,
        sortname: "HK",
        name: "Hong Kong S.A.R.",
        phoneCode: 852
    }, {
        id: 99,
        sortname: "HU",
        name: "Hungary",
        phoneCode: 36
    }, {
        id: 100,
        sortname: "IS",
        name: "Iceland",
        phoneCode: 354
    }, {
        id: 101,
        sortname: "IN",
        name: "India",
        phoneCode: 91
    }, {
        id: 102,
        sortname: "ID",
        name: "Indonesia",
        phoneCode: 62
    }, {
        id: 103,
        sortname: "IR",
        name: "Iran",
        phoneCode: 98
    }, {
        id: 104,
        sortname: "IQ",
        name: "Iraq",
        phoneCode: 964
    }, {
        id: 105,
        sortname: "IE",
        name: "Ireland",
        phoneCode: 353
    }, {
        id: 106,
        sortname: "IL",
        name: "Israel",
        phoneCode: 972
    }, {
        id: 107,
        sortname: "IT",
        name: "Italy",
        phoneCode: 39
    }, {
        id: 108,
        sortname: "JM",
        name: "Jamaica",
        phoneCode: 1876
    }, {
        id: 109,
        sortname: "JP",
        name: "Japan",
        phoneCode: 81
    }, {
        id: 110,
        sortname: "XJ",
        name: "Jersey",
        phoneCode: 44
    }, {
        id: 111,
        sortname: "JO",
        name: "Jordan",
        phoneCode: 962
    }, {
        id: 112,
        sortname: "KZ",
        name: "Kazakhstan",
        phoneCode: 7
    }, {
        id: 113,
        sortname: "KE",
        name: "Kenya",
        phoneCode: 254
    }, {
        id: 114,
        sortname: "KI",
        name: "Kiribati",
        phoneCode: 686
    }, {
        id: 115,
        sortname: "KP",
        name: "Korea North",
        phoneCode: 850
    }, {
        id: 116,
        sortname: "KR",
        name: "Korea South",
        phoneCode: 82
    }, {
        id: 117,
        sortname: "KW",
        name: "Kuwait",
        phoneCode: 965
    }, {
        id: 118,
        sortname: "KG",
        name: "Kyrgyzstan",
        phoneCode: 996
    }, {
        id: 119,
        sortname: "LA",
        name: "Laos",
        phoneCode: 856
    }, {
        id: 120,
        sortname: "LV",
        name: "Latvia",
        phoneCode: 371
    }, {
        id: 121,
        sortname: "LB",
        name: "Lebanon",
        phoneCode: 961
    }, {
        id: 122,
        sortname: "LS",
        name: "Lesotho",
        phoneCode: 266
    }, {
        id: 123,
        sortname: "LR",
        name: "Liberia",
        phoneCode: 231
    }, {
        id: 124,
        sortname: "LY",
        name: "Libya",
        phoneCode: 218
    }, {
        id: 125,
        sortname: "LI",
        name: "Liechtenstein",
        phoneCode: 423
    }, {
        id: 126,
        sortname: "LT",
        name: "Lithuania",
        phoneCode: 370
    }, {
        id: 127,
        sortname: "LU",
        name: "Luxembourg",
        phoneCode: 352
    }, {
        id: 128,
        sortname: "MO",
        name: "Macau S.A.R.",
        phoneCode: 853
    }, {
        id: 129,
        sortname: "MK",
        name: "Macedonia",
        phoneCode: 389
    }, {
        id: 130,
        sortname: "MG",
        name: "Madagascar",
        phoneCode: 261
    }, {
        id: 131,
        sortname: "MW",
        name: "Malawi",
        phoneCode: 265
    }, {
        id: 132,
        sortname: "MY",
        name: "Malaysia",
        phoneCode: 60
    }, {
        id: 133,
        sortname: "MV",
        name: "Maldives",
        phoneCode: 960
    }, {
        id: 134,
        sortname: "ML",
        name: "Mali",
        phoneCode: 223
    }, {
        id: 135,
        sortname: "MT",
        name: "Malta",
        phoneCode: 356
    }, {
        id: 136,
        sortname: "XM",
        name: "Man (Isle of)",
        phoneCode: 44
    }, {
        id: 137,
        sortname: "MH",
        name: "Marshall Islands",
        phoneCode: 692
    }, {
        id: 138,
        sortname: "MQ",
        name: "Martinique",
        phoneCode: 596
    }, {
        id: 139,
        sortname: "MR",
        name: "Mauritania",
        phoneCode: 222
    }, {
        id: 140,
        sortname: "MU",
        name: "Mauritius",
        phoneCode: 230
    }, {
        id: 141,
        sortname: "YT",
        name: "Mayotte",
        phoneCode: 269
    }, {
        id: 142,
        sortname: "MX",
        name: "Mexico",
        phoneCode: 52
    }, {
        id: 143,
        sortname: "FM",
        name: "Micronesia",
        phoneCode: 691
    }, {
        id: 144,
        sortname: "MD",
        name: "Moldova",
        phoneCode: 373
    }, {
        id: 145,
        sortname: "MC",
        name: "Monaco",
        phoneCode: 377
    }, {
        id: 146,
        sortname: "MN",
        name: "Mongolia",
        phoneCode: 976
    }, {
        id: 147,
        sortname: "MS",
        name: "Montserrat",
        phoneCode: 1664
    }, {
        id: 148,
        sortname: "MA",
        name: "Morocco",
        phoneCode: 212
    }, {
        id: 149,
        sortname: "MZ",
        name: "Mozambique",
        phoneCode: 258
    }, {
        id: 150,
        sortname: "MM",
        name: "Myanmar",
        phoneCode: 95
    }, {
        id: 151,
        sortname: "NA",
        name: "Namibia",
        phoneCode: 264
    }, {
        id: 152,
        sortname: "NR",
        name: "Nauru",
        phoneCode: 674
    }, {
        id: 153,
        sortname: "NP",
        name: "Nepal",
        phoneCode: 977
    }, {
        id: 154,
        sortname: "AN",
        name: "Netherlands Antilles",
        phoneCode: 599
    }, {
        id: 155,
        sortname: "NL",
        name: "Netherlands The",
        phoneCode: 31
    }, {
        id: 156,
        sortname: "NC",
        name: "New Caledonia",
        phoneCode: 687
    }, {
        id: 157,
        sortname: "NZ",
        name: "New Zealand",
        phoneCode: 64
    }, {
        id: 158,
        sortname: "NI",
        name: "Nicaragua",
        phoneCode: 505
    }, {
        id: 159,
        sortname: "NE",
        name: "Niger",
        phoneCode: 227
    }, {
        id: 160,
        sortname: "NG",
        name: "Nigeria",
        phoneCode: 234
    }, {
        id: 161,
        sortname: "NU",
        name: "Niue",
        phoneCode: 683
    }, {
        id: 162,
        sortname: "NF",
        name: "Norfolk Island",
        phoneCode: 672
    }, {
        id: 163,
        sortname: "MP",
        name: "Northern Mariana Islands",
        phoneCode: 1670
    }, {
        id: 164,
        sortname: "NO",
        name: "Norway",
        phoneCode: 47
    }, {
        id: 165,
        sortname: "OM",
        name: "Oman",
        phoneCode: 968
    }, {
        id: 166,
        sortname: "PK",
        name: "Pakistan",
        phoneCode: 92
    }, {
        id: 167,
        sortname: "PW",
        name: "Palau",
        phoneCode: 680
    }, {
        id: 168,
        sortname: "PS",
        name: "Palestinian Territory Occupied",
        phoneCode: 970
    }, {
        id: 169,
        sortname: "PA",
        name: "Panama",
        phoneCode: 507
    }, {
        id: 170,
        sortname: "PG",
        name: "Papua new Guinea",
        phoneCode: 675
    }, {
        id: 171,
        sortname: "PY",
        name: "Paraguay",
        phoneCode: 595
    }, {
        id: 172,
        sortname: "PE",
        name: "Peru",
        phoneCode: 51
    }, {
        id: 173,
        sortname: "PH",
        name: "Philippines",
        phoneCode: 63
    }, {
        id: 174,
        sortname: "PN",
        name: "Pitcairn Island",
        phoneCode: 0
    }, {
        id: 175,
        sortname: "PL",
        name: "Poland",
        phoneCode: 48
    }, {
        id: 176,
        sortname: "PT",
        name: "Portugal",
        phoneCode: 351
    }, {
        id: 177,
        sortname: "PR",
        name: "Puerto Rico",
        phoneCode: 1787
    }, {
        id: 178,
        sortname: "QA",
        name: "Qatar",
        phoneCode: 974
    }, {
        id: 179,
        sortname: "RE",
        name: "Reunion",
        phoneCode: 262
    }, {
        id: 180,
        sortname: "RO",
        name: "Romania",
        phoneCode: 40
    }, {
        id: 181,
        sortname: "RU",
        name: "Russia",
        phoneCode: 70
    }, {
        id: 182,
        sortname: "RW",
        name: "Rwanda",
        phoneCode: 250
    }, {
        id: 183,
        sortname: "SH",
        name: "Saint Helena",
        phoneCode: 290
    }, {
        id: 184,
        sortname: "KN",
        name: "Saint Kitts And Nevis",
        phoneCode: 1869
    }, {
        id: 185,
        sortname: "LC",
        name: "Saint Lucia",
        phoneCode: 1758
    }, {
        id: 186,
        sortname: "PM",
        name: "Saint Pierre and Miquelon",
        phoneCode: 508
    }, {
        id: 187,
        sortname: "VC",
        name: "Saint Vincent And The Grenadines",
        phoneCode: 1784
    }, {
        id: 188,
        sortname: "WS",
        name: "Samoa",
        phoneCode: 684
    }, {
        id: 189,
        sortname: "SM",
        name: "San Marino",
        phoneCode: 378
    }, {
        id: 190,
        sortname: "ST",
        name: "Sao Tome and Principe",
        phoneCode: 239
    }, {
        id: 191,
        sortname: "SA",
        name: "Saudi Arabia",
        phoneCode: 966
    }, {
        id: 192,
        sortname: "SN",
        name: "Senegal",
        phoneCode: 221
    }, {
        id: 193,
        sortname: "RS",
        name: "Serbia",
        phoneCode: 381
    }, {
        id: 194,
        sortname: "SC",
        name: "Seychelles",
        phoneCode: 248
    }, {
        id: 195,
        sortname: "SL",
        name: "Sierra Leone",
        phoneCode: 232
    }, {
        id: 196,
        sortname: "SG",
        name: "Singapore",
        phoneCode: 65
    }, {
        id: 197,
        sortname: "SK",
        name: "Slovakia",
        phoneCode: 421
    }, {
        id: 198,
        sortname: "SI",
        name: "Slovenia",
        phoneCode: 386
    }, {
        id: 199,
        sortname: "XG",
        name: "Smaller Territories of the UK",
        phoneCode: 44
    }, {
        id: 200,
        sortname: "SB",
        name: "Solomon Islands",
        phoneCode: 677
    }, {
        id: 201,
        sortname: "SO",
        name: "Somalia",
        phoneCode: 252
    }, {
        id: 202,
        sortname: "ZA",
        name: "South Africa",
        phoneCode: 27
    }, {
        id: 203,
        sortname: "GS",
        name: "South Georgia",
        phoneCode: 0
    }, {
        id: 204,
        sortname: "SS",
        name: "South Sudan",
        phoneCode: 211
    }, {
        id: 205,
        sortname: "ES",
        name: "Spain",
        phoneCode: 34
    }, {
        id: 206,
        sortname: "LK",
        name: "Sri Lanka",
        phoneCode: 94
    }, {
        id: 207,
        sortname: "SD",
        name: "Sudan",
        phoneCode: 249
    }, {
        id: 208,
        sortname: "SR",
        name: "Suriname",
        phoneCode: 597
    }, {
        id: 209,
        sortname: "SJ",
        name: "Svalbard And Jan Mayen Islands",
        phoneCode: 47
    }, {
        id: 210,
        sortname: "SZ",
        name: "Swaziland",
        phoneCode: 268
    }, {
        id: 211,
        sortname: "SE",
        name: "Sweden",
        phoneCode: 46
    }, {
        id: 212,
        sortname: "CH",
        name: "Switzerland",
        phoneCode: 41
    }, {
        id: 213,
        sortname: "SY",
        name: "Syria",
        phoneCode: 963
    }, {
        id: 214,
        sortname: "TW",
        name: "Taiwan",
        phoneCode: 886
    }, {
        id: 215,
        sortname: "TJ",
        name: "Tajikistan",
        phoneCode: 992
    }, {
        id: 216,
        sortname: "TZ",
        name: "Tanzania",
        phoneCode: 255
    }, {
        id: 217,
        sortname: "TH",
        name: "Thailand",
        phoneCode: 66
    }, {
        id: 218,
        sortname: "TG",
        name: "Togo",
        phoneCode: 228
    }, {
        id: 219,
        sortname: "TK",
        name: "Tokelau",
        phoneCode: 690
    }, {
        id: 220,
        sortname: "TO",
        name: "Tonga",
        phoneCode: 676
    }, {
        id: 221,
        sortname: "TT",
        name: "Trinidad And Tobago",
        phoneCode: 1868
    }, {
        id: 222,
        sortname: "TN",
        name: "Tunisia",
        phoneCode: 216
    }, {
        id: 223,
        sortname: "TR",
        name: "Turkey",
        phoneCode: 90
    }, {
        id: 224,
        sortname: "TM",
        name: "Turkmenistan",
        phoneCode: 7370
    }, {
        id: 225,
        sortname: "TC",
        name: "Turks And Caicos Islands",
        phoneCode: 1649
    }, {
        id: 226,
        sortname: "TV",
        name: "Tuvalu",
        phoneCode: 688
    }, {
        id: 227,
        sortname: "UG",
        name: "Uganda",
        phoneCode: 256
    }, {
        id: 228,
        sortname: "UA",
        name: "Ukraine",
        phoneCode: 380
    }, {
        id: 229,
        sortname: "AE",
        name: "United Arab Emirates",
        phoneCode: 971
    }, {
        id: 230,
        sortname: "GB",
        name: "United Kingdom",
        phoneCode: 44
    }, {
        id: 231,
        sortname: "US",
        name: "United States",
        phoneCode: 1
    }, {
        id: 232,
        sortname: "UM",
        name: "United States Minor Outlying Islands",
        phoneCode: 1
    }, {
        id: 233,
        sortname: "UY",
        name: "Uruguay",
        phoneCode: 598
    }, {
        id: 234,
        sortname: "UZ",
        name: "Uzbekistan",
        phoneCode: 998
    }, {
        id: 235,
        sortname: "VU",
        name: "Vanuatu",
        phoneCode: 678
    }, {
        id: 236,
        sortname: "VA",
        name: "Vatican City State (Holy See)",
        phoneCode: 39
    }, {
        id: 237,
        sortname: "VE",
        name: "Venezuela",
        phoneCode: 58
    }, {
        id: 238,
        sortname: "VN",
        name: "Vietnam",
        phoneCode: 84
    }, {
        id: 239,
        sortname: "VG",
        name: "Virgin Islands (British)",
        phoneCode: 6,924.77 
    }, {
        id: 240,
        sortname: "VI",
        name: "Virgin Islands (US)",
        phoneCode: 1340
    }, {
        id: 241,
        sortname: "WF",
        name: "Wallis And Futuna Islands",
        phoneCode: 681
    }, {
        id: 242,
        sortname: "EH",
        name: "Western Sahara",
        phoneCode: 212
    }, {
        id: 243,
        sortname: "YE",
        name: "Yemen",
        phoneCode: 967
    }, {
        id: 1783,
        sortname: "YU",
        name: "Yugoslavia",
        phoneCode: 38
    }, {
        id: 245,
        sortname: "ZM",
        name: "Zambia",
        phoneCode: 260
    }, {
        id: 246,
        sortname: "ZW",
        name: "Zimbabwe",
        phoneCode: 26
    }]);
    function zr(e, t) {
        if ("array" !== Xn(e))
            return null;
        if (e.indexOf(t) < 0) {
            var n = N(t)
              , r = n ? t : {
                name: t = String(t),
                identifier: t
            }
              , o = r.name
              , a = r.sortname;
            t = e.find((function(e) {
                if (N(e)) {
                    var t = e.name
                      , r = e.sortname
                      , i = void 0 !== o
                      , c = void 0 !== a
                      , u = i || c ? 1 : 0;
                    return n ? (i && (u &= o === t),
                    c && (u &= a === r)) : u &= i && o === t || c && a === r,
                    u
                }
            }
            ))
        }
        return t || null
    }
    function Wr(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || Qr(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Kr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function qr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Kr(Object(n), !0).forEach((function(t) {
                Yr(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kr(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Yr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Zr(e) {
        return function(e) {
            if (Array.isArray(e))
                return Xr(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || Qr(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Qr(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Xr(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xr(e, t) : void 0
        }
    }
    function Xr(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Jr(e) {
        return Jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        Jr(e)
    }
    function eo(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    var to = "__CheckoutInitAddress";
    function no(e) {
        return Br || (Br = Object.create(null)),
        M(Br, dn("amount", "campaign_id", "country", "currency", "default_account", "customer_email::email", "mobilemoney_network", "payment_page", "payment_plan", "PBFPubKey", "customer_phone::phone", "recurring_stop", "redirect_url", "settlement_token", "txref")),
        so.call(Br),
        new Promise((function(t) {
            var n = [];
            try {
                n.push({
                    metaname: to,
                    metavalue: new URL(decodeURIComponent(Br.init_url)).href
                })
            } catch (e) {
                n.push({
                    metaname: to,
                    metavalue: "N/A"
                })
            }
            if (Object.defineProperty(Br, "meta", {
                configurable: !0,
                value: n
            }),
            self.parent !== self)
                return self.parent.postMessage({
                    name: "readytorecieve"
                }, "*"),
                void addEventListener("message", (function r(o) {
                    var a = o.data;
                    if (o.source === self.parent) {
                        var i = N(a) ? a : {}
                          , c = i.name
                          , u = eo(i, ["name"]);
                        if ("updategotten" === c) {
                            removeEventListener("message", r);
                            var l = u.applepay
                              , s = u.billing
                              , f = u.meta
                              , d = u.subaccounts;
                            u.theme;
                            var p = u.v3;
                            try {
                                f.forEach((function(e) {
                                    if (N(e)) {
                                        var t = e.metaname
                                          , r = e.metavalue;
                                        if (r && N(r)) {
                                            if (r.metaname && r.metaname !== to && r.metavalue && ([!0, !1].includes(r.isRequired) && delete r.isRequired,
                                            I(r.metaname) && {
                                                string: !0,
                                                number: !0,
                                                boolean: !0
                                            }[Jr(r.metavalue)])) {
                                                for (var o = 0, a = n.length; o < a; o++)
                                                    if (r.metaname === n[o].metaname)
                                                        return;
                                                n.push(r)
                                            }
                                        } else if (I(t) && t) {
                                            if (!r)
                                                return;
                                            for (var i = 0, c = n.length; i < c; i++)
                                                if (t === n[i].metaname)
                                                    return;
                                            n.push(e)
                                        }
                                    }
                                }
                                ))
                            } catch (e) {}
                            if (N(s)) {
                                try {
                                    M(Br, "billing_metadata", {
                                        value: Object.freeze(["billingaddress", "billingcity", "billingstate", "billingzip", "billingcountry", "shippiZARame", "shippingaddress", "shippingcity", "shippingstate", "shippingzip", "shippingcountry"].reduce((function(e, t) {
                                            return e[t] = s[t],
                                            e
                                        }
                                        ), Object.create(null)))
                                    })
                                } catch (e) {}
                            }
                            M(Br, {
                                subaccounts: d,
                                meta: n.filter(Boolean),
                                use_v3: !0 === Boolean(+p),
                                allowApplePay: !0 === l
                            }),
                            t(e)
                        }
                    }
                }
                ));
            t(e)
        }
        ))
    }
    function ro() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return [].concat(t).filter(Boolean)[0] || null
    }
    function oo() {
        var e, t = sn.get("customer_firstname"), n = sn.get("customer_lastname");
        e = (I(e = sn.get("customer_fullname")) ? e : String()).split(/\b[^a-z-]+?\b/i).map((function(e) {
            return e.trim() || null
        }
        ));
        var r = e = Array.from(new Array(Math.max(2, e.length)), (function(t, n) {
            return null == e[n] ? void 0 : e[n]
        }
        ))
          , o = r.length
          , a = r[0]
          , i = void 0 === a ? t : a
          , c = r[o - 1]
          , u = void 0 === c ? n : c;
        M(this, {
            firstname: i,
            lastname: u,
            names: [i].concat(Zr(e.slice(1, -1)), [u])
        })
    }
    function ao(e) {
        var t = e.get("ip")
          , n = N(t) ? t : I(t) ? {
            ipv4: t
        } : {}
          , r = n.ipv4
          , o = n.country;
        r = L(It, r),
        o = L(/^[a-z]{2}$/i, o),
        M(this, {
            ip: r,
            ip_country: r && o && o.toUpperCase()
        })
    }
    function io(e) {
        var t = [].concat(sn.get("exclude_banks"), un(cn.exclude_banks, e.get("exclude_banks"))).filter(Boolean);
        Vr.call(e, t),
        M(this, {
            banks: Object.freeze(M(Object.create(null), {
                account: Lr,
                internet: $r,
                ussd: Ur
            }))
        })
    }
    function co() {
        var e = sn.get("custom_pwbt_expiry")
          , t = sn.raw;
        e || (e = t.bank_transfer_expiry),
        this.expires = ro(e)
    }
    function uo(e) {
        if (e.get("campaignMeta") && e.get("discount") && e.get("discount").apply_discount) {
            var t = e.get("campaignMeta");
            M(this, {
                campaign: qr(qr({}, e.get("discount").campaign), t),
                new_amount: e.get("discount").amount_to_pay,
                discount: e.get("discount").discount_to_apply,
                discounted_value: e.get("discount").discounted_value,
                discount_type: e.get("discount").discount_type
            })
        }
    }
    function lo(e) {
        var t, n = this;
        this.merchant_name = ro(sn.get("custom_title"), e.get("merchant.name"), "Flutterwave Merchant"),
        this.banktransfer_beneficiary_name = ro(sn.get("custom_narration"), this.merchant_name),
        this.merchant_logo = ro(sn.get("custom_logo"), e.get("merchant.logo"), new URL("/assetsimg/rave-logo.png","https://checkout.flutterwave.com").href),
        M(t = N(t = e.get("preferences")) ? t : {}, {
            merchant_bears_fees: $(e.get("initial.merchant_bearing"), !1),
            use_dynamic_currency_conversion: $(e.get("enabled_for_dcc"), !1),
            use_old_saved_card_flow: $(e.get("use_old_saved_card_flow"), !1),
            use_secureauth_for_card: $(null, !1)
        }),
        N(t) && !Fe(t) && Object.keys(t).forEach((function(e) {
            e in n.preferences && (n.preferences[e] = $(t[e], n.preferences[e]))
        }
        ))
    }
    function so() {
        var e = null;
        if (self === self.top)
            e = self.location.href;
        else
            try {
                var t = window.opener || window.parent;
                e = t && t !== window.self ? null : (self.top || self).location.href
            } catch (e) {}
        M(this, {
            init_url: ro(e, sn.get("init_url"))
        })
    }
    function fo(e) {
        var t = Wr(String(e.get("powered_by_title") || e.get("poweredbytitle")).match(/^(\d+)(?::([^:]*))?$/) || [], 3)
          , n = t[1]
          , r = t[2];
        M(Br, {
            mpesaPaybill: n,
            canSendSTKPushNotification: "NOSTK" !== r,
            description: ro(sn.get("custom_description")),
            integrity_hash: ro(e.get("integrity_hash"), sn.get("integrity_hash")),
            narration: ro(sn.get("custom_narration")),
            charge_type: e.get("charge_type"),
            cycle: e.get("cycle"),
            include_discount_amount: $(sn.get("include_discount_amount"), !1),
            modalauditid: e.get("id"),
            forter_site_id: e.get("forter_site_id"),
            use_authm_control: $(e.get("authm_control"), !0),
            preferences: M(Object.create(null), {
                blacklist_saved_cards: !1,
                can_switch_to_paymob: !1,
                ignore_mpesa_fallback: !1,
                merchant_bears_fees: !1,
                prefers_reduced_tracking: !1,
                prefers_hidden_email: !1,
                prefers_language_translation: !1,
                should_redirect_on_fail: !1,
                use_dynamic_currency_conversion: !1,
                use_old_saved_card_flow: !1,
                use_secureauth_for_card: !1
            }, !0)
        }),
        k.call(Br, "currencies", (function() {
            return Sr
        }
        )),
        k.call(Br, "payment_options", (function() {
            return Tr
        }
        )),
        k.call(Br, "currency_options", (function() {
            return jr
        }
        )),
        k.call(Br, "device_fingerprint", (function() {
            return Hn
        }
        )),
        k.call(Br, "initial_currency", (function() {
            return Rr.currency || sn.get("currency")
        }
        )),
        k.call(Br, "initial_method", (function() {
            return Rr.option || (jr[Br.initial_currency] || [])[0] || null
        }
        )),
        M(Br, {
            mobilemoneyfranco_countries: Er
        }),
        k.call(Br, "mobilemoney_networks", (function() {
            return _r
        }
        )),
        k.call(Br, "saved_cards", (function() {
            return fr
        }
        )),
        k.call(Br, "enaira_payment_options", (function() {
            return Ir
        }
        )),
        k.call(Br, "iso_countries_options", (function() {
            return Hr
        }
        )),
        oo.call(Br),
        ao.call(Br, e),
        io.call(Br, e),
        co.call(Br),
        uo.call(Br, e),
        lo.call(Br, e),
        function(e) {
            if (N(e) && !Fe(e)) {
                var t = e.get("initial.payment_option")
                  , n = L(/^[a-z]{2}$/i, sn.get("country")) || "NG"
                  , r = L(/^[a-z]{3}$/i, e.get("initial.currency"));
                n = n && n.toUpperCase(),
                r = r && r.toUpperCase(),
                xr.call(this, e.get("payment_options")),
                t = (r = Sr.indexOf(r) >= 0 ? r : null) && (Tr.indexOf(t) >= 0 ? t : null),
                Rr || (Rr = Object.create(null)),
                M(Rr, {
                    country: n,
                    currency: r,
                    option: t
                }),
                Object.freeze(Sr),
                Object.freeze(jr),
                Object.freeze(Tr),
                Object.freeze(Rr)
            }
        }(e),
        Gr = Object.freeze(Br),
        Po.initializedModal.call(Br)
    }
    function po() {
        return e = function() {
            return Br
        }
        ,
        (Gr ? Promise.resolve() : Gn().then(no).then(fo)).then(x(e));
        var e
    }
    function mo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function ho(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? mo(Object(n), !0).forEach((function(t) {
                yo(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mo(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function yo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var bo, vo = bt.many.init(Tn), go = new URL("https://flw-events-ge.herokuapp.com/event/create");
    function Oo(e) {
        return function(e) {
            return Promise.resolve(bo || po().then((function(e) {
                var t = e.modalauditid;
                return bo = M(Object.create(null), {
                    actor: sn.get("customer_email"),
                    context: /Mobi/.test(navigator.userAgent) ? "mobile" : "web",
                    label: t,
                    modalauditid: t,
                    token: "flw_event_wt_e5fe4da063edacb29ec19f"
                })
            }
            ))).then((function(t) {
                return JSON.stringify(ho(ho(ho({}, N(e) ? e : {}), t), {}, {
                    date: Date.now()
                }))
            }
            ))
        }(e).then((function(e) {
            var t = 0
              , n = 0;
            return function r() {
                return t < 10 && setTimeout((function() {
                    return vo(go, {
                        body: e
                    }).then((function(e) {
                        return Pn(e) && e.ok || Promise.reject()
                    }
                    )).catch(r)
                }
                ), 1e3 * (n += t++))
            }()
        }
        ))
    }
    function _o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Eo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var wo = bt.many.init(Tn)
      , Ao = "https://api.ravepay.co".concat("/v3/checkout/non-translated-messages");
    function Co(e) {
        var t = 0
          , n = 0
          , r = sn.get("PBFPubKey")
          , o = JSON.stringify(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _o(Object(n), !0).forEach((function(t) {
                    Eo(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({
            channel: "Checkout",
            public_key: r
        }, e));
        return function e() {
            return t < 5 && setTimeout((function() {
                return wo(Ao, {
                    body: o
                }).then((function(e) {
                    return Pn(e) ? e.json().then((function(e) {
                        "error" === e.status && "Message has already been logged" === e.message && (t = 5)
                    }
                    )) : Promise.reject()
                }
                )).catch(e)
            }
            ), 1e3 * (n += t++))
        }()
    }
    var So = !0;
    function jo(e, t, n, r) {
        return Oo({
            action: e,
            object: t,
            comment: n,
            data: r
        })
    }
    function To(e) {
        return I(e) ? e : String()
    }
    function Ro(e) {
        return To(e).toLowerCase()
    }
    function Io(e) {
        return To(e).replace(/(.*?)(\b[A-Z]+\b)(.*?)/g, (function(e, t, n, r) {
            return "".concat(Ro(t)).concat(n).concat(Ro(r))
        }
        ))
    }
    var Po = M(Object.create(null), {
        closeModal: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = !0 === e ? "Closed modal after successful payment" : "Closed modal";
            return jo("closed", "modal", t)
        },
        initializedModal: function() {
            try {
                var e = N(this) ? this : {}
                  , t = e.init_url
                  , n = e.ip
                  , r = e.txref
                  , o = e.currency
                  , a = {
                    ref: r,
                    amount: e.amount,
                    currency: o,
                    ip: n
                };
                return jo("loaded", "modal", "Initiated Checkout".concat(t ? " from ".concat(decodeURIComponent(t)) : ""), a)
            } catch (e) {
                return jo("loaded", "modal", "Initiated Checkout")
            }
        },
        transactionSuccessful: function() {
            return jo("completion", "TRANSACTION", "Transaction Completed!")
        },
        transactionFailed: function() {
            return jo("failure", "TRANSACTION", "Transaction Failed!")
        },
        transactionTimeout: function() {
            return jo("timeout", "TRANSACTION", "Transaction Session Timeout!")
        },
        paypalPendingMerchantAction: function() {
            return jo("charge", "PAYPAL", "Charge processing completed: Pending merchant action.")
        },
        redirectingToMerchant: function(e) {
            return jo("redirect", "REDIRECT_URL", "Redirecting to merchant", e)
        },
        selectedOption: function(e, t) {
            return jo("selected", e, "Selected ".concat(t))
        },
        startedInput: function(e) {
            return jo("typing", e, "Entering ".concat(Io(e)))
        },
        stoppedInput: function(e) {
            return jo("typing", e, "Stopped entering ".concat(Io(e)))
        },
        switchedMethod: function(e) {
            return !0 === So ? (So = !1,
            jo("launched", "modal", "Launched ".concat(e, " as initial payment option"))) : jo("switched", "modal", "Switched to ".concat(e, " option"))
        },
        eNairaOptionSelected: function(e) {
            return jo("eNaira option selected", "modal", "Selected eNaira ".concat(e))
        },
        startEnairaTokenValidation: function() {
            return jo("eNaira token validation", "modal", "Starting eNaira token validation")
        },
        customerOpenedRedirectURL: function(e, t) {
            return jo("".concat(e, " redirect URL opened"), "modal", "Customer opened ".concat(t, " verification page"))
        },
        customerAttemptingCharge: function(e) {
            return jo("".concat(e, " charge"), "modal", "Attempting ".concat(e, " charge"))
        },
        customerReturnedFromVerificationPage: function() {
            return jo("verification page", "modal", "Customer returned returned from verification page")
        },
        chargeRequestStatus: function(e) {
            return jo("charge request", "modal", "Charge request ".concat(e))
        },
        changedLanguage: function(e) {
            return jo("locale change", "modal", "Changed language to ".concat(e))
        },
        logUntranslatedError: function(e) {
            return Co(e)
        }
    })
      , Do = function(e) {
        return ["CFA", "XAF", "XOF"].includes(e) ? "fr" : "en"
    };
    function No() {
        var e = Object.create(null)
          , t = this.data
          , n = this.dispatch
          , r = U(t, "currency")
          , o = Do(r);
        function a(e) {
            return function(t) {
                t({
                    type: _,
                    payload: {
                        locale: e || o
                    }
                }),
                Po.changedLanguage(e)
            }
        }
        return M(e, {
            NAME: "locale",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U(t, "locale") || o
                  , n = arguments.length > 1 ? arguments[1] : void 0
                  , r = Pe(n.payload) ? n.payload : {};
                if (n.type === _) {
                    var a = r.locale;
                    return a || e
                }
                return e
            },
            actions: M(Object.create(null), {
                updateLocale: a
            }),
            exposedActions: M(Object.create(null), {
                CurrentLocale: te({
                    switch: a
                }, n)
            })
        }),
        No = e
    }
    function Mo() {
        Object.defineProperty(this, "list", {
            value: []
        })
    }
    Object.defineProperties(Mo.prototype, {
        empty: {
            get: function() {
                return this.list.length <= 0
            }
        },
        peek: {
            get: function() {
                if (!this.empty)
                    return this.list[this.list.length - 1]
            }
        },
        pop: {
            value: function() {
                return this.list.pop()
            }
        },
        push: {
            value: function(e) {
                return this.list.push(e),
                this
            }
        }
    });
    var ko = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    }
      , xo = {
        INIT: "@@redux/INIT".concat(ko()),
        REPLACE: "@@redux/REPLACE".concat(ko()),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION".concat(ko())
        }
    };
    function Lo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function $o(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Lo(Object(n), !0).forEach((function(t) {
                Uo(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lo(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Uo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Vo(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Fo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Fo(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Fo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Bo = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    function Go(e) {
        var t, n, r, o, a = !1, i = this.$inputs, c = this.dispatch, u = Object.create(null), l = Object.create(null), s = new Mo, f = M(Object.create(null), [].concat(e).reduce((function(e, t) {
            var n = Vo(String(t).split("::"), 2)
              , r = n[0]
              , o = n[1]
              , a = void 0 === o ? r : o;
            if (Bo(i, r)) {
                if (e[a = a.trim() || r] = i[r],
                Bo(l, a))
                    throw new Error("Duplicate local view input key(`".concat(a, "`) not allowed."));
                M(l, Uo({}, a, r)),
                i.$subscribe(r, m)
            }
            return e
        }
        ), {}), !0), d = Object.keys(f);
        function p() {
            var e = d.reduce((function(e, t) {
                var n = l[t];
                return i.$available(n) && (e = $o($o({}, e), {}, Uo({}, t, f[t]))),
                e
            }
            ), {});
            n = M(Object.create(null), $o({}, e), !0),
            r = Object.keys(n),
            o = r.length
        }
        function m() {
            t && clearTimeout(t),
            t = setTimeout(h, 0),
            !a && (a = !0)
        }
        function h() {
            c({
                type: w
            }),
            t && clearTimeout(t),
            t = void 0
        }
        function y() {
            return a && (d.forEach((function(e) {
                var t = l[e];
                f[e] !== i[t] && (f[e] = i[t])
            }
            )),
            p(),
            a = !1),
            n
        }
        return p(),
        M(u, {
            inputs: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y()
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case w:
                case xo.REPLACE:
                    return y();
                default:
                    return e
                }
            }
        }),
        Object.defineProperties(u, {
            $focusin: {
                value: function(e) {
                    var t = l[e];
                    s.empty && i.$available(t) && (s.push(t),
                    "PLAIN" === n[e].type && Po.startedInput(e))
                }
            },
            $focusout: {
                value: function(e) {
                    var t = l[e];
                    if (!s.empty && i.$available(t) && s.peek === t) {
                        s.pop(t);
                        var r = n[e];
                        "PLAIN" === r.type ? Po.stoppedInput(e) : "SELECTION" === r.type && Po.selectedOption(e, r.value)
                    }
                }
            },
            $loggingCompleted: {
                get: function() {
                    return s.empty
                }
            },
            $update: {
                value: function(e) {
                    e = N(e) ? e : 1 === o ? Uo({}, r[0], e) : null,
                    N(e) && r.forEach((function(t) {
                        if (Bo(e, t))
                            try {
                                var n = l[t];
                                i.$update(n, e[t])
                            } catch (e) {}
                    }
                    ))
                }
            },
            $unsubscribe: {
                value: function() {
                    d.forEach((function(e) {
                        var t = l[e];
                        i.$unsubscribe(t, m)
                    }
                    ))
                }
            }
        })
    }
    function Ho(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var zo = Function.prototype.call.bind(Object.prototype.hasOwnProperty);
    function Wo(e) {
        var t = this
          , n = []
          , r = N(e) ? Object.keys(e).reduce((function(r, o, a) {
            if (I(o)) {
                var i = e[o]
                  , c = (i = N(i) ? i : I(i) ? {
                    prop: i
                } : {}).prop;
                if (!(c = c.trim()) || !zo(t, c))
                    throw new Error("Reactive property".concat(c ? "(`".concat(c, "`)") : "", " not found for key(`").concat(o, "`)."));
                var u = (zo(i, "initialValue") ? function() {
                    return i.initialValue
                }
                : function() {
                    return t[c]
                }
                )();
                null == u && (u = null);
                var l = "".concat(o, "_$").concat(a);
                if (D(t.$subscribe) && D(t.$unsubscribe)) {
                    var s = function(e, n) {
                        e !== n && t.dispatch({
                            type: w,
                            payload: Ho({}, l, e)
                        })
                    };
                    t.$subscribe(c, s),
                    n.push((function() {
                        return t.$unsubscribe(c, s)
                    }
                    ))
                }
                r[o] = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , n = N(t.payload) ? t.payload : {};
                    if (t.type === w) {
                        if (zo(n, l)) {
                            var r = n[l];
                            return r !== e ? null == r ? null : r : e
                        }
                        return e
                    }
                    return e
                }
            }
            return r
        }
        ), Object.create(null)) : Object.create(null);
        return Object.defineProperties(r, {
            $unsubscribe: {
                value: function() {
                    n.forEach((function(e) {
                        return D(e) && e()
                    }
                    ))
                }
            }
        })
    }
    function Ko(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function qo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ko(Object(n), !0).forEach((function(t) {
                Yo(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ko(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Yo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Zo(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Qo(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Qo(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Qo(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Xo(e) {
        var t = e = N(e) ? e : {}
          , n = t.NAME
          , r = t.constants
          , o = t.inputs
          , a = t.mutables
          , i = x(e.back)
          , c = x(e.code)
          , u = x(e.next)
          , l = x(e.switch);
        function s() {
            var t = j
              , f = j
              , d = j
              , p = j
              , m = R(!0)
              , h = this
              , y = Object.create(null);
            function b() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function() {
                    return y.ACTIVE && m() && i.call.apply(i, [h].concat(t))
                }
            }
            function v() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function() {
                    return y.ACTIVE && m() && c.call.apply(c, [h].concat(t))
                }
            }
            function g() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function() {
                    return y.ACTIVE && m() && u.call.apply(u, [h].concat(t))
                }
            }
            function O() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return function() {
                    var e;
                    return y.ACTIVE && (e = t).call.apply(e, [h].concat(n))
                }
            }
            function _() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function() {
                    var e;
                    return y.ACTIVE && (e = f).call.apply(e, [h].concat(t))
                }
            }
            function E() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function() {
                    var e;
                    return y.ACTIVE && (e = d).call.apply(e, [h].concat(t))
                }
            }
            function w() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return function() {
                    return y.ACTIVE && m() && l.call.apply(l, [h].concat(t))
                }
            }
            return M(y, {
                Reducer: null
            }, !0),
            D(e.mount) && M(y, {
                $mount: e.mount.bind(h)
            }),
            s = M(y, {
                NAME: n,
                setup: function() {
                    var n = this.$inputs
                      , i = this.dispatch
                      , c = {}
                      , u = N(n) ? Object.keys(n) : [];
                    u = [].concat(o).filter((function(e) {
                        if (I(e)) {
                            var t = Zo(e.split("::"), 1)[0];
                            return u.indexOf(t) >= 0
                        }
                    }
                    ));
                    var l = Ae(qo({
                        $actions: M(Object.create(null), te({
                            back: b,
                            code: v,
                            focusin: _,
                            focusout: E,
                            next: g,
                            update: O,
                            switch: w
                        }, i))
                    }, N(r) ? r : {}))
                      , s = Wo.call(this, a);
                    if (u.length) {
                        var m = Go.call(this, u);
                        c = qo(qo({}, c), m),
                        t = x(m.$update),
                        f = x(m.$focusin),
                        d = x(m.$focusout),
                        p = x(m.$unsubscribe)
                    }
                    y.Reducer = M(J(qo(qo(qo({}, l), s), c)), {
                        teardown: function() {
                            s.$unsubscribe(),
                            p(),
                            y.Reducer = null
                        }
                    }),
                    D(e.afterSetup) && e.afterSetup.call(h)
                }
                .bind(h)
            })
        }
        return s
    }
    function Jo() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "CONFIRMING_VIEW"
        }).call(e)
    }
    var ea, ta, na, ra, oa, aa, ia, ca, ua = (ea = /[^\x00-\x7F]/,
    function(e) {
        return ea.test(e) ? encodeURIComponent(e) : e
    }
    );
    function la(e) {
        return cryptico.encrypt("string" == typeof e ? e : function(e) {
            return JSON.stringify(e, (function(e, t) {
                if ("meta" === e)
                    try {
                        t = t.map((function(e) {
                            return {
                                metaname: ua(e.metaname),
                                metavalue: ua(e.metavalue)
                            }
                        }
                        ))
                    } catch (e) {}
                else if ("QUERY_STRING_DATA" === e)
                    try {
                        t = Object.keys(t).reduce((function(e, n) {
                            return e[n] = ua(t[n]),
                            e
                        }
                        ), {})
                    } catch (e) {}
                return t
            }
            ))
        }(e), "baA/RgjURU3I0uqH3iRos3NbE8fT+lP8SDXKymsnfdPrMQAEoMBuXtoaQiJ1i5tuBG9EgSEOH1LAZEaAsvwClw==").cipher
    }
    function sa(e) {
        return cryptico.publicKeyID("string" == typeof e ? e : JSON.stringify(e))
    }
    function fa(e) {
        return new Promise((function(t, n) {
            Promise.resolve(ta).then((function(r) {
                !0 === r && D(e) && e(t, n)
            }
            )).finally(t)
        }
        ))
    }
    var da, pa = M(Object.create(null), {
        init: function() {
            (P(ta) ? Promise.resolve(ta) : po().then((function(e) {
                return aa = (U(e, "email") || "").trim().toLowerCase().replace(/^([^@]+)(?=@|$)/, (function(e, t) {
                    return sa(t)
                }
                )),
                ia = sa(U(e, "firstname") || ""),
                ca = sa(U(e, "lastname") || ""),
                oa = U(e, "merchant_name"),
                ra = U(e, "txref"),
                ta = !U(e, "preferences[prefers_reduced_tracking]")
            }
            ))).then((function(e) {
                var t, n, r, o, a, i;
                !0 === e && !0 !== na && (t = document,
                (n = window.mixpanel || []).__SV || (window.mixpanel = n,
                n._i = [],
                n.init = function(e, t, r) {
                    function o(e, t) {
                        var n = t.split(".");
                        2 == n.length && (e = e[n[0]],
                        t = n[1]),
                        e[t] = function() {
                            e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                        }
                    }
                    var c = n;
                    for (void 0 !== r ? c = n[r] = [] : r = "mixpanel",
                    c.people = c.people || [],
                    c.toString = function(e) {
                        var t = "mixpanel";
                        return "mixpanel" !== r && (t += "." + r),
                        e || (t += " (stub)"),
                        t
                    }
                    ,
                    c.people.toString = function() {
                        return c.toString(1) + ".people (stub)"
                    }
                    ,
                    a = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" "),
                    i = 0; i < a.length; i++)
                        o(c, a[i]);
                    var u = "set set_once union unset remove delete".split(" ");
                    c.get_group = function() {
                        function e(e) {
                            t[e] = function() {
                                call2_args = arguments,
                                call2 = [e].concat(Array.prototype.slice.call(call2_args, 0)),
                                c.push([n, call2])
                            }
                        }
                        for (var t = {}, n = ["get_group"].concat(Array.prototype.slice.call(arguments, 0)), r = 0; r < u.length; r++)
                            e(u[r]);
                        return t
                    }
                    ,
                    n._i.push([e, t, r])
                }
                ,
                n.__SV = 1.2,
                (r = t.createElement("script")).type = "text/javascript",
                r.async = !0,
                r.src = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === t.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",
                (o = t.getElementsByTagName("script")[0]).parentNode.insertBefore(r, o)),
                mixpanel.init("eeb0103404a2857dec4c324d2f2108c5", {
                    batch_requests: !0
                }),
                na = !0)
            }
            ))
        },
        completedPayment: function() {
            return fa((function(e, t) {
                try {
                    var n = Df.getState()
                      , r = U(n, "amount")
                      , o = U(n, "currency.current")
                      , a = U(n, "method.current");
                    mixpanel.track("Payment made on Flutterwave Checkout", {
                        $email: aa,
                        $merchant_name: oa,
                        $amount: r,
                        payment_method: a,
                        $currency: o,
                        $txref: ra,
                        $first_name: ia,
                        $last_name: ca
                    }, {
                        transport: "xhr",
                        send_immediately: !0
                    }, e)
                } catch (e) {
                    t(e)
                }
            }
            ))
        },
        paymentFailed: function() {
            return fa((function(e, t) {
                try {
                    var n = Df.getState()
                      , r = U(n, "amount")
                      , o = U(n, "currency.current")
                      , a = U(n, "method.current");
                    mixpanel.track("Payment failed on Flutterwave Checkout", {
                        $email: aa,
                        $merchant_name: oa,
                        $amount: r,
                        payment_method: a,
                        $currency: o,
                        $txref: ra,
                        $first_name: ia,
                        $last_name: ca
                    }, {
                        transport: "xhr",
                        send_immediately: !0
                    }, e)
                } catch (e) {
                    t(e)
                }
            }
            ))
        },
        paymentTimeout: function() {
            return fa((function(e, t) {
                try {
                    var n = Df.getState()
                      , r = U(n, "amount")
                      , o = U(n, "currency.current")
                      , a = U(n, "method.current");
                    mixpanel.track("Payment session timeout on Flutterwave Checkout", {
                        $email: aa,
                        $merchant_name: oa,
                        $amount: r,
                        payment_method: a,
                        $currency: o,
                        $txref: ra,
                        $first_name: ia,
                        $last_name: ca
                    }, {
                        transport: "xhr",
                        send_immediately: !0
                    }, e)
                } catch (e) {
                    t(e)
                }
            }
            ))
        },
        MIXPANEL_INITIALIZED: na
    });
    function ma(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function ha(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || ba(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function ya(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = ba(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return i = e.done,
                e
            },
            e: function(e) {
                c = !0,
                a = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (c)
                        throw a
                }
            }
        }
    }
    function ba(e, t) {
        if (e) {
            if ("string" == typeof e)
                return va(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? va(e, t) : void 0
        }
    }
    function va(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function ga(e) {
        var t = Aa(e, "vbvrespmessage", "acctvalrespmsg", "chargeResponseMessage", "response_message")
          , n = t.vbvrespmessage
          , r = t.acctvalrespmsg
          , o = t.chargeResponseMessage
          , a = t.response_message;
        return n && "N/A" !== String(n).toUpperCase() && n || r && "N/A" !== String(r).toUpperCase() && r || o && "N/A" !== String(o).toUpperCase() && o || a && a.trim() || null
    }
    function Oa(e) {
        var t = Aa(e, "chargeResponseCode", "response_code", "code")
          , n = t.chargeResponseCode
          , r = t.response_code
          , o = t.code;
        return n || r || o || null
    }
    function _a(e) {
        var t = Aa(e, "flwRef", "flw_reference")
          , n = t.flwRef
          , r = t.flw_reference;
        return n || r || null
    }
    function Ea(e) {
        var t = Aa(e, "orderRef", "transaction_reference")
          , n = t.orderRef
          , r = t.transaction_reference;
        return n || r || null
    }
    function wa(e) {
        return Aa(e, "txRef").txRef || sn.get("txref") || null
    }
    function Aa(e) {
        var t = ["data", "tx", "err_tx", "transactionobject"];
        Aa = function(e) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                r[o - 1] = arguments[o];
            r = r.reduce((function(e, t) {
                return I(t) && (e = G(e, t)),
                e
            }
            ), []);
            for (var a = Object.create(null); N(e) && r.length; ) {
                var i, c = ya(r);
                try {
                    for (c.s(); !(i = c.n()).done; ) {
                        var u = i.value
                          , l = u.split("::")
                          , s = ha(l, 2)
                          , f = s[0]
                          , d = s[1]
                          , p = U(e, f);
                        if (p) {
                            var m = d || f;
                            Object.prototype.hasOwnProperty.call(a, m) ? a[m] = p : M(a, ma({}, m, p), !0)
                        }
                    }
                } catch (e) {
                    c.e(e)
                } finally {
                    c.f()
                }
                var h, y = ya(t);
                try {
                    for (y.s(); !(h = y.n()).done; ) {
                        var b = h.value;
                        if (N(e = U(e, b)))
                            break
                    }
                } catch (e) {
                    y.e(e)
                } finally {
                    y.f()
                }
            }
            return a
        }
        ;
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o];
        return Aa.apply(void 0, [e].concat(r))
    }
    var Ca = !(!(da = window.opener || window.parent) || da === window)
      , Sa = !(!window.opener || window.opener !== da);
    function ja() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "SUCCESS_VIEW",
            mount: function() {
                e.dispatch(Ee.actions.updateErrorMessage());
                var t = U(e, "STATE.method.current");
                ie.localStorage && t && localStorage.setItem("lastUsedOption", t);
                var n, r = this.$$data, o = this.data, a = N(r) ? r : N(o) ? o : null, i = ("vbvcomplete" === U(a, "name") ? Aa(a, "transactionobject").transactionobject : Aa(a, "tx").tx || Aa(a, "data").data || a) || null;
                Po.transactionSuccessful(),
                ie.localStorage && localStorage.removeItem("retryAttempts"),
                n = function() {
                    if (Ca || Sa)
                        try {
                            return void da.postMessage({
                                name: a.name || "opop",
                                data: a,
                                tx: i,
                                success: !0
                            }, "*")
                        } catch (e) {}
                    setTimeout((function() {
                        po().then((function(e) {
                            try {
                                var t = U(e, "redirect_url")
                                  , n = U(e, "txref");
                                if (t && n) {
                                    var r = new URL(t)
                                      , o = r.searchParams;
                                    if (!0 === e.use_v3) {
                                        var c = Aa(i, "id::transaction_id", "status")
                                          , u = c.transaction_id
                                          , l = c.status;
                                        o.set("status", l || "failed"),
                                        o.set("tx_ref", n),
                                        o.set("transaction_id", u),
                                        Po.redirectingToMerchant(i).finally((function() {
                                            return window.location.href = r.href
                                        }
                                        ))
                                    } else {
                                        var s = dn("redirect_post", "redirect_no_json")
                                          , f = s.redirect_post
                                          , d = s.redirect_no_json
                                          , p = +f ? "POST" : "GET";
                                        if ("GET" === p && +d)
                                            return void Po.redirectingToMerchant(i).finally((function() {
                                                return window.location.href = r.href
                                            }
                                            ));
                                        var m = document.createElement("form")
                                          , h = document.createElement("textarea");
                                        h.setAttribute("name", "resp"),
                                        h.setAttribute("hidden", "hidden"),
                                        h.setAttribute("readonly", "readonly"),
                                        h.classList.add("sr-only"),
                                        h.value = JSON.stringify(a),
                                        m.setAttribute("method", p),
                                        m.setAttribute("action", r.href),
                                        m.setAttribute("hidden", "hidden"),
                                        m.classList.add("sr-only"),
                                        m.appendChild(h),
                                        document.body.appendChild(m),
                                        Po.redirectingToMerchant(i).finally((function() {
                                            return m.submit()
                                        }
                                        ))
                                    }
                                }
                            } catch (e) {}
                        }
                        ))
                    }
                    ), 5e3)
                }
                ,
                pa.MIXPANEL_INITIALIZED ? pa.completedPayment().finally((function() {
                    return n()
                }
                )) : Promise.resolve().then((function() {
                    return n()
                }
                ))
            }
        }).call(this)
    }
    function Ta(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Ra(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Ia() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "FAILURE_VIEW",
            mount: function() {
                var t, n, r = this.$$data, o = this.data, a = N(r) ? r : N(o) ? o : null, i = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ta(Object(n), !0).forEach((function(t) {
                            Ra(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ta(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({
                    status: "failed",
                    id: null
                }, ("vbvcomplete" === U(a, "name") ? Aa(a, "transactionobject").transactionobject : Aa(a, "tx").tx || Aa(a, "data").data || a) || null);
                if (i && "string" == typeof i)
                    t = i;
                else {
                    var c = i.chargeResponseMessage
                      , u = i.vbvrespmessage
                      , l = i.acctvalrespmsg
                      , s = i.$error
                      , f = [null, "N/A"];
                    t = -1 === f.indexOf(u) ? u : -1 === f.indexOf(l) ? l : -1 === f.indexOf(c) ? c : s
                }
                void 0 !== t && e.dispatch(Ee.actions.updateErrorMessage(t)),
                Po.transactionFailed(),
                ie.localStorage && localStorage.removeItem("retryAttempts"),
                n = function() {
                    if (Ca || Sa)
                        try {
                            return void da.postMessage({
                                name: a.name || "opop",
                                data: a,
                                tx: i,
                                success: !1
                            }, "*")
                        } catch (e) {}
                    setTimeout((function() {
                        po().then((function(e) {
                            try {
                                var t = U(e, "redirect_url")
                                  , n = U(e, "txref");
                                if (t && n) {
                                    var r = new URL(t)
                                      , o = r.searchParams;
                                    if (!0 === e.use_v3) {
                                        var c = Aa(i, "id::transaction_id", "status")
                                          , u = c.transaction_id
                                          , l = c.status;
                                        o.set("status", l || "failed"),
                                        o.set("tx_ref", n),
                                        o.set("transaction_id", u || null),
                                        Po.redirectingToMerchant(i).finally((function() {
                                            return window.location.href = r.href
                                        }
                                        ))
                                    } else {
                                        var s = dn("redirect_post", "redirect_no_json")
                                          , f = s.redirect_post
                                          , d = s.redirect_no_json
                                          , p = +f ? "POST" : "GET";
                                        if ("GET" === p && +d)
                                            return void Po.redirectingToMerchant(i).finally((function() {
                                                return window.location.href = r.href
                                            }
                                            ));
                                        var m = document.createElement("form")
                                          , h = document.createElement("textarea");
                                        h.setAttribute("name", "resp"),
                                        h.setAttribute("hidden", "hidden"),
                                        h.setAttribute("readonly", "readonly"),
                                        h.classList.add("sr-only"),
                                        h.value = JSON.stringify(a),
                                        m.setAttribute("method", p),
                                        m.setAttribute("action", r.href),
                                        m.setAttribute("hidden", "hidden"),
                                        m.classList.add("sr-only"),
                                        m.appendChild(h),
                                        document.body.appendChild(m),
                                        Po.redirectingToMerchant(i).finally((function() {
                                            return m.submit()
                                        }
                                        ))
                                    }
                                }
                            } catch (e) {}
                        }
                        ))
                    }
                    ), 5e3)
                }
                ,
                pa.MIXPANEL_INITIALIZED ? pa.paymentFailed().finally((function() {
                    return n()
                }
                )) : Promise.resolve().then((function() {
                    return n()
                }
                ))
            }
        }).call(this)
    }
    function Pa() {
        var e = Object.create(null);
        return M(e, {
            NAME: "info",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = gn(t.payload) ? t.payload : {};
                if (t.type === E) {
                    var r = n.info;
                    return r || null
                }
                return e
            },
            actions: M(Object.create(null), {
                updateInfo: function(e) {
                    return function(t) {
                        t({
                            type: E,
                            payload: {
                                info: e
                            }
                        })
                    }
                }
            })
        }),
        Pa = e
    }
    function Da(e) {
        var t = N(e) ? e : {}
          , n = t.key
          , r = t.actions
          , o = t.initialState
          , a = t.onSwitchedOff
          , i = t.onSwitchedOn
          , c = N(r) ? r : {}
          , u = c.on
          , l = c.off;
        if (u && l && u !== l) {
            var s = this
              , f = t(a)
              , d = t(i)
              , p = M(Object.create(null), function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }({}, n || "switch", e(o)));
            function e() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e = !0 === e,
                function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                    case u:
                        return !0 !== t || t;
                    case l:
                        return !0 !== t && t;
                    default:
                        return t
                    }
                }
            }
            function t(e) {
                return D(e) ? e.bind(s) : j
            }
            return Object.defineProperty(p, "actions", {
                value: Object.freeze(M(Object.create(null), {
                    off: function() {
                        return function(e) {
                            e({
                                type: l
                            }),
                            f()
                        }
                    },
                    on: function() {
                        return function(e) {
                            e({
                                type: u
                            }),
                            d()
                        }
                    }
                }))
            })
        }
        throw new TypeError("Unique action identifiers are required for switch state.")
    }
    function Na() {
        var e = Object.create(null)
          , t = Da.call(this, {
            actions: {
                on: p,
                off: m
            },
            initialState: !1,
            key: "processing"
        });
        return M(e, {
            NAME: "processing",
            Reducer: t.processing,
            actions: M(Object.create(null), t.actions)
        }),
        Na = e
    }
    var Ma = {
        exports: {}
    };
    function ka(e) {
        return ka = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        ka(e)
    }
    !function(e) {
        var t = function(e) {
            var t, n = Object.prototype, r = n.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator", i = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }
            function l(e, t, n, r) {
                var o = t && t.prototype instanceof y ? t : y
                  , a = Object.create(o.prototype)
                  , i = new T(r || []);
                return a._invoke = function(e, t, n) {
                    var r = f;
                    return function(o, a) {
                        if (r === p)
                            throw new Error("Generator is already running");
                        if (r === m) {
                            if ("throw" === o)
                                throw a;
                            return I()
                        }
                        for (n.method = o,
                        n.arg = a; ; ) {
                            var i = n.delegate;
                            if (i) {
                                var c = C(i, n);
                                if (c) {
                                    if (c === h)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === f)
                                    throw r = m,
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = p;
                            var u = s(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? m : d,
                                u.arg === h)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = m,
                            n.method = "throw",
                            n.arg = u.arg)
                        }
                    }
                }(e, n, i),
                a
            }
            function s(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = l;
            var f = "suspendedStart"
              , d = "suspendedYield"
              , p = "executing"
              , m = "completed"
              , h = {};
            function y() {}
            function b() {}
            function v() {}
            var g = {};
            g[a] = function() {
                return this
            }
            ;
            var O = Object.getPrototypeOf
              , _ = O && O(O(R([])));
            _ && _ !== n && r.call(_, a) && (g = _);
            var E = v.prototype = y.prototype = Object.create(g);
            function w(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function A(e, t) {
                function n(o, a, i, c) {
                    var u = s(e[o], e, a);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , f = l.value;
                        return f && "object" === ka(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                            n("next", e, i, c)
                        }
                        ), (function(e) {
                            n("throw", e, i, c)
                        }
                        )) : t.resolve(f).then((function(e) {
                            l.value = e,
                            i(l)
                        }
                        ), (function(e) {
                            return n("throw", e, i, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var o;
                this._invoke = function(e, r) {
                    function a() {
                        return new t((function(t, o) {
                            n(e, r, t, o)
                        }
                        ))
                    }
                    return o = o ? o.then(a, a) : a()
                }
            }
            function C(e, n) {
                var r = e.iterator[n.method];
                if (r === t) {
                    if (n.delegate = null,
                    "throw" === n.method) {
                        if (e.iterator.return && (n.method = "return",
                        n.arg = t,
                        C(e, n),
                        "throw" === n.method))
                            return h;
                        n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return h
                }
                var o = s(r, e.iterator, n.arg);
                if ("throw" === o.type)
                    return n.method = "throw",
                    n.arg = o.arg,
                    n.delegate = null,
                    h;
                var a = o.arg;
                return a ? a.done ? (n[e.resultName] = a.value,
                n.next = e.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = t),
                n.delegate = null,
                h) : a : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                h)
            }
            function S(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function j(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(S, this),
                this.reset(!0)
            }
            function R(e) {
                if (e) {
                    var n = e[a];
                    if (n)
                        return n.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , i = function n() {
                            for (; ++o < e.length; )
                                if (r.call(e, o))
                                    return n.value = e[o],
                                    n.done = !1,
                                    n;
                            return n.value = t,
                            n.done = !0,
                            n
                        };
                        return i.next = i
                    }
                }
                return {
                    next: I
                }
            }
            function I() {
                return {
                    value: t,
                    done: !0
                }
            }
            return b.prototype = E.constructor = v,
            v.constructor = b,
            b.displayName = u(v, c, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v,
                u(e, c, "GeneratorFunction")),
                e.prototype = Object.create(E),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            w(A.prototype),
            A.prototype[i] = function() {
                return this
            }
            ,
            e.AsyncIterator = A,
            e.async = function(t, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new A(l(t, n, r, o),a);
                return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                    return e.done ? e.value : i.next()
                }
                ))
            }
            ,
            w(E),
            u(E, c, "Generator"),
            E[a] = function() {
                return this
            }
            ,
            E.toString = function() {
                return "[object Generator]"
            }
            ,
            e.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            e.values = R,
            T.prototype = {
                constructor: T,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(j),
                    !e)
                        for (var n in this)
                            "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function o(r, o) {
                        return c.type = "throw",
                        c.arg = e,
                        n.next = r,
                        o && (n.method = "next",
                        n.arg = t),
                        !!o
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a]
                          , c = i.completion;
                        if ("root" === i.tryLoc)
                            return o("end");
                        if (i.tryLoc <= this.prev) {
                            var u = r.call(i, "catchLoc")
                              , l = r.call(i, "finallyLoc");
                            if (u && l) {
                                if (this.prev < i.catchLoc)
                                    return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return o(i.finallyLoc)
                            } else if (u) {
                                if (this.prev < i.catchLoc)
                                    return o(i.catchLoc, !0)
                            } else {
                                if (!l)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e,
                    i.arg = t,
                    a ? (this.method = "next",
                    this.next = a.finallyLoc,
                    h) : this.complete(i)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    h
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            j(n),
                            h
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                j(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: R(e),
                        resultName: n,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = t),
                    h
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    }(Ma);
    var xa, La = Ma.exports, $a = "checkout.close", Ua = "checkout.method.switch";
    function Va(e, t, n, r, o, a, i) {
        try {
            var c = e[a](i)
              , u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    function Fa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Ba, Ga, Ha, za = Dn((xa = bt.one.limit(1 / 0).init(Tn)).retry.apply(xa, function(e) {
        return function(e) {
            if (Array.isArray(e))
                return Fa(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Fa(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Fa(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(Rn)));
    function Wa() {
        var e = Ka.bind(this);
        return addEventListener($a, e, !1),
        function() {
            return removeEventListener($a, e, !1)
        }
    }
    function Ka() {
        this.$charge.cancel()
    }
    function qa() {
        Ga && !Ga.aborted || (Ba = new AbortController,
        Ga = Ba.signal)
    }
    function Ya() {
        var e, t = this.$state.method.current;
        return e = "enaira" === t ? "/flwv3-pug/getpaidx/api/enaira/complete" : "/flwv3-pug/getpaidx/api/verify/".concat(("banktransfer" === t ? "pwbt" : "payattitude" === t && "payattitude") || "mpesa"),
        new URL(e,"https://api.ravepay.co")
    }
    function Za(e, t, n) {
        qa();
        var r = this
          , o = Boolean(8 & r.flags)
          , a = Wa.call(n)
          , i = 0
          , c = er(t)
          , u = c.onBegin
          , l = c.onCancel
          , s = c.onComplete
          , f = c.onConfirming
          , d = c.onDataResponse
          , p = c.onError
          , m = c.onFailure
          , h = c.onSuccessful;
        u = x(u),
        l = x(l),
        s = x(s),
        f = x(f),
        d = x(d),
        p = x(p, j),
        m = x(m),
        h = x(h);
        var y, b, v, g = Ya.call(r), O = (y = {
            modalauditid: r.$chargeData.modalauditid,
            PBFPubKey: r.$chargeData.PBFPubKey
        },
        v = e,
        (b = !0 === o ? "order_ref" : "flw_ref")in y ? Object.defineProperty(y, b, {
            value: v,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : y[b] = v,
        y);
        "banktransfer" === r.$state.method.current && (O.is_v3_verify = !0);
        var _ = {
            body: JSON.stringify(O)
        };
        function E(e) {
            return Promise.resolve(e).then(s.bind(r))
        }
        return u.call(r),
        function e() {
            return Ga.aborted ? (i = 0,
            qa(),
            a(),
            Promise.resolve()) : za(g, _).then(function() {
                var t, n = (t = La.mark((function t(n) {
                    var r, o, a, c, u;
                    return La.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!Pn(n) || !n.ok) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 3,
                                n.json();
                            case 3:
                                if (r = t.sent,
                                o = Aa(r, "status", "chargeResponseCode", "paymentType"),
                                a = o.status,
                                c = o.chargeResponseCode,
                                u = o.paymentType,
                                d(r),
                                !(["00"].indexOf(c) >= 0 || ["success", "successful"].indexOf(String(a).toLowerCase()) >= 0)) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("return", (h(r),
                                E(r)));
                            case 8:
                                if ("failed" !== a) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return", (m(r),
                                E(r)));
                            case 10:
                                if (!("02" === c && ["cryptocurrency", "account-ach-us"].indexOf(String(u).toLowerCase()) >= 0)) {
                                    t.next = 12;
                                    break
                                }
                                return t.abrupt("return", (f(r),
                                E(r)));
                            case 12:
                                if (!(++i < 1 / 0)) {
                                    t.next = 14;
                                    break
                                }
                                return t.abrupt("return", e());
                            case 14:
                                throw new RangeError("Too many polling attempts");
                            case 15:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )),
                function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);
                        function i(e) {
                            Va(a, r, o, i, c, "next", e)
                        }
                        function c(e) {
                            Va(a, r, o, i, c, "throw", e)
                        }
                        i(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return n.apply(this, arguments)
                }
            }(), e)
        }().catch(p),
        function(e) {
            Ba && Ba.abort(),
            D(e) && e()
        }
        .bind(null, l)
    }
    function Qa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Xa(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Ja(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function ei(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var ti = Object.freeze(new Error)
      , ni = Object.freeze(new Error)
      , ri = Object.freeze(new Error)
      , oi = Dn((Ha = bt.one.limit(10)).retry.apply(Ha, function(e) {
        return function(e) {
            if (Array.isArray(e))
                return ei(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return ei(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return ei(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(Rn)));
    function ai(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
        return Number.isInteger(+e) ? Math.min(1e4, Math.max(500, +e)) : +t || 1e3
    }
    function ii(e, t) {
        var n, r, o = 1500;
        e = D(e) ? e : R(null),
        r = {
            delay: ["number", o],
            iterations: ["number", 1 / 0],
            url: "string"
        },
        n = N(n = t) ? n : {},
        t = N(r) ? Object.keys(n).reduce((function(e, t) {
            var o = n[t]
              , a = Zn([].concat(r[t]), 2)
              , i = a[0]
              , c = a[1];
            return c = (i = "string" === Xn(i) ? i.trim() : void 0) && Xn(c) === i ? c : void 0,
            e[t] = i || Xn(o) === i ? o : c,
            e
        }
        ), {}) : n;
        var a = 0
          , i = ai(t.delay, o)
          , c = t.url
          , u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
            return Number.isInteger(+e) ? Math.max(0, Math.min(+e, 1 / 0)) : 1 / 0
        }(t.iterations)
          , l = function(e) {
            if ("function" == typeof e) {
                var t = !1;
                return function() {
                    if (!t && (t = !0))
                        return e.apply(void 0, arguments)
                }
            }
            return e
        }((function(e) {
            i = ai(e, o)
        }
        ));
        return function() {
            return c && ++a <= u ? new Promise((function(t, n) {
                setTimeout((function() {
                    oi(c).then((function(r) {
                        return Pn(r) && r.ok ? t(r.json().then(e).then((function(e) {
                            return l(o),
                            e
                        }
                        ))) : n(ti)
                    }
                    )).catch(n)
                }
                ), Math.floor(i * function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    return Number.isInteger(+e) ? Math.min(Math.pow(1.5, Math.floor(Math.log(Math.max(1, +e)) / Math.log(2.5))), 5) : 1
                }(a)))
            }
            )) : Promise.reject(ni)
        }
    }
    function ci(e) {
        return e = x(e),
        function(t) {
            var n = N(t) ? function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Qa(Object(n), !0).forEach((function(t) {
                        Xa(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qa(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, t) : {}
              , r = n.maxPingIterations
              , o = n.onBadResponse
              , a = n.onDataResponse
              , i = Ja(n, ["maxPingIterations", "onBadResponse", "onDataResponse"]);
            function c() {
                this.pingHandler = null
            }
            return o = x(o, j),
            Object.defineProperty(c.prototype, "handle", {
                value: function(t) {
                    if (N(t)) {
                        var n, c = function(e) {
                            try {
                                var t = e.data;
                                return "response_parsed"in t ? t.response_parsed : t
                            } catch (e) {
                                return null
                            }
                        }(t);
                        if ("LONG-REQ" === t.message || t.data && "response_parsed"in t.data && !c || t.data && "ping_url"in t.data)
                            return D(this.pingHandler) || (this.pingHandler = ii(this.handle.bind(this), {
                                iterations: +r,
                                delay: +c.wait,
                                url: c.ping_url
                            })),
                            D(this.pingHandler) ? this.pingHandler() : Promise.reject(ri);
                        if (c || (c = Object.create(null)),
                        ["error", "failed", "failure"].indexOf(String(t.status).toLowerCase()) >= 0 && (n = t),
                        !0 === $(U(c, "is_err"), !1) && (n = c),
                        n) {
                            var u = Aa(n, "error", "err", "message")
                              , l = u.error
                              , s = u.err
                              , f = u.message
                              , d = l || s || f;
                            (d = I(d) && d.trim() || null) && M(c, {
                                $error: d
                            }, !0)
                        }
                        var p = M(Object.create(null), {
                            data: c
                        }, !0)
                          , m = M(Object.keys(i).reduce((function(e, t) {
                            return M(e, Xa({}, t, x(i[t])))
                        }
                        ), Object.create(null)), {
                            onBadResponse: o,
                            onDataResponse: a,
                            maxPingIterations: r
                        });
                        return a.call(p),
                        e.call(M(Object.create(null), {
                            context: p,
                            response: t,
                            options: m
                        }))
                    }
                    return o(t)
                }
            }),
            function(e) {
                return (new c).handle(e)
            }
        }
    }
    function ui(e) {
        var t, n = this.onBadResponse, r = this.onDataResponse, o = this.onRequireValidation, a = this.onValidateFailed, i = this.onValidateSuccessful;
        return (t = {
            onBadResponse: n,
            onDataResponse: r,
            onRequireValidation: o,
            onValidateFailed: a,
            onValidateSuccessful: i
        },
        ci((function() {
            var e = this.context
              , t = this.options
              , n = t.onValidateFailed
              , r = t.onValidateSuccessful
              , o = t.onRequireValidation
              , a = e.data;
            M(e, {
                reference: M(Object.create(null), {
                    charge: _a(a),
                    order: Ea(a),
                    transaction: wa(a)
                })
            });
            var i = Aa(a, "status", "acctvalrespcode", "responsecode")
              , c = i.status
              , u = i.acctvalrespcode
              , l = i.responsecode
              , s = Oa(a)
              , f = String(c).toLowerCase()
              , d = l || u;
            if (["00"].indexOf(d) >= 0 || ["00"].indexOf(s) >= 0 || ["success", "successful"].indexOf(f) >= 0)
                return r.call(e);
            var p = Aa(a, "authModelUsed::authModel", "responsemessage", "acctvalrespmessage", "chargeResponseMessage", "message", "paymentType")
              , m = p.authModel
              , h = p.responsemessage
              , y = p.acctvalrespmessage
              , b = p.chargeResponseMessage
              , v = p.message
              , g = h || y;
            return M(e, {
                auth: m || null,
                charge_code: s,
                payment_type: p.paymentType,
                validation_code: d,
                message: M(Object.create(null), {
                    charge: b || null,
                    validation: g || null,
                    fallback: v || null
                })
            }),
            f.indexOf("fail") < 0 && ("02" === d || "02" === s) ? ("RANDOM_DEBIT" === m && "RR" === d ? n : o).call(e) : n.call(e)
        }
        ))(t))(e)
    }
    function li(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function si(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? li(Object(n), !0).forEach((function(t) {
                fi(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : li(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function fi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var di = Dn(bt.one.init(Tn));
    function pi() {
        var e = Boolean(4 & this.flags)
          , t = Boolean(2 & this.flags)
          , n = "/flwv3-pug/getpaidx/api/validate".concat(String.apply(null, ["charge"].slice(!t)))
          , r = new URL(n,"https://api.ravepay.co");
        return !0 === e && r.searchParams.set("use_polling", 1),
        r
    }
    function mi(e, t) {
        var n = this
          , r = t = er(t)
          , o = r.onBegin
          , a = r.onComplete
          , i = r.onError;
        o = x(o),
        a = x(a),
        i = x(i, j);
        var c = ui.bind(M(Object.create(null), si({}, t)));
        return Promise.resolve(n.$chargeData).then((function(t) {
            return o.call(n),
            di(pi.call(n), {
                body: JSON.stringify(si(si({}, N(e) ? e : {}), {}, {
                    modalauditid: t.modalauditid,
                    PBFPubKey: t.PBFPubKey
                }))
            }).then((function(e) {
                return Pn(e) ? e.json().then(c) : Promise.reject(new Error)
            }
            )).catch(i).finally(a.bind(n))
        }
        ))
    }
    function hi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function yi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function bi(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return vi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return vi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function vi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var gi, Oi = {
        amount: 1,
        custom_campaign_id: 0,
        charge_type: 0,
        country: 1,
        currency: 1,
        "customer_phone::phone": 3,
        cycle: 0,
        device_fingerprint: 0,
        email: 0,
        custom_pwbt_expiry: 0,
        custom_narration: 0,
        firstname: 0,
        ip: 0,
        lastname: 0,
        meta: 1,
        modalauditid: 1,
        payment_page: 0,
        payment_plan: 0,
        payment_type: 1,
        PBFPubKey: 0,
        redirect_url: 0,
        subaccounts: 0,
        transaction_charge: 0,
        transaction_charge_type: 0,
        "txRef::txref": 0,
        QUERY_STRING_DATA: 0
    }, _i = !0;
    function Ei() {
        return po().then((function(e) {
            var t = N(e) ? e : {}
              , n = Object.create(null);
            return _i = !Object.isFrozen(t),
            Object.keys(Oi).forEach((function(r) {
                var o, a = bi(r.split("::"), 2);
                r = a[0];
                var i = a[1]
                  , c = "QUERY_STRING_DATA" === (o = void 0 === i ? r : i) ? sn.raw : t[o] || void 0;
                if (M(n, yi({}, r, c)),
                "custom_pwbt_expiry" === r) {
                    var u = sn.get("custom_pwbt_expiry")
                      , l = sn.raw;
                    u || (u = l.bank_transfer_expiry),
                    M(n, {
                        expires: u
                    })
                }
                if ("custom_narration" === r) {
                    var s = sn.get("custom_narration");
                    s && M(n, {
                        narration: s
                    })
                }
                if ("custom_campaign_id" === r) {
                    var f = U(e, "campaign.campaign_id") || null;
                    M(n, {
                        campaign_id: f,
                        is_discounted: null !== f ? 1 : 0
                    })
                }
                if ("customer_phone" === r) {
                    var d = sn.get("customer_phone");
                    d && M(n, {
                        phonenumber: d
                    })
                }
            }
            )),
            gi = Object.freeze(n)
        }
        ))
    }
    function wi() {
        return Promise.resolve(!0 === _i ? Ei.call(this) : gi || Ei.call(this)).then((function(e) {
            return e || Object.freeze(Object.create(null))
        }
        ))
    }
    function Ai(e) {
        return wi.call(this).then((function(t) {
            e = N(e) ? e : {};
            var n = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? hi(Object(n), !0).forEach((function(t) {
                        yi(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hi(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, t)
              , r = Object.keys(Oi);
            return Object.keys(e).forEach((function(t) {
                var o = r.find((function(e) {
                    return RegExp("/^".concat(t, "(?:::.+)?$/")).test(e)
                }
                ));
                (!o || 1 & Oi[o]) && (n[t] = e[t])
            }
            )),
            n
        }
        ))
    }
    function Ci(e) {
        return ci((function() {
            var e = this.context
              , t = this.options
              , n = this.response
              , r = e.data
              , o = t.onChargeFailed
              , a = t.onChargeSuccessful
              , i = t.onRequireDiscount
              , c = t.onRequireRedirection
              , u = t.onRequireSuggestedAuth
              , l = t.onRequireValidation;
            if (N(r) && "apply_discount"in r)
                return i.call(e);
            if (["AUTH_SUGGESTION", "auth_suggestion", "V-COMP"].includes(n.message) && N(r) && "suggested_auth"in r) {
                var s = r.suggested_auth
                  , f = null;
                switch (s) {
                case "PIN":
                case "AVS":
                case "AVS_VBVSECURECODE":
                case "NOAUTH_INTERNATIONAL":
                    f = "PIN" === s ? s : "AVS"
                }
                return u.call(M(e, {
                    auth: f,
                    suggested_auth: s
                }))
            }
            M(e, {
                reference: M(Object.create(null), {
                    charge: _a(r),
                    order: Ea(r),
                    transaction: wa(r)
                })
            });
            var d = Oa(r)
              , p = Aa(r, "charge_type::chargeType", "paymentType", "status::chargeStatus")
              , m = p.chargeStatus
              , h = p.chargeType
              , y = p.paymentType;
            if (["00"].indexOf(d) >= 0 || "pending-capture" === d && "card" === y && "preauth" === h)
                return a.call(e);
            if ("02" === d) {
                Po.chargeRequestStatus("successful - Pending verification");
                var b = Aa(r, "acctvalrespcode::validationCode", "authModelUsed::authModel", "type::validationType", "response_message::responseMessage")
                  , v = b.validationCode
                  , g = b.authModel
                  , O = b.validationType
                  , _ = b.responseMessage;
                if (M(e, {
                    auth: g || null,
                    charge_code: d,
                    charge_type: h,
                    payment_type: y,
                    validation_code: v,
                    validation_type: O
                }),
                "RANDOM_DEBIT" === g && "RR" === v)
                    return Po.chargeRequestStatus("failed"),
                    o.call(e);
                if (["PIN", "OTP", "GTB_OTP", "ACCESS_OTP", "MVISA-QR"].indexOf(g) >= 0 || ["twofactorvalidate", "callback", "paymentcode"].indexOf(O) >= 0)
                    return l.call(e);
                try {
                    var E = new URL(function(e) {
                        var t = Aa(e, "auth_url", "authurl", "redirect_url", "link")
                          , n = t.auth_url
                          , r = t.authurl
                          , o = t.redirect_url
                          , a = t.link;
                        return n || r || o || a || null
                    }(r));
                    return c.call(M(e, {
                        url: E
                    }))
                } catch (t) {
                    return O && "redirect" === O || !("pending" === m || String(m).toLowerCase().indexOf("pending") >= 0 || String(_).toLowerCase().indexOf("in progress") >= 0) ? Promise.reject(new Error("charge.redirect.error")) : l.call(e)
                }
            }
            return o.call(e)
        }
        ))(e)
    }
    function Si(e) {
        return Ci({
            onBadResponse: this.onBadResponse,
            onChargeFailed: this.onChargeFailed,
            onChargeSuccessful: this.onChargeSuccessful,
            onDataResponse: this.onDataResponse,
            onRequireDiscount: this.onRequireDiscount,
            onRequireRedirection: this.onRequireRedirection,
            onRequireSuggestedAuth: this.onRequireSuggestedAuth,
            onRequireValidation: this.onRequireValidation
        })(e)
    }
    function ji(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Ti(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var Ri = Dn(bt.one.init(Tn));
    function Ii() {
        var e = Boolean(1 & this.flags)
          , t = new URL("/flwv3-pug/getpaidx/api/charge","https://api.ravepay.co");
        return !0 === e && t.searchParams.set("use_polling", 1),
        t
    }
    function Pi(e, t) {
        var n = this
          , r = t = er(t)
          , o = r.onBegin
          , a = r.onComplete
          , i = r.onError;
        o = x(o),
        a = x(a),
        i = x(i, j);
        var c = Si.bind(M(Object.create(null), function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ji(Object(n), !0).forEach((function(t) {
                    Ti(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ji(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({}, t)));
        return Ai.call(n, e).then((function(e) {
            return o.call(n),
            Ri(Ii.call(n), {
                body: JSON.stringify({
                    modalauditid: e.modalauditid,
                    PBFPubKey: e.PBFPubKey,
                    client: la(e)
                })
            }).then((function(e) {
                return Pn(e) ? e.json().then(c) : Promise.reject(new Error)
            }
            )).catch(i).finally(a.bind(n))
        }
        ))
    }
    function Di(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = !0 === t ? 0 : 2;
        return Number(new Intl.NumberFormat("en-US",{
            style: "decimal",
            useGrouping: !1,
            minimumFractionDigits: n,
            maximumFractionDigits: n
        }).format(e))
    }
    function Ni(e) {
        if (e = Number("string" == typeof e ? e.trim() : e),
        Number.isNaN(e) || e < 0)
            throw new TypeError("Invalid amount.");
        return e
    }
    function Mi(e) {
        return function(t) {
            try {
                this[e] = Ni(t)
            } finally {
                return this
            }
        }
    }
    function ki(e, t) {
        this.base = Ni(e),
        this.currency = function(e, t) {
            try {
                var n = $t.validate({
                    currency: e,
                    support: !1
                });
                if ((t = (t = [].concat(t).filter(Boolean)).length ? t : $t.SUPPORTED).indexOf(n) >= 0)
                    return n
            } catch (e) {}
            throw new TypeError("Invalid currency.")
        }(t),
        this.usesRounded = $t.ROUNDED.indexOf(this.currency) >= 0,
        Object.defineProperty(this, "computed", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.base
            }
        })
    }
    function xi(e, t) {
        ki.call(this, e, t),
        this.fee = 0,
        this.discount = 0,
        Object.defineProperty(this, "computed", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.base + this.fee - this.discount
            }
        })
    }
    function Li() {
        var e = this;
        return function() {
            if (N(this)) {
                var t = this.data
                  , n = this.reference
                  , r = U(e.STATE, "method.current");
                switch (e.$$data = t,
                e.reference = n,
                r) {
                case "1voucher":
                    var o = U(t, "meta_data.change_voucher");
                    if (N(o)) {
                        var a = o.amount
                          , i = o.pin
                          , c = o.serial
                          , u = o.expiry;
                        if (a && i && c && u) {
                            var l = new ki(a,"ZAR");
                            e.CHANGE_VOUCHER = V({
                                amount: function() {
                                    return l
                                },
                                pin: function() {
                                    return i
                                },
                                serial: function() {
                                    return c
                                },
                                expiry: function() {
                                    return u
                                }
                            });
                            break
                        }
                    }
                    e.CHANGE_VOUCHER = !1;
                    break;
                default:
                    ja && ja.activate.call(e)
                }
            }
        }
    }
    Object.defineProperties(ki.prototype, {
        valueOf: {
            enumerable: !0,
            value: function() {
                return Di(this.computed, this.usesRounded)
            }
        },
        toString: {
            enumerable: !0,
            value: function() {
                return "".concat(this.currency, " ").concat(function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return new Intl.NumberFormat("en-US",{
                        style: "decimal",
                        useGrouping: !0
                    }).format(Di(e, t))
                }(this.computed, this.usesRounded))
            }
        }
    }),
    xi.prototype = M(Object.create(ki.prototype), {
        constructor: xi,
        updateFee: Mi("fee"),
        updateDiscount: Mi("discount")
    });
    var $i = {
        "authorize.momo": "Dial on your mobile phone to authorize this payment. It may take a few minutes to confirm this payment",
        "mpesa.notification": "A push notification has been sent to your phone, complete the transaction by entering your PIN.",
        "mpesa.secondary.without.fallbackDuration": "Please complete your transaction on M-PESA pay bill using the following details:",
        "mpesa.secondary.with.fallbackDuration": "If you do not receive it after seconds, please complete your transaction on M-PESA pay bill using the following details:"
    }
      , Ui = {
        "authorize.momo": "Composez sur votre téléphone mobile pour autoriser ce paiement. La confirmation de ce paiement peut prendre quelques minutes",
        "mpesa.notification": "Une notification push a été envoyée sur votre téléphone, terminez la transaction en saisissant votre code PIN",
        "mpesa.secondary.without.fallbackDuration": "Veuillez compléter votre transaction sur M-PESA payer la facture en utilisant les détails suivants",
        "mpesa.secondary.with.fallbackDuration": "Si vous ne le recevez pas après quelques secondes, veuillez compléter votre transaction sur M-PESA pay bill en utilisant les détails suivants:"
    };
    function Vi(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Fi(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Fi(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Fi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Bi = Dn(bt.one.init(Tn));
    function Gi() {
        var e = this;
        return function() {
            if (N(this)) {
                var t = this.data
                  , n = this.reference
                  , r = this.validation_type
                  , o = U(e.STATE, "method.current")
                  , a = U(e.STATE, "locale");
                switch (e.$$data = t,
                e.reference = n,
                o) {
                case "banktransfer":
                    var i = U(t, "amount")
                      , c = U(e.DATA, "currency") || "ZAR"
                      , u = U(e.DATA, "banktransfer_beneficiary_name")
                      , l = U(e.DATA, "expires");
                    if ("ZAR" === c || "USD" === c) {
                        var s = U(t, "accountnumber")
                          , f = U(t, "bankname");
                        if (s && i && f) {
                            var d = new ki(i,c);
                            e.TRANSFER_DETAILS = V({
                                account: function() {
                                    return s
                                },
                                amount: function() {
                                    return d
                                },
                                bank: function() {
                                    return f
                                },
                                beneficiary: function() {
                                    return u
                                },
                                expiryTime: function() {
                                    return l
                                }
                            })
                        }
                    } else {
                        var p = U(t, "data.amount")
                          , m = U(t, "data.payment_code")
                          , h = U(e.DATA, "expires");
                        if (p && m) {
                            var y = new ki(p,c)
                              , b = V({
                                amount: function() {
                                    return y
                                },
                                beneficiary: function() {
                                    return u
                                },
                                payment_code: function() {
                                    return m
                                },
                                expiryTime: function() {
                                    return h
                                }
                            }, !1);
                            M(b, "GBP" === c ? {
                                account_number: "43271228",
                                sort_code: "040053"
                            } : {
                                iban: "GB11PAYR00997500000697",
                                bic_swift: "PAYRGB21"
                            }),
                            e.TRANSFER_DETAILS = Object.freeze(b)
                        }
                    }
                    break;
                case "enaira":
                    switch (U(e.$inputs, "eNairaPaymentOption[value].identifier")) {
                    case "QR":
                        var v = U(t, "qr_image");
                        v && (e.QR_CODE = v);
                        break;
                    case "TOKEN":
                        e.SHOULD_VALIDATE_CHARGE = !0
                    }
                    break;
                case "mobilemoneyghana":
                case "mobilemoneyrwanda":
                case "mobilemoneytanzania":
                case "mobilemoneyuganda":
                case "mobilemoneyzambia":
                case "mpesa":
                case "payattitude":
                    var g, O = U(e.$inputs, "[network].value.identifier");
                    if ("mobilemoneyghana" === o) {
                        if ("MTN" === O)
                            e.MOMO_INSTRUCTIONS = "Please dial *170# to confirm your transaction if the prompt fails.";
                        else {
                            g = U(t, "validateInstructions");
                            var _ = Vi([].concat(String(g).match(/[*#][\d*#]+[*#]/g)).filter(Boolean), 1)[0]
                              , E = void 0 === _ ? "#144#" : _;
                            e.MOMO_INSTRUCTIONS = "Dial ".concat(E, " on your mobile phone to authorize this payment.")
                        }
                        var w = Vi([].concat(String(g).match(/[*#][\d*#]+[*#]/g)).filter(Boolean), 1)[0]
                          , A = void 0 === w ? "#144#" : w
                          , C = On("en" === a ? $i : Ui, "authorize.momo").split(" ");
                        C.splice(1, 0, A),
                        e.MOMO_INSTRUCTIONS = C.join(" ")
                    }
                    if ("mpesa" === o) {
                        var S = On("en" === a ? $i : Ui, "mpesa.notification")
                          , j = !1;
                        if (e.MPESA_SECONDARY_INSTRUCTION = null,
                        "SAFARICOM" === O) {
                            var T = Boolean(U(e.DATA, "canSendSTKPushNotification"))
                              , R = U(e.DATA, "mpesaPaybill");
                            j = !0 !== U(e.DATA, "preferences[ignore_mpesa_fallback]"),
                            e.MPESA_INSTRUCTION = T ? S : null;
                            var I = e.reference.order
                              , P = R || U(t, "data.business_number")
                              , D = U(t, "charged_amount");
                            if (j && I && P && D) {
                                var k = T ? 20 : 0
                                  , x = new ki(D,U(e.DATA, "currency"))
                                  , L = "en" === a ? $i : Ui
                                  , $ = On(L, "mpesa.secondary.with.fallbackDuration").split(" ");
                                $.splice(7, 0, k),
                                e.MPESA_SECONDARY_INSTRUCTION = k ? $.join(" ") : On(L, "mpesa.secondary.without.fallbackDuration"),
                                e.FALLBACK_DETAILS = V({
                                    account: function() {
                                        return I
                                    },
                                    amount: function() {
                                        return x
                                    },
                                    business: function() {
                                        return P
                                    }
                                }),
                                e.mpesaOverrideTimeout = setTimeout((function() {
                                    !0 !== e.mpesaPollingCompleted && Promise.resolve(Bi(new URL("/v2/gpx/mpesa/authoverride","https://api.ravepay.co"), {
                                        body: JSON.stringify({
                                            modalauditid: U(e.DATA, "modalauditid"),
                                            public_key: U(e.DATA, "PBFPubKey"),
                                            id: U(t, "id")
                                        })
                                    }).then((function(e) {
                                        return Pn(e) && e.ok
                                    }
                                    )).catch(rr))
                                }
                                ), 1e3 * k)
                            }
                        } else
                            e.MPESA_INSTRUCTION = S
                    }
                    break;
                case "mobilemoneyfranco":
                    if ("twofactorvalidation" === r)
                        e.SHOULD_VALIDATE_CHARGE = !0;
                    else if ("callback" === r) {
                        if ("BF" !== U(e.DATA, "country")) {
                            var F = U(t, "data.note")
                              , B = Vi([].concat(String(F).match(/[*#][\d*#]+[*#]/g)).filter(Boolean), 1)[0]
                              , G = void 0 === B ? "#144#" : B
                              , H = On("en" === a ? $i : Ui, "authorize.momo").split(" ");
                            H.splice(1, 0, G),
                            e.CONFIRM_INSTRUCTION = H.join(" ")
                        }
                        e.SHOULD_VALIDATE_CHARGE = !1
                    }
                    break;
                case "paga":
                    "twofactorvalidation" === r && (e.PAGA_INSTRUCTION = U(t, "data.note") || null,
                    e.SHOULD_VALIDATE_CHARGE = !0);
                    break;
                case "nqr":
                case "qr":
                case "wechat":
                    var z = U(t, "qr_image");
                    z && (e.QR_CODE = z);
                    break;
                case "ussd":
                    var W = U(t, "data.note")
                      , K = Vi(String(W).match(Rt) || [], 3)
                      , q = K[1]
                      , Y = K[2]
                      , Z = (Y ? (q || String()).replace(/#$/, "*".concat(Y, "#")) : q) || null;
                    Z && (e.USSD_CODE = Z);
                    break;
                case "fawrypay":
                    var Q = U(t, "flwRef");
                    Q && (e.FAWRY_REFERENCE = Q)
                }
            }
        }
    }
    function Hi() {
        var e = Object.create(null);
        return M(e, {
            NAME: "backgroundProcessing",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = N(t.payload) ? t.payload : {};
                if (t.type === O) {
                    var r = n.processing;
                    return P(r) && r !== e ? r : e
                }
                return e
            },
            actions: M(Object.create(null), {
                updateBackgroundProcessing: function(e) {
                    return function(t) {
                        t({
                            type: O,
                            payload: {
                                processing: e
                            }
                        })
                    }
                }
            })
        }),
        Hi = e
    }
    function zi() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "PENDING_VIEW",
            mount: function() {
                e.dispatch(Ee.actions.updateErrorMessage())
            }
        }).call(e)
    }
    var Wi = {
        "init.missing.parameter.amount": "Missing parameter (`amount`): Kindly terminate this session and reconfirm the data.",
        "init.invalid.parameter.amount": "Invalid parameter (`amount`): Kindly terminate this session and reconfirm the data.",
        "init.missing.parameter.currency": "Missing parameter (`currency`): Kindly terminate this session and reconfirm the data.",
        "init.invalid.parameter.currency": "Invalid parameter (`currency`): Kindly terminate this session and reconfirm the data.",
        "init.missing.parameter.customer_email": "Missing parameter (`customer_email`): Kindly terminate this session and reconfirm the data.",
        "init.invalid.parameter.customer_email": "Invalid parameter (`customer_email`): Kindly terminate this session and reconfirm the data.",
        "init.missing.parameter.PBFPubKey": "Missing parameter (`PBFPubKey`): Kindly terminate this session and reconfirm the data.",
        "init.invalid.parameter.PBFPubKey": "Invalid parameter (`PBFPubKey`): Kindly terminate this session and reconfirm the data.",
        "init.missing.parameter.txref": "Missing parameter (`txref`): Kindly terminate this session and reconfirm the data.",
        "init.invalid.parameter.txref": "Invalid parameter (`txref`): Kindly terminate this session and reconfirm the data.",
        "init.generic.notice": "Initialization failed: Kindly terminate this session and reconfirm the data.",
        "close.checkout.notice": "Are you sure you want to cancel this payment?",
        "iframe.close.text": "Close"
    }
      , Ki = {
        "init.missing.parameter.amount": "Paramètre (`amount`) manquant: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.invalid.parameter.amount": "Paramètre (`amount`) non valide: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.missing.parameter.currency": "Paramètre (`currency`) manquant: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.invalid.parameter.currency": "Paramètre (`currency`) non valide: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.missing.parameter.customer_email": "Paramètre (`customer_email`) manquant: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.invalid.parameter.customer_email": "Paramètre (`customer_email`) non valide: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.missing.parameter.PBFPubKey": "Paramètre (`PBFPubKey`) manquant: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.invalid.parameter.PBFPubKey": "Paramètre (`PBFPubKey`) non valide: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.missing.parameter.txref": "Paramètre (`txref`) manquant: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.invalid.parameter.txref": "Paramètre (`txref`) non valide: veuillez mettre fin à cette session et reconfirmer les données.",
        "init.generic.notice": "Échec de l'initialisation: veuillez mettre fin à cette session et reconfirmer les données.",
        "close.checkout.notice": "Voulez-vous vraiment annuler ce paiement?",
        "iframe.close.text": "Fermer"
    };
    function qi(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
          , a = arguments.length > 5 ? arguments[5] : void 0
          , i = arguments.length > 6 ? arguments[6] : void 0
          , c = arguments.length > 7 ? arguments[7] : void 0
          , u = ie.localStorage ? atob(localStorage.getItem("retryAttempts")) : null
          , l = null !== u ? Number(u) / 100 : 0;
        null !== l && 0 === l ? t && t.activate.call(r) : l > 0 ? (--l,
        localStorage.setItem("retryAttempts", btoa(String(100 * Number(l)))),
        !0 === o && n((function() {
            return setTimeout((function() {
                a && i(c.actions.updateErrorMessage(a, 20))
            }
            ), 0)
        }
        )),
        n()) : l && null !== l || !e ? l || e || (!0 === o && n((function() {
            return setTimeout((function() {
                a && i(c.actions.updateErrorMessage(a, 20))
            }
            ), 0)
        }
        )),
        n()) : t && t.activate.call(r)
    }
    function Yi(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Zi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Qi(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Zi(Object(n), !0).forEach((function(t) {
                Xi(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zi(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Xi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var Ji, ec, tc = !1, nc = !1, rc = "payment.cancelled.error";
    function oc() {
        nc = !1,
        Ji && (Ji.dispatch(Hi.actions.updateBackgroundProcessing(nc)),
        Ji = void 0),
        ec && (D(ec.close) && ec.close(),
        ec = void 0),
        self.focus(),
        removeEventListener("message", ac)
    }
    function ac(e) {
        var t = e.data
          , n = e.source;
        if (ec && n === ec) {
            !0 === tc && document.querySelector("#iframe-checkout-v3-parent") && document.querySelector("#iframe-checkout-v3-parent").remove();
            var r = N(t) ? t : {}
              , o = r.name
              , a = r.respcode
              , i = r.respmsg;
            switch (o) {
            case "mmoney-captcha-failed":
                var c = Ji
                  , u = c.INIT_VIEW
                  , l = c.dispatch;
                qi(!0 === U(Ji.DATA, "preferences[should_redirect_on_fail]"), Ia, u, Qi(Qi({}, Ji), {}, {
                    $$data: t
                }), !0, I(t.data) && t.data.trim() || null, l, Ee),
                oc();
                break;
            case "vbvcomplete":
                var s = U(Ji, "STATE.method.current");
                if (["mobilemoneygh", "mobilemoneymalawi", "mobilemoneytanzania"].indexOf(s) >= 0 && Po.customerReturnedFromVerificationPage(),
                ["00"].indexOf(a) >= 0)
                    ja && ja.activate.call(Qi(Qi({}, Ji), {}, {
                        $$data: t
                    }));
                else {
                    var f, d = Ji, p = d.INIT_VIEW, m = d.dispatch, h = d.$charge, y = U(Ji, "STATE.method.current"), b = U(Ji, "STATE.currency.current");
                    if ("paypal" === y)
                        try {
                            "RR-C02" === Aa(t, "vbvrespcode").vbvrespcode && (ja && ja.activate.call(Qi(Qi({}, Ji), {}, {
                                $$data: t
                            })),
                            Po.paypalPendingMerchantAction(),
                            f = !0)
                        } catch (e) {}
                    if ("opay" === y) {
                        var v = Aa(t, "transactionobject").transactionobject;
                        try {
                            if ("string" == typeof v.status && "failed" === v.status.toLowerCase() && "02" === v.chargeResponseCode) {
                                var g = !0 === U(Ji.DATA, "preferences[should_redirect_on_fail]");
                                Ji.REDIRECT_URL = null,
                                setTimeout((function() {
                                    qi(g, Ia, p, Qi(Qi({}, Ji), {}, {
                                        $$data: t
                                    }))
                                }
                                ), 0)
                            }
                        } catch (e) {}
                    }
                    if ("enaira" === y)
                        try {
                            "02" === Aa(t, "vbvrespcode").vbvrespcode && (Jo && Jo.activate.call(Qi(Qi({}, Ji), {}, {
                                $$data: t
                            })),
                            pollConfig = {
                                onBegin: function() {},
                                onCancel: function() {
                                    pollConfig.onComplete()
                                },
                                onFailure: function(e) {},
                                onSuccessful: function() {
                                    ja && ja.activate.call(Qi(Qi({}, Ji), {}, {
                                        $$data: t
                                    }))
                                },
                                onComplete: function() {}
                            },
                            h.poll(pollConfig),
                            f = !0)
                        } catch (e) {}
                    if ("account" === y && ["EUR", "GBP"].includes(b))
                        try {
                            "02" !== Aa(t, "vbvrespcode").vbvrespcode && "02" !== a || (zi && zi.activate.call(Qi(Qi({}, Ji), {}, {
                                $$data: t
                            })),
                            f = !0)
                        } catch (e) {}
                    if ("paga" === y)
                        try {
                            var O = U(t, "transactionobject.acctvalrespmsg");
                            if ("02" === a)
                                qi(!0 === U(Ji.DATA, "preferences[should_redirect_on_fail]"), Ia, p, Qi(Qi({}, Ji), {}, {
                                    $$data: t
                                }), !0, O, m, Ee);
                            f = !0
                        } catch (e) {}
                    if (!0 !== f) {
                        var _ = !0 === U(Ji.DATA, "preferences[should_redirect_on_fail]")
                          , E = I(i) && i.trim() || null;
                        qi(_, Ia, p, Qi(Qi({}, Ji), {}, {
                            $$data: t
                        }), !0, E, m, Ee)
                    }
                }
                oc()
            }
        }
    }
    function ic(e) {
        if (!N(this))
            throw new Error("Cannot retrieve functions without an execution context.");
        if (!N(e) || !Object.isExtensible(e))
            throw new Error("Cannot retrieve functions without appropriate context object.");
        var t, n = this, r = n.mode, o = Boolean(8 & r), a = cc({
            flags: r
        }), i = a.charge, c = a.poll, u = a.validate, l = a.$context, s = Li.call(e), f = Gi.call(e), d = function() {
            var t = this;
            return function(n) {
                var r, o = t.INIT_VIEW, a = t.dispatch;
                n && (r = n instanceof Error ? n.message : ga(n) || n),
                N(this) && N(this.data) && (r = (r = this.data.$error) || ga(this.data)),
                qi(!0 === U(e.DATA, "preferences[should_redirect_on_fail]"), Ia, o, e),
                r && "failed to fetch" === r.toLowerCase() ? setTimeout((function() {
                    a(Ee.actions.updateErrorMessage("network.failed.error"))
                }
                ), 100) : r && (setTimeout((function() {
                    a(Pa.actions.updateInfo({
                        fromCharge: !0
                    }))
                }
                ), 100),
                setTimeout((function() {
                    a(Ee.actions.updateErrorMessage(r))
                }
                ), 100))
            }
        }
        .call(e);
        function p() {
            e.dispatch(Hi.actions.updateBackgroundProcessing(nc = !0)),
            e.dispatch(Na.actions.on()),
            e.dispatch(Ee.actions.updateErrorMessage())
        }
        function m() {
            e.dispatch(Hi.actions.updateBackgroundProcessing(nc = !1)),
            e.dispatch(Na.actions.off())
        }
        function h() {
            try {
                var t = this.url
                  , n = this.reference;
                e.reference = n,
                t.href && (e.REDIRECT_URL = t)
            } catch (e) {}
        }
        function y() {
            if (m.call(this),
            N(this)) {
                var t = this.data;
                e.$$data = M(Object.create(null), {
                    data: t
                })
            }
        }
        var b = M(Object.create(null), {
            cancel: function(e) {
                if (nc && D(t))
                    return t(e)
            },
            init: function(e) {
                if (!nc) {
                    var t, r = er(e, {
                        onBegin: p,
                        onChargeSuccessful: s,
                        onChargeFailed: d,
                        onComplete: m,
                        onDataResponse: y,
                        onError: d,
                        onRequireRedirection: h,
                        onRequireValidation: f
                    });
                    t = r.data,
                    e = Yi(r, ["data"]),
                    !Fe(t = Qi(Qi({
                        amount: U(l.$chargeData, "amount"),
                        currency: U(l.$chargeData, "currency"),
                        country: U(l.$chargeData, "country") || "NG"
                    }, N(n.data) ? n.data : {}), N(t) ? t : {})) && i(t, e)
                }
            },
            validate: function(e) {
                if (!nc) {
                    var t, r = er(e, {
                        onBegin: p,
                        onComplete: m,
                        onDataResponse: y,
                        onError: d,
                        onValidateFailed: d
                    });
                    t = r.data,
                    e = Yi(r, ["data"]),
                    !Fe(t = Qi(Qi({}, N(n.data) ? n.data : {}), N(t) ? t : {})) && u(t, e)
                }
            },
            poll: function(n) {
                if (!nc) {
                    var r = N(e.reference) ? e.reference : {}
                      , a = r.order
                      , i = r.charge
                      , u = o ? a : i;
                    if (u) {
                        var l = c(u, er(n, {
                            onBegin: function() {
                                e.dispatch(Hi.actions.updateBackgroundProcessing(nc = !0))
                            },
                            onComplete: m,
                            onDataResponse: function(t) {
                                e.$$data = t
                            },
                            onError: function(r) {
                                t && t(),
                                nc = !1,
                                RangeError,
                                e.$charge.poll(n)
                            },
                            onFailure: d
                        }), e);
                        t = function(n) {
                            if (D(l))
                                return l(),
                                t = void 0,
                                e.dispatch(Hi.actions.updateBackgroundProcessing(nc = !1)),
                                x(n)(),
                                !0
                        }
                    }
                }
            },
            redirect: function() {
                if (!nc)
                    try {
                        var t = e.REDIRECT_URL
                          , n = "applepay" === U(e, "STATE.method.current")
                          , r = "googlepay" === U(e, "STATE.method.current")
                          , o = !0 === U(e, "DATA.preferences[can_switch_to_paymob]")
                          , a = "account" === U(e, "STATE.method.current") && ["GBP", "EUR"].indexOf(U(e, "STATE.currency.current")) >= 0
                          , i = "account" === U(e, "STATE.method.current") && "ZAR" === U(e, "STATE.currency.current")
                          , c = "opay" === U(e, "STATE.method.current")
                          , u = "en" === U(e, "STATE.locale") ? Wi : Ki
                          , l = On(u, "iframe.close.text")
                          , s = function() {
                            window.opr && opr.addons || window.opera || navigator.userAgent.indexOf(" OPR/"),
                            /constructor/i.test(window.HTMLElement) || (!window.safari || safari.pushNotification).toString();
                            var e = /*@cc_on!@*/
                            !!document.documentMode
                              , t = !e && !!window.StyleMedia;
                            return window.chrome && window.chrome.webstore,
                            !(!e && !t)
                        }();
                        if ((tc = !(!se.isMobile && !s)) && !1 === n && !1 === r && !1 === o && !1 === a && !1 === i && !1 === c) {
                            if (function(e, t) {
                                var n = document.createElement("div");
                                n.setAttribute("id", "iframe-checkout-v3-parent"),
                                n.setAttribute("style", "position:relative;background:#fff;top:0;left:0;bottom:0;right:0;border:none;visibility:visible;position:absolute;z-index:999999"),
                                n.classList.add("iframe-loader");
                                var r = document.createElement("iframe")
                                  , o = document.createElement("button");
                                return o.textContent = t,
                                o.setAttribute("style", "font-weight:bold;background-color:#FF9B00;color:#fff;border-radius:3px;padding:3px;top:10px;right:15px;visibility:visible;position:absolute;z-index:999999999"),
                                o.classList.add("_iframe__close"),
                                r.setAttribute("width", "100%"),
                                r.setAttribute("height", "100%"),
                                r.setAttribute("id", "_3dseciframe"),
                                r.src = e,
                                r.onload = function() {
                                    n.classList.remove("iframe-loader")
                                }
                                ,
                                n.appendChild(r),
                                n.appendChild(o),
                                document.body.appendChild(n),
                                o.addEventListener("click", (function() {
                                    document.getElementById("iframe-checkout-v3-parent").remove(),
                                    setTimeout((function() {
                                        return ec.closed = !0
                                    }
                                    ), 100)
                                }
                                )),
                                n
                            }(t.href, l)) {
                                var f = document.getElementById("_3dseciframe");
                                ec = f.contentWindow,
                                e.dispatch(Hi.actions.updateBackgroundProcessing(nc = !0)),
                                Ji = e,
                                e.dispatch(Ee.actions.updateErrorMessage());
                                var d = setInterval((function() {
                                    if (ec) {
                                        if (ec.closed) {
                                            e.INIT_VIEW;
                                            var t = e.dispatch;
                                            clearInterval(d),
                                            ec = void 0,
                                            self.focus(),
                                            t(Hi.actions.updateBackgroundProcessing(nc = !1)),
                                            t(Ee.actions.updateErrorMessage(rc))
                                        }
                                    } else
                                        clearInterval(d)
                                }
                                ), 1e3);
                                addEventListener("message", ac)
                            }
                        } else if (ec = window.open(t.href, "_blank")) {
                            e.dispatch(Hi.actions.updateBackgroundProcessing(nc = !0)),
                            Ji = e,
                            e.dispatch(Ee.actions.updateErrorMessage());
                            var p = setInterval((function() {
                                if (ec) {
                                    if (ec.closed) {
                                        e.INIT_VIEW;
                                        var t = e.dispatch;
                                        clearInterval(p),
                                        ec = void 0,
                                        self.focus(),
                                        t(Hi.actions.updateBackgroundProcessing(nc = !1)),
                                        t(Ee.actions.updateErrorMessage(rc))
                                    }
                                } else
                                    clearInterval(p)
                            }
                            ), 1e3);
                            addEventListener("message", ac)
                        }
                    } catch (e) {}
            }
        });
        return M(e, {
            $charge: b
        })
    }
    function cc(e, t) {
        e && t && (cc = function(n) {
            var r = V({
                $chargeData: function() {
                    return e
                },
                $state: function() {
                    return t.getState()
                }
            }, !1);
            return Object.freeze(M(r, Qi({}, N(n) ? n : {}))),
            Object.freeze(M(Object.create(null), {
                $context: r,
                charge: Pi.bind(r),
                poll: Za.bind(r),
                validate: mi.bind(r)
            }))
        }
        )
    }
    var uc, lc = cc;
    function sc() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "NOOP_VIEW"
        }).call(e)
    }
    function fc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function dc(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var pc, mc, hc, yc = Object.create(null), bc = "https://api.ravepay.co".concat("/v3/checkout/limit"), vc = Dn(bt.one.limit(3).init(Tn).retry(bt.RetryOnNetworkError, bt.RetryOnTimeout).timeout(In)), gc = function() {
        var e = new Error("FETCH_LIMIT_FAILED");
        return e.name = "ERR_FETCH_LIMIT_FAILURE",
        Object.freeze(e)
    }();
    function Oc() {
        return po().then((function(e) {
            var t = e.currency
              , n = e.email
              , r = U(Df.getState(), "method.current")
              , o = U(Df.getState(), "view.context.inputs['network'].value") ? U(Df.getState(), "view.context.inputs['network'].value").identifier : "VODAFONE"
              , a = btoa("".concat(t, "::").concat(r));
            uc || (uc = e.amount);
            var i = {
                amount: uc,
                currency: t,
                customer_email: n,
                payment_method: r,
                public_key: e.PBFPubKey,
                checkout_id: e.modalauditid
            };
            if ("mobilemoneyrwanda" === r && (i.network = "RWF"),
            "mobilemoneytanzania" === r) {
                var c = U(Df.getState(), "view.context.inputs['network'].value") || null;
                o = null === c ? o : c.identifier,
                i.network = o || U(e, "mobilemoney_network") || null,
                a = btoa("".concat(t, "::").concat(r, "::").concat(o))
            }
            return yc[a] ? Promise.resolve(yc[a]) : vc(bc, {
                body: JSON.stringify(i)
            }).then((function(e) {
                return Pn(e) ? e.json().then((function(e) {
                    if (N(e) && N(e.data)) {
                        var t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? fc(Object(n), !0).forEach((function(t) {
                                    dc(e, t, n[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fc(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }
                                ))
                            }
                            return e
                        }({}, e.data)
                          , n = t.within_limits
                          , i = t.min_amount
                          , c = t.max_amount
                          , u = t.currency;
                        return Object.defineProperty(yc, a, {
                            value: {
                                within_limits: n,
                                min_amount: i,
                                max_amount: c,
                                currency: u
                            },
                            configurable: !0
                        }),
                        yc[a]
                    }
                    return Promise.reject([gc, o, r])
                }
                )) : Promise.reject([gc, o, r])
            }
            ))
        }
        ))
    }
    function _c(e) {
        var t, n = this;
        e = D(e) ? e : j,
        t = function(t, r) {
            var o = Df.dispatch
              , a = function(e) {
                o(Ee.actions.updateErrorMessage(e))
            }
              , i = U(Df.getState(), "method.current");
            -1 === ["mobilemoneytanzania"].indexOf(i) && (o(Na.actions.on()),
            o(Hi.actions.updateBackgroundProcessing(!0))),
            Oc().then((function(t) {
                var r = t.within_limits
                  , i = t.min_amount
                  , c = t.max_amount
                  , u = t.currency;
                o(Ee.actions.updateErrorMessage());
                var l = U(Df.getState(), "method.current");
                if (!0 === r)
                    e();
                else if ("mobilemoneytanzania" === l) {
                    var s = n.INIT_VIEW;
                    c = +c,
                    i = +i,
                    Number.isFinite(c) && uc > c ? a("dynamic.limit.exceed.error ".concat(new ki(c,u))) : Number.isFinite(i) && uc < i ? a("dynamic.limit.below.error ".concat(new ki(i,u))) : Number.isFinite(i) && Number.isFinite(c) ? a("dynamic.limit.range.error ".concat(new ki(i,u), " dynamic.limit.range.to ").concat(new ki(c,u))) : a("limit.default.error"),
                    s()
                } else
                    sc && sc.activate.call(n, (function() {
                        c = +c,
                        i = +i,
                        Number.isFinite(c) && uc > c ? a("dynamic.limit.exceed.error ".concat(new ki(c,u))) : Number.isFinite(i) && uc < i ? a("dynamic.limit.below.error ".concat(new ki(i,u))) : Number.isFinite(i) && Number.isFinite(c) ? a("dynamic.limit.range.error ".concat(new ki(i,u), " dynamic.limit.range.to ").concat(new ki(c,u))) : a("limit.default.error")
                    }
                    ))
            }
            ), (function(t) {
                return e(),
                t instanceof DOMException && "AbortError" == t.name ? void 0 : r(t)
            }
            )).finally((function() {
                return o(Hi.actions.updateBackgroundProcessing(!1)),
                o(Na.actions.off()),
                t()
            }
            ))
        }
        ,
        new Promise((function(e, n) {
            return D(t) ? t(e, n) : e()
        }
        ))
    }
    function Ec(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || Cc(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function wc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Ac(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Cc(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Sc(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sc(e, t) : void 0
        }
    }
    function Sc(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var jc = Object.create(null)
      , Tc = "https://api.ravepay.co".concat("/v3/checkout/fee")
      , Rc = Dn((pc = bt.one.limit(3).init(Tn)).retry.apply(pc, function(e) {
        return function(e) {
            if (Array.isArray(e))
                return Sc(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || Cc(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(Rn)).timeout(In))
      , Ic = function() {
        var e = new Error("FETCH_FEE_FAILED");
        return e.name = "ERR_FETCH_FEE_FAILURE",
        Object.freeze(e)
    }();
    function Pc(e) {
        return po().then((function(t) {
            var n = t.currency
              , r = U(Df.getState(), "method.current")
              , o = U(Df.getState(), "view.context.inputs['network'].value") ? U(Df.getState(), "view.context.inputs['network'].value").identifier : "MTN"
              , a = U(Df.getState(), "view.context.inputs['country'].value") ? U(Df.getState(), "view.context.inputs['country'].value").code : "";
            if ("card" === r) {
                var i = !0 === U(t, "preferences[can_switch_to_paymob]");
                "EGP" === n && (i ? r = "paymob" : !i && e && /^\d{6}$/.test(e) && (r = e)),
                e && /^\d{6}$/.test(e) && (r = e)
            }
            "1voucher" === r && (r = "flashvoucher"),
            hc || (hc = t.amount);
            var c = hc
              , u = btoa("".concat(n, "::").concat(r))
              , l = {
                amount: c,
                currency: n,
                payment_method: r,
                public_key: t.PBFPubKey,
                checkout_id: t.modalauditid
            };
            if ("mobilemoneytanzania" === r && (l.network = U(t, "mobilemoney_network") || null,
            l.payment_method = "MOBILEMONEY"),
            ["mobilemoneyghana", "mobilemoneyfranco", "mobilemoneytanzania", "mobilemoneyzambia"].includes(r)) {
                var s = U(Df.getState(), "view.context.inputs['network'].value")
                  , f = U(Df.getState(), "view.context.inputs['country'].value");
                switch (o = s.identifier,
                l.network = s.identifier || U(t, "mobilemoney_network") || null,
                r) {
                case "mobilemoneyghana":
                    l.country = "GH",
                    a = "GH";
                    break;
                case "mobilemoneyfranco":
                    l.country = f.code || U(t, "country") || null,
                    a = f.code;
                    break;
                case "mobilemoneytanzania":
                    l.country = "TZ",
                    a = "TZ";
                    break;
                case "mobilemoneyzambia":
                    l.country = "ZM",
                    a = "ZM"
                }
                u = btoa("".concat(n, "::").concat(r, "::").concat(o, "::").concat(a))
            }
            return jc[u] ? Promise.resolve(jc[u]) : Rc(Tc, {
                body: JSON.stringify(l)
            }).then((function(e) {
                return Pn(e) && e.ok ? e.json().then((function(e) {
                    if (N(e) && N(e.data)) {
                        var t, o = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? wc(Object(n), !0).forEach((function(t) {
                                    Ac(e, t, n[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wc(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }
                                ))
                            }
                            return e
                        }({}, e.data), a = o.charge_amount, i = o.dcc;
                        if (U(Df.getState(), "campaign") && Object.keys(U(Df.getState(), "campaign")).length > 0) {
                            var c = U(Df.getState(), "campaign").discounted_value
                              , l = parseFloat(a) - parseFloat(hc);
                            t = parseFloat(hc) - parseFloat(c) + parseFloat(l)
                        } else
                            t = a;
                        return Object.defineProperty(jc, u, {
                            value: {
                                charge_amount: t.toFixed(2),
                                dcc: i
                            }
                        }),
                        jc[u]
                    }
                    return Promise.reject([Ic, n, r])
                }
                )) : Promise.reject([Ic, n, r])
            }
            ))
        }
        ))
    }
    function Dc(e) {
        var t;
        t = function(t, n) {
            var r = Df.dispatch;
            r(Pa.actions.updateInfo({
                amountUpdate: !0
            })),
            Pc(e).then((function(e) {
                r(we.actions.updateChargeAmount(e)),
                t(e),
                r(Pa.actions.updateInfo({
                    amountUpdate: !1
                }))
            }
            ), (function(t) {
                var o = Ec([].concat(t), 3)
                  , a = o[0]
                  , i = o[1]
                  , c = o[2]
                  , u = hc;
                if (c === e) {
                    var l = btoa("".concat(i, "::card"));
                    u = jc[l] || hc
                }
                var s = U(Df.getState(), "campaign").discounted_value;
                u && "number" == typeof u && (u = (u - s).toFixed(2)),
                r(we.actions.updateChargeAmount(u)),
                n(a),
                r(Pa.actions.updateInfo({
                    amountUpdate: !1
                }))
            }
            ))
        }
        ,
        new Promise((function(e, n) {
            (P(mc) ? Promise.resolve(mc) : po().then((function(e) {
                return mc = !U(e, "preferences[merchant_bears_fees]")
            }
            ))).then((function(r) {
                t(e, n)
            }
            )).finally(e)
        }
        ))
    }
    function Nc() {
        var e = this.$charge;
        return Nc = Xo({
            NAME: "NQR_INIT_VIEW",
            next: function() {
                e.init()
            }
        }).call(this)
    }
    function Mc() {
        var e = this
          , t = this.$charge;
        return Mc = Xo({
            NAME: "NQR_CODE_VIEW",
            constants: {
                get qrcode() {
                    return e.QR_CODE
                },
                instruction: "Scan the QR Code below on your bank’s mobile app to complete the payment"
            },
            next: function() {
                t.poll({
                    onCancel: function() {
                        this.onComplete()
                    },
                    onSuccessful: function() {
                        ja && ja.activate.call(e)
                    },
                    onComplete: function() {}
                })
            }
        }).call(this)
    }
    var kc = Dn(bt.many.init(Tn))
      , xc = new URL("/v2/nqr/cancel","https://api.ravepay.co")
      , Lc = [Nc, Mc];
    var $c = Object.freeze({
        __proto__: null,
        METHOD: "nqr",
        METHOD_NAME: "NQR",
        CHARGE_MODE: 8,
        VIEWS: Lc,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.QR_CODE && (Mc || (e.QR_CODE = null)) || Nc;
                    t && t.activate((function() {
                        return e.startListeningForCancellation()
                    }
                    ))
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_nqr: !0,
                payment_type: "nibss-qr"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["QR_CODE"]))
              , r = !1
              , o = function() {
                a(),
                i()
            }
              , a = function() {
                !0 === r && (removeEventListener(Ua, o, !1),
                removeEventListener($a, o, !1),
                r = !1)
            }
              , i = function() {
                if ("NQR_CODE_VIEW" === U(n.STATE, "view.current")) {
                    var t = U(e, "PBFPubKey")
                      , r = (N(n.reference) ? n.reference : {}).charge
                      , o = void 0 === r ? null : r
                      , a = JSON.stringify({
                        public_key: t,
                        reference: o
                    });
                    return kc(xc, {
                        body: a
                    }).then((function(e) {
                        return Pn(e) ? e.json().then((function(e) {
                            "success" === e.status && n.$resetContext()
                        }
                        )) : Promise.reject()
                    }
                    )).catch(rr)
                }
            };
            return n.$subscribe("QR_CODE", (function(e, t) {
                setTimeout((function() {
                    !t && e && t !== e && Mc && Mc.activate()
                }
                ), 0)
            }
            )),
            M(n, {
                $resetContext: function() {
                    n.QR_CODE = null
                },
                startListeningForCancellation: function() {
                    !0 !== r && (addEventListener(Ua, o, !1),
                    addEventListener($a, o, !1),
                    r = !0)
                },
                stopListeningForCancellation: a,
                INIT_VIEW: function(e) {
                    Nc && Nc.activate(e)
                }
            })
        }
    });
    function Uc(e) {
        return function(e) {
            if (Array.isArray(e))
                return Wc(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || zc(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Vc(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Fc(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Vc(Object(n), !0).forEach((function(t) {
                Gc(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vc(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Bc(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Gc(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Hc(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || zc(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function zc(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Wc(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wc(e, t) : void 0
        }
    }
    function Wc(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    var Kc = Object.freeze(R(null))
      , qc = Function.prototype.call.bind(Object.prototype.hasOwnProperty)
      , Yc = "SWITCH";
    function Zc(e) {
        var t = Object.create(null)
          , n = N(e) ? e : {}
          , r = n.available
          , o = n.persists
          , a = n.required
          , i = [r, o, a].map((function(e) {
            return D(e) ? function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return t = !P(t) || t,
                e = x(e),
                function() {
                    return $(e(), t)
                }
            }(e) : R($(e, !0))
        }
        ))
          , c = Hc(i, 3);
        return r = c[0],
        o = c[1],
        a = c[2],
        V.call(t, {
            available: r,
            persists: o,
            required: a
        })
    }
    function Qc(e) {
        var t = e = N(e) ? e : {}
          , n = t.key
          , r = t.parser
          , o = t.propagate;
        if (n = n && I(n) ? n : null,
        r = x(r, T),
        o = x(o, j),
        n) {
            var a = Zc(e)
              , i = c();
            return V.call(a, {
                type: function() {
                    return "PLAIN"
                },
                defaultValue: c,
                value: {
                    getter: function() {
                        return i
                    },
                    setter: function(e) {
                        var t = i;
                        try {
                            (null === e && t !== e || t !== (e = r(e))) && (t = null == e ? null : e),
                            i !== t && o(i = t)
                        } catch (e) {
                            i = null,
                            o(e)
                        }
                    }
                }
            }, !1),
            M(Object.create(null), Gc({}, n, Object.freeze(a)))
        }
        throw new Error("Cannot setup input field without appropriate label.");
        function c() {
            try {
                return r(e.defaultValue)
            } catch (e) {
                return null
            }
        }
    }
    function Xc(e) {
        var t = e = N(e) ? e : {}
          , n = t.key
          , r = t.propagate;
        if (n = n && I(n) ? n : null,
        r = x(r, j),
        n) {
            var o = Zc(e)
              , a = i();
            return V.call(o, {
                type: function() {
                    return Yc
                },
                defaultValue: i,
                value: {
                    getter: function() {
                        return a
                    },
                    setter: function(e) {
                        var t = a;
                        t = null == e ? this.defaultValue : !t,
                        a !== t && r(a = t)
                    }
                }
            }),
            M(Object.create(null), Gc({}, n, Object.freeze(o)))
        }
        throw new Error("Cannot setup switch input field without appropriate label.");
        function i() {
            try {
                return $(e.defaultValue, !1)
            } catch (e) {
                return !1
            }
        }
    }
    function Jc(e) {
        var t, n, r = e = N(e) ? e : {}, o = r.key, a = r.propagate;
        if (o = o && I(o) ? o : null,
        a = x(a, j),
        o) {
            var i = Zc(e)
              , c = s();
            return V.call(i, {
                type: function() {
                    return "SELECTION"
                },
                options: u,
                defaultValue: s,
                value: {
                    getter: function() {
                        return c
                    },
                    setter: function(e) {
                        var t = c;
                        try {
                            (null === e && t !== e || t !== (e = l(e))) && (t = e),
                            c !== t && a(c = t)
                        } catch (e) {
                            c = null,
                            a(e)
                        }
                    }
                }
            }),
            M(Object.create(null), Gc({}, o, Object.freeze(i)))
        }
        throw new Error("Cannot setup selection input field without appropriate label.");
        function u() {
            return t && t === e.options ? n : n = [].concat(t = e.options).filter(Boolean)
        }
        function l(t) {
            var n = u()
              , r = x(e.selector, Kc);
            return n.indexOf(t) >= 0 || n.indexOf(t = r(t)) >= 0 ? t : null
        }
        function s() {
            var t = u();
            return 1 === t.length ? t[0] : l(e.defaultValue)
        }
    }
    function eu(e, t) {
        if (!N(e) || !Object.isExtensible(e))
            throw new Error("Cannot setup input fields without appropriate context object.");
        var n = Object.create(null)
          , r = Object.create(null)
          , o = function(e, t) {
            var n = [t][0]
              , r = null;
            if (t instanceof Error) {
                var o = [r, n];
                n = o[0],
                r = o[1]
            }
            var i = a[e];
            i.value,
            i.defaultValue,
            i.available,
            i.persists;
            var c = Bc(i, ["value", "defaultValue", "available", "persists"])
              , u = M(Object.create(null), Fc({
                value: n
            }, c));
            return r && M(u, {
                error: r
            }),
            u
        }
          , a = N(t) ? Object.keys(t).reduce((function(a, i) {
            var c, u, l, s = t[i];
            return s = N(s) ? s : {
                defaultValue: D(s) ? s.call(e) : s
            },
            I(i) && Object.isExtensible(s) && (s.key = i,
            s.propagate = r[i] = (l = o.bind(null, i),
            function(e) {
                c && clearTimeout(c),
                u = l(e),
                c = setTimeout((function() {
                    n[i] = u,
                    c && clearTimeout(c),
                    c = void 0
                }
                ), 0)
            }
            ),
            a = Fc(Fc({}, a), (qc(s, "options") ? Jc : P(s.defaultValue) ? Xc : Qc)(s))),
            a
        }
        ), Object.create(null)) : Object.create(null);
        return ur.apply(void 0, [n].concat(Uc(Object.keys(a)))),
        Object.keys(r).forEach((function(e) {
            x(r[e])(a[e].defaultValue)
        }
        )),
        Object.defineProperties(n, {
            $available: {
                value: function(e) {
                    return qc(a, e) && !1 !== a[e].available
                }
            },
            $refresh: {
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    (t.length ? t : Object.keys(a)).forEach((function(e) {
                        if (qc(a, e)) {
                            var t = a[e];
                            t.type !== Yc && (t.value = t.value),
                            x(r[e])(t.value)
                        }
                    }
                    ))
                }
            },
            $reset: {
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    (t.length ? t : Object.keys(a)).forEach((function(e) {
                        if (qc(a, e)) {
                            var t = a[e]
                              , n = t.defaultValue;
                            t.value !== n && (t.value = n)
                        }
                    }
                    ))
                }
            },
            $update: {
                value: function(e, t) {
                    qc(a, e) && (a[e].value = t)
                }
            }
        }),
        M(e, {
            $inputs: n
        })
    }
    function tu() {
        var e = this
          , t = this.$inputs;
        function n() {
            var t = (N(e.authModel) ? e.authModel : {}).auth;
            return "AVS" === t || "PIN" === t ? t : null
        }
        return tu = Xo({
            NAME: "CARD_AUTH_VIEW",
            inputs: ["pin", "billing_address", "billing_city", "billing_country", "billing_state", "billing_zip", "card_holder_name", "phonenumber"],
            constants: {
                get auth() {
                    return n()
                },
                get cardNumber() {
                    var e = U(t, "[card_number].value");
                    return I(e) ? e.replace(/^\d+?(\d{4})$/, (function(e, t) {
                        return "**** ".concat(t)
                    }
                    )) : e
                }
            },
            next: function() {
                n() && su.call(e)
            }
        }).call(this)
    }
    function nu() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "PLACEHOLDER_VIEW"
        }).call(e)
    }
    function ru() {
        var e = this
          , t = this.$charge
          , n = this.$inputs
          , r = this.dispatch
          , o = function() {
            qi(!0 === U(e.DATA, "preferences[should_redirect_on_fail]"), Ia, du, e)
        }
          , a = function() {
            n.$reset("saved_card")
        }
          , i = function() {
            var t = this
              , a = U(this, "validation_code")
              , i = U(this, "message.validation")
              , c = /^5[1-5]/.test(U(n, "[card_number].value"))
              , u = sn.get("custom_retry") || null;
            if (c && !(/insufficient/i.test(i) || ["RR-59"].indexOf(a) >= 0) && null === u)
                setTimeout((function() {
                    return su.call(e, U(t, "reference.transaction"))
                }
                ), 0);
            else {
                o();
                var l = "".concat(-1 === i.indexOf("We could not charge this card. Reason") ? "We could not charge this card. Reason: " : "").concat(i);
                setTimeout((function() {
                    return r(Ee.actions.updateErrorMessage(l))
                }
                ), 100)
            }
        };
        return ru = Xo({
            NAME: "CARD_OTP_VIEW",
            inputs: ["otp"],
            constants: {
                resendOTP: function() {
                    return !0 === e.CAN_RESEND_OTP ? nu && nu.activate((function() {
                        return (e.SAVED_CARDS_ACTIVE ? fu : su).call(e)
                    }
                    )) : Promise.resolve(!1)
                }
            },
            mutables: {
                canResendOTP: "CAN_RESEND_OTP"
            },
            next: function() {
                var r = (N(e.reference) ? e.reference : {}).charge
                  , c = void 0 === r ? null : r
                  , u = U(n, "[otp].value");
                if (u)
                    if (e.SAVED_CARDS_ACTIVE && e.useOldSavedCardFlow) {
                        var l = U(e.$savedCards, "device.phone")
                          , s = U(n, "[saved_card].value")
                          , f = s.hash;
                        t.init({
                            data: {
                                otp: u,
                                card_hash: f,
                                device_key: l,
                                is_visa: "VISA" === s.brand,
                                is_saved_card_charge: !0,
                                include_card_country: !0,
                                payment_type: "saved-card"
                            },
                            onError: a,
                            onChargeFailed: a
                        })
                    } else
                        t.validate({
                            data: {
                                otp: u,
                                transaction_reference: c
                            },
                            onError: o,
                            onValidateFailed: i,
                            onValidateSuccessful: function() {
                                ja && ja.activate.call(e)
                            },
                            onComplete: function() {
                                e.clearResendTimer()
                            }
                        })
            }
        }).call(this)
    }
    function ou() {
        var e = this
          , t = this.$charge
          , n = this.$inputs
          , r = this.dispatch
          , o = function() {
            qi(!0 === U(e.DATA, "preferences[should_redirect_on_fail]"), Ia, du, e)
        }
          , a = function() {
            n.$reset("saved_card")
        }
          , i = function() {
            var t = this
              , a = U(this, "validation_code")
              , i = U(this, "message.validation")
              , c = /^5[1-5]/.test(U(n, "[card_number].value"))
              , u = sn.get("custom_retry") || null;
            if (c && !(/insufficient/i.test(i) || ["RR-59"].indexOf(a) >= 0) && null === u)
                setTimeout((function() {
                    return su.call(e, U(t, "reference.transaction"))
                }
                ), 0);
            else {
                o();
                var l = "".concat(-1 === i.indexOf("We could not charge this card. Reason") ? "We could not charge this card. Reason: " : "").concat(i);
                setTimeout((function() {
                    return r(Ee.actions.updateErrorMessage(l))
                }
                ), 100)
            }
        };
        return ou = Xo({
            NAME: "CARD_MOBILE_NUMBER_VIEW",
            inputs: ["otp"],
            constants: {
                get instructions() {
                    return e.COLLECT_MOBILE_INSTRUCTIONS
                }
            },
            mutables: {},
            next: function() {
                var r = (N(e.reference) ? e.reference : {}).charge
                  , c = void 0 === r ? null : r
                  , u = U(n, "[otp].value");
                if (u)
                    if (e.SAVED_CARDS_ACTIVE && e.useOldSavedCardFlow) {
                        var l = U(e.$savedCards, "device.phone")
                          , s = U(n, "[saved_card].value")
                          , f = s.hash;
                        t.init({
                            data: {
                                otp: u,
                                card_hash: f,
                                device_key: l,
                                is_visa: "VISA" === s.brand,
                                is_saved_card_charge: !0,
                                include_card_country: !0,
                                payment_type: "saved-card"
                            },
                            onError: a,
                            onChargeFailed: a
                        })
                    } else
                        t.validate({
                            data: {
                                otp: u,
                                transaction_reference: c
                            },
                            onError: o,
                            onValidateFailed: i,
                            onValidateSuccessful: function() {
                                ja && ja.activate.call(e)
                            },
                            onComplete: function() {
                                e.clearResendTimer()
                            }
                        })
            }
        }).call(this)
    }
    function au(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return iu(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return iu(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function iu(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function cu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function uu(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? cu(Object(n), !0).forEach((function(t) {
                lu(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cu(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function lu(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function su(e) {
        var t = this
          , n = this.$charge
          , r = this.$inputs
          , o = N(t.authModel) ? t.authModel : {}
          , a = o.auth
          , i = o.suggested_auth
          , c = void 0 === i ? null : i
          , u = {};
        if ("PIN" === a) {
            var l = U(r, "[pin].value");
            if (!l || !/^\d{4}$/.test(l))
                return;
            u = uu(uu({}, u), {}, {
                pin: l,
                suggested_auth: c
            })
        }
        if ("AVS" === a) {
            var s = U(r, "[billing_address].value")
              , f = U(r, "[billing_city].value")
              , d = U(r, "[billing_country].value.sortname")
              , p = U(r, "[billing_state].value")
              , m = U(r, "[billing_zip].value")
              , h = U(r, "[card_holder_name].value") || null
              , y = U(r, "[phonenumber].value") || null;
            if (!(s && f && d && p && m && h && y))
                return;
            u = uu(uu({}, u), {}, {
                billingaddress: s,
                billingcity: f,
                billingcountry: d,
                billingstate: p,
                billingzip: m,
                cardholdername: h,
                phonenumber: y,
                suggested_auth: "AVS_NOAUTH"
            })
        }
        var b = U(r, "[expiry].value")
          , v = U(r, "[cvv].value") || null
          , g = U(r, "[card_number].value") || null
          , O = au(I(b) ? b.trim().split(/\s*\/\s*/) : String(), 2)
          , _ = O[0]
          , E = void 0 === _ ? null : _
          , w = O[1]
          , A = void 0 === w ? null : w;
        if (g && v && E && A) {
            u = uu(uu({}, u), {}, {
                cardno: g,
                cvv: v,
                expirymonth: E,
                expiryyear: A
            });
            var C = !0 === U(r, "[remember_card].value");
            if (e && (u = uu(uu({}, u), {}, {
                retry_charge: e
            })),
            C) {
                var S = U(r, "[remember_email].value") || null
                  , j = U(r, "[remember_phone].value") || null;
                S && j ? (ie.localStorage && j && localStorage.setItem("device_mobile_key", j),
                u = uu(uu({}, u), {}, {
                    remember_device: C,
                    remember_device_email: S,
                    remember_device_mobile_key: j
                })) : u = null
            }
            if (u) {
                var T = function() {
                    return setTimeout((function() {
                        du && du.activate.call(t)
                    }
                    ), 0)
                };
                t.CAN_RESEND_OTP = !1,
                n.init({
                    data: u,
                    onError: T,
                    onFailed: T,
                    onChargeFailed: function() {
                        return setTimeout((function() {
                            t.authModel = null,
                            r.$reset()
                        }
                        ), 0)
                    },
                    onRequireSuggestedAuth: function() {
                        var e = N(this) ? this : {}
                          , n = e.auth
                          , r = e.suggested_auth;
                        t.authModel = {
                            auth: n,
                            suggested_auth: r
                        },
                        tu && tu.activate()
                    },
                    onRequireValidation: function() {
                        var e = U((N(this) ? this : {}).data, "chargeResponseMessage");
                        e.includes("Kindly enter the mobile no registered with your bank") ? (t.COLLECT_MOBILE_INSTRUCTIONS = e,
                        ou && ou.activate()) : (t.SHOULD_VALIDATE_CHARGE = !1,
                        t.SHOULD_VALIDATE_CHARGE = !0)
                    }
                })
            }
        }
    }
    function fu() {
        var e = this.DATA
          , t = this.$charge
          , n = this.$inputs
          , r = this.dispatch
          , o = this.useOldSavedCardFlow
          , a = this.startResendTimer
          , i = U(n, "[saved_card].value");
        if (N(i)) {
            var c = i.hash
              , u = U(this.$savedCards, "device.phone");
            o ? ru && ru.activate((function() {
                r(Ee.actions.updateErrorMessage()),
                n.$reset("otp"),
                Ri(new URL("/v2/gpx/users/send_otp","https://api.ravepay.co"), {
                    body: JSON.stringify({
                        card_hash: c,
                        device_key: u,
                        public_key: U(e, "PBFPubKey"),
                        modalauditid: U(e, "modalauditid")
                    })
                }).then((function(e) {
                    if (Pn(e) && e.ok)
                        return e.json().then((function(e) {
                            var t = N(e) ? e : {}
                              , n = t.message;
                            return "success" === t.status && "OTP-SENT" === n && (a(),
                            !0)
                        }
                        ))
                }
                )).catch(rr)
            }
            )) : t.init({
                data: {
                    card_hash: c,
                    device_key: u,
                    is_visa: "VISA" === i.brand,
                    is_saved_card_charge: !0,
                    include_card_country: !0,
                    payment_type: "saved-card",
                    otp: String(1e5 * Math.random()).split("").reverse().join("").replace(/^\d+(?=\d{6})|\.\d+$/g, "")
                }
            })
        }
    }
    function du() {
        var e = this;
        return du = Xo({
            NAME: "CARD_INIT_VIEW",
            inputs: ["card_number::cardnumber", "expiry", "cvv", "remember_card::remember", "remember_phone::rememberPhone", "remember_email::rememberEmail", "saved_card::savedcard"],
            constants: {
                removeSavedCard: function(t) {
                    return e.SAVED_CARDS_ACTIVE && e.SAVED_CARDS_AVAILABLE ? e.$savedCards.remove(t) : Promise.resolve(!1)
                }
            },
            mutables: {
                hasSavedCard: "SAVED_CARDS_AVAILABLE",
                useSavedCard: "SAVED_CARDS_ACTIVE",
                $cards: "SAVED_CARDS"
            },
            next: function() {
                return (e.SAVED_CARDS_ACTIVE ? fu : su).call(e)
            },
            switch: function() {
                e.SAVED_CARDS_ACTIVE = !!e.SAVED_CARDS_AVAILABLE && !e.SAVED_CARDS_ACTIVE
            }
        }).call(this)
    }
    function pu() {
        var e = this.$charge
          , t = this.$inputs;
        return pu = Xo({
            NAME: "PAYMOB_INIT_VIEW",
            inputs: ["billing_zip", "billing_city", "billing_address", "billing_state", "billing_country", "card_holder_name", "phonenumber"],
            next: function() {
                var n = {}
                  , r = U(t, "[billing_zip].value")
                  , o = U(t, "[billing_city].value")
                  , a = U(t, "[billing_address].value")
                  , i = U(t, "[billing_state].value")
                  , c = U(t, "[billing_country].value.sortname")
                  , u = U(t, "[card_holder_name].value")
                  , l = U(t, "[phonenumber].value");
                a && r && o && i && c && u && l && (n = {
                    billingaddress: a,
                    billingcity: o,
                    billingcountry: c,
                    billingstate: i,
                    billingzip: r,
                    card_holder_name: u,
                    phonenumber: l
                },
                e.init({
                    data: n
                }))
            }
        }).call(this)
    }
    function mu() {
        var e = N(this) ? this : Object.create(null);
        return Xo({
            NAME: "REDIRECT_VIEW",
            constants: {
                get resetView() {
                    return "enaira" === U(e, "STATE.method.current") && e.cancelOption || null
                }
            },
            next: function() {
                var t, n, r = U(e, "STATE.method.current");
                t = r,
                n = r,
                "enaira" === r && (n = "".concat(t, " ").concat(U(e.$inputs.eNairaPaymentOption, "value.name"))),
                Po.customerOpenedRedirectURL(t, n),
                x(U(e.$charge, "redirect"))()
            }
        }).call(e)
    }
    var hu = [du, tu, pu, ou, ru];
    var yu = Object.freeze({
        __proto__: null,
        METHOD: "card",
        METHOD_NAME: "Card",
        CHARGE_MODE: 7,
        VIEWS: hu,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = U(e.STATE, "currency.current")
                      , n = !0 === U(e.DATA, "preferences[can_switch_to_paymob]")
                      , r = e.REDIRECT_URL && (mu || e.$resetContext()) || e.SHOULD_VALIDATE_CHARGE && (ru || e.$resetContext()) || e.COLLECT_MOBILE_INSTRUCTIONS && (ou || e.$resetContext()) || e.authModel && (tu || e.$resetContext()) || "EGP" === t && n && pu || du;
                    r && r.activate.call(e, (function() {
                        r === du && e.$savedCards.fetch()
                    }
                    ))
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            if (!this.SHOULD_VALIDATE_CHARGE) {
                var e = U(this.STATE, "currency.current")
                  , t = !0 === U(this.DATA, "preferences[can_switch_to_paymob]");
                return {
                    include_card_country: !0,
                    payment_type: "EGP" === e && t ? "paymob" : "card"
                }
            }
        },
        getViewsContext: function(e, t) {
            var n, r = U(e, "currency"), o = !0 === U(e, "preferences[can_switch_to_paymob]"), a = M(Object.create(null), {
                useOldSavedCardFlow: !0 === U(e, "preferences[use_old_saved_card_flow]"),
                INIT_VIEW: function(e) {
                    "EGP" === r && o ? pu && pu.activate(e) : du && du.activate(e)
                },
                clearResendTimer: function() {
                    n && clearTimeout(n),
                    n = null,
                    a.CAN_RESEND_OTP = !1
                },
                startResendTimer: function() {
                    a.clearResendTimer(),
                    n = setTimeout((function() {
                        return a.CAN_RESEND_OTP = !0
                    }
                    ), 9e4)
                },
                $resetContext: function() {
                    a.REDIRECT_URL = a.SHOULD_VALIDATE_CHARGE = a.COLLECT_MOBILE_INSTRUCTIONS = a.authModel = null,
                    a.$inputs.$reset()
                }
            });
            return ur.apply(void 0, [a].concat(["CAN_RESEND_OTP", "REDIRECT_URL", "SAVED_CARDS", "SAVED_CARDS_ACTIVE", "SAVED_CARDS_AVAILABLE", "SHOULD_VALIDATE_CHARGE", "COLLECT_MOBILE_INSTRUCTIONS"])),
            br(a, (function() {
                a.SAVED_CARDS_ACTIVE = !1,
                a.SAVED_CARDS_AVAILABLE = !1,
                a.$savedCards.$subscribe((function(e, t) {
                    e !== t && (a.SAVED_CARDS = e,
                    a.SAVED_CARDS_AVAILABLE = !!(a.$savedCards.enabled && a.SAVED_CARDS && a.SAVED_CARDS.length > 0),
                    !a.SAVED_CARDS_AVAILABLE && (a.SAVED_CARDS_ACTIVE = !1))
                }
                ))
            }
            )),
            eu(a, {
                otp: null,
                pin: c(!0),
                billing_address: c(),
                billing_city: c(),
                billing_country: c(!1, {
                    options: Hr,
                    selector: zr.bind(a, Hr)
                }),
                billing_state: c(),
                billing_zip: c(),
                card_holder_name: u(),
                phonenumber: u(),
                card_number: i(),
                expiry: i(),
                cvv: i(),
                remember_card: i({
                    defaultValue: !1,
                    required: !1
                }),
                remember_email: i(2, U(e, "email") || null),
                remember_phone: i(2, U(e, "phone") || null),
                saved_card: i(1, {
                    get options() {
                        return a.SAVED_CARDS
                    },
                    get selector() {
                        return yr.bind(a, this.options)
                    }
                })
            }),
            a.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(a)
                }
                ), 0)
            }
            )),
            a.$subscribe("SHOULD_VALIDATE_CHARGE", (function(e, t) {
                setTimeout((function() {
                    t || t === e || !0 !== e || (ru && ru.activate(),
                    a.startResendTimer())
                }
                ), 0)
            }
            )),
            a.$subscribe("SAVED_CARDS_ACTIVE", (function(e, t) {
                t !== e && P(e) && a.$inputs.$refresh("saved_card")
            }
            )),
            a.$inputs.$subscribe("saved_card", (function(e, t) {
                setTimeout((function() {
                    t !== e && l(U(e, "[value].masked_pan"))
                }
                ), 0)
            }
            )),
            a.$inputs.$subscribe("card_number", (function(e, t) {
                setTimeout((function() {
                    t !== e && l(U(e, "[value]"))
                }
                ), 0)
            }
            )),
            a;
            function i(e, t) {
                if (Number.isInteger(e)) {
                    var n = [t, e];
                    e = n[0],
                    t = n[1]
                }
                return t = +t || 0,
                null == (e = N(e) ? e : {
                    defaultValue: e
                }).defaultValue && (e.defaultValue = null),
                e.available = function() {
                    var e = !0
                      , n = a.SAVED_CARDS_ACTIVE;
                    return e = e && !!(1 & t ? n : !n && (!(2 & t) || U(a.$inputs, "[remember_card].value")))
                }
                ,
                e
            }
            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return null == (t = t && N(t) ? t : {
                    defaultValue: t
                }).defaultValue && (t.defaultValue = null),
                t.available = function() {
                    var t = !0;
                    return t = (N(a.authModel) ? a.authModel : {}).auth === (!0 === e ? "PIN" : "AVS"),
                    "EGP" === r && (t = !0),
                    t
                }
                ,
                t
            }
            function u(e) {
                return null == (e = e && N(e) ? e : {
                    defaultValue: e
                }).defaultValue && (e.defaultValue = null),
                e.available = function() {
                    var e = !1
                      , t = (N(a.authModel) ? a.authModel : {}).auth;
                    return "EGP" !== r && "AVS" !== t || (e = !0),
                    e
                }
                ,
                e
            }
            function l(e) {
                e && (e = e.replace(/\s+/g, "")) && /^\d{6}/.test(e) && Dc(e.slice(0, 6))
            }
        }
    });
    function bu() {
        var e = this.$charge;
        return bu = Xo({
            NAME: "PAGA_INIT_VIEW",
            constants: {
                hasBackAction: !1
            },
            next: function() {
                e.init({})
            }
        }).call(this)
    }
    var vu = [bu];
    var gu = Object.freeze({
        __proto__: null,
        METHOD: "paga",
        METHOD_NAME: "Paga",
        CHARGE_MODE: 1,
        VIEWS: vu,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || bu;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "paga"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            M(n, {
                $resetContext: function() {
                    n.REDIRECT_URL = null
                },
                INIT_VIEW: function(e) {
                    bu && (n.$resetContext(),
                    bu.activate(e))
                }
            })
        }
    })
      , Ou = "$0x1"
      , _u = "$0x2"
      , Eu = "$0x3";
    var wu = Object.freeze(M(Object.create(null), {
        valueOf: function() {
            return this.time
        },
        toString: function() {
            return e = this.time,
            t = Math.max(0, +e || 0),
            [Math.floor(t / 60), t % 60].map((function(e) {
                return "00".concat(e || 0).slice(-2)
            }
            )).join(":");
            var e, t
        },
        countdownTick: function() {
            return this.time > 0 ? Su(--this.time) : this
        }
    }));
    function Au(e) {
        return (Au = function(e) {
            return Math.ceil(e / 7.8125) / 128
        }
        ).call(this, e)
    }
    function Cu(e) {
        return Math.max(0, +e || 0)
    }
    function Su(e) {
        var t, n = Object.create(wu);
        return Object.freeze(V.call(n, {
            time: {
                getter: function() {
                    return t
                },
                setter: function(e) {
                    t = Cu(e)
                }
            }
        }), n.time = e)
    }
    function ju(e) {
        var t, n, r, o = N(e) ? e : (t = {},
        n = (D(e) ? "callback" : P(e) && "autostart") || "duration",
        r = e,
        n in t ? Object.defineProperty(t, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = r,
        t), a = o.callback, i = o.duration, c = o.autostart, u = void 0 !== c && c;
        return M(Object.create(null), {
            autostart: !0 === u,
            callback: x(a),
            duration: Cu(Math.ceil(parseFloat(i)))
        })
    }
    function Tu(e) {
        var t, n, r = N(e) ? e : {}, o = r.create, a = r.release, i = r.elapsed;
        return [o, a, i].every(D) ? {
            invisible: function() {
                !function() {
                    t || (t = "__".concat(btoa(String(Math.random())).replace(/[+=\/]/g, "").slice(-3), "__"));
                    o(t, n = Date.now())
                }(),
                dispatchEvent(new CustomEvent(Eu,{
                    bubbles: !1,
                    cancelable: !1
                }))
            },
            visible: function() {
                var e, r, o, c = +i(t, Date.now());
                if (c) {
                    var u = Object.create(V((o = function() {
                        return c
                    }
                    ,
                    (r = Ou)in (e = {}) ? Object.defineProperty(e, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = o,
                    e), !0));
                    Object.freeze(M(u, {
                        exact: c,
                        seconds: Au(c),
                        timestamp: n
                    })),
                    dispatchEvent(new CustomEvent(_u,{
                        detail: u,
                        bubbles: !1,
                        cancelable: !1
                    }))
                }
                !function() {
                    t && a(t, Date.now());
                    t = n = void 0
                }()
            }
        } : {
            invisible: j,
            visible: j
        }
    }
    var Ru, Iu = !0, Pu = ie.performance && Tu({
        create: function(e) {
            return performance.mark(e)
        },
        release: function(e) {
            return performance.clearMarks(e)
        },
        elapsed: function(e) {
            var t = performance.getEntriesByType("mark").filter((function(t) {
                return t.name === e
            }
            ))[0];
            if (t)
                return performance.now() - t.startTime
        }
    }) || ie.localStorage && Tu({
        create: function(e, t) {
            return localStorage.setItem(e, t)
        },
        release: function(e) {
            return localStorage.removeItem(e)
        },
        elapsed: function(e, t) {
            var n = localStorage.getItem(e);
            if (n)
                return t - n
        }
    }) || Tu({
        create: function(e, t) {
            Ru = t
        },
        release: function() {
            Ru = void 0
        },
        elapsed: function(e, t) {
            if (Ru)
                return t - Ru
        }
    }), Du = Pu.invisible, Nu = Pu.visible, Mu = function() {
        Iu && (Iu = !1,
        Du())
    }, ku = function() {
        !Iu && (Iu = !0,
        Nu())
    }, xu = function(e) {
        return e ? "".concat(e, "Hidden") : "hidden"
    }, Lu = function() {
        for (var e = 0, t = ["moz", "ms", "o", "webkit"]; e < t.length; e++) {
            var n = t[e];
            if (xu(n)in document)
                return n
        }
        return null
    }(), $u = xu(Lu), Uu = "".concat(Lu || "", "visibilitychange");
    function Vu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Fu(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function Bu(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Gu(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = Hu(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, i = !0, c = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return i = e.done,
                e
            },
            e: function(e) {
                c = !0,
                a = e
            },
            f: function() {
                try {
                    i || null == n.return || n.return()
                } finally {
                    if (c)
                        throw a
                }
            }
        }
    }
    function Hu(e, t) {
        if (e) {
            if ("string" == typeof e)
                return zu(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? zu(e, t) : void 0
        }
    }
    function zu(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    document.addEventListener(Uu, (function() {
        return (document[$u] ? Mu : ku)()
    }
    ), !1),
    document.addEventListener("focus", ku, !1),
    document.addEventListener("blur", Mu, !1),
    window.addEventListener("focus", ku, !1),
    window.addEventListener("blur", Mu, !1);
    var Wu = function() {
        var e = new Set
          , t = Symbol("subscription_callback")
          , n = Object.freeze(M(Object.create(null), {
            unsubscribe: function() {
                var n = this[t];
                n && e.has(n) && e.delete(n)
            }
        }));
        function r() {
            var t = !1
              , n = function() {
                t = !0
            };
            return (r = function() {
                t = !1;
                for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
                    o[a] = arguments[a];
                var i, c = Gu(e.values());
                try {
                    for (c.s(); !(i = c.n()).done; ) {
                        var u = i.value;
                        if (!0 === t)
                            break;
                        try {
                            D(u) && u.apply(void 0, o.concat([n]))
                        } catch (e) {
                            console.error(e)
                        }
                    }
                } catch (e) {
                    c.e(e)
                } finally {
                    c.f()
                }
            }
            ).apply(void 0, arguments)
        }
        return [r, function(r) {
            return D(r) && e.add(r),
            Object.freeze(Object.create(n, Bu({}, t, {
                value: r
            })))
        }
        , function(e) {
            (function(e) {
                if (N(e))
                    try {
                        return D(Object.getPrototypeOf) ? Object.getPrototypeOf(e) : U(e, "__proto__") || U(e, "constructor.prototype")
                    } catch (e) {}
            }
            )(e) === n && e.unsubscribe()
        }
        ]
    }()
      , Ku = function(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || Hu(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(Wu, 3)
      , qu = Ku[0]
      , Yu = Ku[1]
      , Zu = Ku[2];
    addEventListener(_u, (function(e) {
        var t = e.detail;
        if (N(t) && e.target === self) {
            var n = t.exact
              , r = Fu(t, ["exact"]);
            n && n === t.$0x1 && qu(Object.freeze(M(Object.create(null), function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Vu(Object(n), !0).forEach((function(t) {
                        Bu(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vu(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                exact: n
            }, r))))
        }
    }
    ));
    var Qu = Object.freeze(M(Object.create(null), {
        registerCallback: Yu,
        unregisterCallback: Zu
    }));
    function Xu(e) {
        var t = N(e) ? e : {}
          , n = t.tick
          , r = t.updater;
        return function(e) {
            if (!D(n))
                return !1;
            var t = null
              , o = 0
              , a = 0
              , i = !1
              , c = !1
              , u = ju(e)
              , l = u.callback
              , s = u.duration
              , f = u.autostart;
            function d() {
                function e(e) {
                    if (!0 !== c) {
                        var t = (N(e) ? e : {}).seconds
                          , n = void 0 === t ? 0 : t
                          , r = Math.floor(n);
                        o += r,
                        a = setTimeout(u, 1e3 * (n - r)),
                        c = !0
                    }
                }
                function u() {
                    i || (f(),
                    ++o && !0 === n({
                        current: o,
                        duration: s
                    }) ? a = setTimeout(u, 1e3) : (h(),
                    i = !0,
                    l()))
                }
                function f() {
                    if (D(r))
                        return (f = function() {
                            return r({
                                current: o,
                                duration: s
                            })
                        }
                        )()
                }
                return (d = function() {
                    e(),
                    t = Qu.registerCallback(e),
                    addEventListener(Eu, p)
                }
                ).call(this)
            }
            function p() {
                a && clearTimeout(a),
                a = 0,
                c = !1
            }
            function m(e) {
                if (!i)
                    return e = Cu(Math.ceil(e)),
                    s += e,
                    e
            }
            function h() {
                if (!i)
                    return !1 !== c && (t && Qu.unregisterCallback(t),
                    t = null,
                    removeEventListener(Eu, p),
                    p()),
                    !0
            }
            function y() {
                if (!i && !0 !== c)
                    return d(),
                    !0
            }
            s = s || 60;
            var b = M(Object.create(null), {
                pause: function() {
                    return h.apply(void 0, arguments) || !1
                },
                play: function() {
                    return y.apply(void 0, arguments) || !1
                },
                stop: function() {
                    return !!h.apply(void 0, arguments) && (i = !0)
                },
                extend: function() {
                    var e = m.apply(void 0, arguments);
                    return null == e ? null : e
                }
            });
            return V.call(b, {
                ticking: function() {
                    return !!a
                }
            }),
            f && y(),
            b
        }
    }
    function Ju(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function el(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ju(Object(n), !0).forEach((function(t) {
                tl(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ju(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function tl(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function nl(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, a = Object.keys(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                n = a[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function rl(e) {
        function t(e) {
            var t = N(this) ? this : {};
            return Xu({
                tick: function(e) {
                    return e.current <= e.duration
                },
                updater: function(e) {
                    var n = e.current
                      , r = Cu(e.duration - n);
                    t.callbacks && t.callbacks.forEach((function(e) {
                        return e(r)
                    }
                    ))
                }
            })(e)
        }
        return rl = function(e) {
            var n, r = [], o = ju(e);
            n = o.callback,
            e = el(el({}, e = nl(o, ["callback"])), {}, {
                callback: function() {
                    r.length = 0,
                    r = void 0,
                    n()
                }
            });
            var a = t.call(V({
                callbacks: function() {
                    return r
                }
            }), e);
            if (N(a))
                return M(a, {
                    addTickCallback: function(e) {
                        var t = D(e);
                        return t && (r = G(r, e)),
                        t
                    },
                    removeTickCallback: function(e) {
                        var t = r && r.indexOf(e) >= 0;
                        return t && (r = H(r, e)),
                        t
                    }
                });
            return null
        }
        ,
        rl(e)
    }
    function ol(e) {
        var t, n, r = N(e) ? e : {}, o = r.duration, a = r.onClear, i = r.onContinue, c = r.onExtend, u = r.onFinish, l = r.onHalt, s = r.onStart, f = r.onTick;
        function d(e) {
            f(n = Su(e))
        }
        function p() {
            t = void 0,
            u()
        }
        o = Su(o),
        a = x(a),
        i = x(i),
        c = x(c),
        u = x(u),
        l = x(l),
        s = x(s),
        f = x(f);
        var m = Object.freeze(M(Object.create(null), {
            clear: function() {
                var e = !1;
                try {
                    (e = Boolean(N(this.$timer) && this.$timer.stop())) && (t = void 0,
                    n = null,
                    a())
                } finally {
                    return e
                }
            },
            extend: function(e) {
                var t = !1;
                try {
                    e = Math.min(Cu(Math.ceil(e)), this.duration.time),
                    (t = Boolean(N(this.$timer) && e && (e = this.$timer.extend(e)))) && c(Su(e))
                } catch (e) {
                    console.error(e)
                } finally {
                    return t
                }
            },
            halt: function() {
                var e = !1;
                try {
                    (e = Boolean(N(this.$timer) && this.$timer.pause())) && l()
                } finally {
                    return e
                }
            },
            start: function() {
                var e = !1
                  , n = s;
                if (N(this.$timer)) {
                    if (this.$timer.ticking)
                        return !1;
                    n = i
                } else
                    (t = rl({
                        callback: p,
                        duration: this.duration.time
                    })).addTickCallback(d);
                try {
                    (e = Boolean(this.$timer.play())) && n()
                } finally {
                    return e
                }
            }
        }));
        return Object.freeze(V.call(Object.create(m), {
            $timer: function() {
                return t
            },
            current: function() {
                return n
            },
            duration: function() {
                return o
            }
        }))
    }
    function al(e, t) {
        if (!N(e) || !Object.isExtensible(e))
            throw new Error("Cannot setup countdown timer without appropriate context object.");
        var n = N(t) ? t : {}
          , r = n.duration
          , o = n.onClear
          , a = n.onContinue
          , i = n.onExtend
          , c = n.onFinish
          , u = n.onHalt
          , l = n.onStart
          , s = n.onTick;
        return M(e, {
            $timer: ol({
                duration: r,
                onClear: o = x(o),
                onContinue: a = x(a),
                onExtend: i = x(i),
                onFinish: c = x(c),
                onHalt: u = x(u),
                onStart: l = x(l),
                onTick: s = x(s)
            })
        })
    }
    function il() {
        var e = this
          , t = this.$inputs
          , n = this.$timer;
        return il = Xo({
            NAME: "USSD_CODE_VIEW",
            mutables: {
                ussdCode: "USSD_CODE",
                timerCurrent: "CURRENT_TIME"
            },
            constants: {
                hasBackAction: !0,
                instruction: "Dial the USSD code below on your mobile phone to complete the payment",
                get selectedBank() {
                    return U(t, "[bank].value")
                },
                get timerDuration() {
                    return n.duration
                }
            },
            back: function() {
                e.INIT_VIEW((function() {
                    return t.$reset()
                }
                ))
            }
        }).call(this)
    }
    function cl(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return ul(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return ul(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function ul(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function ll() {
        var e, t = this, n = this.$charge, r = this.$inputs, o = this.$timer;
        return ll = Xo({
            NAME: "USSD_INIT_VIEW",
            inputs: ["bank"],
            constants: {
                hasBackAction: !1,
                instruction: "Please choose your bank to begin payment"
            },
            next: function() {
                var a, i, c, u, l = U(r, "[bank].value.code");
                l && (e === l && t.USSD_CODE ? il && il.activate() : (a = e = l,
                o && o.clear(),
                n.init({
                    data: {
                        accountbank: a,
                        accountnumber: "00000",
                        orderRef: (i = cl(String(1e7 * Math.random()).split("."), 2),
                        c = i[0],
                        u = i[1],
                        String().concat(Date.now(), c.substr(-3), u.substr(0, 3)))
                    }
                })))
            }
        }).call(this)
    }
    var sl = [ll, il];
    var fl = Object.freeze({
        __proto__: null,
        METHOD: "ussd",
        METHOD_NAME: "USSD",
        CHARGE_MODE: 0,
        VIEWS: sl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.USSD_CODE && (il || (e.USSD_CODE = null)) || ll;
                    t && t.activate((function() {
                        t === il && e.CURRENT_TIME && e.$charge.poll(e.pollConfig)
                    }
                    ))
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_ussd: !0,
                payment_type: "USSD"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "banks.ussd") || []
              , r = ur.apply(void 0, [Object.create(null)].concat(["CURRENT_TIME", "USSD_CODE"]));
            return r.pollConfig = {
                onBegin: function() {
                    r.$timer.start()
                },
                onCancel: function() {
                    r.pollConfig.onComplete()
                },
                onSuccessful: function() {
                    ja && ja.activate.call(r)
                },
                onComplete: function() {
                    r.USSD_CODE = null,
                    r.$timer.clear()
                }
            },
            r.$subscribe("USSD_CODE", (function(e, t) {
                setTimeout((function() {
                    !t && t !== e && e && il && il.activate((function() {
                        r.$charge.poll(r.pollConfig)
                    }
                    ))
                }
                ), 0)
            }
            )),
            eu(r, {
                bank: {
                    options: n,
                    selector: Fr.bind(r, n)
                }
            }),
            M(r, {
                TIMER_DURATION: 300,
                INIT_VIEW: function(e) {
                    ll && (r.USSD_CODE = null,
                    ll.activate(e))
                }
            }),
            al(r, {
                duration: 300,
                onClear: function() {
                    r.$charge.cancel()
                },
                onTick: function() {
                    r.CURRENT_TIME = r.$timer.current
                },
                onFinish: function() {
                    r.USSD_CODE = null,
                    r.$charge.cancel() && (ll && ll.activate(),
                    setTimeout((function() {
                        return r.dispatch(Ee.actions.updateErrorMessage("ussd.code.expiry.error", 20))
                    }
                    ), 100))
                }
            })
        }
    });
    function dl() {
        var e = this.$inputs;
        return dl = Xo({
            NAME: "MPESA_CONFIRM_VIEW",
            mutables: {
                fallbackDetails: "FALLBACK_DETAILS",
                instruction: "MPESA_INSTRUCTION",
                secondaryInstruction: "MPESA_SECONDARY_INSTRUCTION"
            },
            constants: {
                hasBackAction: !1,
                get phone() {
                    return U(e, "[phone].value")
                },
                get selectedNetwork() {
                    return U(e, "[network].value")
                }
            }
        }).call(this)
    }
    function pl() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return pl = Xo({
            NAME: "MPESA_INIT_VIEW",
            inputs: ["network", "phone"],
            constants: {
                hasBackAction: !1
            },
            next: function() {
                var r = U(n, "[network].value")
                  , o = U(n, "[phone].value");
                o && N(r) && t.init({
                    data: {
                        phonenumber: o,
                        network: r.identifier
                    },
                    onBegin: function() {
                        e.mpesaOverrideTimeout && clearTimeout(e.mpesaOverrideTimeout),
                        e.mpesaOverrideTimeout = null,
                        e.mpesaPollingCompleted = !1
                    },
                    onRequireValidation: function() {
                        dl && dl.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {
                                    e.mpesaOverrideTimeout && clearTimeout(e.mpesaOverrideTimeout),
                                    e.mpesaPollingCompleted = !0
                                }
                            })
                        }
                        ))
                    }
                })
            }
        }).call(this)
    }
    var ml = [pl, dl];
    var hl = Object.freeze({
        __proto__: null,
        METHOD: "mpesa",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: ml,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    pl && pl.activate()
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mpesa: !0,
                is_mpesa_lipa: !0,
                payment_type: "mpesa"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "mobilemoney_networks[KE]")
              , r = ur.apply(void 0, [Object.create(null)].concat(["FALLBACK_DETAILS", "MPESA_INSTRUCTION", "MPESA_SECONDARY_INSTRUCTION"]));
            return eu(r, {
                phone: U(e, "phone") || null,
                network: {
                    options: n,
                    selector: Cr.bind(r, n),
                    defaultValue: U(e, "mobilemoney_network") || null
                }
            }),
            M(r, {
                $resetContext: function() {
                    r.FALLBACK_DETAILS = r.MPESA_INSTRUCTION = r.MPESA_SECONDARY_INSTRUCTION = null,
                    r.mpesaOverrideTimeout && clearTimeout(r.mpesaOverrideTimeout),
                    r.mpesaOverrideTimeout = null,
                    r.mpesaPollingCompleted = !1
                },
                INIT_VIEW: function(e) {
                    pl && (r.$resetContext(),
                    pl.activate(e))
                }
            })
        }
    });
    function yl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function bl(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? yl(Object(n), !0).forEach((function(t) {
                vl(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yl(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function vl(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function gl() {
        var e, t, n = this.$charge, r = (e = !1,
        t = null,
        function() {
            return !0 !== e && (e = !0) ? po().then((function(e) {
                try {
                    var n = e.billing_metadata;
                    N(n) && (t = Object.create(null),
                    Object.keys(n).forEach((function(e) {
                        void 0 !== n[e] && (t[e] = n[e])
                    }
                    )),
                    Object.freeze(t))
                } catch (e) {}
                return t
            }
            )) : t
        }
        );
        return gl = Xo({
            NAME: "PAYPAL_INIT_VIEW",
            constants: {
                hasBackAction: !1
            },
            next: function() {
                Promise.resolve(r()).then((function(e) {
                    n.init({
                        data: N(e) ? bl({}, e) : null
                    })
                }
                ))
            }
        }).call(this)
    }
    var Ol = [gl];
    var _l = Object.freeze({
        __proto__: null,
        METHOD: "paypal",
        METHOD_NAME: "Paypal",
        CHARGE_MODE: 1,
        VIEWS: Ol,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || gl;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "paypal"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            M(n, {
                INIT_VIEW: function(e) {
                    gl && gl.activate(e)
                }
            })
        }
    });
    function El(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , a = void 0;
            try {
                for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return wl(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return wl(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function wl(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function Al() {
        var e = this
          , t = this.$inputs
          , n = this.$charge
          , r = this.dispatch;
        return function() {
            var o = U(t, "[bank].value.code") || null;
            if ("232" === o)
                return r(Na.actions.on()),
                void setTimeout((function() {
                    var t = {
                        onCancel: function() {
                            t.onComplete()
                        },
                        onFailure: function(e) {},
                        onSuccessful: function() {
                            ja && ja.activate.call(e)
                        },
                        onComplete: function() {}
                    };
                    n.poll(t)
                }
                ), 1e4);
            var a = Aa(this.data, "validateInstruction").validateInstruction
              , i = Aa(this.data, "validateInstructions").validateInstructions;
            if (N(i)) {
                var c = i.valparams;
                if (1 === (c = B(c)).length && String(c[0]).toUpperCase().indexOf("OTP") >= 0) {
                    if (e.VALIDATE_INSTRUCTION = U(i, "instruction") || "",
                    ["044", "101"].indexOf(o) >= 0) {
                        var u = El(String(a).match(Rt) || [], 2)[1];
                        if (u) {
                            var l = U(t, "[account_number].value") || null;
                            l = I(l) ? l.replace(/^(\d{3})(\d+?)(\d{4})$/, (function(e, t, n, r) {
                                return "".concat(t).concat(n.replace(/./g, "*")).concat(r)
                            }
                            )) : "your account",
                            e.VALIDATE_INSTRUCTION = "Dial ".concat(u, " on the mobile number registered with ").concat(l, " to get your OTP.")
                        }
                    }
                    e.SHOULD_VALIDATE_CHARGE = !1,
                    e.SHOULD_VALIDATE_CHARGE = !0
                }
            }
        }
    }
    function Cl() {
        var e = this
          , t = this.DATA
          , n = this.$charge;
        switch (this.$inputs,
        U(t, "currency") || "ZAR") {
        case "EUR":
        case "GBP":
            var r = U(e.DATA, "phone")
              , o = U(e.DATA, "redirect_url")
              , a = {
                payment_type: "account-ach-uk",
                is_token_io: 1
            };
            r && (a.phonenumber = r),
            a.redirect_url = null !== o ? o : "#checkout:no_json_render",
            n.init({
                data: a
            });
            break;
        case "ZAR":
            var i = {
                payment_type: "account",
                phonenumber: U(e.DATA, "phone"),
                is_mono: !0
            }
              , c = function() {
                return setTimeout((function() {
                    Sl && Sl.activate.call(e)
                }
                ), 0)
            };
            e.CAN_RESEND_OTP = !1,
            n.init({
                data: i,
                onError: c,
                onFailed: c,
                onRequireValidation: Al.call(e)
            });
            break;
        case "USD":
            n.init({
                data: {
                    country: "US",
                    is_us_bank_charge3: !0,
                    ach_redirect_url: new URL("/usach/complete").href
                }
            });
            break;
        case "ZAR":
            n.init({
                data: {
                    country: "ZA",
                    is_sa_call_pay: !0
                }
            })
        }
    }
    function Sl() {
        var e = this;
        return Sl = Xo({
            NAME: "BANK_INIT_VIEW",
            next: function() {
                return Cl.call(e)
            },
            afterSetup: function() {
                e._subscribeInputsOnce()
            }
        }).call(this)
    }
    function jl() {
        var e = this
          , t = this.DATA
          , n = this.$charge
          , r = this.$inputs;
        return jl = Xo({
            NAME: "BANK_OTP_VIEW",
            inputs: ["otp"],
            mutables: {
                instruction: "VALIDATE_INSTRUCTION",
                canResendOTP: "CAN_RESEND_OTP"
            },
            constants: {
                resendOTP: function() {
                    return !0 === e.CAN_RESEND_OTP ? Cl.call(e) : Promise.resolve(!1)
                }
            },
            next: function() {
                var t = (N(e.reference) ? e.reference : {}).charge
                  , o = void 0 === t ? null : t
                  , a = U(r, "[otp].value")
                  , i = U(r, "[bank].value.code");
                if (a) {
                    var c = {
                        otp: a,
                        transactionreference: o,
                        validateparameter: "OTP"
                    };
                    ["044", "050"].indexOf(i) >= 0 && (c.use_access = !0),
                    n.validate({
                        data: c,
                        onBegin: function() {
                            e.SHOULD_VALIDATE_CHARGE = !1
                        },
                        onRequireValidation: Al.call(e),
                        onValidateSuccessful: function() {
                            ja && ja.activate.call(e)
                        },
                        onComplete: function() {
                            e.clearResendTimer()
                        }
                    })
                }
            },
            back: function() {
                "ZAR" === (U(t, "currency") || "ZAR") && (Sl && Sl.activate(),
                r.$reset())
            }
        }).call(this)
    }
    var Tl = [Sl, jl];
    var Rl = Object.freeze({
        __proto__: null,
        METHOD: "account",
        METHOD_NAME: "Bank",
        CHARGE_MODE: 5,
        VIEWS: Tl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || Sl;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            if (!this.SHOULD_VALIDATE_CHARGE)
                return {
                    payment_type: "account"
                }
        },
        getViewsContext: function(e, t) {
            var n, r, o = U(e, "currency") || "ZAR", a = U(e, "banks.account") || [], i = ur.apply(void 0, [Object.create(null)].concat(["CAN_RESEND_OTP", "REDIRECT_URL", "VALIDATE_INSTRUCTION", "SHOULD_VALIDATE_CHARGE"]));
            return eu(i, {
                otp: null,
                account_bvn: c(["033"]),
                account_dob: c(["033", "057"]),
                account_number: c(["044", "050", "033", "232", "057", "215", "101"]),
                account_otp: c(["232"]),
                account_phone: c(["050", "232", "215"], U(e, "phone") || null),
                bank: {
                    options: a,
                    selector: Fr.bind(i, a),
                    available: function() {
                        return "ZAR" === o
                    }
                }
            }),
            i._subscribeInputsOnce = (r = !1,
            function() {
                !0 !== r && (r = !0) && i.$inputs.$subscribe("bank", (function(e, t) {
                    e !== t && i.dispatch(Ee.actions.updateErrorMessage())
                }
                ))
            }
            ),
            i.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(i)
                }
                ), 0)
            }
            )),
            i.$subscribe("SHOULD_VALIDATE_CHARGE", (function(e, t) {
                setTimeout((function() {
                    t || t === e || !0 !== e || (jl && jl.activate(),
                    i.clearResendTimer(),
                    n = setTimeout((function() {
                        return i.CAN_RESEND_OTP = !0
                    }
                    ), 9e4))
                }
                ), 0)
            }
            )),
            M(i, {
                INIT_VIEW: function(e) {
                    Sl && Sl.activate(e)
                },
                clearResendTimer: function() {
                    n && clearTimeout(n),
                    n = null,
                    i.CAN_RESEND_OTP = !1
                }
            });
            function c(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!(e instanceof Array))
                    if (1 === arguments.length) {
                        var n = [[], e];
                        e = n[0],
                        t = n[1]
                    } else if (t instanceof Array) {
                        var r = [t, e];
                        e = r[0],
                        t = r[1]
                    } else
                        e = [];
                return e = B(e),
                {
                    defaultValue: t = t || null,
                    available: function() {
                        var t = U(i.$inputs, "[bank].value.code") || null;
                        return "ZAR" === o && e.indexOf(t) >= 0
                    }
                }
            }
        }
    });
    function Il() {
        var e = this.$charge
          , t = this.$inputs;
        return Il = Xo({
            NAME: "FAWRYPAY_INIT_VIEW",
            inputs: ["phone"],
            constants: {
                hasBackAction: !1
            },
            next: function() {
                var n = U(t, "[phone].value");
                n && e.init({
                    data: {
                        phonenumber: n
                    }
                })
            }
        }).call(this)
    }
    function Pl() {
        var e = this
          , t = this.$inputs;
        return Pl = Xo({
            NAME: "FAWRYPAY_CONFIRM_VIEW",
            constants: {
                hasBackAction: !1,
                get phone() {
                    return U(t, "[phone].value")
                },
                get reference() {
                    return e.FAWRY_REFERENCE
                }
            },
            next: function() {}
        }).call(this)
    }
    var Dl = [Il, Pl];
    var Nl = Object.freeze({
        __proto__: null,
        METHOD: "fawrypay",
        METHOD_NAME: "Fawry",
        CHARGE_MODE: 1,
        VIEWS: Dl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.FAWRY_REFERENCE && (Pl || e.$resetContext()) || Il;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                country: "EG",
                currency: "EGP",
                network: "MTN",
                payment_type: "fawry_pay"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur(Object.create(null), "FAWRY_REFERENCE");
            return eu(n, {
                phone: U(e, "phone") || null
            }),
            n.$subscribe("FAWRY_REFERENCE", (function(e, t) {
                setTimeout((function() {
                    !t && t !== e && e && Pl && Pl.activate()
                }
                ), 0)
            }
            )),
            M(n, {
                $resetContext: function() {
                    n.FAWRY_REFERENCE = null
                },
                INIT_VIEW: function(e) {
                    n.$resetContext(),
                    Il && Il.activate(e)
                }
            })
        }
    });
    function Ml() {
        var e = this.$charge;
        return Ml = Xo({
            NAME: "APPLEPAY_INIT_VIEW",
            constants: {
                hasBackAction: !1
            },
            next: function() {
                e.init()
            }
        }).call(this)
    }
    var kl = [Ml];
    var xl = Object.freeze({
        __proto__: null,
        METHOD: "applepay",
        METHOD_NAME: "Apple Pay",
        CHARGE_MODE: 1,
        VIEWS: kl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || Ml;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "applepay"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            M(n, {
                INIT_VIEW: function(e) {
                    Ml && Ml.activate(e)
                }
            })
        }
    });
    function Ll() {
        var e = this.$charge;
        return Ll = Xo({
            NAME: "GOOGLEPAY_INIT_VIEW",
            constants: {
                hasBackAction: !1
            },
            next: function() {
                e.init()
            }
        }).call(this)
    }
    var $l = [Ll];
    var Ul = Object.freeze({
        __proto__: null,
        METHOD: "googlepay",
        METHOD_NAME: "Google Pay",
        CHARGE_MODE: 1,
        VIEWS: $l,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || Ll;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "googlepay"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            M(n, {
                INIT_VIEW: function(e) {
                    Ll && Ll.activate(e)
                }
            })
        }
    });
    function Vl() {
        var e = this.$charge
          , t = this.$inputs;
        return Vl = Xo({
            NAME: "1VOUCHER_INIT_VIEW",
            inputs: ["phone", "voucher"],
            constants: {
                hasBackAction: !1
            },
            next: function() {
                var n = U(t, "[voucher].value")
                  , r = U(t, "[phone].value");
                n && r && e.init({
                    data: {
                        pin: n,
                        phonenumber: r
                    }
                })
            }
        }).call(this)
    }
    function Fl() {
        var e = this
          , t = this.$inputs;
        return Fl = Xo({
            NAME: "1VOUCHER_CONFIRM_VIEW",
            constants: {
                hasBackAction: !1,
                get changeVoucher() {
                    return e.CHANGE_VOUCHER
                },
                get phone() {
                    return U(t, "[phone].value")
                }
            },
            next: function() {
                ja && ja.activate.call(e)
            }
        }).call(this)
    }
    var Bl = [Vl, Fl];
    var Gl = Object.freeze({
        __proto__: null,
        METHOD: "1voucher",
        METHOD_NAME: "1Voucher",
        CHARGE_MODE: 0,
        VIEWS: Bl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    Vl && Vl.activate()
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                country: "ZA",
                is_flash_voucher: !0,
                payment_type: "1voucher"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["CHANGE_VOUCHER"]));
            return n.$subscribe("CHANGE_VOUCHER", (function(e, t) {
                setTimeout((function() {
                    t || t === e || (!1 === e ? ja && ja.activate.call(n) : Fl && Fl.activate())
                }
                ), 0)
            }
            )),
            eu(n, {
                voucher: null,
                phone: U(e, "phone") || null
            }),
            M(n, {
                INIT_VIEW: function(e) {
                    Vl && Vl.activate(e)
                }
            })
        }
    });
    function Hl() {
        var e = this.DATA
          , t = this.dispatch
          , n = this.$charge;
        return Hl = Xo({
            NAME: "BANK_TRANSFER_INIT_VIEW",
            next: function() {
                switch (U(e, "currency") || "ZAR") {
                case "EUR":
                case "GBP":
                    var r = {
                        is_bank_transfer: void 0,
                        is_uk_bank_charge2: !0,
                        accountname: "Account Name",
                        payment_type: "account"
                    };
                    n.init({
                        data: r
                    });
                    break;
                case "ZAR":
                case "USD":
                    var o = U(e, "expires");
                    o && (o < 60 || o > 31536e3) ? setTimeout((function() {
                        return t(Ee.actions.updateErrorMessage("bank.transfer.expiry.error"))
                    }
                    ), 100) : n.init()
                }
            }
        }).call(this)
    }
    function zl() {
        var e = this
          , t = this.$charge
          , n = this.$timer;
        return e.pollConfig = {
            onBegin: function() {
                n.start()
            },
            onCancel: function() {
                e.pollConfig.onComplete()
            },
            onFailure: function(e) {},
            onSuccessful: function() {
                ja && ja.activate.call(e)
            },
            onComplete: function() {
                e.TRANSFER_DETAILS = null,
                n.clear()
            }
        },
        zl = Xo({
            NAME: "BANK_TRANSFER_DETAILS_VIEW",
            mutables: {
                timerCurrent: "CURRENT_TIME"
            },
            constants: {
                get details() {
                    return e.TRANSFER_DETAILS
                },
                instruction: "Proceed to your bank app to complete this transfer",
                get timerDuration() {
                    return n.duration
                }
            },
            next: function() {
                var n = U(e, "STATE.backgroundProcessing")
                  , r = U(e, "STATE.currency.current") || "ZAR";
                !1 === n && "ZAR" === r && t.poll(e.pollConfig)
            }
        }).call(this)
    }
    var Wl, Kl = [Hl, zl];
    var ql = Object.freeze({
        __proto__: null,
        METHOD: "banktransfer",
        METHOD_NAME: "Bank Transfer",
        CHARGE_MODE: 8,
        VIEWS: Kl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.TRANSFER_DETAILS && (zl || (e.TRANSFER_DETAILS = null)) || Hl;
                    Wl = e,
                    t && t.activate((function() {
                        t === zl && e.CURRENT_TIME && e.$charge.poll(e.pollConfig)
                    }
                    ))
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_bank_transfer: !0,
                payment_type: "banktransfer"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "currency") || "ZAR"
              , r = 60 * ("ZAR" === n ? 5 : 3)
              , o = ur.apply(void 0, [Object.create(null)].concat(["CURRENT_TIME", "TRANSFER_DETAILS"]));
            return o.$subscribe("TRANSFER_DETAILS", (function(e, t) {
                setTimeout((function() {
                    !t && t !== e && e && zl && zl.activate((function() {
                        "ZAR" === n && setTimeout((function() {
                            "banktransfer" === U(o, "STATE.method.current") && Wl.$charge.poll(Wl.pollConfig)
                        }
                        ), 6e4)
                    }
                    ))
                }
                ), 0)
            }
            )),
            M(o, {
                TIMER_DURATION: r,
                INIT_VIEW: function(e) {
                    Hl && Hl.activate(e)
                }
            }),
            al(o, {
                duration: r,
                onTick: function() {
                    o.CURRENT_TIME = o.$timer.current
                },
                onFinish: function() {
                    o.$charge.cancel() && (o.$timer && o.$timer.clear(),
                    o.CURRENT_TIME = null,
                    setTimeout((function() {
                        o.dispatch(Ee.actions.updateErrorMessage("TIMED_OUT"))
                    }
                    ), 100))
                }
            })
        }
    });
    function Yl() {
        var e = this.$charge;
        return Yl = Xo({
            NAME: "CRYPTO_INIT_VIEW",
            constants: {
                hasBackAction: !1
            },
            next: function() {
                e.init()
            }
        }).call(this)
    }
    var Zl = [Yl];
    var Ql = Object.freeze({
        __proto__: null,
        METHOD: "cryptocurrency",
        METHOD_NAME: "BitPay",
        CHARGE_MODE: 1,
        VIEWS: Zl,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || Yl;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "cryptocurrency"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            M(n, {
                INIT_VIEW: function(e) {
                    Yl && Yl.activate(e)
                }
            })
        }
    });
    function Xl() {
        var e = this
          , t = this.$inputs;
        return Xl = Xo({
            NAME: "MOMO_GHANA_CONFIRM_VIEW",
            constants: {
                get instructions() {
                    return e.MOMO_INSTRUCTIONS
                },
                get phone() {
                    return U(t, "[phone].value")
                },
                get selectedNetwork() {
                    return U(t, "[network].value")
                }
            }
        }).call(this)
    }
    function Jl(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (e.href) {
            var r = e.href.split("/").filter(Boolean);
            e.href.includes("lang-") || r.splice(4, 0, "lang-".concat(t));
            var o = r.join("/")
              , a = o.split("captcha")
              , i = "https://checkout.flutterwave.com"
              , c = new URL("captcha".concat(a[1]),i);
            return !0 === n && "https://checkout.flutterwave.com" === i && (c = new URL("captcha".concat(a[1]),e.origin)),
            e.href = c,
            e
        }
    }
    function es() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return es = Xo({
            NAME: "MOMO_GHANA_INIT_VIEW",
            inputs: ["network", "phone", "voucher"],
            next: function() {
                var r = U(n, "[network].value")
                  , o = U(n, "[phone].value")
                  , a = U(n, "[voucher].value") || null;
                o && N(r) && t.init({
                    data: {
                        phonenumber: o,
                        voucher: a,
                        network: r.identifier
                    },
                    onRequireValidation: function() {
                        Xl && Xl.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    },
                    onRequireRedirection: function() {
                        var t = U(e, "STATE.locale") || "en"
                          , n = U(e, "STATE.isTestMode") || !1;
                        try {
                            Jl(this.url, t, n)
                        } catch (e) {}
                    }
                })
            }
        }).call(this)
    }
    var ts = [es, Xl];
    var ns = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneyghana",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: ts,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || es;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mobile_money_gh: !0,
                payment_type: "mobilemoneygh"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "mobilemoney_networks[GH]")
              , r = ur.apply(void 0, [Object.create(null)].concat(["MOMO_INSTRUCTIONS", "REDIRECT_URL"]));
            return r.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(r)
                }
                ), 0)
            }
            )),
            eu(r, {
                voucher: {
                    defaultValue: null,
                    required: !1,
                    available: function() {
                        return "AIRTEL" === U(r.$inputs, "[network].value.identifier")
                    }
                },
                phone: U(e, "phone") || null,
                network: {
                    options: n,
                    selector: Cr.bind(r, n),
                    defaultValue: U(e, "mobilemoney_network") || null
                }
            }),
            r.$inputs.$subscribe("network", (function(e, t) {
                setTimeout((function() {
                    var n = r.STATE
                      , o = n.currency
                      , a = n.method;
                    t !== e && "GHS" === o.current && "mobilemoneyghana" === a.current && setTimeout((function() {
                        Dc()
                    }
                    ), 0)
                }
                ), 0)
            }
            )),
            M(r, {
                INIT_VIEW: function(e) {
                    es && es.activate(e)
                }
            })
        }
    });
    function rs() {
        var e = this.$charge
          , t = this.$inputs
          , n = this;
        return rs = Xo({
            NAME: "MOMO_FRANCO_INIT_VIEW",
            inputs: ["country", "network", "phone", "authorization_code"],
            next: function() {
                var r = U(t, "[country].value")
                  , o = U(t, "[network].value")
                  , a = U(t, "[phone].value")
                  , i = U(t, "[authorization_code].value");
                if (a && N(r)) {
                    var c = {
                        country: r.code,
                        network: U(o, "identifier") || null,
                        phonenumber: a
                    };
                    if ("BF" === c.country && "mobicash" !== c.network && (c.authorization_code = i),
                    ["SN", "CI"].includes(c.country) && "wave" === c.network) {
                        var u = U(n.DATA, "redirect_url");
                        c.redirect_url = null !== u ? u : "#checkout:no_json_render"
                    }
                    e.init({
                        data: c
                    })
                }
            }
        }).call(this)
    }
    function os() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return os = Xo({
            NAME: "MOMO_FRANCO_OTP_VIEW",
            inputs: ["otp"],
            constants: {
                get phone() {
                    return U(n, "[phone].value")
                },
                get selectedNetwork() {
                    return U(n, "[network].value")
                }
            },
            next: function() {
                var r = N(e.reference) ? e.reference : {}
                  , o = r.charge
                  , a = void 0 === o ? null : o
                  , i = r.order
                  , c = void 0 === i ? null : i
                  , u = U(n, "[otp].value");
                u && t.validate({
                    data: {
                        otp: u,
                        flw_reference: a,
                        transactionreference: c
                    },
                    onSuccessful: function() {
                        ja && ja.activate.call(e)
                    },
                    onComplete: function() {}
                })
            }
        }).call(this)
    }
    function as() {
        var e = this
          , t = this.$inputs;
        return as = Xo({
            NAME: "MOMO_FRANCO_CONFIRM_VIEW",
            constants: {
                get instruction() {
                    return e.CONFIRM_INSTRUCTION
                },
                get phone() {
                    return U(t, "[phone].value")
                },
                get selectedNetwork() {
                    return U(t, "[network].value")
                }
            }
        }).call(this)
    }
    var is = [rs, os, as];
    var cs = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneyfranco",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: is,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    rs && rs.activate((function() {
                        wr(e).then((function() {
                            e.$inputs.$update("country", null),
                            e.$inputs.$reset("country")
                        }
                        ))
                    }
                    ))
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return this.SHOULD_VALIDATE_CHARGE ? {
                momo_sn: !0
            } : {
                is_mobile_money_franco: !0,
                payment_type: "mobilemoneyfranco"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "mobilemoneyfranco_countries")
              , r = U(e, "currency")
              , o = n;
            ["XAF", "XOF"].indexOf(r) >= 0 && (o = n.filter((function(e) {
                return e.currency === r
            }
            )));
            var a = ur.apply(void 0, [Object.create(null)].concat(["NETWORKS", "CONFIRM_INSTRUCTION", "REDIRECT_URL", "SHOULD_VALIDATE_CHARGE"]));
            return a.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(a)
                }
                ), 0)
            }
            )),
            a.$subscribe("SHOULD_VALIDATE_CHARGE", (function(e, t) {
                setTimeout((function() {
                    t !== e && P(e) && (!0 === e ? os && os.activate() : as && as.activate((function() {
                        a.$charge.poll({
                            onCancel: function() {
                                this.onComplete()
                            },
                            onSuccessful: function() {
                                ja && ja.activate.call(a)
                            },
                            onComplete: function() {}
                        })
                    }
                    )))
                }
                ), 0)
            }
            )),
            a.$subscribe("NETWORKS", (function(e, t) {
                setTimeout((function() {
                    t !== e && (a.$inputs.$refresh("network"),
                    a.$inputs.$reset("network"))
                }
                ), 0)
            }
            )),
            eu(a, {
                phone: U(e, "phone") || null,
                country: {
                    options: o,
                    get selector() {
                        return Ar.bind(a, this.options)
                    },
                    defaultValue: U(e, "country") || null
                },
                network: {
                    get options() {
                        return a.NETWORKS
                    },
                    get selector() {
                        return Cr.bind(a, this.options)
                    },
                    defaultValue: U(e, "mobilemoney_network") || null,
                    available: i,
                    required: i
                },
                authorization_code: U(e, "authorization_code") || null
            }),
            a.$inputs.$subscribe("country", (function(t, n) {
                setTimeout((function() {
                    if (n !== t) {
                        var r = U(t, "[value].code") || null;
                        a.NETWORKS = r && U(e, "mobilemoney_networks[".concat(r, "]")),
                        setTimeout((function() {
                            r && void 0 === U(e, "mobilemoney_networks[".concat(r, "]")) && wr(a)
                        }
                        ), 3500)
                    }
                }
                ), 0)
            }
            )),
            a.$inputs.$subscribe("network", (function(e, t) {
                setTimeout((function() {
                    var n = a.STATE
                      , r = n.currency
                      , o = n.method;
                    t === e || "XOF" !== r.current && "XAF" !== r.current || "mobilemoneyfranco" !== o.current || setTimeout((function() {
                        Dc()
                    }
                    ), 0)
                }
                ), 0)
            }
            )),
            M(a, {
                INIT_VIEW: function(e) {
                    var t = U(a, "$$data.data.response_code");
                    ["00", "02"].includes(t) ? "02" === t && setTimeout((function() {
                        Jo && Jo.activate((function() {
                            a.$charge.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(a)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    }
                    ), 0) : rs && rs.activate(e)
                }
            });
            function i() {
                return U(a.NETWORKS, "length") > 0
            }
        }
    });
    function us() {
        var e = this.$inputs;
        return us = Xo({
            NAME: "MOMO_MALAWI_CONFIRM_VIEW",
            constants: {
                get phone() {
                    return U(e, "[phone].value")
                }
            }
        }).call(this)
    }
    function ls() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return ls = Xo({
            NAME: "MOMO_MALAWI_INIT_VIEW",
            inputs: ["phone"],
            next: function() {
                var r = U(n, "[phone].value");
                r && (Po.customerAttemptingCharge("Mobile money malawi"),
                t.init({
                    data: {
                        phonenumber: r
                    },
                    onRequireValidation: function() {
                        us && us.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    },
                    onRequireRedirection: function() {
                        var t = U(e, "STATE.locale") || "en"
                          , n = U(e, "STATE.isTestMode") || !1;
                        try {
                            Jl(this.url, t, n)
                        } catch (e) {}
                    }
                }))
            }
        }).call(this)
    }
    var ss = [ls, us];
    var fs = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneymalawi",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: ss,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || ls;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mobile_money_mw: !0,
                payment_type: "mobilemoneymw"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            eu(n, {
                phone: U(e, "phone") || null
            }),
            M(n, {
                INIT_VIEW: function(e) {
                    ls && ls.activate(e)
                }
            })
        }
    });
    function ds() {
        var e = this.$inputs;
        return ds = Xo({
            NAME: "MOMO_RWANDA_CONFIRM_VIEW",
            constants: {
                get phone() {
                    return U(e, "[phone].value")
                }
            }
        }).call(this)
    }
    function ps() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return ps = Xo({
            NAME: "MOMO_RWANDA_INIT_VIEW",
            inputs: ["phone"],
            next: function() {
                var r = U(n, "[phone].value");
                r && t.init({
                    data: {
                        phonenumber: r
                    },
                    onRequireValidation: function() {
                        ds && ds.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    },
                    onRequireRedirection: function() {
                        var t = U(e, "STATE.locale") || "en"
                          , n = U(e, "STATE.isTestMode") || !1;
                        try {
                            Jl(this.url, t, n)
                        } catch (e) {}
                    }
                })
            }
        }).call(this)
    }
    var ms = [ps, ds];
    var hs = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneyrwanda",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: ms,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || ps;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mobile_money_gh: !0,
                payment_type: "mobilemoneygh"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            eu(n, {
                phone: U(e, "phone") || null
            }),
            M(n, {
                INIT_VIEW: function(e) {
                    ps && ps.activate(e)
                }
            })
        }
    });
    function ys() {
        var e = this.$inputs;
        return ys = Xo({
            NAME: "MOMO_UGANDA_CONFIRM_VIEW",
            constants: {
                get phone() {
                    return U(e, "[phone].value")
                }
            }
        }).call(this)
    }
    function bs() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return bs = Xo({
            NAME: "MOMO_UGANDA_INIT_VIEW",
            inputs: ["phone"],
            next: function() {
                var r = U(n, "[phone].value");
                r && t.init({
                    data: {
                        phonenumber: r
                    },
                    onRequireValidation: function() {
                        ys && ys.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    },
                    onRequireRedirection: function() {
                        var t = U(e, "STATE.locale") || "en"
                          , n = U(e, "STATE.isTestMode") || !1;
                        try {
                            Jl(this.url, t, n)
                        } catch (e) {}
                    }
                })
            }
        }).call(this)
    }
    var vs = [bs, ys];
    var gs = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneyuganda",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: vs,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || bs;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mobile_money_gh: !0,
                payment_type: "mobilemoneygh"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            eu(n, {
                phone: U(e, "phone") || null
            }),
            M(n, {
                INIT_VIEW: function(e) {
                    bs && bs.activate(e)
                }
            })
        }
    });
    function Os() {
        var e = this.$inputs;
        return Os = Xo({
            NAME: "MOMO_ZAMBIA_CONFIRM_VIEW",
            constants: {
                get phone() {
                    return U(e, "[phone].value")
                },
                get selectedNetwork() {
                    return U(e, "[network].value")
                }
            }
        }).call(this)
    }
    function _s() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return _s = Xo({
            NAME: "MOMO_ZAMBIA_INIT_VIEW",
            inputs: ["network", "phone"],
            next: function() {
                var r = U(n, "[network].value")
                  , o = U(n, "[phone].value");
                o && N(r) && t.init({
                    data: {
                        phonenumber: o,
                        network: r.identifier
                    },
                    onRequireValidation: function() {
                        Os && Os.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    },
                    onRequireRedirection: function() {
                        var t = U(e, "STATE.locale") || "en"
                          , n = U(e, "STATE.isTestMode") || !1;
                        try {
                            Jl(this.url, t, n)
                        } catch (e) {}
                    }
                })
            }
        }).call(this)
    }
    var Es = [_s, Os];
    var ws = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneyzambia",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: Es,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || _s;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mobile_money_gh: !0,
                payment_type: "mobilemoneygh"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "mobilemoney_networks[ZM]")
              , r = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return r.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(r)
                }
                ), 0)
            }
            )),
            eu(r, {
                phone: U(e, "phone") || null,
                network: {
                    options: n,
                    selector: Cr.bind(r, n),
                    defaultValue: U(e, "mobilemoney_network") || null
                }
            }),
            r.$inputs.$subscribe("network", (function(e, t) {
                setTimeout((function() {
                    var n = r.STATE
                      , o = n.currency
                      , a = n.method;
                    t !== e && "ZMW" === o.current && "mobilemoneyzambia" === a.current && setTimeout((function() {
                        Dc()
                    }
                    ), 0)
                }
                ), 0)
            }
            )),
            M(r, {
                INIT_VIEW: function(e) {
                    _s && _s.activate(e)
                }
            })
        }
    });
    function As() {
        var e = this.$inputs;
        return As = Xo({
            NAME: "MOMO_TANZANIA_CONFIRM_VIEW",
            constants: {
                get phone() {
                    return U(e, "[phone].value")
                },
                get selectedNetwork() {
                    return U(e, "[network].value")
                }
            }
        }).call(this)
    }
    function Cs() {
        var e = this
          , t = this.$charge
          , n = this.$inputs;
        return Cs = Xo({
            NAME: "MOMO_TANZANIA_INIT_VIEW",
            inputs: ["phone", "network"],
            next: function() {
                var r = U(n, "[phone].value")
                  , o = U(n, "[network].value");
                r && t.init({
                    data: {
                        phonenumber: r,
                        network: o.identifier
                    },
                    onRequireValidation: function() {
                        As && As.activate((function() {
                            t.poll({
                                onCancel: function() {
                                    this.onComplete()
                                },
                                onSuccessful: function() {
                                    ja && ja.activate.call(e)
                                },
                                onComplete: function() {}
                            })
                        }
                        ))
                    },
                    onRequireRedirection: function() {
                        var t = U(e, "STATE.locale") || "en"
                          , n = U(e, "STATE.isTestMode") || !1;
                        try {
                            Jl(this.url, t, n)
                        } catch (e) {}
                    }
                })
            }
        }).call(this)
    }
    var Ss, js = [Cs, As];
    var Ts = Object.freeze({
        __proto__: null,
        METHOD: "mobilemoneytanzania",
        METHOD_NAME: "Mobile Money",
        CHARGE_MODE: 1,
        VIEWS: js,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(Ss = e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || Cs;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                is_mobile_money_tz: !0,
                payment_type: "mobilemoneytz"
            }
        },
        getViewsContext: function(e, t) {
            var n = U(e, "mobilemoney_networks[TZ]")
              , r = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL", "MOMO_INSTRUCTIONS"]));
            return r.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(r)
                }
                ), 0)
            }
            )),
            eu(r, {
                phone: U(e, "phone") || null,
                network: {
                    options: n,
                    selector: Cr.bind(r, n),
                    defaultValue: U(e, "mobilemoney_network") || null
                }
            }),
            r.$inputs.$subscribe("network", (function(e, t) {
                setTimeout((function() {
                    var n = r.STATE
                      , o = n.currency
                      , a = n.method;
                    t !== e && "TZS" === o.current && "mobilemoneytanzania" === a.current && setTimeout((function() {
                        Dc(),
                        _c.call(Ss)
                    }
                    ), 5)
                }
                ), 0)
            }
            )),
            M(r, {
                INIT_VIEW: function(e) {
                    Cs && Cs.activate(e)
                }
            })
        }
    });
    function Rs() {
        var e = this.$charge
          , t = U(this.$inputs, "eNairaPaymentOption[value]");
        switch (t.identifier) {
        case "QR":
            e.init({
                data: {
                    is_qr: !0
                }
            });
            break;
        case "TOKEN":
            e.init({
                data: {
                    is_token: !0
                }
            });
            break;
        case "DIRECT_WALLET_DEBIT":
            e.init()
        }
        Po.eNairaOptionSelected(t.label)
    }
    function Is() {
        var e = this;
        return Is = Xo({
            NAME: "ENAIRA_INIT_VIEW",
            inputs: ["eNairaPaymentOption"],
            constants: {
                hasBackAction: !1
            },
            next: function() {
                return Rs.call(e)
            }
        }).call(this)
    }
    function Ps() {
        var e = this
          , t = this.$charge;
        return Ps = Xo({
            NAME: "ENAIRA_QR_VIEW",
            mutables: {
                hasBackAction: "CAN_GO_BACK"
            },
            constants: {
                get qrcode() {
                    return e.QR_CODE
                },
                instruction: "Scan the QR Code below on your eNaira mobile app to complete the payment",
                resetView: function() {
                    t.cancel(),
                    e.cancelOption()
                }
            },
            next: function() {
                t.poll({
                    onBegin: function() {
                        e.CAN_GO_BACK = !1
                    },
                    onCancel: function() {
                        e.CAN_GO_BACK = !0
                    },
                    onSuccessful: function() {
                        ja && ja.activate.call(e)
                    },
                    onComplete: function() {
                        e.CAN_GO_BACK = !0
                    }
                })
            },
            back: function() {
                e.CAN_GO_BACK && e.INIT_VIEW()
            }
        }).call(this)
    }
    function Ds() {
        var e = this
          , t = this.$charge
          , n = this.$inputs
          , r = this.DATA;
        return Ds = Xo({
            NAME: "ENAIRA_OTP_VIEW",
            inputs: ["phone", "otp"],
            constants: {
                resetView: function() {
                    return e.cancelOption()
                }
            },
            next: function() {
                var o = (N(e.reference) ? e.reference : {}).charge
                  , a = void 0 === o ? null : o
                  , i = U(n, "[phone].value")
                  , c = U(n, "[otp].value")
                  , u = r.PBFPubKey;
                if (i && c) {
                    var l = {
                        otp: c,
                        is_enaira: 1,
                        PBFPubKey: u,
                        phonenumber: i,
                        transactionreference: a
                    };
                    Po.startEnairaTokenValidation(),
                    t.validate({
                        data: l,
                        onBegin: function() {
                            e.CAN_GO_BACK = !1
                        },
                        onValidateSuccessful: function() {
                            ja && ja.activate.call(e)
                        },
                        onComplete: function() {}
                    })
                }
            }
        }).call(this)
    }
    var Ns = [Is, Ps, Ds];
    var Ms = Object.freeze({
        __proto__: null,
        METHOD: "enaira",
        METHOD_NAME: "eNaira",
        CHARGE_MODE: 1,
        VIEWS: Ns,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.QR_CODE && (Ps || e.$resetContext()) || e.REDIRECT_URL && (mu || e.$resetContext()) || e.SHOULD_VALIDATE_CHARGE && (Ds || e.$resetContext()) || Is;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "enaira"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL", "CAN_GO_BACK", "QR_CODE", "SHOULD_VALIDATE_CHARGE"]));
            return eu(n, {
                otp: null,
                phone: U(e, "phone") || null,
                eNairaPaymentOption: {
                    options: Ir,
                    selector: Pr.bind(n, Ir),
                    defaultValue: Ir[0]
                }
            }),
            n.cancelOption = function() {
                n.$resetContext(),
                Is.activate.call(n)
            }
            ,
            n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            n.$subscribe("QR_CODE", (function(e, t) {
                setTimeout((function() {
                    !t && e && t !== e && Ps && Ps.activate()
                }
                ), 0)
            }
            )),
            n.CAN_GO_BACK = !0,
            n.$subscribe("SHOULD_VALIDATE_CHARGE", (function(e, t) {
                setTimeout((function() {
                    t || t === e || !0 !== e || (Ds && Ds.activate(),
                    n.CAN_GO_BACK = !0)
                }
                ), 0)
            }
            )),
            M(n, {
                $resetContext: function() {
                    n.$inputs.$reset("otp"),
                    n.$inputs.$reset("phone"),
                    n.CAN_GO_BACK = !1,
                    n.REDIRECT_URL = n.QR_CODE = n.SHOULD_VALIDATE_CHARGE = null
                },
                INIT_VIEW: function(e) {
                    !0 === U(n, "SHOULD_VALIDATE_CHARGE") && "TOKEN" === U(n.$inputs, "eNairaPaymentOption.value.identifier") || Is && (n.$resetContext(),
                    Is.activate(e))
                }
            })
        }
    });
    function ks() {
        var e = this.$charge;
        return ks = Xo({
            NAME: "OPAY_INIT_VIEW",
            constants: {
                hasBackAction: !1
            },
            next: function() {
                e.init()
            }
        }).call(this)
    }
    var xs = [ks];
    var Ls = Object.freeze({
        __proto__: null,
        METHOD: "opay",
        METHOD_NAME: "OPay",
        CHARGE_MODE: 1,
        VIEWS: xs,
        mount: function() {
            var e = this;
            return function(t) {
                _c.call(e, (function() {
                    var t = e.REDIRECT_URL && (mu || (e.REDIRECT_URL = null)) || ks;
                    t && t.activate.call(e)
                }
                )),
                Dc()
            }
        },
        getChargeData: function() {
            return {
                payment_type: "opay"
            }
        },
        getViewsContext: function(e, t) {
            var n = ur.apply(void 0, [Object.create(null)].concat(["REDIRECT_URL"]));
            return n.$subscribe("REDIRECT_URL", (function(e, t) {
                setTimeout((function() {
                    (!t || t !== e) && e instanceof URL && mu && mu.activate.call(n)
                }
                ), 0)
            }
            )),
            M(n, {
                INIT_VIEW: function(e) {
                    ks && ks.activate(e)
                }
            })
        }
    });
    function $s(e, t) {
        var n = t.dispatch
          , r = t.getState
          , o = this.CHARGE_MODE
          , a = this.getChargeData
          , i = (0,
        this.getViewsContext)(e, t) || Object.create(null)
          , c = M(Object.create(null), {
            mode: o
        });
        return Object.freeze(V.call(c, {
            data: x(a).bind(i)
        })),
        ic.call(c, i),
        M(i, {
            dispatch: n
        }),
        V.call(i, {
            DATA: function() {
                return e
            },
            STATE: function() {
                return r()
            }
        })
    }
    function Us(e, t) {
        if (N(this)) {
            var n = this.VIEWS
              , r = this.METHOD
              , o = this.METHOD_NAME
              , a = this.mount
              , i = this.unmount
              , c = $s.call(this, e, t)
              , u = n.map((function(e) {
                return e.call(c)
            }
            ));
            return {
                method: r,
                name: o,
                views: u,
                mount: x(a).bind(c),
                unmount: x(i).bind(c),
                $context: c
            }
        }
    }
    var Vs, Fs, Bs = [$c, yu, gu, fl, hl, Ms, _l, Rl, Nl, xl, Ul, Ls, Gl, ql, Ql, ns, cs, fs, hs, gs, ws, Ts].map((function(e) {
        return Us.bind(e)
    }
    ));
    function Gs() {
        return N(this) || Object.create(null),
        Xo({
            NAME: "TIMEOUT_VIEW",
            mount: function() {
                var e, t = this.$$data, n = this.data, r = N(t) ? t : N(n) ? n : null, o = ("vbvcomplete" === U(r, "name") ? Aa(r, "transactionobject").transactionobject : Aa(r, "tx").tx || Aa(r, "data").data || r) || null;
                Po.transactionTimeout(),
                e = function() {
                    if (Ca || Sa)
                        try {
                            return void da.postMessage({
                                name: r.name || "opop",
                                data: r,
                                tx: o,
                                success: !1
                            }, "*")
                        } catch (e) {}
                    setTimeout((function() {
                        po().then((function(e) {
                            try {
                                var t = U(e, "redirect_url")
                                  , n = U(e, "txref");
                                if (t && n) {
                                    var a = new URL(t)
                                      , i = a.searchParams;
                                    if (!0 === e.use_v3) {
                                        var c = Aa(o, "id::transaction_id", "status")
                                          , u = c.transaction_id
                                          , l = c.status;
                                        i.set("status", l),
                                        i.set("tx_ref", n),
                                        i.set("transaction_id", u || null),
                                        Po.redirectingToMerchant(o).finally((function() {
                                            return window.location.href = a.href
                                        }
                                        ))
                                    } else {
                                        var s = dn("redirect_post", "redirect_no_json")
                                          , f = s.redirect_post
                                          , d = s.redirect_no_json
                                          , p = +f ? "POST" : "GET";
                                        if ("GET" === p && +d)
                                            return void Po.redirectingToMerchant(o).finally((function() {
                                                return window.location.href = a.href
                                            }
                                            ));
                                        var m = document.createElement("form")
                                          , h = document.createElement("textarea");
                                        h.setAttribute("name", "resp"),
                                        h.setAttribute("hidden", "hidden"),
                                        h.setAttribute("readonly", "readonly"),
                                        h.classList.add("sr-only"),
                                        h.value = JSON.stringify(r),
                                        m.setAttribute("method", p),
                                        m.setAttribute("action", a.href),
                                        m.setAttribute("hidden", "hidden"),
                                        m.classList.add("sr-only"),
                                        m.appendChild(h),
                                        document.body.appendChild(m),
                                        Po.redirectingToMerchant(o).finally((function() {
                                            return m.submit()
                                        }
                                        ))
                                    }
                                }
                            } catch (e) {}
                        }
                        ))
                    }
                    ), 5e3)
                }
                ,
                pa.MIXPANEL_INITIALIZED ? pa.paymentTimeout().finally((function() {
                    return e()
                }
                )) : Promise.resolve().then((function() {
                    return e()
                }
                ))
            }
        }).call(this)
    }
    function Hs(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var zs = {}
      , Ws = "view"
      , Ks = Object.create(null)
      , qs = Object.create(null);
    function Ys(e) {
        if (D(e) && N(this)) {
            var t = e(this.$data, this.$store)
              , n = t.name
              , r = t.method
              , o = t.views
              , a = t.mount
              , i = t.unmount
              , c = t.$context;
            M(qs, Hs({}, r, Object.freeze(M(Object.create(null), {
                name: n,
                mount: x(a),
                unmount: x(i)
            })))),
            this.$paymentMethods.indexOf(r) >= 0 && [].concat(o).forEach((function(e) {
                if (N(e)) {
                    var t = e.NAME;
                    M(e, {
                        $rootContext: c
                    }),
                    t && M(Ks, Hs({}, t, e))
                }
            }
            ))
        }
    }
    function Zs(e) {
        if (e = N(e) ? e : Ks[e],
        N(e) && N(this)) {
            var t = this
              , n = e.NAME
              , r = this.$store
              , o = r.dispatch
              , a = r.getState;
            V.call(e, {
                DATA: function() {
                    return t.$data
                },
                STATE: function() {
                    return U(a(), "".concat(Ws, "[context]"))
                },
                ACTIVE: function() {
                    var e = U(a(), "".concat(Ws, "[current]"));
                    return n === e
                }
            }),
            M(e, {
                activate: function(n) {
                    t.$store.refresh.view.call(e) && (Vs = e) && x(n)(o, e.STATE)
                }
            })
        }
    }
    function Qs(e, t) {
        var n = V({
            $data: function() {
                return e
            },
            $store: function() {
                return t
            },
            $paymentMethods: function() {
                return U(e, "payment_options") || []
            }
        });
        if ([nu, sc, mu, ja, Jo, zi, Ia, Gs].forEach((function(e) {
            D(e) && M(e, {
                activate: function(t) {
                    var r = e.call(this);
                    if (N(r) && r.NAME) {
                        var o = r.NAME;
                        o in Ks || M(Ks, Hs({}, o, e)),
                        Zs.call(n, r)
                    }
                    N(r) && D(r.activate) && (e !== nu && nu.activate(),
                    r.activate(t),
                    e === ja && (Fs = !0),
                    D(r.$mount) && r.$mount())
                }
            })
        }
        )),
        Bs.forEach(Ys.bind(n)),
        Object.keys(Ks).forEach(Zs.bind(n)),
        D(t.refresh)) {
            var r = R(Object.create(null));
            M(t.refresh, {
                view: function() {
                    var e = N(this) ? this : {};
                    if (P(e.ACTIVE) && !e.ACTIVE) {
                        Vs && x(Vs.Reducer.teardown)();
                        var n = e.NAME
                          , o = void 0 === n ? null : n
                          , a = e.Reducer
                          , i = e.setup;
                        if (!D(a) && D(i))
                            a = (i(),
                            e).Reducer;
                        return zs.view = J({
                            current: R(o),
                            context: D(a) ? a : r
                        }),
                        t.refresh(),
                        x(U(e.$rootContext, "$inputs.$refresh"))(),
                        e.ACTIVE
                    }
                    return !1
                }
            }),
            t.refresh.view(),
            nu && nu.activate()
        }
    }
    function Xs(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Js(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Xs(Object(n), !0).forEach((function(t) {
                ef(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xs(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function ef(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var tf = Object.fromEntries(Array.from(Bn, (function(e, t) {
        return [e, t]
    }
    )));
    function nf() {
        var e = this
          , t = Object.create(null)
          , n = this.data
          , r = this.dispatch
          , o = U(n, "currencies")
          , a = U(n, "initial_currency")
          , i = U(n, "preferences[use_dynamic_currency_conversion]")
          , c = U(n, "integrity_hash")
          , l = i && !c
          , p = b.call(e, a)
          , m = Ae({
            available: l ? o : Object.freeze([a].filter(Boolean))
        })
          , h = Da.call(this, {
            actions: {
                on: f,
                off: d
            },
            initialState: !1,
            key: "switching"
        })
          , y = J(Js(Js(Js({}, h), m), {}, {
            current: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (t.type === u) {
                    var n = payload
                      , r = n.currency;
                    return o.indexOf(r) >= 0 && r !== e ? r : e
                }
                return e
            },
            methods: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p
                  , r = arguments.length > 1 ? arguments[1] : void 0;
                if (r.type === s) {
                    var o = t.STATE.current;
                    return b.call(e, o)
                }
                return n
            }
        }));
        function b(e) {
            var t = (N(this) && U(this.data, "currency_options[".concat(e, "]")) || []).sort((function(e, t) {
                return tf[e] - tf[t] || 0
            }
            ))
              , n = t.reduce((function(e, t) {
                return M(e, ef({}, t, U(qs, "".concat(t, "[name]")) || null))
            }
            ), Object.create(null));
            return Object.freeze(Object.defineProperties(t, {
                labels: {
                    value: Object.freeze(n)
                }
            }))
        }
        function v() {
            return function(e) {
                var n = t.STATE
                  , r = n.methods
                  , o = n.current
                  , a = cf.STATE.current
                  , i = r.indexOf(a) ? a : "ZAR" === o && r.indexOf("card") >= 0 ? "card" : r[0];
                e(cf.actions.switchMethod(i))
            }
        }
        function g(e) {
            return function(n) {
                if (!0 !== Fs && !0 !== nc && l) {
                    var r = t.STATE.current;
                    (e = String($t.from(e))) !== $t.NONE && e !== r && $t.DCC.indexOf(e) >= 0 && (n(h.actions.on()),
                    Promise.resolve().then((function() {
                        n({
                            type: u,
                            payload: {
                                currency: e
                            }
                        }),
                        n({
                            type: s
                        }),
                        n(v()),
                        n(h.actions.off())
                    }
                    )))
                }
            }
        }
        return M(t, {
            NAME: "currency",
            Reducer: y,
            actions: M(Object.create(null), {
                switchCurrency: g
            }),
            exposedActions: M(Object.create(null), {
                Currency: te({
                    switch: g
                }, r)
            })
        }),
        setTimeout((function() {
            r(v())
        }
        ), 0),
        nf = t
    }
    function rf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function of(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? rf(Object(n), !0).forEach((function(t) {
                af(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rf(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function af(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function cf() {
        var e, t = Object.create(null), n = this.data, r = this.dispatch, o = U(n, "initial_method"), a = {
            current: o,
            label: U(qs, "".concat(o, "[name]")) || null
        }, i = !0;
        function c(n) {
            return function(r) {
                var o = t.STATE.current
                  , a = nf.STATE
                  , c = a.methods
                  , u = a.current;
                if (!0 !== Fs && !0 !== nc && c.indexOf(n) >= 0) {
                    var s = !(n === o && e && e === u);
                    s && (s = function(e) {
                        var t = U(qs, e);
                        D(t) && D(t = t()) && r(t)
                    }
                    ),
                    s && s("".concat(o, "[unmount]")),
                    n !== o ? (dispatchEvent(new CustomEvent(Ua,{
                        bubbles: !1,
                        cancelable: !1,
                        detail: {
                            current: n,
                            previous: o
                        }
                    })),
                    r({
                        type: l,
                        payload: {
                            method: n
                        }
                    }),
                    r(Ee.actions.updateErrorMessage()),
                    Po.switchedMethod(t.STATE.label || t.STATE.current)) : !0 === i && (i = !1,
                    Po.switchedMethod(t.STATE.label || t.STATE.current)),
                    s && s("".concat(n, "[mount]")),
                    e = nf.STATE.current
                }
            }
        }
        return M(t, {
            NAME: "method",
            Reducer: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = N(t.payload) ? t.payload : {};
                if (t.type === l) {
                    var r = n.method
                      , o = e.current;
                    return r !== o ? of(of({}, e), {}, {
                        current: r,
                        label: U(qs, "".concat(r, "[name]")) || null
                    }) : e
                }
                return e
            },
            actions: M(Object.create(null), {
                switchMethod: c
            }),
            exposedActions: M(Object.create(null), {
                PaymentMethod: te({
                    switch: c
                }, r)
            })
        }),
        cf = t
    }
    function uf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function lf(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function sf() {
        var e, t, n, r = Object.create(null), o = this.data, a = J(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? uf(Object(n), !0).forEach((function(t) {
                    lf(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uf(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({}, Ae({
            name: (t = U(o, "firstname"),
            n = U(o, "lastname"),
            [t, n].filter(Boolean).join(" ") || "Anonymous Customer"),
            email: (e = U(o, "email"),
            !0 === U(o, "preferences[prefers_hidden_email]") ? null : e || null)
        })));
        return M(r, {
            NAME: "customer",
            Reducer: a
        }),
        sf = r
    }
    function ff(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function df(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function pf() {
        var e = Object.create(null)
          , t = this.data
          , n = J(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ff(Object(n), !0).forEach((function(t) {
                    df(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ff(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({}, Ae({
            name: U(t, "merchant_name"),
            logo: U(t, "merchant_logo"),
            poweredby: "Flutterwave"
        })));
        return M(e, {
            NAME: "merchant",
            Reducer: n
        }),
        pf = e
    }
    function mf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function hf(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function yf() {
        var e = Object.create(null)
          , t = J(function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? mf(Object(n), !0).forEach((function(t) {
                    hf(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mf(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }({}, Ae({
            mobile: se.isMobile,
            width: window.innerWidth,
            height: window.innerHeight,
            orientation: null
        })));
        return M(e, {
            NAME: "viewport",
            Reducer: t
        }),
        yf = e
    }
    function bf() {
        var e = Object.create(null)
          , t = this.data;
        return M(e, {
            NAME: "isTestMode",
            Reducer: function() {
                return !!(e = U(t, "PBFPubKey")) && e.includes("_TEST");
                var e
            }
        }),
        bf = e
    }
    var vf = {}
      , gf = {}
      , Of = {};
    function _f(e) {
        return function(e) {
            if (Array.isArray(e))
                return Ef(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return Ef(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return Ef(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Ef(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function wf() {
        po().then((function(e) {
            var t, n = U(e, "forter_site_id");
            if (n) {
                var r, o = Dn((r = bt.one).retry.apply(r, _f(Rn).concat([function(e) {
                    return function(e) {
                        return Pn(e) ? e.json() : e.text().then(JSON.parse).catch(jn)
                    }(e).then((function(e) {
                        return !(N(e) && "success" === e.status)
                    }
                    ))
                }
                ])).delay(bt.ProgressiveDelay()).init(Tn).limit(10));
                document.addEventListener("ftr:tokenReady", (function(t) {
                    o("https://api.ravepay.co".concat("/v2/forter/events"), {
                        body: JSON.stringify({
                            modal_audit_uuid: U(e, "modalauditid"),
                            public_key: U(e, "PBFPubKey"),
                            forter_site_id: n,
                            token: t.detail
                        })
                    }).catch(j)
                }
                )),
                t = n,
                function() {
                    function e(e, t) {
                        for (var n = e.split(""), r = 0; r < n.length; ++r)
                            n[r] = String.fromCharCode(n[r].charCodeAt(0) + t);
                        return n.join("")
                    }
                    function n(n) {
                        return e(n, -f).replace(/%SN%/g, t)
                    }
                    function r(e) {
                        try {
                            E.ex = e,
                            window.ga && "noopfn" === window.ga.name && -1 === E.ex.indexOf(_.uB) && (E.ex += _.uB),
                            !(!navigator.brave || "function" != typeof navigator.brave.isBrave) && -1 === E.ex.indexOf(_.uBr) && (E.ex += _.uBr),
                            document.currentScript && document.currentScript.src && -1 === E.ex.indexOf(_.nIL) && (E.ex += _.nIL),
                            window.ftr__snp_cwc || (E.ex += _.s),
                            g(E)
                        } catch (e) {}
                    }
                    function o(e, t) {
                        function n(o) {
                            try {
                                o.blockedURI === e && (t(),
                                document.removeEventListener(r, n))
                            } catch (e) {
                                document.removeEventListener(r, n)
                            }
                        }
                        var r = "securitypolicyviolation";
                        document.addEventListener(r, n),
                        setTimeout((function() {
                            document.removeEventListener(r, n)
                        }
                        ), 12e4)
                    }
                    function a() {
                        !function(e, t, n) {
                            var r = new XMLHttpRequest;
                            if (o(e, (function() {
                                n(new Error("CSP Violation"), !0),
                                isErrorEventCalled = !0
                            }
                            )),
                            "withCredentials"in r)
                                r.open("GET", e, !0);
                            else {
                                if ("undefined" == typeof XDomainRequest)
                                    return;
                                (r = new XDomainRequest).open("GET", e)
                            }
                            r.onload = function() {
                                "function" == typeof t && t(r)
                            }
                            ,
                            r.onerror = function(e) {
                                if ("function" == typeof n && !isErrorEventCalled)
                                    try {
                                        n(e, !1),
                                        isErrorEventCalled = !0
                                    } catch (e) {}
                            }
                            ,
                            r.onprogress = function() {}
                            ,
                            r.ontimeout = function() {
                                "function" == typeof n && n("timeout", !1)
                            }
                            ,
                            setTimeout((function() {
                                r.send()
                            }
                            ), 0)
                        }(d, (function(r) {
                            try {
                                var o = r.getAllResponseHeaders().toLowerCase();
                                if (o.indexOf(m.toLowerCase()) < 0)
                                    return;
                                var a = e(r.getResponseHeader(m), -f - 1);
                                if (a) {
                                    var u = a.split(":");
                                    if (u && 3 === u.length) {
                                        var l = u[0]
                                          , s = u[1]
                                          , d = u[2];
                                        switch (s) {
                                        case "none":
                                            c = l + p;
                                            break;
                                        case "res":
                                            c = l + p + d;
                                            break;
                                        case "enc":
                                            c = l + n("1forxgiurqw1qhw2vq2(VQ(2vfulsw1mv");
                                            break;
                                        case "enc-res":
                                            for (var y = "", b = 0, g = 0; b < 20; ++b)
                                                y += b % 3 > 0 && g < 12 ? t.charAt(g++) : E.id.charAt(b);
                                            var O = d.split(".");
                                            if (O.length > 1) {
                                                var w = O[0]
                                                  , A = O[1];
                                                c = l + p + w + "." + y + "." + A
                                            }
                                        }
                                        if (o.indexOf(h.toLowerCase()) >= 0) {
                                            var C = e(r.getResponseHeader(h), -f - 1);
                                            window.ftr__altd = C
                                        }
                                        T(_.dUAL),
                                        setTimeout(i, v, _.dUAL)
                                    }
                                }
                            } catch (e) {}
                        }
                        ), (function(e, t) {
                            r(t ? _.uAS + _.cP : _.uAS)
                        }
                        ))
                    }
                    function i(e) {
                        try {
                            var t = e === _.uDF ? y : c;
                            if (!t)
                                return;
                            !function(e, t, n, r) {
                                var a = !1;
                                o(e = "https://" + e, (function() {
                                    r(!0),
                                    a = !0
                                }
                                ));
                                var i = document.createElement("script");
                                i.onerror = function() {
                                    if (!a)
                                        try {
                                            r(!1),
                                            a = !0
                                        } catch (e) {}
                                }
                                ,
                                i.onload = n,
                                i.type = "text/javascript",
                                i.id = "ftr__script",
                                i.async = !0,
                                i.src = e;
                                var c = document.getElementsByTagName("script")[0];
                                c.parentNode.insertBefore(i, c)
                            }(t, 0, (function() {
                                try {
                                    R(),
                                    r(e + _.uS)
                                } catch (e) {}
                            }
                            ), (function(t) {
                                try {
                                    R(),
                                    E.td = 1 * new Date - E.ts,
                                    r(t ? e + _.uF + _.cP : e + _.uF),
                                    e === _.uDF && a()
                                } catch (e) {
                                    r(_.eUoe)
                                }
                            }
                            ))
                        } catch (t) {
                            r(e + _.eTlu)
                        }
                    }
                    var c, u = "forterToken", l = {
                        write: function(e, t, n, r) {
                            var o, a;
                            if (void 0 === r && (r = !0),
                            n ? ((o = new Date).setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
                            a = "; expires=" + o.toGMTString()) : a = "",
                            r)
                                for (var i = 1, c = document.domain.split("."), u = 10, s = !0; s && c.length >= i && u > 0; ) {
                                    var f = c.slice(-i).join(".");
                                    document.cookie = escape(e) + "=" + escape(t) + a + "; path=/; domain=" + f;
                                    var d = l.read(e);
                                    null != d && d == t || (f = "." + f,
                                    document.cookie = escape(e) + "=" + escape(t) + a + "; path=/; domain=" + f),
                                    s = -1 === document.cookie.indexOf(e + "=" + t),
                                    i++,
                                    u--
                                }
                            else
                                document.cookie = escape(e) + "=" + escape(t) + a + "; path=/"
                        },
                        read: function(e) {
                            var t = null;
                            try {
                                for (var n = escape(e) + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                                    for (var a = r[o]; 32 === a.charCodeAt(0); )
                                        a = a.substring(1, a.length);
                                    0 === a.indexOf(n) && (t = unescape(a.substring(n.length, a.length)))
                                }
                            } finally {
                                return t
                            }
                        }
                    }, s = function(e) {
                        if (document.head) {
                            var t = function() {
                                var t = document.createElement("link");
                                return t.setAttribute("rel", "preconnect"),
                                t.setAttribute("crossorigin", "anonymous"),
                                t.onload = function() {
                                    document.head.removeChild(t)
                                }
                                ,
                                t.onerror = function(e) {
                                    document.head.removeChild(t)
                                }
                                ,
                                t.setAttribute("href", e),
                                document.head.appendChild(t),
                                t
                            }();
                            setTimeout((function() {
                                document.head.removeChild(t)
                            }
                            ), 3e3)
                        }
                    }, f = 3, d = n("22g4zl{5jf5fjtlv1forxgiurqw1qhw2vwdwxv"), p = e("1forxgiurqw1qhw2", -f), m = e("[0Uhtxhvw0LG", -f), h = e("[0Fruuhodwlrq0LG", -f), y = n("(VQ(1fgq71iruwhu1frp2vq2(VQ(2vfulsw1mv"), b = n("(VQ(1fgq71iruwhu1frp2vqV2(VQ(2vfulsw1mv"), v = 10;
                    window.ftr__startScriptLoad = 1 * new Date;
                    var g = function(e) {
                        var t = function(e) {
                            return e || ""
                        }
                          , n = t(e.id) + "_" + t(e.ts) + "_" + t(e.td) + "_" + t(e.ex) + "_" + t("13ck");
                        l.write(u, n, 1825, !0),
                        function(e) {
                            window.ftr__tt && clearTimeout(window.ftr__tt),
                            window.ftr__tt = setTimeout((function() {
                                try {
                                    delete window.ftr__tt,
                                    e += "_tt";
                                    var t = document.createEvent("Event");
                                    t.initEvent("ftr:tokenReady", !1, !1),
                                    t.detail = e,
                                    document.dispatchEvent(t)
                                } catch (e) {}
                            }
                            ), 1e3)
                        }(n),
                        window.ftr__gt = n
                    }
                      , O = function() {
                        for (var e = {}, t = [], n = 0; n < 256; n++)
                            t[n] = (n < 16 ? "0" : "") + n.toString(16);
                        return e.safeGenerateNoDash = function() {
                            try {
                                var e = function() {
                                    if (window.Uint32Array && window.crypto && window.crypto.getRandomValues) {
                                        var e = new window.Uint32Array(4);
                                        return window.crypto.getRandomValues(e),
                                        {
                                            d0: e[0],
                                            d1: e[1],
                                            d2: e[2],
                                            d3: e[3]
                                        }
                                    }
                                    return {
                                        d0: 4294967296 * Math.random() >>> 0,
                                        d1: 4294967296 * Math.random() >>> 0,
                                        d2: 4294967296 * Math.random() >>> 0,
                                        d3: 4294967296 * Math.random() >>> 0
                                    }
                                }();
                                return function(e, n, r, o, a) {
                                    var i = a ? "-" : "";
                                    return t[255 & e] + t[e >> 8 & 255] + t[e >> 16 & 255] + t[e >> 24 & 255] + i + t[255 & n] + t[n >> 8 & 255] + i + t[n >> 16 & 15 | 64] + t[n >> 24 & 255] + i + t[63 & r | 128] + t[r >> 8 & 255] + i + t[r >> 16 & 255] + t[r >> 24 & 255] + t[255 & o] + t[o >> 8 & 255] + t[o >> 16 & 255] + t[o >> 24 & 255]
                                }(e.d0, e.d1, e.d2, e.d3, !1)
                            } catch (e) {
                                try {
                                    return "fgu" + function() {
                                        var e = ""
                                          , t = function(e, t) {
                                            for (var n = "", r = e; r > 0; --r)
                                                n += t.charAt(1e3 * Math.random() % t.length);
                                            return n
                                        };
                                        return e += t(2, "0123456789"),
                                        (e += t(1, "123456789")) + t(8, "0123456789")
                                    }()
                                } catch (e) {}
                            }
                        }
                        ,
                        e.isValidNumericalToken = function(e) {
                            return e && e.toString().length <= 11 && e.length >= 9 && parseInt(e, 10).toString().length <= 11 && parseInt(e, 10).toString().length >= 9
                        }
                        ,
                        e.isValidUUIDToken = function(e) {
                            return e && 32 === e.toString().length && /^[a-z0-9]+$/.test(e)
                        }
                        ,
                        e.isValidFGUToken = function(e) {
                            return 0 == e.indexOf("fgu") && e.length >= 12
                        }
                        ,
                        e
                    }()
                      , _ = {
                        uDF: "UDF",
                        dUAL: "dUAL",
                        uAS: "UAS",
                        mLd: "1",
                        eTlu: "2",
                        eUoe: "3",
                        uS: "4",
                        uF: "9",
                        tmos: ["T5", "T10", "T15", "T30", "T60"],
                        tmosSecs: [5, 10, 15, 30, 60],
                        bIR: "43",
                        uB: "u",
                        uBr: "b",
                        cP: "c",
                        nIL: "i",
                        s: "s"
                    };
                    try {
                        var E = function() {
                            var e = (l.read(u) || "").split("_")
                              , t = function(t) {
                                return e[t] || void 0
                            };
                            return {
                                id: t(0),
                                ts: t(1),
                                td: t(2),
                                ex: t(3),
                                vr: t(4)
                            }
                        }();
                        try {
                            E.id && (O.isValidNumericalToken(E.id) || O.isValidUUIDToken(E.id) || O.isValidFGUToken(E.id)) ? window.ftr__ncd = !1 : (E.id = O.safeGenerateNoDash(),
                            window.ftr__ncd = !0),
                            E.ts = window.ftr__startScriptLoad,
                            g(E),
                            window.ftr__snp_cwc = !!l.read(u),
                            window.ftr__snp_cwc || (y = b);
                            for (var w = "forter.com", A = "https://" + E.id + "-" + t + ".cdn." + w, C = ["https://cdn9.forter.com", A, "https://cdn3.forter.com"], S = 0; S < C.length; S++)
                                s(C[S]);
                            var j = new Array(_.tmosSecs.length)
                              , T = function(e) {
                                for (var t = 0; t < _.tmosSecs.length; t++)
                                    j[t] = setTimeout(r, 1e3 * _.tmosSecs[t], e + _.tmos[t])
                            }
                              , R = function() {
                                for (var e = 0; e < _.tmosSecs.length; e++)
                                    clearTimeout(j[e])
                            };
                            !function(e, t) {
                                for (var n = _.tmos, r = 0; r < n.length; r++)
                                    if (e + n[r] === t)
                                        return !0;
                                return !1
                            }(_.uDF, E.ex) ? (T(_.uDF),
                            setTimeout(i, v, _.uDF)) : loadAlternate()
                        } catch (e) {
                            r(_.mLd)
                        }
                    } catch (e) {}
                }()
            }
        }
        ))
    }
    function Af(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Cf(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Sf(e, t) {
        var n = 1440;
        if (e && t) {
            var r = {
                data: {
                    status: "session_expired",
                    message: "Checkout session expired",
                    transaction_id: null,
                    id: null
                }
            }
              , o = V({
                $chargeData: function() {
                    return e
                },
                $state: function() {
                    return t.getState()
                },
                $$data: function() {
                    return r
                }
            }, !1)
              , a = sn.get("custom_session_duration") || 1440;
            isNaN(a) || (n = a <= 0 || a > 1440 ? 1440 : a),
            setTimeout((function() {
                var e = o.$state.view && o.$state.view.current || "PLACEHOLDER_VIEW";
                ["SUCCESS_VIEW", "TIMEOUT_VIEW", "FAILURE_VIEW"].includes(e) || Gs && Gs.activate.call(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Af(Object(n), !0).forEach((function(t) {
                            Cf(e, t, n[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Af(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                        ))
                    }
                    return e
                }({}, o))
            }
            ), 6e4 * n)
        }
    }
    function jf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Tf(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? jf(Object(n), !0).forEach((function(t) {
                Rf(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jf(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Rf(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var If, Pf = !1, Df = function e(t, n, r) {
        var o;
        if ("function" == typeof n && "function" == typeof r || "function" == typeof r && "function" == typeof arguments[3])
            throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
        if ("function" == typeof n && void 0 === r && (r = n,
        n = void 0),
        void 0 !== r) {
            if ("function" != typeof r)
                throw new Error("Expected the enhancer to be a function.");
            return r(e)(t, n)
        }
        if ("function" != typeof t)
            throw new Error("Expected the reducer to be a function.");
        var a = t
          , i = n
          , c = []
          , u = c
          , l = !1;
        function s() {
            u === c && (u = c.slice())
        }
        function f() {
            if (l)
                throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return i
        }
        function d(e) {
            if ("function" != typeof e)
                throw new Error("Expected the listener to be a function.");
            if (l)
                throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
            var t = !0;
            return s(),
            u.push(e),
            function() {
                if (t) {
                    if (l)
                        throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                    t = !1,
                    s();
                    var n = u.indexOf(e);
                    u.splice(n, 1),
                    c = null
                }
            }
        }
        function p(e) {
            if (!Q(e))
                throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type)
                throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (l)
                throw new Error("Reducers may not dispatch actions.");
            try {
                l = !0,
                i = a(i, e)
            } finally {
                l = !1
            }
            for (var t = c = u, n = 0; n < t.length; n++) {
                (0,
                t[n])()
            }
            return e
        }
        function m(e) {
            if ("function" != typeof e)
                throw new Error("Expected the nextReducer to be a function.");
            a = e,
            p({
                type: Z.REPLACE
            })
        }
        function h() {
            var e, t = d;
            return (e = {
                subscribe: function(e) {
                    if ("object" !== q(e) || null === e)
                        throw new TypeError("Expected the observer to be an object.");
                    function n() {
                        e.next && e.next(f())
                    }
                    return n(),
                    {
                        unsubscribe: t(n)
                    }
                }
            })[K] = function() {
                return this
            }
            ,
            e
        }
        return p({
            type: Z.INIT
        }),
        (o = {
            dispatch: p,
            subscribe: d,
            getState: f,
            replaceReducer: m
        })[K] = h,
        o
    }(Nf(), function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return function(e) {
            return function() {
                var n = e.apply(void 0, arguments)
                  , r = function() {
                    throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                }
                  , o = {
                    getState: n.getState,
                    dispatch: function() {
                        return r.apply(void 0, arguments)
                    }
                }
                  , a = t.map((function(e) {
                    return e(o)
                }
                ));
                return oe({}, n, {
                    dispatch: r = ae.apply(void 0, a)(n.dispatch)
                })
            }
        }
    }(r));
    function Nf() {
        return J(Tf(Tf({}, vf), zs))
    }
    function Mf() {
        var e = Df.dispatch
          , t = Df.getState
          , n = Df.subscribe
          , r = V({
            dispatch: function() {
                return e
            },
            getState: function() {
                return t
            },
            subscribe: function() {
                return n
            }
        }, !1);
        return Object.freeze(M(r, Tf({}, Of)))
    }
    function kf(e) {
        !0 !== Pf && (Pf = !0,
        dispatchEvent(e))
    }
    function xf() {
        return If || (If = po().then((function(e) {
            var t, n, r, o = Tf({}, N(e) ? e : {});
            return wf(),
            pa.init(),
            Object.defineProperty(Df, "refresh", {
                value: function() {
                    return Df.replaceReducer(Nf())
                }
            }),
            lc(o, Df),
            Sf(o, Df),
            Qs(o, Df),
            t = o,
            n = Df,
            r = V({
                actions: function() {
                    return gf
                },
                data: function() {
                    return t
                },
                dispatch: function() {
                    return n.dispatch
                }
            }),
            [we, Te, _e, nf, sf, z, Ee, Pa, No, pf, cf, bf, yf, Na, Hi].forEach((function(e) {
                if (D(e)) {
                    var t = e.call(r)
                      , o = t.NAME
                      , a = t.Reducer
                      , i = t.actions
                      , c = t.exposedActions
                      , u = k.bind(t);
                    i && (gf[o] = i),
                    c && M(Of, c),
                    vf[o] = a,
                    u("STATE", (function() {
                        return U(n.getState(), "".concat(o))
                    }
                    ))
                }
            }
            )),
            M(Of, {
                LogUntranslatedErrors: M(Object.create(null), {
                    logError: function(e) {
                        Po.logUntranslatedError(e)
                    }
                }),
                Control: M(Object.create(null), {
                    close: function(e) {
                        e && "function" == typeof U(e, "preventDefault") && e.preventDefault();
                        var t = U(Df.getState(), "view.current")
                          , r = On("en" === U(n.getState(), "locale") ? Wi : Ki, "close.checkout.notice");
                        if (!Fs && "PENDING_VIEW" !== t || !Ca && !Sa) {
                            if (!Fs && confirm(r) && (Ca || Sa))
                                try {
                                    dispatchEvent(new CustomEvent($a,{
                                        bubbles: !1,
                                        cancelable: !1
                                    })),
                                    Po.closeModal(),
                                    da.postMessage({
                                        name: "closeiframe",
                                        data: {
                                            cancelled: !0
                                        }
                                    }, "*")
                                } catch (e) {}
                        } else
                            try {
                                dispatchEvent(new CustomEvent($a,{
                                    bubbles: !1,
                                    cancelable: !1
                                })),
                                Po.closeModal(!0),
                                da.postMessage({
                                    name: "closeiframe",
                                    data: {}
                                }, "*")
                            } catch (e) {}
                    }
                })
            }),
            Df.refresh(),
            sn.hasErrors() && sc && sc.activate((function() {
                Df.dispatch(Ee.actions.updateErrorMessage(sn.getError()))
            }
            )),
            new CustomEvent("checkout:ready",{
                bubbles: !1,
                cancelable: !1,
                detail: V({
                    store: Mf
                })
            })
        }
        ))),
        If
    }
    addEventListener("checkout:app", (function e() {
        removeEventListener("checkout:app", e, !1),
        xf().then(kf)
    }
    ), !1),
    xf().then(kf),
    zn()
}
));
