(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports, function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function(require, module, exports) {
        ! function(t, n) {
            if ("object" == typeof exports && "object" == typeof module) module.exports = n();
            else if ("function" == typeof define && define.amd) define([], n);
            else {
                var r = n();
                for (var a in r)("object" == typeof exports ? exports : t)[a] = r[a]
            }
        }("undefined" != typeof self ? self : this, function() {
            return function(t) {
                var n = {};

                function r(a) {
                    if (n[a]) return n[a].exports;
                    var e = n[a] = {
                        i: a,
                        l: !1,
                        exports: {}
                    };
                    return t[a].call(e.exports, e, e.exports, r), e.l = !0, e.exports
                }
                return r.m = t, r.c = n, r.d = function(t, n, a) {
                    r.o(t, n) || Object.defineProperty(t, n, {
                        enumerable: !0,
                        get: a
                    })
                }, r.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, r.t = function(t, n) {
                    if (1 & n && (t = r(t)), 8 & n) return t;
                    if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                    var a = Object.create(null);
                    if (r.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & n && "string" != typeof t)
                        for (var e in t) r.d(a, e, function(n) {
                            return t[n]
                        }.bind(null, e));
                    return a
                }, r.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return r.d(n, "a", n), n
                }, r.o = function(t, n) {
                    return Object.prototype.hasOwnProperty.call(t, n)
                }, r.p = "", r(r.s = 10)
            }([function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.setMatrixArrayType = function(t) {
                    n.ARRAY_TYPE = t
                }, n.toRadian = function(t) {
                    return t * e
                }, n.equals = function(t, n) {
                    return Math.abs(t - n) <= a * Math.max(1, Math.abs(t), Math.abs(n))
                };
                var a = n.EPSILON = 1e-6;
                n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random;
                var e = Math.PI / 180
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0, n.create = e, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(4);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
                }, n.fromValues = function(t, n, r, e) {
                    var u = new a.ARRAY_TYPE(4);
                    return u[0] = t, u[1] = n, u[2] = r, u[3] = e, u
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
                }, n.set = function(t, n, r, a, e) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t
                }, n.subtract = u, n.multiply = o, n.divide = i, n.ceil = function(t, n) {
                    return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t
                }, n.floor = function(t, n) {
                    return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t
                }, n.min = function(t, n, r) {
                    return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t[3] = Math.min(n[3], r[3]), t
                }, n.max = function(t, n, r) {
                    return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t[3] = Math.max(n[3], r[3]), t
                }, n.round = function(t, n) {
                    return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t
                }, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t
                }, n.scaleAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t
                }, n.distance = s, n.squaredDistance = c, n.length = f, n.squaredLength = M, n.negate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t
                }, n.inverse = function(t, n) {
                    return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t
                }, n.normalize = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = r * r + a * a + e * e + u * u;
                    o > 0 && (o = 1 / Math.sqrt(o), t[0] = r * o, t[1] = a * o, t[2] = e * o, t[3] = u * o);
                    return t
                }, n.dot = function(t, n) {
                    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
                }, n.lerp = function(t, n, r, a) {
                    var e = n[0],
                        u = n[1],
                        o = n[2],
                        i = n[3];
                    return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), t[3] = i + a * (r[3] - i), t
                }, n.random = function(t, n) {
                    var r, e, u, o, i, s;
                    n = n || 1;
                    do {
                        r = 2 * a.RANDOM() - 1, e = 2 * a.RANDOM() - 1, i = r * r + e * e
                    } while (i >= 1);
                    do {
                        u = 2 * a.RANDOM() - 1, o = 2 * a.RANDOM() - 1, s = u * u + o * o
                    } while (s >= 1);
                    var c = Math.sqrt((1 - i) / s);
                    return t[0] = n * r, t[1] = n * e, t[2] = n * u * c, t[3] = n * o * c, t
                }, n.transformMat4 = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3];
                    return t[0] = r[0] * a + r[4] * e + r[8] * u + r[12] * o, t[1] = r[1] * a + r[5] * e + r[9] * u + r[13] * o, t[2] = r[2] * a + r[6] * e + r[10] * u + r[14] * o, t[3] = r[3] * a + r[7] * e + r[11] * u + r[15] * o, t
                }, n.transformQuat = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = r[0],
                        i = r[1],
                        s = r[2],
                        c = r[3],
                        f = c * a + i * u - s * e,
                        M = c * e + s * a - o * u,
                        h = c * u + o * e - i * a,
                        l = -o * a - i * e - s * u;
                    return t[0] = f * c + l * -o + M * -s - h * -i, t[1] = M * c + l * -i + h * -o - f * -s, t[2] = h * c + l * -s + f * -i - M * -o, t[3] = n[3], t
                }, n.str = function(t) {
                    return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = t[3],
                        i = n[0],
                        s = n[1],
                        c = n[2],
                        f = n[3];
                    return Math.abs(r - i) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(e - s) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(u - c) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(o - f) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f))
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e() {
                    var t = new a.ARRAY_TYPE(4);
                    return a.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t
                }

                function u(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t
                }

                function o(t, n, r) {
                    return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], t
                }

                function i(t, n, r) {
                    return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], t
                }

                function s(t, n) {
                    var r = n[0] - t[0],
                        a = n[1] - t[1],
                        e = n[2] - t[2],
                        u = n[3] - t[3];
                    return Math.sqrt(r * r + a * a + e * e + u * u)
                }

                function c(t, n) {
                    var r = n[0] - t[0],
                        a = n[1] - t[1],
                        e = n[2] - t[2],
                        u = n[3] - t[3];
                    return r * r + a * a + e * e + u * u
                }

                function f(t) {
                    var n = t[0],
                        r = t[1],
                        a = t[2],
                        e = t[3];
                    return Math.sqrt(n * n + r * r + a * a + e * e)
                }

                function M(t) {
                    var n = t[0],
                        r = t[1],
                        a = t[2],
                        e = t[3];
                    return n * n + r * r + a * a + e * e
                }
                n.sub = u, n.mul = o, n.div = i, n.dist = s, n.sqrDist = c, n.len = f, n.sqrLen = M, n.forEach = function() {
                    var t = e();
                    return function(n, r, a, e, u, o) {
                        var i = void 0,
                            s = void 0;
                        for (r || (r = 4), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
                        return n
                    }
                }()
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.forEach = n.sqrLen = n.len = n.sqrDist = n.dist = n.div = n.mul = n.sub = void 0, n.create = e, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(3);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n
                }, n.length = u, n.fromValues = o, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t
                }, n.set = function(t, n, r, a) {
                    return t[0] = n, t[1] = r, t[2] = a, t
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t
                }, n.subtract = i, n.multiply = s, n.divide = c, n.ceil = function(t, n) {
                    return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t
                }, n.floor = function(t, n) {
                    return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t
                }, n.min = function(t, n, r) {
                    return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t
                }, n.max = function(t, n, r) {
                    return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t
                }, n.round = function(t, n) {
                    return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t
                }, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t
                }, n.scaleAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t
                }, n.distance = f, n.squaredDistance = M, n.squaredLength = h, n.negate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t
                }, n.inverse = function(t, n) {
                    return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t
                }, n.normalize = l, n.dot = v, n.cross = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = r[0],
                        i = r[1],
                        s = r[2];
                    return t[0] = e * s - u * i, t[1] = u * o - a * s, t[2] = a * i - e * o, t
                }, n.lerp = function(t, n, r, a) {
                    var e = n[0],
                        u = n[1],
                        o = n[2];
                    return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), t
                }, n.hermite = function(t, n, r, a, e, u) {
                    var o = u * u,
                        i = o * (2 * u - 3) + 1,
                        s = o * (u - 2) + u,
                        c = o * (u - 1),
                        f = o * (3 - 2 * u);
                    return t[0] = n[0] * i + r[0] * s + a[0] * c + e[0] * f, t[1] = n[1] * i + r[1] * s + a[1] * c + e[1] * f, t[2] = n[2] * i + r[2] * s + a[2] * c + e[2] * f, t
                }, n.bezier = function(t, n, r, a, e, u) {
                    var o = 1 - u,
                        i = o * o,
                        s = u * u,
                        c = i * o,
                        f = 3 * u * i,
                        M = 3 * s * o,
                        h = s * u;
                    return t[0] = n[0] * c + r[0] * f + a[0] * M + e[0] * h, t[1] = n[1] * c + r[1] * f + a[1] * M + e[1] * h, t[2] = n[2] * c + r[2] * f + a[2] * M + e[2] * h, t
                }, n.random = function(t, n) {
                    n = n || 1;
                    var r = 2 * a.RANDOM() * Math.PI,
                        e = 2 * a.RANDOM() - 1,
                        u = Math.sqrt(1 - e * e) * n;
                    return t[0] = Math.cos(r) * u, t[1] = Math.sin(r) * u, t[2] = e * n, t
                }, n.transformMat4 = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = r[3] * a + r[7] * e + r[11] * u + r[15];
                    return o = o || 1, t[0] = (r[0] * a + r[4] * e + r[8] * u + r[12]) / o, t[1] = (r[1] * a + r[5] * e + r[9] * u + r[13]) / o, t[2] = (r[2] * a + r[6] * e + r[10] * u + r[14]) / o, t
                }, n.transformMat3 = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2];
                    return t[0] = a * r[0] + e * r[3] + u * r[6], t[1] = a * r[1] + e * r[4] + u * r[7], t[2] = a * r[2] + e * r[5] + u * r[8], t
                }, n.transformQuat = function(t, n, r) {
                    var a = r[0],
                        e = r[1],
                        u = r[2],
                        o = r[3],
                        i = n[0],
                        s = n[1],
                        c = n[2],
                        f = e * c - u * s,
                        M = u * i - a * c,
                        h = a * s - e * i,
                        l = e * h - u * M,
                        v = u * f - a * h,
                        d = a * M - e * f,
                        b = 2 * o;
                    return f *= b, M *= b, h *= b, l *= 2, v *= 2, d *= 2, t[0] = i + f + l, t[1] = s + M + v, t[2] = c + h + d, t
                }, n.rotateX = function(t, n, r, a) {
                    var e = [],
                        u = [];
                    return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0], u[1] = e[1] * Math.cos(a) - e[2] * Math.sin(a), u[2] = e[1] * Math.sin(a) + e[2] * Math.cos(a), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
                }, n.rotateY = function(t, n, r, a) {
                    var e = [],
                        u = [];
                    return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[2] * Math.sin(a) + e[0] * Math.cos(a), u[1] = e[1], u[2] = e[2] * Math.cos(a) - e[0] * Math.sin(a), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
                }, n.rotateZ = function(t, n, r, a) {
                    var e = [],
                        u = [];
                    return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0] * Math.cos(a) - e[1] * Math.sin(a), u[1] = e[0] * Math.sin(a) + e[1] * Math.cos(a), u[2] = e[2], t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t
                }, n.angle = function(t, n) {
                    var r = o(t[0], t[1], t[2]),
                        a = o(n[0], n[1], n[2]);
                    l(r, r), l(a, a);
                    var e = v(r, a);
                    return e > 1 ? 0 : e < -1 ? Math.PI : Math.acos(e)
                }, n.str = function(t) {
                    return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = n[0],
                        i = n[1],
                        s = n[2];
                    return Math.abs(r - o) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(e - i) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(i)) && Math.abs(u - s) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(s))
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e() {
                    var t = new a.ARRAY_TYPE(3);
                    return a.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t
                }

                function u(t) {
                    var n = t[0],
                        r = t[1],
                        a = t[2];
                    return Math.sqrt(n * n + r * r + a * a)
                }

                function o(t, n, r) {
                    var e = new a.ARRAY_TYPE(3);
                    return e[0] = t, e[1] = n, e[2] = r, e
                }

                function i(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t
                }

                function s(t, n, r) {
                    return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t
                }

                function c(t, n, r) {
                    return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t
                }

                function f(t, n) {
                    var r = n[0] - t[0],
                        a = n[1] - t[1],
                        e = n[2] - t[2];
                    return Math.sqrt(r * r + a * a + e * e)
                }

                function M(t, n) {
                    var r = n[0] - t[0],
                        a = n[1] - t[1],
                        e = n[2] - t[2];
                    return r * r + a * a + e * e
                }

                function h(t) {
                    var n = t[0],
                        r = t[1],
                        a = t[2];
                    return n * n + r * r + a * a
                }

                function l(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = r * r + a * a + e * e;
                    return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u), t
                }

                function v(t, n) {
                    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
                }
                n.sub = i, n.mul = s, n.div = c, n.dist = f, n.sqrDist = M, n.len = u, n.sqrLen = h, n.forEach = function() {
                    var t = e();
                    return function(n, r, a, e, u, o) {
                        var i = void 0,
                            s = void 0;
                        for (r || (r = 3), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2];
                        return n
                    }
                }()
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.setAxes = n.sqlerp = n.rotationTo = n.equals = n.exactEquals = n.normalize = n.sqrLen = n.squaredLength = n.len = n.length = n.lerp = n.dot = n.scale = n.mul = n.add = n.set = n.copy = n.fromValues = n.clone = void 0, n.create = s, n.identity = function(t) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
                }, n.setAxisAngle = c, n.getAxisAngle = function(t, n) {
                    var r = 2 * Math.acos(n[3]),
                        e = Math.sin(r / 2);
                    e > a.EPSILON ? (t[0] = n[0] / e, t[1] = n[1] / e, t[2] = n[2] / e) : (t[0] = 1, t[1] = 0, t[2] = 0);
                    return r
                }, n.multiply = f, n.rotateX = function(t, n, r) {
                    r *= .5;
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = Math.sin(r),
                        s = Math.cos(r);
                    return t[0] = a * s + o * i, t[1] = e * s + u * i, t[2] = u * s - e * i, t[3] = o * s - a * i, t
                }, n.rotateY = function(t, n, r) {
                    r *= .5;
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = Math.sin(r),
                        s = Math.cos(r);
                    return t[0] = a * s - u * i, t[1] = e * s + o * i, t[2] = u * s + a * i, t[3] = o * s - e * i, t
                }, n.rotateZ = function(t, n, r) {
                    r *= .5;
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = Math.sin(r),
                        s = Math.cos(r);
                    return t[0] = a * s + e * i, t[1] = e * s - a * i, t[2] = u * s + o * i, t[3] = o * s - u * i, t
                }, n.calculateW = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2];
                    return t[0] = r, t[1] = a, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - a * a - e * e)), t
                }, n.slerp = M, n.random = function(t) {
                    var n = a.RANDOM(),
                        r = a.RANDOM(),
                        e = a.RANDOM(),
                        u = Math.sqrt(1 - n),
                        o = Math.sqrt(n);
                    return t[0] = u * Math.sin(2 * Math.PI * r), t[1] = u * Math.cos(2 * Math.PI * r), t[2] = o * Math.sin(2 * Math.PI * e), t[3] = o * Math.cos(2 * Math.PI * e), t
                }, n.invert = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = r * r + a * a + e * e + u * u,
                        i = o ? 1 / o : 0;
                    return t[0] = -r * i, t[1] = -a * i, t[2] = -e * i, t[3] = u * i, t
                }, n.conjugate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t
                }, n.fromMat3 = h, n.fromEuler = function(t, n, r, a) {
                    var e = .5 * Math.PI / 180;
                    n *= e, r *= e, a *= e;
                    var u = Math.sin(n),
                        o = Math.cos(n),
                        i = Math.sin(r),
                        s = Math.cos(r),
                        c = Math.sin(a),
                        f = Math.cos(a);
                    return t[0] = u * s * f - o * i * c, t[1] = o * i * f + u * s * c, t[2] = o * s * c - u * i * f, t[3] = o * s * f + u * i * c, t
                }, n.str = function(t) {
                    return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
                };
                var a = i(r(0)),
                    e = i(r(5)),
                    u = i(r(2)),
                    o = i(r(1));

                function i(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }

                function s() {
                    var t = new a.ARRAY_TYPE(4);
                    return a.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t
                }

                function c(t, n, r) {
                    r *= .5;
                    var a = Math.sin(r);
                    return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = Math.cos(r), t
                }

                function f(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = r[0],
                        s = r[1],
                        c = r[2],
                        f = r[3];
                    return t[0] = a * f + o * i + e * c - u * s, t[1] = e * f + o * s + u * i - a * c, t[2] = u * f + o * c + a * s - e * i, t[3] = o * f - a * i - e * s - u * c, t
                }

                function M(t, n, r, e) {
                    var u = n[0],
                        o = n[1],
                        i = n[2],
                        s = n[3],
                        c = r[0],
                        f = r[1],
                        M = r[2],
                        h = r[3],
                        l = void 0,
                        v = void 0,
                        d = void 0,
                        b = void 0,
                        m = void 0;
                    return (v = u * c + o * f + i * M + s * h) < 0 && (v = -v, c = -c, f = -f, M = -M, h = -h), 1 - v > a.EPSILON ? (l = Math.acos(v), d = Math.sin(l), b = Math.sin((1 - e) * l) / d, m = Math.sin(e * l) / d) : (b = 1 - e, m = e), t[0] = b * u + m * c, t[1] = b * o + m * f, t[2] = b * i + m * M, t[3] = b * s + m * h, t
                }

                function h(t, n) {
                    var r = n[0] + n[4] + n[8],
                        a = void 0;
                    if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a;
                    else {
                        var e = 0;
                        n[4] > n[0] && (e = 1), n[8] > n[3 * e + e] && (e = 2);
                        var u = (e + 1) % 3,
                            o = (e + 2) % 3;
                        a = Math.sqrt(n[3 * e + e] - n[3 * u + u] - n[3 * o + o] + 1), t[e] = .5 * a, a = .5 / a, t[3] = (n[3 * u + o] - n[3 * o + u]) * a, t[u] = (n[3 * u + e] + n[3 * e + u]) * a, t[o] = (n[3 * o + e] + n[3 * e + o]) * a
                    }
                    return t
                }
                n.clone = o.clone, n.fromValues = o.fromValues, n.copy = o.copy, n.set = o.set, n.add = o.add, n.mul = f, n.scale = o.scale, n.dot = o.dot, n.lerp = o.lerp;
                var l = n.length = o.length,
                    v = (n.len = l, n.squaredLength = o.squaredLength),
                    d = (n.sqrLen = v, n.normalize = o.normalize);
                n.exactEquals = o.exactEquals, n.equals = o.equals, n.rotationTo = function() {
                    var t = u.create(),
                        n = u.fromValues(1, 0, 0),
                        r = u.fromValues(0, 1, 0);
                    return function(a, e, o) {
                        var i = u.dot(e, o);
                        return i < -.999999 ? (u.cross(t, n, e), u.len(t) < 1e-6 && u.cross(t, r, e), u.normalize(t, t), c(a, t, Math.PI), a) : i > .999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (u.cross(t, e, o), a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = 1 + i, d(a, a))
                    }
                }(), n.sqlerp = function() {
                    var t = s(),
                        n = s();
                    return function(r, a, e, u, o, i) {
                        return M(t, a, o, i), M(n, e, u, i), M(r, t, n, 2 * i * (1 - i)), r
                    }
                }(), n.setAxes = function() {
                    var t = e.create();
                    return function(n, r, a, e) {
                        return t[0] = a[0], t[3] = a[1], t[6] = a[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], d(n, h(n, t))
                    }
                }()
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new a.ARRAY_TYPE(16);
                    a.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0);
                    return t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t
                }, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(16);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
                }, n.fromValues = function(t, n, r, e, u, o, i, s, c, f, M, h, l, v, d, b) {
                    var m = new a.ARRAY_TYPE(16);
                    return m[0] = t, m[1] = n, m[2] = r, m[3] = e, m[4] = u, m[5] = o, m[6] = i, m[7] = s, m[8] = c, m[9] = f, m[10] = M, m[11] = h, m[12] = l, m[13] = v, m[14] = d, m[15] = b, m
                }, n.set = function(t, n, r, a, e, u, o, i, s, c, f, M, h, l, v, d, b) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, t[8] = c, t[9] = f, t[10] = M, t[11] = h, t[12] = l, t[13] = v, t[14] = d, t[15] = b, t
                }, n.identity = e, n.transpose = function(t, n) {
                    if (t === n) {
                        var r = n[1],
                            a = n[2],
                            e = n[3],
                            u = n[6],
                            o = n[7],
                            i = n[11];
                        t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = a, t[9] = u, t[11] = n[14], t[12] = e, t[13] = o, t[14] = i
                    } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];
                    return t
                }, n.invert = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = n[4],
                        i = n[5],
                        s = n[6],
                        c = n[7],
                        f = n[8],
                        M = n[9],
                        h = n[10],
                        l = n[11],
                        v = n[12],
                        d = n[13],
                        b = n[14],
                        m = n[15],
                        p = r * i - a * o,
                        P = r * s - e * o,
                        A = r * c - u * o,
                        E = a * s - e * i,
                        O = a * c - u * i,
                        R = e * c - u * s,
                        y = f * d - M * v,
                        q = f * b - h * v,
                        x = f * m - l * v,
                        _ = M * b - h * d,
                        Y = M * m - l * d,
                        L = h * m - l * b,
                        S = p * L - P * Y + A * _ + E * x - O * q + R * y;
                    if (!S) return null;
                    return S = 1 / S, t[0] = (i * L - s * Y + c * _) * S, t[1] = (e * Y - a * L - u * _) * S, t[2] = (d * R - b * O + m * E) * S, t[3] = (h * O - M * R - l * E) * S, t[4] = (s * x - o * L - c * q) * S, t[5] = (r * L - e * x + u * q) * S, t[6] = (b * A - v * R - m * P) * S, t[7] = (f * R - h * A + l * P) * S, t[8] = (o * Y - i * x + c * y) * S, t[9] = (a * x - r * Y - u * y) * S, t[10] = (v * O - d * A + m * p) * S, t[11] = (M * A - f * O - l * p) * S, t[12] = (i * q - o * _ - s * y) * S, t[13] = (r * _ - a * q + e * y) * S, t[14] = (d * P - v * E - b * p) * S, t[15] = (f * E - M * P + h * p) * S, t
                }, n.adjoint = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = n[4],
                        i = n[5],
                        s = n[6],
                        c = n[7],
                        f = n[8],
                        M = n[9],
                        h = n[10],
                        l = n[11],
                        v = n[12],
                        d = n[13],
                        b = n[14],
                        m = n[15];
                    return t[0] = i * (h * m - l * b) - M * (s * m - c * b) + d * (s * l - c * h), t[1] = -(a * (h * m - l * b) - M * (e * m - u * b) + d * (e * l - u * h)), t[2] = a * (s * m - c * b) - i * (e * m - u * b) + d * (e * c - u * s), t[3] = -(a * (s * l - c * h) - i * (e * l - u * h) + M * (e * c - u * s)), t[4] = -(o * (h * m - l * b) - f * (s * m - c * b) + v * (s * l - c * h)), t[5] = r * (h * m - l * b) - f * (e * m - u * b) + v * (e * l - u * h), t[6] = -(r * (s * m - c * b) - o * (e * m - u * b) + v * (e * c - u * s)), t[7] = r * (s * l - c * h) - o * (e * l - u * h) + f * (e * c - u * s), t[8] = o * (M * m - l * d) - f * (i * m - c * d) + v * (i * l - c * M), t[9] = -(r * (M * m - l * d) - f * (a * m - u * d) + v * (a * l - u * M)), t[10] = r * (i * m - c * d) - o * (a * m - u * d) + v * (a * c - u * i), t[11] = -(r * (i * l - c * M) - o * (a * l - u * M) + f * (a * c - u * i)), t[12] = -(o * (M * b - h * d) - f * (i * b - s * d) + v * (i * h - s * M)), t[13] = r * (M * b - h * d) - f * (a * b - e * d) + v * (a * h - e * M), t[14] = -(r * (i * b - s * d) - o * (a * b - e * d) + v * (a * s - e * i)), t[15] = r * (i * h - s * M) - o * (a * h - e * M) + f * (a * s - e * i), t
                }, n.determinant = function(t) {
                    var n = t[0],
                        r = t[1],
                        a = t[2],
                        e = t[3],
                        u = t[4],
                        o = t[5],
                        i = t[6],
                        s = t[7],
                        c = t[8],
                        f = t[9],
                        M = t[10],
                        h = t[11],
                        l = t[12],
                        v = t[13],
                        d = t[14],
                        b = t[15];
                    return (n * o - r * u) * (M * b - h * d) - (n * i - a * u) * (f * b - h * v) + (n * s - e * u) * (f * d - M * v) + (r * i - a * o) * (c * b - h * l) - (r * s - e * o) * (c * d - M * l) + (a * s - e * i) * (c * v - f * l)
                }, n.multiply = u, n.translate = function(t, n, r) {
                    var a = r[0],
                        e = r[1],
                        u = r[2],
                        o = void 0,
                        i = void 0,
                        s = void 0,
                        c = void 0,
                        f = void 0,
                        M = void 0,
                        h = void 0,
                        l = void 0,
                        v = void 0,
                        d = void 0,
                        b = void 0,
                        m = void 0;
                    n === t ? (t[12] = n[0] * a + n[4] * e + n[8] * u + n[12], t[13] = n[1] * a + n[5] * e + n[9] * u + n[13], t[14] = n[2] * a + n[6] * e + n[10] * u + n[14], t[15] = n[3] * a + n[7] * e + n[11] * u + n[15]) : (o = n[0], i = n[1], s = n[2], c = n[3], f = n[4], M = n[5], h = n[6], l = n[7], v = n[8], d = n[9], b = n[10], m = n[11], t[0] = o, t[1] = i, t[2] = s, t[3] = c, t[4] = f, t[5] = M, t[6] = h, t[7] = l, t[8] = v, t[9] = d, t[10] = b, t[11] = m, t[12] = o * a + f * e + v * u + n[12], t[13] = i * a + M * e + d * u + n[13], t[14] = s * a + h * e + b * u + n[14], t[15] = c * a + l * e + m * u + n[15]);
                    return t
                }, n.scale = function(t, n, r) {
                    var a = r[0],
                        e = r[1],
                        u = r[2];
                    return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * e, t[5] = n[5] * e, t[6] = n[6] * e, t[7] = n[7] * e, t[8] = n[8] * u, t[9] = n[9] * u, t[10] = n[10] * u, t[11] = n[11] * u, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
                }, n.rotate = function(t, n, r, e) {
                    var u = e[0],
                        o = e[1],
                        i = e[2],
                        s = Math.sqrt(u * u + o * o + i * i),
                        c = void 0,
                        f = void 0,
                        M = void 0,
                        h = void 0,
                        l = void 0,
                        v = void 0,
                        d = void 0,
                        b = void 0,
                        m = void 0,
                        p = void 0,
                        P = void 0,
                        A = void 0,
                        E = void 0,
                        O = void 0,
                        R = void 0,
                        y = void 0,
                        q = void 0,
                        x = void 0,
                        _ = void 0,
                        Y = void 0,
                        L = void 0,
                        S = void 0,
                        w = void 0,
                        I = void 0;
                    if (s < a.EPSILON) return null;
                    u *= s = 1 / s, o *= s, i *= s, c = Math.sin(r), f = Math.cos(r), M = 1 - f, h = n[0], l = n[1], v = n[2], d = n[3], b = n[4], m = n[5], p = n[6], P = n[7], A = n[8], E = n[9], O = n[10], R = n[11], y = u * u * M + f, q = o * u * M + i * c, x = i * u * M - o * c, _ = u * o * M - i * c, Y = o * o * M + f, L = i * o * M + u * c, S = u * i * M + o * c, w = o * i * M - u * c, I = i * i * M + f, t[0] = h * y + b * q + A * x, t[1] = l * y + m * q + E * x, t[2] = v * y + p * q + O * x, t[3] = d * y + P * q + R * x, t[4] = h * _ + b * Y + A * L, t[5] = l * _ + m * Y + E * L, t[6] = v * _ + p * Y + O * L, t[7] = d * _ + P * Y + R * L, t[8] = h * S + b * w + A * I, t[9] = l * S + m * w + E * I, t[10] = v * S + p * w + O * I, t[11] = d * S + P * w + R * I, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]);
                    return t
                }, n.rotateX = function(t, n, r) {
                    var a = Math.sin(r),
                        e = Math.cos(r),
                        u = n[4],
                        o = n[5],
                        i = n[6],
                        s = n[7],
                        c = n[8],
                        f = n[9],
                        M = n[10],
                        h = n[11];
                    n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]);
                    return t[4] = u * e + c * a, t[5] = o * e + f * a, t[6] = i * e + M * a, t[7] = s * e + h * a, t[8] = c * e - u * a, t[9] = f * e - o * a, t[10] = M * e - i * a, t[11] = h * e - s * a, t
                }, n.rotateY = function(t, n, r) {
                    var a = Math.sin(r),
                        e = Math.cos(r),
                        u = n[0],
                        o = n[1],
                        i = n[2],
                        s = n[3],
                        c = n[8],
                        f = n[9],
                        M = n[10],
                        h = n[11];
                    n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]);
                    return t[0] = u * e - c * a, t[1] = o * e - f * a, t[2] = i * e - M * a, t[3] = s * e - h * a, t[8] = u * a + c * e, t[9] = o * a + f * e, t[10] = i * a + M * e, t[11] = s * a + h * e, t
                }, n.rotateZ = function(t, n, r) {
                    var a = Math.sin(r),
                        e = Math.cos(r),
                        u = n[0],
                        o = n[1],
                        i = n[2],
                        s = n[3],
                        c = n[4],
                        f = n[5],
                        M = n[6],
                        h = n[7];
                    n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]);
                    return t[0] = u * e + c * a, t[1] = o * e + f * a, t[2] = i * e + M * a, t[3] = s * e + h * a, t[4] = c * e - u * a, t[5] = f * e - o * a, t[6] = M * e - i * a, t[7] = h * e - s * a, t
                }, n.fromTranslation = function(t, n) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, n.fromRotation = function(t, n, r) {
                    var e = r[0],
                        u = r[1],
                        o = r[2],
                        i = Math.sqrt(e * e + u * u + o * o),
                        s = void 0,
                        c = void 0,
                        f = void 0;
                    if (i < a.EPSILON) return null;
                    return e *= i = 1 / i, u *= i, o *= i, s = Math.sin(n), c = Math.cos(n), f = 1 - c, t[0] = e * e * f + c, t[1] = u * e * f + o * s, t[2] = o * e * f - u * s, t[3] = 0, t[4] = e * u * f - o * s, t[5] = u * u * f + c, t[6] = o * u * f + e * s, t[7] = 0, t[8] = e * o * f + u * s, t[9] = u * o * f - e * s, t[10] = o * o * f + c, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, n.fromXRotation = function(t, n) {
                    var r = Math.sin(n),
                        a = Math.cos(n);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, n.fromYRotation = function(t, n) {
                    var r = Math.sin(n),
                        a = Math.cos(n);
                    return t[0] = a, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, n.fromZRotation = function(t, n) {
                    var r = Math.sin(n),
                        a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = a, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, n.fromRotationTranslation = o, n.fromQuat2 = function(t, n) {
                    var r = new a.ARRAY_TYPE(3),
                        e = -n[0],
                        u = -n[1],
                        i = -n[2],
                        s = n[3],
                        c = n[4],
                        f = n[5],
                        M = n[6],
                        h = n[7],
                        l = e * e + u * u + i * i + s * s;
                    l > 0 ? (r[0] = 2 * (c * s + h * e + f * i - M * u) / l, r[1] = 2 * (f * s + h * u + M * e - c * i) / l, r[2] = 2 * (M * s + h * i + c * u - f * e) / l) : (r[0] = 2 * (c * s + h * e + f * i - M * u), r[1] = 2 * (f * s + h * u + M * e - c * i), r[2] = 2 * (M * s + h * i + c * u - f * e));
                    return o(t, n, r), t
                }, n.getTranslation = function(t, n) {
                    return t[0] = n[12], t[1] = n[13], t[2] = n[14], t
                }, n.getScaling = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[4],
                        o = n[5],
                        i = n[6],
                        s = n[8],
                        c = n[9],
                        f = n[10];
                    return t[0] = Math.sqrt(r * r + a * a + e * e), t[1] = Math.sqrt(u * u + o * o + i * i), t[2] = Math.sqrt(s * s + c * c + f * f), t
                }, n.getRotation = function(t, n) {
                    var r = n[0] + n[5] + n[10],
                        a = 0;
                    r > 0 ? (a = 2 * Math.sqrt(r + 1), t[3] = .25 * a, t[0] = (n[6] - n[9]) / a, t[1] = (n[8] - n[2]) / a, t[2] = (n[1] - n[4]) / a) : n[0] > n[5] && n[0] > n[10] ? (a = 2 * Math.sqrt(1 + n[0] - n[5] - n[10]), t[3] = (n[6] - n[9]) / a, t[0] = .25 * a, t[1] = (n[1] + n[4]) / a, t[2] = (n[8] + n[2]) / a) : n[5] > n[10] ? (a = 2 * Math.sqrt(1 + n[5] - n[0] - n[10]), t[3] = (n[8] - n[2]) / a, t[0] = (n[1] + n[4]) / a, t[1] = .25 * a, t[2] = (n[6] + n[9]) / a) : (a = 2 * Math.sqrt(1 + n[10] - n[0] - n[5]), t[3] = (n[1] - n[4]) / a, t[0] = (n[8] + n[2]) / a, t[1] = (n[6] + n[9]) / a, t[2] = .25 * a);
                    return t
                }, n.fromRotationTranslationScale = function(t, n, r, a) {
                    var e = n[0],
                        u = n[1],
                        o = n[2],
                        i = n[3],
                        s = e + e,
                        c = u + u,
                        f = o + o,
                        M = e * s,
                        h = e * c,
                        l = e * f,
                        v = u * c,
                        d = u * f,
                        b = o * f,
                        m = i * s,
                        p = i * c,
                        P = i * f,
                        A = a[0],
                        E = a[1],
                        O = a[2];
                    return t[0] = (1 - (v + b)) * A, t[1] = (h + P) * A, t[2] = (l - p) * A, t[3] = 0, t[4] = (h - P) * E, t[5] = (1 - (M + b)) * E, t[6] = (d + m) * E, t[7] = 0, t[8] = (l + p) * O, t[9] = (d - m) * O, t[10] = (1 - (M + v)) * O, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t
                }, n.fromRotationTranslationScaleOrigin = function(t, n, r, a, e) {
                    var u = n[0],
                        o = n[1],
                        i = n[2],
                        s = n[3],
                        c = u + u,
                        f = o + o,
                        M = i + i,
                        h = u * c,
                        l = u * f,
                        v = u * M,
                        d = o * f,
                        b = o * M,
                        m = i * M,
                        p = s * c,
                        P = s * f,
                        A = s * M,
                        E = a[0],
                        O = a[1],
                        R = a[2],
                        y = e[0],
                        q = e[1],
                        x = e[2],
                        _ = (1 - (d + m)) * E,
                        Y = (l + A) * E,
                        L = (v - P) * E,
                        S = (l - A) * O,
                        w = (1 - (h + m)) * O,
                        I = (b + p) * O,
                        N = (v + P) * R,
                        g = (b - p) * R,
                        T = (1 - (h + d)) * R;
                    return t[0] = _, t[1] = Y, t[2] = L, t[3] = 0, t[4] = S, t[5] = w, t[6] = I, t[7] = 0, t[8] = N, t[9] = g, t[10] = T, t[11] = 0, t[12] = r[0] + y - (_ * y + S * q + N * x), t[13] = r[1] + q - (Y * y + w * q + g * x), t[14] = r[2] + x - (L * y + I * q + T * x), t[15] = 1, t
                }, n.fromQuat = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = r + r,
                        i = a + a,
                        s = e + e,
                        c = r * o,
                        f = a * o,
                        M = a * i,
                        h = e * o,
                        l = e * i,
                        v = e * s,
                        d = u * o,
                        b = u * i,
                        m = u * s;
                    return t[0] = 1 - M - v, t[1] = f + m, t[2] = h - b, t[3] = 0, t[4] = f - m, t[5] = 1 - c - v, t[6] = l + d, t[7] = 0, t[8] = h + b, t[9] = l - d, t[10] = 1 - c - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }, n.frustum = function(t, n, r, a, e, u, o) {
                    var i = 1 / (r - n),
                        s = 1 / (e - a),
                        c = 1 / (u - o);
                    return t[0] = 2 * u * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * u * s, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (e + a) * s, t[10] = (o + u) * c, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * u * 2 * c, t[15] = 0, t
                }, n.perspective = function(t, n, r, a, e) {
                    var u = 1 / Math.tan(n / 2),
                        o = void 0;
                    t[0] = u / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != e && e !== 1 / 0 ? (o = 1 / (a - e), t[10] = (e + a) * o, t[14] = 2 * e * a * o) : (t[10] = -1, t[14] = -2 * a);
                    return t
                }, n.perspectiveFromFieldOfView = function(t, n, r, a) {
                    var e = Math.tan(n.upDegrees * Math.PI / 180),
                        u = Math.tan(n.downDegrees * Math.PI / 180),
                        o = Math.tan(n.leftDegrees * Math.PI / 180),
                        i = Math.tan(n.rightDegrees * Math.PI / 180),
                        s = 2 / (o + i),
                        c = 2 / (e + u);
                    return t[0] = s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = c, t[6] = 0, t[7] = 0, t[8] = -(o - i) * s * .5, t[9] = (e - u) * c * .5, t[10] = a / (r - a), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * r / (r - a), t[15] = 0, t
                }, n.ortho = function(t, n, r, a, e, u, o) {
                    var i = 1 / (n - r),
                        s = 1 / (a - e),
                        c = 1 / (u - o);
                    return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * s, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * c, t[11] = 0, t[12] = (n + r) * i, t[13] = (e + a) * s, t[14] = (o + u) * c, t[15] = 1, t
                }, n.lookAt = function(t, n, r, u) {
                    var o = void 0,
                        i = void 0,
                        s = void 0,
                        c = void 0,
                        f = void 0,
                        M = void 0,
                        h = void 0,
                        l = void 0,
                        v = void 0,
                        d = void 0,
                        b = n[0],
                        m = n[1],
                        p = n[2],
                        P = u[0],
                        A = u[1],
                        E = u[2],
                        O = r[0],
                        R = r[1],
                        y = r[2];
                    if (Math.abs(b - O) < a.EPSILON && Math.abs(m - R) < a.EPSILON && Math.abs(p - y) < a.EPSILON) return e(t);
                    h = b - O, l = m - R, v = p - y, d = 1 / Math.sqrt(h * h + l * l + v * v), o = A * (v *= d) - E * (l *= d), i = E * (h *= d) - P * v, s = P * l - A * h, (d = Math.sqrt(o * o + i * i + s * s)) ? (o *= d = 1 / d, i *= d, s *= d) : (o = 0, i = 0, s = 0);
                    c = l * s - v * i, f = v * o - h * s, M = h * i - l * o, (d = Math.sqrt(c * c + f * f + M * M)) ? (c *= d = 1 / d, f *= d, M *= d) : (c = 0, f = 0, M = 0);
                    return t[0] = o, t[1] = c, t[2] = h, t[3] = 0, t[4] = i, t[5] = f, t[6] = l, t[7] = 0, t[8] = s, t[9] = M, t[10] = v, t[11] = 0, t[12] = -(o * b + i * m + s * p), t[13] = -(c * b + f * m + M * p), t[14] = -(h * b + l * m + v * p), t[15] = 1, t
                }, n.targetTo = function(t, n, r, a) {
                    var e = n[0],
                        u = n[1],
                        o = n[2],
                        i = a[0],
                        s = a[1],
                        c = a[2],
                        f = e - r[0],
                        M = u - r[1],
                        h = o - r[2],
                        l = f * f + M * M + h * h;
                    l > 0 && (l = 1 / Math.sqrt(l), f *= l, M *= l, h *= l);
                    var v = s * h - c * M,
                        d = c * f - i * h,
                        b = i * M - s * f;
                    (l = v * v + d * d + b * b) > 0 && (l = 1 / Math.sqrt(l), v *= l, d *= l, b *= l);
                    return t[0] = v, t[1] = d, t[2] = b, t[3] = 0, t[4] = M * b - h * d, t[5] = h * v - f * b, t[6] = f * d - M * v, t[7] = 0, t[8] = f, t[9] = M, t[10] = h, t[11] = 0, t[12] = e, t[13] = u, t[14] = o, t[15] = 1, t
                }, n.str = function(t) {
                    return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t[9] = n[9] + r[9], t[10] = n[10] + r[10], t[11] = n[11] + r[11], t[12] = n[12] + r[12], t[13] = n[13] + r[13], t[14] = n[14] + r[14], t[15] = n[15] + r[15], t
                }, n.subtract = i, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = n[11] * r, t[12] = n[12] * r, t[13] = n[13] * r, t[14] = n[14] * r, t[15] = n[15] * r, t
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t[6] = n[6] + r[6] * a, t[7] = n[7] + r[7] * a, t[8] = n[8] + r[8] * a, t[9] = n[9] + r[9] * a, t[10] = n[10] + r[10] * a, t[11] = n[11] + r[11] * a, t[12] = n[12] + r[12] * a, t[13] = n[13] + r[13] * a, t[14] = n[14] + r[14] * a, t[15] = n[15] + r[15] * a, t
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = t[3],
                        i = t[4],
                        s = t[5],
                        c = t[6],
                        f = t[7],
                        M = t[8],
                        h = t[9],
                        l = t[10],
                        v = t[11],
                        d = t[12],
                        b = t[13],
                        m = t[14],
                        p = t[15],
                        P = n[0],
                        A = n[1],
                        E = n[2],
                        O = n[3],
                        R = n[4],
                        y = n[5],
                        q = n[6],
                        x = n[7],
                        _ = n[8],
                        Y = n[9],
                        L = n[10],
                        S = n[11],
                        w = n[12],
                        I = n[13],
                        N = n[14],
                        g = n[15];
                    return Math.abs(r - P) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(P)) && Math.abs(e - A) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(A)) && Math.abs(u - E) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(o - O) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(O)) && Math.abs(i - R) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(R)) && Math.abs(s - y) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(y)) && Math.abs(c - q) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(q)) && Math.abs(f - x) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(x)) && Math.abs(M - _) <= a.EPSILON * Math.max(1, Math.abs(M), Math.abs(_)) && Math.abs(h - Y) <= a.EPSILON * Math.max(1, Math.abs(h), Math.abs(Y)) && Math.abs(l - L) <= a.EPSILON * Math.max(1, Math.abs(l), Math.abs(L)) && Math.abs(v - S) <= a.EPSILON * Math.max(1, Math.abs(v), Math.abs(S)) && Math.abs(d - w) <= a.EPSILON * Math.max(1, Math.abs(d), Math.abs(w)) && Math.abs(b - I) <= a.EPSILON * Math.max(1, Math.abs(b), Math.abs(I)) && Math.abs(m - N) <= a.EPSILON * Math.max(1, Math.abs(m), Math.abs(N)) && Math.abs(p - g) <= a.EPSILON * Math.max(1, Math.abs(p), Math.abs(g))
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
                }

                function u(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = n[6],
                        f = n[7],
                        M = n[8],
                        h = n[9],
                        l = n[10],
                        v = n[11],
                        d = n[12],
                        b = n[13],
                        m = n[14],
                        p = n[15],
                        P = r[0],
                        A = r[1],
                        E = r[2],
                        O = r[3];
                    return t[0] = P * a + A * i + E * M + O * d, t[1] = P * e + A * s + E * h + O * b, t[2] = P * u + A * c + E * l + O * m, t[3] = P * o + A * f + E * v + O * p, P = r[4], A = r[5], E = r[6], O = r[7], t[4] = P * a + A * i + E * M + O * d, t[5] = P * e + A * s + E * h + O * b, t[6] = P * u + A * c + E * l + O * m, t[7] = P * o + A * f + E * v + O * p, P = r[8], A = r[9], E = r[10], O = r[11], t[8] = P * a + A * i + E * M + O * d, t[9] = P * e + A * s + E * h + O * b, t[10] = P * u + A * c + E * l + O * m, t[11] = P * o + A * f + E * v + O * p, P = r[12], A = r[13], E = r[14], O = r[15], t[12] = P * a + A * i + E * M + O * d, t[13] = P * e + A * s + E * h + O * b, t[14] = P * u + A * c + E * l + O * m, t[15] = P * o + A * f + E * v + O * p, t
                }

                function o(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = a + a,
                        s = e + e,
                        c = u + u,
                        f = a * i,
                        M = a * s,
                        h = a * c,
                        l = e * s,
                        v = e * c,
                        d = u * c,
                        b = o * i,
                        m = o * s,
                        p = o * c;
                    return t[0] = 1 - (l + d), t[1] = M + p, t[2] = h - m, t[3] = 0, t[4] = M - p, t[5] = 1 - (f + d), t[6] = v + b, t[7] = 0, t[8] = h + m, t[9] = v - b, t[10] = 1 - (f + l), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t
                }

                function i(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t[9] = n[9] - r[9], t[10] = n[10] - r[10], t[11] = n[11] - r[11], t[12] = n[12] - r[12], t[13] = n[13] - r[13], t[14] = n[14] - r[14], t[15] = n[15] - r[15], t
                }
                n.mul = u, n.sub = i
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new a.ARRAY_TYPE(9);
                    a.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0);
                    return t[0] = 1, t[4] = 1, t[8] = 1, t
                }, n.fromMat4 = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t
                }, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(9);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
                }, n.fromValues = function(t, n, r, e, u, o, i, s, c) {
                    var f = new a.ARRAY_TYPE(9);
                    return f[0] = t, f[1] = n, f[2] = r, f[3] = e, f[4] = u, f[5] = o, f[6] = i, f[7] = s, f[8] = c, f
                }, n.set = function(t, n, r, a, e, u, o, i, s, c) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, t[8] = c, t
                }, n.identity = function(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, n.transpose = function(t, n) {
                    if (t === n) {
                        var r = n[1],
                            a = n[2],
                            e = n[5];
                        t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = a, t[7] = e
                    } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];
                    return t
                }, n.invert = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = n[4],
                        i = n[5],
                        s = n[6],
                        c = n[7],
                        f = n[8],
                        M = f * o - i * c,
                        h = -f * u + i * s,
                        l = c * u - o * s,
                        v = r * M + a * h + e * l;
                    if (!v) return null;
                    return v = 1 / v, t[0] = M * v, t[1] = (-f * a + e * c) * v, t[2] = (i * a - e * o) * v, t[3] = h * v, t[4] = (f * r - e * s) * v, t[5] = (-i * r + e * u) * v, t[6] = l * v, t[7] = (-c * r + a * s) * v, t[8] = (o * r - a * u) * v, t
                }, n.adjoint = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = n[4],
                        i = n[5],
                        s = n[6],
                        c = n[7],
                        f = n[8];
                    return t[0] = o * f - i * c, t[1] = e * c - a * f, t[2] = a * i - e * o, t[3] = i * s - u * f, t[4] = r * f - e * s, t[5] = e * u - r * i, t[6] = u * c - o * s, t[7] = a * s - r * c, t[8] = r * o - a * u, t
                }, n.determinant = function(t) {
                    var n = t[0],
                        r = t[1],
                        a = t[2],
                        e = t[3],
                        u = t[4],
                        o = t[5],
                        i = t[6],
                        s = t[7],
                        c = t[8];
                    return n * (c * u - o * s) + r * (-c * e + o * i) + a * (s * e - u * i)
                }, n.multiply = e, n.translate = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = n[6],
                        f = n[7],
                        M = n[8],
                        h = r[0],
                        l = r[1];
                    return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = i, t[5] = s, t[6] = h * a + l * o + c, t[7] = h * e + l * i + f, t[8] = h * u + l * s + M, t
                }, n.rotate = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = n[6],
                        f = n[7],
                        M = n[8],
                        h = Math.sin(r),
                        l = Math.cos(r);
                    return t[0] = l * a + h * o, t[1] = l * e + h * i, t[2] = l * u + h * s, t[3] = l * o - h * a, t[4] = l * i - h * e, t[5] = l * s - h * u, t[6] = c, t[7] = f, t[8] = M, t
                }, n.scale = function(t, n, r) {
                    var a = r[0],
                        e = r[1];
                    return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = e * n[3], t[4] = e * n[4], t[5] = e * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t
                }, n.fromTranslation = function(t, n) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t
                }, n.fromRotation = function(t, n) {
                    var r = Math.sin(n),
                        a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = 0, t[3] = -r, t[4] = a, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }, n.fromMat2d = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t
                }, n.fromQuat = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = r + r,
                        i = a + a,
                        s = e + e,
                        c = r * o,
                        f = a * o,
                        M = a * i,
                        h = e * o,
                        l = e * i,
                        v = e * s,
                        d = u * o,
                        b = u * i,
                        m = u * s;
                    return t[0] = 1 - M - v, t[3] = f - m, t[6] = h + b, t[1] = f + m, t[4] = 1 - c - v, t[7] = l - d, t[2] = h - b, t[5] = l + d, t[8] = 1 - c - M, t
                }, n.normalFromMat4 = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = n[4],
                        i = n[5],
                        s = n[6],
                        c = n[7],
                        f = n[8],
                        M = n[9],
                        h = n[10],
                        l = n[11],
                        v = n[12],
                        d = n[13],
                        b = n[14],
                        m = n[15],
                        p = r * i - a * o,
                        P = r * s - e * o,
                        A = r * c - u * o,
                        E = a * s - e * i,
                        O = a * c - u * i,
                        R = e * c - u * s,
                        y = f * d - M * v,
                        q = f * b - h * v,
                        x = f * m - l * v,
                        _ = M * b - h * d,
                        Y = M * m - l * d,
                        L = h * m - l * b,
                        S = p * L - P * Y + A * _ + E * x - O * q + R * y;
                    if (!S) return null;
                    return S = 1 / S, t[0] = (i * L - s * Y + c * _) * S, t[1] = (s * x - o * L - c * q) * S, t[2] = (o * Y - i * x + c * y) * S, t[3] = (e * Y - a * L - u * _) * S, t[4] = (r * L - e * x + u * q) * S, t[5] = (a * x - r * Y - u * y) * S, t[6] = (d * R - b * O + m * E) * S, t[7] = (b * A - v * R - m * P) * S, t[8] = (v * O - d * A + m * p) * S, t
                }, n.projection = function(t, n, r) {
                    return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / r, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
                }, n.str = function(t) {
                    return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t
                }, n.subtract = u, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t[6] = n[6] + r[6] * a, t[7] = n[7] + r[7] * a, t[8] = n[8] + r[8] * a, t
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = t[3],
                        i = t[4],
                        s = t[5],
                        c = t[6],
                        f = t[7],
                        M = t[8],
                        h = n[0],
                        l = n[1],
                        v = n[2],
                        d = n[3],
                        b = n[4],
                        m = n[5],
                        p = n[6],
                        P = n[7],
                        A = n[8];
                    return Math.abs(r - h) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(e - l) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(u - v) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(o - d) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(i - b) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(s - m) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(c - p) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(p)) && Math.abs(f - P) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(P)) && Math.abs(M - A) <= a.EPSILON * Math.max(1, Math.abs(M), Math.abs(A))
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = n[6],
                        f = n[7],
                        M = n[8],
                        h = r[0],
                        l = r[1],
                        v = r[2],
                        d = r[3],
                        b = r[4],
                        m = r[5],
                        p = r[6],
                        P = r[7],
                        A = r[8];
                    return t[0] = h * a + l * o + v * c, t[1] = h * e + l * i + v * f, t[2] = h * u + l * s + v * M, t[3] = d * a + b * o + m * c, t[4] = d * e + b * i + m * f, t[5] = d * u + b * s + m * M, t[6] = p * a + P * o + A * c, t[7] = p * e + P * i + A * f, t[8] = p * u + P * s + A * M, t
                }

                function u(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t
                }
                n.mul = e, n.sub = u
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.forEach = n.sqrLen = n.sqrDist = n.dist = n.div = n.mul = n.sub = n.len = void 0, n.create = e, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(2);
                    return n[0] = t[0], n[1] = t[1], n
                }, n.fromValues = function(t, n) {
                    var r = new a.ARRAY_TYPE(2);
                    return r[0] = t, r[1] = n, r
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t
                }, n.set = function(t, n, r) {
                    return t[0] = n, t[1] = r, t
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t
                }, n.subtract = u, n.multiply = o, n.divide = i, n.ceil = function(t, n) {
                    return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t
                }, n.floor = function(t, n) {
                    return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t
                }, n.min = function(t, n, r) {
                    return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t
                }, n.max = function(t, n, r) {
                    return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t
                }, n.round = function(t, n) {
                    return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t
                }, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t
                }, n.scaleAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t
                }, n.distance = s, n.squaredDistance = c, n.length = f, n.squaredLength = M, n.negate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t
                }, n.inverse = function(t, n) {
                    return t[0] = 1 / n[0], t[1] = 1 / n[1], t
                }, n.normalize = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = r * r + a * a;
                    e > 0 && (e = 1 / Math.sqrt(e), t[0] = n[0] * e, t[1] = n[1] * e);
                    return t
                }, n.dot = function(t, n) {
                    return t[0] * n[0] + t[1] * n[1]
                }, n.cross = function(t, n, r) {
                    var a = n[0] * r[1] - n[1] * r[0];
                    return t[0] = t[1] = 0, t[2] = a, t
                }, n.lerp = function(t, n, r, a) {
                    var e = n[0],
                        u = n[1];
                    return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t
                }, n.random = function(t, n) {
                    n = n || 1;
                    var r = 2 * a.RANDOM() * Math.PI;
                    return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t
                }, n.transformMat2 = function(t, n, r) {
                    var a = n[0],
                        e = n[1];
                    return t[0] = r[0] * a + r[2] * e, t[1] = r[1] * a + r[3] * e, t
                }, n.transformMat2d = function(t, n, r) {
                    var a = n[0],
                        e = n[1];
                    return t[0] = r[0] * a + r[2] * e + r[4], t[1] = r[1] * a + r[3] * e + r[5], t
                }, n.transformMat3 = function(t, n, r) {
                    var a = n[0],
                        e = n[1];
                    return t[0] = r[0] * a + r[3] * e + r[6], t[1] = r[1] * a + r[4] * e + r[7], t
                }, n.transformMat4 = function(t, n, r) {
                    var a = n[0],
                        e = n[1];
                    return t[0] = r[0] * a + r[4] * e + r[12], t[1] = r[1] * a + r[5] * e + r[13], t
                }, n.rotate = function(t, n, r, a) {
                    var e = n[0] - r[0],
                        u = n[1] - r[1],
                        o = Math.sin(a),
                        i = Math.cos(a);
                    return t[0] = e * i - u * o + r[0], t[1] = e * o + u * i + r[1], t
                }, n.angle = function(t, n) {
                    var r = t[0],
                        a = t[1],
                        e = n[0],
                        u = n[1],
                        o = r * r + a * a;
                    o > 0 && (o = 1 / Math.sqrt(o));
                    var i = e * e + u * u;
                    i > 0 && (i = 1 / Math.sqrt(i));
                    var s = (r * e + a * u) * o * i;
                    return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s)
                }, n.str = function(t) {
                    return "vec2(" + t[0] + ", " + t[1] + ")"
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = n[0],
                        o = n[1];
                    return Math.abs(r - u) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(e - o) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(o))
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e() {
                    var t = new a.ARRAY_TYPE(2);
                    return a.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0), t
                }

                function u(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t
                }

                function o(t, n, r) {
                    return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t
                }

                function i(t, n, r) {
                    return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t
                }

                function s(t, n) {
                    var r = n[0] - t[0],
                        a = n[1] - t[1];
                    return Math.sqrt(r * r + a * a)
                }

                function c(t, n) {
                    var r = n[0] - t[0],
                        a = n[1] - t[1];
                    return r * r + a * a
                }

                function f(t) {
                    var n = t[0],
                        r = t[1];
                    return Math.sqrt(n * n + r * r)
                }

                function M(t) {
                    var n = t[0],
                        r = t[1];
                    return n * n + r * r
                }
                n.len = f, n.sub = u, n.mul = o, n.div = i, n.dist = s, n.sqrDist = c, n.sqrLen = M, n.forEach = function() {
                    var t = e();
                    return function(n, r, a, e, u, o) {
                        var i = void 0,
                            s = void 0;
                        for (r || (r = 2), a || (a = 0), s = e ? Math.min(e * r + a, n.length) : n.length, i = a; i < s; i += r) t[0] = n[i], t[1] = n[i + 1], u(t, t, o), n[i] = t[0], n[i + 1] = t[1];
                        return n
                    }
                }()
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sqrLen = n.squaredLength = n.len = n.length = n.dot = n.mul = n.setReal = n.getReal = void 0, n.create = function() {
                    var t = new a.ARRAY_TYPE(8);
                    a.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0);
                    return t[3] = 1, t
                }, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(8);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n
                }, n.fromValues = function(t, n, r, e, u, o, i, s) {
                    var c = new a.ARRAY_TYPE(8);
                    return c[0] = t, c[1] = n, c[2] = r, c[3] = e, c[4] = u, c[5] = o, c[6] = i, c[7] = s, c
                }, n.fromRotationTranslationValues = function(t, n, r, e, u, o, i) {
                    var s = new a.ARRAY_TYPE(8);
                    s[0] = t, s[1] = n, s[2] = r, s[3] = e;
                    var c = .5 * u,
                        f = .5 * o,
                        M = .5 * i;
                    return s[4] = c * e + f * r - M * n, s[5] = f * e + M * t - c * r, s[6] = M * e + c * n - f * t, s[7] = -c * t - f * n - M * r, s
                }, n.fromRotationTranslation = i, n.fromTranslation = function(t, n) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], t[6] = .5 * n[2], t[7] = 0, t
                }, n.fromRotation = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
                }, n.fromMat4 = function(t, n) {
                    var r = e.create();
                    u.getRotation(r, n);
                    var o = new a.ARRAY_TYPE(3);
                    return u.getTranslation(o, n), i(t, r, o), t
                }, n.copy = s, n.identity = function(t) {
                    return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t
                }, n.set = function(t, n, r, a, e, u, o, i, s) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t[6] = i, t[7] = s, t
                }, n.getDual = function(t, n) {
                    return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t
                }, n.setDual = function(t, n) {
                    return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t
                }, n.getTranslation = function(t, n) {
                    var r = n[4],
                        a = n[5],
                        e = n[6],
                        u = n[7],
                        o = -n[0],
                        i = -n[1],
                        s = -n[2],
                        c = n[3];
                    return t[0] = 2 * (r * c + u * o + a * s - e * i), t[1] = 2 * (a * c + u * i + e * o - r * s), t[2] = 2 * (e * c + u * s + r * i - a * o), t
                }, n.translate = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = .5 * r[0],
                        s = .5 * r[1],
                        c = .5 * r[2],
                        f = n[4],
                        M = n[5],
                        h = n[6],
                        l = n[7];
                    return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = o * i + e * c - u * s + f, t[5] = o * s + u * i - a * c + M, t[6] = o * c + a * s - e * i + h, t[7] = -a * i - e * s - u * c + l, t
                }, n.rotateX = function(t, n, r) {
                    var a = -n[0],
                        u = -n[1],
                        o = -n[2],
                        i = n[3],
                        s = n[4],
                        c = n[5],
                        f = n[6],
                        M = n[7],
                        h = s * i + M * a + c * o - f * u,
                        l = c * i + M * u + f * a - s * o,
                        v = f * i + M * o + s * u - c * a,
                        d = M * i - s * a - c * u - f * o;
                    return e.rotateX(t, n, r), a = t[0], u = t[1], o = t[2], i = t[3], t[4] = h * i + d * a + l * o - v * u, t[5] = l * i + d * u + v * a - h * o, t[6] = v * i + d * o + h * u - l * a, t[7] = d * i - h * a - l * u - v * o, t
                }, n.rotateY = function(t, n, r) {
                    var a = -n[0],
                        u = -n[1],
                        o = -n[2],
                        i = n[3],
                        s = n[4],
                        c = n[5],
                        f = n[6],
                        M = n[7],
                        h = s * i + M * a + c * o - f * u,
                        l = c * i + M * u + f * a - s * o,
                        v = f * i + M * o + s * u - c * a,
                        d = M * i - s * a - c * u - f * o;
                    return e.rotateY(t, n, r), a = t[0], u = t[1], o = t[2], i = t[3], t[4] = h * i + d * a + l * o - v * u, t[5] = l * i + d * u + v * a - h * o, t[6] = v * i + d * o + h * u - l * a, t[7] = d * i - h * a - l * u - v * o, t
                }, n.rotateZ = function(t, n, r) {
                    var a = -n[0],
                        u = -n[1],
                        o = -n[2],
                        i = n[3],
                        s = n[4],
                        c = n[5],
                        f = n[6],
                        M = n[7],
                        h = s * i + M * a + c * o - f * u,
                        l = c * i + M * u + f * a - s * o,
                        v = f * i + M * o + s * u - c * a,
                        d = M * i - s * a - c * u - f * o;
                    return e.rotateZ(t, n, r), a = t[0], u = t[1], o = t[2], i = t[3], t[4] = h * i + d * a + l * o - v * u, t[5] = l * i + d * u + v * a - h * o, t[6] = v * i + d * o + h * u - l * a, t[7] = d * i - h * a - l * u - v * o, t
                }, n.rotateByQuatAppend = function(t, n, r) {
                    var a = r[0],
                        e = r[1],
                        u = r[2],
                        o = r[3],
                        i = n[0],
                        s = n[1],
                        c = n[2],
                        f = n[3];
                    return t[0] = i * o + f * a + s * u - c * e, t[1] = s * o + f * e + c * a - i * u, t[2] = c * o + f * u + i * e - s * a, t[3] = f * o - i * a - s * e - c * u, i = n[4], s = n[5], c = n[6], f = n[7], t[4] = i * o + f * a + s * u - c * e, t[5] = s * o + f * e + c * a - i * u, t[6] = c * o + f * u + i * e - s * a, t[7] = f * o - i * a - s * e - c * u, t
                }, n.rotateByQuatPrepend = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = r[0],
                        s = r[1],
                        c = r[2],
                        f = r[3];
                    return t[0] = a * f + o * i + e * c - u * s, t[1] = e * f + o * s + u * i - a * c, t[2] = u * f + o * c + a * s - e * i, t[3] = o * f - a * i - e * s - u * c, i = r[4], s = r[5], c = r[6], f = r[7], t[4] = a * f + o * i + e * c - u * s, t[5] = e * f + o * s + u * i - a * c, t[6] = u * f + o * c + a * s - e * i, t[7] = o * f - a * i - e * s - u * c, t
                }, n.rotateAroundAxis = function(t, n, r, e) {
                    if (Math.abs(e) < a.EPSILON) return s(t, n);
                    var u = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
                    e *= .5;
                    var o = Math.sin(e),
                        i = o * r[0] / u,
                        c = o * r[1] / u,
                        f = o * r[2] / u,
                        M = Math.cos(e),
                        h = n[0],
                        l = n[1],
                        v = n[2],
                        d = n[3];
                    t[0] = h * M + d * i + l * f - v * c, t[1] = l * M + d * c + v * i - h * f, t[2] = v * M + d * f + h * c - l * i, t[3] = d * M - h * i - l * c - v * f;
                    var b = n[4],
                        m = n[5],
                        p = n[6],
                        P = n[7];
                    return t[4] = b * M + P * i + m * f - p * c, t[5] = m * M + P * c + p * i - b * f, t[6] = p * M + P * f + b * c - m * i, t[7] = P * M - b * i - m * c - p * f, t
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t
                }, n.multiply = c, n.scale = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t
                }, n.lerp = function(t, n, r, a) {
                    var e = 1 - a;
                    f(n, r) < 0 && (a = -a);
                    return t[0] = n[0] * e + r[0] * a, t[1] = n[1] * e + r[1] * a, t[2] = n[2] * e + r[2] * a, t[3] = n[3] * e + r[3] * a, t[4] = n[4] * e + r[4] * a, t[5] = n[5] * e + r[5] * a, t[6] = n[6] * e + r[6] * a, t[7] = n[7] * e + r[7] * a, t
                }, n.invert = function(t, n) {
                    var r = h(n);
                    return t[0] = -n[0] / r, t[1] = -n[1] / r, t[2] = -n[2] / r, t[3] = n[3] / r, t[4] = -n[4] / r, t[5] = -n[5] / r, t[6] = -n[6] / r, t[7] = n[7] / r, t
                }, n.conjugate = function(t, n) {
                    return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = n[7], t
                }, n.normalize = function(t, n) {
                    var r = h(n);
                    if (r > 0) {
                        r = Math.sqrt(r);
                        var a = n[0] / r,
                            e = n[1] / r,
                            u = n[2] / r,
                            o = n[3] / r,
                            i = n[4],
                            s = n[5],
                            c = n[6],
                            f = n[7],
                            M = a * i + e * s + u * c + o * f;
                        t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = (i - a * M) / r, t[5] = (s - e * M) / r, t[6] = (c - u * M) / r, t[7] = (f - o * M) / r
                    }
                    return t
                }, n.str = function(t) {
                    return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")"
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = t[3],
                        i = t[4],
                        s = t[5],
                        c = t[6],
                        f = t[7],
                        M = n[0],
                        h = n[1],
                        l = n[2],
                        v = n[3],
                        d = n[4],
                        b = n[5],
                        m = n[6],
                        p = n[7];
                    return Math.abs(r - M) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(e - h) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(u - l) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(o - v) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - d) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(s - b) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(b)) && Math.abs(c - m) <= a.EPSILON * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(f - p) <= a.EPSILON * Math.max(1, Math.abs(f), Math.abs(p))
                };
                var a = o(r(0)),
                    e = o(r(3)),
                    u = o(r(4));

                function o(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }

                function i(t, n, r) {
                    var a = .5 * r[0],
                        e = .5 * r[1],
                        u = .5 * r[2],
                        o = n[0],
                        i = n[1],
                        s = n[2],
                        c = n[3];
                    return t[0] = o, t[1] = i, t[2] = s, t[3] = c, t[4] = a * c + e * s - u * i, t[5] = e * c + u * o - a * s, t[6] = u * c + a * i - e * o, t[7] = -a * o - e * i - u * s, t
                }

                function s(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t
                }
                n.getReal = e.copy;
                n.setReal = e.copy;

                function c(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = r[4],
                        s = r[5],
                        c = r[6],
                        f = r[7],
                        M = n[4],
                        h = n[5],
                        l = n[6],
                        v = n[7],
                        d = r[0],
                        b = r[1],
                        m = r[2],
                        p = r[3];
                    return t[0] = a * p + o * d + e * m - u * b, t[1] = e * p + o * b + u * d - a * m, t[2] = u * p + o * m + a * b - e * d, t[3] = o * p - a * d - e * b - u * m, t[4] = a * f + o * i + e * c - u * s + M * p + v * d + h * m - l * b, t[5] = e * f + o * s + u * i - a * c + h * p + v * b + l * d - M * m, t[6] = u * f + o * c + a * s - e * i + l * p + v * m + M * b - h * d, t[7] = o * f - a * i - e * s - u * c + v * p - M * d - h * b - l * m, t
                }
                n.mul = c;
                var f = n.dot = e.dot;
                var M = n.length = e.length,
                    h = (n.len = M, n.squaredLength = e.squaredLength);
                n.sqrLen = h
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new a.ARRAY_TYPE(6);
                    a.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0);
                    return t[0] = 1, t[3] = 1, t
                }, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(6);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t
                }, n.identity = function(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
                }, n.fromValues = function(t, n, r, e, u, o) {
                    var i = new a.ARRAY_TYPE(6);
                    return i[0] = t, i[1] = n, i[2] = r, i[3] = e, i[4] = u, i[5] = o, i
                }, n.set = function(t, n, r, a, e, u, o) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t[4] = u, t[5] = o, t
                }, n.invert = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = n[4],
                        i = n[5],
                        s = r * u - a * e;
                    if (!s) return null;
                    return s = 1 / s, t[0] = u * s, t[1] = -a * s, t[2] = -e * s, t[3] = r * s, t[4] = (e * i - u * o) * s, t[5] = (a * o - r * i) * s, t
                }, n.determinant = function(t) {
                    return t[0] * t[3] - t[1] * t[2]
                }, n.multiply = e, n.rotate = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = Math.sin(r),
                        f = Math.cos(r);
                    return t[0] = a * f + u * c, t[1] = e * f + o * c, t[2] = a * -c + u * f, t[3] = e * -c + o * f, t[4] = i, t[5] = s, t
                }, n.scale = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = r[0],
                        f = r[1];
                    return t[0] = a * c, t[1] = e * c, t[2] = u * f, t[3] = o * f, t[4] = i, t[5] = s, t
                }, n.translate = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = r[0],
                        f = r[1];
                    return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = a * c + u * f + i, t[5] = e * c + o * f + s, t
                }, n.fromRotation = function(t, n) {
                    var r = Math.sin(n),
                        a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t[4] = 0, t[5] = 0, t
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t
                }, n.fromTranslation = function(t, n) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t
                }, n.str = function(t) {
                    return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t
                }, n.subtract = u, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t[4] = n[4] + r[4] * a, t[5] = n[5] + r[5] * a, t
                }, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = t[3],
                        i = t[4],
                        s = t[5],
                        c = n[0],
                        f = n[1],
                        M = n[2],
                        h = n[3],
                        l = n[4],
                        v = n[5];
                    return Math.abs(r - c) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(e - f) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(f)) && Math.abs(u - M) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(M)) && Math.abs(o - h) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(h)) && Math.abs(i - l) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(s - v) <= a.EPSILON * Math.max(1, Math.abs(s), Math.abs(v))
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = n[4],
                        s = n[5],
                        c = r[0],
                        f = r[1],
                        M = r[2],
                        h = r[3],
                        l = r[4],
                        v = r[5];
                    return t[0] = a * c + u * f, t[1] = e * c + o * f, t[2] = a * M + u * h, t[3] = e * M + o * h, t[4] = a * l + u * v + i, t[5] = e * l + o * v + s, t
                }

                function u(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t
                }
                n.mul = e, n.sub = u
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.sub = n.mul = void 0, n.create = function() {
                    var t = new a.ARRAY_TYPE(4);
                    a.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0);
                    return t[0] = 1, t[3] = 1, t
                }, n.clone = function(t) {
                    var n = new a.ARRAY_TYPE(4);
                    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n
                }, n.copy = function(t, n) {
                    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t
                }, n.identity = function(t) {
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                }, n.fromValues = function(t, n, r, e) {
                    var u = new a.ARRAY_TYPE(4);
                    return u[0] = t, u[1] = n, u[2] = r, u[3] = e, u
                }, n.set = function(t, n, r, a, e) {
                    return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t
                }, n.transpose = function(t, n) {
                    if (t === n) {
                        var r = n[1];
                        t[1] = n[2], t[2] = r
                    } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];
                    return t
                }, n.invert = function(t, n) {
                    var r = n[0],
                        a = n[1],
                        e = n[2],
                        u = n[3],
                        o = r * u - e * a;
                    if (!o) return null;
                    return o = 1 / o, t[0] = u * o, t[1] = -a * o, t[2] = -e * o, t[3] = r * o, t
                }, n.adjoint = function(t, n) {
                    var r = n[0];
                    return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t
                }, n.determinant = function(t) {
                    return t[0] * t[3] - t[2] * t[1]
                }, n.multiply = e, n.rotate = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = Math.sin(r),
                        s = Math.cos(r);
                    return t[0] = a * s + u * i, t[1] = e * s + o * i, t[2] = a * -i + u * s, t[3] = e * -i + o * s, t
                }, n.scale = function(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = r[0],
                        s = r[1];
                    return t[0] = a * i, t[1] = e * i, t[2] = u * s, t[3] = o * s, t
                }, n.fromRotation = function(t, n) {
                    var r = Math.sin(n),
                        a = Math.cos(n);
                    return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t
                }, n.fromScaling = function(t, n) {
                    return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t
                }, n.str = function(t) {
                    return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
                }, n.frob = function(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
                }, n.LDU = function(t, n, r, a) {
                    return t[2] = a[2] / a[0], r[0] = a[0], r[1] = a[1], r[3] = a[3] - t[2] * r[1], [t, n, r]
                }, n.add = function(t, n, r) {
                    return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t
                }, n.subtract = u, n.exactEquals = function(t, n) {
                    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3]
                }, n.equals = function(t, n) {
                    var r = t[0],
                        e = t[1],
                        u = t[2],
                        o = t[3],
                        i = n[0],
                        s = n[1],
                        c = n[2],
                        f = n[3];
                    return Math.abs(r - i) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(e - s) <= a.EPSILON * Math.max(1, Math.abs(e), Math.abs(s)) && Math.abs(u - c) <= a.EPSILON * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(o - f) <= a.EPSILON * Math.max(1, Math.abs(o), Math.abs(f))
                }, n.multiplyScalar = function(t, n, r) {
                    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t
                }, n.multiplyScalarAndAdd = function(t, n, r, a) {
                    return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t
                };
                var a = function(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }(r(0));

                function e(t, n, r) {
                    var a = n[0],
                        e = n[1],
                        u = n[2],
                        o = n[3],
                        i = r[0],
                        s = r[1],
                        c = r[2],
                        f = r[3];
                    return t[0] = a * i + u * s, t[1] = e * i + o * s, t[2] = a * c + u * f, t[3] = e * c + o * f, t
                }

                function u(t, n, r) {
                    return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t
                }
                n.mul = e, n.sub = u
            }, function(t, n, r) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.vec4 = n.vec3 = n.vec2 = n.quat2 = n.quat = n.mat4 = n.mat3 = n.mat2d = n.mat2 = n.glMatrix = void 0;
                var a = l(r(0)),
                    e = l(r(9)),
                    u = l(r(8)),
                    o = l(r(5)),
                    i = l(r(4)),
                    s = l(r(3)),
                    c = l(r(7)),
                    f = l(r(6)),
                    M = l(r(2)),
                    h = l(r(1));

                function l(t) {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n.default = t, n
                }
                n.glMatrix = a, n.mat2 = e, n.mat2d = u, n.mat3 = o, n.mat4 = i, n.quat = s, n.quat2 = c, n.vec2 = f, n.vec3 = M, n.vec4 = h
            }])
        })
    }, {}],
    2: [function(require, module, exports) {
        module.exports = function(strings) {
            if (typeof strings === "string") strings = [strings];
            var exprs = [].slice.call(arguments, 1);
            var parts = [];
            for (var i = 0; i < strings.length - 1; i++) {
                parts.push(strings[i], exprs[i] || "")
            }
            parts.push(strings[i]);
            return parts.join("")
        }
    }, {}],
    3: [function(require, module, exports) {
        (function(global) {
            (function() {
                "use strict";
                var HowlerGlobal = function() {
                    this.init()
                };
                HowlerGlobal.prototype = {
                    init: function() {
                        var self = this || Howler;
                        self._counter = 1e3;
                        self._codecs = {};
                        self._howls = [];
                        self._muted = false;
                        self._volume = 1;
                        self._canPlayEvent = "canplaythrough";
                        self._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
                        self.masterGain = null;
                        self.noAudio = false;
                        self.usingWebAudio = true;
                        self.autoSuspend = true;
                        self.ctx = null;
                        self.mobileAutoEnable = true;
                        self._setup();
                        return self
                    },
                    volume: function(vol) {
                        var self = this || Howler;
                        vol = parseFloat(vol);
                        if (!self.ctx) {
                            setupAudioContext()
                        }
                        if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
                            self._volume = vol;
                            if (self._muted) {
                                return self
                            }
                            if (self.usingWebAudio) {
                                self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime)
                            }
                            for (var i = 0; i < self._howls.length; i++) {
                                if (!self._howls[i]._webAudio) {
                                    var ids = self._howls[i]._getSoundIds();
                                    for (var j = 0; j < ids.length; j++) {
                                        var sound = self._howls[i]._soundById(ids[j]);
                                        if (sound && sound._node) {
                                            sound._node.volume = sound._volume * vol
                                        }
                                    }
                                }
                            }
                            return self
                        }
                        return self._volume
                    },
                    mute: function(muted) {
                        var self = this || Howler;
                        if (!self.ctx) {
                            setupAudioContext()
                        }
                        self._muted = muted;
                        if (self.usingWebAudio) {
                            self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime)
                        }
                        for (var i = 0; i < self._howls.length; i++) {
                            if (!self._howls[i]._webAudio) {
                                var ids = self._howls[i]._getSoundIds();
                                for (var j = 0; j < ids.length; j++) {
                                    var sound = self._howls[i]._soundById(ids[j]);
                                    if (sound && sound._node) {
                                        sound._node.muted = muted ? true : sound._muted
                                    }
                                }
                            }
                        }
                        return self
                    },
                    unload: function() {
                        var self = this || Howler;
                        for (var i = self._howls.length - 1; i >= 0; i--) {
                            self._howls[i].unload()
                        }
                        if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== "undefined") {
                            self.ctx.close();
                            self.ctx = null;
                            setupAudioContext()
                        }
                        return self
                    },
                    codecs: function(ext) {
                        return (this || Howler)._codecs[ext.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var self = this || Howler;
                        self.state = self.ctx ? self.ctx.state || "running" : "running";
                        self._autoSuspend();
                        if (!self.usingWebAudio) {
                            if (typeof Audio !== "undefined") {
                                try {
                                    var test = new Audio;
                                    if (typeof test.oncanplaythrough === "undefined") {
                                        self._canPlayEvent = "canplay"
                                    }
                                } catch (e) {
                                    self.noAudio = true
                                }
                            } else {
                                self.noAudio = true
                            }
                        }
                        try {
                            var test = new Audio;
                            if (test.muted) {
                                self.noAudio = true
                            }
                        } catch (e) {}
                        if (!self.noAudio) {
                            self._setupCodecs()
                        }
                        return self
                    },
                    _setupCodecs: function() {
                        var self = this || Howler;
                        var audioTest = null;
                        try {
                            audioTest = typeof Audio !== "undefined" ? new Audio : null
                        } catch (err) {
                            return self
                        }
                        if (!audioTest || typeof audioTest.canPlayType !== "function") {
                            return self
                        }
                        var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
                        var checkOpera = self._navigator && self._navigator.userAgent.match(/OPR\/([0-6].)/g);
                        var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
                        self._codecs = {
                            mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                            mpeg: !!mpegTest,
                            opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                            aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            webm: !!audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
                        };
                        return self
                    },
                    _enableMobileAudio: function() {
                        var self = this || Howler;
                        var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi|Chrome/i.test(self._navigator && self._navigator.userAgent);
                        if (self._mobileEnabled || !self.ctx || !isMobile) {
                            return
                        }
                        self._mobileEnabled = false;
                        self.mobileAutoEnable = false;
                        if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
                            self._mobileUnloaded = true;
                            self.unload()
                        }
                        self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);
                        var unlock = function(e) {
                            Howler._autoResume();
                            var source = self.ctx.createBufferSource();
                            source.buffer = self._scratchBuffer;
                            source.connect(self.ctx.destination);
                            if (typeof source.start === "undefined") {
                                source.noteOn(0)
                            } else {
                                source.start(0)
                            }
                            if (typeof self.ctx.resume === "function") {
                                self.ctx.resume()
                            }
                            source.onended = function() {
                                source.disconnect(0);
                                self._mobileEnabled = true;
                                document.removeEventListener("touchstart", unlock, true);
                                document.removeEventListener("touchend", unlock, true);
                                document.removeEventListener("click", unlock, true);
                                for (var i = 0; i < self._howls.length; i++) {
                                    self._howls[i]._emit("unlock")
                                }
                            }
                        };
                        document.addEventListener("touchstart", unlock, true);
                        document.addEventListener("touchend", unlock, true);
                        document.addEventListener("click", unlock, true);
                        return self
                    },
                    _autoSuspend: function() {
                        var self = this;
                        if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === "undefined" || !Howler.usingWebAudio) {
                            return
                        }
                        for (var i = 0; i < self._howls.length; i++) {
                            if (self._howls[i]._webAudio) {
                                for (var j = 0; j < self._howls[i]._sounds.length; j++) {
                                    if (!self._howls[i]._sounds[j]._paused) {
                                        return self
                                    }
                                }
                            }
                        }
                        if (self._suspendTimer) {
                            clearTimeout(self._suspendTimer)
                        }
                        self._suspendTimer = setTimeout(function() {
                            if (!self.autoSuspend) {
                                return
                            }
                            self._suspendTimer = null;
                            self.state = "suspending";
                            self.ctx.suspend().then(function() {
                                self.state = "suspended";
                                if (self._resumeAfterSuspend) {
                                    delete self._resumeAfterSuspend;
                                    self._autoResume()
                                }
                            })
                        }, 3e4);
                        return self
                    },
                    _autoResume: function() {
                        var self = this;
                        if (!self.ctx || typeof self.ctx.resume === "undefined" || !Howler.usingWebAudio) {
                            return
                        }
                        if (self.state === "running" && self._suspendTimer) {
                            clearTimeout(self._suspendTimer);
                            self._suspendTimer = null
                        } else if (self.state === "suspended") {
                            self.ctx.resume().then(function() {
                                self.state = "running";
                                for (var i = 0; i < self._howls.length; i++) {
                                    self._howls[i]._emit("resume")
                                }
                            });
                            if (self._suspendTimer) {
                                clearTimeout(self._suspendTimer);
                                self._suspendTimer = null
                            }
                        } else if (self.state === "suspending") {
                            self._resumeAfterSuspend = true
                        }
                        return self
                    }
                };
                var Howler = new HowlerGlobal;
                var Howl = function(o) {
                    var self = this;
                    if (!o.src || o.src.length === 0) {
                        console.error("An array of source files must be passed with any new Howl.");
                        return
                    }
                    self.init(o)
                };
                Howl.prototype = {
                    init: function(o) {
                        var self = this;
                        if (!Howler.ctx) {
                            setupAudioContext()
                        }
                        self._autoplay = o.autoplay || false;
                        self._format = typeof o.format !== "string" ? o.format : [o.format];
                        self._html5 = o.html5 || false;
                        self._muted = o.mute || false;
                        self._loop = o.loop || false;
                        self._pool = o.pool || 5;
                        self._preload = typeof o.preload === "boolean" ? o.preload : true;
                        self._rate = o.rate || 1;
                        self._sprite = o.sprite || {};
                        self._src = typeof o.src !== "string" ? o.src : [o.src];
                        self._volume = o.volume !== undefined ? o.volume : 1;
                        self._xhrWithCredentials = o.xhrWithCredentials || false;
                        self._duration = 0;
                        self._state = "unloaded";
                        self._sounds = [];
                        self._endTimers = {};
                        self._queue = [];
                        self._playLock = false;
                        self._onend = o.onend ? [{
                            fn: o.onend
                        }] : [];
                        self._onfade = o.onfade ? [{
                            fn: o.onfade
                        }] : [];
                        self._onload = o.onload ? [{
                            fn: o.onload
                        }] : [];
                        self._onloaderror = o.onloaderror ? [{
                            fn: o.onloaderror
                        }] : [];
                        self._onplayerror = o.onplayerror ? [{
                            fn: o.onplayerror
                        }] : [];
                        self._onpause = o.onpause ? [{
                            fn: o.onpause
                        }] : [];
                        self._onplay = o.onplay ? [{
                            fn: o.onplay
                        }] : [];
                        self._onstop = o.onstop ? [{
                            fn: o.onstop
                        }] : [];
                        self._onmute = o.onmute ? [{
                            fn: o.onmute
                        }] : [];
                        self._onvolume = o.onvolume ? [{
                            fn: o.onvolume
                        }] : [];
                        self._onrate = o.onrate ? [{
                            fn: o.onrate
                        }] : [];
                        self._onseek = o.onseek ? [{
                            fn: o.onseek
                        }] : [];
                        self._onunlock = o.onunlock ? [{
                            fn: o.onunlock
                        }] : [];
                        self._onresume = [];
                        self._webAudio = Howler.usingWebAudio && !self._html5;
                        if (typeof Howler.ctx !== "undefined" && Howler.ctx && Howler.mobileAutoEnable) {
                            Howler._enableMobileAudio()
                        }
                        Howler._howls.push(self);
                        if (self._autoplay) {
                            self._queue.push({
                                event: "play",
                                action: function() {
                                    self.play()
                                }
                            })
                        }
                        if (self._preload) {
                            self.load()
                        }
                        return self
                    },
                    load: function() {
                        var self = this;
                        var url = null;
                        if (Howler.noAudio) {
                            self._emit("loaderror", null, "No audio support.");
                            return
                        }
                        if (typeof self._src === "string") {
                            self._src = [self._src]
                        }
                        for (var i = 0; i < self._src.length; i++) {
                            var ext, str;
                            if (self._format && self._format[i]) {
                                ext = self._format[i]
                            } else {
                                str = self._src[i];
                                if (typeof str !== "string") {
                                    self._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                    continue
                                }
                                ext = /^data:audio\/([^;,]+);/i.exec(str);
                                if (!ext) {
                                    ext = /\.([^.]+)$/.exec(str.split("?", 1)[0])
                                }
                                if (ext) {
                                    ext = ext[1].toLowerCase()
                                }
                            }
                            if (!ext) {
                                console.warn('No file extension was found. Consider using the "format" property or specify an extension.')
                            }
                            if (ext && Howler.codecs(ext)) {
                                url = self._src[i];
                                break
                            }
                        }
                        if (!url) {
                            self._emit("loaderror", null, "No codec support for selected audio sources.");
                            return
                        }
                        self._src = url;
                        self._state = "loading";
                        if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
                            self._html5 = true;
                            self._webAudio = false
                        }
                        new Sound(self);
                        if (self._webAudio) {
                            loadBuffer(self)
                        }
                        return self
                    },
                    play: function(sprite, internal) {
                        var self = this;
                        var id = null;
                        if (typeof sprite === "number") {
                            id = sprite;
                            sprite = null
                        } else if (typeof sprite === "string" && self._state === "loaded" && !self._sprite[sprite]) {
                            return null
                        } else if (typeof sprite === "undefined") {
                            sprite = "__default";
                            var num = 0;
                            for (var i = 0; i < self._sounds.length; i++) {
                                if (self._sounds[i]._paused && !self._sounds[i]._ended) {
                                    num++;
                                    id = self._sounds[i]._id
                                }
                            }
                            if (num === 1) {
                                sprite = null
                            } else {
                                id = null
                            }
                        }
                        var sound = id ? self._soundById(id) : self._inactiveSound();
                        if (!sound) {
                            return null
                        }
                        if (id && !sprite) {
                            sprite = sound._sprite || "__default"
                        }
                        if (self._state !== "loaded") {
                            sound._sprite = sprite;
                            sound._ended = false;
                            var soundId = sound._id;
                            self._queue.push({
                                event: "play",
                                action: function() {
                                    self.play(soundId)
                                }
                            });
                            return soundId
                        }
                        if (id && !sound._paused) {
                            if (!internal) {
                                self._loadQueue("play")
                            }
                            return sound._id
                        }
                        if (self._webAudio) {
                            Howler._autoResume()
                        }
                        var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1e3);
                        var duration = Math.max(0, (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3 - seek);
                        var timeout = duration * 1e3 / Math.abs(sound._rate);
                        sound._paused = false;
                        sound._ended = false;
                        sound._sprite = sprite;
                        sound._seek = seek;
                        sound._start = self._sprite[sprite][0] / 1e3;
                        sound._stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1e3;
                        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
                        if (sound._seek >= sound._stop) {
                            self._ended(sound);
                            return
                        }
                        var node = sound._node;
                        if (self._webAudio) {
                            var playWebAudio = function() {
                                self._refreshBuffer(sound);
                                var vol = sound._muted || self._muted ? 0 : sound._volume;
                                node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
                                sound._playStart = Howler.ctx.currentTime;
                                if (typeof node.bufferSource.start === "undefined") {
                                    sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration)
                                } else {
                                    sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration)
                                }
                                if (timeout !== Infinity) {
                                    self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)
                                }
                                if (!internal) {
                                    setTimeout(function() {
                                        self._emit("play", sound._id)
                                    }, 0)
                                }
                            };
                            if (Howler.state === "running") {
                                playWebAudio()
                            } else {
                                self.once("resume", playWebAudio);
                                self._clearTimer(sound._id)
                            }
                        } else {
                            var playHtml5 = function() {
                                node.currentTime = seek;
                                node.muted = sound._muted || self._muted || Howler._muted || node.muted;
                                node.volume = sound._volume * Howler.volume();
                                node.playbackRate = sound._rate;
                                try {
                                    var play = node.play();
                                    if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                                        self._playLock = true;
                                        play.then(function() {
                                            self._playLock = false;
                                            if (!internal) {
                                                self._emit("play", sound._id)
                                            }
                                        }).catch(function() {
                                            self._playLock = false;
                                            self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue " + "on mobile devices and Chrome where playback was not within a user interaction.")
                                        })
                                    } else if (!internal) {
                                        self._emit("play", sound._id)
                                    }
                                    node.playbackRate = sound._rate;
                                    if (node.paused) {
                                        self._emit("playerror", sound._id, "Playback was unable to start. This is most commonly an issue " + "on mobile devices and Chrome where playback was not within a user interaction.");
                                        return
                                    }
                                    if (sprite !== "__default" || sound._loop) {
                                        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)
                                    } else {
                                        self._endTimers[sound._id] = function() {
                                            self._ended(sound);
                                            node.removeEventListener("ended", self._endTimers[sound._id], false)
                                        };
                                        node.addEventListener("ended", self._endTimers[sound._id], false)
                                    }
                                } catch (err) {
                                    self._emit("playerror", sound._id, err)
                                }
                            };
                            var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler._navigator.isCocoonJS;
                            if (node.readyState >= 3 || loadedNoReadyState) {
                                playHtml5()
                            } else {
                                var listener = function() {
                                    playHtml5();
                                    node.removeEventListener(Howler._canPlayEvent, listener, false)
                                };
                                node.addEventListener(Howler._canPlayEvent, listener, false);
                                self._clearTimer(sound._id)
                            }
                        }
                        return sound._id
                    },
                    pause: function(id) {
                        var self = this;
                        if (self._state !== "loaded" || self._playLock) {
                            self._queue.push({
                                event: "pause",
                                action: function() {
                                    self.pause(id)
                                }
                            });
                            return self
                        }
                        var ids = self._getSoundIds(id);
                        for (var i = 0; i < ids.length; i++) {
                            self._clearTimer(ids[i]);
                            var sound = self._soundById(ids[i]);
                            if (sound && !sound._paused) {
                                sound._seek = self.seek(ids[i]);
                                sound._rateSeek = 0;
                                sound._paused = true;
                                self._stopFade(ids[i]);
                                if (sound._node) {
                                    if (self._webAudio) {
                                        if (!sound._node.bufferSource) {
                                            continue
                                        }
                                        if (typeof sound._node.bufferSource.stop === "undefined") {
                                            sound._node.bufferSource.noteOff(0)
                                        } else {
                                            sound._node.bufferSource.stop(0)
                                        }
                                        self._cleanBuffer(sound._node)
                                    } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                                        sound._node.pause()
                                    }
                                }
                            }
                            if (!arguments[1]) {
                                self._emit("pause", sound ? sound._id : null)
                            }
                        }
                        return self
                    },
                    stop: function(id, internal) {
                        var self = this;
                        if (self._state !== "loaded" || self._playLock) {
                            self._queue.push({
                                event: "stop",
                                action: function() {
                                    self.stop(id)
                                }
                            });
                            return self
                        }
                        var ids = self._getSoundIds(id);
                        for (var i = 0; i < ids.length; i++) {
                            self._clearTimer(ids[i]);
                            var sound = self._soundById(ids[i]);
                            if (sound) {
                                sound._seek = sound._start || 0;
                                sound._rateSeek = 0;
                                sound._paused = true;
                                sound._ended = true;
                                self._stopFade(ids[i]);
                                if (sound._node) {
                                    if (self._webAudio) {
                                        if (sound._node.bufferSource) {
                                            if (typeof sound._node.bufferSource.stop === "undefined") {
                                                sound._node.bufferSource.noteOff(0)
                                            } else {
                                                sound._node.bufferSource.stop(0)
                                            }
                                            self._cleanBuffer(sound._node)
                                        }
                                    } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
                                        sound._node.currentTime = sound._start || 0;
                                        sound._node.pause()
                                    }
                                }
                                if (!internal) {
                                    self._emit("stop", sound._id)
                                }
                            }
                        }
                        return self
                    },
                    mute: function(muted, id) {
                        var self = this;
                        if (self._state !== "loaded" || self._playLock) {
                            self._queue.push({
                                event: "mute",
                                action: function() {
                                    self.mute(muted, id)
                                }
                            });
                            return self
                        }
                        if (typeof id === "undefined") {
                            if (typeof muted === "boolean") {
                                self._muted = muted
                            } else {
                                return self._muted
                            }
                        }
                        var ids = self._getSoundIds(id);
                        for (var i = 0; i < ids.length; i++) {
                            var sound = self._soundById(ids[i]);
                            if (sound) {
                                sound._muted = muted;
                                if (sound._interval) {
                                    self._stopFade(sound._id)
                                }
                                if (self._webAudio && sound._node) {
                                    sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime)
                                } else if (sound._node) {
                                    sound._node.muted = Howler._muted ? true : muted
                                }
                                self._emit("mute", sound._id)
                            }
                        }
                        return self
                    },
                    volume: function() {
                        var self = this;
                        var args = arguments;
                        var vol, id;
                        if (args.length === 0) {
                            return self._volume
                        } else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
                            var ids = self._getSoundIds();
                            var index = ids.indexOf(args[0]);
                            if (index >= 0) {
                                id = parseInt(args[0], 10)
                            } else {
                                vol = parseFloat(args[0])
                            }
                        } else if (args.length >= 2) {
                            vol = parseFloat(args[0]);
                            id = parseInt(args[1], 10)
                        }
                        var sound;
                        if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
                            if (self._state !== "loaded" || self._playLock) {
                                self._queue.push({
                                    event: "volume",
                                    action: function() {
                                        self.volume.apply(self, args)
                                    }
                                });
                                return self
                            }
                            if (typeof id === "undefined") {
                                self._volume = vol
                            }
                            id = self._getSoundIds(id);
                            for (var i = 0; i < id.length; i++) {
                                sound = self._soundById(id[i]);
                                if (sound) {
                                    sound._volume = vol;
                                    if (!args[2]) {
                                        self._stopFade(id[i])
                                    }
                                    if (self._webAudio && sound._node && !sound._muted) {
                                        sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime)
                                    } else if (sound._node && !sound._muted) {
                                        sound._node.volume = vol * Howler.volume()
                                    }
                                    self._emit("volume", sound._id)
                                }
                            }
                        } else {
                            sound = id ? self._soundById(id) : self._sounds[0];
                            return sound ? sound._volume : 0
                        }
                        return self
                    },
                    fade: function(from, to, len, id) {
                        var self = this;
                        if (self._state !== "loaded" || self._playLock) {
                            self._queue.push({
                                event: "fade",
                                action: function() {
                                    self.fade(from, to, len, id)
                                }
                            });
                            return self
                        }
                        self.volume(from, id);
                        var ids = self._getSoundIds(id);
                        for (var i = 0; i < ids.length; i++) {
                            var sound = self._soundById(ids[i]);
                            if (sound) {
                                if (!id) {
                                    self._stopFade(ids[i])
                                }
                                if (self._webAudio && !sound._muted) {
                                    var currentTime = Howler.ctx.currentTime;
                                    var end = currentTime + len / 1e3;
                                    sound._volume = from;
                                    sound._node.gain.setValueAtTime(from, currentTime);
                                    sound._node.gain.linearRampToValueAtTime(to, end)
                                }
                                self._startFadeInterval(sound, from, to, len, ids[i], typeof id === "undefined")
                            }
                        }
                        return self
                    },
                    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
                        var self = this;
                        var vol = from;
                        var diff = to - from;
                        var steps = Math.abs(diff / .01);
                        var stepLen = Math.max(4, steps > 0 ? len / steps : len);
                        var lastTick = Date.now();
                        sound._fadeTo = to;
                        sound._interval = setInterval(function() {
                            var tick = (Date.now() - lastTick) / len;
                            lastTick = Date.now();
                            vol += diff * tick;
                            vol = Math.max(0, vol);
                            vol = Math.min(1, vol);
                            vol = Math.round(vol * 100) / 100;
                            if (self._webAudio) {
                                sound._volume = vol
                            } else {
                                self.volume(vol, sound._id, true)
                            }
                            if (isGroup) {
                                self._volume = vol
                            }
                            if (to < from && vol <= to || to > from && vol >= to) {
                                clearInterval(sound._interval);
                                sound._interval = null;
                                sound._fadeTo = null;
                                self.volume(to, sound._id);
                                self._emit("fade", sound._id)
                            }
                        }, stepLen)
                    },
                    _stopFade: function(id) {
                        var self = this;
                        var sound = self._soundById(id);
                        if (sound && sound._interval) {
                            if (self._webAudio) {
                                sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime)
                            }
                            clearInterval(sound._interval);
                            sound._interval = null;
                            self.volume(sound._fadeTo, id);
                            sound._fadeTo = null;
                            self._emit("fade", id)
                        }
                        return self
                    },
                    loop: function() {
                        var self = this;
                        var args = arguments;
                        var loop, id, sound;
                        if (args.length === 0) {
                            return self._loop
                        } else if (args.length === 1) {
                            if (typeof args[0] === "boolean") {
                                loop = args[0];
                                self._loop = loop
                            } else {
                                sound = self._soundById(parseInt(args[0], 10));
                                return sound ? sound._loop : false
                            }
                        } else if (args.length === 2) {
                            loop = args[0];
                            id = parseInt(args[1], 10)
                        }
                        var ids = self._getSoundIds(id);
                        for (var i = 0; i < ids.length; i++) {
                            sound = self._soundById(ids[i]);
                            if (sound) {
                                sound._loop = loop;
                                if (self._webAudio && sound._node && sound._node.bufferSource) {
                                    sound._node.bufferSource.loop = loop;
                                    if (loop) {
                                        sound._node.bufferSource.loopStart = sound._start || 0;
                                        sound._node.bufferSource.loopEnd = sound._stop
                                    }
                                }
                            }
                        }
                        return self
                    },
                    rate: function() {
                        var self = this;
                        var args = arguments;
                        var rate, id;
                        if (args.length === 0) {
                            id = self._sounds[0]._id
                        } else if (args.length === 1) {
                            var ids = self._getSoundIds();
                            var index = ids.indexOf(args[0]);
                            if (index >= 0) {
                                id = parseInt(args[0], 10)
                            } else {
                                rate = parseFloat(args[0])
                            }
                        } else if (args.length === 2) {
                            rate = parseFloat(args[0]);
                            id = parseInt(args[1], 10)
                        }
                        var sound;
                        if (typeof rate === "number") {
                            if (self._state !== "loaded" || self._playLock) {
                                self._queue.push({
                                    event: "rate",
                                    action: function() {
                                        self.rate.apply(self, args)
                                    }
                                });
                                return self
                            }
                            if (typeof id === "undefined") {
                                self._rate = rate
                            }
                            id = self._getSoundIds(id);
                            for (var i = 0; i < id.length; i++) {
                                sound = self._soundById(id[i]);
                                if (sound) {
                                    sound._rateSeek = self.seek(id[i]);
                                    sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
                                    sound._rate = rate;
                                    if (self._webAudio && sound._node && sound._node.bufferSource) {
                                        sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime)
                                    } else if (sound._node) {
                                        sound._node.playbackRate = rate
                                    }
                                    var seek = self.seek(id[i]);
                                    var duration = (self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1e3 - seek;
                                    var timeout = duration * 1e3 / Math.abs(sound._rate);
                                    if (self._endTimers[id[i]] || !sound._paused) {
                                        self._clearTimer(id[i]);
                                        self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout)
                                    }
                                    self._emit("rate", sound._id)
                                }
                            }
                        } else {
                            sound = self._soundById(id);
                            return sound ? sound._rate : self._rate
                        }
                        return self
                    },
                    seek: function() {
                        var self = this;
                        var args = arguments;
                        var seek, id;
                        if (args.length === 0) {
                            id = self._sounds[0]._id
                        } else if (args.length === 1) {
                            var ids = self._getSoundIds();
                            var index = ids.indexOf(args[0]);
                            if (index >= 0) {
                                id = parseInt(args[0], 10)
                            } else if (self._sounds.length) {
                                id = self._sounds[0]._id;
                                seek = parseFloat(args[0])
                            }
                        } else if (args.length === 2) {
                            seek = parseFloat(args[0]);
                            id = parseInt(args[1], 10)
                        }
                        if (typeof id === "undefined") {
                            return self
                        }
                        if (self._state !== "loaded" || self._playLock) {
                            self._queue.push({
                                event: "seek",
                                action: function() {
                                    self.seek.apply(self, args)
                                }
                            });
                            return self
                        }
                        var sound = self._soundById(id);
                        if (sound) {
                            if (typeof seek === "number" && seek >= 0) {
                                var playing = self.playing(id);
                                if (playing) {
                                    self.pause(id, true)
                                }
                                sound._seek = seek;
                                sound._ended = false;
                                self._clearTimer(id);
                                if (!self._webAudio && sound._node) {
                                    sound._node.currentTime = seek
                                }
                                var seekAndEmit = function() {
                                    self._emit("seek", id);
                                    if (playing) {
                                        self.play(id, true)
                                    }
                                };
                                if (playing && !self._webAudio) {
                                    var emitSeek = function() {
                                        if (!self._playLock) {
                                            seekAndEmit()
                                        } else {
                                            setTimeout(emitSeek, 0)
                                        }
                                    };
                                    setTimeout(emitSeek, 0)
                                } else {
                                    seekAndEmit()
                                }
                            } else {
                                if (self._webAudio) {
                                    var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
                                    var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
                                    return sound._seek + (rateSeek + realTime * Math.abs(sound._rate))
                                } else {
                                    return sound._node.currentTime
                                }
                            }
                        }
                        return self
                    },
                    playing: function(id) {
                        var self = this;
                        if (typeof id === "number") {
                            var sound = self._soundById(id);
                            return sound ? !sound._paused : false
                        }
                        for (var i = 0; i < self._sounds.length; i++) {
                            if (!self._sounds[i]._paused) {
                                return true
                            }
                        }
                        return false
                    },
                    duration: function(id) {
                        var self = this;
                        var duration = self._duration;
                        var sound = self._soundById(id);
                        if (sound) {
                            duration = self._sprite[sound._sprite][1] / 1e3
                        }
                        return duration
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        var self = this;
                        var sounds = self._sounds;
                        for (var i = 0; i < sounds.length; i++) {
                            if (!sounds[i]._paused) {
                                self.stop(sounds[i]._id)
                            }
                            if (!self._webAudio) {
                                var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
                                if (!checkIE) {
                                    sounds[i]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"
                                }
                                sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
                                sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false)
                            }
                            delete sounds[i]._node;
                            self._clearTimer(sounds[i]._id)
                        }
                        var index = Howler._howls.indexOf(self);
                        if (index >= 0) {
                            Howler._howls.splice(index, 1)
                        }
                        var remCache = true;
                        for (i = 0; i < Howler._howls.length; i++) {
                            if (Howler._howls[i]._src === self._src) {
                                remCache = false;
                                break
                            }
                        }
                        if (cache && remCache) {
                            delete cache[self._src]
                        }
                        Howler.noAudio = false;
                        self._state = "unloaded";
                        self._sounds = [];
                        self = null;
                        return null
                    },
                    on: function(event, fn, id, once) {
                        var self = this;
                        var events = self["_on" + event];
                        if (typeof fn === "function") {
                            events.push(once ? {
                                id: id,
                                fn: fn,
                                once: once
                            } : {
                                id: id,
                                fn: fn
                            })
                        }
                        return self
                    },
                    off: function(event, fn, id) {
                        var self = this;
                        var events = self["_on" + event];
                        var i = 0;
                        if (typeof fn === "number") {
                            id = fn;
                            fn = null
                        }
                        if (fn || id) {
                            for (i = 0; i < events.length; i++) {
                                var isId = id === events[i].id;
                                if (fn === events[i].fn && isId || !fn && isId) {
                                    events.splice(i, 1);
                                    break
                                }
                            }
                        } else if (event) {
                            self["_on" + event] = []
                        } else {
                            var keys = Object.keys(self);
                            for (i = 0; i < keys.length; i++) {
                                if (keys[i].indexOf("_on") === 0 && Array.isArray(self[keys[i]])) {
                                    self[keys[i]] = []
                                }
                            }
                        }
                        return self
                    },
                    once: function(event, fn, id) {
                        var self = this;
                        self.on(event, fn, id, 1);
                        return self
                    },
                    _emit: function(event, id, msg) {
                        var self = this;
                        var events = self["_on" + event];
                        for (var i = events.length - 1; i >= 0; i--) {
                            if (!events[i].id || events[i].id === id || event === "load") {
                                setTimeout(function(fn) {
                                    fn.call(this, id, msg)
                                }.bind(self, events[i].fn), 0);
                                if (events[i].once) {
                                    self.off(event, events[i].fn, events[i].id)
                                }
                            }
                        }
                        self._loadQueue(event);
                        return self
                    },
                    _loadQueue: function(event) {
                        var self = this;
                        if (self._queue.length > 0) {
                            var task = self._queue[0];
                            if (task.event === event) {
                                self._queue.shift();
                                self._loadQueue()
                            }
                            if (!event) {
                                task.action()
                            }
                        }
                        return self
                    },
                    _ended: function(sound) {
                        var self = this;
                        var sprite = sound._sprite;
                        if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
                            setTimeout(self._ended.bind(self, sound), 100);
                            return self
                        }
                        var loop = !!(sound._loop || self._sprite[sprite][2]);
                        self._emit("end", sound._id);
                        if (!self._webAudio && loop) {
                            self.stop(sound._id, true).play(sound._id)
                        }
                        if (self._webAudio && loop) {
                            self._emit("play", sound._id);
                            sound._seek = sound._start || 0;
                            sound._rateSeek = 0;
                            sound._playStart = Howler.ctx.currentTime;
                            var timeout = (sound._stop - sound._start) * 1e3 / Math.abs(sound._rate);
                            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout)
                        }
                        if (self._webAudio && !loop) {
                            sound._paused = true;
                            sound._ended = true;
                            sound._seek = sound._start || 0;
                            sound._rateSeek = 0;
                            self._clearTimer(sound._id);
                            self._cleanBuffer(sound._node);
                            Howler._autoSuspend()
                        }
                        if (!self._webAudio && !loop) {
                            self.stop(sound._id, true)
                        }
                        return self
                    },
                    _clearTimer: function(id) {
                        var self = this;
                        if (self._endTimers[id]) {
                            if (typeof self._endTimers[id] !== "function") {
                                clearTimeout(self._endTimers[id])
                            } else {
                                var sound = self._soundById(id);
                                if (sound && sound._node) {
                                    sound._node.removeEventListener("ended", self._endTimers[id], false)
                                }
                            }
                            delete self._endTimers[id]
                        }
                        return self
                    },
                    _soundById: function(id) {
                        var self = this;
                        for (var i = 0; i < self._sounds.length; i++) {
                            if (id === self._sounds[i]._id) {
                                return self._sounds[i]
                            }
                        }
                        return null
                    },
                    _inactiveSound: function() {
                        var self = this;
                        self._drain();
                        for (var i = 0; i < self._sounds.length; i++) {
                            if (self._sounds[i]._ended) {
                                return self._sounds[i].reset()
                            }
                        }
                        return new Sound(self)
                    },
                    _drain: function() {
                        var self = this;
                        var limit = self._pool;
                        var cnt = 0;
                        var i = 0;
                        if (self._sounds.length < limit) {
                            return
                        }
                        for (i = 0; i < self._sounds.length; i++) {
                            if (self._sounds[i]._ended) {
                                cnt++
                            }
                        }
                        for (i = self._sounds.length - 1; i >= 0; i--) {
                            if (cnt <= limit) {
                                return
                            }
                            if (self._sounds[i]._ended) {
                                if (self._webAudio && self._sounds[i]._node) {
                                    self._sounds[i]._node.disconnect(0)
                                }
                                self._sounds.splice(i, 1);
                                cnt--
                            }
                        }
                    },
                    _getSoundIds: function(id) {
                        var self = this;
                        if (typeof id === "undefined") {
                            var ids = [];
                            for (var i = 0; i < self._sounds.length; i++) {
                                ids.push(self._sounds[i]._id)
                            }
                            return ids
                        } else {
                            return [id]
                        }
                    },
                    _refreshBuffer: function(sound) {
                        var self = this;
                        sound._node.bufferSource = Howler.ctx.createBufferSource();
                        sound._node.bufferSource.buffer = cache[self._src];
                        if (sound._panner) {
                            sound._node.bufferSource.connect(sound._panner)
                        } else {
                            sound._node.bufferSource.connect(sound._node)
                        }
                        sound._node.bufferSource.loop = sound._loop;
                        if (sound._loop) {
                            sound._node.bufferSource.loopStart = sound._start || 0;
                            sound._node.bufferSource.loopEnd = sound._stop || 0
                        }
                        sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);
                        return self
                    },
                    _cleanBuffer: function(node) {
                        var self = this;
                        if (Howler._scratchBuffer && node.bufferSource) {
                            node.bufferSource.onended = null;
                            node.bufferSource.disconnect(0);
                            try {
                                node.bufferSource.buffer = Howler._scratchBuffer
                            } catch (e) {}
                        }
                        node.bufferSource = null;
                        return self
                    }
                };
                var Sound = function(howl) {
                    this._parent = howl;
                    this.init()
                };
                Sound.prototype = {
                    init: function() {
                        var self = this;
                        var parent = self._parent;
                        self._muted = parent._muted;
                        self._loop = parent._loop;
                        self._volume = parent._volume;
                        self._rate = parent._rate;
                        self._seek = 0;
                        self._paused = true;
                        self._ended = true;
                        self._sprite = "__default";
                        self._id = ++Howler._counter;
                        parent._sounds.push(self);
                        self.create();
                        return self
                    },
                    create: function() {
                        var self = this;
                        var parent = self._parent;
                        var volume = Howler._muted || self._muted || self._parent._muted ? 0 : self._volume;
                        if (parent._webAudio) {
                            self._node = typeof Howler.ctx.createGain === "undefined" ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                            self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
                            self._node.paused = true;
                            self._node.connect(Howler.masterGain)
                        } else {
                            self._node = new Audio;
                            self._errorFn = self._errorListener.bind(self);
                            self._node.addEventListener("error", self._errorFn, false);
                            self._loadFn = self._loadListener.bind(self);
                            self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);
                            self._node.src = parent._src;
                            self._node.preload = "auto";
                            self._node.volume = volume * Howler.volume();
                            self._node.load()
                        }
                        return self
                    },
                    reset: function() {
                        var self = this;
                        var parent = self._parent;
                        self._muted = parent._muted;
                        self._loop = parent._loop;
                        self._volume = parent._volume;
                        self._rate = parent._rate;
                        self._seek = 0;
                        self._rateSeek = 0;
                        self._paused = true;
                        self._ended = true;
                        self._sprite = "__default";
                        self._id = ++Howler._counter;
                        return self
                    },
                    _errorListener: function() {
                        var self = this;
                        self._parent._emit("loaderror", self._id, self._node.error ? self._node.error.code : 0);
                        self._node.removeEventListener("error", self._errorFn, false)
                    },
                    _loadListener: function() {
                        var self = this;
                        var parent = self._parent;
                        parent._duration = Math.ceil(self._node.duration * 10) / 10;
                        if (Object.keys(parent._sprite).length === 0) {
                            parent._sprite = {
                                __default: [0, parent._duration * 1e3]
                            }
                        }
                        if (parent._state !== "loaded") {
                            parent._state = "loaded";
                            parent._emit("load");
                            parent._loadQueue()
                        }
                        self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false)
                    }
                };
                var cache = {};
                var loadBuffer = function(self) {
                    var url = self._src;
                    if (cache[url]) {
                        self._duration = cache[url].duration;
                        loadSound(self);
                        return
                    }
                    if (/^data:[^;]+;base64,/.test(url)) {
                        var data = atob(url.split(",")[1]);
                        var dataView = new Uint8Array(data.length);
                        for (var i = 0; i < data.length; ++i) {
                            dataView[i] = data.charCodeAt(i)
                        }
                        decodeAudioData(dataView.buffer, self)
                    } else {
                        var xhr = new XMLHttpRequest;
                        xhr.open("GET", url, true);
                        xhr.withCredentials = self._xhrWithCredentials;
                        xhr.responseType = "arraybuffer";
                        xhr.onload = function() {
                            var code = (xhr.status + "")[0];
                            if (code !== "0" && code !== "2" && code !== "3") {
                                self._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
                                return
                            }
                            decodeAudioData(xhr.response, self)
                        };
                        xhr.onerror = function() {
                            if (self._webAudio) {
                                self._html5 = true;
                                self._webAudio = false;
                                self._sounds = [];
                                delete cache[url];
                                self.load()
                            }
                        };
                        safeXhrSend(xhr)
                    }
                };
                var safeXhrSend = function(xhr) {
                    try {
                        xhr.send()
                    } catch (e) {
                        xhr.onerror()
                    }
                };
                var decodeAudioData = function(arraybuffer, self) {
                    var error = function() {
                        self._emit("loaderror", null, "Decoding audio data failed.")
                    };
                    var success = function(buffer) {
                        if (buffer && self._sounds.length > 0) {
                            cache[self._src] = buffer;
                            loadSound(self, buffer)
                        } else {
                            error()
                        }
                    };
                    if (typeof Promise !== "undefined" && Howler.ctx.decodeAudioData.length === 1) {
                        Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error)
                    } else {
                        Howler.ctx.decodeAudioData(arraybuffer, success, error)
                    }
                };
                var loadSound = function(self, buffer) {
                    if (buffer && !self._duration) {
                        self._duration = buffer.duration
                    }
                    if (Object.keys(self._sprite).length === 0) {
                        self._sprite = {
                            __default: [0, self._duration * 1e3]
                        }
                    }
                    if (self._state !== "loaded") {
                        self._state = "loaded";
                        self._emit("load");
                        self._loadQueue()
                    }
                };
                var setupAudioContext = function() {
                    try {
                        if (typeof AudioContext !== "undefined") {
                            Howler.ctx = new AudioContext
                        } else if (typeof webkitAudioContext !== "undefined") {
                            Howler.ctx = new webkitAudioContext
                        } else {
                            Howler.usingWebAudio = false
                        }
                    } catch (e) {
                        Howler.usingWebAudio = false
                    }
                    var iOS = /iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform);
                    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    var version = appVersion ? parseInt(appVersion[1], 10) : null;
                    if (iOS && version && version < 9) {
                        var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
                        if (Howler._navigator && Howler._navigator.standalone && !safari || Howler._navigator && !Howler._navigator.standalone && !safari) {
                            Howler.usingWebAudio = false
                        }
                    }
                    if (Howler.usingWebAudio) {
                        Howler.masterGain = typeof Howler.ctx.createGain === "undefined" ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
                        Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : 1, Howler.ctx.currentTime);
                        Howler.masterGain.connect(Howler.ctx.destination)
                    }
                    Howler._setup()
                };
                if (typeof define === "function" && define.amd) {
                    define([], function() {
                        return {
                            Howler: Howler,
                            Howl: Howl
                        }
                    })
                }
                if (typeof exports !== "undefined") {
                    exports.Howler = Howler;
                    exports.Howl = Howl
                }
                if (typeof window !== "undefined") {
                    window.HowlerGlobal = HowlerGlobal;
                    window.Howler = Howler;
                    window.Howl = Howl;
                    window.Sound = Sound
                } else if (typeof global !== "undefined") {
                    global.HowlerGlobal = HowlerGlobal;
                    global.Howler = Howler;
                    global.Howl = Howl;
                    global.Sound = Sound
                }
            })();
            (function() {
                "use strict";
                HowlerGlobal.prototype._pos = [0, 0, 0];
                HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
                HowlerGlobal.prototype.stereo = function(pan) {
                    var self = this;
                    if (!self.ctx || !self.ctx.listener) {
                        return self
                    }
                    for (var i = self._howls.length - 1; i >= 0; i--) {
                        self._howls[i].stereo(pan)
                    }
                    return self
                };
                HowlerGlobal.prototype.pos = function(x, y, z) {
                    var self = this;
                    if (!self.ctx || !self.ctx.listener) {
                        return self
                    }
                    y = typeof y !== "number" ? self._pos[1] : y;
                    z = typeof z !== "number" ? self._pos[2] : z;
                    if (typeof x === "number") {
                        self._pos = [x, y, z];
                        if (typeof self.ctx.listener.positionX !== "undefined") {
                            self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, .1);
                            self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, .1);
                            self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, .1)
                        } else {
                            self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2])
                        }
                    } else {
                        return self._pos
                    }
                    return self
                };
                HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
                    var self = this;
                    if (!self.ctx || !self.ctx.listener) {
                        return self
                    }
                    var or = self._orientation;
                    y = typeof y !== "number" ? or[1] : y;
                    z = typeof z !== "number" ? or[2] : z;
                    xUp = typeof xUp !== "number" ? or[3] : xUp;
                    yUp = typeof yUp !== "number" ? or[4] : yUp;
                    zUp = typeof zUp !== "number" ? or[5] : zUp;
                    if (typeof x === "number") {
                        self._orientation = [x, y, z, xUp, yUp, zUp];
                        if (typeof self.ctx.listener.forwardX !== "undefined") {
                            self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, .1);
                            self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, .1);
                            self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, .1);
                            self.ctx.listener.upX.setTargetAtTime(x, Howler.ctx.currentTime, .1);
                            self.ctx.listener.upY.setTargetAtTime(y, Howler.ctx.currentTime, .1);
                            self.ctx.listener.upZ.setTargetAtTime(z, Howler.ctx.currentTime, .1)
                        } else {
                            self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp)
                        }
                    } else {
                        return or
                    }
                    return self
                };
                Howl.prototype.init = function(_super) {
                    return function(o) {
                        var self = this;
                        self._orientation = o.orientation || [1, 0, 0];
                        self._stereo = o.stereo || null;
                        self._pos = o.pos || null;
                        self._pannerAttr = {
                            coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
                            coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
                            coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
                            distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
                            maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 1e4,
                            panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
                            refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
                            rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
                        };
                        self._onstereo = o.onstereo ? [{
                            fn: o.onstereo
                        }] : [];
                        self._onpos = o.onpos ? [{
                            fn: o.onpos
                        }] : [];
                        self._onorientation = o.onorientation ? [{
                            fn: o.onorientation
                        }] : [];
                        return _super.call(this, o)
                    }
                }(Howl.prototype.init);
                Howl.prototype.stereo = function(pan, id) {
                    var self = this;
                    if (!self._webAudio) {
                        return self
                    }
                    if (self._state !== "loaded") {
                        self._queue.push({
                            event: "stereo",
                            action: function() {
                                self.stereo(pan, id)
                            }
                        });
                        return self
                    }
                    var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
                    if (typeof id === "undefined") {
                        if (typeof pan === "number") {
                            self._stereo = pan;
                            self._pos = [pan, 0, 0]
                        } else {
                            return self._stereo
                        }
                    }
                    var ids = self._getSoundIds(id);
                    for (var i = 0; i < ids.length; i++) {
                        var sound = self._soundById(ids[i]);
                        if (sound) {
                            if (typeof pan === "number") {
                                sound._stereo = pan;
                                sound._pos = [pan, 0, 0];
                                if (sound._node) {
                                    sound._pannerAttr.panningModel = "equalpower";
                                    if (!sound._panner || !sound._panner.pan) {
                                        setupPanner(sound, pannerType)
                                    }
                                    if (pannerType === "spatial") {
                                        if (typeof sound._panner.positionX !== "undefined") {
                                            sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                                            sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                                            sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)
                                        } else {
                                            sound._panner.setPosition(pan, 0, 0)
                                        }
                                    } else {
                                        sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime)
                                    }
                                }
                                self._emit("stereo", sound._id)
                            } else {
                                return sound._stereo
                            }
                        }
                    }
                    return self
                };
                Howl.prototype.pos = function(x, y, z, id) {
                    var self = this;
                    if (!self._webAudio) {
                        return self
                    }
                    if (self._state !== "loaded") {
                        self._queue.push({
                            event: "pos",
                            action: function() {
                                self.pos(x, y, z, id)
                            }
                        });
                        return self
                    }
                    y = typeof y !== "number" ? 0 : y;
                    z = typeof z !== "number" ? -.5 : z;
                    if (typeof id === "undefined") {
                        if (typeof x === "number") {
                            self._pos = [x, y, z]
                        } else {
                            return self._pos
                        }
                    }
                    var ids = self._getSoundIds(id);
                    for (var i = 0; i < ids.length; i++) {
                        var sound = self._soundById(ids[i]);
                        if (sound) {
                            if (typeof x === "number") {
                                sound._pos = [x, y, z];
                                if (sound._node) {
                                    if (!sound._panner || sound._panner.pan) {
                                        setupPanner(sound, "spatial")
                                    }
                                    if (typeof sound._panner.positionX !== "undefined") {
                                        sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                                        sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
                                        sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime)
                                    } else {
                                        sound._panner.setOrientation(x, y, z)
                                    }
                                }
                                self._emit("pos", sound._id)
                            } else {
                                return sound._pos
                            }
                        }
                    }
                    return self
                };
                Howl.prototype.orientation = function(x, y, z, id) {
                    var self = this;
                    if (!self._webAudio) {
                        return self
                    }
                    if (self._state !== "loaded") {
                        self._queue.push({
                            event: "orientation",
                            action: function() {
                                self.orientation(x, y, z, id)
                            }
                        });
                        return self
                    }
                    y = typeof y !== "number" ? self._orientation[1] : y;
                    z = typeof z !== "number" ? self._orientation[2] : z;
                    if (typeof id === "undefined") {
                        if (typeof x === "number") {
                            self._orientation = [x, y, z]
                        } else {
                            return self._orientation
                        }
                    }
                    var ids = self._getSoundIds(id);
                    for (var i = 0; i < ids.length; i++) {
                        var sound = self._soundById(ids[i]);
                        if (sound) {
                            if (typeof x === "number") {
                                sound._orientation = [x, y, z];
                                if (sound._node) {
                                    if (!sound._panner) {
                                        if (!sound._pos) {
                                            sound._pos = self._pos || [0, 0, -.5]
                                        }
                                        setupPanner(sound, "spatial")
                                    }
                                    if (typeof sound._panner.orientationX !== "undefined") {
                                        sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                                        sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
                                        sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime)
                                    } else {
                                        sound._panner.setOrientation(x, y, z)
                                    }
                                }
                                self._emit("orientation", sound._id)
                            } else {
                                return sound._orientation
                            }
                        }
                    }
                    return self
                };
                Howl.prototype.pannerAttr = function() {
                    var self = this;
                    var args = arguments;
                    var o, id, sound;
                    if (!self._webAudio) {
                        return self
                    }
                    if (args.length === 0) {
                        return self._pannerAttr
                    } else if (args.length === 1) {
                        if (typeof args[0] === "object") {
                            o = args[0];
                            if (typeof id === "undefined") {
                                if (!o.pannerAttr) {
                                    o.pannerAttr = {
                                        coneInnerAngle: o.coneInnerAngle,
                                        coneOuterAngle: o.coneOuterAngle,
                                        coneOuterGain: o.coneOuterGain,
                                        distanceModel: o.distanceModel,
                                        maxDistance: o.maxDistance,
                                        refDistance: o.refDistance,
                                        rolloffFactor: o.rolloffFactor,
                                        panningModel: o.panningModel
                                    }
                                }
                                self._pannerAttr = {
                                    coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
                                    coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
                                    coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
                                    distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self._distanceModel,
                                    maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self._maxDistance,
                                    refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self._refDistance,
                                    rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
                                    panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self._panningModel
                                }
                            }
                        } else {
                            sound = self._soundById(parseInt(args[0], 10));
                            return sound ? sound._pannerAttr : self._pannerAttr
                        }
                    } else if (args.length === 2) {
                        o = args[0];
                        id = parseInt(args[1], 10)
                    }
                    var ids = self._getSoundIds(id);
                    for (var i = 0; i < ids.length; i++) {
                        sound = self._soundById(ids[i]);
                        if (sound) {
                            var pa = sound._pannerAttr;
                            pa = {
                                coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa.coneInnerAngle,
                                coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa.coneOuterAngle,
                                coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa.coneOuterGain,
                                distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa.distanceModel,
                                maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa.maxDistance,
                                refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa.refDistance,
                                rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa.rolloffFactor,
                                panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa.panningModel
                            };
                            var panner = sound._panner;
                            if (panner) {
                                panner.coneInnerAngle = pa.coneInnerAngle;
                                panner.coneOuterAngle = pa.coneOuterAngle;
                                panner.coneOuterGain = pa.coneOuterGain;
                                panner.distanceModel = pa.distanceModel;
                                panner.maxDistance = pa.maxDistance;
                                panner.refDistance = pa.refDistance;
                                panner.rolloffFactor = pa.rolloffFactor;
                                panner.panningModel = pa.panningModel
                            } else {
                                if (!sound._pos) {
                                    sound._pos = self._pos || [0, 0, -.5]
                                }
                                setupPanner(sound, "spatial")
                            }
                        }
                    }
                    return self
                };
                Sound.prototype.init = function(_super) {
                    return function() {
                        var self = this;
                        var parent = self._parent;
                        self._orientation = parent._orientation;
                        self._stereo = parent._stereo;
                        self._pos = parent._pos;
                        self._pannerAttr = parent._pannerAttr;
                        _super.call(this);
                        if (self._stereo) {
                            parent.stereo(self._stereo)
                        } else if (self._pos) {
                            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id)
                        }
                    }
                }(Sound.prototype.init);
                Sound.prototype.reset = function(_super) {
                    return function() {
                        var self = this;
                        var parent = self._parent;
                        self._orientation = parent._orientation;
                        self._stereo = parent._stereo;
                        self._pos = parent._pos;
                        self._pannerAttr = parent._pannerAttr;
                        if (self._stereo) {
                            parent.stereo(self._stereo)
                        } else if (self._pos) {
                            parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id)
                        } else if (self._panner) {
                            self._panner.disconnect(0);
                            self._panner = undefined;
                            parent._refreshBuffer(self)
                        }
                        return _super.call(this)
                    }
                }(Sound.prototype.reset);
                var setupPanner = function(sound, type) {
                    type = type || "spatial";
                    if (type === "spatial") {
                        sound._panner = Howler.ctx.createPanner();
                        sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
                        sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
                        sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
                        sound._panner.distanceModel = sound._pannerAttr.distanceModel;
                        sound._panner.maxDistance = sound._pannerAttr.maxDistance;
                        sound._panner.refDistance = sound._pannerAttr.refDistance;
                        sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
                        sound._panner.panningModel = sound._pannerAttr.panningModel;
                        if (typeof sound._panner.positionX !== "undefined") {
                            sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
                            sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
                            sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime)
                        } else {
                            sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2])
                        }
                        if (typeof sound._panner.orientationX !== "undefined") {
                            sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
                            sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
                            sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime)
                        } else {
                            sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2])
                        }
                    } else {
                        sound._panner = Howler.ctx.createStereoPanner();
                        sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime)
                    }
                    sound._panner.connect(sound._node);
                    if (!sound._paused) {
                        sound._parent.pause(sound._id, true).play(sound._id, true)
                    }
                }
            })()
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}],
    4: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Body;
        var common = require("./util/common");
        var options = require("./util/options");
        var Vec2 = require("./common/Vec2");
        var Rot = require("./common/Rot");
        var Math = require("./common/Math");
        var Sweep = require("./common/Sweep");
        var Transform = require("./common/Transform");
        var Velocity = require("./common/Velocity");
        var Position = require("./common/Position");
        var Fixture = require("./Fixture");
        var Shape = require("./Shape");
        var World = require("./World");
        var staticBody = Body.STATIC = "static";
        var kinematicBody = Body.KINEMATIC = "kinematic";
        var dynamicBody = Body.DYNAMIC = "dynamic";
        var BodyDef = {
            type: staticBody,
            position: Vec2.zero(),
            angle: 0,
            linearVelocity: Vec2.zero(),
            angularVelocity: 0,
            linearDamping: 0,
            angularDamping: 0,
            fixedRotation: false,
            bullet: false,
            gravityScale: 1,
            allowSleep: true,
            awake: true,
            active: true,
            userData: null
        };

        function Body(world, def) {
            def = options(def, BodyDef);
            _ASSERT && common.assert(Vec2.isValid(def.position));
            _ASSERT && common.assert(Vec2.isValid(def.linearVelocity));
            _ASSERT && common.assert(Math.isFinite(def.angle));
            _ASSERT && common.assert(Math.isFinite(def.angularVelocity));
            _ASSERT && common.assert(Math.isFinite(def.angularDamping) && def.angularDamping >= 0);
            _ASSERT && common.assert(Math.isFinite(def.linearDamping) && def.linearDamping >= 0);
            this.m_world = world;
            this.m_awakeFlag = def.awake;
            this.m_autoSleepFlag = def.allowSleep;
            this.m_bulletFlag = def.bullet;
            this.m_fixedRotationFlag = def.fixedRotation;
            this.m_activeFlag = def.active;
            this.m_islandFlag = false;
            this.m_toiFlag = false;
            this.m_userData = def.userData;
            this.m_type = def.type;
            if (this.m_type == dynamicBody) {
                this.m_mass = 1;
                this.m_invMass = 1
            } else {
                this.m_mass = 0;
                this.m_invMass = 0
            }
            this.m_I = 0;
            this.m_invI = 0;
            this.m_xf = Transform.identity();
            this.m_xf.p = Vec2.clone(def.position);
            this.m_xf.q.setAngle(def.angle);
            this.m_sweep = new Sweep;
            this.m_sweep.setTransform(this.m_xf);
            this.c_velocity = new Velocity;
            this.c_position = new Position;
            this.m_force = Vec2.zero();
            this.m_torque = 0;
            this.m_linearVelocity = Vec2.clone(def.linearVelocity);
            this.m_angularVelocity = def.angularVelocity;
            this.m_linearDamping = def.linearDamping;
            this.m_angularDamping = def.angularDamping;
            this.m_gravityScale = def.gravityScale;
            this.m_sleepTime = 0;
            this.m_jointList = null;
            this.m_contactList = null;
            this.m_fixtureList = null;
            this.m_prev = null;
            this.m_next = null;
            this.m_destroyed = false
        }
        Body.prototype.isWorldLocked = function() {
            return this.m_world && this.m_world.isLocked() ? true : false
        };
        Body.prototype.getWorld = function() {
            return this.m_world
        };
        Body.prototype.getNext = function() {
            return this.m_next
        };
        Body.prototype.setUserData = function(data) {
            this.m_userData = data
        };
        Body.prototype.getUserData = function() {
            return this.m_userData
        };
        Body.prototype.getFixtureList = function() {
            return this.m_fixtureList
        };
        Body.prototype.getJointList = function() {
            return this.m_jointList
        };
        Body.prototype.getContactList = function() {
            return this.m_contactList
        };
        Body.prototype.isStatic = function() {
            return this.m_type == staticBody
        };
        Body.prototype.isDynamic = function() {
            return this.m_type == dynamicBody
        };
        Body.prototype.isKinematic = function() {
            return this.m_type == kinematicBody
        };
        Body.prototype.setStatic = function() {
            this.setType(staticBody);
            return this
        };
        Body.prototype.setDynamic = function() {
            this.setType(dynamicBody);
            return this
        };
        Body.prototype.setKinematic = function() {
            this.setType(kinematicBody);
            return this
        };
        Body.prototype.getType = function() {
            return this.m_type
        };
        Body.prototype.setType = function(type) {
            _ASSERT && common.assert(type === staticBody || type === kinematicBody || type === dynamicBody);
            _ASSERT && common.assert(this.isWorldLocked() == false);
            if (this.isWorldLocked() == true) {
                return
            }
            if (this.m_type == type) {
                return
            }
            this.m_type = type;
            this.resetMassData();
            if (this.m_type == staticBody) {
                this.m_linearVelocity.setZero();
                this.m_angularVelocity = 0;
                this.m_sweep.forward();
                this.synchronizeFixtures()
            }
            this.setAwake(true);
            this.m_force.setZero();
            this.m_torque = 0;
            var ce = this.m_contactList;
            while (ce) {
                var ce0 = ce;
                ce = ce.next;
                this.m_world.destroyContact(ce0.contact)
            }
            this.m_contactList = null;
            var broadPhase = this.m_world.m_broadPhase;
            for (var f = this.m_fixtureList; f; f = f.m_next) {
                var proxyCount = f.m_proxyCount;
                for (var i = 0; i < proxyCount; ++i) {
                    broadPhase.touchProxy(f.m_proxies[i].proxyId)
                }
            }
        };
        Body.prototype.isBullet = function() {
            return this.m_bulletFlag
        };
        Body.prototype.setBullet = function(flag) {
            this.m_bulletFlag = !!flag
        };
        Body.prototype.isSleepingAllowed = function() {
            return this.m_autoSleepFlag
        };
        Body.prototype.setSleepingAllowed = function(flag) {
            this.m_autoSleepFlag = !!flag;
            if (this.m_autoSleepFlag == false) {
                this.setAwake(true)
            }
        };
        Body.prototype.isAwake = function() {
            return this.m_awakeFlag
        };
        Body.prototype.setAwake = function(flag) {
            if (flag) {
                if (this.m_awakeFlag == false) {
                    this.m_awakeFlag = true;
                    this.m_sleepTime = 0
                }
            } else {
                this.m_awakeFlag = false;
                this.m_sleepTime = 0;
                this.m_linearVelocity.setZero();
                this.m_angularVelocity = 0;
                this.m_force.setZero();
                this.m_torque = 0
            }
        };
        Body.prototype.isActive = function() {
            return this.m_activeFlag
        };
        Body.prototype.setActive = function(flag) {
            _ASSERT && common.assert(this.isWorldLocked() == false);
            if (flag == this.m_activeFlag) {
                return
            }
            this.m_activeFlag = !!flag;
            if (this.m_activeFlag) {
                var broadPhase = this.m_world.m_broadPhase;
                for (var f = this.m_fixtureList; f; f = f.m_next) {
                    f.createProxies(broadPhase, this.m_xf)
                }
            } else {
                var broadPhase = this.m_world.m_broadPhase;
                for (var f = this.m_fixtureList; f; f = f.m_next) {
                    f.destroyProxies(broadPhase)
                }
                var ce = this.m_contactList;
                while (ce) {
                    var ce0 = ce;
                    ce = ce.next;
                    this.m_world.destroyContact(ce0.contact)
                }
                this.m_contactList = null
            }
        };
        Body.prototype.isFixedRotation = function() {
            return this.m_fixedRotationFlag
        };
        Body.prototype.setFixedRotation = function(flag) {
            if (this.m_fixedRotationFlag == flag) {
                return
            }
            this.m_fixedRotationFlag = !!flag;
            this.m_angularVelocity = 0;
            this.resetMassData()
        };
        Body.prototype.getTransform = function() {
            return this.m_xf
        };
        Body.prototype.setTransform = function(position, angle) {
            _ASSERT && common.assert(this.isWorldLocked() == false);
            if (this.isWorldLocked() == true) {
                return
            }
            this.m_xf.set(position, angle);
            this.m_sweep.setTransform(this.m_xf);
            var broadPhase = this.m_world.m_broadPhase;
            for (var f = this.m_fixtureList; f; f = f.m_next) {
                f.synchronize(broadPhase, this.m_xf, this.m_xf)
            }
        };
        Body.prototype.synchronizeTransform = function() {
            this.m_sweep.getTransform(this.m_xf, 1)
        };
        Body.prototype.synchronizeFixtures = function() {
            var xf = Transform.identity();
            this.m_sweep.getTransform(xf, 0);
            var broadPhase = this.m_world.m_broadPhase;
            for (var f = this.m_fixtureList; f; f = f.m_next) {
                f.synchronize(broadPhase, xf, this.m_xf)
            }
        };
        Body.prototype.advance = function(alpha) {
            this.m_sweep.advance(alpha);
            this.m_sweep.c.set(this.m_sweep.c0);
            this.m_sweep.a = this.m_sweep.a0;
            this.m_sweep.getTransform(this.m_xf, 1)
        };
        Body.prototype.getPosition = function() {
            return this.m_xf.p
        };
        Body.prototype.setPosition = function(p) {
            this.setTransform(p, this.m_sweep.a)
        };
        Body.prototype.getAngle = function() {
            return this.m_sweep.a
        };
        Body.prototype.setAngle = function(angle) {
            this.setTransform(this.m_xf.p, angle)
        };
        Body.prototype.getWorldCenter = function() {
            return this.m_sweep.c
        };
        Body.prototype.getLocalCenter = function() {
            return this.m_sweep.localCenter
        };
        Body.prototype.getLinearVelocity = function() {
            return this.m_linearVelocity
        };
        Body.prototype.getLinearVelocityFromWorldPoint = function(worldPoint) {
            var localCenter = Vec2.sub(worldPoint, this.m_sweep.c);
            return Vec2.add(this.m_linearVelocity, Vec2.cross(this.m_angularVelocity, localCenter))
        };
        Body.prototype.getLinearVelocityFromLocalPoint = function(localPoint) {
            return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(localPoint))
        };
        Body.prototype.setLinearVelocity = function(v) {
            if (this.m_type == staticBody) {
                return
            }
            if (Vec2.dot(v, v) > 0) {
                this.setAwake(true)
            }
            this.m_linearVelocity.set(v)
        };
        Body.prototype.getAngularVelocity = function() {
            return this.m_angularVelocity
        };
        Body.prototype.setAngularVelocity = function(w) {
            if (this.m_type == staticBody) {
                return
            }
            if (w * w > 0) {
                this.setAwake(true)
            }
            this.m_angularVelocity = w
        };
        Body.prototype.getLinearDamping = function() {
            return this.m_linearDamping
        };
        Body.prototype.setLinearDamping = function(linearDamping) {
            this.m_linearDamping = linearDamping
        };
        Body.prototype.getAngularDamping = function() {
            return this.m_angularDamping
        };
        Body.prototype.setAngularDamping = function(angularDamping) {
            this.m_angularDamping = angularDamping
        };
        Body.prototype.getGravityScale = function() {
            return this.m_gravityScale
        };
        Body.prototype.setGravityScale = function(scale) {
            this.m_gravityScale = scale
        };
        Body.prototype.getMass = function() {
            return this.m_mass
        };
        Body.prototype.getInertia = function() {
            return this.m_I + this.m_mass * Vec2.dot(this.m_sweep.localCenter, this.m_sweep.localCenter)
        };

        function MassData() {
            this.mass = 0;
            this.center = Vec2.zero();
            this.I = 0
        }
        Body.prototype.getMassData = function(data) {
            data.mass = this.m_mass;
            data.I = this.getInertia();
            data.center.set(this.m_sweep.localCenter)
        };
        Body.prototype.resetMassData = function() {
            this.m_mass = 0;
            this.m_invMass = 0;
            this.m_I = 0;
            this.m_invI = 0;
            this.m_sweep.localCenter.setZero();
            if (this.isStatic() || this.isKinematic()) {
                this.m_sweep.c0.set(this.m_xf.p);
                this.m_sweep.c.set(this.m_xf.p);
                this.m_sweep.a0 = this.m_sweep.a;
                return
            }
            _ASSERT && common.assert(this.isDynamic());
            var localCenter = Vec2.zero();
            for (var f = this.m_fixtureList; f; f = f.m_next) {
                if (f.m_density == 0) {
                    continue
                }
                var massData = new MassData;
                f.getMassData(massData);
                this.m_mass += massData.mass;
                localCenter.addMul(massData.mass, massData.center);
                this.m_I += massData.I
            }
            if (this.m_mass > 0) {
                this.m_invMass = 1 / this.m_mass;
                localCenter.mul(this.m_invMass)
            } else {
                this.m_mass = 1;
                this.m_invMass = 1
            }
            if (this.m_I > 0 && this.m_fixedRotationFlag == false) {
                this.m_I -= this.m_mass * Vec2.dot(localCenter, localCenter);
                _ASSERT && common.assert(this.m_I > 0);
                this.m_invI = 1 / this.m_I
            } else {
                this.m_I = 0;
                this.m_invI = 0
            }
            var oldCenter = Vec2.clone(this.m_sweep.c);
            this.m_sweep.setLocalCenter(localCenter, this.m_xf);
            this.m_linearVelocity.add(Vec2.cross(this.m_angularVelocity, Vec2.sub(this.m_sweep.c, oldCenter)))
        };
        Body.prototype.setMassData = function(massData) {
            _ASSERT && common.assert(this.isWorldLocked() == false);
            if (this.isWorldLocked() == true) {
                return
            }
            if (this.m_type != dynamicBody) {
                return
            }
            this.m_invMass = 0;
            this.m_I = 0;
            this.m_invI = 0;
            this.m_mass = massData.mass;
            if (this.m_mass <= 0) {
                this.m_mass = 1
            }
            this.m_invMass = 1 / this.m_mass;
            if (massData.I > 0 && this.m_fixedRotationFlag == false) {
                this.m_I = massData.I - this.m_mass * Vec2.dot(massData.center, massData.center);
                _ASSERT && common.assert(this.m_I > 0);
                this.m_invI = 1 / this.m_I
            }
            var oldCenter = Vec2.clone(this.m_sweep.c);
            this.m_sweep.setLocalCenter(massData.center, this.m_xf);
            this.m_linearVelocity.add(Vec2.cross(this.m_angularVelocity, Vec2.sub(this.m_sweep.c, oldCenter)))
        };
        Body.prototype.applyForce = function(force, point, wake) {
            if (this.m_type != dynamicBody) {
                return
            }
            if (wake && this.m_awakeFlag == false) {
                this.setAwake(true)
            }
            if (this.m_awakeFlag) {
                this.m_force.add(force);
                this.m_torque += Vec2.cross(Vec2.sub(point, this.m_sweep.c), force)
            }
        };
        Body.prototype.applyForceToCenter = function(force, wake) {
            if (this.m_type != dynamicBody) {
                return
            }
            if (wake && this.m_awakeFlag == false) {
                this.setAwake(true)
            }
            if (this.m_awakeFlag) {
                this.m_force.add(force)
            }
        };
        Body.prototype.applyTorque = function(torque, wake) {
            if (this.m_type != dynamicBody) {
                return
            }
            if (wake && this.m_awakeFlag == false) {
                this.setAwake(true)
            }
            if (this.m_awakeFlag) {
                this.m_torque += torque
            }
        };
        Body.prototype.applyLinearImpulse = function(impulse, point, wake) {
            if (this.m_type != dynamicBody) {
                return
            }
            if (wake && this.m_awakeFlag == false) {
                this.setAwake(true)
            }
            if (this.m_awakeFlag) {
                this.m_linearVelocity.addMul(this.m_invMass, impulse);
                this.m_angularVelocity += this.m_invI * Vec2.cross(Vec2.sub(point, this.m_sweep.c), impulse)
            }
        };
        Body.prototype.applyAngularImpulse = function(impulse, wake) {
            if (this.m_type != dynamicBody) {
                return
            }
            if (wake && this.m_awakeFlag == false) {
                this.setAwake(true)
            }
            if (this.m_awakeFlag) {
                this.m_angularVelocity += this.m_invI * impulse
            }
        };
        Body.prototype.shouldCollide = function(that) {
            if (this.m_type != dynamicBody && that.m_type != dynamicBody) {
                return false
            }
            for (var jn = this.m_jointList; jn; jn = jn.next) {
                if (jn.other == that) {
                    if (jn.joint.m_collideConnected == false) {
                        return false
                    }
                }
            }
            return true
        };
        Body.prototype.createFixture = function(shape, fixdef) {
            _ASSERT && common.assert(this.isWorldLocked() == false);
            if (this.isWorldLocked() == true) {
                return null
            }
            var fixture = new Fixture(this, shape, fixdef);
            if (this.m_activeFlag) {
                var broadPhase = this.m_world.m_broadPhase;
                fixture.createProxies(broadPhase, this.m_xf)
            }
            fixture.m_next = this.m_fixtureList;
            this.m_fixtureList = fixture;
            if (fixture.m_density > 0) {
                this.resetMassData()
            }
            this.m_world.m_newFixture = true;
            return fixture
        };
        Body.prototype.destroyFixture = function(fixture) {
            _ASSERT && common.assert(this.isWorldLocked() == false);
            if (this.isWorldLocked() == true) {
                return
            }
            _ASSERT && common.assert(fixture.m_body == this);
            var found = false;
            if (this.m_fixtureList === fixture) {
                this.m_fixtureList = fixture.m_next;
                found = true
            } else {
                var node = this.m_fixtureList;
                while (node != null) {
                    if (node.m_next === fixture) {
                        node.m_next = fixture.m_next;
                        found = true;
                        break
                    }
                    node = node.m_next
                }
            }
            _ASSERT && common.assert(found);
            var edge = this.m_contactList;
            while (edge) {
                var c = edge.contact;
                edge = edge.next;
                var fixtureA = c.getFixtureA();
                var fixtureB = c.getFixtureB();
                if (fixture == fixtureA || fixture == fixtureB) {
                    this.m_world.destroyContact(c)
                }
            }
            if (this.m_activeFlag) {
                var broadPhase = this.m_world.m_broadPhase;
                fixture.destroyProxies(broadPhase)
            }
            fixture.m_body = null;
            fixture.m_next = null;
            this.m_world.publish("remove-fixture", fixture);
            this.resetMassData()
        };
        Body.prototype.getWorldPoint = function(localPoint) {
            return Transform.mulVec2(this.m_xf, localPoint)
        };
        Body.prototype.getWorldVector = function(localVector) {
            return Rot.mulVec2(this.m_xf.q, localVector)
        };
        Body.prototype.getLocalPoint = function(worldPoint) {
            return Transform.mulTVec2(this.m_xf, worldPoint)
        };
        Body.prototype.getLocalVector = function(worldVector) {
            return Rot.mulTVec2(this.m_xf.q, worldVector)
        }
    }, {
        "./Fixture": 6,
        "./Shape": 10,
        "./World": 12,
        "./common/Math": 20,
        "./common/Position": 21,
        "./common/Rot": 22,
        "./common/Sweep": 23,
        "./common/Transform": 24,
        "./common/Vec2": 25,
        "./common/Velocity": 27,
        "./util/common": 53,
        "./util/options": 55
    }],
    5: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var DEBUG_SOLVER = false;
        var common = require("./util/common");
        var Pool = require("./util/Pool");
        var Math = require("./common/Math");
        var Vec2 = require("./common/Vec2");
        var Transform = require("./common/Transform");
        var Mat22 = require("./common/Mat22");
        var Rot = require("./common/Rot");
        var Settings = require("./Settings");
        var Manifold = require("./Manifold");
        var Distance = require("./collision/Distance");
        module.exports = Contact;

        function ContactEdge(contact) {
            this.contact = contact;
            this.prev = null;
            this.next = null;
            this.other = null
        }

        function Contact() {
            this.m_nodeA = new ContactEdge(this);
            this.m_nodeB = new ContactEdge(this);
            this.m_manifold = new Manifold;
            this.v_points_cache = [new VelocityConstraintPoint, new VelocityConstraintPoint];
            this.v_points = [];
            this.v_normal = Vec2.zero();
            this.v_normalMass = new Mat22;
            this.v_K = new Mat22;
            this.p_localPoints_cache = [Vec2.zero(), Vec2.zero()];
            this.p_localPoints = [];
            this.p_localNormal = Vec2.zero();
            this.p_localPoint = Vec2.zero();
            this.p_localCenterA = Vec2.zero();
            this.p_localCenterB = Vec2.zero()
        }
        Contact.prototype.init = function(fA, indexA, fB, indexB, evaluateFcn) {
            this.m_fixtureA = fA;
            this.m_fixtureB = fB;
            this.m_indexA = indexA;
            this.m_indexB = indexB;
            this.m_evaluateFcn = evaluateFcn;
            this.m_manifold.init();
            this.m_prev = null;
            this.m_next = null;
            this.m_toi = 1;
            this.m_toiCount = 0;
            this.m_toiFlag = false;
            this.m_friction = mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
            this.m_restitution = mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
            this.m_tangentSpeed = 0;
            this.m_enabledFlag = true;
            this.m_islandFlag = false;
            this.m_touchingFlag = false;
            this.m_filterFlag = false;
            this.m_bulletHitFlag = false;
            this.v_points.length = 0;
            this.v_normal.setZero();
            this.v_normalMass.setZero();
            this.v_K.setZero();
            this.v_pointCount = null;
            this.v_tangentSpeed = null;
            this.v_friction = null;
            this.v_restitution = null;
            this.v_invMassA = null;
            this.v_invMassB = null;
            this.v_invIA = null;
            this.v_invIB = null;
            this.p_localPoints.length = 0;
            this.p_localNormal.setZero();
            this.p_localPoint.setZero();
            this.p_localCenterA.setZero();
            this.p_localCenterB.setZero();
            this.p_type = null;
            this.p_radiusA = null;
            this.p_radiusB = null;
            this.p_pointCount = null;
            this.p_invMassA = null;
            this.p_invMassB = null;
            this.p_invIA = null;
            this.p_invIB = null
        };
        Contact.prototype.initConstraint = function(step) {
            var fixtureA = this.m_fixtureA;
            var fixtureB = this.m_fixtureB;
            var shapeA = fixtureA.getShape();
            var shapeB = fixtureB.getShape();
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            var manifold = this.m_manifold;
            var pointCount = manifold.pointCount;
            _ASSERT && common.assert(pointCount > 0);
            this.v_invMassA = bodyA.m_invMass;
            this.v_invMassB = bodyB.m_invMass;
            this.v_invIA = bodyA.m_invI;
            this.v_invIB = bodyB.m_invI;
            this.v_friction = this.m_friction;
            this.v_restitution = this.m_restitution;
            this.v_tangentSpeed = this.m_tangentSpeed;
            this.v_pointCount = pointCount;
            this.v_K.setZero();
            this.v_normalMass.setZero();
            this.p_invMassA = bodyA.m_invMass;
            this.p_invMassB = bodyB.m_invMass;
            this.p_invIA = bodyA.m_invI;
            this.p_invIB = bodyB.m_invI;
            this.p_localCenterA.setVec2(bodyA.m_sweep.localCenter);
            this.p_localCenterB.setVec2(bodyB.m_sweep.localCenter);
            this.p_radiusA = shapeA.m_radius;
            this.p_radiusB = shapeB.m_radius;
            this.p_type = manifold.type;
            this.p_localNormal.setVec2(manifold.localNormal);
            this.p_localPoint.setVec2(manifold.localPoint);
            this.p_pointCount = pointCount;
            for (var j = 0; j < pointCount; ++j) {
                var cp = manifold.points[j];
                var vcp = this.v_points[j] = this.v_points_cache[j].init();
                if (step.warmStarting) {
                    vcp.normalImpulse = step.dtRatio * cp.normalImpulse;
                    vcp.tangentImpulse = step.dtRatio * cp.tangentImpulse
                } else {
                    vcp.normalImpulse = 0;
                    vcp.tangentImpulse = 0
                }
                vcp.rA.setZero();
                vcp.rB.setZero();
                vcp.normalMass = 0;
                vcp.tangentMass = 0;
                vcp.velocityBias = 0;
                this.p_localPoints[j] = this.p_localPoints_cache[j].setVec2(cp.localPoint)
            }
        };
        Contact.prototype.getManifold = function() {
            return this.m_manifold
        };
        Contact.prototype.getWorldManifold = function(worldManifold) {
            var bodyA = this.m_fixtureA.getBody();
            var bodyB = this.m_fixtureB.getBody();
            var shapeA = this.m_fixtureA.getShape();
            var shapeB = this.m_fixtureB.getShape();
            var manifold = this.m_manifold.getWorldManifold(worldManifold, bodyA.getTransform(), shapeA.m_radius, bodyB.getTransform(), shapeB.m_radius);
            return manifold
        };
        Contact.prototype.setEnabled = function(flag) {
            this.m_enabledFlag = !!flag
        };
        Contact.prototype.isEnabled = function() {
            return this.m_enabledFlag
        };
        Contact.prototype.isTouching = function() {
            return this.m_touchingFlag
        };
        Contact.prototype.getNext = function() {
            return this.m_next
        };
        Contact.prototype.getFixtureA = function() {
            return this.m_fixtureA
        };
        Contact.prototype.getFixtureB = function() {
            return this.m_fixtureB
        };
        Contact.prototype.getChildIndexA = function() {
            return this.m_indexA
        };
        Contact.prototype.getChildIndexB = function() {
            return this.m_indexB
        };
        Contact.prototype.flagForFiltering = function() {
            this.m_filterFlag = true
        };
        Contact.prototype.setFriction = function(friction) {
            this.m_friction = friction
        };
        Contact.prototype.getFriction = function() {
            return this.m_friction
        };
        Contact.prototype.resetFriction = function() {
            this.m_friction = mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction)
        };
        Contact.prototype.setRestitution = function(restitution) {
            this.m_restitution = restitution
        };
        Contact.prototype.getRestitution = function() {
            return this.m_restitution
        };
        Contact.prototype.resetRestitution = function() {
            this.m_restitution = mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution)
        };
        Contact.prototype.setTangentSpeed = function(speed) {
            this.m_tangentSpeed = speed
        };
        Contact.prototype.getTangentSpeed = function() {
            return this.m_tangentSpeed
        };
        Contact.prototype.evaluate = function(manifold, xfA, xfB) {
            this.m_evaluateFcn(manifold, xfA, this.m_fixtureA, this.m_indexA, xfB, this.m_fixtureB, this.m_indexB)
        };
        var cup_manifold = new Manifold;
        Contact.prototype.update = function(listener) {
            this.m_enabledFlag = true;
            var touching = false;
            var wasTouching = this.m_touchingFlag;
            var sensorA = this.m_fixtureA.isSensor();
            var sensorB = this.m_fixtureB.isSensor();
            var sensor = sensorA || sensorB;
            var bodyA = this.m_fixtureA.getBody();
            var bodyB = this.m_fixtureB.getBody();
            var xfA = bodyA.getTransform();
            var xfB = bodyB.getTransform();
            if (sensor) {
                var shapeA = this.m_fixtureA.getShape();
                var shapeB = this.m_fixtureB.getShape();
                touching = Distance.testOverlap(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA, xfB);
                this.m_manifold.pointCount = 0
            } else {
                var oldManifold = this.m_manifold;
                this.m_manifold = cup_manifold.init();
                cup_manifold = oldManifold;
                this.evaluate(this.m_manifold, xfA, xfB);
                touching = this.m_manifold.pointCount > 0;
                for (var i = 0; i < this.m_manifold.pointCount; ++i) {
                    var nmp = this.m_manifold.points[i];
                    nmp.normalImpulse = 0;
                    nmp.tangentImpulse = 0;
                    for (var j = 0; j < oldManifold.pointCount; ++j) {
                        var omp = oldManifold.points[j];
                        if (omp.id.key == nmp.id.key) {
                            nmp.normalImpulse = omp.normalImpulse;
                            nmp.tangentImpulse = omp.tangentImpulse;
                            break
                        }
                    }
                }
                if (touching !== wasTouching) {
                    bodyA.setAwake(true);
                    bodyB.setAwake(true)
                }
            }
            this.m_touchingFlag = touching;
            if (!wasTouching && touching && listener) {
                listener.beginContact(this)
            }
            if (wasTouching && !touching && listener) {
                listener.endContact(this)
            }
            if (!sensor && touching && listener) {
                listener.preSolve(this, oldManifold)
            }
        };
        Contact.prototype.solvePositionConstraint = function(step) {
            return this._solvePositionConstraint(step, false)
        };
        Contact.prototype.solvePositionConstraintTOI = function(step, toiA, toiB) {
            return this._solvePositionConstraint(step, true, toiA, toiB)
        };
        var spc_localCenterA = Vec2.zero();
        var spc_localCenterB = Vec2.zero();
        var spc_cA = Vec2.zero();
        var spc_cB = Vec2.zero();
        var spc_xfA = Transform.identity();
        var spc_xfB = Transform.identity();
        var spc_t1 = Vec2.zero();
        var spc_t2 = Vec2.zero();
        var spc_normal = Vec2.zero();
        var spc_point = Vec2.zero();
        var spc_pointA = Vec2.zero();
        var spc_pointB = Vec2.zero();
        var spc_planePoint = Vec2.zero();
        var spc_clipPoint = Vec2.zero();
        var spc_rA = Vec2.zero();
        var spc_rB = Vec2.zero();
        var spc_P = Vec2.zero();
        Contact.prototype._solvePositionConstraint = function(step, toi, toiA, toiB) {
            var fixtureA = this.m_fixtureA;
            var fixtureB = this.m_fixtureB;
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            var velocityA = bodyA.c_velocity;
            var velocityB = bodyB.c_velocity;
            var positionA = bodyA.c_position;
            var positionB = bodyB.c_position;
            var localCenterA = spc_localCenterA.setVec2(this.p_localCenterA);
            var localCenterB = spc_localCenterB.setVec2(this.p_localCenterB);
            var mA = 0;
            var iA = 0;
            if (!toi || (bodyA === toiA || bodyA === toiB)) {
                mA = this.p_invMassA;
                iA = this.p_invIA
            }
            var mB = 0;
            var iB = 0;
            if (!toi || (bodyB === toiA || bodyB === toiB)) {
                mB = this.p_invMassB;
                iB = this.p_invIB
            }
            var cA = spc_cA.setVec2(positionA.c);
            var aA = positionA.a;
            var cB = spc_cB.setVec2(positionB.c);
            var aB = positionB.a;
            var minSeparation = 0;
            for (var j = 0; j < this.p_pointCount; ++j) {
                var xfA = spc_xfA.setIdentity();
                var xfB = spc_xfB.setIdentity();
                xfA.q.set(aA);
                xfB.q.set(aB);
                xfA.p.setVec2(Vec2.sub_(cA, Rot.mulVec2_(xfA.q, localCenterA, spc_t1), spc_t2));
                xfB.p.setVec2(Vec2.sub_(cB, Rot.mulVec2_(xfB.q, localCenterB, spc_t1), spc_t2));
                var normal, point, separation;
                switch (this.p_type) {
                    case Manifold.e_circles:
                        var pointA = Transform.mulVec2_(xfA, this.p_localPoint, spc_pointA);
                        var pointB = Transform.mulVec2_(xfB, this.p_localPoints[0], spc_pointB);
                        normal = Vec2.sub_(pointB, pointA, spc_normal);
                        normal.normalize();
                        point = Vec2.combine_(.5, pointA, .5, pointB, spc_point);
                        separation = Vec2.dot(Vec2.sub(pointB, pointA), normal) - this.p_radiusA - this.p_radiusB;
                        break;
                    case Manifold.e_faceA:
                        normal = Rot.mulVec2_(xfA.q, this.p_localNormal, spc_normal);
                        var planePoint = Transform.mulVec2_(xfA, this.p_localPoint, spc_planePoint);
                        var clipPoint = Transform.mulVec2_(xfB, this.p_localPoints[j], spc_clipPoint);
                        separation = Vec2.dot(Vec2.sub_(clipPoint, planePoint, spc_t1), normal) - this.p_radiusA - this.p_radiusB;
                        point = spc_point.setVec2(clipPoint);
                        break;
                    case Manifold.e_faceB:
                        normal = Rot.mulVec2_(xfB.q, this.p_localNormal, spc_normal);
                        var planePoint = Transform.mulVec2_(xfB, this.p_localPoint, spc_planePoint);
                        var clipPoint = Transform.mulVec2_(xfA, this.p_localPoints[j], spc_clipPoint);
                        separation = Vec2.dot(Vec2.sub_(clipPoint, planePoint, spc_t1), normal) - this.p_radiusA - this.p_radiusB;
                        point = spc_point.setVec2(clipPoint);
                        normal.mul(-1);
                        break
                }
                var rA = Vec2.sub_(point, cA, spc_rA);
                var rB = Vec2.sub_(point, cB, spc_rB);
                minSeparation = Math.min(minSeparation, separation);
                var baumgarte = toi ? Settings.toiBaugarte : Settings.baumgarte;
                var linearSlop = Settings.linearSlop;
                var maxLinearCorrection = Settings.maxLinearCorrection;
                var C = Math.clamp(baumgarte * (separation + linearSlop), -maxLinearCorrection, 0);
                var rnA = Vec2.crossVec2Vec2(rA, normal);
                var rnB = Vec2.crossVec2Vec2(rB, normal);
                var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                var impulse = K > 0 ? -C / K : 0;
                var P = Vec2.mulNumVec2_(impulse, normal, spc_P);
                cA.subMul(mA, P);
                aA -= iA * Vec2.crossVec2Vec2(rA, P);
                cB.addMul(mB, P);
                aB += iB * Vec2.crossVec2Vec2(rB, P)
            }
            positionA.c.setVec2(cA);
            positionA.a = aA;
            positionB.c.setVec2(cB);
            positionB.a = aB;
            return minSeparation
        };

        function VelocityConstraintPoint() {
            this.rA = Vec2.zero();
            this.rB = Vec2.zero();
            this.normalImpulse = 0;
            this.tangentImpulse = 0;
            this.normalMass = 0;
            this.tangentMass = 0;
            this.velocityBias = 0
        }
        VelocityConstraintPoint.prototype.init = function() {
            this.rA.setZero();
            this.rB.setZero();
            this.normalImpulse = 0;
            this.tangentImpulse = 0;
            this.normalMass = 0;
            this.tangentMass = 0;
            this.velocityBias = 0;
            return this
        };
        var ivc_localCenterA = Vec2.zero();
        var ivc_localCenterB = Vec2.zero();
        var ivc_normal = Vec2.zero();
        var ivc_cA = Vec2.zero();
        var ivc_cB = Vec2.zero();
        var ivc_vA = Vec2.zero();
        var ivc_vB = Vec2.zero();
        var ivc_t1 = Vec2.zero();
        var ivc_t2 = Vec2.zero();
        var ivc_xfA = Transform.identity();
        var ivc_xfB = Transform.identity();
        Contact.prototype.initVelocityConstraint = function(step) {
            var fixtureA = this.m_fixtureA;
            var fixtureB = this.m_fixtureB;
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            var velocityA = bodyA.c_velocity;
            var velocityB = bodyB.c_velocity;
            var positionA = bodyA.c_position;
            var positionB = bodyB.c_position;
            var radiusA = this.p_radiusA;
            var radiusB = this.p_radiusB;
            var manifold = this.m_manifold;
            var mA = this.v_invMassA;
            var mB = this.v_invMassB;
            var iA = this.v_invIA;
            var iB = this.v_invIB;
            var localCenterA = ivc_localCenterA.setVec2(this.p_localCenterA);
            var localCenterB = ivc_localCenterB.setVec2(this.p_localCenterB);
            var cA = ivc_cA.setVec2(positionA.c);
            var aA = positionA.a;
            var vA = ivc_vA.setVec2(velocityA.v);
            var wA = velocityA.w;
            var cB = ivc_cB.set(positionB.c);
            var aB = positionB.a;
            var vB = ivc_vB.set(velocityB.v);
            var wB = velocityB.w;
            _ASSERT && common.assert(manifold.pointCount > 0);
            var xfA = ivc_xfA.setIdentity();
            var xfB = ivc_xfB.setIdentity();
            xfA.q.set(aA);
            xfB.q.set(aB);
            xfA.p.setCombine(1, cA, -1, Rot.mulVec2(xfA.q, localCenterA));
            xfB.p.setCombine(1, cB, -1, Rot.mulVec2(xfB.q, localCenterB));
            var worldManifold = manifold.getWorldManifold(null, xfA, radiusA, xfB, radiusB);
            this.v_normal.set(worldManifold.normal);
            for (var j = 0; j < this.v_pointCount; ++j) {
                var vcp = this.v_points[j];
                vcp.rA.setCombine(1, worldManifold.points[j], -1, cA);
                vcp.rB.setCombine(1, worldManifold.points[j], -1, cB);
                var rnA = Vec2.crossVec2Vec2(vcp.rA, this.v_normal);
                var rnB = Vec2.crossVec2Vec2(vcp.rB, this.v_normal);
                var kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
                vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;
                var tangent = Vec2.crossVec2Num_(this.v_normal, 1, ivc_normal);
                var rtA = Vec2.crossVec2Vec2(vcp.rA, tangent);
                var rtB = Vec2.crossVec2Vec2(vcp.rB, tangent);
                var kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;
                vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;
                vcp.velocityBias = 0;
                var vRel = Vec2.dot(this.v_normal, vB) + Vec2.dot(this.v_normal, Vec2.crossNumVec2_(wB, vcp.rB, ivc_t1)) - Vec2.dot(this.v_normal, vA) - Vec2.dot(this.v_normal, Vec2.crossNumVec2_(wA, vcp.rA, ivc_t2));
                if (vRel < -Settings.velocityThreshold) {
                    vcp.velocityBias = -this.v_restitution * vRel
                }
            }
            if (this.v_pointCount === 2 && step.blockSolve) {
                var vcp1 = this.v_points[0];
                var vcp2 = this.v_points[1];
                var rn1A = Vec2.crossVec2Vec2(vcp1.rA, this.v_normal);
                var rn1B = Vec2.crossVec2Vec2(vcp1.rB, this.v_normal);
                var rn2A = Vec2.crossVec2Vec2(vcp2.rA, this.v_normal);
                var rn2B = Vec2.crossVec2Vec2(vcp2.rB, this.v_normal);
                var k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
                var k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
                var k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;
                var k_maxConditionNumber = 1e3;
                if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
                    this.v_K.ex.set(k11, k12);
                    this.v_K.ey.set(k12, k22);
                    this.v_normalMass.set(this.v_K.getInverse())
                } else {
                    this.v_pointCount = 1
                }
            }
            positionA.c.set(cA);
            positionA.a = aA;
            velocityA.v.set(vA);
            velocityA.w = wA;
            positionB.c.set(cB);
            positionB.a = aB;
            velocityB.v.set(vB);
            velocityB.w = wB
        };
        var wsc_vA = Vec2.zero();
        var wsc_vB = Vec2.zero();
        var wsc_normal = Vec2.zero();
        var wsc_P = Vec2.zero();
        Contact.prototype.warmStartConstraint = function(step) {
            var fixtureA = this.m_fixtureA;
            var fixtureB = this.m_fixtureB;
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            var velocityA = bodyA.c_velocity;
            var velocityB = bodyB.c_velocity;
            var positionA = bodyA.c_position;
            var positionB = bodyB.c_position;
            var mA = this.v_invMassA;
            var iA = this.v_invIA;
            var mB = this.v_invMassB;
            var iB = this.v_invIB;
            var vA = wsc_vA.set(velocityA.v);
            var wA = velocityA.w;
            var vB = wsc_vB.set(velocityB.v);
            var wB = velocityB.w;
            var normal = this.v_normal;
            var tangent = Vec2.crossVec2Num_(normal, 1, wsc_normal);
            for (var j = 0; j < this.v_pointCount; ++j) {
                var vcp = this.v_points[j];
                var P = wsc_P.setCombine(vcp.normalImpulse, normal, vcp.tangentImpulse, tangent);
                wA -= iA * Vec2.crossVec2Vec2(vcp.rA, P);
                vA.subMul(mA, P);
                wB += iB * Vec2.crossVec2Vec2(vcp.rB, P);
                vB.addMul(mB, P)
            }
            velocityA.v.set(vA);
            velocityA.w = wA;
            velocityB.v.set(vB);
            velocityB.w = wB
        };
        Contact.prototype.storeConstraintImpulses = function(step) {
            var manifold = this.m_manifold;
            for (var j = 0; j < this.v_pointCount; ++j) {
                manifold.points[j].normalImpulse = this.v_points[j].normalImpulse;
                manifold.points[j].tangentImpulse = this.v_points[j].tangentImpulse
            }
        };
        var svc_vA = Vec2.zero();
        var svc_vB = Vec2.zero();
        var svc_dv = Vec2.zero();
        var svc_P = Vec2.zero();
        var svc_tangent = Vec2.zero();
        var svc_a = Vec2.zero();
        var svc_b = Vec2.zero();
        var svc_d = Vec2.zero();
        var svc_x = Vec2.zero();
        var svc_dv1 = Vec2.zero();
        var svc_dv2 = Vec2.zero();
        var svc_P1 = Vec2.zero();
        var svc_P2 = Vec2.zero();
        var svc_t1 = Vec2.zero();
        var svc_t2 = Vec2.zero();
        Contact.prototype.solveVelocityConstraint = function(step) {
            var bodyA = this.m_fixtureA.m_body;
            var bodyB = this.m_fixtureB.m_body;
            var velocityA = bodyA.c_velocity;
            var positionA = bodyA.c_position;
            var velocityB = bodyB.c_velocity;
            var positionB = bodyB.c_position;
            var mA = this.v_invMassA;
            var iA = this.v_invIA;
            var mB = this.v_invMassB;
            var iB = this.v_invIB;
            var vAX = velocityA.v.x;
            var vAY = velocityA.v.y;
            var wA = velocityA.w;
            var vBX = velocityB.v.x;
            var vBY = velocityB.v.y;
            var wB = velocityB.w;
            var normal = this.v_normal;
            var tangent = Vec2.crossVec2Num_(normal, 1, svc_tangent);
            var friction = this.v_friction;
            _ASSERT && common.assert(this.v_pointCount === 1 || this.v_pointCount === 2);
            for (var j = 0; j < this.v_pointCount; ++j) {
                var vcp = this.v_points[j];
                var dvX = 0;
                var dvY = 0;
                dvX += vBX + -wB * vcp.rB.y;
                dvY += vBY + wB * vcp.rB.x;
                dvX -= vAX + -wA * vcp.rA.y;
                dvY -= vAY + wA * vcp.rA.x;
                var vt = dvX * tangent.x + dvY * tangent.y - this.v_tangentSpeed;
                var lambda = vcp.tangentMass * -vt;
                var maxFriction = friction * vcp.normalImpulse;
                var newImpulse = Math.clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
                lambda = newImpulse - vcp.tangentImpulse;
                vcp.tangentImpulse = newImpulse;
                var PX = lambda * tangent.x;
                var PY = lambda * tangent.y;
                vAX -= mA * PX;
                vAX -= mA * PY;
                wA -= iA * (vcp.rA.x * PY - vcp.rA.y * PX);
                vBX += mB * PX;
                vBY += mB * PY;
                wB += iB * (vcp.rB.x * PY - vcp.rB.y * PX)
            }
            if (this.v_pointCount === 1 || step.blockSolve === false) {
                for (var i = 0; i < this.v_pointCount; ++i) {
                    var vcp = this.v_points[i];
                    var dvX = 0;
                    var dvY = 0;
                    dvX += vBX + -wB * vcp.rB.y;
                    dvY += vBY + wB * vcp.rB.x;
                    dvX -= vAX + -wA * vcp.rA.y;
                    dvY -= vAY + wA * vcp.rA.x;
                    var vn = dvX * normal.x + dvY * normal.y;
                    var lambda = -vcp.normalMass * (vn - vcp.velocityBias);
                    var newImpulse = Math.max(vcp.normalImpulse + lambda, 0);
                    lambda = newImpulse - vcp.normalImpulse;
                    vcp.normalImpulse = newImpulse;
                    var PX = lambda * normal.x;
                    var PY = lambda * normal.y;
                    vAX -= mA * PX;
                    vAY -= mA * PY;
                    wA -= iA * (vcp.rA.x * PY - vcp.rA.y * PX);
                    vBX += mB * PX;
                    vBY += mB * PY;
                    wB += iB * (vcp.rB.x * PY - vcp.rB.y * PX)
                }
            } else {
                var vcp1 = this.v_points[0];
                var vcp2 = this.v_points[1];
                var aX = vcp1.normalImpulse;
                var aY = vcp2.normalImpulse;
                _ASSERT && common.assert(aX >= 0 && aY >= 0);
                var dv1X = vBX + -wB * vcp1.rB.y - (vAX + -wA * vcp1.rA.y);
                var dv1Y = vBY + wB * vcp1.rB.x - (vAY + wA * vcp1.rA.x);
                var dv2X = vBX + -wB * vcp2.rB.y - (vAX + -wA * vcp2.rA.y);
                var dv2Y = vBY + wB * vcp2.rB.x - (vAY + wA * vcp2.rA.x);
                var vn1 = dv1X * normal.x + dv1Y * normal.y;
                var vn2 = dv2X * normal.x + dv2Y * normal.y;
                var bX = vn1 - vcp1.velocityBias;
                var bY = vn2 - vcp2.velocityBias;
                bX -= this.v_K.ex.x * aX + this.v_K.ey.x * aY;
                bY -= this.v_K.ex.y * aX + this.v_K.ey.y * aY;
                var k_errorTol = .001;
                for (;;) {
                    var xX = -(this.v_normalMass.ex.x * bX + this.v_normalMass.ey.x * bY);
                    var xY = -(this.v_normalMass.ex.y * bX + this.v_normalMass.ey.y * bY);
                    if (xX >= 0 && xY >= 0) {
                        var dX = xX - aX;
                        var dY = xY - aY;
                        var P1X = dX * normal.x;
                        var P1Y = dX * normal.y;
                        var P2X = dY * normal.x;
                        var P2Y = dY * normal.y;
                        vAX -= mA * P1X + mA * P2X;
                        vAY -= mA * P1Y + mA * P2Y;
                        wA -= iA * (vcp1.rA.x * P1Y - vcp1.rA.y * P1X + vcp2.rA.x * P2Y - vcp2.rA.y * P2X);
                        vBX += mB * P1X + mB * P2X;
                        vBY += mB * P1Y + mB * P2Y;
                        wB += iB * (vcp1.rB.x * P1Y - vcp1.rB.y * P1X + vcp2.rB.x * P2Y - vcp2.rB.y * P2X);
                        vcp1.normalImpulse = xX;
                        vcp2.normalImpulse = xY;
                        if (DEBUG_SOLVER) {
                            _ASSERT && common.assert(Math.abs(vn1 - vcp1.velocityBias) < k_errorTol);
                            _ASSERT && common.assert(Math.abs(vn2 - vcp2.velocityBias) < k_errorTol)
                        }
                        break
                    }
                    xX = -vcp1.normalMass * bX;
                    xY = 0;
                    vn1 = 0;
                    vn2 = this.v_K.ex.y * xX + bY;
                    if (xX >= 0 && vn2 >= 0) {
                        var dX = xX - aX;
                        var dY = xY - aY;
                        var P1X = dX * normal.x;
                        var P1Y = dX * normal.y;
                        var P2X = dY * normal.x;
                        var P2Y = dY * normal.y;
                        vAX -= mA * P1X + mA * P2X;
                        vAY -= mA * P1Y + mA * P2Y;
                        wA -= iA * (vcp1.rA.x * P1Y - vcp1.rA.y * P1X + vcp2.rA.x * P2Y - vcp2.rA.y * P2X);
                        vBX += mB * P1X + mB * P2X;
                        vBY += mB * P1Y + mB * P2Y;
                        wB += iB * (vcp1.rB.x * P1Y - vcp1.rB.y * P1X + vcp2.rB.x * P2Y - vcp2.rB.y * P2X);
                        vcp1.normalImpulse = xX;
                        vcp2.normalImpulse = xY;
                        if (DEBUG_SOLVER) {
                            _ASSERT && common.assert(Math.abs(vn1 - vcp1.velocityBias) < k_errorTol)
                        }
                        break
                    }
                    xX = 0;
                    xY = -vcp2.normalMass * bY;
                    vn1 = this.v_K.ey.x * xY + bX;
                    vn2 = 0;
                    if (xY >= 0 && vn1 >= 0) {
                        var dX = xX - aX;
                        var dY = xY - aY;
                        var P1X = dX * normal.x;
                        var P1Y = dX * normal.y;
                        var P2X = dY * normal.x;
                        var P2Y = dY * normal.y;
                        vAX -= mA * P1X + mA * P2X;
                        vAY -= mA * P1Y + mA * P2Y;
                        wA -= iA * (vcp1.rA.x * P1Y - vcp1.rA.y * P1X + vcp2.rA.x * P2Y - vcp2.rA.y * P2X);
                        vBX += mB * P1X + mB * P2X;
                        vBY += mB * P1Y + mB * P2Y;
                        wB += iB * (vcp1.rB.x * P1Y - vcp1.rB.y * P1X + vcp2.rB.x * P2Y - vcp2.rB.y * P2X);
                        vcp1.normalImpulse = xX;
                        vcp2.normalImpulse = xY;
                        if (DEBUG_SOLVER) {
                            _ASSERT && common.assert(Math.abs(vn2 - vcp2.velocityBias) < k_errorTol)
                        }
                        break
                    }
                    xX = 0;
                    xY = 0;
                    vn1 = bX;
                    vn2 = bY;
                    if (vn1 >= 0 && vn2 >= 0) {
                        var dX = xX - aX;
                        var dY = xY - aY;
                        var P1X = dX * normal.x;
                        var P1Y = dX * normal.y;
                        var P2X = dY * normal.x;
                        var P2Y = dY * normal.y;
                        vAX -= mA * P1X + mA * P2X;
                        vAY -= mA * P1Y + mA * P2Y;
                        wA -= iA * (vcp1.rA.x * P1Y - vcp1.rA.y * P1X + vcp2.rA.x * P2Y - vcp2.rA.y * P2X);
                        vBX += mB * P1X + mB * P2X;
                        vBY += mB * P1Y + mB * P2Y;
                        wB += iB * (vcp1.rB.x * P1Y - vcp1.rB.y * P1X + vcp2.rB.x * P2Y - vcp2.rB.y * P2X);
                        vcp1.normalImpulse = xX;
                        vcp2.normalImpulse = xY;
                        break
                    }
                    break
                }
            }
            velocityA.v.x = vAX;
            velocityA.v.y = vAY;
            velocityA.w = wA;
            velocityB.v.x = vBX;
            velocityB.v.y = vBY;
            velocityB.w = wB
        };

        function mixFriction(friction1, friction2) {
            return Math.sqrt(friction1 * friction2)
        }

        function mixRestitution(restitution1, restitution2) {
            return restitution1 > restitution2 ? restitution1 : restitution2
        }
        var s_registers = [];
        var contactPool = new Pool({
            create: function() {
                return new Contact
            }
        });
        Contact.addType = function(type1, type2, callback) {
            s_registers[type1] = s_registers[type1] || {};
            s_registers[type1][type2] = callback
        };
        Contact.create = function(fixtureA, indexA, fixtureB, indexB) {
            var typeA = fixtureA.getType();
            var typeB = fixtureB.getType();
            var contact, evaluateFcn;
            if (evaluateFcn = s_registers[typeA] && s_registers[typeA][typeB]) {
                contact = contactPool.allocate();
                contact.init(fixtureA, indexA, fixtureB, indexB, evaluateFcn)
            } else if (evaluateFcn = s_registers[typeB] && s_registers[typeB][typeA]) {
                contact = contactPool.allocate();
                contact.init(fixtureB, indexB, fixtureA, indexA, evaluateFcn)
            } else {
                return null
            }
            fixtureA = contact.getFixtureA();
            fixtureB = contact.getFixtureB();
            indexA = contact.getChildIndexA();
            indexB = contact.getChildIndexB();
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            contact.m_nodeA.contact = contact;
            contact.m_nodeA.other = bodyB;
            contact.m_nodeA.prev = null;
            contact.m_nodeA.next = bodyA.m_contactList;
            if (bodyA.m_contactList != null) {
                bodyA.m_contactList.prev = contact.m_nodeA
            }
            bodyA.m_contactList = contact.m_nodeA;
            contact.m_nodeB.contact = contact;
            contact.m_nodeB.other = bodyA;
            contact.m_nodeB.prev = null;
            contact.m_nodeB.next = bodyB.m_contactList;
            if (bodyB.m_contactList != null) {
                bodyB.m_contactList.prev = contact.m_nodeB
            }
            bodyB.m_contactList = contact.m_nodeB;
            if (!fixtureA.isSensor() && !fixtureB.isSensor()) {
                bodyA.setAwake(true);
                bodyB.setAwake(true)
            }
            return contact
        };
        Contact.destroy = function(contact, listener) {
            var fixtureA = contact.m_fixtureA;
            var fixtureB = contact.m_fixtureB;
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            if (contact.isTouching()) {
                listener.endContact(contact)
            }
            if (contact.m_nodeA.prev) {
                contact.m_nodeA.prev.next = contact.m_nodeA.next
            }
            if (contact.m_nodeA.next) {
                contact.m_nodeA.next.prev = contact.m_nodeA.prev
            }
            if (contact.m_nodeA === bodyA.m_contactList) {
                bodyA.m_contactList = contact.m_nodeA.next
            }
            if (contact.m_nodeB.prev) {
                contact.m_nodeB.prev.next = contact.m_nodeB.next
            }
            if (contact.m_nodeB.next) {
                contact.m_nodeB.next.prev = contact.m_nodeB.prev
            }
            if (contact.m_nodeB === bodyB.m_contactList) {
                bodyB.m_contactList = contact.m_nodeB.next
            }
            if (contact.m_manifold.pointCount > 0 && !fixtureA.isSensor() && !fixtureB.isSensor()) {
                bodyA.setAwake(true);
                bodyB.setAwake(true)
            }
            var typeA = fixtureA.getType();
            var typeB = fixtureB.getType();
            var destroyFcn = s_registers[typeA][typeB].destroyFcn;
            if (typeof destroyFcn === "function") {
                destroyFcn(contact)
            }
            contactPool.release(contact)
        }
    }, {
        "./Manifold": 8,
        "./Settings": 9,
        "./collision/Distance": 15,
        "./common/Mat22": 18,
        "./common/Math": 20,
        "./common/Rot": 22,
        "./common/Transform": 24,
        "./common/Vec2": 25,
        "./util/Pool": 51,
        "./util/common": 53
    }],
    6: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Fixture;
        var common = require("./util/common");
        var options = require("./util/options");
        var Math = require("./common/Math");
        var Vec2 = require("./common/Vec2");
        var AABB = require("./collision/AABB");
        var FixtureDef = {
            userData: null,
            friction: .2,
            restitution: 0,
            density: 0,
            isSensor: false,
            filterGroupIndex: 0,
            filterCategoryBits: 1,
            filterMaskBits: 65535
        };

        function FixtureProxy(fixture, childIndex) {
            this.aabb = new AABB;
            this.fixture = fixture;
            this.childIndex = childIndex;
            this.proxyId
        }

        function Fixture(body, shape, def) {
            if (shape.shape) {
                def = shape;
                shape = shape.shape
            } else if (typeof def === "number") {
                def = {
                    density: def
                }
            }
            def = options(def, FixtureDef);
            this.m_body = body;
            this.m_friction = def.friction;
            this.m_restitution = def.restitution;
            this.m_density = def.density;
            this.m_isSensor = def.isSensor;
            this.m_filterGroupIndex = def.filterGroupIndex;
            this.m_filterCategoryBits = def.filterCategoryBits;
            this.m_filterMaskBits = def.filterMaskBits;
            this.m_shape = shape;
            this.m_next = null;
            this.m_proxies = [];
            this.m_proxyCount = 0;
            var childCount = this.m_shape.getChildCount();
            for (var i = 0; i < childCount; ++i) {
                this.m_proxies[i] = new FixtureProxy(this, i)
            }
            this.m_userData = def.userData
        }
        Fixture.prototype.getType = function() {
            return this.m_shape.getType()
        };
        Fixture.prototype.getShape = function() {
            return this.m_shape
        };
        Fixture.prototype.isSensor = function() {
            return this.m_isSensor
        };
        Fixture.prototype.setSensor = function(sensor) {
            if (sensor != this.m_isSensor) {
                this.m_body.setAwake(true);
                this.m_isSensor = sensor
            }
        };
        Fixture.prototype.getUserData = function() {
            return this.m_userData
        };
        Fixture.prototype.setUserData = function(data) {
            this.m_userData = data
        };
        Fixture.prototype.getBody = function() {
            return this.m_body
        };
        Fixture.prototype.getNext = function() {
            return this.m_next
        };
        Fixture.prototype.getDensity = function() {
            return this.m_density
        };
        Fixture.prototype.setDensity = function(density) {
            _ASSERT && common.assert(Math.isFinite(density) && density >= 0);
            this.m_density = density
        };
        Fixture.prototype.getFriction = function() {
            return this.m_friction
        };
        Fixture.prototype.setFriction = function(friction) {
            this.m_friction = friction
        };
        Fixture.prototype.getRestitution = function() {
            return this.m_restitution
        };
        Fixture.prototype.setRestitution = function(restitution) {
            this.m_restitution = restitution
        };
        Fixture.prototype.testPoint = function(p) {
            return this.m_shape.testPoint(this.m_body.getTransform(), p)
        };
        Fixture.prototype.rayCast = function(output, input, childIndex) {
            return this.m_shape.rayCast(output, input, this.m_body.getTransform(), childIndex)
        };
        Fixture.prototype.getMassData = function(massData) {
            this.m_shape.computeMass(massData, this.m_density)
        };
        Fixture.prototype.getAABB = function(childIndex) {
            _ASSERT && common.assert(0 <= childIndex && childIndex < this.m_proxyCount);
            return this.m_proxies[childIndex].aabb
        };
        Fixture.prototype.createProxies = function(broadPhase, xf) {
            _ASSERT && common.assert(this.m_proxyCount == 0);
            this.m_proxyCount = this.m_shape.getChildCount();
            for (var i = 0; i < this.m_proxyCount; ++i) {
                var proxy = this.m_proxies[i];
                this.m_shape.computeAABB(proxy.aabb, xf, i);
                proxy.proxyId = broadPhase.createProxy(proxy.aabb, proxy)
            }
        };
        Fixture.prototype.destroyProxies = function(broadPhase) {
            for (var i = 0; i < this.m_proxyCount; ++i) {
                var proxy = this.m_proxies[i];
                broadPhase.destroyProxy(proxy.proxyId);
                proxy.proxyId = null
            }
            this.m_proxyCount = 0
        };
        Fixture.prototype.synchronize = function(broadPhase, xf1, xf2) {
            for (var i = 0; i < this.m_proxyCount; ++i) {
                var proxy = this.m_proxies[i];
                var aabb1 = new AABB;
                var aabb2 = new AABB;
                this.m_shape.computeAABB(aabb1, xf1, proxy.childIndex);
                this.m_shape.computeAABB(aabb2, xf2, proxy.childIndex);
                proxy.aabb.combine(aabb1, aabb2);
                var displacement = Vec2.sub(xf2.p, xf1.p);
                broadPhase.moveProxy(proxy.proxyId, proxy.aabb, displacement)
            }
        };
        Fixture.prototype.setFilterData = function(filter) {
            this.m_filterGroupIndex = filter.groupIndex;
            this.m_filterCategoryBits = filter.categoryBits;
            this.m_filterMaskBits = filter.maskBits;
            this.refilter()
        };
        Fixture.prototype.getFilterGroupIndex = function() {
            return this.m_filterGroupIndex
        };
        Fixture.prototype.getFilterCategoryBits = function() {
            return this.m_filterCategoryBits
        };
        Fixture.prototype.getFilterMaskBits = function() {
            return this.m_filterMaskBits
        };
        Fixture.prototype.refilter = function() {
            if (this.m_body == null) {
                return
            }
            var edge = this.m_body.getContactList();
            while (edge) {
                var contact = edge.contact;
                var fixtureA = contact.getFixtureA();
                var fixtureB = contact.getFixtureB();
                if (fixtureA == this || fixtureB == this) {
                    contact.flagForFiltering()
                }
                edge = edge.next
            }
            var world = this.m_body.getWorld();
            if (world == null) {
                return
            }
            var broadPhase = world.m_broadPhase;
            for (var i = 0; i < this.m_proxyCount; ++i) {
                broadPhase.touchProxy(this.m_proxies[i].proxyId)
            }
        };
        Fixture.prototype.shouldCollide = function(that) {
            if (that.m_filterGroupIndex == this.m_filterGroupIndex && that.m_filterGroupIndex != 0) {
                return that.m_filterGroupIndex > 0
            }
            var collide = (that.m_filterMaskBits & this.m_filterCategoryBits) != 0 && (that.m_filterCategoryBits & this.m_filterMaskBits) != 0;
            return collide
        }
    }, {
        "./collision/AABB": 13,
        "./common/Math": 20,
        "./common/Vec2": 25,
        "./util/common": 53,
        "./util/options": 55
    }],
    7: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Joint;
        var common = require("./util/common");

        function JointEdge() {
            this.other = null;
            this.joint = null;
            this.prev = null;
            this.next = null
        }
        var DEFAULTS = {
            userData: null,
            collideConnected: false
        };

        function Joint(def, bodyA, bodyB) {
            bodyA = def.bodyA || bodyA;
            bodyB = def.bodyB || bodyB;
            _ASSERT && common.assert(bodyA);
            _ASSERT && common.assert(bodyB);
            _ASSERT && common.assert(bodyA != bodyB);
            this.m_type = "unknown-joint";
            this.m_bodyA = bodyA;
            this.m_bodyB = bodyB;
            this.m_index = 0;
            this.m_collideConnected = !!def.collideConnected;
            this.m_prev = null;
            this.m_next = null;
            this.m_edgeA = new JointEdge;
            this.m_edgeB = new JointEdge;
            this.m_islandFlag = false;
            this.m_userData = def.userData
        }
        Joint.prototype.isActive = function() {
            return this.m_bodyA.isActive() && this.m_bodyB.isActive()
        };
        Joint.prototype.getType = function() {
            return this.m_type
        };
        Joint.prototype.getBodyA = function() {
            return this.m_bodyA
        };
        Joint.prototype.getBodyB = function() {
            return this.m_bodyB
        };
        Joint.prototype.getNext = function() {
            return this.m_next
        };
        Joint.prototype.getUserData = function() {
            return this.m_userData
        };
        Joint.prototype.setUserData = function(data) {
            this.m_userData = data
        };
        Joint.prototype.getCollideConnected = function() {
            return this.m_collideConnected
        };
        Joint.prototype.getAnchorA = function() {};
        Joint.prototype.getAnchorB = function() {};
        Joint.prototype.getReactionForce = function(inv_dt) {};
        Joint.prototype.getReactionTorque = function(inv_dt) {};
        Joint.prototype.shiftOrigin = function(newOrigin) {};
        Joint.prototype.initVelocityConstraints = function(step) {};
        Joint.prototype.solveVelocityConstraints = function(step) {};
        Joint.prototype.solvePositionConstraints = function(step) {}
    }, {
        "./util/common": 53
    }],
    8: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("./util/common");
        var Vec2 = require("./common/Vec2");
        var Transform = require("./common/Transform");
        var Math = require("./common/Math");
        var Rot = require("./common/Rot");
        module.exports = Manifold;
        module.exports.clipSegmentToLine = clipSegmentToLine;
        module.exports.clipVertex = ClipVertex;
        module.exports.getPointStates = getPointStates;
        module.exports.PointState = PointState;
        Manifold.e_circles = 0;
        Manifold.e_faceA = 1;
        Manifold.e_faceB = 2;
        Manifold.e_vertex = 0;
        Manifold.e_face = 1;

        function Manifold() {
            this.type = -1;
            this.localNormal = Vec2.zero();
            this.localPoint = Vec2.zero();
            this.points = [new ManifoldPoint, new ManifoldPoint];
            this.pointCount = 0
        }
        Manifold.prototype.init = function() {
            this.type = -1;
            this.localNormal.setZero();
            this.localPoint.setZero();
            this.points[0].init();
            this.points[1].init();
            this.pointCount = 0;
            return this
        };

        function ManifoldPoint() {
            this.localPoint = Vec2.zero();
            this.normalImpulse = 0;
            this.tangentImpulse = 0;
            this.id = new ContactID
        }
        ManifoldPoint.prototype.init = function() {
            this.localPoint.setZero();
            this.normalImpulse = 0;
            this.tangentImpulse = 0;
            this.id.init()
        };

        function ContactID() {
            this.cf = new ContactFeature
        }
        ContactID.prototype.init = function() {
            this.cf.init()
        };
        Object.defineProperty(ContactID.prototype, "key", {
            get: function() {
                return this.cf.indexA + this.cf.indexB * 4 + this.cf.typeA * 16 + this.cf.typeB * 64
            },
            enumerable: true,
            configurable: true
        });
        ContactID.prototype.set = function(o) {
            this.cf.set(o.cf)
        };

        function ContactFeature() {
            this.indexA;
            this.indexB;
            this.typeA;
            this.typeB
        }
        ContactFeature.prototype.init = function() {
            this.indexA = 0;
            this.indexB = 0;
            this.typeA = 0;
            this.typeB = 0
        };
        ContactFeature.prototype.set = function(o) {
            this.indexA = o.indexA;
            this.indexB = o.indexB;
            this.typeA = o.typeA;
            this.typeB = o.typeB
        };

        function WorldManifold() {
            this.normal;
            this.points = [];
            this.separations = []
        }
        Manifold.prototype.getWorldManifold = function(wm, xfA, radiusA, xfB, radiusB) {
            if (this.pointCount == 0) {
                return
            }
            wm = wm || new WorldManifold;
            var normal = wm.normal;
            var points = wm.points;
            var separations = wm.separations;
            switch (this.type) {
                case Manifold.e_circles:
                    normal = Vec2.neo(1, 0);
                    var pointA = Transform.mulVec2(xfA, this.localPoint);
                    var pointB = Transform.mulVec2(xfB, this.points[0].localPoint);
                    var dist = Vec2.sub(pointB, pointA);
                    if (Vec2.lengthSquared(dist) > Math.EPSILON * Math.EPSILON) {
                        normal.set(dist);
                        normal.normalize()
                    }
                    points[0] = Vec2.mid(pointA, pointB);
                    separations[0] = -radiusB - radiusA;
                    points.length = 1;
                    separations.length = 1;
                    break;
                case Manifold.e_faceA:
                    normal = Rot.mulVec2(xfA.q, this.localNormal);
                    var planePoint = Transform.mulVec2(xfA, this.localPoint);
                    for (var i = 0; i < this.pointCount; ++i) {
                        var clipPoint = Transform.mulVec2(xfB, this.points[i].localPoint);
                        var cA = Vec2.clone(clipPoint).addMul(radiusA - Vec2.dot(Vec2.sub(clipPoint, planePoint), normal), normal);
                        var cB = Vec2.clone(clipPoint).subMul(radiusB, normal);
                        points[i] = Vec2.mid(cA, cB);
                        separations[i] = Vec2.dot(Vec2.sub(cB, cA), normal)
                    }
                    points.length = this.pointCount;
                    separations.length = this.pointCount;
                    break;
                case Manifold.e_faceB:
                    normal = Rot.mulVec2(xfB.q, this.localNormal);
                    var planePoint = Transform.mulVec2(xfB, this.localPoint);
                    for (var i = 0; i < this.pointCount; ++i) {
                        var clipPoint = Transform.mulVec2(xfA, this.points[i].localPoint);
                        var cB = Vec2.combine(1, clipPoint, radiusB - Vec2.dot(Vec2.sub(clipPoint, planePoint), normal), normal);
                        var cA = Vec2.combine(1, clipPoint, -radiusA, normal);
                        points[i] = Vec2.mid(cA, cB);
                        separations[i] = Vec2.dot(Vec2.sub(cA, cB), normal)
                    }
                    points.length = this.pointCount;
                    separations.length = this.pointCount;
                    normal.mul(-1);
                    break
            }
            wm.normal = normal;
            wm.points = points;
            wm.separations = separations;
            return wm
        };
        var PointState = {
            nullState: 0,
            addState: 1,
            persistState: 2,
            removeState: 3
        };

        function getPointStates(state1, state2, manifold1, manifold2) {
            for (var i = 0; i < manifold1.pointCount; ++i) {
                var id = manifold1.points[i].id;
                state1[i] = PointState.removeState;
                for (var j = 0; j < manifold2.pointCount; ++j) {
                    if (manifold2.points[j].id.key == id.key) {
                        state1[i] = PointState.persistState;
                        break
                    }
                }
            }
            for (var i = 0; i < manifold2.pointCount; ++i) {
                var id = manifold2.points[i].id;
                state2[i] = PointState.addState;
                for (var j = 0; j < manifold1.pointCount; ++j) {
                    if (manifold1.points[j].id.key == id.key) {
                        state2[i] = PointState.persistState;
                        break
                    }
                }
            }
        }

        function ClipVertex() {
            this.v = Vec2.zero();
            this.id = new ContactID
        }
        ClipVertex.prototype.set = function(o) {
            this.v.set(o.v);
            this.id.set(o.id)
        };
        ClipVertex.prototype.init = function() {
            this.v.setZero();
            this.id.init()
        };

        function clipSegmentToLine(vOut, vIn, normal, offset, vertexIndexA) {
            var numOut = 0;
            var distance0 = Vec2.dot(normal, vIn[0].v) - offset;
            var distance1 = Vec2.dot(normal, vIn[1].v) - offset;
            if (distance0 <= 0) vOut[numOut++].set(vIn[0]);
            if (distance1 <= 0) vOut[numOut++].set(vIn[1]);
            if (distance0 * distance1 < 0) {
                var interp = distance0 / (distance0 - distance1);
                vOut[numOut].v.setCombine(1 - interp, vIn[0].v, interp, vIn[1].v);
                vOut[numOut].id.cf.indexA = vertexIndexA;
                vOut[numOut].id.cf.indexB = vIn[0].id.cf.indexB;
                vOut[numOut].id.cf.typeA = Manifold.e_vertex;
                vOut[numOut].id.cf.typeB = Manifold.e_face;
                ++numOut
            }
            return numOut
        }
    }, {
        "./common/Math": 20,
        "./common/Rot": 22,
        "./common/Transform": 24,
        "./common/Vec2": 25,
        "./util/common": 53
    }],
    9: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var Settings = exports;
        Settings.maxManifoldPoints = 2;
        Settings.maxPolygonVertices = 12;
        Settings.aabbExtension = .1;
        Settings.aabbMultiplier = 2;
        Settings.linearSlop = .005;
        Settings.linearSlopSquared = Settings.linearSlop * Settings.linearSlop;
        Settings.angularSlop = 2 / 180 * Math.PI;
        Settings.polygonRadius = 2 * Settings.linearSlop;
        Settings.maxSubSteps = 8;
        Settings.maxTOIContacts = 32;
        Settings.maxTOIIterations = 20;
        Settings.maxDistnceIterations = 20;
        Settings.velocityThreshold = 1;
        Settings.maxLinearCorrection = .2;
        Settings.maxAngularCorrection = 8 / 180 * Math.PI;
        Settings.maxTranslation = 2;
        Settings.maxTranslationSquared = Settings.maxTranslation * Settings.maxTranslation;
        Settings.maxRotation = .5 * Math.PI;
        Settings.maxRotationSquared = Settings.maxRotation * Settings.maxRotation;
        Settings.baumgarte = .2;
        Settings.toiBaugarte = .75;
        Settings.timeToSleep = .5;
        Settings.linearSleepTolerance = .01;
        Settings.linearSleepToleranceSqr = Math.pow(Settings.linearSleepTolerance, 2);
        Settings.angularSleepTolerance = 2 / 180 * Math.PI;
        Settings.angularSleepToleranceSqr = Math.pow(Settings.angularSleepTolerance, 2)
    }, {}],
    10: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Shape;
        var Math = require("./common/Math");

        function Shape() {
            this.m_type;
            this.m_radius
        }
        Shape.isValid = function(shape) {
            return !!shape
        };
        Shape.prototype.getRadius = function() {
            return this.m_radius
        };
        Shape.prototype.getType = function() {
            return this.m_type
        };
        Shape.prototype._clone = function() {};
        Shape.prototype.getChildCount = function() {};
        Shape.prototype.testPoint = function(xf, p) {};
        Shape.prototype.rayCast = function(output, input, transform, childIndex) {};
        Shape.prototype.computeAABB = function(aabb, xf, childIndex) {};
        Shape.prototype.computeMass = function(massData, density) {};
        Shape.prototype.computeDistanceProxy = function(proxy) {}
    }, {
        "./common/Math": 20
    }],
    11: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Solver;
        module.exports.TimeStep = TimeStep;
        var Settings = require("./Settings");
        var common = require("./util/common");
        var Vec2 = require("./common/Vec2");
        var Math = require("./common/Math");
        var Body = require("./Body");
        var Contact = require("./Contact");
        var Joint = require("./Joint");
        var TimeOfImpact = require("./collision/TimeOfImpact");
        var TOIInput = TimeOfImpact.Input;
        var TOIOutput = TimeOfImpact.Output;
        var Distance = require("./collision/Distance");
        var DistanceInput = Distance.Input;
        var DistanceOutput = Distance.Output;
        var DistanceProxy = Distance.Proxy;
        var SimplexCache = Distance.Cache;

        function TimeStep(dt) {
            this.dt = 0;
            this.inv_dt = 0;
            this.velocityIterations = 0;
            this.positionIterations = 0;
            this.warmStarting = false;
            this.blockSolve = true;
            this.inv_dt0 = 0;
            this.dtRatio = 1
        }
        TimeStep.prototype.reset = function(dt) {
            if (this.dt > 0) {
                this.inv_dt0 = this.inv_dt
            }
            this.dt = dt;
            this.inv_dt = dt == 0 ? 0 : 1 / dt;
            this.dtRatio = dt * this.inv_dt0
        };

        function Solver(world) {
            this.m_world = world;
            this.m_stack = [];
            this.m_bodies = [];
            this.m_contacts = [];
            this.m_joints = []
        }
        Solver.prototype.clear = function() {
            this.m_stack.length = 0;
            this.m_bodies.length = 0;
            this.m_contacts.length = 0;
            this.m_joints.length = 0
        };
        Solver.prototype.addBody = function(body) {
            _ASSERT && common.assert(body instanceof Body, "Not a Body!", body);
            this.m_bodies.push(body)
        };
        Solver.prototype.addContact = function(contact) {
            _ASSERT && common.assert(contact instanceof Contact, "Not a Contact!", contact);
            this.m_contacts.push(contact)
        };
        Solver.prototype.addJoint = function(joint) {
            _ASSERT && common.assert(joint instanceof Joint, "Not a Joint!", joint);
            this.m_joints.push(joint)
        };
        Solver.prototype.solveWorld = function(step) {
            var world = this.m_world;
            for (var b = world.m_bodyList; b; b = b.m_next) {
                b.m_islandFlag = false
            }
            for (var c = world.m_contactList; c; c = c.m_next) {
                c.m_islandFlag = false
            }
            for (var j = world.m_jointList; j; j = j.m_next) {
                j.m_islandFlag = false
            }
            var stack = this.m_stack;
            var loop = -1;
            for (var seed = world.m_bodyList; seed; seed = seed.m_next) {
                loop++;
                if (seed.m_islandFlag) {
                    continue
                }
                if (seed.isAwake() == false || seed.isActive() == false) {
                    continue
                }
                if (seed.isStatic()) {
                    continue
                }
                this.clear();
                stack.push(seed);
                seed.m_islandFlag = true;
                while (stack.length > 0) {
                    var b = stack.pop();
                    _ASSERT && common.assert(b.isActive() == true);
                    this.addBody(b);
                    b.setAwake(true);
                    if (b.isStatic()) {
                        continue
                    }
                    for (var ce = b.m_contactList; ce; ce = ce.next) {
                        var contact = ce.contact;
                        if (contact.m_islandFlag) {
                            continue
                        }
                        if (contact.isEnabled() == false || contact.isTouching() == false) {
                            continue
                        }
                        var sensorA = contact.m_fixtureA.m_isSensor;
                        var sensorB = contact.m_fixtureB.m_isSensor;
                        if (sensorA || sensorB) {
                            continue
                        }
                        this.addContact(contact);
                        contact.m_islandFlag = true;
                        var other = ce.other;
                        if (other.m_islandFlag) {
                            continue
                        }
                        stack.push(other);
                        other.m_islandFlag = true
                    }
                    for (var je = b.m_jointList; je; je = je.next) {
                        if (je.joint.m_islandFlag == true) {
                            continue
                        }
                        var other = je.other;
                        if (other.isActive() == false) {
                            continue
                        }
                        this.addJoint(je.joint);
                        je.joint.m_islandFlag = true;
                        if (other.m_islandFlag) {
                            continue
                        }
                        stack.push(other);
                        other.m_islandFlag = true
                    }
                }
                this.solveIsland(step);
                for (var i = 0; i < this.m_bodies.length; ++i) {
                    var b = this.m_bodies[i];
                    if (b.isStatic()) {
                        b.m_islandFlag = false
                    }
                }
            }
        };
        Solver.prototype.solveIsland = function(step) {
            var world = this.m_world;
            var gravity = world.m_gravity;
            var allowSleep = world.m_allowSleep;
            var h = step.dt;
            for (var i = 0; i < this.m_bodies.length; ++i) {
                var body = this.m_bodies[i];
                var c = Vec2.clone(body.m_sweep.c);
                var a = body.m_sweep.a;
                var v = Vec2.clone(body.m_linearVelocity);
                var w = body.m_angularVelocity;
                body.m_sweep.c0.set(body.m_sweep.c);
                body.m_sweep.a0 = body.m_sweep.a;
                if (body.isDynamic()) {
                    v.addMul(h * body.m_gravityScale, gravity);
                    v.addMul(h * body.m_invMass, body.m_force);
                    w += h * body.m_invI * body.m_torque;
                    v.mul(1 / (1 + h * body.m_linearDamping));
                    w *= 1 / (1 + h * body.m_angularDamping)
                }
                body.c_position.c = c;
                body.c_position.a = a;
                body.c_velocity.v = v;
                body.c_velocity.w = w
            }
            for (var i = 0; i < this.m_contacts.length; ++i) {
                var contact = this.m_contacts[i];
                contact.initConstraint(step)
            }
            _DEBUG && this.printBodies("M: ");
            for (var i = 0; i < this.m_contacts.length; ++i) {
                var contact = this.m_contacts[i];
                contact.initVelocityConstraint(step)
            }
            _DEBUG && this.printBodies("R: ");
            if (step.warmStarting) {
                for (var i = 0; i < this.m_contacts.length; ++i) {
                    var contact = this.m_contacts[i];
                    contact.warmStartConstraint(step)
                }
            }
            _DEBUG && this.printBodies("Q: ");
            for (var i = 0; i < this.m_joints.length; ++i) {
                var joint = this.m_joints[i];
                joint.initVelocityConstraints(step)
            }
            _DEBUG && this.printBodies("E: ");
            for (var i = 0; i < step.velocityIterations; ++i) {
                for (var j = 0; j < this.m_joints.length; ++j) {
                    var joint = this.m_joints[j];
                    joint.solveVelocityConstraints(step)
                }
                for (var j = 0; j < this.m_contacts.length; ++j) {
                    var contact = this.m_contacts[j];
                    contact.solveVelocityConstraint(step)
                }
            }
            _DEBUG && this.printBodies("D: ");
            for (var i = 0; i < this.m_contacts.length; ++i) {
                var contact = this.m_contacts[i];
                contact.storeConstraintImpulses(step)
            }
            _DEBUG && this.printBodies("C: ");
            for (var i = 0; i < this.m_bodies.length; ++i) {
                var body = this.m_bodies[i];
                var c = Vec2.clone(body.c_position.c);
                var a = body.c_position.a;
                var v = Vec2.clone(body.c_velocity.v);
                var w = body.c_velocity.w;
                var translation = Vec2.mul(h, v);
                if (Vec2.lengthSquared(translation) > Settings.maxTranslationSquared) {
                    var ratio = Settings.maxTranslation / translation.length();
                    v.mul(ratio)
                }
                var rotation = h * w;
                if (rotation * rotation > Settings.maxRotationSquared) {
                    var ratio = Settings.maxRotation / Math.abs(rotation);
                    w *= ratio
                }
                c.addMul(h, v);
                a += h * w;
                body.c_position.c.set(c);
                body.c_position.a = a;
                body.c_velocity.v.set(v);
                body.c_velocity.w = w
            }
            _DEBUG && this.printBodies("B: ");
            var positionSolved = false;
            for (var i = 0; i < step.positionIterations; ++i) {
                var minSeparation = 0;
                for (var j = 0; j < this.m_contacts.length; ++j) {
                    var contact = this.m_contacts[j];
                    var separation = contact.solvePositionConstraint(step);
                    minSeparation = Math.min(minSeparation, separation)
                }
                var contactsOkay = minSeparation >= -3 * Settings.linearSlop;
                var jointsOkay = true;
                for (var j = 0; j < this.m_joints.length; ++j) {
                    var joint = this.m_joints[j];
                    var jointOkay = joint.solvePositionConstraints(step);
                    jointsOkay = jointsOkay && jointOkay
                }
                if (contactsOkay && jointsOkay) {
                    positionSolved = true;
                    break
                }
            }
            _DEBUG && this.printBodies("L: ");
            for (var i = 0; i < this.m_bodies.length; ++i) {
                var body = this.m_bodies[i];
                body.m_sweep.c.set(body.c_position.c);
                body.m_sweep.a = body.c_position.a;
                body.m_linearVelocity.set(body.c_velocity.v);
                body.m_angularVelocity = body.c_velocity.w;
                body.synchronizeTransform()
            }
            this.postSolveIsland();
            if (allowSleep) {
                var minSleepTime = Infinity;
                var linTolSqr = Settings.linearSleepToleranceSqr;
                var angTolSqr = Settings.angularSleepToleranceSqr;
                for (var i = 0; i < this.m_bodies.length; ++i) {
                    var body = this.m_bodies[i];
                    if (body.isStatic()) {
                        continue
                    }
                    if (body.m_autoSleepFlag == false || body.m_angularVelocity * body.m_angularVelocity > angTolSqr || Vec2.lengthSquared(body.m_linearVelocity) > linTolSqr) {
                        body.m_sleepTime = 0;
                        minSleepTime = 0
                    } else {
                        body.m_sleepTime += h;
                        minSleepTime = Math.min(minSleepTime, body.m_sleepTime)
                    }
                }
                if (minSleepTime >= Settings.timeToSleep && positionSolved) {
                    for (var i = 0; i < this.m_bodies.length; ++i) {
                        var body = this.m_bodies[i];
                        body.setAwake(false)
                    }
                }
            }
        };
        Solver.prototype.printBodies = function(tag) {
            for (var i = 0; i < this.m_bodies.length; ++i) {
                var b = this.m_bodies[i];
                common.debug(tag, b.c_position.a, b.c_position.c.x, b.c_position.c.y, b.c_velocity.w, b.c_velocity.v.x, b.c_velocity.v.y)
            }
        };
        var s_subStep = new TimeStep;
        Solver.prototype.solveWorldTOI = function(step) {
            var world = this.m_world;
            if (world.m_stepComplete) {
                for (var b = world.m_bodyList; b; b = b.m_next) {
                    b.m_islandFlag = false;
                    b.m_sweep.alpha0 = 0
                }
                for (var c = world.m_contactList; c; c = c.m_next) {
                    c.m_toiFlag = false;
                    c.m_islandFlag = false;
                    c.m_toiCount = 0;
                    c.m_toi = 1
                }
            }
            for (;;) {
                var minContact = null;
                var minAlpha = 1;
                for (var c = world.m_contactList; c; c = c.m_next) {
                    if (c.isEnabled() == false) {
                        continue
                    }
                    if (c.m_toiCount > Settings.maxSubSteps) {
                        continue
                    }
                    var alpha = 1;
                    if (c.m_toiFlag) {
                        alpha = c.m_toi
                    } else {
                        var fA = c.getFixtureA();
                        var fB = c.getFixtureB();
                        if (fA.isSensor() || fB.isSensor()) {
                            continue
                        }
                        var bA = fA.getBody();
                        var bB = fB.getBody();
                        _ASSERT && common.assert(bA.isDynamic() || bB.isDynamic());
                        var activeA = bA.isAwake() && !bA.isStatic();
                        var activeB = bB.isAwake() && !bB.isStatic();
                        if (activeA == false && activeB == false) {
                            continue
                        }
                        var collideA = bA.isBullet() || !bA.isDynamic();
                        var collideB = bB.isBullet() || !bB.isDynamic();
                        if (collideA == false && collideB == false) {
                            continue
                        }
                        var alpha0 = bA.m_sweep.alpha0;
                        if (bA.m_sweep.alpha0 < bB.m_sweep.alpha0) {
                            alpha0 = bB.m_sweep.alpha0;
                            bA.m_sweep.advance(alpha0)
                        } else if (bB.m_sweep.alpha0 < bA.m_sweep.alpha0) {
                            alpha0 = bA.m_sweep.alpha0;
                            bB.m_sweep.advance(alpha0)
                        }
                        _ASSERT && common.assert(alpha0 < 1);
                        var indexA = c.getChildIndexA();
                        var indexB = c.getChildIndexB();
                        var sweepA = bA.m_sweep;
                        var sweepB = bB.m_sweep;
                        var input = new TOIInput;
                        input.proxyA.set(fA.getShape(), indexA);
                        input.proxyB.set(fB.getShape(), indexB);
                        input.sweepA.set(bA.m_sweep);
                        input.sweepB.set(bB.m_sweep);
                        input.tMax = 1;
                        var output = new TOIOutput;
                        TimeOfImpact(output, input);
                        var beta = output.t;
                        if (output.state == TOIOutput.e_touching) {
                            alpha = Math.min(alpha0 + (1 - alpha0) * beta, 1)
                        } else {
                            alpha = 1
                        }
                        c.m_toi = alpha;
                        c.m_toiFlag = true
                    }
                    if (alpha < minAlpha) {
                        minContact = c;
                        minAlpha = alpha
                    }
                }
                if (minContact == null || 1 - 10 * Math.EPSILON < minAlpha) {
                    world.m_stepComplete = true;
                    break
                }
                var fA = minContact.getFixtureA();
                var fB = minContact.getFixtureB();
                var bA = fA.getBody();
                var bB = fB.getBody();
                var backup1 = bA.m_sweep.clone();
                var backup2 = bB.m_sweep.clone();
                bA.advance(minAlpha);
                bB.advance(minAlpha);
                minContact.update(world);
                minContact.m_toiFlag = false;
                ++minContact.m_toiCount;
                if (minContact.isEnabled() == false || minContact.isTouching() == false) {
                    minContact.setEnabled(false);
                    bA.m_sweep.set(backup1);
                    bB.m_sweep.set(backup2);
                    bA.synchronizeTransform();
                    bB.synchronizeTransform();
                    continue
                }
                bA.setAwake(true);
                bB.setAwake(true);
                this.clear();
                this.addBody(bA);
                this.addBody(bB);
                this.addContact(minContact);
                bA.m_islandFlag = true;
                bB.m_islandFlag = true;
                minContact.m_islandFlag = true;
                var bodies = [bA, bB];
                for (var i = 0; i < bodies.length; ++i) {
                    var body = bodies[i];
                    if (body.isDynamic()) {
                        for (var ce = body.m_contactList; ce; ce = ce.next) {
                            var contact = ce.contact;
                            if (contact.m_islandFlag) {
                                continue
                            }
                            var other = ce.other;
                            if (other.isDynamic() && !body.isBullet() && !other.isBullet()) {
                                continue
                            }
                            var sensorA = contact.m_fixtureA.m_isSensor;
                            var sensorB = contact.m_fixtureB.m_isSensor;
                            if (sensorA || sensorB) {
                                continue
                            }
                            var backup = other.m_sweep.clone();
                            if (other.m_islandFlag == false) {
                                other.advance(minAlpha)
                            }
                            contact.update(world);
                            if (contact.isEnabled() == false || contact.isTouching() == false) {
                                other.m_sweep.set(backup);
                                other.synchronizeTransform();
                                continue
                            }
                            contact.m_islandFlag = true;
                            this.addContact(contact);
                            if (other.m_islandFlag) {
                                continue
                            }
                            other.m_islandFlag = true;
                            if (!other.isStatic()) {
                                other.setAwake(true)
                            }
                            this.addBody(other)
                        }
                    }
                }
                s_subStep.reset((1 - minAlpha) * step.dt);
                s_subStep.dtRatio = 1;
                s_subStep.positionIterations = 20;
                s_subStep.velocityIterations = step.velocityIterations;
                s_subStep.warmStarting = false;
                this.solveIslandTOI(s_subStep, bA, bB);
                for (var i = 0; i < this.m_bodies.length; ++i) {
                    var body = this.m_bodies[i];
                    body.m_islandFlag = false;
                    if (!body.isDynamic()) {
                        continue
                    }
                    body.synchronizeFixtures();
                    for (var ce = body.m_contactList; ce; ce = ce.next) {
                        ce.contact.m_toiFlag = false;
                        ce.contact.m_islandFlag = false
                    }
                }
                world.findNewContacts();
                if (world.m_subStepping) {
                    world.m_stepComplete = false;
                    break
                }
            }
            if (_DEBUG)
                for (var b = world.m_bodyList; b; b = b.m_next) {
                    var c = b.m_sweep.c;
                    var a = b.m_sweep.a;
                    var v = b.m_linearVelocity;
                    var w = b.m_angularVelocity
                }
        };
        Solver.prototype.solveIslandTOI = function(subStep, toiA, toiB) {
            var world = this.m_world;
            for (var i = 0; i < this.m_bodies.length; ++i) {
                var body = this.m_bodies[i];
                body.c_position.c.set(body.m_sweep.c);
                body.c_position.a = body.m_sweep.a;
                body.c_velocity.v.set(body.m_linearVelocity);
                body.c_velocity.w = body.m_angularVelocity
            }
            for (var i = 0; i < this.m_contacts.length; ++i) {
                var contact = this.m_contacts[i];
                contact.initConstraint(subStep)
            }
            for (var i = 0; i < subStep.positionIterations; ++i) {
                var minSeparation = 0;
                for (var j = 0; j < this.m_contacts.length; ++j) {
                    var contact = this.m_contacts[j];
                    var separation = contact.solvePositionConstraintTOI(subStep, toiA, toiB);
                    minSeparation = Math.min(minSeparation, separation)
                }
                var contactsOkay = minSeparation >= -1.5 * Settings.linearSlop;
                if (contactsOkay) {
                    break
                }
            }
            if (false) {
                for (var i = 0; i < this.m_contacts.length; ++i) {
                    var c = this.m_contacts[i];
                    var fA = c.getFixtureA();
                    var fB = c.getFixtureB();
                    var bA = fA.getBody();
                    var bB = fB.getBody();
                    var indexA = c.getChildIndexA();
                    var indexB = c.getChildIndexB();
                    var input = new DistanceInput;
                    input.proxyA.set(fA.getShape(), indexA);
                    input.proxyB.set(fB.getShape(), indexB);
                    input.transformA = bA.getTransform();
                    input.transformB = bB.getTransform();
                    input.useRadii = false;
                    var output = new DistanceOutput;
                    var cache = new SimplexCache;
                    Distance(output, cache, input);
                    if (output.distance == 0 || cache.count == 3) {
                        cache.count += 0
                    }
                }
            }
            toiA.m_sweep.c0.set(toiA.c_position.c);
            toiA.m_sweep.a0 = toiA.c_position.a;
            toiB.m_sweep.c0.set(toiB.c_position.c);
            toiB.m_sweep.a0 = toiB.c_position.a;
            for (var i = 0; i < this.m_contacts.length; ++i) {
                var contact = this.m_contacts[i];
                contact.initVelocityConstraint(subStep)
            }
            for (var i = 0; i < subStep.velocityIterations; ++i) {
                for (var j = 0; j < this.m_contacts.length; ++j) {
                    var contact = this.m_contacts[j];
                    contact.solveVelocityConstraint(subStep)
                }
            }
            var h = subStep.dt;
            for (var i = 0; i < this.m_bodies.length; ++i) {
                var body = this.m_bodies[i];
                var c = Vec2.clone(body.c_position.c);
                var a = body.c_position.a;
                var v = Vec2.clone(body.c_velocity.v);
                var w = body.c_velocity.w;
                var translation = Vec2.mul(h, v);
                if (Vec2.dot(translation, translation) > Settings.maxTranslationSquared) {
                    var ratio = Settings.maxTranslation / translation.length();
                    v.mul(ratio)
                }
                var rotation = h * w;
                if (rotation * rotation > Settings.maxRotationSquared) {
                    var ratio = Settings.maxRotation / Math.abs(rotation);
                    w *= ratio
                }
                c.addMul(h, v);
                a += h * w;
                body.c_position.c = c;
                body.c_position.a = a;
                body.c_velocity.v = v;
                body.c_velocity.w = w;
                body.m_sweep.c = c;
                body.m_sweep.a = a;
                body.m_linearVelocity = v;
                body.m_angularVelocity = w;
                body.synchronizeTransform()
            }
            this.postSolveIsland()
        };

        function ContactImpulse() {
            this.normalImpulses = [];
            this.tangentImpulses = []
        }
        Solver.prototype.postSolveIsland = function() {
            var impulse = new ContactImpulse;
            for (var c = 0; c < this.m_contacts.length; ++c) {
                var contact = this.m_contacts[c];
                for (var p = 0; p < contact.v_points.length; ++p) {
                    impulse.normalImpulses.push(contact.v_points[p].normalImpulse);
                    impulse.tangentImpulses.push(contact.v_points[p].tangentImpulse)
                }
                this.m_world.postSolve(contact, impulse)
            }
        }
    }, {
        "./Body": 4,
        "./Contact": 5,
        "./Joint": 7,
        "./Settings": 9,
        "./collision/Distance": 15,
        "./collision/TimeOfImpact": 17,
        "./common/Math": 20,
        "./common/Vec2": 25,
        "./util/common": 53
    }],
    12: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = World;
        var options = require("./util/options");
        var common = require("./util/common");
        var Vec2 = require("./common/Vec2");
        var BroadPhase = require("./collision/BroadPhase");
        var Solver = require("./Solver");
        var Body = require("./Body");
        var Contact = require("./Contact");
        var WorldDef = {
            gravity: Vec2.zero(),
            allowSleep: true,
            warmStarting: true,
            continuousPhysics: true,
            subStepping: false,
            blockSolve: true,
            velocityIterations: 8,
            positionIterations: 3
        };

        function World(def) {
            if (!(this instanceof World)) {
                return new World(def)
            }
            if (def && Vec2.isValid(def)) {
                def = {
                    gravity: def
                }
            }
            def = options(def, WorldDef);
            this.m_solver = new Solver(this);
            this.m_broadPhase = new BroadPhase;
            this.m_contactList = null;
            this.m_contactCount = 0;
            this.m_bodyList = null;
            this.m_bodyCount = 0;
            this.m_jointList = null;
            this.m_jointCount = 0;
            this.m_stepComplete = true;
            this.m_allowSleep = def.allowSleep;
            this.m_gravity = Vec2.clone(def.gravity);
            this.m_clearForces = true;
            this.m_newFixture = false;
            this.m_locked = false;
            this.m_warmStarting = def.warmStarting;
            this.m_continuousPhysics = def.continuousPhysics;
            this.m_subStepping = def.subStepping;
            this.m_blockSolve = def.blockSolve;
            this.m_velocityIterations = def.velocityIterations;
            this.m_positionIterations = def.positionIterations;
            this.m_t = 0;
            this.m_stepCount = 0;
            this.addPair = this.createContact.bind(this)
        }
        World.prototype.getBodyList = function() {
            return this.m_bodyList
        };
        World.prototype.getJointList = function() {
            return this.m_jointList
        };
        World.prototype.getContactList = function() {
            return this.m_contactList
        };
        World.prototype.getBodyCount = function() {
            return this.m_bodyCount
        };
        World.prototype.getJointCount = function() {
            return this.m_jointCount
        };
        World.prototype.getContactCount = function() {
            return this.m_contactCount
        };
        World.prototype.setGravity = function(gravity) {
            this.m_gravity = gravity
        };
        World.prototype.getGravity = function() {
            return this.m_gravity
        };
        World.prototype.isLocked = function() {
            return this.m_locked
        };
        World.prototype.setAllowSleeping = function(flag) {
            if (flag == this.m_allowSleep) {
                return
            }
            this.m_allowSleep = flag;
            if (this.m_allowSleep == false) {
                for (var b = this.m_bodyList; b; b = b.m_next) {
                    b.setAwake(true)
                }
            }
        };
        World.prototype.getAllowSleeping = function() {
            return this.m_allowSleep
        };
        World.prototype.setWarmStarting = function(flag) {
            this.m_warmStarting = flag
        };
        World.prototype.getWarmStarting = function() {
            return this.m_warmStarting
        };
        World.prototype.setContinuousPhysics = function(flag) {
            this.m_continuousPhysics = flag
        };
        World.prototype.getContinuousPhysics = function() {
            return this.m_continuousPhysics
        };
        World.prototype.setSubStepping = function(flag) {
            this.m_subStepping = flag
        };
        World.prototype.getSubStepping = function() {
            return this.m_subStepping
        };
        World.prototype.setAutoClearForces = function(flag) {
            this.m_clearForces = flag
        };
        World.prototype.getAutoClearForces = function() {
            return this.m_clearForces
        };
        World.prototype.clearForces = function() {
            for (var body = this.m_bodyList; body; body = body.getNext()) {
                body.m_force.setZero();
                body.m_torque = 0
            }
        };
        World.prototype.queryAABB = function(aabb, queryCallback) {
            _ASSERT && common.assert(typeof queryCallback === "function");
            var broadPhase = this.m_broadPhase;
            this.m_broadPhase.query(aabb, function(proxyId) {
                var proxy = broadPhase.getUserData(proxyId);
                return queryCallback(proxy.fixture)
            })
        };
        World.prototype.rayCast = function(point1, point2, reportFixtureCallback) {
            _ASSERT && common.assert(typeof reportFixtureCallback === "function");
            var broadPhase = this.m_broadPhase;
            this.m_broadPhase.rayCast({
                maxFraction: 1,
                p1: point1,
                p2: point2
            }, function(input, proxyId) {
                var proxy = broadPhase.getUserData(proxyId);
                var fixture = proxy.fixture;
                var index = proxy.childIndex;
                var output = {};
                var hit = fixture.rayCast(output, input, index);
                if (hit) {
                    var fraction = output.fraction;
                    var point = Vec2.add(Vec2.mul(1 - fraction, input.p1), Vec2.mul(fraction, input.p2));
                    return reportFixtureCallback(fixture, point, output.normal, fraction)
                }
                return input.maxFraction
            })
        };
        World.prototype.getProxyCount = function() {
            return this.m_broadPhase.getProxyCount()
        };
        World.prototype.getTreeHeight = function() {
            return this.m_broadPhase.getTreeHeight()
        };
        World.prototype.getTreeBalance = function() {
            return this.m_broadPhase.getTreeBalance()
        };
        World.prototype.getTreeQuality = function() {
            return this.m_broadPhase.getTreeQuality()
        };
        World.prototype.shiftOrigin = function(newOrigin) {
            _ASSERT && common.assert(this.m_locked == false);
            if (this.m_locked) {
                return
            }
            for (var b = this.m_bodyList; b; b = b.m_next) {
                b.m_xf.p.sub(newOrigin);
                b.m_sweep.c0.sub(newOrigin);
                b.m_sweep.c.sub(newOrigin)
            }
            for (var j = this.m_jointList; j; j = j.m_next) {
                j.shiftOrigin(newOrigin)
            }
            this.m_broadPhase.shiftOrigin(newOrigin)
        };
        World.prototype.createBody = function(def, angle) {
            _ASSERT && common.assert(this.isLocked() == false);
            if (this.isLocked()) {
                return null
            }
            if (def && Vec2.isValid(def)) {
                def = {
                    position: def,
                    angle: angle
                }
            }
            var body = new Body(this, def);
            body.m_prev = null;
            body.m_next = this.m_bodyList;
            if (this.m_bodyList) {
                this.m_bodyList.m_prev = body
            }
            this.m_bodyList = body;
            ++this.m_bodyCount;
            return body
        };
        World.prototype.createDynamicBody = function(def, angle) {
            if (!def) {
                def = {}
            } else if (Vec2.isValid(def)) {
                def = {
                    position: def,
                    angle: angle
                }
            }
            def.type = "dynamic";
            return this.createBody(def)
        };
        World.prototype.createKinematicBody = function(def, angle) {
            if (!def) {
                def = {}
            } else if (Vec2.isValid(def)) {
                def = {
                    position: def,
                    angle: angle
                }
            }
            def.type = "kinematic";
            return this.createBody(def)
        };
        World.prototype.destroyBody = function(b) {
            _ASSERT && common.assert(this.m_bodyCount > 0);
            _ASSERT && common.assert(this.isLocked() == false);
            if (this.isLocked()) {
                return
            }
            if (b.m_destroyed) {
                return false
            }
            var je = b.m_jointList;
            while (je) {
                var je0 = je;
                je = je.next;
                this.publish("remove-joint", je0.joint);
                this.destroyJoint(je0.joint);
                b.m_jointList = je
            }
            b.m_jointList = null;
            var ce = b.m_contactList;
            while (ce) {
                var ce0 = ce;
                ce = ce.next;
                this.destroyContact(ce0.contact);
                b.m_contactList = ce
            }
            b.m_contactList = null;
            var f = b.m_fixtureList;
            while (f) {
                var f0 = f;
                f = f.m_next;
                this.publish("remove-fixture", f0);
                f0.destroyProxies(this.m_broadPhase);
                b.m_fixtureList = f
            }
            b.m_fixtureList = null;
            if (b.m_prev) {
                b.m_prev.m_next = b.m_next
            }
            if (b.m_next) {
                b.m_next.m_prev = b.m_prev
            }
            if (b == this.m_bodyList) {
                this.m_bodyList = b.m_next
            }
            b.m_destroyed = true;
            --this.m_bodyCount;
            this.publish("remove-body", b);
            return true
        };
        World.prototype.createJoint = function(joint) {
            _ASSERT && common.assert(!!joint.m_bodyA);
            _ASSERT && common.assert(!!joint.m_bodyB);
            _ASSERT && common.assert(this.isLocked() == false);
            if (this.isLocked()) {
                return null
            }
            joint.m_prev = null;
            joint.m_next = this.m_jointList;
            if (this.m_jointList) {
                this.m_jointList.m_prev = joint
            }
            this.m_jointList = joint;
            ++this.m_jointCount;
            joint.m_edgeA.joint = joint;
            joint.m_edgeA.other = joint.m_bodyB;
            joint.m_edgeA.prev = null;
            joint.m_edgeA.next = joint.m_bodyA.m_jointList;
            if (joint.m_bodyA.m_jointList) joint.m_bodyA.m_jointList.prev = joint.m_edgeA;
            joint.m_bodyA.m_jointList = joint.m_edgeA;
            joint.m_edgeB.joint = joint;
            joint.m_edgeB.other = joint.m_bodyA;
            joint.m_edgeB.prev = null;
            joint.m_edgeB.next = joint.m_bodyB.m_jointList;
            if (joint.m_bodyB.m_jointList) joint.m_bodyB.m_jointList.prev = joint.m_edgeB;
            joint.m_bodyB.m_jointList = joint.m_edgeB;
            if (joint.m_collideConnected == false) {
                for (var edge = joint.m_bodyB.getContactList(); edge; edge = edge.next) {
                    if (edge.other == joint.m_bodyA) {
                        edge.contact.flagForFiltering()
                    }
                }
            }
            return joint
        };
        World.prototype.destroyJoint = function(joint) {
            _ASSERT && common.assert(this.isLocked() == false);
            if (this.isLocked()) {
                return
            }
            if (joint.m_prev) {
                joint.m_prev.m_next = joint.m_next
            }
            if (joint.m_next) {
                joint.m_next.m_prev = joint.m_prev
            }
            if (joint == this.m_jointList) {
                this.m_jointList = joint.m_next
            }
            var bodyA = joint.m_bodyA;
            var bodyB = joint.m_bodyB;
            bodyA.setAwake(true);
            bodyB.setAwake(true);
            if (joint.m_edgeA.prev) {
                joint.m_edgeA.prev.next = joint.m_edgeA.next
            }
            if (joint.m_edgeA.next) {
                joint.m_edgeA.next.prev = joint.m_edgeA.prev
            }
            if (joint.m_edgeA == bodyA.m_jointList) {
                bodyA.m_jointList = joint.m_edgeA.next
            }
            joint.m_edgeA.prev = null;
            joint.m_edgeA.next = null;
            if (joint.m_edgeB.prev) {
                joint.m_edgeB.prev.next = joint.m_edgeB.next
            }
            if (joint.m_edgeB.next) {
                joint.m_edgeB.next.prev = joint.m_edgeB.prev
            }
            if (joint.m_edgeB == bodyB.m_jointList) {
                bodyB.m_jointList = joint.m_edgeB.next
            }
            joint.m_edgeB.prev = null;
            joint.m_edgeB.next = null;
            _ASSERT && common.assert(this.m_jointCount > 0);
            --this.m_jointCount;
            if (joint.m_collideConnected == false) {
                var edge = bodyB.getContactList();
                while (edge) {
                    if (edge.other == bodyA) {
                        edge.contact.flagForFiltering()
                    }
                    edge = edge.next
                }
            }
            this.publish("remove-joint", joint)
        };
        var s_step = new Solver.TimeStep;
        World.prototype.step = function(timeStep, velocityIterations, positionIterations) {
            if ((velocityIterations | 0) !== velocityIterations) {
                velocityIterations = 0
            }
            velocityIterations = velocityIterations || this.m_velocityIterations;
            positionIterations = positionIterations || this.m_positionIterations;
            this.m_stepCount++;
            if (this.m_newFixture) {
                this.findNewContacts();
                this.m_newFixture = false
            }
            this.m_locked = true;
            s_step.reset(timeStep);
            s_step.velocityIterations = velocityIterations;
            s_step.positionIterations = positionIterations;
            s_step.warmStarting = this.m_warmStarting;
            s_step.blockSolve = this.m_blockSolve;
            this.updateContacts();
            if (this.m_stepComplete && timeStep > 0) {
                this.m_solver.solveWorld(s_step);
                for (var b = this.m_bodyList; b; b = b.getNext()) {
                    if (b.m_islandFlag == false) {
                        continue
                    }
                    if (b.isStatic()) {
                        continue
                    }
                    b.synchronizeFixtures()
                }
                this.findNewContacts()
            }
            if (this.m_continuousPhysics && timeStep > 0) {
                this.m_solver.solveWorldTOI(s_step)
            }
            if (this.m_clearForces) {
                this.clearForces()
            }
            this.m_locked = false
        };
        World.prototype.findNewContacts = function() {
            this.m_broadPhase.updatePairs(this.addPair)
        };
        World.prototype.createContact = function(proxyA, proxyB) {
            var fixtureA = proxyA.fixture;
            var fixtureB = proxyB.fixture;
            var indexA = proxyA.childIndex;
            var indexB = proxyB.childIndex;
            var bodyA = fixtureA.getBody();
            var bodyB = fixtureB.getBody();
            if (bodyA === bodyB) {
                return
            }
            var edge = bodyB.getContactList();
            while (edge) {
                if (edge.other === bodyA) {
                    var fA = edge.contact.getFixtureA();
                    var fB = edge.contact.getFixtureB();
                    var iA = edge.contact.getChildIndexA();
                    var iB = edge.contact.getChildIndexB();
                    if (fA === fixtureA && fB === fixtureB && iA === indexA && iB === indexB) {
                        return
                    }
                    if (fA === fixtureB && fB === fixtureA && iA === indexB && iB === indexA) {
                        return
                    }
                }
                edge = edge.next
            }
            if (bodyB.shouldCollide(bodyA) === false) {
                return
            }
            if (fixtureB.shouldCollide(fixtureA) === false) {
                return
            }
            var contact = Contact.create(fixtureA, indexA, fixtureB, indexB);
            if (contact == null) {
                return
            }
            contact.m_prev = null;
            if (this.m_contactList != null) {
                contact.m_next = this.m_contactList;
                this.m_contactList.m_prev = contact
            }
            this.m_contactList = contact;
            ++this.m_contactCount
        };
        World.prototype.updateContacts = function() {
            var c, next_c = this.m_contactList;
            while (c = next_c) {
                next_c = c.getNext();
                var fixtureA = c.getFixtureA();
                var fixtureB = c.getFixtureB();
                var indexA = c.getChildIndexA();
                var indexB = c.getChildIndexB();
                var bodyA = fixtureA.getBody();
                var bodyB = fixtureB.getBody();
                if (c.m_filterFlag) {
                    if (bodyB.shouldCollide(bodyA) == false) {
                        this.destroyContact(c);
                        continue
                    }
                    if (fixtureB.shouldCollide(fixtureA) == false) {
                        this.destroyContact(c);
                        continue
                    }
                    c.m_filterFlag = false
                }
                var activeA = bodyA.isAwake() && !bodyA.isStatic();
                var activeB = bodyB.isAwake() && !bodyB.isStatic();
                if (activeA == false && activeB == false) {
                    continue
                }
                var proxyIdA = fixtureA.m_proxies[indexA].proxyId;
                var proxyIdB = fixtureB.m_proxies[indexB].proxyId;
                var overlap = this.m_broadPhase.testOverlap(proxyIdA, proxyIdB);
                if (overlap == false) {
                    this.destroyContact(c);
                    continue
                }
                c.update(this)
            }
        };
        World.prototype.destroyContact = function(contact) {
            Contact.destroy(contact, this);
            if (contact.m_prev) {
                contact.m_prev.m_next = contact.m_next
            }
            if (contact.m_next) {
                contact.m_next.m_prev = contact.m_prev
            }
            if (contact == this.m_contactList) {
                this.m_contactList = contact.m_next
            }--this.m_contactCount
        };
        World.prototype._listeners = null;
        World.prototype.on = function(name, listener) {
            if (typeof name !== "string" || typeof listener !== "function") {
                return this
            }
            if (!this._listeners) {
                this._listeners = {}
            }
            if (!this._listeners[name]) {
                this._listeners[name] = []
            }
            this._listeners[name].push(listener);
            return this
        };
        World.prototype.off = function(name, listener) {
            if (typeof name !== "string" || typeof listener !== "function") {
                return this
            }
            var listeners = this._listeners && this._listeners[name];
            if (!listeners || !listeners.length) {
                return this
            }
            var index = listeners.indexOf(listener);
            if (index >= 0) {
                listeners.splice(index, 1)
            }
            return this
        };
        World.prototype.publish = function(name, arg1, arg2, arg3) {
            var listeners = this._listeners && this._listeners[name];
            if (!listeners || !listeners.length) {
                return 0
            }
            for (var l = 0; l < listeners.length; l++) {
                listeners[l].call(this, arg1, arg2, arg3)
            }
            return listeners.length
        };
        World.prototype.beginContact = function(contact) {
            this.publish("begin-contact", contact)
        };
        World.prototype.endContact = function(contact) {
            this.publish("end-contact", contact)
        };
        World.prototype.preSolve = function(contact, oldManifold) {
            this.publish("pre-solve", contact, oldManifold)
        };
        World.prototype.postSolve = function(contact, impulse) {
            this.publish("post-solve", contact, impulse)
        }
    }, {
        "./Body": 4,
        "./Contact": 5,
        "./Solver": 11,
        "./collision/BroadPhase": 14,
        "./common/Vec2": 25,
        "./util/common": 53,
        "./util/options": 55
    }],
    13: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        module.exports = AABB;

        function AABB(lower, upper) {
            if (!(this instanceof AABB)) {
                return new AABB(lower, upper)
            }
            this.lowerBound = Vec2.zero();
            this.upperBound = Vec2.zero();
            if (typeof lower === "object") {
                this.lowerBound.set(lower)
            }
            if (typeof upper === "object") {
                this.upperBound.set(upper)
            }
        }
        AABB.prototype.isValid = function() {
            return AABB.isValid(this)
        };
        AABB.isValid = function(aabb) {
            var d = Vec2.sub(aabb.upperBound, aabb.lowerBound);
            var valid = d.x >= 0 && d.y >= 0 && Vec2.isValid(aabb.lowerBound) && Vec2.isValid(aabb.upperBound);
            return valid
        };
        AABB.assert = function(o) {
            if (!_ASSERT) return;
            if (!AABB.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid AABB!")
            }
        };
        AABB.prototype.getCenter = function() {
            return Vec2.neo((this.lowerBound.x + this.upperBound.x) * .5, (this.lowerBound.y + this.upperBound.y) * .5)
        };
        AABB.prototype.getExtents = function() {
            return Vec2.neo((this.upperBound.x - this.lowerBound.x) * .5, (this.upperBound.y - this.lowerBound.y) * .5)
        };
        AABB.prototype.getPerimeter = function() {
            return 2 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y)
        };
        AABB.prototype.combine = function(a, b) {
            var lowerA = a.lowerBound;
            var upperA = a.upperBound;
            var lowerB = b.lowerBound;
            var upperB = b.upperBound;
            var lowerX = Math.min(lowerA.x, lowerB.x);
            var lowerY = Math.min(lowerA.y, lowerB.y);
            var upperX = Math.max(upperB.x, upperA.x);
            var upperY = Math.max(upperB.y, upperA.y);
            this.lowerBound.set(lowerX, lowerY);
            this.upperBound.set(upperX, upperY)
        };
        AABB.prototype.combinePoints = function(a, b) {
            this.lowerBound.set(Math.min(a.x, b.x), Math.min(a.y, b.y));
            this.upperBound.set(Math.max(a.x, b.x), Math.max(a.y, b.y))
        };
        AABB.prototype.set = function(aabb) {
            this.lowerBound.set(aabb.lowerBound.x, aabb.lowerBound.y);
            this.upperBound.set(aabb.upperBound.x, aabb.upperBound.y)
        };
        AABB.prototype.contains = function(aabb) {
            var result = true;
            result = result && this.lowerBound.x <= aabb.lowerBound.x;
            result = result && this.lowerBound.y <= aabb.lowerBound.y;
            result = result && aabb.upperBound.x <= this.upperBound.x;
            result = result && aabb.upperBound.y <= this.upperBound.y;
            return result
        };
        AABB.prototype.extend = function(value) {
            AABB.extend(this, value)
        };
        AABB.extend = function(aabb, value) {
            aabb.lowerBound.x -= value;
            aabb.lowerBound.y -= value;
            aabb.upperBound.x += value;
            aabb.upperBound.y += value
        };
        AABB.testOverlap = function(a, b) {
            var d1x = b.lowerBound.x - a.upperBound.x;
            var d2x = a.lowerBound.x - b.upperBound.x;
            var d1y = b.lowerBound.y - a.upperBound.y;
            var d2y = a.lowerBound.y - b.upperBound.y;
            if (d1x > 0 || d1y > 0 || d2x > 0 || d2y > 0) {
                return false
            }
            return true
        };
        AABB.areEqual = function(a, b) {
            return Vec2.areEqual(a.lowerBound, b.lowerBound) && Vec2.areEqual(a.upperBound, b.upperBound)
        };
        AABB.diff = function(a, b) {
            var wD = Math.max(0, Math.min(a.upperBound.x, b.upperBound.x) - Math.max(b.lowerBound.x, a.lowerBound.x));
            var hD = Math.max(0, Math.min(a.upperBound.y, b.upperBound.y) - Math.max(b.lowerBound.y, a.lowerBound.y));
            var wA = a.upperBound.x - a.lowerBound.x;
            var hA = a.upperBound.y - a.lowerBound.y;
            var wB = b.upperBound.x - b.lowerBound.x;
            var hB = b.upperBound.y - b.lowerBound.y;
            return wA * hA + wB * hB - wD * hD
        };
        AABB.prototype.rayCast = function(output, input) {
            var tmin = -Infinity;
            var tmax = Infinity;
            var p = input.p1;
            var d = Vec2.sub(input.p2, input.p1);
            var absD = Vec2.abs(d);
            var normal = Vec2.zero();
            for (var f = "x"; f !== null; f = f === "x" ? "y" : null) {
                if (absD.x < Math.EPSILON) {
                    if (p[f] < this.lowerBound[f] || this.upperBound[f] < p[f]) {
                        return false
                    }
                } else {
                    var inv_d = 1 / d[f];
                    var t1 = (this.lowerBound[f] - p[f]) * inv_d;
                    var t2 = (this.upperBound[f] - p[f]) * inv_d;
                    var s = -1;
                    if (t1 > t2) {
                        var temp = t1;
                        t1 = t2, t2 = temp;
                        s = 1
                    }
                    if (t1 > tmin) {
                        normal.setZero();
                        normal[f] = s;
                        tmin = t1
                    }
                    tmax = Math.min(tmax, t2);
                    if (tmin > tmax) {
                        return false
                    }
                }
            }
            if (tmin < 0 || input.maxFraction < tmin) {
                return false
            }
            output.fraction = tmin;
            output.normal = normal;
            return true
        };
        AABB.prototype.toString = function() {
            return JSON.stringify(this)
        }
    }, {
        "../Settings": 9,
        "../common/Math": 20,
        "../common/Vec2": 25
    }],
    14: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var Settings = require("../Settings");
        var common = require("../util/common");
        var Math = require("../common/Math");
        var AABB = require("./AABB");
        var DynamicTree = require("./DynamicTree");
        module.exports = BroadPhase;

        function BroadPhase() {
            this.m_tree = new DynamicTree;
            this.m_proxyCount = 0;
            this.m_moveBuffer = [];
            this.queryCallback = this.queryCallback.bind(this)
        }
        BroadPhase.prototype.getUserData = function(proxyId) {
            return this.m_tree.getUserData(proxyId)
        };
        BroadPhase.prototype.testOverlap = function(proxyIdA, proxyIdB) {
            var aabbA = this.m_tree.getFatAABB(proxyIdA);
            var aabbB = this.m_tree.getFatAABB(proxyIdB);
            return AABB.testOverlap(aabbA, aabbB)
        };
        BroadPhase.prototype.getFatAABB = function(proxyId) {
            return this.m_tree.getFatAABB(proxyId)
        };
        BroadPhase.prototype.getProxyCount = function() {
            return this.m_proxyCount
        };
        BroadPhase.prototype.getTreeHeight = function() {
            return this.m_tree.getHeight()
        };
        BroadPhase.prototype.getTreeBalance = function() {
            return this.m_tree.getMaxBalance()
        };
        BroadPhase.prototype.getTreeQuality = function() {
            return this.m_tree.getAreaRatio()
        };
        BroadPhase.prototype.query = function(aabb, queryCallback) {
            this.m_tree.query(aabb, queryCallback)
        };
        BroadPhase.prototype.rayCast = function(input, rayCastCallback) {
            this.m_tree.rayCast(input, rayCastCallback)
        };
        BroadPhase.prototype.shiftOrigin = function(newOrigin) {
            this.m_tree.shiftOrigin(newOrigin)
        };
        BroadPhase.prototype.createProxy = function(aabb, userData) {
            _ASSERT && common.assert(AABB.isValid(aabb));
            var proxyId = this.m_tree.createProxy(aabb, userData);
            this.m_proxyCount++;
            this.bufferMove(proxyId);
            return proxyId
        };
        BroadPhase.prototype.destroyProxy = function(proxyId) {
            this.unbufferMove(proxyId);
            this.m_proxyCount--;
            this.m_tree.destroyProxy(proxyId)
        };
        BroadPhase.prototype.moveProxy = function(proxyId, aabb, displacement) {
            _ASSERT && common.assert(AABB.isValid(aabb));
            var changed = this.m_tree.moveProxy(proxyId, aabb, displacement);
            if (changed) {
                this.bufferMove(proxyId)
            }
        };
        BroadPhase.prototype.touchProxy = function(proxyId) {
            this.bufferMove(proxyId)
        };
        BroadPhase.prototype.bufferMove = function(proxyId) {
            this.m_moveBuffer.push(proxyId)
        };
        BroadPhase.prototype.unbufferMove = function(proxyId) {
            for (var i = 0; i < this.m_moveBuffer.length; ++i) {
                if (this.m_moveBuffer[i] == proxyId) {
                    this.m_moveBuffer[i] = null
                }
            }
        };
        BroadPhase.prototype.updatePairs = function(addPairCallback) {
            _ASSERT && common.assert(typeof addPairCallback === "function");
            this.m_callback = addPairCallback;
            while (this.m_moveBuffer.length > 0) {
                this.m_queryProxyId = this.m_moveBuffer.pop();
                if (this.m_queryProxyId === null) {
                    continue
                }
                var fatAABB = this.m_tree.getFatAABB(this.m_queryProxyId);
                this.m_tree.query(fatAABB, this.queryCallback)
            }
        };
        BroadPhase.prototype.queryCallback = function(proxyId) {
            if (proxyId == this.m_queryProxyId) {
                return true
            }
            var proxyIdA = Math.min(proxyId, this.m_queryProxyId);
            var proxyIdB = Math.max(proxyId, this.m_queryProxyId);
            var userDataA = this.m_tree.getUserData(proxyIdA);
            var userDataB = this.m_tree.getUserData(proxyIdB);
            this.m_callback(userDataA, userDataB);
            return true
        }
    }, {
        "../Settings": 9,
        "../common/Math": 20,
        "../util/common": 53,
        "./AABB": 13,
        "./DynamicTree": 16
    }],
    15: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Distance;
        module.exports.Input = DistanceInput;
        module.exports.Output = DistanceOutput;
        module.exports.Proxy = DistanceProxy;
        module.exports.Cache = SimplexCache;
        var Settings = require("../Settings");
        var common = require("../util/common");
        var stats = require("../common/stats");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        stats.gjkCalls = 0;
        stats.gjkIters = 0;
        stats.gjkMaxIters = 0;

        function DistanceInput() {
            this.proxyA = new DistanceProxy;
            this.proxyB = new DistanceProxy;
            this.transformA = null;
            this.transformB = null;
            this.useRadii = false
        }

        function DistanceOutput() {
            this.pointA = Vec2.zero();
            this.pointB = Vec2.zero();
            this.distance;
            this.iterations
        }

        function SimplexCache() {
            this.metric = 0;
            this.indexA = [];
            this.indexB = [];
            this.count = 0
        }

        function Distance(output, cache, input) {
            ++stats.gjkCalls;
            var proxyA = input.proxyA;
            var proxyB = input.proxyB;
            var xfA = input.transformA;
            var xfB = input.transformB;
            var simplex = new Simplex;
            simplex.readCache(cache, proxyA, xfA, proxyB, xfB);
            var vertices = simplex.m_v;
            var k_maxIters = Settings.maxDistnceIterations;
            var saveA = [];
            var saveB = [];
            var saveCount = 0;
            var distanceSqr1 = Infinity;
            var distanceSqr2 = Infinity;
            var iter = 0;
            while (iter < k_maxIters) {
                saveCount = simplex.m_count;
                for (var i = 0; i < saveCount; ++i) {
                    saveA[i] = vertices[i].indexA;
                    saveB[i] = vertices[i].indexB
                }
                simplex.solve();
                if (simplex.m_count == 3) {
                    break
                }
                var p = simplex.getClosestPoint();
                distanceSqr2 = p.lengthSquared();
                if (distanceSqr2 >= distanceSqr1) {}
                distanceSqr1 = distanceSqr2;
                var d = simplex.getSearchDirection();
                if (d.lengthSquared() < Math.EPSILON * Math.EPSILON) {
                    break
                }
                var vertex = vertices[simplex.m_count];
                vertex.indexA = proxyA.getSupport(Rot.mulTVec2(xfA.q, Vec2.neg(d)));
                vertex.wA = Transform.mulVec2(xfA, proxyA.getVertex(vertex.indexA));
                vertex.indexB = proxyB.getSupport(Rot.mulTVec2(xfB.q, d));
                vertex.wB = Transform.mulVec2(xfB, proxyB.getVertex(vertex.indexB));
                vertex.w = Vec2.sub(vertex.wB, vertex.wA);
                ++iter;
                ++stats.gjkIters;
                var duplicate = false;
                for (var i = 0; i < saveCount; ++i) {
                    if (vertex.indexA == saveA[i] && vertex.indexB == saveB[i]) {
                        duplicate = true;
                        break
                    }
                }
                if (duplicate) {
                    break
                }++simplex.m_count
            }
            stats.gjkMaxIters = Math.max(stats.gjkMaxIters, iter);
            simplex.getWitnessPoints(output.pointA, output.pointB);
            output.distance = Vec2.distance(output.pointA, output.pointB);
            output.iterations = iter;
            simplex.writeCache(cache);
            if (input.useRadii) {
                var rA = proxyA.m_radius;
                var rB = proxyB.m_radius;
                if (output.distance > rA + rB && output.distance > Math.EPSILON) {
                    output.distance -= rA + rB;
                    var normal = Vec2.sub(output.pointB, output.pointA);
                    normal.normalize();
                    output.pointA.addMul(rA, normal);
                    output.pointB.subMul(rB, normal)
                } else {
                    var p = Vec2.mid(output.pointA, output.pointB);
                    output.pointA.set(p);
                    output.pointB.set(p);
                    output.distance = 0
                }
            }
        }

        function DistanceProxy() {
            this.m_buffer = [];
            this.m_vertices = [];
            this.m_count = 0;
            this.m_radius = 0
        }
        DistanceProxy.prototype.getVertexCount = function() {
            return this.m_count
        };
        DistanceProxy.prototype.getVertex = function(index) {
            _ASSERT && common.assert(0 <= index && index < this.m_count);
            return this.m_vertices[index]
        };
        DistanceProxy.prototype.getSupport = function(d) {
            var bestIndex = 0;
            var bestValue = Vec2.dot(this.m_vertices[0], d);
            for (var i = 0; i < this.m_count; ++i) {
                var value = Vec2.dot(this.m_vertices[i], d);
                if (value > bestValue) {
                    bestIndex = i;
                    bestValue = value
                }
            }
            return bestIndex
        };
        DistanceProxy.prototype.getSupportVertex = function(d) {
            return this.m_vertices[this.getSupport(d)]
        };
        DistanceProxy.prototype.set = function(shape, index) {
            _ASSERT && common.assert(typeof shape.computeDistanceProxy === "function");
            shape.computeDistanceProxy(this, index)
        };

        function SimplexVertex() {
            this.indexA;
            this.indexB;
            this.wA = Vec2.zero();
            this.wB = Vec2.zero();
            this.w = Vec2.zero();
            this.a
        }
        SimplexVertex.prototype.set = function(v) {
            this.indexA = v.indexA;
            this.indexB = v.indexB;
            this.wA = Vec2.clone(v.wA);
            this.wB = Vec2.clone(v.wB);
            this.w = Vec2.clone(v.w);
            this.a = v.a
        };

        function Simplex() {
            this.m_v1 = new SimplexVertex;
            this.m_v2 = new SimplexVertex;
            this.m_v3 = new SimplexVertex;
            this.m_v = [this.m_v1, this.m_v2, this.m_v3];
            this.m_count
        }
        Simplex.prototype.print = function() {
            if (this.m_count == 3) {
                return ["+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y, this.m_v3.a, this.m_v3.wA.x, this.m_v3.wA.y, this.m_v3.wB.x, this.m_v3.wB.y].toString()
            } else if (this.m_count == 2) {
                return ["+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y].toString()
            } else if (this.m_count == 1) {
                return ["+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y].toString()
            } else {
                return "+" + this.m_count
            }
        };
        Simplex.prototype.readCache = function(cache, proxyA, transformA, proxyB, transformB) {
            _ASSERT && common.assert(cache.count <= 3);
            this.m_count = cache.count;
            for (var i = 0; i < this.m_count; ++i) {
                var v = this.m_v[i];
                v.indexA = cache.indexA[i];
                v.indexB = cache.indexB[i];
                var wALocal = proxyA.getVertex(v.indexA);
                var wBLocal = proxyB.getVertex(v.indexB);
                v.wA = Transform.mulVec2(transformA, wALocal);
                v.wB = Transform.mulVec2(transformB, wBLocal);
                v.w = Vec2.sub(v.wB, v.wA);
                v.a = 0
            }
            if (this.m_count > 1) {
                var metric1 = cache.metric;
                var metric2 = this.getMetric();
                if (metric2 < .5 * metric1 || 2 * metric1 < metric2 || metric2 < Math.EPSILON) {
                    this.m_count = 0
                }
            }
            if (this.m_count == 0) {
                var v = this.m_v[0];
                v.indexA = 0;
                v.indexB = 0;
                var wALocal = proxyA.getVertex(0);
                var wBLocal = proxyB.getVertex(0);
                v.wA = Transform.mulVec2(transformA, wALocal);
                v.wB = Transform.mulVec2(transformB, wBLocal);
                v.w = Vec2.sub(v.wB, v.wA);
                v.a = 1;
                this.m_count = 1
            }
        };
        Simplex.prototype.writeCache = function(cache) {
            cache.metric = this.getMetric();
            cache.count = this.m_count;
            for (var i = 0; i < this.m_count; ++i) {
                cache.indexA[i] = this.m_v[i].indexA;
                cache.indexB[i] = this.m_v[i].indexB
            }
        };
        Simplex.prototype.getSearchDirection = function() {
            switch (this.m_count) {
                case 1:
                    return Vec2.neg(this.m_v1.w);
                case 2: {
                    var e12 = Vec2.sub(this.m_v2.w, this.m_v1.w);
                    var sgn = Vec2.cross(e12, Vec2.neg(this.m_v1.w));
                    if (sgn > 0) {
                        return Vec2.cross(1, e12)
                    } else {
                        return Vec2.cross(e12, 1)
                    }
                }
                default:
                    _ASSERT && common.assert(false);
                    return Vec2.zero()
            }
        };
        Simplex.prototype.getClosestPoint = function() {
            switch (this.m_count) {
                case 0:
                    _ASSERT && common.assert(false);
                    return Vec2.zero();
                case 1:
                    return Vec2.clone(this.m_v1.w);
                case 2:
                    return Vec2.combine(this.m_v1.a, this.m_v1.w, this.m_v2.a, this.m_v2.w);
                case 3:
                    return Vec2.zero();
                default:
                    _ASSERT && common.assert(false);
                    return Vec2.zero()
            }
        };
        Simplex.prototype.getWitnessPoints = function(pA, pB) {
            switch (this.m_count) {
                case 0:
                    _ASSERT && common.assert(false);
                    break;
                case 1:
                    pA.set(this.m_v1.wA);
                    pB.set(this.m_v1.wB);
                    break;
                case 2:
                    pA.setCombine(this.m_v1.a, this.m_v1.wA, this.m_v2.a, this.m_v2.wA);
                    pB.setCombine(this.m_v1.a, this.m_v1.wB, this.m_v2.a, this.m_v2.wB);
                    break;
                case 3:
                    pA.setCombine(this.m_v1.a, this.m_v1.wA, this.m_v2.a, this.m_v2.wA);
                    pA.addMul(this.m_v3.a, this.m_v3.wA);
                    pB.set(pA);
                    break;
                default:
                    _ASSERT && common.assert(false);
                    break
            }
        };
        Simplex.prototype.getMetric = function() {
            switch (this.m_count) {
                case 0:
                    _ASSERT && common.assert(false);
                    return 0;
                case 1:
                    return 0;
                case 2:
                    return Vec2.distance(this.m_v1.w, this.m_v2.w);
                case 3:
                    return Vec2.cross(Vec2.sub(this.m_v2.w, this.m_v1.w), Vec2.sub(this.m_v3.w, this.m_v1.w));
                default:
                    _ASSERT && common.assert(false);
                    return 0
            }
        };
        Simplex.prototype.solve = function() {
            switch (this.m_count) {
                case 1:
                    break;
                case 2:
                    this.solve2();
                    break;
                case 3:
                    this.solve3();
                    break;
                default:
                    _ASSERT && common.assert(false)
            }
        };
        Simplex.prototype.solve2 = function() {
            var w1 = this.m_v1.w;
            var w2 = this.m_v2.w;
            var e12 = Vec2.sub(w2, w1);
            var d12_2 = -Vec2.dot(w1, e12);
            if (d12_2 <= 0) {
                this.m_v1.a = 1;
                this.m_count = 1;
                return
            }
            var d12_1 = Vec2.dot(w2, e12);
            if (d12_1 <= 0) {
                this.m_v2.a = 1;
                this.m_count = 1;
                this.m_v1.set(this.m_v2);
                return
            }
            var inv_d12 = 1 / (d12_1 + d12_2);
            this.m_v1.a = d12_1 * inv_d12;
            this.m_v2.a = d12_2 * inv_d12;
            this.m_count = 2
        };
        Simplex.prototype.solve3 = function() {
            var w1 = this.m_v1.w;
            var w2 = this.m_v2.w;
            var w3 = this.m_v3.w;
            var e12 = Vec2.sub(w2, w1);
            var w1e12 = Vec2.dot(w1, e12);
            var w2e12 = Vec2.dot(w2, e12);
            var d12_1 = w2e12;
            var d12_2 = -w1e12;
            var e13 = Vec2.sub(w3, w1);
            var w1e13 = Vec2.dot(w1, e13);
            var w3e13 = Vec2.dot(w3, e13);
            var d13_1 = w3e13;
            var d13_2 = -w1e13;
            var e23 = Vec2.sub(w3, w2);
            var w2e23 = Vec2.dot(w2, e23);
            var w3e23 = Vec2.dot(w3, e23);
            var d23_1 = w3e23;
            var d23_2 = -w2e23;
            var n123 = Vec2.cross(e12, e13);
            var d123_1 = n123 * Vec2.cross(w2, w3);
            var d123_2 = n123 * Vec2.cross(w3, w1);
            var d123_3 = n123 * Vec2.cross(w1, w2);
            if (d12_2 <= 0 && d13_2 <= 0) {
                this.m_v1.a = 1;
                this.m_count = 1;
                return
            }
            if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
                var inv_d12 = 1 / (d12_1 + d12_2);
                this.m_v1.a = d12_1 * inv_d12;
                this.m_v2.a = d12_2 * inv_d12;
                this.m_count = 2;
                return
            }
            if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
                var inv_d13 = 1 / (d13_1 + d13_2);
                this.m_v1.a = d13_1 * inv_d13;
                this.m_v3.a = d13_2 * inv_d13;
                this.m_count = 2;
                this.m_v2.set(this.m_v3);
                return
            }
            if (d12_1 <= 0 && d23_2 <= 0) {
                this.m_v2.a = 1;
                this.m_count = 1;
                this.m_v1.set(this.m_v2);
                return
            }
            if (d13_1 <= 0 && d23_1 <= 0) {
                this.m_v3.a = 1;
                this.m_count = 1;
                this.m_v1.set(this.m_v3);
                return
            }
            if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
                var inv_d23 = 1 / (d23_1 + d23_2);
                this.m_v2.a = d23_1 * inv_d23;
                this.m_v3.a = d23_2 * inv_d23;
                this.m_count = 2;
                this.m_v1.set(this.m_v3);
                return
            }
            var inv_d123 = 1 / (d123_1 + d123_2 + d123_3);
            this.m_v1.a = d123_1 * inv_d123;
            this.m_v2.a = d123_2 * inv_d123;
            this.m_v3.a = d123_3 * inv_d123;
            this.m_count = 3
        };
        Distance.testOverlap = function(shapeA, indexA, shapeB, indexB, xfA, xfB) {
            var input = new DistanceInput;
            input.proxyA.set(shapeA, indexA);
            input.proxyB.set(shapeB, indexB);
            input.transformA = xfA;
            input.transformB = xfB;
            input.useRadii = true;
            var cache = new SimplexCache;
            var output = new DistanceOutput;
            Distance(output, cache, input);
            return output.distance < 10 * Math.EPSILON
        }
    }, {
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../common/stats": 28,
        "../util/common": 53
    }],
    16: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var Settings = require("../Settings");
        var common = require("../util/common");
        var Pool = require("../util/Pool");
        var Vec2 = require("../common/Vec2");
        var Math = require("../common/Math");
        var AABB = require("./AABB");
        module.exports = DynamicTree;
        var aabbPool = new Pool({
            create: function() {
                return new AABB
            },
            release: function(aabb) {
                aabb.lowerBound.setZero();
                aabb.upperBound.setZero()
            }
        });
        var nodePool = new Pool({
            create: function() {
                return new TreeNode
            }
        });

        function TreeNode(id) {
            this.id = id;
            this.aabb = new AABB;
            this.userData = null;
            this.parent = null;
            this.child1 = null;
            this.child2 = null;
            this.height = -1;
            this.toString = function() {
                return this.id + ": " + this.userData
            }
        }
        TreeNode.prototype.isLeaf = function() {
            return this.child1 == null
        };

        function DynamicTree() {
            this.m_root = null;
            this.m_nodes = {};
            this.m_lastProxyId = 0
        }
        DynamicTree.prototype.getUserData = function(id) {
            var node = this.m_nodes[id];
            _ASSERT && common.assert(!!node);
            return node.userData
        };
        DynamicTree.prototype.getFatAABB = function(id) {
            var node = this.m_nodes[id];
            _ASSERT && common.assert(!!node);
            return node.aabb
        };
        DynamicTree.prototype.allocateNode = function() {
            var node = nodePool.allocate();
            node.id = ++this.m_lastProxyId;
            node.userData = null;
            node.parent = null;
            node.child1 = null;
            node.child2 = null;
            node.height = -1;
            this.m_nodes[node.id] = node;
            return node
        };
        DynamicTree.prototype.freeNode = function(node) {
            nodePool.release(node);
            node.height = -1;
            delete this.m_nodes[node.id]
        };
        DynamicTree.prototype.createProxy = function(aabb, userData) {
            _ASSERT && common.assert(AABB.isValid(aabb));
            var node = this.allocateNode();
            node.aabb.set(aabb);
            node.aabb.extend(Settings.aabbExtension);
            node.userData = userData;
            node.height = 0;
            this.insertLeaf(node);
            return node.id
        };
        DynamicTree.prototype.destroyProxy = function(id) {
            var node = this.m_nodes[id];
            _ASSERT && common.assert(!!node);
            _ASSERT && common.assert(node.isLeaf());
            this.removeLeaf(node);
            this.freeNode(node)
        };
        DynamicTree.prototype.moveProxy = function(id, aabb, d) {
            _ASSERT && common.assert(AABB.isValid(aabb));
            _ASSERT && common.assert(!d || Vec2.isValid(d));
            var node = this.m_nodes[id];
            _ASSERT && common.assert(!!node);
            _ASSERT && common.assert(node.isLeaf());
            if (node.aabb.contains(aabb)) {
                return false
            }
            this.removeLeaf(node);
            node.aabb.set(aabb);
            aabb = node.aabb;
            AABB.extend(aabb, Settings.aabbExtension);
            if (d.x < 0) {
                aabb.lowerBound.x += d.x * Settings.aabbMultiplier
            } else {
                aabb.upperBound.x += d.x * Settings.aabbMultiplier
            }
            if (d.y < 0) {
                aabb.lowerBound.y += d.y * Settings.aabbMultiplier
            } else {
                aabb.upperBound.y += d.y * Settings.aabbMultiplier
            }
            this.insertLeaf(node);
            return true
        };
        DynamicTree.prototype.insertLeaf = function(leaf) {
            _ASSERT && common.assert(AABB.isValid(leaf.aabb));
            if (this.m_root == null) {
                this.m_root = leaf;
                this.m_root.parent = null;
                return
            }
            var leafAABB = leaf.aabb;
            var index = this.m_root;
            while (index.isLeaf() == false) {
                var child1 = index.child1;
                var child2 = index.child2;
                var area = index.aabb.getPerimeter();
                var combinedAABB = aabbPool.allocate();
                combinedAABB.combine(index.aabb, leafAABB);
                var combinedArea = combinedAABB.getPerimeter();
                aabbPool.release(combinedAABB);
                var cost = 2 * combinedArea;
                var inheritanceCost = 2 * (combinedArea - area);
                var cost1;
                if (child1.isLeaf()) {
                    var aabb = aabbPool.allocate();
                    aabb.combine(leafAABB, child1.aabb);
                    cost1 = aabb.getPerimeter() + inheritanceCost;
                    aabbPool.release(aabb)
                } else {
                    var aabb = aabbPool.allocate();
                    aabb.combine(leafAABB, child1.aabb);
                    var oldArea = child1.aabb.getPerimeter();
                    var newArea = aabb.getPerimeter();
                    cost1 = newArea - oldArea + inheritanceCost;
                    aabbPool.release(aabb)
                }
                var cost2;
                if (child2.isLeaf()) {
                    var aabb = aabbPool.allocate();
                    aabb.combine(leafAABB, child2.aabb);
                    cost2 = aabb.getPerimeter() + inheritanceCost;
                    aabbPool.release(aabb)
                } else {
                    var aabb = aabbPool.allocate();
                    aabb.combine(leafAABB, child2.aabb);
                    var oldArea = child2.aabb.getPerimeter();
                    var newArea = aabb.getPerimeter();
                    cost2 = newArea - oldArea + inheritanceCost;
                    aabbPool.release(aabb)
                }
                if (cost < cost1 && cost < cost2) {
                    break
                }
                if (cost1 < cost2) {
                    index = child1
                } else {
                    index = child2
                }
            }
            var sibling = index;
            var oldParent = sibling.parent;
            var newParent = this.allocateNode();
            newParent.parent = oldParent;
            newParent.userData = null;
            newParent.aabb.combine(leafAABB, sibling.aabb);
            newParent.height = sibling.height + 1;
            if (oldParent != null) {
                if (oldParent.child1 == sibling) {
                    oldParent.child1 = newParent
                } else {
                    oldParent.child2 = newParent
                }
                newParent.child1 = sibling;
                newParent.child2 = leaf;
                sibling.parent = newParent;
                leaf.parent = newParent
            } else {
                newParent.child1 = sibling;
                newParent.child2 = leaf;
                sibling.parent = newParent;
                leaf.parent = newParent;
                this.m_root = newParent
            }
            index = leaf.parent;
            while (index != null) {
                index = this.balance(index);
                var child1 = index.child1;
                var child2 = index.child2;
                _ASSERT && common.assert(child1 != null);
                _ASSERT && common.assert(child2 != null);
                index.height = 1 + Math.max(child1.height, child2.height);
                index.aabb.combine(child1.aabb, child2.aabb);
                index = index.parent
            }
        };
        DynamicTree.prototype.removeLeaf = function(leaf) {
            if (leaf == this.m_root) {
                this.m_root = null;
                return
            }
            var parent = leaf.parent;
            var grandParent = parent.parent;
            var sibling;
            if (parent.child1 == leaf) {
                sibling = parent.child2
            } else {
                sibling = parent.child1
            }
            if (grandParent != null) {
                if (grandParent.child1 == parent) {
                    grandParent.child1 = sibling
                } else {
                    grandParent.child2 = sibling
                }
                sibling.parent = grandParent;
                this.freeNode(parent);
                var index = grandParent;
                while (index != null) {
                    index = this.balance(index);
                    var child1 = index.child1;
                    var child2 = index.child2;
                    index.aabb.combine(child1.aabb, child2.aabb);
                    index.height = 1 + Math.max(child1.height, child2.height);
                    index = index.parent
                }
            } else {
                this.m_root = sibling;
                sibling.parent = null;
                this.freeNode(parent)
            }
        };
        DynamicTree.prototype.balance = function(iA) {
            _ASSERT && common.assert(iA != null);
            var A = iA;
            if (A.isLeaf() || A.height < 2) {
                return iA
            }
            var B = A.child1;
            var C = A.child2;
            var balance = C.height - B.height;
            if (balance > 1) {
                var F = C.child1;
                var G = C.child2;
                C.child1 = A;
                C.parent = A.parent;
                A.parent = C;
                if (C.parent != null) {
                    if (C.parent.child1 == iA) {
                        C.parent.child1 = C
                    } else {
                        C.parent.child2 = C
                    }
                } else {
                    this.m_root = C
                }
                if (F.height > G.height) {
                    C.child2 = F;
                    A.child2 = G;
                    G.parent = A;
                    A.aabb.combine(B.aabb, G.aabb);
                    C.aabb.combine(A.aabb, F.aabb);
                    A.height = 1 + Math.max(B.height, G.height);
                    C.height = 1 + Math.max(A.height, F.height)
                } else {
                    C.child2 = G;
                    A.child2 = F;
                    F.parent = A;
                    A.aabb.combine(B.aabb, F.aabb);
                    C.aabb.combine(A.aabb, G.aabb);
                    A.height = 1 + Math.max(B.height, F.height);
                    C.height = 1 + Math.max(A.height, G.height)
                }
                return C
            }
            if (balance < -1) {
                var D = B.child1;
                var E = B.child2;
                B.child1 = A;
                B.parent = A.parent;
                A.parent = B;
                if (B.parent != null) {
                    if (B.parent.child1 == A) {
                        B.parent.child1 = B
                    } else {
                        B.parent.child2 = B
                    }
                } else {
                    this.m_root = B
                }
                if (D.height > E.height) {
                    B.child2 = D;
                    A.child1 = E;
                    E.parent = A;
                    A.aabb.combine(C.aabb, E.aabb);
                    B.aabb.combine(A.aabb, D.aabb);
                    A.height = 1 + Math.max(C.height, E.height);
                    B.height = 1 + Math.max(A.height, D.height)
                } else {
                    B.child2 = E;
                    A.child1 = D;
                    D.parent = A;
                    A.aabb.combine(C.aabb, D.aabb);
                    B.aabb.combine(A.aabb, E.aabb);
                    A.height = 1 + Math.max(C.height, D.height);
                    B.height = 1 + Math.max(A.height, E.height)
                }
                return B
            }
            return A
        };
        DynamicTree.prototype.getHeight = function() {
            if (this.m_root == null) {
                return 0
            }
            return this.m_root.height
        };
        DynamicTree.prototype.getAreaRatio = function() {
            if (this.m_root == null) {
                return 0
            }
            var root = this.m_root;
            var rootArea = root.aabb.getPerimeter();
            var totalArea = 0;
            var node, it = iteratorPool.allocate().preorder();
            while (node = it.next()) {
                if (node.height < 0) {
                    continue
                }
                totalArea += node.aabb.getPerimeter()
            }
            iteratorPool.release(it);
            return totalArea / rootArea
        };
        DynamicTree.prototype.computeHeight = function(id) {
            var node;
            if (typeof id !== "undefined") {
                node = this.m_nodes[id]
            } else {
                node = this.m_root
            }
            if (node.isLeaf()) {
                return 0
            }
            var height1 = ComputeHeight(node.child1);
            var height2 = ComputeHeight(node.child2);
            return 1 + Math.max(height1, height2)
        };
        DynamicTree.prototype.validateStructure = function(node) {
            if (node == null) {
                return
            }
            if (node == this.m_root) {
                _ASSERT && common.assert(node.parent == null)
            }
            var child1 = node.child1;
            var child2 = node.child2;
            if (node.isLeaf()) {
                _ASSERT && common.assert(child1 == null);
                _ASSERT && common.assert(child2 == null);
                _ASSERT && common.assert(node.height == 0);
                return
            }
            _ASSERT && common.assert(child1.parent == node);
            _ASSERT && common.assert(child2.parent == node);
            this.validateStructure(child1);
            this.validateStructure(child2)
        };
        DynamicTree.prototype.validateMetrics = function(node) {
            if (node == null) {
                return
            }
            var child1 = node.child1;
            var child2 = node.child2;
            if (node.isLeaf()) {
                _ASSERT && common.assert(child1 == null);
                _ASSERT && common.assert(child2 == null);
                _ASSERT && common.assert(node.height == 0);
                return
            }
            var height1 = this.m_nodes[child1].height;
            var height2 = this.m_nodes[child2].height;
            var height = 1 + Math.max(height1, height2);
            _ASSERT && common.assert(node.height == height);
            _ASSERT && common.assert(AABB.areEqual((new AABB).combine(child1.aabb, child2.aabb), node.aabb));
            this.validateMetrics(child1);
            this.validateMetrics(child2)
        };
        DynamicTree.prototype.validate = function() {
            ValidateStructure(this.m_root);
            ValidateMetrics(this.m_root);
            _ASSERT && common.assert(this.getHeight() == this.computeHeight())
        };
        DynamicTree.prototype.getMaxBalance = function() {
            var maxBalance = 0;
            var node, it = iteratorPool.allocate().preorder();
            while (node = it.next()) {
                if (node.height <= 1) {
                    continue
                }
                _ASSERT && common.assert(node.isLeaf() == false);
                var balance = Math.abs(node.child2.height - node.child1.height);
                maxBalance = Math.max(maxBalance, balance)
            }
            iteratorPool.release(it);
            return maxBalance
        };
        DynamicTree.prototype.rebuildBottomUp = function() {
            var nodes = [];
            var count = 0;
            var node, it = iteratorPool.allocate().preorder();
            while (node = it.next()) {
                if (node.height < 0) {
                    continue
                }
                if (node.isLeaf()) {
                    node.parent = null;
                    nodes[count] = node;
                    ++count
                } else {
                    this.freeNode(node)
                }
            }
            iteratorPool.release(it);
            while (count > 1) {
                var minCost = Infinity;
                var iMin = -1,
                    jMin = -1;
                for (var i = 0; i < count; ++i) {
                    var aabbi = nodes[i].aabb;
                    for (var j = i + 1; j < count; ++j) {
                        var aabbj = nodes[j].aabb;
                        var b = aabbPool.allocate();
                        b.combine(aabbi, aabbj);
                        var cost = b.getPerimeter();
                        if (cost < minCost) {
                            iMin = i;
                            jMin = j;
                            minCost = cost
                        }
                        aabbPool.release(b)
                    }
                }
                var child1 = nodes[iMin];
                var child2 = nodes[jMin];
                var parent = this.allocateNode();
                parent.child1 = child1;
                parent.child2 = child2;
                parent.height = 1 + Math.max(child1.height, child2.height);
                parent.aabb.combine(child1.aabb, child2.aabb);
                parent.parent = null;
                child1.parent = parent;
                child2.parent = parent;
                nodes[jMin] = nodes[count - 1];
                nodes[iMin] = parent;
                --count
            }
            this.m_root = nodes[0];
            this.validate()
        };
        DynamicTree.prototype.shiftOrigin = function(newOrigin) {
            var node, it = iteratorPool.allocate().preorder();
            while (node = it.next()) {
                var aabb = node.aabb;
                aabb.lowerBound.x -= newOrigin.x;
                aabb.lowerBound.y -= newOrigin.y;
                aabb.upperBound.x -= newOrigin.x;
                aabb.upperBound.y -= newOrigin.y
            }
            iteratorPool.release(it)
        };
        DynamicTree.prototype.query = function(aabb, queryCallback) {
            _ASSERT && common.assert(typeof queryCallback === "function");
            var stack = stackPool.allocate();
            stack.push(this.m_root);
            while (stack.length > 0) {
                var node = stack.pop();
                if (node == null) {
                    continue
                }
                if (AABB.testOverlap(node.aabb, aabb)) {
                    if (node.isLeaf()) {
                        var proceed = queryCallback(node.id);
                        if (proceed == false) {
                            return
                        }
                    } else {
                        stack.push(node.child1);
                        stack.push(node.child2)
                    }
                }
            }
            stackPool.release(stack)
        };
        DynamicTree.prototype.rayCast = function(input, rayCastCallback) {
            _ASSERT && common.assert(typeof rayCastCallback === "function");
            var p1 = input.p1;
            var p2 = input.p2;
            var r = Vec2.sub(p2, p1);
            _ASSERT && common.assert(r.lengthSquared() > 0);
            r.normalize();
            var v = Vec2.cross(1, r);
            var abs_v = Vec2.abs(v);
            var maxFraction = input.maxFraction;
            var segmentAABB = new AABB;
            var t = Vec2.combine(1 - maxFraction, p1, maxFraction, p2);
            segmentAABB.combinePoints(p1, t);
            var stack = stackPool.allocate();
            var subInput = inputPool.allocate();
            stack.push(this.m_root);
            while (stack.length > 0) {
                var node = stack.pop();
                if (node == null) {
                    continue
                }
                if (AABB.testOverlap(node.aabb, segmentAABB) == false) {
                    continue
                }
                var c = node.aabb.getCenter();
                var h = node.aabb.getExtents();
                var separation = Math.abs(Vec2.dot(v, Vec2.sub(p1, c))) - Vec2.dot(abs_v, h);
                if (separation > 0) {
                    continue
                }
                if (node.isLeaf()) {
                    subInput.p1 = Vec2.clone(input.p1);
                    subInput.p2 = Vec2.clone(input.p2);
                    subInput.maxFraction = maxFraction;
                    var value = rayCastCallback(subInput, node.id);
                    if (value == 0) {
                        return
                    }
                    if (value > 0) {
                        maxFraction = value;
                        t = Vec2.combine(1 - maxFraction, p1, maxFraction, p2);
                        segmentAABB.combinePoints(p1, t)
                    }
                } else {
                    stack.push(node.child1);
                    stack.push(node.child2)
                }
            }
            stackPool.release(stack);
            inputPool.release(subInput)
        };
        var inputPool = new Pool({
            create: function() {
                return {}
            },
            release: function(stack) {}
        });
        var stackPool = new Pool({
            create: function() {
                return []
            },
            release: function(stack) {
                stack.length = 0
            }
        });
        var iteratorPool = new Pool({
            create: function() {
                return new Iterator
            },
            release: function(iterator) {
                iterator.close()
            }
        });

        function Iterator() {
            var parents = [];
            var states = [];
            return {
                preorder: function(root) {
                    parents.length = 0;
                    parents.push(root);
                    states.length = 0;
                    states.push(0);
                    return this
                },
                next: function() {
                    while (parents.length > 0) {
                        var i = parents.length - 1;
                        var node = parents[i];
                        if (states[i] === 0) {
                            states[i] = 1;
                            return node
                        }
                        if (states[i] === 1) {
                            states[i] = 2;
                            if (node.child1) {
                                parents.push(node.child1);
                                states.push(1);
                                return node.child1
                            }
                        }
                        if (states[i] === 2) {
                            states[i] = 3;
                            if (node.child2) {
                                parents.push(node.child2);
                                states.push(1);
                                return node.child2
                            }
                        }
                        parents.pop();
                        states.pop()
                    }
                },
                close: function() {
                    parents.length = 0
                }
            }
        }
    }, {
        "../Settings": 9,
        "../common/Math": 20,
        "../common/Vec2": 25,
        "../util/Pool": 51,
        "../util/common": 53,
        "./AABB": 13
    }],
    17: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = TimeOfImpact;
        module.exports.Input = TOIInput;
        module.exports.Output = TOIOutput;
        var Settings = require("../Settings");
        var common = require("../util/common");
        var Timer = require("../util/Timer");
        var stats = require("../common/stats");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Distance = require("./Distance");
        var DistanceInput = Distance.Input;
        var DistanceOutput = Distance.Output;
        var DistanceProxy = Distance.Proxy;
        var SimplexCache = Distance.Cache;

        function TOIInput() {
            this.proxyA = new DistanceProxy;
            this.proxyB = new DistanceProxy;
            this.sweepA = new Sweep;
            this.sweepB = new Sweep;
            this.tMax
        }
        TOIOutput.e_unknown = 0;
        TOIOutput.e_failed = 1;
        TOIOutput.e_overlapped = 2;
        TOIOutput.e_touching = 3;
        TOIOutput.e_separated = 4;

        function TOIOutput() {
            this.state;
            this.t
        }
        stats.toiTime = 0;
        stats.toiMaxTime = 0;
        stats.toiCalls = 0;
        stats.toiIters = 0;
        stats.toiMaxIters = 0;
        stats.toiRootIters = 0;
        stats.toiMaxRootIters = 0;

        function TimeOfImpact(output, input) {
            var timer = Timer.now();
            ++stats.toiCalls;
            output.state = TOIOutput.e_unknown;
            output.t = input.tMax;
            var proxyA = input.proxyA;
            var proxyB = input.proxyB;
            var sweepA = input.sweepA;
            var sweepB = input.sweepB;
            sweepA.normalize();
            sweepB.normalize();
            var tMax = input.tMax;
            var totalRadius = proxyA.m_radius + proxyB.m_radius;
            var target = Math.max(Settings.linearSlop, totalRadius - 3 * Settings.linearSlop);
            var tolerance = .25 * Settings.linearSlop;
            _ASSERT && common.assert(target > tolerance);
            var t1 = 0;
            var k_maxIterations = Settings.maxTOIIterations;
            var iter = 0;
            var cache = new SimplexCache;
            var distanceInput = new DistanceInput;
            distanceInput.proxyA = input.proxyA;
            distanceInput.proxyB = input.proxyB;
            distanceInput.useRadii = false;
            for (;;) {
                var xfA = Transform.identity();
                var xfB = Transform.identity();
                sweepA.getTransform(xfA, t1);
                sweepB.getTransform(xfB, t1);
                distanceInput.transformA = xfA;
                distanceInput.transformB = xfB;
                var distanceOutput = new DistanceOutput;
                Distance(distanceOutput, cache, distanceInput);
                if (distanceOutput.distance <= 0) {
                    output.state = TOIOutput.e_overlapped;
                    output.t = 0;
                    break
                }
                if (distanceOutput.distance < target + tolerance) {
                    output.state = TOIOutput.e_touching;
                    output.t = t1;
                    break
                }
                var fcn = new SeparationFunction;
                fcn.initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);
                if (false) {
                    var N = 100;
                    var dx = 1 / N;
                    var xs = [];
                    var fs = [];
                    var x = 0;
                    for (var i = 0; i <= N; ++i) {
                        sweepA.getTransform(xfA, x);
                        sweepB.getTransform(xfB, x);
                        var f = fcn.evaluate(xfA, xfB) - target;
                        printf("%g %g\n", x, f);
                        xs[i] = x;
                        fs[i] = f;
                        x += dx
                    }
                }
                var done = false;
                var t2 = tMax;
                var pushBackIter = 0;
                for (;;) {
                    var s2 = fcn.findMinSeparation(t2);
                    var indexA = fcn.indexA;
                    var indexB = fcn.indexB;
                    if (s2 > target + tolerance) {
                        output.state = TOIOutput.e_separated;
                        output.t = tMax;
                        done = true;
                        break
                    }
                    if (s2 > target - tolerance) {
                        t1 = t2;
                        break
                    }
                    var s1 = fcn.evaluate(t1);
                    var indexA = fcn.indexA;
                    var indexB = fcn.indexB;
                    if (s1 < target - tolerance) {
                        output.state = TOIOutput.e_failed;
                        output.t = t1;
                        done = true;
                        break
                    }
                    if (s1 <= target + tolerance) {
                        output.state = TOIOutput.e_touching;
                        output.t = t1;
                        done = true;
                        break
                    }
                    var rootIterCount = 0;
                    var a1 = t1,
                        a2 = t2;
                    for (;;) {
                        var t;
                        if (rootIterCount & 1) {
                            t = a1 + (target - s1) * (a2 - a1) / (s2 - s1)
                        } else {
                            t = .5 * (a1 + a2)
                        }++rootIterCount;
                        ++stats.toiRootIters;
                        var s = fcn.evaluate(t);
                        var indexA = fcn.indexA;
                        var indexB = fcn.indexB;
                        if (Math.abs(s - target) < tolerance) {
                            t2 = t;
                            break
                        }
                        if (s > target) {
                            a1 = t;
                            s1 = s
                        } else {
                            a2 = t;
                            s2 = s
                        }
                        if (rootIterCount == 50) {
                            break
                        }
                    }
                    stats.toiMaxRootIters = Math.max(stats.toiMaxRootIters, rootIterCount);
                    ++pushBackIter;
                    if (pushBackIter == Settings.maxPolygonVertices) {
                        break
                    }
                }++iter;
                ++stats.toiIters;
                if (done) {
                    break
                }
                if (iter == k_maxIterations) {
                    output.state = TOIOutput.e_failed;
                    output.t = t1;
                    break
                }
            }
            stats.toiMaxIters = Math.max(stats.toiMaxIters, iter);
            var time = Timer.diff(timer);
            stats.toiMaxTime = Math.max(stats.toiMaxTime, time);
            stats.toiTime += time
        }
        var e_points = 1;
        var e_faceA = 2;
        var e_faceB = 3;

        function SeparationFunction() {
            this.m_proxyA = new DistanceProxy;
            this.m_proxyB = new DistanceProxy;
            this.m_sweepA;
            this.m_sweepB;
            this.m_type;
            this.m_localPoint = Vec2.zero();
            this.m_axis = Vec2.zero()
        }
        SeparationFunction.prototype.initialize = function(cache, proxyA, sweepA, proxyB, sweepB, t1) {
            this.m_proxyA = proxyA;
            this.m_proxyB = proxyB;
            var count = cache.count;
            _ASSERT && common.assert(0 < count && count < 3);
            this.m_sweepA = sweepA;
            this.m_sweepB = sweepB;
            var xfA = Transform.identity();
            var xfB = Transform.identity();
            this.m_sweepA.getTransform(xfA, t1);
            this.m_sweepB.getTransform(xfB, t1);
            if (count == 1) {
                this.m_type = e_points;
                var localPointA = this.m_proxyA.getVertex(cache.indexA[0]);
                var localPointB = this.m_proxyB.getVertex(cache.indexB[0]);
                var pointA = Transform.mulVec2(xfA, localPointA);
                var pointB = Transform.mulVec2(xfB, localPointB);
                this.m_axis.setCombine(1, pointB, -1, pointA);
                var s = this.m_axis.normalize();
                return s
            } else if (cache.indexA[0] == cache.indexA[1]) {
                this.m_type = e_faceB;
                var localPointB1 = proxyB.getVertex(cache.indexB[0]);
                var localPointB2 = proxyB.getVertex(cache.indexB[1]);
                this.m_axis = Vec2.cross(Vec2.sub(localPointB2, localPointB1), 1);
                this.m_axis.normalize();
                var normal = Rot.mulVec2(xfB.q, this.m_axis);
                this.m_localPoint = Vec2.mid(localPointB1, localPointB2);
                var pointB = Transform.mulVec2(xfB, this.m_localPoint);
                var localPointA = proxyA.getVertex(cache.indexA[0]);
                var pointA = Transform.mulVec2(xfA, localPointA);
                var s = Vec2.dot(pointA, normal) - Vec2.dot(pointB, normal);
                if (s < 0) {
                    this.m_axis = Vec2.neg(this.m_axis);
                    s = -s
                }
                return s
            } else {
                this.m_type = e_faceA;
                var localPointA1 = this.m_proxyA.getVertex(cache.indexA[0]);
                var localPointA2 = this.m_proxyA.getVertex(cache.indexA[1]);
                this.m_axis = Vec2.cross(Vec2.sub(localPointA2, localPointA1), 1);
                this.m_axis.normalize();
                var normal = Rot.mulVec2(xfA.q, this.m_axis);
                this.m_localPoint = Vec2.mid(localPointA1, localPointA2);
                var pointA = Transform.mulVec2(xfA, this.m_localPoint);
                var localPointB = this.m_proxyB.getVertex(cache.indexB[0]);
                var pointB = Transform.mulVec2(xfB, localPointB);
                var s = Vec2.dot(pointB, normal) - Vec2.dot(pointA, normal);
                if (s < 0) {
                    this.m_axis = Vec2.neg(this.m_axis);
                    s = -s
                }
                return s
            }
        };
        SeparationFunction.prototype.compute = function(find, t) {
            var xfA = Transform.identity();
            var xfB = Transform.identity();
            this.m_sweepA.getTransform(xfA, t);
            this.m_sweepB.getTransform(xfB, t);
            switch (this.m_type) {
                case e_points: {
                    if (find) {
                        var axisA = Rot.mulTVec2(xfA.q, this.m_axis);
                        var axisB = Rot.mulTVec2(xfB.q, Vec2.neg(this.m_axis));
                        this.indexA = this.m_proxyA.getSupport(axisA);
                        this.indexB = this.m_proxyB.getSupport(axisB)
                    }
                    var localPointA = this.m_proxyA.getVertex(this.indexA);
                    var localPointB = this.m_proxyB.getVertex(this.indexB);
                    var pointA = Transform.mulVec2(xfA, localPointA);
                    var pointB = Transform.mulVec2(xfB, localPointB);
                    var sep = Vec2.dot(pointB, this.m_axis) - Vec2.dot(pointA, this.m_axis);
                    return sep
                }
                case e_faceA: {
                    var normal = Rot.mulVec2(xfA.q, this.m_axis);
                    var pointA = Transform.mulVec2(xfA, this.m_localPoint);
                    if (find) {
                        var axisB = Rot.mulTVec2(xfB.q, Vec2.neg(normal));
                        this.indexA = -1;
                        this.indexB = this.m_proxyB.getSupport(axisB)
                    }
                    var localPointB = this.m_proxyB.getVertex(this.indexB);
                    var pointB = Transform.mulVec2(xfB, localPointB);
                    var sep = Vec2.dot(pointB, normal) - Vec2.dot(pointA, normal);
                    return sep
                }
                case e_faceB: {
                    var normal = Rot.mulVec2(xfB.q, this.m_axis);
                    var pointB = Transform.mulVec2(xfB, this.m_localPoint);
                    if (find) {
                        var axisA = Rot.mulTVec2(xfA.q, Vec2.neg(normal));
                        this.indexB = -1;
                        this.indexA = this.m_proxyA.getSupport(axisA)
                    }
                    var localPointA = this.m_proxyA.getVertex(this.indexA);
                    var pointA = Transform.mulVec2(xfA, localPointA);
                    var sep = Vec2.dot(pointA, normal) - Vec2.dot(pointB, normal);
                    return sep
                }
                default:
                    _ASSERT && common.assert(false);
                    if (find) {
                        this.indexA = -1;
                        this.indexB = -1
                    }
                    return 0
            }
        };
        SeparationFunction.prototype.findMinSeparation = function(t) {
            return this.compute(true, t)
        };
        SeparationFunction.prototype.evaluate = function(t) {
            return this.compute(false, t)
        }
    }, {
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../common/stats": 28,
        "../util/Timer": 52,
        "../util/common": 53,
        "./Distance": 15
    }],
    18: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Mat22;
        var common = require("../util/common");
        var Math = require("./Math");
        var Vec2 = require("./Vec2");

        function Mat22(a, b, c, d) {
            if (typeof a === "object" && a !== null) {
                this.ex = Vec2.clone(a);
                this.ey = Vec2.clone(b)
            } else if (typeof a === "number") {
                this.ex = Vec2.neo(a, c);
                this.ey = Vec2.neo(b, d)
            } else {
                this.ex = Vec2.zero();
                this.ey = Vec2.zero()
            }
        }
        Mat22.prototype.toString = function() {
            return JSON.stringify(this)
        };
        Mat22.isValid = function(o) {
            return o && Vec2.isValid(o.ex) && Vec2.isValid(o.ey)
        };
        Mat22.assert = function(o) {
            if (!_ASSERT) return;
            if (!Mat22.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid Mat22!")
            }
        };
        Mat22.prototype.set = function(a, b, c, d) {
            if (typeof a === "number" && typeof b === "number" && typeof c === "number" && typeof d === "number") {
                this.ex.set(a, c);
                this.ey.set(b, d)
            } else if (typeof a === "object" && typeof b === "object") {
                this.ex.set(a);
                this.ey.set(b)
            } else if (typeof a === "object") {
                _ASSERT && Mat22.assert(a);
                this.ex.set(a.ex);
                this.ey.set(a.ey)
            } else {
                _ASSERT && common.assert(false)
            }
        };
        Mat22.prototype.setIdentity = function() {
            this.ex.x = 1;
            this.ey.x = 0;
            this.ex.y = 0;
            this.ey.y = 1
        };
        Mat22.prototype.setZero = function() {
            this.ex.x = 0;
            this.ey.x = 0;
            this.ex.y = 0;
            this.ey.y = 0
        };
        Mat22.prototype.getInverse = function() {
            var a = this.ex.x;
            var b = this.ey.x;
            var c = this.ex.y;
            var d = this.ey.y;
            var det = a * d - b * c;
            if (det != 0) {
                det = 1 / det
            }
            var imx = new Mat22;
            imx.ex.x = det * d;
            imx.ey.x = -det * b;
            imx.ex.y = -det * c;
            imx.ey.y = det * a;
            return imx
        };
        Mat22.prototype.solve = function(v) {
            _ASSERT && Vec2.assert(v);
            var a = this.ex.x;
            var b = this.ey.x;
            var c = this.ex.y;
            var d = this.ey.y;
            var det = a * d - b * c;
            if (det != 0) {
                det = 1 / det
            }
            var w = Vec2.zero();
            w.x = det * (d * v.x - b * v.y);
            w.y = det * (a * v.y - c * v.x);
            return w
        };
        Mat22.mul = function(mx, v) {
            if (v && "x" in v && "y" in v) {
                _ASSERT && Vec2.assert(v);
                var x = mx.ex.x * v.x + mx.ey.x * v.y;
                var y = mx.ex.y * v.x + mx.ey.y * v.y;
                return Vec2.neo(x, y)
            } else if (v && "ex" in v && "ey" in v) {
                _ASSERT && Mat22.assert(v);
                return new Mat22(Vec2.mul(mx, v.ex), Vec2.mul(mx, v.ey))
            }
            _ASSERT && common.assert(false)
        };
        Mat22.mulVec2 = function(mx, v) {
            _ASSERT && Vec2.assert(v);
            var x = mx.ex.x * v.x + mx.ey.x * v.y;
            var y = mx.ex.y * v.x + mx.ey.y * v.y;
            return Vec2.neo(x, y)
        };
        Mat22.mulVec2_ = function(mx, v, _) {
            _ASSERT && Vec2.assert(v);
            var x = mx.ex.x * v.x + mx.ey.x * v.y;
            var y = mx.ex.y * v.x + mx.ey.y * v.y;
            return _.set(x, y)
        };
        Mat22.mulMat22 = function(mx, v) {
            _ASSERT && Mat22.assert(v);
            return new Mat22(Vec2.mul(mx, v.ex), Vec2.mul(mx, v.ey));
            _ASSERT && common.assert(false)
        };
        Mat22.mulT = function(mx, v) {
            if (v && "x" in v && "y" in v) {
                _ASSERT && Vec2.assert(v);
                return Vec2.neo(Vec2.dot(v, mx.ex), Vec2.dot(v, mx.ey))
            } else if (v && "ex" in v && "ey" in v) {
                _ASSERT && Mat22.assert(v);
                var c1 = Vec2.neo(Vec2.dot(mx.ex, v.ex), Vec2.dot(mx.ey, v.ex));
                var c2 = Vec2.neo(Vec2.dot(mx.ex, v.ey), Vec2.dot(mx.ey, v.ey));
                return new Mat22(c1, c2)
            }
            _ASSERT && common.assert(false)
        };
        Mat22.mulTVec2 = function(mx, v) {
            _ASSERT && Mat22.assert(mx);
            _ASSERT && Vec2.assert(v);
            return Vec2.neo(Vec2.dot(v, mx.ex), Vec2.dot(v, mx.ey))
        };
        Mat22.mulTMat22 = function(mx, v) {
            _ASSERT && Mat22.assert(mx);
            _ASSERT && Mat22.assert(v);
            var c1 = Vec2.neo(Vec2.dot(mx.ex, v.ex), Vec2.dot(mx.ey, v.ex));
            var c2 = Vec2.neo(Vec2.dot(mx.ex, v.ey), Vec2.dot(mx.ey, v.ey));
            return new Mat22(c1, c2)
        };
        Mat22.abs = function(mx) {
            _ASSERT && Mat22.assert(mx);
            return new Mat22(Vec2.abs(mx.ex), Vec2.abs(mx.ey))
        };
        Mat22.add = function(mx1, mx2) {
            _ASSERT && Mat22.assert(mx1);
            _ASSERT && Mat22.assert(mx2);
            return new Mat22(Vec2.add(mx1.ex + mx2.ex), Vec2.add(mx1.ey + mx2.ey))
        }
    }, {
        "../util/common": 53,
        "./Math": 20,
        "./Vec2": 25
    }],
    19: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Mat33;
        var common = require("../util/common");
        var Math = require("./Math");
        var Vec2 = require("./Vec2");
        var Vec3 = require("./Vec3");

        function Mat33(a, b, c) {
            if (typeof a === "object" && a !== null) {
                this.ex = Vec3.clone(a);
                this.ey = Vec3.clone(b);
                this.ez = Vec3.clone(c)
            } else {
                this.ex = Vec3();
                this.ey = Vec3();
                this.ez = Vec3()
            }
        }
        Mat33.prototype.toString = function() {
            return JSON.stringify(this)
        };
        Mat33.isValid = function(o) {
            return o && Vec3.isValid(o.ex) && Vec3.isValid(o.ey) && Vec3.isValid(o.ez)
        };
        Mat33.assert = function(o) {
            if (!_ASSERT) return;
            if (!Mat33.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid Mat33!")
            }
        };
        Mat33.prototype.setZero = function() {
            this.ex.setZero();
            this.ey.setZero();
            this.ez.setZero();
            return this
        };
        Mat33.prototype.solve33 = function(v) {
            var det = Vec3.dot(this.ex, Vec3.cross(this.ey, this.ez));
            if (det != 0) {
                det = 1 / det
            }
            var r = new Vec3;
            r.x = det * Vec3.dot(v, Vec3.cross(this.ey, this.ez));
            r.y = det * Vec3.dot(this.ex, Vec3.cross(v, this.ez));
            r.z = det * Vec3.dot(this.ex, Vec3.cross(this.ey, v));
            return r
        };
        Mat33.prototype.solve22 = function(v) {
            var a11 = this.ex.x;
            var a12 = this.ey.x;
            var a21 = this.ex.y;
            var a22 = this.ey.y;
            var det = a11 * a22 - a12 * a21;
            if (det != 0) {
                det = 1 / det
            }
            var r = Vec2.zero();
            r.x = det * (a22 * v.x - a12 * v.y);
            r.y = det * (a11 * v.y - a21 * v.x);
            return r
        };
        Mat33.prototype.getInverse22 = function(M) {
            var a = this.ex.x;
            var b = this.ey.x;
            var c = this.ex.y;
            var d = this.ey.y;
            var det = a * d - b * c;
            if (det != 0) {
                det = 1 / det
            }
            M.ex.x = det * d;
            M.ey.x = -det * b;
            M.ex.z = 0;
            M.ex.y = -det * c;
            M.ey.y = det * a;
            M.ey.z = 0;
            M.ez.x = 0;
            M.ez.y = 0;
            M.ez.z = 0
        };
        Mat33.prototype.getSymInverse33 = function(M) {
            var det = Vec3.dot(this.ex, Vec3.cross(this.ey, this.ez));
            if (det != 0) {
                det = 1 / det
            }
            var a11 = this.ex.x;
            var a12 = this.ey.x;
            var a13 = this.ez.x;
            var a22 = this.ey.y;
            var a23 = this.ez.y;
            var a33 = this.ez.z;
            M.ex.x = det * (a22 * a33 - a23 * a23);
            M.ex.y = det * (a13 * a23 - a12 * a33);
            M.ex.z = det * (a12 * a23 - a13 * a22);
            M.ey.x = M.ex.y;
            M.ey.y = det * (a11 * a33 - a13 * a13);
            M.ey.z = det * (a13 * a12 - a11 * a23);
            M.ez.x = M.ex.z;
            M.ez.y = M.ey.z;
            M.ez.z = det * (a11 * a22 - a12 * a12)
        };
        Mat33.mul = function(a, b) {
            _ASSERT && Mat33.assert(a);
            if (b && "z" in b && "y" in b && "x" in b) {
                _ASSERT && Vec3.assert(b);
                var x = a.ex.x * b.x + a.ey.x * b.y + a.ez.x * b.z;
                var y = a.ex.y * b.x + a.ey.y * b.y + a.ez.y * b.z;
                var z = a.ex.z * b.x + a.ey.z * b.y + a.ez.z * b.z;
                return new Vec3(x, y, z)
            } else if (b && "y" in b && "x" in b) {
                _ASSERT && Vec2.assert(b);
                var x = a.ex.x * b.x + a.ey.x * b.y;
                var y = a.ex.y * b.x + a.ey.y * b.y;
                return Vec2.neo(x, y)
            }
            _ASSERT && common.assert(false)
        };
        Mat33.mulVec3 = function(a, b) {
            _ASSERT && Mat33.assert(a);
            _ASSERT && Vec3.assert(b);
            var x = a.ex.x * b.x + a.ey.x * b.y + a.ez.x * b.z;
            var y = a.ex.y * b.x + a.ey.y * b.y + a.ez.y * b.z;
            var z = a.ex.z * b.x + a.ey.z * b.y + a.ez.z * b.z;
            return new Vec3(x, y, z)
        };
        Mat33.mulVec2 = function(a, b) {
            _ASSERT && Mat33.assert(a);
            _ASSERT && Vec2.assert(b);
            var x = a.ex.x * b.x + a.ey.x * b.y;
            var y = a.ex.y * b.x + a.ey.y * b.y;
            return Vec2.neo(x, y)
        };
        Mat33.add = function(a, b) {
            _ASSERT && Mat33.assert(a);
            _ASSERT && Mat33.assert(b);
            return new Mat33(Vec3.add(a.ex + b.ex), Vec3.add(a.ey + b.ey), Vec3.add(a.ez + b.ez))
        }
    }, {
        "../util/common": 53,
        "./Math": 20,
        "./Vec2": 25,
        "./Vec3": 26
    }],
    20: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("../util/common");
        var create = require("../util/create");
        var native = Math;
        var math = module.exports = create(native);
        math.EPSILON = 1e-9;
        math.isFinite = function(x) {
            return typeof x === "number" && isFinite(x) && !isNaN(x)
        };
        math.assert = function(x) {
            if (!_ASSERT) return;
            if (!math.isFinite(x)) {
                _DEBUG && common.debug(x);
                throw new Error("Invalid Number!")
            }
        };
        math.invSqrt = function(x) {
            return 1 / native.sqrt(x)
        };
        math.nextPowerOfTwo = function(x) {
            x |= x >> 1;
            x |= x >> 2;
            x |= x >> 4;
            x |= x >> 8;
            x |= x >> 16;
            return x + 1
        };
        math.isPowerOfTwo = function(x) {
            return x > 0 && (x & x - 1) == 0
        };
        math.mod = function(num, min, max) {
            if (typeof min === "undefined") {
                max = 1, min = 0
            } else if (typeof max === "undefined") {
                max = min, min = 0
            }
            if (max > min) {
                num = (num - min) % (max - min);
                return num + (num < 0 ? max : min)
            } else {
                num = (num - max) % (min - max);
                return num + (num <= 0 ? min : max)
            }
        };
        math.clamp = function(num, min, max) {
            if (num < min) {
                return min
            } else if (num > max) {
                return max
            } else {
                return num
            }
        };
        math.random = function(min, max) {
            if (typeof min === "undefined") {
                max = 1;
                min = 0
            } else if (typeof max === "undefined") {
                max = min;
                min = 0
            }
            return min == max ? min : native.random() * (max - min) + min
        }
    }, {
        "../util/common": 53,
        "../util/create": 54
    }],
    21: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Position;
        var Vec2 = require("./Vec2");
        var Rot = require("./Rot");

        function Position() {
            this.c = Vec2.zero();
            this.a = 0
        }
        Position.prototype.getTransform = function(xf, p) {
            xf.q.set(this.a);
            xf.p.set(Vec2.sub(this.c, Rot.mulVec2(xf.q, p)));
            return xf
        }
    }, {
        "./Rot": 22,
        "./Vec2": 25
    }],
    22: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Rot;
        var common = require("../util/common");
        var Vec2 = require("./Vec2");
        var Math = require("./Math");

        function Rot(angle) {
            if (!(this instanceof Rot)) {
                return new Rot(angle)
            }
            if (typeof angle === "number") {
                this.setAngle(angle)
            } else if (typeof angle === "object") {
                this.set(angle)
            } else {
                this.setIdentity()
            }
        }
        Rot.neo = function(angle) {
            var obj = Object.create(Rot.prototype);
            obj.setAngle(angle);
            return obj
        };
        Rot.clone = function(rot) {
            _ASSERT && Rot.assert(rot);
            var obj = Object.create(Rot.prototype);
            obj.s = rot.s;
            obj.c = rot.c;
            return obj
        };
        Rot.identity = function() {
            var obj = Object.create(Rot.prototype);
            obj.s = 0;
            obj.c = 1;
            return obj
        };
        Rot.isValid = function(o) {
            return o && Math.isFinite(o.s) && Math.isFinite(o.c)
        };
        Rot.assert = function(o) {
            if (!_ASSERT) return;
            if (!Rot.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid Rot!")
            }
        };
        Rot.prototype.setIdentity = function() {
            this.s = 0;
            this.c = 1;
            return this
        };
        Rot.prototype.set = function(angle) {
            if (typeof angle === "object") {
                _ASSERT && Rot.assert(angle);
                this.s = angle.s;
                this.c = angle.c
            } else {
                _ASSERT && Math.assert(angle);
                this.s = Math.sin(angle);
                this.c = Math.cos(angle)
            }
        };
        Rot.prototype.setAngle = function(angle) {
            _ASSERT && Math.assert(angle);
            this.s = Math.sin(angle);
            this.c = Math.cos(angle)
        };
        Rot.prototype.getAngle = function() {
            return Math.atan2(this.s, this.c)
        };
        Rot.prototype.getXAxis = function() {
            return Vec2.neo(this.c, this.s)
        };
        Rot.prototype.getYAxis = function() {
            return Vec2.neo(-this.s, this.c)
        };
        Rot.mul = function(rot, m) {
            _ASSERT && Rot.assert(rot);
            if ("c" in m && "s" in m) {
                _ASSERT && Rot.assert(m);
                var qr = Rot.identity();
                qr.s = rot.s * m.c + rot.c * m.s;
                qr.c = rot.c * m.c - rot.s * m.s;
                return qr
            } else if ("x" in m && "y" in m) {
                _ASSERT && Vec2.assert(m);
                return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y)
            }
        };
        Rot.mulRot = function(rot, m) {
            _ASSERT && Rot.assert(rot);
            _ASSERT && Rot.assert(m);
            var qr = Rot.identity();
            qr.s = rot.s * m.c + rot.c * m.s;
            qr.c = rot.c * m.c - rot.s * m.s;
            return qr
        };
        Rot.mulVec2 = function(rot, m) {
            _ASSERT && Rot.assert(rot);
            _ASSERT && Vec2.assert(m);
            return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y)
        };
        Rot.mulVec2_ = function(rot, m, _) {
            _ASSERT && Rot.assert(rot);
            _ASSERT && Vec2.assert(m);
            return _.set(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y)
        };
        Rot.mulSub = function(rot, v, w) {
            var x = rot.c * (v.x - w.x) - rot.s * (v.y - w.y);
            var y = rot.s * (v.x - w.y) + rot.c * (v.y - w.y);
            return Vec2.neo(x, y)
        };
        Rot.mulT = function(rot, m) {
            if ("c" in m && "s" in m) {
                _ASSERT && Rot.assert(m);
                var qr = Rot.identity();
                qr.s = rot.c * m.s - rot.s * m.c;
                qr.c = rot.c * m.c + rot.s * m.s;
                return qr
            } else if ("x" in m && "y" in m) {
                _ASSERT && Vec2.assert(m);
                return Vec2.neo(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y)
            }
        };
        Rot.mulTRot = function(rot, m) {
            _ASSERT && Rot.assert(m);
            var qr = Rot.identity();
            qr.s = rot.c * m.s - rot.s * m.c;
            qr.c = rot.c * m.c + rot.s * m.s;
            return qr
        };
        Rot.mulTRot_ = function(rot, m, _) {
            _ASSERT && Rot.assert(m);
            var qr = _.setIdentity();
            qr.s = rot.c * m.s - rot.s * m.c;
            qr.c = rot.c * m.c + rot.s * m.s;
            return qr
        };
        Rot.mulTVec2 = function(rot, m) {
            _ASSERT && Vec2.assert(m);
            return Vec2.neo(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y)
        };
        Rot.mulTVec2_ = function(rot, m, _) {
            _ASSERT && Vec2.assert(m);
            return _.set(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y)
        }
    }, {
        "../util/common": 53,
        "./Math": 20,
        "./Vec2": 25
    }],
    23: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Sweep;
        var common = require("../util/common");
        var Math = require("./Math");
        var Vec2 = require("./Vec2");
        var Rot = require("./Rot");
        var Transform = require("./Transform");

        function Sweep(c, a) {
            _ASSERT && common.assert(typeof c === "undefined");
            _ASSERT && common.assert(typeof a === "undefined");
            this.localCenter = Vec2.zero();
            this.c = Vec2.zero();
            this.a = 0;
            this.alpha0 = 0;
            this.c0 = Vec2.zero();
            this.a0 = 0
        }
        Sweep.prototype.setTransform = function(xf) {
            var c = Transform.mulVec2(xf, this.localCenter);
            this.c.set(c);
            this.c0.set(c);
            this.a = xf.q.getAngle();
            this.a0 = xf.q.getAngle()
        };
        Sweep.prototype.setLocalCenter = function(localCenter, xf) {
            this.localCenter.set(localCenter);
            var c = Transform.mulVec2(xf, this.localCenter);
            this.c.set(c);
            this.c0.set(c)
        };
        Sweep.prototype.getTransform = function(xf, beta) {
            beta = typeof beta === "undefined" ? 0 : beta;
            xf.q.setAngle((1 - beta) * this.a0 + beta * this.a);
            xf.p.setCombine(1 - beta, this.c0, beta, this.c);
            xf.p.sub(Rot.mulVec2(xf.q, this.localCenter))
        };
        Sweep.prototype.advance = function(alpha) {
            _ASSERT && common.assert(this.alpha0 < 1);
            var beta = (alpha - this.alpha0) / (1 - this.alpha0);
            this.c0.setCombine(beta, this.c, 1 - beta, this.c0);
            this.a0 = beta * this.a + (1 - beta) * this.a0;
            this.alpha0 = alpha
        };
        Sweep.prototype.forward = function() {
            this.a0 = this.a;
            this.c0.set(this.c)
        };
        Sweep.prototype.normalize = function() {
            var a0 = Math.mod(this.a0, -Math.PI, +Math.PI);
            this.a -= this.a0 - a0;
            this.a0 = a0
        };
        Sweep.prototype.clone = function() {
            var clone = new Sweep;
            clone.localCenter.set(this.localCenter);
            clone.alpha0 = this.alpha0;
            clone.a0 = this.a0;
            clone.a = this.a;
            clone.c0.set(this.c0);
            clone.c.set(this.c);
            return clone
        };
        Sweep.prototype.set = function(that) {
            this.localCenter.set(that.localCenter);
            this.alpha0 = that.alpha0;
            this.a0 = that.a0;
            this.a = that.a;
            this.c0.set(that.c0);
            this.c.set(that.c)
        }
    }, {
        "../util/common": 53,
        "./Math": 20,
        "./Rot": 22,
        "./Transform": 24,
        "./Vec2": 25
    }],
    24: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Transform;
        var common = require("../util/common");
        var Vec2 = require("./Vec2");
        var Rot = require("./Rot");

        function Transform(position, rotation) {
            if (!(this instanceof Transform)) {
                return new Transform(position, rotation)
            }
            this.p = Vec2.zero();
            this.q = Rot.identity();
            if (typeof position !== "undefined") {
                this.p.set(position)
            }
            if (typeof rotation !== "undefined") {
                this.q.set(rotation)
            }
        }
        Transform.clone = function(xf) {
            var obj = Object.create(Transform.prototype);
            obj.p = Vec2.clone(xf.p);
            obj.q = Rot.clone(xf.q);
            return obj
        };
        Transform.neo = function(position, rotation) {
            var obj = Object.create(Transform.prototype);
            obj.p = Vec2.clone(position);
            obj.q = Rot.clone(rotation);
            return obj
        };
        Transform.identity = function() {
            var obj = Object.create(Transform.prototype);
            obj.p = Vec2.zero();
            obj.q = Rot.identity();
            return obj
        };
        Transform.prototype.setIdentity = function() {
            this.p.setZero();
            this.q.setIdentity();
            return this
        };
        Transform.prototype.set = function(a, b) {
            if (typeof b === "undefined") {
                this.p.set(a.p);
                this.q.set(a.q)
            } else {
                this.p.set(a);
                this.q.set(b)
            }
        };
        Transform.isValid = function(o) {
            return o && Vec2.isValid(o.p) && Rot.isValid(o.q)
        };
        Transform.assert = function(o) {
            if (!_ASSERT) return;
            if (!Transform.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid Transform!")
            }
        };
        Transform.mul = function(a, b) {
            _ASSERT && Transform.assert(a);
            if (Array.isArray(b)) {
                var arr = [];
                for (var i = 0; i < b.length; i++) {
                    arr[i] = Transform.mul(a, b[i])
                }
                return arr
            } else if ("x" in b && "y" in b) {
                _ASSERT && Vec2.assert(b);
                var x = a.q.c * b.x - a.q.s * b.y + a.p.x;
                var y = a.q.s * b.x + a.q.c * b.y + a.p.y;
                return Vec2.neo(x, y)
            } else if ("p" in b && "q" in b) {
                _ASSERT && Transform.assert(b);
                var xf = Transform.identity();
                xf.q = Rot.mulRot(a.q, b.q);
                xf.p = Vec2.add(Rot.mulVec2(a.q, b.p), a.p);
                return xf
            }
        };
        Transform.mulAll = function(a, b) {
            _ASSERT && Transform.assert(a);
            var arr = [];
            for (var i = 0; i < b.length; i++) {
                arr[i] = Transform.mul(a, b[i])
            }
            return arr
        };
        Transform.mulFn = function(a) {
            _ASSERT && Transform.assert(a);
            return function(b) {
                return Transform.mul(a, b)
            }
        };
        Transform.mulVec2 = function(a, b) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Vec2.assert(b);
            var x = a.q.c * b.x - a.q.s * b.y + a.p.x;
            var y = a.q.s * b.x + a.q.c * b.y + a.p.y;
            return Vec2.neo(x, y)
        };
        Transform.mulVec2_ = function(a, b, _) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Vec2.assert(b);
            var x = a.q.c * b.x - a.q.s * b.y + a.p.x;
            var y = a.q.s * b.x + a.q.c * b.y + a.p.y;
            return _.set(x, y)
        };
        Transform.mulXf = function(a, b) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Transform.assert(b);
            var xf = Transform.identity();
            xf.q = Rot.mulRot(a.q, b.q);
            xf.p = Vec2.add(Rot.mulVec2(a.q, b.p), a.p);
            return xf
        };
        Transform.mulT = function(a, b) {
            _ASSERT && Transform.assert(a);
            if ("x" in b && "y" in b) {
                _ASSERT && Vec2.assert(b);
                var px = b.x - a.p.x;
                var py = b.y - a.p.y;
                var x = a.q.c * px + a.q.s * py;
                var y = -a.q.s * px + a.q.c * py;
                return Vec2.neo(x, y)
            } else if ("p" in b && "q" in b) {
                _ASSERT && Transform.assert(b);
                var xf = Transform.identity();
                xf.q.set(Rot.mulTRot(a.q, b.q));
                xf.p.set(Rot.mulTVec2(a.q, Vec2.sub(b.p, a.p)));
                return xf
            }
        };
        Transform.mulTVec2 = function(a, b) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Vec2.assert(b);
            var px = b.x - a.p.x;
            var py = b.y - a.p.y;
            var x = a.q.c * px + a.q.s * py;
            var y = -a.q.s * px + a.q.c * py;
            return Vec2.neo(x, y)
        };
        Transform.mulTVec2_ = function(a, b, _) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Vec2.assert(b);
            var px = b.x - a.p.x;
            var py = b.y - a.p.y;
            var x = a.q.c * px + a.q.s * py;
            var y = -a.q.s * px + a.q.c * py;
            return _.set(x, y)
        };
        Transform.mulTXf = function(a, b) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Transform.assert(b);
            var xf = Transform.identity();
            xf.q.set(Rot.mulTRot(a.q, b.q));
            xf.p.set(Rot.mulTVec2(a.q, Vec2.sub(b.p, a.p)));
            return xf
        };
        var _vt1 = Vec2.zero();
        Transform.mulTXf_ = function(a, b, _) {
            _ASSERT && Transform.assert(a);
            _ASSERT && Transform.assert(b);
            Rot.mulTRot_(a.q, b.q, _.q);
            Rot.mulTVec2_(a.q, Vec2.sub(b.p, a.p, _vt1), _.p);
            return _
        }
    }, {
        "../util/common": 53,
        "./Rot": 22,
        "./Vec2": 25
    }],
    25: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Vec2;
        var common = require("../util/common");
        var Math = require("./Math");

        function Vec2(x, y) {
            if (!(this instanceof Vec2)) {
                return new Vec2(x, y)
            }
            if (typeof x === "undefined") {
                this.x = 0;
                this.y = 0
            } else if (typeof x === "object") {
                this.x = x.x;
                this.y = x.y
            } else {
                this.x = x;
                this.y = y
            }
            _ASSERT && Vec2.assert(this)
        }
        Vec2.zero = function() {
            var obj = Object.create(Vec2.prototype);
            obj.x = 0;
            obj.y = 0;
            return obj
        };
        Vec2.neo = function(x, y) {
            var obj = Object.create(Vec2.prototype);
            obj.x = x;
            obj.y = y;
            return obj
        };
        Vec2.clone = function(v) {
            _ASSERT && Vec2.assert(v);
            return Vec2.neo(v.x, v.y)
        };
        Vec2.prototype.toString = function() {
            return JSON.stringify(this)
        };
        Vec2.isValid = function(v) {
            return v && Math.isFinite(v.x) && Math.isFinite(v.y)
        };
        Vec2.assert = function(o) {
            if (!_ASSERT) return;
            if (!Vec2.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid Vec2!")
            }
        };
        Vec2.prototype.clone = function() {
            return Vec2.clone(this)
        };
        Vec2.prototype.setZero = function() {
            this.x = 0;
            this.y = 0;
            return this
        };
        Vec2.prototype.set = function(x, y) {
            if (typeof x === "object") {
                _ASSERT && Vec2.assert(x);
                this.x = x.x;
                this.y = x.y
            } else {
                _ASSERT && Math.assert(x);
                _ASSERT && Math.assert(y);
                this.x = x;
                this.y = y
            }
            return this
        };
        Vec2.prototype.setXY = function(x, y) {
            this.x = x;
            this.y = y;
            return this
        };
        Vec2.prototype.setVec2 = function(x) {
            this.x = x.x;
            this.y = x.y;
            return this
        };
        Vec2.prototype.wSet = function(a, v, b, w) {
            if (typeof b !== "undefined" || typeof w !== "undefined") {
                return this.setCombine(a, v, b, w)
            } else {
                return this.setMul(a, v)
            }
        };
        Vec2.prototype.setCombine = function(a, v, b, w) {
            _ASSERT && Math.assert(a);
            _ASSERT && Vec2.assert(v);
            _ASSERT && Math.assert(b);
            _ASSERT && Vec2.assert(w);
            var x = a * v.x + b * w.x;
            var y = a * v.y + b * w.y;
            this.x = x;
            this.y = y;
            return this
        };
        Vec2.prototype.setMul = function(a, v) {
            _ASSERT && Math.assert(a);
            _ASSERT && Vec2.assert(v);
            var x = a * v.x;
            var y = a * v.y;
            this.x = x;
            this.y = y;
            return this
        };
        Vec2.prototype.add = function(w) {
            _ASSERT && Vec2.assert(w);
            this.x += w.x;
            this.y += w.y;
            return this
        };
        Vec2.prototype.wAdd = function(a, v, b, w) {
            if (typeof b !== "undefined" || typeof w !== "undefined") {
                return this.addCombine(a, v, b, w)
            } else {
                return this.addMul(a, v)
            }
        };
        Vec2.prototype.addCombine = function(a, v, b, w) {
            _ASSERT && Math.assert(a);
            _ASSERT && Vec2.assert(v);
            _ASSERT && Math.assert(b);
            _ASSERT && Vec2.assert(w);
            var x = a * v.x + b * w.x;
            var y = a * v.y + b * w.y;
            this.x += x;
            this.y += y;
            return this
        };
        Vec2.prototype.addMul = function(a, v) {
            _ASSERT && Math.assert(a);
            _ASSERT && Vec2.assert(v);
            var x = a * v.x;
            var y = a * v.y;
            this.x += x;
            this.y += y;
            return this
        };
        Vec2.prototype.wSub = function(a, v, b, w) {
            if (typeof b !== "undefined" || typeof w !== "undefined") {
                return this.subCombine(a, v, b, w)
            } else {
                return this.subMul(a, v)
            }
        };
        Vec2.prototype.subCombine = function(a, v, b, w) {
            _ASSERT && Math.assert(a);
            _ASSERT && Vec2.assert(v);
            _ASSERT && Math.assert(b);
            _ASSERT && Vec2.assert(w);
            var x = a * v.x + b * w.x;
            var y = a * v.y + b * w.y;
            this.x -= x;
            this.y -= y;
            return this
        };
        Vec2.prototype.subMul = function(a, v) {
            _ASSERT && Math.assert(a);
            _ASSERT && Vec2.assert(v);
            var x = a * v.x;
            var y = a * v.y;
            this.x -= x;
            this.y -= y;
            return this
        };
        Vec2.prototype.sub = function(w) {
            _ASSERT && Vec2.assert(w);
            this.x -= w.x;
            this.y -= w.y;
            return this
        };
        Vec2.prototype.mul = function(m) {
            _ASSERT && Math.assert(m);
            this.x *= m;
            this.y *= m;
            return this
        };
        Vec2.prototype.length = function() {
            return Vec2.lengthOf(this)
        };
        Vec2.prototype.lengthSquared = function() {
            return Vec2.lengthSquared(this)
        };
        Vec2.prototype.normalize = function() {
            var length = this.length();
            if (length < Math.EPSILON) {
                return 0
            }
            var invLength = 1 / length;
            this.x *= invLength;
            this.y *= invLength;
            return length
        };
        Vec2.lengthOf = function(v) {
            _ASSERT && Vec2.assert(v);
            return Math.sqrt(v.x * v.x + v.y * v.y)
        };
        Vec2.lengthSquared = function(v) {
            _ASSERT && Vec2.assert(v);
            return v.x * v.x + v.y * v.y
        };
        Vec2.distance = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            var dx = v.x - w.x,
                dy = v.y - w.y;
            return Math.sqrt(dx * dx + dy * dy)
        };
        Vec2.distanceSquared = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            var dx = v.x - w.x,
                dy = v.y - w.y;
            return dx * dx + dy * dy
        };
        Vec2.areEqual = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return v == w || typeof w === "object" && w !== null && v.x === w.x && v.y === w.y
        };
        Vec2.skew = function(v) {
            _ASSERT && Vec2.assert(v);
            return Vec2.neo(-v.y, v.x)
        };
        Vec2.dot = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return v.x * w.x + v.y * w.y
        };
        Vec2.cross = function(v, w) {
            if (typeof w === "number") {
                _ASSERT && Vec2.assert(v);
                _ASSERT && Math.assert(w);
                return Vec2.neo(w * v.y, -w * v.x)
            } else if (typeof v === "number") {
                _ASSERT && Math.assert(v);
                _ASSERT && Vec2.assert(w);
                return Vec2.neo(-v * w.y, v * w.x)
            } else {
                _ASSERT && Vec2.assert(v);
                _ASSERT && Vec2.assert(w);
                return v.x * w.y - v.y * w.x
            }
        };
        Vec2.crossVec2Vec2 = function(v, w) {
            return v.x * w.y - v.y * w.x
        };
        Vec2.crossNumVec2_ = function(v, w, _) {
            return _.setXY(-v * w.y, v * w.x)
        };
        Vec2.crossVec2Num_ = function(v, w, _) {
            return _.setXY(w * v.y, -w * v.x)
        };
        Vec2.addCross = function(a, v, w) {
            if (typeof w === "number") {
                _ASSERT && Vec2.assert(v);
                _ASSERT && Math.assert(w);
                return Vec2.neo(w * v.y + a.x, -w * v.x + a.y)
            } else if (typeof v === "number") {
                _ASSERT && Math.assert(v);
                _ASSERT && Vec2.assert(w);
                return Vec2.neo(-v * w.y + a.x, v * w.x + a.y)
            }
            _ASSERT && common.assert(false)
        };
        Vec2.add = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return Vec2.neo(v.x + w.x, v.y + w.y)
        };
        Vec2.wAdd = function(a, v, b, w) {
            if (typeof b !== "undefined" || typeof w !== "undefined") {
                return Vec2.combine(a, v, b, w)
            } else {
                return Vec2.mul(a, v)
            }
        };
        Vec2.combine = function(a, v, b, w) {
            return Vec2.zero().setCombine(a, v, b, w)
        };
        Vec2.combine_ = function(a, v, b, w, _) {
            return _.setCombine(a, v, b, w)
        };
        Vec2.sub = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return Vec2.neo(v.x - w.x, v.y - w.y)
        };
        Vec2.sub_ = function(v, w, _) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return _.setXY(v.x - w.x, v.y - w.y)
        };
        Vec2.mul = function(a, b) {
            if (typeof a === "object") {
                _ASSERT && Vec2.assert(a);
                _ASSERT && Math.assert(b);
                return Vec2.neo(a.x * b, a.y * b)
            } else if (typeof b === "object") {
                _ASSERT && Math.assert(a);
                _ASSERT && Vec2.assert(b);
                return Vec2.neo(a * b.x, a * b.y)
            }
        };
        Vec2.mulVec2Num_ = function(a, b, _) {
            return _.setXY(a.x * b, a.y * b)
        };
        Vec2.mulNumVec2_ = function(a, b, _) {
            return _.setXY(a * b.x, a * b.y)
        };
        Vec2.prototype.neg = function() {
            this.x = -this.x;
            this.y = -this.y;
            return this
        };
        Vec2.neg = function(v) {
            _ASSERT && Vec2.assert(v);
            return Vec2.neo(-v.x, -v.y)
        };
        Vec2.neg_ = function(v, _) {
            _ASSERT && Vec2.assert(v);
            return _.setXY(-v.x, -v.y)
        };
        Vec2.abs = function(v) {
            _ASSERT && Vec2.assert(v);
            return Vec2.neo(Math.abs(v.x), Math.abs(v.y))
        };
        Vec2.mid = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return Vec2.neo((v.x + w.x) * .5, (v.y + w.y) * .5)
        };
        Vec2.upper = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return Vec2.neo(Math.max(v.x, w.x), Math.max(v.y, w.y))
        };
        Vec2.lower = function(v, w) {
            _ASSERT && Vec2.assert(v);
            _ASSERT && Vec2.assert(w);
            return Vec2.neo(Math.min(v.x, w.x), Math.min(v.y, w.y))
        };
        Vec2.prototype.clamp = function(max) {
            var lengthSqr = this.x * this.x + this.y * this.y;
            if (lengthSqr > max * max) {
                var invLength = Math.invSqrt(lengthSqr);
                this.x *= invLength * max;
                this.y *= invLength * max
            }
            return this
        };
        Vec2.clamp = function(v, max) {
            v = Vec2.neo(v.x, v.y);
            v.clamp(max);
            return v
        };
        Vec2.scaleFn = function(x, y) {
            return function(v) {
                return Vec2.neo(v.x * x, v.y * y)
            }
        };
        Vec2.translateFn = function(x, y) {
            return function(v) {
                return Vec2.neo(v.x + x, v.y + y)
            }
        }
    }, {
        "../util/common": 53,
        "./Math": 20
    }],
    26: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Vec3;
        var common = require("../util/common");
        var Math = require("./Math");

        function Vec3(x, y, z) {
            if (!(this instanceof Vec3)) {
                return new Vec3(x, y, z)
            }
            if (typeof x === "undefined") {
                this.x = 0, this.y = 0, this.z = 0
            } else if (typeof x === "object") {
                this.x = x.x, this.y = x.y, this.z = x.z
            } else {
                this.x = x, this.y = y, this.z = z
            }
            _ASSERT && Vec3.assert(this)
        }
        Vec3.neo = function(x, y, z) {
            var obj = Object.create(Vec3.prototype);
            obj.x = x;
            obj.y = y;
            obj.z = z;
            return obj
        };
        Vec3.clone = function(v) {
            _ASSERT && Vec3.assert(v);
            return Vec3.neo(v.x, v.y, v.z)
        };
        Vec3.prototype.toString = function() {
            return JSON.stringify(this)
        };
        Vec3.isValid = function(v) {
            return v && Math.isFinite(v.x) && Math.isFinite(v.y) && Math.isFinite(v.z)
        };
        Vec3.assert = function(o) {
            if (!_ASSERT) return;
            if (!Vec3.isValid(o)) {
                _DEBUG && common.debug(o);
                throw new Error("Invalid Vec3!")
            }
        };
        Vec3.prototype.setZero = function() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            return this
        };
        Vec3.prototype.set = function(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
            return this
        };
        Vec3.prototype.add = function(w) {
            this.x += w.x;
            this.y += w.y;
            this.z += w.z;
            return this
        };
        Vec3.prototype.sub = function(w) {
            this.x -= w.x;
            this.y -= w.y;
            this.z -= w.z;
            return this
        };
        Vec3.prototype.mul = function(m) {
            this.x *= m;
            this.y *= m;
            this.z *= m;
            return this
        };
        Vec3.areEqual = function(v, w) {
            _ASSERT && Vec3.assert(v);
            _ASSERT && Vec3.assert(w);
            return v == w || typeof v === "object" && v !== null && typeof w === "object" && w !== null && v.x === w.x && v.y === w.y && v.z === w.z
        };
        Vec3.dot = function(v, w) {
            return v.x * w.x + v.y * w.y + v.z * w.z
        };
        Vec3.cross = function(v, w) {
            return new Vec3(v.y * w.z - v.z * w.y, v.z * w.x - v.x * w.z, v.x * w.y - v.y * w.x)
        };
        Vec3.add = function(v, w) {
            return new Vec3(v.x + w.x, v.y + w.y, v.z + w.z)
        };
        Vec3.sub = function(v, w) {
            return new Vec3(v.x - w.x, v.y - w.y, v.z - w.z)
        };
        Vec3.mul = function(v, m) {
            return new Vec3(m * v.x, m * v.y, m * v.z)
        };
        Vec3.prototype.neg = function() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this
        };
        Vec3.neg = function(v) {
            return new Vec3(-v.x, -v.y, -v.z)
        }
    }, {
        "../util/common": 53,
        "./Math": 20
    }],
    27: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Velocity;
        var Vec2 = require("./Vec2");

        function Velocity() {
            this.v = Vec2.zero();
            this.w = 0
        }
    }, {
        "./Vec2": 25
    }],
    28: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        exports.toString = function(newline) {
            newline = typeof newline === "string" ? newline : "\n";
            var string = "";
            for (var name in this) {
                if (typeof this[name] !== "function" && typeof this[name] !== "object") {
                    string += name + ": " + this[name] + newline
                }
            }
            return string
        }
    }, {}],
    29: [function(require, module, exports) {
        exports.internal = {};
        exports.Math = require("./common/Math");
        exports.Vec2 = require("./common/Vec2");
        exports.Vec3 = require("./common/Vec3");
        exports.Mat22 = require("./common/Mat22");
        exports.Mat33 = require("./common/Mat33");
        exports.Transform = require("./common/Transform");
        exports.Rot = require("./common/Rot");
        exports.AABB = require("./collision/AABB");
        exports.Shape = require("./Shape");
        exports.Fixture = require("./Fixture");
        exports.Body = require("./Body");
        exports.Contact = require("./Contact");
        exports.Joint = require("./Joint");
        exports.World = require("./World");
        exports.Circle = require("./shape/CircleShape");
        exports.Edge = require("./shape/EdgeShape");
        exports.Polygon = require("./shape/PolygonShape");
        exports.Chain = require("./shape/ChainShape");
        exports.Box = require("./shape/BoxShape");
        require("./shape/CollideCircle");
        require("./shape/CollideEdgeCircle");
        exports.internal.CollidePolygons = require("./shape/CollidePolygon");
        require("./shape/CollideCirclePolygone");
        require("./shape/CollideEdgePolygon");
        exports.DistanceJoint = require("./joint/DistanceJoint");
        exports.FrictionJoint = require("./joint/FrictionJoint");
        exports.GearJoint = require("./joint/GearJoint");
        exports.MotorJoint = require("./joint/MotorJoint");
        exports.MouseJoint = require("./joint/MouseJoint");
        exports.PrismaticJoint = require("./joint/PrismaticJoint");
        exports.PulleyJoint = require("./joint/PulleyJoint");
        exports.RevoluteJoint = require("./joint/RevoluteJoint");
        exports.RopeJoint = require("./joint/RopeJoint");
        exports.WeldJoint = require("./joint/WeldJoint");
        exports.WheelJoint = require("./joint/WheelJoint");
        exports.internal.Sweep = require("./common/Sweep");
        exports.internal.stats = require("./common/stats");
        exports.internal.Manifold = require("./Manifold");
        exports.internal.Distance = require("./collision/Distance");
        exports.internal.TimeOfImpact = require("./collision/TimeOfImpact");
        exports.internal.DynamicTree = require("./collision/DynamicTree");
        exports.internal.Settings = require("./Settings")
    }, {
        "./Body": 4,
        "./Contact": 5,
        "./Fixture": 6,
        "./Joint": 7,
        "./Manifold": 8,
        "./Settings": 9,
        "./Shape": 10,
        "./World": 12,
        "./collision/AABB": 13,
        "./collision/Distance": 15,
        "./collision/DynamicTree": 16,
        "./collision/TimeOfImpact": 17,
        "./common/Mat22": 18,
        "./common/Mat33": 19,
        "./common/Math": 20,
        "./common/Rot": 22,
        "./common/Sweep": 23,
        "./common/Transform": 24,
        "./common/Vec2": 25,
        "./common/Vec3": 26,
        "./common/stats": 28,
        "./joint/DistanceJoint": 30,
        "./joint/FrictionJoint": 31,
        "./joint/GearJoint": 32,
        "./joint/MotorJoint": 33,
        "./joint/MouseJoint": 34,
        "./joint/PrismaticJoint": 35,
        "./joint/PulleyJoint": 36,
        "./joint/RevoluteJoint": 37,
        "./joint/RopeJoint": 38,
        "./joint/WeldJoint": 39,
        "./joint/WheelJoint": 40,
        "./shape/BoxShape": 41,
        "./shape/ChainShape": 42,
        "./shape/CircleShape": 43,
        "./shape/CollideCircle": 44,
        "./shape/CollideCirclePolygone": 45,
        "./shape/CollideEdgeCircle": 46,
        "./shape/CollideEdgePolygon": 47,
        "./shape/CollidePolygon": 48,
        "./shape/EdgeShape": 49,
        "./shape/PolygonShape": 50
    }],
    30: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = DistanceJoint;
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        DistanceJoint.TYPE = "distance-joint";
        DistanceJoint._super = Joint;
        DistanceJoint.prototype = create(DistanceJoint._super.prototype);
        var DEFAULTS = {
            frequencyHz: 0,
            dampingRatio: 0
        };

        function DistanceJoint(def, bodyA, bodyB, anchorA, anchorB) {
            if (!(this instanceof DistanceJoint)) {
                return new DistanceJoint(def, bodyA, bodyB, anchorA, anchorB)
            }
            if (bodyB && anchorA && "m_type" in anchorA && "x" in bodyB && "y" in bodyB) {
                var temp = bodyB;
                bodyB = anchorA;
                anchorA = temp
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = DistanceJoint.TYPE;
            this.m_localAnchorA = anchorA ? bodyA.getLocalPoint(anchorA) : def.localAnchorA || Vec2.zero();
            this.m_localAnchorB = anchorB ? bodyB.getLocalPoint(anchorB) : def.localAnchorB || Vec2.zero();
            this.m_length = Math.isFinite(def.length) ? def.length : Vec2.distance(bodyA.getWorldPoint(this.m_localAnchorA), bodyB.getWorldPoint(this.m_localAnchorB));
            this.m_frequencyHz = def.frequencyHz;
            this.m_dampingRatio = def.dampingRatio;
            this.m_impulse = 0;
            this.m_gamma = 0;
            this.m_bias = 0;
            this.m_u;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_mass
        }
        DistanceJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        DistanceJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        DistanceJoint.prototype.setLength = function(length) {
            this.m_length = length
        };
        DistanceJoint.prototype.getLength = function() {
            return this.m_length
        };
        DistanceJoint.prototype.setFrequency = function(hz) {
            this.m_frequencyHz = hz
        };
        DistanceJoint.prototype.getFrequency = function() {
            return this.m_frequencyHz
        };
        DistanceJoint.prototype.setDampingRatio = function(ratio) {
            this.m_dampingRatio = ratio
        };
        DistanceJoint.prototype.getDampingRatio = function() {
            return this.m_dampingRatio
        };
        DistanceJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        DistanceJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        DistanceJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(this.m_impulse, this.m_u).mul(inv_dt)
        };
        DistanceJoint.prototype.getReactionTorque = function(inv_dt) {
            return 0
        };
        DistanceJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            this.m_u = Vec2.sub(Vec2.add(cB, this.m_rB), Vec2.add(cA, this.m_rA));
            var length = this.m_u.length();
            if (length > Settings.linearSlop) {
                this.m_u.mul(1 / length)
            } else {
                this.m_u.set(0, 0)
            }
            var crAu = Vec2.cross(this.m_rA, this.m_u);
            var crBu = Vec2.cross(this.m_rB, this.m_u);
            var invMass = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;
            this.m_mass = invMass != 0 ? 1 / invMass : 0;
            if (this.m_frequencyHz > 0) {
                var C = length - this.m_length;
                var omega = 2 * Math.PI * this.m_frequencyHz;
                var d = 2 * this.m_mass * this.m_dampingRatio * omega;
                var k = this.m_mass * omega * omega;
                var h = step.dt;
                this.m_gamma = h * (d + h * k);
                this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
                this.m_bias = C * h * k * this.m_gamma;
                invMass += this.m_gamma;
                this.m_mass = invMass != 0 ? 1 / invMass : 0
            } else {
                this.m_gamma = 0;
                this.m_bias = 0
            }
            if (step.warmStarting) {
                this.m_impulse *= step.dtRatio;
                var P = Vec2.mul(this.m_impulse, this.m_u);
                vA.subMul(this.m_invMassA, P);
                wA -= this.m_invIA * Vec2.cross(this.m_rA, P);
                vB.addMul(this.m_invMassB, P);
                wB += this.m_invIB * Vec2.cross(this.m_rB, P)
            } else {
                this.m_impulse = 0
            }
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB
        };
        DistanceJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var vpA = Vec2.add(vA, Vec2.cross(wA, this.m_rA));
            var vpB = Vec2.add(vB, Vec2.cross(wB, this.m_rB));
            var Cdot = Vec2.dot(this.m_u, vpB) - Vec2.dot(this.m_u, vpA);
            var impulse = -this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);
            this.m_impulse += impulse;
            var P = Vec2.mul(impulse, this.m_u);
            vA.subMul(this.m_invMassA, P);
            wA -= this.m_invIA * Vec2.cross(this.m_rA, P);
            vB.addMul(this.m_invMassB, P);
            wB += this.m_invIB * Vec2.cross(this.m_rB, P);
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB
        };
        DistanceJoint.prototype.solvePositionConstraints = function(step) {
            if (this.m_frequencyHz > 0) {
                return true
            }
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);
            var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);
            var u = Vec2.sub(Vec2.add(cB, rB), Vec2.add(cA, rA));
            var length = u.normalize();
            var C = length - this.m_length;
            C = Math.clamp(C, -Settings.maxLinearCorrection, Settings.maxLinearCorrection);
            var impulse = -this.m_mass * C;
            var P = Vec2.mul(impulse, u);
            cA.subMul(this.m_invMassA, P);
            aA -= this.m_invIA * Vec2.cross(rA, P);
            cB.addMul(this.m_invMassB, P);
            aB += this.m_invIB * Vec2.cross(rB, P);
            this.m_bodyA.c_position.c.set(cA);
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c.set(cB);
            this.m_bodyB.c_position.a = aB;
            return Math.abs(C) < Settings.linearSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/create": 54,
        "../util/options": 55
    }],
    31: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = FrictionJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        FrictionJoint.TYPE = "friction-joint";
        FrictionJoint._super = Joint;
        FrictionJoint.prototype = create(FrictionJoint._super.prototype);
        var DEFAULTS = {
            maxForce: 0,
            maxTorque: 0
        };

        function FrictionJoint(def, bodyA, bodyB, anchor) {
            if (!(this instanceof FrictionJoint)) {
                return new FrictionJoint(def, bodyA, bodyB, anchor)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = FrictionJoint.TYPE;
            this.m_localAnchorA = anchor ? bodyA.getLocalPoint(anchor) : def.localAnchorA || Vec2.zero();
            this.m_localAnchorB = anchor ? bodyB.getLocalPoint(anchor) : def.localAnchorB || Vec2.zero();
            this.m_linearImpulse = Vec2.zero();
            this.m_angularImpulse = 0;
            this.m_maxForce = def.maxForce;
            this.m_maxTorque = def.maxTorque;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_linearMass;
            this.m_angularMass
        }
        FrictionJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        FrictionJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        FrictionJoint.prototype.setMaxForce = function(force) {
            _ASSERT && common.assert(Math.isFinite(force) && force >= 0);
            this.m_maxForce = force
        };
        FrictionJoint.prototype.getMaxForce = function() {
            return this.m_maxForce
        };
        FrictionJoint.prototype.setMaxTorque = function(torque) {
            _ASSERT && common.assert(Math.isFinite(torque) && torque >= 0);
            this.m_maxTorque = torque
        };
        FrictionJoint.prototype.getMaxTorque = function() {
            return this.m_maxTorque
        };
        FrictionJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        FrictionJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        FrictionJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(inv_dt, this.m_linearImpulse)
        };
        FrictionJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * this.m_angularImpulse
        };
        FrictionJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA),
                qB = Rot.neo(aB);
            this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var mA = this.m_invMassA,
                mB = this.m_invMassB;
            var iA = this.m_invIA,
                iB = this.m_invIB;
            var K = new Mat22;
            K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;
            K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;
            K.ey.x = K.ex.y;
            K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;
            this.m_linearMass = K.getInverse();
            this.m_angularMass = iA + iB;
            if (this.m_angularMass > 0) {
                this.m_angularMass = 1 / this.m_angularMass
            }
            if (step.warmStarting) {
                this.m_linearImpulse.mul(step.dtRatio);
                this.m_angularImpulse *= step.dtRatio;
                var P = Vec2.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
                vA.subMul(mA, P);
                wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_angularImpulse);
                vB.addMul(mB, P);
                wB += iB * (Vec2.cross(this.m_rB, P) + this.m_angularImpulse)
            } else {
                this.m_linearImpulse.setZero();
                this.m_angularImpulse = 0
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        FrictionJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var mA = this.m_invMassA,
                mB = this.m_invMassB;
            var iA = this.m_invIA,
                iB = this.m_invIB;
            var h = step.dt; {
                var Cdot = wB - wA;
                var impulse = -this.m_angularMass * Cdot;
                var oldImpulse = this.m_angularImpulse;
                var maxImpulse = h * this.m_maxTorque;
                this.m_angularImpulse = Math.clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
                impulse = this.m_angularImpulse - oldImpulse;
                wA -= iA * impulse;
                wB += iB * impulse
            } {
                var Cdot = Vec2.sub(Vec2.add(vB, Vec2.cross(wB, this.m_rB)), Vec2.add(vA, Vec2.cross(wA, this.m_rA)));
                var impulse = Vec2.neg(Mat22.mulVec2(this.m_linearMass, Cdot));
                var oldImpulse = this.m_linearImpulse;
                this.m_linearImpulse.add(impulse);
                var maxImpulse = h * this.m_maxForce;
                if (this.m_linearImpulse.lengthSquared() > maxImpulse * maxImpulse) {
                    this.m_linearImpulse.normalize();
                    this.m_linearImpulse.mul(maxImpulse)
                }
                impulse = Vec2.sub(this.m_linearImpulse, oldImpulse);
                vA.subMul(mA, impulse);
                wA -= iA * Vec2.cross(this.m_rA, impulse);
                vB.addMul(mB, impulse);
                wB += iB * Vec2.cross(this.m_rB, impulse)
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        FrictionJoint.prototype.solvePositionConstraints = function(step) {
            return true
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    32: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = GearJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        var RevoluteJoint = require("./RevoluteJoint");
        var PrismaticJoint = require("./PrismaticJoint");
        GearJoint.TYPE = "gear-joint";
        GearJoint._super = Joint;
        GearJoint.prototype = create(GearJoint._super.prototype);
        var DEFAULTS = {
            ratio: 1
        };

        function GearJoint(def, bodyA, bodyB, joint1, joint2, ratio) {
            if (!(this instanceof GearJoint)) {
                return new GearJoint(def, bodyA, bodyB, joint1, joint2, ratio)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = GearJoint.TYPE;
            _ASSERT && common.assert(joint1.m_type === RevoluteJoint.TYPE || joint1.m_type === PrismaticJoint.TYPE);
            _ASSERT && common.assert(joint2.m_type === RevoluteJoint.TYPE || joint2.m_type === PrismaticJoint.TYPE);
            this.m_joint1 = joint1 ? joint1 : def.joint1;
            this.m_joint2 = joint2 ? joint2 : def.joint2;
            this.m_ratio = Math.isFinite(ratio) ? ratio : def.ratio;
            this.m_type1 = this.m_joint1.getType();
            this.m_type2 = this.m_joint2.getType();
            var coordinateA, coordinateB;
            this.m_bodyC = this.m_joint1.getBodyA();
            this.m_bodyA = this.m_joint1.getBodyB();
            var xfA = this.m_bodyA.m_xf;
            var aA = this.m_bodyA.m_sweep.a;
            var xfC = this.m_bodyC.m_xf;
            var aC = this.m_bodyC.m_sweep.a;
            if (this.m_type1 === RevoluteJoint.TYPE) {
                var revolute = this.m_joint1;
                this.m_localAnchorC = revolute.m_localAnchorA;
                this.m_localAnchorA = revolute.m_localAnchorB;
                this.m_referenceAngleA = revolute.m_referenceAngle;
                this.m_localAxisC = Vec2.zero();
                coordinateA = aA - aC - this.m_referenceAngleA
            } else {
                var prismatic = this.m_joint1;
                this.m_localAnchorC = prismatic.m_localAnchorA;
                this.m_localAnchorA = prismatic.m_localAnchorB;
                this.m_referenceAngleA = prismatic.m_referenceAngle;
                this.m_localAxisC = prismatic.m_localXAxisA;
                var pC = this.m_localAnchorC;
                var pA = Rot.mulTVec2(xfC.q, Vec2.add(Rot.mul(xfA.q, this.m_localAnchorA), Vec2.sub(xfA.p, xfC.p)));
                coordinateA = Vec2.dot(pA, this.m_localAxisC) - Vec2.dot(pC, this.m_localAxisC)
            }
            this.m_bodyD = this.m_joint2.getBodyA();
            this.m_bodyB = this.m_joint2.getBodyB();
            var xfB = this.m_bodyB.m_xf;
            var aB = this.m_bodyB.m_sweep.a;
            var xfD = this.m_bodyD.m_xf;
            var aD = this.m_bodyD.m_sweep.a;
            if (this.m_type2 === RevoluteJoint.TYPE) {
                var revolute = this.m_joint2;
                this.m_localAnchorD = revolute.m_localAnchorA;
                this.m_localAnchorB = revolute.m_localAnchorB;
                this.m_referenceAngleB = revolute.m_referenceAngle;
                this.m_localAxisD = Vec2.zero();
                coordinateB = aB - aD - this.m_referenceAngleB
            } else {
                var prismatic = this.m_joint2;
                this.m_localAnchorD = prismatic.m_localAnchorA;
                this.m_localAnchorB = prismatic.m_localAnchorB;
                this.m_referenceAngleB = prismatic.m_referenceAngle;
                this.m_localAxisD = prismatic.m_localXAxisA;
                var pD = this.m_localAnchorD;
                var pB = Rot.mulTVec2(xfD.q, Vec2.add(Rot.mul(xfB.q, this.m_localAnchorB), Vec2.sub(xfB.p, xfD.p)));
                coordinateB = Vec2.dot(pB, this.m_localAxisD) - Vec2.dot(pD, this.m_localAxisD)
            }
            this.m_constant = coordinateA + this.m_ratio * coordinateB;
            this.m_impulse = 0;
            this.m_lcA, this.m_lcB, this.m_lcC, this.m_lcD;
            this.m_mA, this.m_mB, this.m_mC, this.m_mD;
            this.m_iA, this.m_iB, this.m_iC, this.m_iD;
            this.m_JvAC, this.m_JvBD;
            this.m_JwA, this.m_JwB, this.m_JwC, this.m_JwD;
            this.m_mass
        }
        GearJoint.prototype.getJoint1 = function() {
            return this.m_joint1
        };
        GearJoint.prototype.getJoint2 = function() {
            return this.m_joint2
        };
        GearJoint.prototype.setRatio = function(ratio) {
            _ASSERT && common.assert(Math.isFinite(ratio));
            this.m_ratio = ratio
        };
        GearJoint.prototype.getRatio = function() {
            return this.m_ratio
        };
        GearJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        GearJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        GearJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(this.m_impulse, this.m_JvAC).mul(inv_dt)
        };
        GearJoint.prototype.getReactionTorque = function(inv_dt) {
            var L = this.m_impulse * this.m_JwA;
            return inv_dt * L
        };
        GearJoint.prototype.initVelocityConstraints = function(step) {
            this.m_lcA = this.m_bodyA.m_sweep.localCenter;
            this.m_lcB = this.m_bodyB.m_sweep.localCenter;
            this.m_lcC = this.m_bodyC.m_sweep.localCenter;
            this.m_lcD = this.m_bodyD.m_sweep.localCenter;
            this.m_mA = this.m_bodyA.m_invMass;
            this.m_mB = this.m_bodyB.m_invMass;
            this.m_mC = this.m_bodyC.m_invMass;
            this.m_mD = this.m_bodyD.m_invMass;
            this.m_iA = this.m_bodyA.m_invI;
            this.m_iB = this.m_bodyB.m_invI;
            this.m_iC = this.m_bodyC.m_invI;
            this.m_iD = this.m_bodyD.m_invI;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var aC = this.m_bodyC.c_position.a;
            var vC = this.m_bodyC.c_velocity.v;
            var wC = this.m_bodyC.c_velocity.w;
            var aD = this.m_bodyD.c_position.a;
            var vD = this.m_bodyD.c_velocity.v;
            var wD = this.m_bodyD.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var qC = Rot.neo(aC);
            var qD = Rot.neo(aD);
            this.m_mass = 0;
            if (this.m_type1 == RevoluteJoint.TYPE) {
                this.m_JvAC = Vec2.zero();
                this.m_JwA = 1;
                this.m_JwC = 1;
                this.m_mass += this.m_iA + this.m_iC
            } else {
                var u = Rot.mulVec2(qC, this.m_localAxisC);
                var rC = Rot.mulSub(qC, this.m_localAnchorC, this.m_lcC);
                var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_lcA);
                this.m_JvAC = u;
                this.m_JwC = Vec2.cross(rC, u);
                this.m_JwA = Vec2.cross(rA, u);
                this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA
            }
            if (this.m_type2 == RevoluteJoint.TYPE) {
                this.m_JvBD = Vec2.zero();
                this.m_JwB = this.m_ratio;
                this.m_JwD = this.m_ratio;
                this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)
            } else {
                var u = Rot.mulVec2(qD, this.m_localAxisD);
                var rD = Rot.mulSub(qD, this.m_localAnchorD, this.m_lcD);
                var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_lcB);
                this.m_JvBD = Vec2.mul(this.m_ratio, u);
                this.m_JwD = this.m_ratio * Vec2.cross(rD, u);
                this.m_JwB = this.m_ratio * Vec2.cross(rB, u);
                this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB
            }
            this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;
            if (step.warmStarting) {
                vA.addMul(this.m_mA * this.m_impulse, this.m_JvAC);
                wA += this.m_iA * this.m_impulse * this.m_JwA;
                vB.addMul(this.m_mB * this.m_impulse, this.m_JvBD);
                wB += this.m_iB * this.m_impulse * this.m_JwB;
                vC.subMul(this.m_mC * this.m_impulse, this.m_JvAC);
                wC -= this.m_iC * this.m_impulse * this.m_JwC;
                vD.subMul(this.m_mD * this.m_impulse, this.m_JvBD);
                wD -= this.m_iD * this.m_impulse * this.m_JwD
            } else {
                this.m_impulse = 0
            }
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB;
            this.m_bodyC.c_velocity.v.set(vC);
            this.m_bodyC.c_velocity.w = wC;
            this.m_bodyD.c_velocity.v.set(vD);
            this.m_bodyD.c_velocity.w = wD
        };
        GearJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var vC = this.m_bodyC.c_velocity.v;
            var wC = this.m_bodyC.c_velocity.w;
            var vD = this.m_bodyD.c_velocity.v;
            var wD = this.m_bodyD.c_velocity.w;
            var Cdot = Vec2.dot(this.m_JvAC, vA) - Vec2.dot(this.m_JvAC, vC) + Vec2.dot(this.m_JvBD, vB) - Vec2.dot(this.m_JvBD, vD);
            Cdot += this.m_JwA * wA - this.m_JwC * wC + (this.m_JwB * wB - this.m_JwD * wD);
            var impulse = -this.m_mass * Cdot;
            this.m_impulse += impulse;
            vA.addMul(this.m_mA * impulse, this.m_JvAC);
            wA += this.m_iA * impulse * this.m_JwA;
            vB.addMul(this.m_mB * impulse, this.m_JvBD);
            wB += this.m_iB * impulse * this.m_JwB;
            vC.subMul(this.m_mC * impulse, this.m_JvAC);
            wC -= this.m_iC * impulse * this.m_JwC;
            vD.subMul(this.m_mD * impulse, this.m_JvBD);
            wD -= this.m_iD * impulse * this.m_JwD;
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB;
            this.m_bodyC.c_velocity.v.set(vC);
            this.m_bodyC.c_velocity.w = wC;
            this.m_bodyD.c_velocity.v.set(vD);
            this.m_bodyD.c_velocity.w = wD
        };
        GearJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var cC = this.m_bodyC.c_position.c;
            var aC = this.m_bodyC.c_position.a;
            var cD = this.m_bodyD.c_position.c;
            var aD = this.m_bodyD.c_position.a;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var qC = Rot.neo(aC);
            var qD = Rot.neo(aD);
            var linearError = 0;
            var coordinateA, coordinateB;
            var JvAC, JvBD;
            var JwA, JwB, JwC, JwD;
            var mass = 0;
            if (this.m_type1 == RevoluteJoint.TYPE) {
                JvAC = Vec2.zero();
                JwA = 1;
                JwC = 1;
                mass += this.m_iA + this.m_iC;
                coordinateA = aA - aC - this.m_referenceAngleA
            } else {
                var u = Rot.mulVec2(qC, this.m_localAxisC);
                var rC = Rot.mulSub(qC, this.m_localAnchorC, this.m_lcC);
                var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_lcA);
                JvAC = u;
                JwC = Vec2.cross(rC, u);
                JwA = Vec2.cross(rA, u);
                mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;
                var pC = Vec2.sub(this.m_localAnchorC, this.m_lcC);
                var pA = Rot.mulTVec2(qC, Vec2.add(rA, Vec2.sub(cA, cC)));
                coordinateA = Vec2.dot(Vec2.sub(pA, pC), this.m_localAxisC)
            }
            if (this.m_type2 == RevoluteJoint.TYPE) {
                JvBD = Vec2.zero();
                JwB = this.m_ratio;
                JwD = this.m_ratio;
                mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
                coordinateB = aB - aD - this.m_referenceAngleB
            } else {
                var u = Rot.mulVec2(qD, this.m_localAxisD);
                var rD = Rot.mulSub(qD, this.m_localAnchorD, this.m_lcD);
                var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_lcB);
                JvBD = Vec2.mul(this.m_ratio, u);
                JwD = this.m_ratio * Vec2.cross(rD, u);
                JwB = this.m_ratio * Vec2.cross(rB, u);
                mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;
                var pD = Vec2.sub(this.m_localAnchorD, this.m_lcD);
                var pB = Rot.mulTVec2(qD, Vec2.add(rB, Vec2.sub(cB, cD)));
                coordinateB = Vec2.dot(pB, this.m_localAxisD) - Vec2.dot(pD, this.m_localAxisD)
            }
            var C = coordinateA + this.m_ratio * coordinateB - this.m_constant;
            var impulse = 0;
            if (mass > 0) {
                impulse = -C / mass
            }
            cA.addMul(this.m_mA * impulse, JvAC);
            aA += this.m_iA * impulse * JwA;
            cB.addMul(this.m_mB * impulse, JvBD);
            aB += this.m_iB * impulse * JwB;
            cC.subMul(this.m_mC * impulse, JvAC);
            aC -= this.m_iC * impulse * JwC;
            cD.subMul(this.m_mD * impulse, JvBD);
            aD -= this.m_iD * impulse * JwD;
            this.m_bodyA.c_position.c.set(cA);
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c.set(cB);
            this.m_bodyB.c_position.a = aB;
            this.m_bodyC.c_position.c.set(cC);
            this.m_bodyC.c_position.a = aC;
            this.m_bodyD.c_position.c.set(cD);
            this.m_bodyD.c_position.a = aD;
            return linearError < Settings.linearSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55,
        "./PrismaticJoint": 35,
        "./RevoluteJoint": 37
    }],
    33: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = MotorJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        MotorJoint.TYPE = "motor-joint";
        MotorJoint._super = Joint;
        MotorJoint.prototype = create(MotorJoint._super.prototype);
        var DEFAULTS = {
            maxForce: 1,
            maxTorque: 1,
            correctionFactor: .3
        };

        function MotorJoint(def, bodyA, bodyB) {
            if (!(this instanceof MotorJoint)) {
                return new MotorJoint(def, bodyA, bodyB)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = MotorJoint.TYPE;
            this.m_linearOffset = def.linearOffset ? def.linearOffset : bodyA.getLocalPoint(bodyB.getPosition());
            var angleA = bodyA.getAngle();
            var angleB = bodyB.getAngle();
            this.m_angularOffset = angleB - angleA;
            this.m_linearImpulse = Vec2.zero();
            this.m_angularImpulse = 0;
            this.m_maxForce = def.maxForce;
            this.m_maxTorque = def.maxTorque;
            this.m_correctionFactor = def.correctionFactor;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_linearError;
            this.m_angularError;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_linearMass;
            this.m_angularMass
        }
        MotorJoint.prototype.setMaxForce = function(force) {
            _ASSERT && common.assert(Math.isFinite(force) && force >= 0);
            this.m_maxForce = force
        };
        MotorJoint.prototype.getMaxForce = function() {
            return this.m_maxForce
        };
        MotorJoint.prototype.setMaxTorque = function(torque) {
            _ASSERT && common.assert(Math.isFinite(torque) && torque >= 0);
            this.m_maxTorque = torque
        };
        MotorJoint.prototype.getMaxTorque = function() {
            return this.m_maxTorque
        };
        MotorJoint.prototype.setCorrectionFactor = function(factor) {
            _ASSERT && common.assert(Math.isFinite(factor) && 0 <= factor && factor <= 1);
            this.m_correctionFactor = factor
        };
        MotorJoint.prototype.getCorrectionFactor = function() {
            return this.m_correctionFactor
        };
        MotorJoint.prototype.setLinearOffset = function(linearOffset) {
            if (linearOffset.x != this.m_linearOffset.x || linearOffset.y != this.m_linearOffset.y) {
                this.m_bodyA.setAwake(true);
                this.m_bodyB.setAwake(true);
                this.m_linearOffset = linearOffset
            }
        };
        MotorJoint.prototype.getLinearOffset = function() {
            return this.m_linearOffset
        };
        MotorJoint.prototype.setAngularOffset = function(angularOffset) {
            if (angularOffset != this.m_angularOffset) {
                this.m_bodyA.setAwake(true);
                this.m_bodyB.setAwake(true);
                this.m_angularOffset = angularOffset
            }
        };
        MotorJoint.prototype.getAngularOffset = function() {
            return this.m_angularOffset
        };
        MotorJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getPosition()
        };
        MotorJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getPosition()
        };
        MotorJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(inv_dt, this.m_linearImpulse)
        };
        MotorJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * this.m_angularImpulse
        };
        MotorJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA),
                qB = Rot.neo(aB);
            this.m_rA = Rot.mulVec2(qA, Vec2.neg(this.m_localCenterA));
            this.m_rB = Rot.mulVec2(qB, Vec2.neg(this.m_localCenterB));
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var K = new Mat22;
            K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;
            K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;
            K.ey.x = K.ex.y;
            K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;
            this.m_linearMass = K.getInverse();
            this.m_angularMass = iA + iB;
            if (this.m_angularMass > 0) {
                this.m_angularMass = 1 / this.m_angularMass
            }
            this.m_linearError = Vec2.zero();
            this.m_linearError.addCombine(1, cB, 1, this.m_rB);
            this.m_linearError.subCombine(1, cA, 1, this.m_rA);
            this.m_linearError.sub(Rot.mulVec2(qA, this.m_linearOffset));
            this.m_angularError = aB - aA - this.m_angularOffset;
            if (step.warmStarting) {
                this.m_linearImpulse.mul(step.dtRatio);
                this.m_angularImpulse *= step.dtRatio;
                var P = Vec2.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
                vA.subMul(mA, P);
                wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_angularImpulse);
                vB.addMul(mB, P);
                wB += iB * (Vec2.cross(this.m_rB, P) + this.m_angularImpulse)
            } else {
                this.m_linearImpulse.setZero();
                this.m_angularImpulse = 0
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        MotorJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var mA = this.m_invMassA,
                mB = this.m_invMassB;
            var iA = this.m_invIA,
                iB = this.m_invIB;
            var h = step.dt;
            var inv_h = step.inv_dt; {
                var Cdot = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;
                var impulse = -this.m_angularMass * Cdot;
                var oldImpulse = this.m_angularImpulse;
                var maxImpulse = h * this.m_maxTorque;
                this.m_angularImpulse = Math.clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
                impulse = this.m_angularImpulse - oldImpulse;
                wA -= iA * impulse;
                wB += iB * impulse
            } {
                var Cdot = Vec2.zero();
                Cdot.addCombine(1, vB, 1, Vec2.cross(wB, this.m_rB));
                Cdot.subCombine(1, vA, 1, Vec2.cross(wA, this.m_rA));
                Cdot.addMul(inv_h * this.m_correctionFactor, this.m_linearError);
                var impulse = Vec2.neg(Mat22.mulVec2(this.m_linearMass, Cdot));
                var oldImpulse = Vec2.clone(this.m_linearImpulse);
                this.m_linearImpulse.add(impulse);
                var maxImpulse = h * this.m_maxForce;
                this.m_linearImpulse.clamp(maxImpulse);
                impulse = Vec2.sub(this.m_linearImpulse, oldImpulse);
                vA.subMul(mA, impulse);
                wA -= iA * Vec2.cross(this.m_rA, impulse);
                vB.addMul(mB, impulse);
                wB += iB * Vec2.cross(this.m_rB, impulse)
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        MotorJoint.prototype.solvePositionConstraints = function(step) {
            return true
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    34: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = MouseJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        MouseJoint.TYPE = "mouse-joint";
        MouseJoint._super = Joint;
        MouseJoint.prototype = create(MouseJoint._super.prototype);
        var DEFAULTS = {
            maxForce: 0,
            frequencyHz: 5,
            dampingRatio: .7
        };

        function MouseJoint(def, bodyA, bodyB, target) {
            if (!(this instanceof MouseJoint)) {
                return new MouseJoint(def, bodyA, bodyB, target)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = MouseJoint.TYPE;
            _ASSERT && common.assert(Math.isFinite(def.maxForce) && def.maxForce >= 0);
            _ASSERT && common.assert(Math.isFinite(def.frequencyHz) && def.frequencyHz >= 0);
            _ASSERT && common.assert(Math.isFinite(def.dampingRatio) && def.dampingRatio >= 0);
            this.m_targetA = target ? Vec2.clone(target) : def.target || Vec2.zero();
            this.m_localAnchorB = Transform.mulTVec2(bodyB.getTransform(), this.m_targetA);
            this.m_maxForce = def.maxForce;
            this.m_impulse = Vec2.zero();
            this.m_frequencyHz = def.frequencyHz;
            this.m_dampingRatio = def.dampingRatio;
            this.m_beta = 0;
            this.m_gamma = 0;
            this.m_rB = Vec2.zero();
            this.m_localCenterB = Vec2.zero();
            this.m_invMassB = 0;
            this.m_invIB = 0;
            this.mass = new Mat22;
            this.m_C = Vec2.zero()
        }
        MouseJoint.prototype.setTarget = function(target) {
            if (this.m_bodyB.isAwake() == false) {
                this.m_bodyB.setAwake(true)
            }
            this.m_targetA = Vec2.clone(target)
        };
        MouseJoint.prototype.getTarget = function() {
            return this.m_targetA
        };
        MouseJoint.prototype.setMaxForce = function(force) {
            this.m_maxForce = force
        };
        MouseJoint.getMaxForce = function() {
            return this.m_maxForce
        };
        MouseJoint.prototype.setFrequency = function(hz) {
            this.m_frequencyHz = hz
        };
        MouseJoint.prototype.getFrequency = function() {
            return this.m_frequencyHz
        };
        MouseJoint.prototype.setDampingRatio = function(ratio) {
            this.m_dampingRatio = ratio
        };
        MouseJoint.prototype.getDampingRatio = function() {
            return this.m_dampingRatio
        };
        MouseJoint.prototype.getAnchorA = function() {
            return Vec2.clone(this.m_targetA)
        };
        MouseJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        MouseJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(inv_dt, this.m_impulse)
        };
        MouseJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * 0
        };
        MouseJoint.prototype.shiftOrigin = function(newOrigin) {
            this.m_targetA.sub(newOrigin)
        };
        MouseJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIB = this.m_bodyB.m_invI;
            var position = this.m_bodyB.c_position;
            var velocity = this.m_bodyB.c_velocity;
            var cB = position.c;
            var aB = position.a;
            var vB = velocity.v;
            var wB = velocity.w;
            var qB = Rot.neo(aB);
            var mass = this.m_bodyB.getMass();
            var omega = 2 * Math.PI * this.m_frequencyHz;
            var d = 2 * mass * this.m_dampingRatio * omega;
            var k = mass * (omega * omega);
            var h = step.dt;
            _ASSERT && common.assert(d + h * k > Math.EPSILON);
            this.m_gamma = h * (d + h * k);
            if (this.m_gamma != 0) {
                this.m_gamma = 1 / this.m_gamma
            }
            this.m_beta = h * k * this.m_gamma;
            this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var K = new Mat22;
            K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;
            K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;
            K.ey.x = K.ex.y;
            K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;
            this.m_mass = K.getInverse();
            this.m_C.set(cB);
            this.m_C.addCombine(1, this.m_rB, -1, this.m_targetA);
            this.m_C.mul(this.m_beta);
            wB *= .98;
            if (step.warmStarting) {
                this.m_impulse.mul(step.dtRatio);
                vB.addMul(this.m_invMassB, this.m_impulse);
                wB += this.m_invIB * Vec2.cross(this.m_rB, this.m_impulse)
            } else {
                this.m_impulse.setZero()
            }
            velocity.v.set(vB);
            velocity.w = wB
        };
        MouseJoint.prototype.solveVelocityConstraints = function(step) {
            var velocity = this.m_bodyB.c_velocity;
            var vB = Vec2.clone(velocity.v);
            var wB = velocity.w;
            var Cdot = Vec2.cross(wB, this.m_rB);
            Cdot.add(vB);
            Cdot.addCombine(1, this.m_C, this.m_gamma, this.m_impulse);
            Cdot.neg();
            var impulse = Mat22.mulVec2(this.m_mass, Cdot);
            var oldImpulse = Vec2.clone(this.m_impulse);
            this.m_impulse.add(impulse);
            var maxImpulse = step.dt * this.m_maxForce;
            this.m_impulse.clamp(maxImpulse);
            impulse = Vec2.sub(this.m_impulse, oldImpulse);
            vB.addMul(this.m_invMassB, impulse);
            wB += this.m_invIB * Vec2.cross(this.m_rB, impulse);
            velocity.v.set(vB);
            velocity.w = wB
        };
        MouseJoint.prototype.solvePositionConstraints = function(step) {
            return true
        }
    }, {
        "../Joint": 7,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    35: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = PrismaticJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        var inactiveLimit = 0;
        var atLowerLimit = 1;
        var atUpperLimit = 2;
        var equalLimits = 3;
        PrismaticJoint.TYPE = "prismatic-joint";
        PrismaticJoint._super = Joint;
        PrismaticJoint.prototype = create(PrismaticJoint._super.prototype);
        var DEFAULTS = {
            enableLimit: false,
            lowerTranslation: 0,
            upperTranslation: 0,
            enableMotor: false,
            maxMotorForce: 0,
            motorSpeed: 0
        };

        function PrismaticJoint(def, bodyA, bodyB, anchor, axis) {
            if (!(this instanceof PrismaticJoint)) {
                return new PrismaticJoint(def, bodyA, bodyB, anchor, axis)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = PrismaticJoint.TYPE;
            this.m_localAnchorA = anchor ? bodyA.getLocalPoint(anchor) : def.localAnchorA || Vec2.zero();
            this.m_localAnchorB = anchor ? bodyB.getLocalPoint(anchor) : def.localAnchorB || Vec2.zero();
            this.m_localXAxisA = axis ? bodyA.getLocalVector(axis) : def.localAxisA || Vec2.neo(1, 0);
            this.m_localXAxisA.normalize();
            this.m_localYAxisA = Vec2.cross(1, this.m_localXAxisA);
            this.m_referenceAngle = Math.isFinite(def.referenceAngle) ? def.referenceAngle : bodyB.getAngle() - bodyA.getAngle();
            this.m_impulse = Vec3();
            this.m_motorMass = 0;
            this.m_motorImpulse = 0;
            this.m_lowerTranslation = def.lowerTranslation;
            this.m_upperTranslation = def.upperTranslation;
            this.m_maxMotorForce = def.maxMotorForce;
            this.m_motorSpeed = def.motorSpeed;
            this.m_enableLimit = def.enableLimit;
            this.m_enableMotor = def.enableMotor;
            this.m_limitState = inactiveLimit;
            this.m_axis = Vec2.zero();
            this.m_perp = Vec2.zero();
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_axis, this.m_perp;
            this.m_s1, this.m_s2;
            this.m_a1, this.m_a2;
            this.m_K = new Mat33;
            this.m_motorMass
        }
        PrismaticJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        PrismaticJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        PrismaticJoint.prototype.getLocalAxisA = function() {
            return this.m_localXAxisA
        };
        PrismaticJoint.prototype.getReferenceAngle = function() {
            return this.m_referenceAngle
        };
        PrismaticJoint.prototype.getJointTranslation = function() {
            var pA = this.m_bodyA.getWorldPoint(this.m_localAnchorA);
            var pB = this.m_bodyB.getWorldPoint(this.m_localAnchorB);
            var d = Vec2.sub(pB, pA);
            var axis = this.m_bodyA.getWorldVector(this.m_localXAxisA);
            var translation = Vec2.dot(d, axis);
            return translation
        };
        PrismaticJoint.prototype.getJointSpeed = function() {
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            var rA = Rot.mulVec2(bA.m_xf.q, Vec2.sub(this.m_localAnchorA, bA.m_sweep.localCenter));
            var rB = Rot.mulVec2(bB.m_xf.q, Vec2.sub(this.m_localAnchorB, bB.m_sweep.localCenter));
            var p1 = Vec2.add(bA.m_sweep.c, rA);
            var p2 = Vec2.add(bB.m_sweep.c, rB);
            var d = Vec2.sub(p2, p1);
            var axis = Rot.mulVec2(bA.m_xf.q, this.m_localXAxisA);
            var vA = bA.m_linearVelocity;
            var vB = bB.m_linearVelocity;
            var wA = bA.m_angularVelocity;
            var wB = bB.m_angularVelocity;
            var speed = Vec2.dot(d, Vec2.cross(wA, axis)) + Vec2.dot(axis, Vec2.sub(Vec2.addCross(vB, wB, rB), Vec2.addCross(vA, wA, rA)));
            return speed
        };
        PrismaticJoint.prototype.isLimitEnabled = function() {
            return this.m_enableLimit
        };
        PrismaticJoint.prototype.enableLimit = function(flag) {
            if (flag != this.m_enableLimit) {
                this.m_bodyA.setAwake(true);
                this.m_bodyB.setAwake(true);
                this.m_enableLimit = flag;
                this.m_impulse.z = 0
            }
        };
        PrismaticJoint.prototype.getLowerLimit = function() {
            return this.m_lowerTranslation
        };
        PrismaticJoint.prototype.getUpperLimit = function() {
            return this.m_upperTranslation
        };
        PrismaticJoint.prototype.setLimits = function(lower, upper) {
            _ASSERT && common.assert(lower <= upper);
            if (lower != this.m_lowerTranslation || upper != this.m_upperTranslation) {
                this.m_bodyA.setAwake(true);
                this.m_bodyB.setAwake(true);
                this.m_lowerTranslation = lower;
                this.m_upperTranslation = upper;
                this.m_impulse.z = 0
            }
        };
        PrismaticJoint.prototype.isMotorEnabled = function() {
            return this.m_enableMotor
        };
        PrismaticJoint.prototype.enableMotor = function(flag) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_enableMotor = flag
        };
        PrismaticJoint.prototype.setMotorSpeed = function(speed) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_motorSpeed = speed
        };
        PrismaticJoint.prototype.setMaxMotorForce = function(force) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_maxMotorForce = force
        };
        PrismaticJoint.prototype.getMotorSpeed = function() {
            return this.m_motorSpeed
        };
        PrismaticJoint.prototype.getMotorForce = function(inv_dt) {
            return inv_dt * this.m_motorImpulse
        };
        PrismaticJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        PrismaticJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        PrismaticJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis).mul(inv_dt)
        };
        PrismaticJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * this.m_impulse.y
        };
        PrismaticJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var d = Vec2.zero();
            d.addCombine(1, cB, 1, rB);
            d.subCombine(1, cA, 1, rA);
            var mA = this.m_invMassA,
                mB = this.m_invMassB;
            var iA = this.m_invIA,
                iB = this.m_invIB; {
                this.m_axis = Rot.mulVec2(qA, this.m_localXAxisA);
                this.m_a1 = Vec2.cross(Vec2.add(d, rA), this.m_axis);
                this.m_a2 = Vec2.cross(rB, this.m_axis);
                this.m_motorMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
                if (this.m_motorMass > 0) {
                    this.m_motorMass = 1 / this.m_motorMass
                }
            } {
                this.m_perp = Rot.mulVec2(qA, this.m_localYAxisA);
                this.m_s1 = Vec2.cross(Vec2.add(d, rA), this.m_perp);
                this.m_s2 = Vec2.cross(rB, this.m_perp);
                var s1test = Vec2.cross(rA, this.m_perp);
                var k11 = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;
                var k12 = iA * this.m_s1 + iB * this.m_s2;
                var k13 = iA * this.m_s1 * this.m_a1 + iB * this.m_s2 * this.m_a2;
                var k22 = iA + iB;
                if (k22 == 0) {
                    k22 = 1
                }
                var k23 = iA * this.m_a1 + iB * this.m_a2;
                var k33 = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
                this.m_K.ex.set(k11, k12, k13);
                this.m_K.ey.set(k12, k22, k23);
                this.m_K.ez.set(k13, k23, k33)
            }
            if (this.m_enableLimit) {
                var jointTranslation = Vec2.dot(this.m_axis, d);
                if (Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * Settings.linearSlop) {
                    this.m_limitState = equalLimits
                } else if (jointTranslation <= this.m_lowerTranslation) {
                    if (this.m_limitState != atLowerLimit) {
                        this.m_limitState = atLowerLimit;
                        this.m_impulse.z = 0
                    }
                } else if (jointTranslation >= this.m_upperTranslation) {
                    if (this.m_limitState != atUpperLimit) {
                        this.m_limitState = atUpperLimit;
                        this.m_impulse.z = 0
                    }
                } else {
                    this.m_limitState = inactiveLimit;
                    this.m_impulse.z = 0
                }
            } else {
                this.m_limitState = inactiveLimit;
                this.m_impulse.z = 0
            }
            if (this.m_enableMotor == false) {
                this.m_motorImpulse = 0
            }
            if (step.warmStarting) {
                this.m_impulse.mul(step.dtRatio);
                this.m_motorImpulse *= step.dtRatio;
                var P = Vec2.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis);
                var LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
                var LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
                vA.subMul(mA, P);
                wA -= iA * LA;
                vB.addMul(mB, P);
                wB += iB * LB
            } else {
                this.m_impulse.setZero();
                this.m_motorImpulse = 0
            }
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB
        };
        PrismaticJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            if (this.m_enableMotor && this.m_limitState != equalLimits) {
                var Cdot = Vec2.dot(this.m_axis, Vec2.sub(vB, vA)) + this.m_a2 * wB - this.m_a1 * wA;
                var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
                var oldImpulse = this.m_motorImpulse;
                var maxImpulse = step.dt * this.m_maxMotorForce;
                this.m_motorImpulse = Math.clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
                impulse = this.m_motorImpulse - oldImpulse;
                var P = Vec2.mul(impulse, this.m_axis);
                var LA = impulse * this.m_a1;
                var LB = impulse * this.m_a2;
                vA.subMul(mA, P);
                wA -= iA * LA;
                vB.addMul(mB, P);
                wB += iB * LB
            }
            var Cdot1 = Vec2.zero();
            Cdot1.x += Vec2.dot(this.m_perp, vB) + this.m_s2 * wB;
            Cdot1.x -= Vec2.dot(this.m_perp, vA) + this.m_s1 * wA;
            Cdot1.y = wB - wA;
            if (this.m_enableLimit && this.m_limitState != inactiveLimit) {
                var Cdot2 = 0;
                Cdot2 += Vec2.dot(this.m_axis, vB) + this.m_a2 * wB;
                Cdot2 -= Vec2.dot(this.m_axis, vA) + this.m_a1 * wA;
                var Cdot = Vec3(Cdot1.x, Cdot1.y, Cdot2);
                var f1 = Vec3(this.m_impulse);
                var df = this.m_K.solve33(Vec3.neg(Cdot));
                this.m_impulse.add(df);
                if (this.m_limitState == atLowerLimit) {
                    this.m_impulse.z = Math.max(this.m_impulse.z, 0)
                } else if (this.m_limitState == atUpperLimit) {
                    this.m_impulse.z = Math.min(this.m_impulse.z, 0)
                }
                var b = Vec2.combine(-1, Cdot1, -(this.m_impulse.z - f1.z), Vec2.neo(this.m_K.ez.x, this.m_K.ez.y));
                var f2r = Vec2.add(this.m_K.solve22(b), Vec2.neo(f1.x, f1.y));
                this.m_impulse.x = f2r.x;
                this.m_impulse.y = f2r.y;
                df = Vec3.sub(this.m_impulse, f1);
                var P = Vec2.combine(df.x, this.m_perp, df.z, this.m_axis);
                var LA = df.x * this.m_s1 + df.y + df.z * this.m_a1;
                var LB = df.x * this.m_s2 + df.y + df.z * this.m_a2;
                vA.subMul(mA, P);
                wA -= iA * LA;
                vB.addMul(mB, P);
                wB += iB * LB
            } else {
                var df = this.m_K.solve22(Vec2.neg(Cdot1));
                this.m_impulse.x += df.x;
                this.m_impulse.y += df.y;
                var P = Vec2.mul(df.x, this.m_perp);
                var LA = df.x * this.m_s1 + df.y;
                var LB = df.x * this.m_s2 + df.y;
                vA.subMul(mA, P);
                wA -= iA * LA;
                vB.addMul(mB, P);
                wB += iB * LB
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        PrismaticJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var d = Vec2.sub(Vec2.add(cB, rB), Vec2.add(cA, rA));
            var axis = Rot.mulVec2(qA, this.m_localXAxisA);
            var a1 = Vec2.cross(Vec2.add(d, rA), axis);
            var a2 = Vec2.cross(rB, axis);
            var perp = Rot.mulVec2(qA, this.m_localYAxisA);
            var s1 = Vec2.cross(Vec2.add(d, rA), perp);
            var s2 = Vec2.cross(rB, perp);
            var impulse = Vec3();
            var C1 = Vec2.zero();
            C1.x = Vec2.dot(perp, d);
            C1.y = aB - aA - this.m_referenceAngle;
            var linearError = Math.abs(C1.x);
            var angularError = Math.abs(C1.y);
            var linearSlop = Settings.linearSlop;
            var maxLinearCorrection = Settings.maxLinearCorrection;
            var active = false;
            var C2 = 0;
            if (this.m_enableLimit) {
                var translation = Vec2.dot(axis, d);
                if (Math.abs(this.m_upperTranslation - this.m_lowerTranslation) < 2 * linearSlop) {
                    C2 = Math.clamp(translation, -maxLinearCorrection, maxLinearCorrection);
                    linearError = Math.max(linearError, Math.abs(translation));
                    active = true
                } else if (translation <= this.m_lowerTranslation) {
                    C2 = Math.clamp(translation - this.m_lowerTranslation + linearSlop, -maxLinearCorrection, 0);
                    linearError = Math.max(linearError, this.m_lowerTranslation - translation);
                    active = true
                } else if (translation >= this.m_upperTranslation) {
                    C2 = Math.clamp(translation - this.m_upperTranslation - linearSlop, 0, maxLinearCorrection);
                    linearError = Math.max(linearError, translation - this.m_upperTranslation);
                    active = true
                }
            }
            if (active) {
                var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
                var k12 = iA * s1 + iB * s2;
                var k13 = iA * s1 * a1 + iB * s2 * a2;
                var k22 = iA + iB;
                if (k22 == 0) {
                    k22 = 1
                }
                var k23 = iA * a1 + iB * a2;
                var k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
                var K = new Mat33;
                K.ex.set(k11, k12, k13);
                K.ey.set(k12, k22, k23);
                K.ez.set(k13, k23, k33);
                var C = Vec3();
                C.x = C1.x;
                C.y = C1.y;
                C.z = C2;
                impulse = K.solve33(Vec3.neg(C))
            } else {
                var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
                var k12 = iA * s1 + iB * s2;
                var k22 = iA + iB;
                if (k22 == 0) {
                    k22 = 1
                }
                var K = new Mat22;
                K.ex.set(k11, k12);
                K.ey.set(k12, k22);
                var impulse1 = K.solve(Vec2.neg(C1));
                impulse.x = impulse1.x;
                impulse.y = impulse1.y;
                impulse.z = 0
            }
            var P = Vec2.combine(impulse.x, perp, impulse.z, axis);
            var LA = impulse.x * s1 + impulse.y + impulse.z * a1;
            var LB = impulse.x * s2 + impulse.y + impulse.z * a2;
            cA.subMul(mA, P);
            aA -= iA * LA;
            cB.addMul(mB, P);
            aB += iB * LB;
            this.m_bodyA.c_position.c = cA;
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c = cB;
            this.m_bodyB.c_position.a = aB;
            return linearError <= Settings.linearSlop && angularError <= Settings.angularSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    36: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = PulleyJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        PulleyJoint.TYPE = "pulley-joint";
        PulleyJoint.MIN_PULLEY_LENGTH = 2;
        PulleyJoint._super = Joint;
        PulleyJoint.prototype = create(PulleyJoint._super.prototype);
        var PulleyJointDef = {
            collideConnected: true
        };

        function PulleyJoint(def, bodyA, bodyB, groundA, groundB, anchorA, anchorB, ratio) {
            if (!(this instanceof PulleyJoint)) {
                return new PulleyJoint(def, bodyA, bodyB, groundA, groundB, anchorA, anchorB, ratio)
            }
            def = options(def, PulleyJointDef);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = PulleyJoint.TYPE;
            this.m_groundAnchorA = groundA ? groundA : def.groundAnchorA || Vec2.neo(-1, 1);
            this.m_groundAnchorB = groundB ? groundB : def.groundAnchorB || Vec2.neo(1, 1);
            this.m_localAnchorA = anchorA ? bodyA.getLocalPoint(anchorA) : def.localAnchorA || Vec2.neo(-1, 0);
            this.m_localAnchorB = anchorB ? bodyB.getLocalPoint(anchorB) : def.localAnchorB || Vec2.neo(1, 0);
            this.m_lengthA = Math.isFinite(def.lengthA) ? def.lengthA : Vec2.distance(anchorA, groundA);
            this.m_lengthB = Math.isFinite(def.lengthB) ? def.lengthB : Vec2.distance(anchorB, groundB);
            this.m_ratio = Math.isFinite(ratio) ? ratio : def.ratio;
            _ASSERT && common.assert(ratio > Math.EPSILON);
            this.m_constant = this.m_lengthA + this.m_ratio * this.m_lengthB;
            this.m_impulse = 0;
            this.m_uA;
            this.m_uB;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_mass
        }
        PulleyJoint.prototype.getGroundAnchorA = function() {
            return this.m_groundAnchorA
        };
        PulleyJoint.prototype.getGroundAnchorB = function() {
            return this.m_groundAnchorB
        };
        PulleyJoint.prototype.getLengthA = function() {
            return this.m_lengthA
        };
        PulleyJoint.prototype.getLengthB = function() {
            return this.m_lengthB
        };
        PulleyJoint.prototype.getRatio = function() {
            return this.m_ratio
        };
        PulleyJoint.prototype.getCurrentLengthA = function() {
            var p = this.m_bodyA.getWorldPoint(this.m_localAnchorA);
            var s = this.m_groundAnchorA;
            return Vec2.distance(p, s)
        };
        PulleyJoint.prototype.getCurrentLengthB = function() {
            var p = this.m_bodyB.getWorldPoint(this.m_localAnchorB);
            var s = this.m_groundAnchorB;
            return Vec2.distance(p, s)
        };
        PulleyJoint.prototype.shiftOrigin = function(newOrigin) {
            this.m_groundAnchorA.sub(newOrigin);
            this.m_groundAnchorB.sub(newOrigin)
        };
        PulleyJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        PulleyJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        PulleyJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(this.m_impulse, this.m_uB).mul(inv_dt)
        };
        PulleyJoint.prototype.getReactionTorque = function(inv_dt) {
            return 0
        };
        PulleyJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            this.m_uA = Vec2.sub(Vec2.add(cA, this.m_rA), this.m_groundAnchorA);
            this.m_uB = Vec2.sub(Vec2.add(cB, this.m_rB), this.m_groundAnchorB);
            var lengthA = this.m_uA.length();
            var lengthB = this.m_uB.length();
            if (lengthA > 10 * Settings.linearSlop) {
                this.m_uA.mul(1 / lengthA)
            } else {
                this.m_uA.setZero()
            }
            if (lengthB > 10 * Settings.linearSlop) {
                this.m_uB.mul(1 / lengthB)
            } else {
                this.m_uB.setZero()
            }
            var ruA = Vec2.cross(this.m_rA, this.m_uA);
            var ruB = Vec2.cross(this.m_rB, this.m_uB);
            var mA = this.m_invMassA + this.m_invIA * ruA * ruA;
            var mB = this.m_invMassB + this.m_invIB * ruB * ruB;
            this.m_mass = mA + this.m_ratio * this.m_ratio * mB;
            if (this.m_mass > 0) {
                this.m_mass = 1 / this.m_mass
            }
            if (step.warmStarting) {
                this.m_impulse *= step.dtRatio;
                var PA = Vec2.mul(-this.m_impulse, this.m_uA);
                var PB = Vec2.mul(-this.m_ratio * this.m_impulse, this.m_uB);
                vA.addMul(this.m_invMassA, PA);
                wA += this.m_invIA * Vec2.cross(this.m_rA, PA);
                vB.addMul(this.m_invMassB, PB);
                wB += this.m_invIB * Vec2.cross(this.m_rB, PB)
            } else {
                this.m_impulse = 0
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        PulleyJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var vpA = Vec2.add(vA, Vec2.cross(wA, this.m_rA));
            var vpB = Vec2.add(vB, Vec2.cross(wB, this.m_rB));
            var Cdot = -Vec2.dot(this.m_uA, vpA) - this.m_ratio * Vec2.dot(this.m_uB, vpB);
            var impulse = -this.m_mass * Cdot;
            this.m_impulse += impulse;
            var PA = Vec2.mul(-impulse, this.m_uA);
            var PB = Vec2.mul(-this.m_ratio * impulse, this.m_uB);
            vA.addMul(this.m_invMassA, PA);
            wA += this.m_invIA * Vec2.cross(this.m_rA, PA);
            vB.addMul(this.m_invMassB, PB);
            wB += this.m_invIB * Vec2.cross(this.m_rB, PB);
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        PulleyJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA),
                qB = Rot.neo(aB);
            var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var uA = Vec2.sub(Vec2.add(cA, this.m_rA), this.m_groundAnchorA);
            var uB = Vec2.sub(Vec2.add(cB, this.m_rB), this.m_groundAnchorB);
            var lengthA = uA.length();
            var lengthB = uB.length();
            if (lengthA > 10 * Settings.linearSlop) {
                uA.mul(1 / lengthA)
            } else {
                uA.setZero()
            }
            if (lengthB > 10 * Settings.linearSlop) {
                uB.mul(1 / lengthB)
            } else {
                uB.setZero()
            }
            var ruA = Vec2.cross(rA, uA);
            var ruB = Vec2.cross(rB, uB);
            var mA = this.m_invMassA + this.m_invIA * ruA * ruA;
            var mB = this.m_invMassB + this.m_invIB * ruB * ruB;
            var mass = mA + this.m_ratio * this.m_ratio * mB;
            if (mass > 0) {
                mass = 1 / mass
            }
            var C = this.m_constant - lengthA - this.m_ratio * lengthB;
            var linearError = Math.abs(C);
            var impulse = -mass * C;
            var PA = Vec2.mul(-impulse, uA);
            var PB = Vec2.mul(-this.m_ratio * impulse, uB);
            cA.addMul(this.m_invMassA, PA);
            aA += this.m_invIA * Vec2.cross(rA, PA);
            cB.addMul(this.m_invMassB, PB);
            aB += this.m_invIB * Vec2.cross(rB, PB);
            this.m_bodyA.c_position.c = cA;
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c = cB;
            this.m_bodyB.c_position.a = aB;
            return linearError < Settings.linearSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    37: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = RevoluteJoint;
        var common = require("../util/common");
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        var inactiveLimit = 0;
        var atLowerLimit = 1;
        var atUpperLimit = 2;
        var equalLimits = 3;
        RevoluteJoint.TYPE = "revolute-joint";
        RevoluteJoint._super = Joint;
        RevoluteJoint.prototype = create(RevoluteJoint._super.prototype);
        var DEFAULTS = {
            lowerAngle: 0,
            upperAngle: 0,
            maxMotorTorque: 0,
            motorSpeed: 0,
            enableLimit: false,
            enableMotor: false
        };

        function RevoluteJoint(def, bodyA, bodyB, anchor) {
            if (!(this instanceof RevoluteJoint)) {
                return new RevoluteJoint(def, bodyA, bodyB, anchor)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = RevoluteJoint.TYPE;
            this.m_localAnchorA = anchor ? bodyA.getLocalPoint(anchor) : def.localAnchorA || Vec2.zero();
            this.m_localAnchorB = anchor ? bodyB.getLocalPoint(anchor) : def.localAnchorB || Vec2.zero();
            this.m_referenceAngle = Math.isFinite(def.referenceAngle) ? def.referenceAngle : bodyB.getAngle() - bodyA.getAngle();
            this.m_impulse = Vec3();
            this.m_motorImpulse = 0;
            this.m_lowerAngle = def.lowerAngle;
            this.m_upperAngle = def.upperAngle;
            this.m_maxMotorTorque = def.maxMotorTorque;
            this.m_motorSpeed = def.motorSpeed;
            this.m_enableLimit = def.enableLimit;
            this.m_enableMotor = def.enableMotor;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_mass = new Mat33;
            this.m_motorMass;
            this.m_limitState = inactiveLimit
        }
        RevoluteJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        RevoluteJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        RevoluteJoint.prototype.getReferenceAngle = function() {
            return this.m_referenceAngle
        };
        RevoluteJoint.prototype.getJointAngle = function() {
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            return bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle
        };
        RevoluteJoint.prototype.getJointSpeed = function() {
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            return bB.m_angularVelocity - bA.m_angularVelocity
        };
        RevoluteJoint.prototype.isMotorEnabled = function() {
            return this.m_enableMotor
        };
        RevoluteJoint.prototype.enableMotor = function(flag) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_enableMotor = flag
        };
        RevoluteJoint.prototype.getMotorTorque = function(inv_dt) {
            return inv_dt * this.m_motorImpulse
        };
        RevoluteJoint.prototype.setMotorSpeed = function(speed) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_motorSpeed = speed
        };
        RevoluteJoint.prototype.getMotorSpeed = function() {
            return this.m_motorSpeed
        };
        RevoluteJoint.prototype.setMaxMotorTorque = function(torque) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_maxMotorTorque = torque
        };
        RevoluteJoint.prototype.isLimitEnabled = function() {
            return this.m_enableLimit
        };
        RevoluteJoint.prototype.enableLimit = function(flag) {
            if (flag != this.m_enableLimit) {
                this.m_bodyA.setAwake(true);
                this.m_bodyB.setAwake(true);
                this.m_enableLimit = flag;
                this.m_impulse.z = 0
            }
        };
        RevoluteJoint.prototype.getLowerLimit = function() {
            return this.m_lowerAngle
        };
        RevoluteJoint.prototype.getUpperLimit = function() {
            return this.m_upperAngle
        };
        RevoluteJoint.prototype.setLimits = function(lower, upper) {
            _ASSERT && common.assert(lower <= upper);
            if (lower != this.m_lowerAngle || upper != this.m_upperAngle) {
                this.m_bodyA.setAwake(true);
                this.m_bodyB.setAwake(true);
                this.m_impulse.z = 0;
                this.m_lowerAngle = lower;
                this.m_upperAngle = upper
            }
        };
        RevoluteJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        RevoluteJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        RevoluteJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.neo(this.m_impulse.x, this.m_impulse.y).mul(inv_dt)
        };
        RevoluteJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * this.m_impulse.z
        };
        RevoluteJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var fixedRotation = iA + iB === 0;
            this.m_mass.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
            this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
            this.m_mass.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
            this.m_mass.ex.y = this.m_mass.ey.x;
            this.m_mass.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
            this.m_mass.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
            this.m_mass.ex.z = this.m_mass.ez.x;
            this.m_mass.ey.z = this.m_mass.ez.y;
            this.m_mass.ez.z = iA + iB;
            this.m_motorMass = iA + iB;
            if (this.m_motorMass > 0) {
                this.m_motorMass = 1 / this.m_motorMass
            }
            if (this.m_enableMotor == false || fixedRotation) {
                this.m_motorImpulse = 0
            }
            if (this.m_enableLimit && fixedRotation == false) {
                var jointAngle = aB - aA - this.m_referenceAngle;
                if (Math.abs(this.m_upperAngle - this.m_lowerAngle) < 2 * Settings.angularSlop) {
                    this.m_limitState = equalLimits
                } else if (jointAngle <= this.m_lowerAngle) {
                    if (this.m_limitState != atLowerLimit) {
                        this.m_impulse.z = 0
                    }
                    this.m_limitState = atLowerLimit
                } else if (jointAngle >= this.m_upperAngle) {
                    if (this.m_limitState != atUpperLimit) {
                        this.m_impulse.z = 0
                    }
                    this.m_limitState = atUpperLimit
                } else {
                    this.m_limitState = inactiveLimit;
                    this.m_impulse.z = 0
                }
            } else {
                this.m_limitState = inactiveLimit
            }
            if (step.warmStarting) {
                this.m_impulse.mul(step.dtRatio);
                this.m_motorImpulse *= step.dtRatio;
                var P = Vec2.neo(this.m_impulse.x, this.m_impulse.y);
                vA.subMul(mA, P);
                wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_motorImpulse + this.m_impulse.z);
                vB.addMul(mB, P);
                wB += iB * (Vec2.cross(this.m_rB, P) + this.m_motorImpulse + this.m_impulse.z)
            } else {
                this.m_impulse.setZero();
                this.m_motorImpulse = 0
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        RevoluteJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var fixedRotation = iA + iB === 0;
            if (this.m_enableMotor && this.m_limitState != equalLimits && fixedRotation == false) {
                var Cdot = wB - wA - this.m_motorSpeed;
                var impulse = -this.m_motorMass * Cdot;
                var oldImpulse = this.m_motorImpulse;
                var maxImpulse = step.dt * this.m_maxMotorTorque;
                this.m_motorImpulse = Math.clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
                impulse = this.m_motorImpulse - oldImpulse;
                wA -= iA * impulse;
                wB += iB * impulse
            }
            if (this.m_enableLimit && this.m_limitState != inactiveLimit && fixedRotation == false) {
                var Cdot1 = Vec2.zero();
                Cdot1.addCombine(1, vB, 1, Vec2.cross(wB, this.m_rB));
                Cdot1.subCombine(1, vA, 1, Vec2.cross(wA, this.m_rA));
                var Cdot2 = wB - wA;
                var Cdot = Vec3(Cdot1.x, Cdot1.y, Cdot2);
                var impulse = Vec3.neg(this.m_mass.solve33(Cdot));
                if (this.m_limitState == equalLimits) {
                    this.m_impulse.add(impulse)
                } else if (this.m_limitState == atLowerLimit) {
                    var newImpulse = this.m_impulse.z + impulse.z;
                    if (newImpulse < 0) {
                        var rhs = Vec2.combine(-1, Cdot1, this.m_impulse.z, Vec2.neo(this.m_mass.ez.x, this.m_mass.ez.y));
                        var reduced = this.m_mass.solve22(rhs);
                        impulse.x = reduced.x;
                        impulse.y = reduced.y;
                        impulse.z = -this.m_impulse.z;
                        this.m_impulse.x += reduced.x;
                        this.m_impulse.y += reduced.y;
                        this.m_impulse.z = 0
                    } else {
                        this.m_impulse.add(impulse)
                    }
                } else if (this.m_limitState == atUpperLimit) {
                    var newImpulse = this.m_impulse.z + impulse.z;
                    if (newImpulse > 0) {
                        var rhs = Vec2.combine(-1, Cdot1, this.m_impulse.z, Vec2.neo(this.m_mass.ez.x, this.m_mass.ez.y));
                        var reduced = this.m_mass.solve22(rhs);
                        impulse.x = reduced.x;
                        impulse.y = reduced.y;
                        impulse.z = -this.m_impulse.z;
                        this.m_impulse.x += reduced.x;
                        this.m_impulse.y += reduced.y;
                        this.m_impulse.z = 0
                    } else {
                        this.m_impulse.add(impulse)
                    }
                }
                var P = Vec2.neo(impulse.x, impulse.y);
                vA.subMul(mA, P);
                wA -= iA * (Vec2.cross(this.m_rA, P) + impulse.z);
                vB.addMul(mB, P);
                wB += iB * (Vec2.cross(this.m_rB, P) + impulse.z)
            } else {
                var Cdot = Vec2.zero();
                Cdot.addCombine(1, vB, 1, Vec2.cross(wB, this.m_rB));
                Cdot.subCombine(1, vA, 1, Vec2.cross(wA, this.m_rA));
                var impulse = this.m_mass.solve22(Vec2.neg(Cdot));
                this.m_impulse.x += impulse.x;
                this.m_impulse.y += impulse.y;
                vA.subMul(mA, impulse);
                wA -= iA * Vec2.cross(this.m_rA, impulse);
                vB.addMul(mB, impulse);
                wB += iB * Vec2.cross(this.m_rB, impulse)
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        RevoluteJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var angularError = 0;
            var positionError = 0;
            var fixedRotation = this.m_invIA + this.m_invIB == 0;
            if (this.m_enableLimit && this.m_limitState != inactiveLimit && fixedRotation == false) {
                var angle = aB - aA - this.m_referenceAngle;
                var limitImpulse = 0;
                if (this.m_limitState == equalLimits) {
                    var C = Math.clamp(angle - this.m_lowerAngle, -Settings.maxAngularCorrection, Settings.maxAngularCorrection);
                    limitImpulse = -this.m_motorMass * C;
                    angularError = Math.abs(C)
                } else if (this.m_limitState == atLowerLimit) {
                    var C = angle - this.m_lowerAngle;
                    angularError = -C;
                    C = Math.clamp(C + Settings.angularSlop, -Settings.maxAngularCorrection, 0);
                    limitImpulse = -this.m_motorMass * C
                } else if (this.m_limitState == atUpperLimit) {
                    var C = angle - this.m_upperAngle;
                    angularError = C;
                    C = Math.clamp(C - Settings.angularSlop, 0, Settings.maxAngularCorrection);
                    limitImpulse = -this.m_motorMass * C
                }
                aA -= this.m_invIA * limitImpulse;
                aB += this.m_invIB * limitImpulse
            } {
                qA.set(aA);
                qB.set(aB);
                var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
                var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
                var C = Vec2.zero();
                C.addCombine(1, cB, 1, rB);
                C.subCombine(1, cA, 1, rA);
                positionError = C.length();
                var mA = this.m_invMassA;
                var mB = this.m_invMassB;
                var iA = this.m_invIA;
                var iB = this.m_invIB;
                var K = new Mat22;
                K.ex.x = mA + mB + iA * rA.y * rA.y + iB * rB.y * rB.y;
                K.ex.y = -iA * rA.x * rA.y - iB * rB.x * rB.y;
                K.ey.x = K.ex.y;
                K.ey.y = mA + mB + iA * rA.x * rA.x + iB * rB.x * rB.x;
                var impulse = Vec2.neg(K.solve(C));
                cA.subMul(mA, impulse);
                aA -= iA * Vec2.cross(rA, impulse);
                cB.addMul(mB, impulse);
                aB += iB * Vec2.cross(rB, impulse)
            }
            this.m_bodyA.c_position.c.set(cA);
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c.set(cB);
            this.m_bodyB.c_position.a = aB;
            return positionError <= Settings.linearSlop && angularError <= Settings.angularSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    38: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = RopeJoint;
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        var inactiveLimit = 0;
        var atLowerLimit = 1;
        var atUpperLimit = 2;
        var equalLimits = 3;
        RopeJoint.TYPE = "rope-joint";
        RopeJoint._super = Joint;
        RopeJoint.prototype = create(RopeJoint._super.prototype);
        var DEFAULTS = {
            maxLength: 0
        };

        function RopeJoint(def, bodyA, bodyB, anchor) {
            if (!(this instanceof RopeJoint)) {
                return new RopeJoint(def, bodyA, bodyB, anchor)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = RopeJoint.TYPE;
            this.m_localAnchorA = anchor ? bodyA.getLocalPoint(anchor) : def.localAnchorA || Vec2.neo(-1, 0);
            this.m_localAnchorB = anchor ? bodyB.getLocalPoint(anchor) : def.localAnchorB || Vec2.neo(1, 0);
            this.m_maxLength = def.maxLength;
            this.m_mass = 0;
            this.m_impulse = 0;
            this.m_length = 0;
            this.m_state = inactiveLimit;
            this.m_u;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_mass
        }
        RopeJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        RopeJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        RopeJoint.prototype.setMaxLength = function(length) {
            this.m_maxLength = length
        };
        RopeJoint.prototype.getMaxLength = function() {
            return this.m_maxLength
        };
        RopeJoint.prototype.getLimitState = function() {
            return this.m_state
        };
        RopeJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        RopeJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        RopeJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.mul(this.m_impulse, this.m_u).mul(inv_dt)
        };
        RopeJoint.prototype.getReactionTorque = function(inv_dt) {
            return 0
        };
        RopeJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            this.m_rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);
            this.m_rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);
            this.m_u = Vec2.zero();
            this.m_u.addCombine(1, cB, 1, this.m_rB);
            this.m_u.subCombine(1, cA, 1, this.m_rA);
            this.m_length = this.m_u.length();
            var C = this.m_length - this.m_maxLength;
            if (C > 0) {
                this.m_state = atUpperLimit
            } else {
                this.m_state = inactiveLimit
            }
            if (this.m_length > Settings.linearSlop) {
                this.m_u.mul(1 / this.m_length)
            } else {
                this.m_u.setZero();
                this.m_mass = 0;
                this.m_impulse = 0;
                return
            }
            var crA = Vec2.cross(this.m_rA, this.m_u);
            var crB = Vec2.cross(this.m_rB, this.m_u);
            var invMass = this.m_invMassA + this.m_invIA * crA * crA + this.m_invMassB + this.m_invIB * crB * crB;
            this.m_mass = invMass != 0 ? 1 / invMass : 0;
            if (step.warmStarting) {
                this.m_impulse *= step.dtRatio;
                var P = Vec2.mul(this.m_impulse, this.m_u);
                vA.subMul(this.m_invMassA, P);
                wA -= this.m_invIA * Vec2.cross(this.m_rA, P);
                vB.addMul(this.m_invMassB, P);
                wB += this.m_invIB * Vec2.cross(this.m_rB, P)
            } else {
                this.m_impulse = 0
            }
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB
        };
        RopeJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var vpA = Vec2.addCross(vA, wA, this.m_rA);
            var vpB = Vec2.addCross(vB, wB, this.m_rB);
            var C = this.m_length - this.m_maxLength;
            var Cdot = Vec2.dot(this.m_u, Vec2.sub(vpB, vpA));
            if (C < 0) {
                Cdot += step.inv_dt * C
            }
            var impulse = -this.m_mass * Cdot;
            var oldImpulse = this.m_impulse;
            this.m_impulse = Math.min(0, this.m_impulse + impulse);
            impulse = this.m_impulse - oldImpulse;
            var P = Vec2.mul(impulse, this.m_u);
            vA.subMul(this.m_invMassA, P);
            wA -= this.m_invIA * Vec2.cross(this.m_rA, P);
            vB.addMul(this.m_invMassB, P);
            wB += this.m_invIB * Vec2.cross(this.m_rB, P);
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        RopeJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);
            var rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);
            var u = Vec2.zero();
            u.addCombine(1, cB, 1, rB);
            u.subCombine(1, cA, 1, rA);
            var length = u.normalize();
            var C = length - this.m_maxLength;
            C = Math.clamp(C, 0, Settings.maxLinearCorrection);
            var impulse = -this.m_mass * C;
            var P = Vec2.mul(impulse, u);
            cA.subMul(this.m_invMassA, P);
            aA -= this.m_invIA * Vec2.cross(rA, P);
            cB.addMul(this.m_invMassB, P);
            aB += this.m_invIB * Vec2.cross(rB, P);
            this.m_bodyA.c_position.c.set(cA);
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c.set(cB);
            this.m_bodyB.c_position.a = aB;
            return length - this.m_maxLength < Settings.linearSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/create": 54,
        "../util/options": 55
    }],
    39: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = WeldJoint;
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        WeldJoint.TYPE = "weld-joint";
        WeldJoint._super = Joint;
        WeldJoint.prototype = create(WeldJoint._super.prototype);
        var DEFAULTS = {
            frequencyHz: 0,
            dampingRatio: 0
        };

        function WeldJoint(def, bodyA, bodyB, anchor) {
            if (!(this instanceof WeldJoint)) {
                return new WeldJoint(def, bodyA, bodyB, anchor)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = WeldJoint.TYPE;
            this.m_localAnchorA = anchor ? bodyA.getLocalPoint(anchor) : def.localAnchorA || Vec2.zero();
            this.m_localAnchorB = anchor ? bodyB.getLocalPoint(anchor) : def.localAnchorB || Vec2.zero();
            this.m_referenceAngle = Math.isFinite(def.referenceAngle) ? def.referenceAngle : bodyB.getAngle() - bodyA.getAngle();
            this.m_frequencyHz = def.frequencyHz;
            this.m_dampingRatio = def.dampingRatio;
            this.m_impulse = Vec3();
            this.m_bias = 0;
            this.m_gamma = 0;
            this.m_rA;
            this.m_rB;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_mass = new Mat33
        }
        WeldJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        WeldJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        WeldJoint.prototype.getReferenceAngle = function() {
            return this.m_referenceAngle
        };
        WeldJoint.prototype.setFrequency = function(hz) {
            this.m_frequencyHz = hz
        };
        WeldJoint.prototype.getFrequency = function() {
            return this.m_frequencyHz
        };
        WeldJoint.prototype.setDampingRatio = function(ratio) {
            this.m_dampingRatio = ratio
        };
        WeldJoint.prototype.getDampingRatio = function() {
            return this.m_dampingRatio
        };
        WeldJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        WeldJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        WeldJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.neo(this.m_impulse.x, this.m_impulse.y).mul(inv_dt)
        };
        WeldJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * this.m_impulse.z
        };
        WeldJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA),
                qB = Rot.neo(aB);
            this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var K = new Mat33;
            K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
            K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
            K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
            K.ex.y = K.ey.x;
            K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
            K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
            K.ex.z = K.ez.x;
            K.ey.z = K.ez.y;
            K.ez.z = iA + iB;
            if (this.m_frequencyHz > 0) {
                K.getInverse22(this.m_mass);
                var invM = iA + iB;
                var m = invM > 0 ? 1 / invM : 0;
                var C = aB - aA - this.m_referenceAngle;
                var omega = 2 * Math.PI * this.m_frequencyHz;
                var d = 2 * m * this.m_dampingRatio * omega;
                var k = m * omega * omega;
                var h = step.dt;
                this.m_gamma = h * (d + h * k);
                this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
                this.m_bias = C * h * k * this.m_gamma;
                invM += this.m_gamma;
                this.m_mass.ez.z = invM != 0 ? 1 / invM : 0
            } else if (K.ez.z == 0) {
                K.getInverse22(this.m_mass);
                this.m_gamma = 0;
                this.m_bias = 0
            } else {
                K.getSymInverse33(this.m_mass);
                this.m_gamma = 0;
                this.m_bias = 0
            }
            if (step.warmStarting) {
                this.m_impulse.mul(step.dtRatio);
                var P = Vec2.neo(this.m_impulse.x, this.m_impulse.y);
                vA.subMul(mA, P);
                wA -= iA * (Vec2.cross(this.m_rA, P) + this.m_impulse.z);
                vB.addMul(mB, P);
                wB += iB * (Vec2.cross(this.m_rB, P) + this.m_impulse.z)
            } else {
                this.m_impulse.setZero()
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        WeldJoint.prototype.solveVelocityConstraints = function(step) {
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            if (this.m_frequencyHz > 0) {
                var Cdot2 = wB - wA;
                var impulse2 = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);
                this.m_impulse.z += impulse2;
                wA -= iA * impulse2;
                wB += iB * impulse2;
                var Cdot1 = Vec2.zero();
                Cdot1.addCombine(1, vB, 1, Vec2.cross(wB, this.m_rB));
                Cdot1.subCombine(1, vA, 1, Vec2.cross(wA, this.m_rA));
                var impulse1 = Vec2.neg(Mat33.mulVec2(this.m_mass, Cdot1));
                this.m_impulse.x += impulse1.x;
                this.m_impulse.y += impulse1.y;
                var P = Vec2.clone(impulse1);
                vA.subMul(mA, P);
                wA -= iA * Vec2.cross(this.m_rA, P);
                vB.addMul(mB, P);
                wB += iB * Vec2.cross(this.m_rB, P)
            } else {
                var Cdot1 = Vec2.zero();
                Cdot1.addCombine(1, vB, 1, Vec2.cross(wB, this.m_rB));
                Cdot1.subCombine(1, vA, 1, Vec2.cross(wA, this.m_rA));
                var Cdot2 = wB - wA;
                var Cdot = Vec3(Cdot1.x, Cdot1.y, Cdot2);
                var impulse = Vec3.neg(Mat33.mulVec3(this.m_mass, Cdot));
                this.m_impulse.add(impulse);
                var P = Vec2.neo(impulse.x, impulse.y);
                vA.subMul(mA, P);
                wA -= iA * (Vec2.cross(this.m_rA, P) + impulse.z);
                vB.addMul(mB, P);
                wB += iB * (Vec2.cross(this.m_rB, P) + impulse.z)
            }
            this.m_bodyA.c_velocity.v = vA;
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v = vB;
            this.m_bodyB.c_velocity.w = wB
        };
        WeldJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA),
                qB = Rot.neo(aB);
            var mA = this.m_invMassA,
                mB = this.m_invMassB;
            var iA = this.m_invIA,
                iB = this.m_invIB;
            var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var positionError, angularError;
            var K = new Mat33;
            K.ex.x = mA + mB + rA.y * rA.y * iA + rB.y * rB.y * iB;
            K.ey.x = -rA.y * rA.x * iA - rB.y * rB.x * iB;
            K.ez.x = -rA.y * iA - rB.y * iB;
            K.ex.y = K.ey.x;
            K.ey.y = mA + mB + rA.x * rA.x * iA + rB.x * rB.x * iB;
            K.ez.y = rA.x * iA + rB.x * iB;
            K.ex.z = K.ez.x;
            K.ey.z = K.ez.y;
            K.ez.z = iA + iB;
            if (this.m_frequencyHz > 0) {
                var C1 = Vec2.zero();
                C1.addCombine(1, cB, 1, rB);
                C1.subCombine(1, cA, 1, rA);
                positionError = C1.length();
                angularError = 0;
                var P = Vec2.neg(K.solve22(C1));
                cA.subMul(mA, P);
                aA -= iA * Vec2.cross(rA, P);
                cB.addMul(mB, P);
                aB += iB * Vec2.cross(rB, P)
            } else {
                var C1 = Vec2.zero();
                C1.addCombine(1, cB, 1, rB);
                C1.subCombine(1, cA, 1, rA);
                var C2 = aB - aA - this.m_referenceAngle;
                positionError = C1.length();
                angularError = Math.abs(C2);
                var C = Vec3(C1.x, C1.y, C2);
                var impulse = Vec3();
                if (K.ez.z > 0) {
                    impulse = Vec3.neg(K.solve33(C))
                } else {
                    var impulse2 = Vec2.neg(K.solve22(C1));
                    impulse.set(impulse2.x, impulse2.y, 0)
                }
                var P = Vec2.neo(impulse.x, impulse.y);
                cA.subMul(mA, P);
                aA -= iA * (Vec2.cross(rA, P) + impulse.z);
                cB.addMul(mB, P);
                aB += iB * (Vec2.cross(rB, P) + impulse.z)
            }
            this.m_bodyA.c_position.c = cA;
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c = cB;
            this.m_bodyB.c_position.a = aB;
            return positionError <= Settings.linearSlop && angularError <= Settings.angularSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/create": 54,
        "../util/options": 55
    }],
    40: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = WheelJoint;
        var options = require("../util/options");
        var create = require("../util/create");
        var Settings = require("../Settings");
        var Math = require("../common/Math");
        var Vec2 = require("../common/Vec2");
        var Vec3 = require("../common/Vec3");
        var Mat22 = require("../common/Mat22");
        var Mat33 = require("../common/Mat33");
        var Rot = require("../common/Rot");
        var Sweep = require("../common/Sweep");
        var Transform = require("../common/Transform");
        var Velocity = require("../common/Velocity");
        var Position = require("../common/Position");
        var Joint = require("../Joint");
        WheelJoint.TYPE = "wheel-joint";
        WheelJoint._super = Joint;
        WheelJoint.prototype = create(WheelJoint._super.prototype);
        var DEFAULTS = {
            enableMotor: false,
            maxMotorTorque: 0,
            motorSpeed: 0,
            frequencyHz: 2,
            dampingRatio: .7
        };

        function WheelJoint(def, bodyA, bodyB, anchor, axis) {
            if (!(this instanceof WheelJoint)) {
                return new WheelJoint(def, bodyA, bodyB, anchor, axis)
            }
            def = options(def, DEFAULTS);
            Joint.call(this, def, bodyA, bodyB);
            bodyA = this.m_bodyA;
            bodyB = this.m_bodyB;
            this.m_type = WheelJoint.TYPE;
            this.m_localAnchorA = anchor ? bodyA.getLocalPoint(anchor) : def.localAnchorA || Vec2.zero();
            this.m_localAnchorB = anchor ? bodyB.getLocalPoint(anchor) : def.localAnchorB || Vec2.zero();
            this.m_localAxis = axis ? bodyA.getLocalVector(axis) : def.localAxisA || Vec2.neo(1, 0);
            this.m_localXAxisA = this.m_localAxis;
            this.m_localYAxisA = Vec2.cross(1, this.m_localXAxisA);
            this.m_mass = 0;
            this.m_impulse = 0;
            this.m_motorMass = 0;
            this.m_motorImpulse = 0;
            this.m_springMass = 0;
            this.m_springImpulse = 0;
            this.m_maxMotorTorque = def.maxMotorTorque;
            this.m_motorSpeed = def.motorSpeed;
            this.m_enableMotor = def.enableMotor;
            this.m_frequencyHz = def.frequencyHz;
            this.m_dampingRatio = def.dampingRatio;
            this.m_bias = 0;
            this.m_gamma = 0;
            this.m_localCenterA;
            this.m_localCenterB;
            this.m_invMassA;
            this.m_invMassB;
            this.m_invIA;
            this.m_invIB;
            this.m_ax = Vec2.zero();
            this.m_ay = Vec2.zero();
            this.m_sAx;
            this.m_sBx;
            this.m_sAy;
            this.m_sBy
        }
        WheelJoint.prototype.getLocalAnchorA = function() {
            return this.m_localAnchorA
        };
        WheelJoint.prototype.getLocalAnchorB = function() {
            return this.m_localAnchorB
        };
        WheelJoint.prototype.getLocalAxisA = function() {
            return this.m_localXAxisA
        };
        WheelJoint.prototype.getJointTranslation = function() {
            var bA = this.m_bodyA;
            var bB = this.m_bodyB;
            var pA = bA.getWorldPoint(this.m_localAnchorA);
            var pB = bB.getWorldPoint(this.m_localAnchorB);
            var d = Vec2.sub(pB, pA);
            var axis = bA.getWorldVector(this.m_localXAxisA);
            var translation = Vec2.dot(d, axis);
            return translation
        };
        WheelJoint.prototype.getJointSpeed = function() {
            var wA = this.m_bodyA.m_angularVelocity;
            var wB = this.m_bodyB.m_angularVelocity;
            return wB - wA
        };
        WheelJoint.prototype.isMotorEnabled = function() {
            return this.m_enableMotor
        };
        WheelJoint.prototype.enableMotor = function(flag) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_enableMotor = flag
        };
        WheelJoint.prototype.setMotorSpeed = function(speed) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_motorSpeed = speed
        };
        WheelJoint.prototype.getMotorSpeed = function() {
            return this.m_motorSpeed
        };
        WheelJoint.prototype.setMaxMotorTorque = function(torque) {
            this.m_bodyA.setAwake(true);
            this.m_bodyB.setAwake(true);
            this.m_maxMotorTorque = torque
        };
        WheelJoint.prototype.getMaxMotorTorque = function() {
            return this.m_maxMotorTorque
        };
        WheelJoint.prototype.getMotorTorque = function(inv_dt) {
            return inv_dt * this.m_motorImpulse
        };
        WheelJoint.prototype.setSpringFrequencyHz = function(hz) {
            this.m_frequencyHz = hz
        };
        WheelJoint.prototype.getSpringFrequencyHz = function() {
            return this.m_frequencyHz
        };
        WheelJoint.prototype.setSpringDampingRatio = function(ratio) {
            this.m_dampingRatio = ratio
        };
        WheelJoint.prototype.getSpringDampingRatio = function() {
            return this.m_dampingRatio
        };
        WheelJoint.prototype.getAnchorA = function() {
            return this.m_bodyA.getWorldPoint(this.m_localAnchorA)
        };
        WheelJoint.prototype.getAnchorB = function() {
            return this.m_bodyB.getWorldPoint(this.m_localAnchorB)
        };
        WheelJoint.prototype.getReactionForce = function(inv_dt) {
            return Vec2.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax).mul(inv_dt)
        };
        WheelJoint.prototype.getReactionTorque = function(inv_dt) {
            return inv_dt * this.m_motorImpulse
        };
        WheelJoint.prototype.initVelocityConstraints = function(step) {
            this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
            this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
            this.m_invMassA = this.m_bodyA.m_invMass;
            this.m_invMassB = this.m_bodyB.m_invMass;
            this.m_invIA = this.m_bodyA.m_invI;
            this.m_invIB = this.m_bodyB.m_invI;
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var d = Vec2.zero();
            d.addCombine(1, cB, 1, rB);
            d.subCombine(1, cA, 1, rA); {
                this.m_ay = Rot.mulVec2(qA, this.m_localYAxisA);
                this.m_sAy = Vec2.cross(Vec2.add(d, rA), this.m_ay);
                this.m_sBy = Vec2.cross(rB, this.m_ay);
                this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;
                if (this.m_mass > 0) {
                    this.m_mass = 1 / this.m_mass
                }
            }
            this.m_springMass = 0;
            this.m_bias = 0;
            this.m_gamma = 0;
            if (this.m_frequencyHz > 0) {
                this.m_ax = Rot.mulVec2(qA, this.m_localXAxisA);
                this.m_sAx = Vec2.cross(Vec2.add(d, rA), this.m_ax);
                this.m_sBx = Vec2.cross(rB, this.m_ax);
                var invMass = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;
                if (invMass > 0) {
                    this.m_springMass = 1 / invMass;
                    var C = Vec2.dot(d, this.m_ax);
                    var omega = 2 * Math.PI * this.m_frequencyHz;
                    var d = 2 * this.m_springMass * this.m_dampingRatio * omega;
                    var k = this.m_springMass * omega * omega;
                    var h = step.dt;
                    this.m_gamma = h * (d + h * k);
                    if (this.m_gamma > 0) {
                        this.m_gamma = 1 / this.m_gamma
                    }
                    this.m_bias = C * h * k * this.m_gamma;
                    this.m_springMass = invMass + this.m_gamma;
                    if (this.m_springMass > 0) {
                        this.m_springMass = 1 / this.m_springMass
                    }
                }
            } else {
                this.m_springImpulse = 0
            }
            if (this.m_enableMotor) {
                this.m_motorMass = iA + iB;
                if (this.m_motorMass > 0) {
                    this.m_motorMass = 1 / this.m_motorMass
                }
            } else {
                this.m_motorMass = 0;
                this.m_motorImpulse = 0
            }
            if (step.warmStarting) {
                this.m_impulse *= step.dtRatio;
                this.m_springImpulse *= step.dtRatio;
                this.m_motorImpulse *= step.dtRatio;
                var P = Vec2.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax);
                var LA = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse;
                var LB = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;
                vA.subMul(this.m_invMassA, P);
                wA -= this.m_invIA * LA;
                vB.addMul(this.m_invMassB, P);
                wB += this.m_invIB * LB
            } else {
                this.m_impulse = 0;
                this.m_springImpulse = 0;
                this.m_motorImpulse = 0
            }
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB
        };
        WheelJoint.prototype.solveVelocityConstraints = function(step) {
            var mA = this.m_invMassA;
            var mB = this.m_invMassB;
            var iA = this.m_invIA;
            var iB = this.m_invIB;
            var vA = this.m_bodyA.c_velocity.v;
            var wA = this.m_bodyA.c_velocity.w;
            var vB = this.m_bodyB.c_velocity.v;
            var wB = this.m_bodyB.c_velocity.w; {
                var Cdot = Vec2.dot(this.m_ax, vB) - Vec2.dot(this.m_ax, vA) + this.m_sBx * wB - this.m_sAx * wA;
                var impulse = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);
                this.m_springImpulse += impulse;
                var P = Vec2.mul(impulse, this.m_ax);
                var LA = impulse * this.m_sAx;
                var LB = impulse * this.m_sBx;
                vA.subMul(mA, P);
                wA -= iA * LA;
                vB.addMul(mB, P);
                wB += iB * LB
            } {
                var Cdot = wB - wA - this.m_motorSpeed;
                var impulse = -this.m_motorMass * Cdot;
                var oldImpulse = this.m_motorImpulse;
                var maxImpulse = step.dt * this.m_maxMotorTorque;
                this.m_motorImpulse = Math.clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
                impulse = this.m_motorImpulse - oldImpulse;
                wA -= iA * impulse;
                wB += iB * impulse
            } {
                var Cdot = Vec2.dot(this.m_ay, vB) - Vec2.dot(this.m_ay, vA) + this.m_sBy * wB - this.m_sAy * wA;
                var impulse = -this.m_mass * Cdot;
                this.m_impulse += impulse;
                var P = Vec2.mul(impulse, this.m_ay);
                var LA = impulse * this.m_sAy;
                var LB = impulse * this.m_sBy;
                vA.subMul(mA, P);
                wA -= iA * LA;
                vB.addMul(mB, P);
                wB += iB * LB
            }
            this.m_bodyA.c_velocity.v.set(vA);
            this.m_bodyA.c_velocity.w = wA;
            this.m_bodyB.c_velocity.v.set(vB);
            this.m_bodyB.c_velocity.w = wB
        };
        WheelJoint.prototype.solvePositionConstraints = function(step) {
            var cA = this.m_bodyA.c_position.c;
            var aA = this.m_bodyA.c_position.a;
            var cB = this.m_bodyB.c_position.c;
            var aB = this.m_bodyB.c_position.a;
            var qA = Rot.neo(aA);
            var qB = Rot.neo(aB);
            var rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
            var rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
            var d = Vec2.zero();
            d.addCombine(1, cB, 1, rB);
            d.subCombine(1, cA, 1, rA);
            var ay = Rot.mulVec2(qA, this.m_localYAxisA);
            var sAy = Vec2.cross(Vec2.add(d, rA), ay);
            var sBy = Vec2.cross(rB, ay);
            var C = Vec2.dot(d, ay);
            var k = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;
            var impulse;
            if (k != 0) {
                impulse = -C / k
            } else {
                impulse = 0
            }
            var P = Vec2.mul(impulse, ay);
            var LA = impulse * sAy;
            var LB = impulse * sBy;
            cA.subMul(this.m_invMassA, P);
            aA -= this.m_invIA * LA;
            cB.addMul(this.m_invMassB, P);
            aB += this.m_invIB * LB;
            this.m_bodyA.c_position.c.set(cA);
            this.m_bodyA.c_position.a = aA;
            this.m_bodyB.c_position.c.set(cB);
            this.m_bodyB.c_position.a = aB;
            return Math.abs(C) <= Settings.linearSlop
        }
    }, {
        "../Joint": 7,
        "../Settings": 9,
        "../common/Mat22": 18,
        "../common/Mat33": 19,
        "../common/Math": 20,
        "../common/Position": 21,
        "../common/Rot": 22,
        "../common/Sweep": 23,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../common/Vec3": 26,
        "../common/Velocity": 27,
        "../util/create": 54,
        "../util/options": 55
    }],
    41: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = BoxShape;
        var common = require("../util/common");
        var create = require("../util/create");
        var PolygonShape = require("./PolygonShape");
        BoxShape._super = PolygonShape;
        BoxShape.prototype = create(BoxShape._super.prototype);
        BoxShape.TYPE = "polygon";

        function BoxShape(hx, hy, center, angle) {
            if (!(this instanceof BoxShape)) {
                return new BoxShape(hx, hy, center, angle)
            }
            BoxShape._super.call(this);
            this._setAsBox(hx, hy, center, angle)
        }
    }, {
        "../util/common": 53,
        "../util/create": 54,
        "./PolygonShape": 50
    }],
    42: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = ChainShape;
        var common = require("../util/common");
        var create = require("../util/create");
        var options = require("../util/options");
        var Math = require("../common/Math");
        var Transform = require("../common/Transform");
        var Rot = require("../common/Rot");
        var Vec2 = require("../common/Vec2");
        var AABB = require("../collision/AABB");
        var Settings = require("../Settings");
        var Shape = require("../Shape");
        var EdgeShape = require("./EdgeShape");
        ChainShape._super = Shape;
        ChainShape.prototype = create(ChainShape._super.prototype);
        ChainShape.TYPE = "chain";

        function ChainShape(vertices, loop) {
            if (!(this instanceof ChainShape)) {
                return new ChainShape(vertices, loop)
            }
            ChainShape._super.call(this);
            this.m_type = ChainShape.TYPE;
            this.m_radius = Settings.polygonRadius;
            this.m_vertices = [];
            this.m_count = 0;
            this.m_prevVertex = null;
            this.m_nextVertex = null;
            this.m_hasPrevVertex = false;
            this.m_hasNextVertex = false;
            if (vertices && vertices.length) {
                if (loop) {
                    this._createLoop(vertices)
                } else {
                    this._createChain(vertices)
                }
            }
        }
        ChainShape.prototype._createLoop = function(vertices) {
            _ASSERT && common.assert(this.m_vertices.length == 0 && this.m_count == 0);
            _ASSERT && common.assert(vertices.length >= 3);
            for (var i = 1; i < vertices.length; ++i) {
                var v1 = vertices[i - 1];
                var v2 = vertices[i];
                _ASSERT && common.assert(Vec2.distanceSquared(v1, v2) > Settings.linearSlopSquared)
            }
            this.m_vertices.length = 0;
            this.m_count = vertices.length + 1;
            for (var i = 0; i < vertices.length; ++i) {
                this.m_vertices[i] = vertices[i].clone()
            }
            this.m_vertices[vertices.length] = vertices[0].clone();
            this.m_prevVertex = this.m_vertices[this.m_count - 2];
            this.m_nextVertex = this.m_vertices[1];
            this.m_hasPrevVertex = true;
            this.m_hasNextVertex = true;
            return this
        };
        ChainShape.prototype._createChain = function(vertices) {
            _ASSERT && common.assert(this.m_vertices.length == 0 && this.m_count == 0);
            _ASSERT && common.assert(vertices.length >= 2);
            for (var i = 1; i < vertices.length; ++i) {
                var v1 = vertices[i - 1];
                var v2 = vertices[i];
                _ASSERT && common.assert(Vec2.distanceSquared(v1, v2) > Settings.linearSlopSquared)
            }
            this.m_count = vertices.length;
            for (var i = 0; i < vertices.length; ++i) {
                this.m_vertices[i] = vertices[i].clone()
            }
            this.m_hasPrevVertex = false;
            this.m_hasNextVertex = false;
            this.m_prevVertex = null;
            this.m_nextVertex = null;
            return this
        };
        ChainShape.prototype._setPrevVertex = function(prevVertex) {
            this.m_prevVertex = prevVertex;
            this.m_hasPrevVertex = true
        };
        ChainShape.prototype._setNextVertex = function(nextVertex) {
            this.m_nextVertex = nextVertex;
            this.m_hasNextVertex = true
        };
        ChainShape.prototype._clone = function() {
            var clone = new ChainShape;
            clone.createChain(this.m_vertices);
            clone.m_type = this.m_type;
            clone.m_radius = this.m_radius;
            clone.m_prevVertex = this.m_prevVertex;
            clone.m_nextVertex = this.m_nextVertex;
            clone.m_hasPrevVertex = this.m_hasPrevVertex;
            clone.m_hasNextVertex = this.m_hasNextVertex;
            return clone
        };
        ChainShape.prototype.getChildCount = function() {
            return this.m_count - 1
        };
        ChainShape.prototype.getChildEdge = function(edge, childIndex) {
            _ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count - 1);
            edge.m_type = EdgeShape.TYPE;
            edge.m_radius = this.m_radius;
            edge.m_vertex1 = this.m_vertices[childIndex];
            edge.m_vertex2 = this.m_vertices[childIndex + 1];
            if (childIndex > 0) {
                edge.m_vertex0 = this.m_vertices[childIndex - 1];
                edge.m_hasVertex0 = true
            } else {
                edge.m_vertex0 = this.m_prevVertex;
                edge.m_hasVertex0 = this.m_hasPrevVertex
            }
            if (childIndex < this.m_count - 2) {
                edge.m_vertex3 = this.m_vertices[childIndex + 2];
                edge.m_hasVertex3 = true
            } else {
                edge.m_vertex3 = this.m_nextVertex;
                edge.m_hasVertex3 = this.m_hasNextVertex
            }
        };
        ChainShape.prototype.getVertex = function(index) {
            _ASSERT && common.assert(0 <= index && index <= this.m_count);
            if (index < this.m_count) {
                return this.m_vertices[index]
            } else {
                return this.m_vertices[0]
            }
        };
        ChainShape.prototype.testPoint = function(xf, p) {
            return false
        };
        ChainShape.prototype.rayCast = function(output, input, xf, childIndex) {
            _ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count);
            var edgeShape = new EdgeShape(this.getVertex(childIndex), this.getVertex(childIndex + 1));
            return edgeShape.rayCast(output, input, xf, 0)
        };
        ChainShape.prototype.computeAABB = function(aabb, xf, childIndex) {
            _ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count);
            var v1 = Transform.mulVec2(xf, this.getVertex(childIndex));
            var v2 = Transform.mulVec2(xf, this.getVertex(childIndex + 1));
            aabb.combinePoints(v1, v2)
        };
        ChainShape.prototype.computeMass = function(massData, density) {
            massData.mass = 0;
            massData.center = Vec2.neo();
            massData.I = 0
        };
        ChainShape.prototype.computeDistanceProxy = function(proxy, childIndex) {
            _ASSERT && common.assert(0 <= childIndex && childIndex < this.m_count);
            proxy.m_buffer[0] = this.getVertex(childIndex);
            proxy.m_buffer[1] = this.getVertex(childIndex + 1);
            proxy.m_vertices = proxy.m_buffer;
            proxy.m_count = 2;
            proxy.m_radius = this.m_radius
        }
    }, {
        "../Settings": 9,
        "../Shape": 10,
        "../collision/AABB": 13,
        "../common/Math": 20,
        "../common/Rot": 22,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55,
        "./EdgeShape": 49
    }],
    43: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = CircleShape;
        var common = require("../util/common");
        var create = require("../util/create");
        var options = require("../util/options");
        var Math = require("../common/Math");
        var Transform = require("../common/Transform");
        var Rot = require("../common/Rot");
        var Vec2 = require("../common/Vec2");
        var AABB = require("../collision/AABB");
        var Settings = require("../Settings");
        var Shape = require("../Shape");
        CircleShape._super = Shape;
        CircleShape.prototype = create(CircleShape._super.prototype);
        CircleShape.TYPE = "circle";

        function CircleShape(a, b) {
            if (!(this instanceof CircleShape)) {
                return new CircleShape(a, b)
            }
            CircleShape._super.call(this);
            this.m_type = CircleShape.TYPE;
            this.m_p = Vec2.zero();
            this.m_radius = 1;
            if (typeof a === "object" && Vec2.isValid(a)) {
                this.m_p.set(a);
                if (typeof b === "number") {
                    this.m_radius = b
                }
            } else if (typeof a === "number") {
                this.m_radius = a
            }
        }
        CircleShape.prototype.getRadius = function() {
            return this.m_radius
        };
        CircleShape.prototype.getCenter = function() {
            return this.m_p
        };
        CircleShape.prototype.getVertex = function(index) {
            _ASSERT && common.assert(index == 0);
            return this.m_p
        };
        CircleShape.prototype.getVertexCount = function(index) {
            return 1
        };
        CircleShape.prototype._clone = function() {
            var clone = new CircleShape;
            clone.m_type = this.m_type;
            clone.m_radius = this.m_radius;
            clone.m_p = this.m_p.clone();
            return clone
        };
        CircleShape.prototype.getChildCount = function() {
            return 1
        };
        CircleShape.prototype.testPoint = function(xf, p) {
            var center = Vec2.add(xf.p, Rot.mulVec2(xf.q, this.m_p));
            var d = Vec2.sub(p, center);
            return Vec2.dot(d, d) <= this.m_radius * this.m_radius
        };
        CircleShape.prototype.rayCast = function(output, input, xf, childIndex) {
            var position = Vec2.add(xf.p, Rot.mulVec2(xf.q, this.m_p));
            var s = Vec2.sub(input.p1, position);
            var b = Vec2.dot(s, s) - this.m_radius * this.m_radius;
            var r = Vec2.sub(input.p2, input.p1);
            var c = Vec2.dot(s, r);
            var rr = Vec2.dot(r, r);
            var sigma = c * c - rr * b;
            if (sigma < 0 || rr < Math.EPSILON) {
                return false
            }
            var a = -(c + Math.sqrt(sigma));
            if (0 <= a && a <= input.maxFraction * rr) {
                a /= rr;
                output.fraction = a;
                output.normal = Vec2.add(s, Vec2.mul(a, r));
                output.normal.normalize();
                return true
            }
            return false
        };
        CircleShape.prototype.computeAABB = function(aabb, xf, childIndex) {
            var p = Vec2.add(xf.p, Rot.mulVec2(xf.q, this.m_p));
            aabb.lowerBound.set(p.x - this.m_radius, p.y - this.m_radius);
            aabb.upperBound.set(p.x + this.m_radius, p.y + this.m_radius)
        };
        CircleShape.prototype.computeMass = function(massData, density) {
            massData.mass = density * Math.PI * this.m_radius * this.m_radius;
            massData.center = this.m_p;
            massData.I = massData.mass * (.5 * this.m_radius * this.m_radius + Vec2.dot(this.m_p, this.m_p))
        };
        CircleShape.prototype.computeDistanceProxy = function(proxy) {
            proxy.m_vertices.push(this.m_p);
            proxy.m_count = 1;
            proxy.m_radius = this.m_radius
        }
    }, {
        "../Settings": 9,
        "../Shape": 10,
        "../collision/AABB": 13,
        "../common/Math": 20,
        "../common/Rot": 22,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    44: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("../util/common");
        var Transform = require("../common/Transform");
        var Vec2 = require("../common/Vec2");
        var Contact = require("../Contact");
        var Manifold = require("../Manifold");
        var CircleShape = require("./CircleShape");
        Contact.addType(CircleShape.TYPE, CircleShape.TYPE, CircleCircleContact);

        function CircleCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {
            _ASSERT && common.assert(fixtureA.getType() == CircleShape.TYPE);
            _ASSERT && common.assert(fixtureB.getType() == CircleShape.TYPE);
            CollideCircles(manifold, fixtureA.getShape(), xfA, fixtureB.getShape(), xfB)
        }
        var cc_pA = Vec2.zero();
        var cc_pB = Vec2.zero();

        function CollideCircles(manifold, circleA, xfA, circleB, xfB) {
            manifold.pointCount = 0;
            var pA = Transform.mulVec2_(xfA, circleA.m_p, cc_pA);
            var pB = Transform.mulVec2_(xfB, circleB.m_p, cc_pB);
            var distSqr = Vec2.distanceSquared(pB, pA);
            var rA = circleA.m_radius;
            var rB = circleB.m_radius;
            var radius = rA + rB;
            if (distSqr > radius * radius) {
                return
            }
            manifold.type = Manifold.e_circles;
            manifold.localPoint.set(circleA.m_p);
            manifold.localNormal.setZero();
            manifold.pointCount = 1;
            manifold.points[0].localPoint.set(circleB.m_p);
            manifold.points[0].id.cf.indexA = 0;
            manifold.points[0].id.cf.typeA = Manifold.e_vertex;
            manifold.points[0].id.cf.indexB = 0;
            manifold.points[0].id.cf.typeB = Manifold.e_vertex
        }
        exports.CollideCircles = CollideCircles
    }, {
        "../Contact": 5,
        "../Manifold": 8,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "./CircleShape": 43
    }],
    45: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("../util/common");
        var Math = require("../common/Math");
        var Transform = require("../common/Transform");
        var Vec2 = require("../common/Vec2");
        var Manifold = require("../Manifold");
        var Contact = require("../Contact");
        var CircleShape = require("./CircleShape");
        var PolygonShape = require("./PolygonShape");
        Contact.addType(PolygonShape.TYPE, CircleShape.TYPE, PolygonCircleContact);

        function PolygonCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {
            _ASSERT && common.assert(fixtureA.getType() === PolygonShape.TYPE);
            _ASSERT && common.assert(fixtureB.getType() === CircleShape.TYPE);
            CollidePolygonCircle(manifold, fixtureA.getShape(), xfA, fixtureB.getShape(), xfB)
        }
        var cpc_c = Vec2.zero();
        var cpc_cLocal = Vec2.zero();
        var cpc_t1 = Vec2.zero();
        var cpc_t2 = Vec2.zero();

        function CollidePolygonCircle(manifold, polygonA, xfA, circleB, xfB) {
            manifold.pointCount = 0;
            var c = Transform.mulVec2_(xfB, circleB.m_p, cpc_c);
            var cLocal = Transform.mulTVec2_(xfA, c, cpc_cLocal);
            var normalIndex = 0;
            var separation = -Infinity;
            var radius = polygonA.m_radius + circleB.m_radius;
            var vertexCount = polygonA.m_count;
            var vertices = polygonA.m_vertices;
            var normals = polygonA.m_normals;
            for (var i = 0; i < vertexCount; ++i) {
                var s = Vec2.dot(normals[i], Vec2.sub_(cLocal, vertices[i], cpc_t1));
                if (s > radius) {
                    return
                }
                if (s > separation) {
                    separation = s;
                    normalIndex = i
                }
            }
            var vertIndex1 = normalIndex;
            var vertIndex2 = vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0;
            var v1 = vertices[vertIndex1];
            var v2 = vertices[vertIndex2];
            if (separation < Math.EPSILON) {
                manifold.pointCount = 1;
                manifold.type = Manifold.e_faceA;
                manifold.localNormal.set(normals[normalIndex]);
                manifold.localPoint.setCombine(.5, v1, .5, v2);
                manifold.points[0].localPoint.set(circleB.m_p);
                manifold.points[0].id.cf.indexA = 0;
                manifold.points[0].id.cf.typeA = Manifold.e_vertex;
                manifold.points[0].id.cf.indexB = 0;
                manifold.points[0].id.cf.typeB = Manifold.e_vertex;
                return
            }
            var u1 = Vec2.dot(Vec2.sub_(cLocal, v1, cpc_t1), Vec2.sub_(v2, v1, cpc_t2));
            var u2 = Vec2.dot(Vec2.sub_(cLocal, v2, cpc_t1), Vec2.sub_(v1, v2, cpc_t2));
            if (u1 <= 0) {
                if (Vec2.distanceSquared(cLocal, v1) > radius * radius) {
                    return
                }
                manifold.pointCount = 1;
                manifold.type = Manifold.e_faceA;
                manifold.localNormal.setCombine(1, cLocal, -1, v1);
                manifold.localNormal.normalize();
                manifold.localPoint.set(v1);
                manifold.points[0].localPoint.set(circleB.m_p);
                manifold.points[0].id.cf.indexA = 0;
                manifold.points[0].id.cf.typeA = Manifold.e_vertex;
                manifold.points[0].id.cf.indexB = 0;
                manifold.points[0].id.cf.typeB = Manifold.e_vertex
            } else if (u2 <= 0) {
                if (Vec2.distanceSquared(cLocal, v2) > radius * radius) {
                    return
                }
                manifold.pointCount = 1;
                manifold.type = Manifold.e_faceA;
                manifold.localNormal.setCombine(1, cLocal, -1, v2);
                manifold.localNormal.normalize();
                manifold.localPoint.set(v2);
                manifold.points[0].localPoint.set(circleB.m_p);
                manifold.points[0].id.cf.indexA = 0;
                manifold.points[0].id.cf.typeA = Manifold.e_vertex;
                manifold.points[0].id.cf.indexB = 0;
                manifold.points[0].id.cf.typeB = Manifold.e_vertex
            } else {
                var faceCenter = Vec2.mid(v1, v2);
                var separation = Vec2.dot(cLocal, normals[vertIndex1]) - Vec2.dot(faceCenter, normals[vertIndex1]);
                if (separation > radius) {
                    return
                }
                manifold.pointCount = 1;
                manifold.type = Manifold.e_faceA;
                manifold.localNormal.set(normals[vertIndex1]);
                manifold.localPoint.set(faceCenter);
                manifold.points[0].localPoint.set(circleB.m_p);
                manifold.points[0].id.cf.indexA = 0;
                manifold.points[0].id.cf.typeA = Manifold.e_vertex;
                manifold.points[0].id.cf.indexB = 0;
                manifold.points[0].id.cf.typeB = Manifold.e_vertex
            }
        }
    }, {
        "../Contact": 5,
        "../Manifold": 8,
        "../common/Math": 20,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "./CircleShape": 43,
        "./PolygonShape": 50
    }],
    46: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("../util/common");
        var Transform = require("../common/Transform");
        var Vec2 = require("../common/Vec2");
        var Contact = require("../Contact");
        var Manifold = require("../Manifold");
        var EdgeShape = require("./EdgeShape");
        var ChainShape = require("./ChainShape");
        var CircleShape = require("./CircleShape");
        Contact.addType(EdgeShape.TYPE, CircleShape.TYPE, EdgeCircleContact);
        Contact.addType(ChainShape.TYPE, CircleShape.TYPE, ChainCircleContact);

        function EdgeCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {
            _ASSERT && common.assert(fixtureA.getType() == EdgeShape.TYPE);
            _ASSERT && common.assert(fixtureB.getType() == CircleShape.TYPE);
            var shapeA = fixtureA.getShape();
            var shapeB = fixtureB.getShape();
            CollideEdgeCircle(manifold, shapeA, xfA, shapeB, xfB)
        }
        var ccc_edge = new EdgeShape;

        function ChainCircleContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {
            _ASSERT && common.assert(fixtureA.getType() === ChainShape.TYPE);
            _ASSERT && common.assert(fixtureB.getType() === CircleShape.TYPE);
            var chain = fixtureA.getShape();
            var edge = ccc_edge;
            chain.getChildEdge(ccc_edge, indexA);
            var shapeA = ccc_edge;
            var shapeB = fixtureB.getShape();
            CollideEdgeCircle(manifold, shapeA, xfA, shapeB, xfB)
        }
        var cec_e = Vec2.zero();
        var cec_Q = Vec2.zero();
        var cec_P = Vec2.zero();
        var cec_d = Vec2.zero();
        var cec_n = Vec2.zero();
        var cec_e1 = Vec2.zero();
        var cec_e2 = Vec2.zero();
        var cec_t1 = Vec2.zero();

        function CollideEdgeCircle(manifold, edgeA, xfA, circleB, xfB) {
            manifold.pointCount = 0;
            var Q = Transform.mulTVec2_(xfA, Transform.mulVec2_(xfB, circleB.m_p, cec_t1), cec_Q);
            var A = edgeA.m_vertex1;
            var B = edgeA.m_vertex2;
            var e = Vec2.sub_(B, A, cec_e);
            var u = Vec2.dot(e, Vec2.sub_(B, Q, cec_t1));
            var v = Vec2.dot(e, Vec2.sub_(Q, A, cec_t1));
            var radius = edgeA.m_radius + circleB.m_radius;
            if (v <= 0) {
                var P = cec_P.setVec2(A);
                var d = Vec2.sub(Q, P, cec_d);
                var dd = Vec2.dot(d, d);
                if (dd > radius * radius) {
                    return
                }
                if (edgeA.m_hasVertex0) {
                    var A1 = edgeA.m_vertex0;
                    var B1 = A;
                    var e1 = Vec2.sub_(B1, A1, cec_e1);
                    var u1 = Vec2.dot(e1, Vec2.sub(B1, Q, cec_t1));
                    if (u1 > 0) {
                        return
                    }
                }
                manifold.type = Manifold.e_circles;
                manifold.localNormal.setZero();
                manifold.localPoint.set(P);
                manifold.pointCount = 1;
                manifold.points[0].localPoint.set(circleB.m_p);
                manifold.points[0].id.cf.indexA = 0;
                manifold.points[0].id.cf.typeA = Manifold.e_vertex;
                manifold.points[0].id.cf.indexB = 0;
                manifold.points[0].id.cf.typeB = Manifold.e_vertex;
                return
            }
            if (u <= 0) {
                var P = cec_P.setVec2(B);
                var d = Vec2.sub_(Q, P, cec_d);
                var dd = Vec2.dot(d, d);
                if (dd > radius * radius) {
                    return
                }
                if (edgeA.m_hasVertex3) {
                    var B2 = edgeA.m_vertex3;
                    var A2 = B;
                    var e2 = Vec2.sub_(B2, A2, cec_e2);
                    var v2 = Vec2.dot(e2, Vec2.sub_(Q, A2, cec_t1));
                    if (v2 > 0) {
                        return
                    }
                }
                manifold.type = Manifold.e_circles;
                manifold.localNormal.setZero();
                manifold.localPoint.set(P);
                manifold.pointCount = 1;
                manifold.points[0].localPoint.set(circleB.m_p);
                manifold.points[0].id.cf.indexA = 1;
                manifold.points[0].id.cf.typeA = Manifold.e_vertex;
                manifold.points[0].id.cf.indexB = 0;
                manifold.points[0].id.cf.typeB = Manifold.e_vertex;
                return
            }
            var den = Vec2.dot(e, e);
            _ASSERT && common.assert(den > 0);
            var P = cec_P.setCombine(u / den, A, v / den, B);
            var d = Vec2.sub_(Q, P, cec_d);
            var dd = Vec2.dot(d, d);
            if (dd > radius * radius) {
                return
            }
            var n = cec_n.setXY(-e.y, e.x);
            if (Vec2.dot(n, Vec2.sub_(Q, A, cec_t1)) < 0) {
                n.set(-n.x, -n.y)
            }
            n.normalize();
            manifold.type = Manifold.e_faceA;
            manifold.localNormal.set(n);
            manifold.localPoint.set(A);
            manifold.pointCount = 1;
            manifold.points[0].localPoint.set(circleB.m_p);
            manifold.points[0].id.cf.indexA = 0;
            manifold.points[0].id.cf.typeA = Manifold.e_face;
            manifold.points[0].id.cf.indexB = 0;
            manifold.points[0].id.cf.typeB = Manifold.e_vertex
        }
    }, {
        "../Contact": 5,
        "../Manifold": 8,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "./ChainShape": 42,
        "./CircleShape": 43,
        "./EdgeShape": 49
    }],
    47: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("../util/common");
        var Math = require("../common/Math");
        var Transform = require("../common/Transform");
        var Vec2 = require("../common/Vec2");
        var Rot = require("../common/Rot");
        var Settings = require("../Settings");
        var Contact = require("../Contact");
        var Manifold = require("../Manifold");
        var EdgeShape = require("./EdgeShape");
        var ChainShape = require("./ChainShape");
        var PolygonShape = require("./PolygonShape");
        Contact.addType(EdgeShape.TYPE, PolygonShape.TYPE, EdgePolygonContact);
        Contact.addType(ChainShape.TYPE, PolygonShape.TYPE, ChainPolygonContact);

        function EdgePolygonContact(manifold, xfA, fA, indexA, xfB, fB, indexB) {
            _ASSERT && common.assert(fA.getType() === EdgeShape.TYPE);
            _ASSERT && common.assert(fB.getType() === PolygonShape.TYPE);
            CollideEdgePolygon(manifold, fA.getShape(), xfA, fB.getShape(), xfB)
        }
        var cpc_edge = new EdgeShape;

        function ChainPolygonContact(manifold, xfA, fA, indexA, xfB, fB, indexB) {
            _ASSERT && common.assert(fA.getType() === ChainShape.TYPE);
            _ASSERT && common.assert(fB.getType() === PolygonShape.TYPE);
            var chain = fA.getShape();
            var edge = cpc_edge;
            chain.getChildEdge(edge, indexA);
            CollideEdgePolygon(manifold, edge, xfA, fB.getShape(), xfB)
        }
        var e_unknown = -1;
        var e_edgeA = 1;
        var e_edgeB = 2;
        var e_isolated = 0;
        var e_concave = 1;
        var e_convex = 2;

        function EPAxis() {
            this.type;
            this.index;
            this.separation
        }

        function TempPolygon() {
            this.vertices = [];
            this.normals = [];
            this.count = 0;
            for (var i = 0; i < Settings.maxPolygonVertices; i++) {
                this.vertices.push(Vec2.zero());
                this.normals.push(Vec2.zero())
            }
        }

        function ReferenceFace() {
            this.i1 = -1;
            this.i2 = -1;
            this.v1 = Vec2.zero();
            this.v2 = Vec2.zero();
            this.normal = Vec2.zero();
            this.sideNormal1 = Vec2.zero();
            this.sideOffset1 = 0;
            this.sideNormal2 = Vec2.zero();
            this.sideOffset2 = 0
        }
        var edgeAxis = new EPAxis;
        var polygonAxis = new EPAxis;
        var polygonBA = new TempPolygon;
        var rf = new ReferenceFace;
        var cep_t1 = Vec2.zero();
        var cep_t2 = Vec2.zero();
        var cep_n = Vec2.zero();
        var cep_perp = Vec2.zero();
        var cep_centroidB = Vec2.zero();
        var cep_edge1 = Vec2.zero();
        var cep_normal1 = Vec2.zero();
        var cep_edge0 = Vec2.zero();
        var cep_normal0 = Vec2.zero();
        var cep_edge2 = Vec2.zero();
        var cep_normal2 = Vec2.zero();
        var cep_normal = Vec2.zero();
        var cep_lowerLimit = Vec2.zero();
        var cep_upperLimit = Vec2.zero();
        var cep_xf = Transform.identity();
        var cep_clipPoints1 = [new Manifold.clipVertex, new Manifold.clipVertex];
        var cep_clipPoints2 = [new Manifold.clipVertex, new Manifold.clipVertex];
        var cep_ie = [new Manifold.clipVertex, new Manifold.clipVertex];

        function CollideEdgePolygon(manifold, edgeA, xfA, polygonB, xfB) {
            var m_type1, m_type2;
            var xf = Transform.mulTXf_(xfA, xfB, cep_xf);
            var centroidB = Transform.mulVec2_(xf, polygonB.m_centroid, cep_centroidB);
            var v0 = edgeA.m_vertex0;
            var v1 = edgeA.m_vertex1;
            var v2 = edgeA.m_vertex2;
            var v3 = edgeA.m_vertex3;
            var hasVertex0 = edgeA.m_hasVertex0;
            var hasVertex3 = edgeA.m_hasVertex3;
            var edge1 = Vec2.sub_(v2, v1, cep_edge1);
            edge1.normalize();
            var normal1 = cep_normal1.setXY(edge1.y, -edge1.x);
            var offset1 = Vec2.dot(normal1, Vec2.sub_(centroidB, v1, cep_t1));
            var offset0 = 0;
            var offset2 = 0;
            var convex1 = false;
            var convex2 = false;
            if (hasVertex0) {
                var edge0 = Vec2.sub_(v1, v0, cep_edge0);
                edge0.normalize();
                var normal0 = cep_normal0.setXY(edge0.y, -edge0.x);
                convex1 = Vec2.cross(edge0, edge1) >= 0;
                offset0 = Vec2.dot(normal0, centroidB) - Vec2.dot(normal0, v0)
            }
            if (hasVertex3) {
                var edge2 = Vec2.sub_(v3, v2, cep_edge2);
                edge2.normalize();
                var normal2 = cep_normal2.set(edge2.y, -edge2.x);
                convex2 = Vec2.cross(edge1, edge2) > 0;
                offset2 = Vec2.dot(normal2, centroidB) - Vec2.dot(normal2, v2)
            }
            var front = 0;
            var normal = cep_normal.setZero();
            var lowerLimit = cep_lowerLimit.setZero();
            var upperLimit = cep_upperLimit.setZero();
            if (hasVertex0 && hasVertex3) {
                if (convex1 && convex2) {
                    front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.set(normal0);
                        upperLimit.set(normal2)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.setMul(-1, normal1);
                        upperLimit.setMul(-1, normal1)
                    }
                } else if (convex1) {
                    front = offset0 >= 0 || offset1 >= 0 && offset2 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.set(normal0);
                        upperLimit.set(normal1)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.setMul(-1, normal2);
                        upperLimit.setMul(-1, normal1)
                    }
                } else if (convex2) {
                    front = offset2 >= 0 || offset0 >= 0 && offset1 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.set(normal1);
                        upperLimit.set(normal2)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.setMul(-1, normal1);
                        upperLimit.setMul(-1, normal0)
                    }
                } else {
                    front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.set(normal1);
                        upperLimit.set(normal1)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.setMul(-1, normal2);
                        upperLimit.setMul(-1, normal0)
                    }
                }
            } else if (hasVertex0) {
                if (convex1) {
                    front = offset0 >= 0 || offset1 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.set(normal0);
                        upperLimit.setMul(-1, normal1)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.set(normal1);
                        upperLimit.setMul(-1, normal1)
                    }
                } else {
                    front = offset0 >= 0 && offset1 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.set(normal1);
                        upperLimit.setMul(-1, normal1)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.set(normal1);
                        upperLimit.setMul(-1, normal0)
                    }
                }
            } else if (hasVertex3) {
                if (convex2) {
                    front = offset1 >= 0 || offset2 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.setMul(-1, normal1);
                        upperLimit.set(normal2)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.setMul(-1, normal1);
                        upperLimit.set(normal1)
                    }
                } else {
                    front = offset1 >= 0 && offset2 >= 0;
                    if (front) {
                        normal.set(normal1);
                        lowerLimit.setMul(-1, normal1);
                        upperLimit.set(normal1)
                    } else {
                        normal.setMul(-1, normal1);
                        lowerLimit.setMul(-1, normal2);
                        upperLimit.set(normal1)
                    }
                }
            } else {
                front = offset1 >= 0;
                if (front) {
                    normal.set(normal1);
                    lowerLimit.setMul(-1, normal1);
                    upperLimit.setMul(-1, normal1)
                } else {
                    normal.setMul(-1, normal1);
                    lowerLimit.set(normal1);
                    upperLimit.set(normal1)
                }
            }
            polygonBA.count = polygonB.m_count;
            for (var i = 0; i < polygonB.m_count; ++i) {
                polygonBA.vertices[i] = Transform.mulVec2_(xf, polygonB.m_vertices[i], polygonBA.vertices[i]);
                polygonBA.normals[i] = Rot.mulVec2_(xf.q, polygonB.m_normals[i], polygonBA.normals[i])
            }
            var radius = 2 * Settings.polygonRadius;
            manifold.pointCount = 0; {
                edgeAxis.type = e_edgeA;
                edgeAxis.index = front ? 0 : 1;
                edgeAxis.separation = Infinity;
                for (var i = 0; i < polygonBA.count; ++i) {
                    var s = Vec2.dot(normal, Vec2.sub(polygonBA.vertices[i], v1, cep_t1));
                    if (s < edgeAxis.separation) {
                        edgeAxis.separation = s
                    }
                }
            }
            if (edgeAxis.type === e_unknown) {
                return
            }
            if (edgeAxis.separation > radius) {
                return
            } {
                polygonAxis.type = e_unknown;
                polygonAxis.index = -1;
                polygonAxis.separation = -Infinity;
                var perp = cep_perp.set(-normal.y, normal.x);
                for (var i = 0; i < polygonBA.count; ++i) {
                    var n = cep_n.set(polygonBA.normals[i]).neg();
                    var s1 = Vec2.dot(n, Vec2.sub_(polygonBA.vertices[i], v1, cep_t1));
                    var s2 = Vec2.dot(n, Vec2.sub_(polygonBA.vertices[i], v2, cep_t1));
                    var s = Math.min(s1, s2);
                    if (s > radius) {
                        polygonAxis.type = e_edgeB;
                        polygonAxis.index = i;
                        polygonAxis.separation = s;
                        break
                    }
                    if (Vec2.dot(n, perp) >= 0) {
                        if (Vec2.dot(Vec2.sub_(n, upperLimit, cep_t1), normal) < -Settings.angularSlop) {
                            continue
                        }
                    } else {
                        if (Vec2.dot(Vec2.sub_(n, lowerLimit, cep_t1), normal) < -Settings.angularSlop) {
                            continue
                        }
                    }
                    if (s > polygonAxis.separation) {
                        polygonAxis.type = e_edgeB;
                        polygonAxis.index = i;
                        polygonAxis.separation = s
                    }
                }
            }
            if (polygonAxis.type !== e_unknown && polygonAxis.separation > radius) {
                return
            }
            var k_relativeTol = .98;
            var k_absoluteTol = .001;
            var primaryAxis;
            if (polygonAxis.type === e_unknown) {
                primaryAxis = edgeAxis
            } else if (polygonAxis.separation > k_relativeTol * edgeAxis.separation + k_absoluteTol) {
                primaryAxis = polygonAxis
            } else {
                primaryAxis = edgeAxis
            }
            cep_ie[0].init();
            cep_ie[1].init();
            var ie = cep_ie;
            if (primaryAxis.type === e_edgeA) {
                manifold.type = Manifold.e_faceA;
                var bestIndex = 0;
                var bestValue = Vec2.dot(normal, polygonBA.normals[0]);
                for (var i = 1; i < polygonBA.count; ++i) {
                    var value = Vec2.dot(normal, polygonBA.normals[i]);
                    if (value < bestValue) {
                        bestValue = value;
                        bestIndex = i
                    }
                }
                var i1 = bestIndex;
                var i2 = i1 + 1 < polygonBA.count ? i1 + 1 : 0;
                ie[0].v.set(polygonBA.vertices[i1]);
                ie[0].id.cf.indexA = 0;
                ie[0].id.cf.indexB = i1;
                ie[0].id.cf.typeA = Manifold.e_face;
                ie[0].id.cf.typeB = Manifold.e_vertex;
                ie[1].v.set(polygonBA.vertices[i2]);
                ie[1].id.cf.indexA = 0;
                ie[1].id.cf.indexB = i2;
                ie[1].id.cf.typeA = Manifold.e_face;
                ie[1].id.cf.typeB = Manifold.e_vertex;
                if (front) {
                    rf.i1 = 0;
                    rf.i2 = 1;
                    rf.v1.set(v1);
                    rf.v2.set(v2);
                    rf.normal.set(normal1)
                } else {
                    rf.i1 = 1;
                    rf.i2 = 0;
                    rf.v1.set(v2);
                    rf.v2.set(v1);
                    rf.normal.set(normal1).neg()
                }
            } else {
                manifold.type = Manifold.e_faceB;
                ie[0].v.set(v1);
                ie[0].id.cf.indexA = 0;
                ie[0].id.cf.indexB = primaryAxis.index;
                ie[0].id.cf.typeA = Manifold.e_vertex;
                ie[0].id.cf.typeB = Manifold.e_face;
                ie[1].v.set(v2);
                ie[1].id.cf.indexA = 0;
                ie[1].id.cf.indexB = primaryAxis.index;
                ie[1].id.cf.typeA = Manifold.e_vertex;
                ie[1].id.cf.typeB = Manifold.e_face;
                rf.i1 = primaryAxis.index;
                rf.i2 = rf.i1 + 1 < polygonBA.count ? rf.i1 + 1 : 0;
                rf.v1.set(polygonBA.vertices[rf.i1]);
                rf.v2.set(polygonBA.vertices[rf.i2]);
                rf.normal.set(polygonBA.normals[rf.i1])
            }
            rf.sideNormal1.set(rf.normal.y, -rf.normal.x);
            rf.sideNormal2.setMul(-1, rf.sideNormal1);
            rf.sideOffset1 = Vec2.dot(rf.sideNormal1, rf.v1);
            rf.sideOffset2 = Vec2.dot(rf.sideNormal2, rf.v2);
            cep_clipPoints1[0].init();
            cep_clipPoints1[1].init();
            cep_clipPoints2[0].init();
            cep_clipPoints2[1].init();
            var clipPoints1 = cep_clipPoints1;
            var clipPoints2 = cep_clipPoints2;
            var np;
            np = Manifold.clipSegmentToLine(clipPoints1, ie, rf.sideNormal1, rf.sideOffset1, rf.i1);
            if (np < Settings.maxManifoldPoints) {
                return
            }
            np = Manifold.clipSegmentToLine(clipPoints2, clipPoints1, rf.sideNormal2, rf.sideOffset2, rf.i2);
            if (np < Settings.maxManifoldPoints) {
                return
            }
            if (primaryAxis.type === e_edgeA) {
                manifold.localNormal.set(rf.normal);
                manifold.localPoint.set(rf.v1)
            } else {
                manifold.localNormal.set(polygonB.m_normals[rf.i1]);
                manifold.localPoint.set(polygonB.m_vertices[rf.i1])
            }
            var pointCount = 0;
            for (var i = 0; i < Settings.maxManifoldPoints; ++i) {
                var separation = Vec2.dot(rf.normal, Vec2.sub_(clipPoints2[i].v, rf.v1, cep_t1));
                if (separation <= radius) {
                    var cp = manifold.points[pointCount];
                    if (primaryAxis.type === e_edgeA) {
                        cp.localPoint = Transform.mulTVec2_(xf, clipPoints2[i].v, cp.localPoint);
                        cp.id.set(clipPoints2[i].id)
                    } else {
                        cp.localPoint.set(clipPoints2[i].v);
                        cp.id.cf.typeA = clipPoints2[i].id.cf.typeB;
                        cp.id.cf.typeB = clipPoints2[i].id.cf.typeA;
                        cp.id.cf.indexA = clipPoints2[i].id.cf.indexB;
                        cp.id.cf.indexB = clipPoints2[i].id.cf.indexA
                    }++pointCount
                }
            }
            manifold.pointCount = pointCount
        }
    }, {
        "../Contact": 5,
        "../Manifold": 8,
        "../Settings": 9,
        "../common/Math": 20,
        "../common/Rot": 22,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "./ChainShape": 42,
        "./EdgeShape": 49,
        "./PolygonShape": 50
    }],
    48: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var common = require("../util/common");
        var Transform = require("../common/Transform");
        var Rot = require("../common/Rot");
        var Vec2 = require("../common/Vec2");
        var Settings = require("../Settings");
        var Manifold = require("../Manifold");
        var Contact = require("../Contact");
        var PolygonShape = require("./PolygonShape");
        module.exports = CollidePolygons;
        Contact.addType(PolygonShape.TYPE, PolygonShape.TYPE, PolygonContact);

        function PolygonContact(manifold, xfA, fixtureA, indexA, xfB, fixtureB, indexB) {
            _ASSERT && common.assert(fixtureA.getType() == PolygonShape.TYPE);
            _ASSERT && common.assert(fixtureB.getType() == PolygonShape.TYPE);
            CollidePolygons(manifold, fixtureA.getShape(), xfA, fixtureB.getShape(), xfB)
        }
        var fms_v1 = Vec2.zero();
        var fms_n = Vec2.zero();
        var fms_xf = Transform.identity();
        var fms_maxSeparation;
        var fms_bestIndex;

        function FindMaxSeparation(poly1, xf1, poly2, xf2) {
            var count1 = poly1.m_count;
            var count2 = poly2.m_count;
            var n1s = poly1.m_normals;
            var v1s = poly1.m_vertices;
            var v2s = poly2.m_vertices;
            var xf = Transform.mulTXf_(xf2, xf1, fms_xf);
            var bestIndex = 0;
            var maxSeparation = -Infinity;
            for (var i = 0; i < count1; ++i) {
                var n = Rot.mulVec2_(xf.q, n1s[i], fms_n);
                var v1 = Transform.mulVec2_(xf, v1s[i], fms_v1);
                var si = Infinity;
                for (var j = 0; j < count2; ++j) {
                    var sij = Vec2.dot(n, v2s[j]) - Vec2.dot(n, v1);
                    if (sij < si) {
                        si = sij
                    }
                }
                if (si > maxSeparation) {
                    maxSeparation = si;
                    bestIndex = i
                }
            }
            fms_maxSeparation = maxSeparation;
            fms_bestIndex = bestIndex
        }
        var fie_t1 = Vec2.zero();
        var fie_normal1 = Vec2.zero();

        function FindIncidentEdge(c, poly1, xf1, edge1, poly2, xf2) {
            var normals1 = poly1.m_normals;
            var count2 = poly2.m_count;
            var vertices2 = poly2.m_vertices;
            var normals2 = poly2.m_normals;
            _ASSERT && common.assert(0 <= edge1 && edge1 < poly1.m_count);
            var normal1 = Rot.mulTVec2_(xf2.q, Rot.mulVec2_(xf1.q, normals1[edge1], fie_t1), fie_normal1);
            var index = 0;
            var minDot = Infinity;
            for (var i = 0; i < count2; ++i) {
                var dot = Vec2.dot(normal1, normals2[i]);
                if (dot < minDot) {
                    minDot = dot;
                    index = i
                }
            }
            var i1 = index;
            var i2 = i1 + 1 < count2 ? i1 + 1 : 0;
            c[0].v = Transform.mulVec2(xf2, vertices2[i1]);
            c[0].id.cf.indexA = edge1;
            c[0].id.cf.indexB = i1;
            c[0].id.cf.typeA = Manifold.e_face;
            c[0].id.cf.typeB = Manifold.e_vertex;
            c[1].v = Transform.mulVec2(xf2, vertices2[i2]);
            c[1].id.cf.indexA = edge1;
            c[1].id.cf.indexB = i2;
            c[1].id.cf.typeA = Manifold.e_face;
            c[1].id.cf.typeB = Manifold.e_vertex
        }
        var cpg_planePoint = Vec2.zero();
        var cpg_tangent = Vec2.zero();
        var cpg_normal = Vec2.zero();
        var cpg_localTangent = Vec2.zero();
        var cpg_localNormal = Vec2.zero();
        var cpg_v11 = Vec2.zero();
        var cpg_v12 = Vec2.zero();
        var cpg_t1 = Vec2.zero();
        var cpg_clipPoints1 = [new Manifold.clipVertex, new Manifold.clipVertex];
        var cpg_clipPoints2 = [new Manifold.clipVertex, new Manifold.clipVertex];
        var cpg_incidentEdge = [new Manifold.clipVertex, new Manifold.clipVertex];

        function CollidePolygons(manifold, polyA, xfA, polyB, xfB) {
            manifold.pointCount = 0;
            var totalRadius = polyA.m_radius + polyB.m_radius;
            FindMaxSeparation(polyA, xfA, polyB, xfB);
            var edgeA = fms_bestIndex;
            var separationA = fms_maxSeparation;
            if (separationA > totalRadius) return;
            FindMaxSeparation(polyB, xfB, polyA, xfA);
            var edgeB = fms_bestIndex;
            var separationB = fms_maxSeparation;
            if (separationB > totalRadius) return;
            var poly1;
            var poly2;
            var xf1;
            var xf2;
            var edge1;
            var flip;
            var k_tol = .1 * Settings.linearSlop;
            if (separationB > separationA + k_tol) {
                poly1 = polyB;
                poly2 = polyA;
                xf1 = xfB;
                xf2 = xfA;
                edge1 = edgeB;
                manifold.type = Manifold.e_faceB;
                flip = 1
            } else {
                poly1 = polyA;
                poly2 = polyB;
                xf1 = xfA;
                xf2 = xfB;
                edge1 = edgeA;
                manifold.type = Manifold.e_faceA;
                flip = 0
            }
            var incidentEdge = cpg_incidentEdge;
            cpg_incidentEdge[0].init();
            cpg_incidentEdge[1].init();
            FindIncidentEdge(incidentEdge, poly1, xf1, edge1, poly2, xf2);
            var count1 = poly1.m_count;
            var vertices1 = poly1.m_vertices;
            var iv1 = edge1;
            var iv2 = edge1 + 1 < count1 ? edge1 + 1 : 0;
            var v11 = cpg_v11.set(vertices1[iv1]);
            var v12 = cpg_v12.set(vertices1[iv2]);
            var localTangent = Vec2.sub_(v12, v11, cpg_localTangent);
            localTangent.normalize();
            var localNormal = Vec2.crossVec2Num_(localTangent, 1, cpg_localNormal);
            var planePoint = Vec2.combine_(.5, v11, .5, v12, cpg_planePoint);
            var tangent = Rot.mulVec2_(xf1.q, localTangent, cpg_tangent);
            var normal = Vec2.crossVec2Num_(tangent, 1, cpg_normal);
            v11 = Transform.mulVec2_(xf1, v11, v11);
            v12 = Transform.mulVec2_(xf1, v12, v12);
            var frontOffset = Vec2.dot(normal, v11);
            var sideOffset1 = -Vec2.dot(tangent, v11) + totalRadius;
            var sideOffset2 = Vec2.dot(tangent, v12) + totalRadius;
            cpg_clipPoints1[0].init();
            cpg_clipPoints1[1].init();
            cpg_clipPoints2[0].init();
            cpg_clipPoints2[1].init();
            var clipPoints1 = cpg_clipPoints1;
            var clipPoints2 = cpg_clipPoints2;
            var np;
            np = Manifold.clipSegmentToLine(clipPoints1, incidentEdge, Vec2.neg_(tangent, cpg_t1), sideOffset1, iv1);
            if (np < Settings.maxManifoldPoints) {
                return
            }
            np = Manifold.clipSegmentToLine(clipPoints2, clipPoints1, tangent, sideOffset2, iv2);
            if (np < Settings.maxManifoldPoints) {
                return
            }
            manifold.localNormal.set(localNormal);
            manifold.localPoint.set(planePoint);
            var pointCount = 0;
            for (var i = 0; i < Settings.maxManifoldPoints; ++i) {
                var separation = Vec2.dot(normal, clipPoints2[i].v) - frontOffset;
                if (separation <= totalRadius) {
                    var cp = manifold.points[i];
                    cp.init();
                    cp.localPoint.set(Transform.mulTVec2(xf2, clipPoints2[i].v, cpg_t1));
                    cp.id.set(clipPoints2[i].id);
                    if (flip) {
                        var cf = cp.id.cf;
                        var indexA = cf.indexA;
                        var indexB = cf.indexB;
                        var typeA = cf.typeA;
                        var typeB = cf.typeB;
                        cf.indexA = indexB;
                        cf.indexB = indexA;
                        cf.typeA = typeB;
                        cf.typeB = typeA
                    }++pointCount
                }
            }
            manifold.pointCount = pointCount
        }
    }, {
        "../Contact": 5,
        "../Manifold": 8,
        "../Settings": 9,
        "../common/Rot": 22,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "./PolygonShape": 50
    }],
    49: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = EdgeShape;
        var create = require("../util/create");
        var options = require("../util/options");
        var Settings = require("../Settings");
        var Shape = require("../Shape");
        var Math = require("../common/Math");
        var Transform = require("../common/Transform");
        var Rot = require("../common/Rot");
        var Vec2 = require("../common/Vec2");
        var AABB = require("../collision/AABB");
        EdgeShape._super = Shape;
        EdgeShape.prototype = create(EdgeShape._super.prototype);
        EdgeShape.TYPE = "edge";

        function EdgeShape(v1, v2) {
            if (!(this instanceof EdgeShape)) {
                return new EdgeShape(v1, v2)
            }
            EdgeShape._super.call(this);
            this.m_type = EdgeShape.TYPE;
            this.m_radius = Settings.polygonRadius;
            this.m_vertex1 = v1 ? Vec2.clone(v1) : Vec2.zero();
            this.m_vertex2 = v2 ? Vec2.clone(v2) : Vec2.zero();
            this.m_vertex0 = Vec2.zero();
            this.m_vertex3 = Vec2.zero();
            this.m_hasVertex0 = false;
            this.m_hasVertex3 = false
        }
        EdgeShape.prototype.setNext = function(v3) {
            if (v3) {
                this.m_vertex3.set(v3);
                this.m_hasVertex3 = true
            } else {
                this.m_vertex3.setZero();
                this.m_hasVertex3 = false
            }
            return this
        };
        EdgeShape.prototype.setPrev = function(v0) {
            if (v0) {
                this.m_vertex0.set(v0);
                this.m_hasVertex0 = true
            } else {
                this.m_vertex0.setZero();
                this.m_hasVertex0 = false
            }
            return this
        };
        EdgeShape.prototype._set = function(v1, v2) {
            this.m_vertex1.set(v1);
            this.m_vertex2.set(v2);
            this.m_hasVertex0 = false;
            this.m_hasVertex3 = false;
            return this
        };
        EdgeShape.prototype._clone = function() {
            var clone = new EdgeShape;
            clone.m_type = this.m_type;
            clone.m_radius = this.m_radius;
            clone.m_vertex1.set(this.m_vertex1);
            clone.m_vertex2.set(this.m_vertex2);
            clone.m_vertex0.set(this.m_vertex0);
            clone.m_vertex3.set(this.m_vertex3);
            clone.m_hasVertex0 = this.m_hasVertex0;
            clone.m_hasVertex3 = this.m_hasVertex3;
            return clone
        };
        EdgeShape.prototype.getChildCount = function() {
            return 1
        };
        EdgeShape.prototype.testPoint = function(xf, p) {
            return false
        };
        EdgeShape.prototype.rayCast = function(output, input, xf, childIndex) {
            var p1 = Rot.mulTVec2(xf.q, Vec2.sub(input.p1, xf.p));
            var p2 = Rot.mulTVec2(xf.q, Vec2.sub(input.p2, xf.p));
            var d = Vec2.sub(p2, p1);
            var v1 = this.m_vertex1;
            var v2 = this.m_vertex2;
            var e = Vec2.sub(v2, v1);
            var normal = Vec2.neo(e.y, -e.x);
            normal.normalize();
            var numerator = Vec2.dot(normal, Vec2.sub(v1, p1));
            var denominator = Vec2.dot(normal, d);
            if (denominator == 0) {
                return false
            }
            var t = numerator / denominator;
            if (t < 0 || input.maxFraction < t) {
                return false
            }
            var q = Vec2.add(p1, Vec2.mul(t, d));
            var r = Vec2.sub(v2, v1);
            var rr = Vec2.dot(r, r);
            if (rr == 0) {
                return false
            }
            var s = Vec2.dot(Vec2.sub(q, v1), r) / rr;
            if (s < 0 || 1 < s) {
                return false
            }
            output.fraction = t;
            if (numerator > 0) {
                output.normal = Rot.mulVec2(xf.q, normal).neg()
            } else {
                output.normal = Rot.mulVec2(xf.q, normal)
            }
            return true
        };
        EdgeShape.prototype.computeAABB = function(aabb, xf, childIndex) {
            var v1 = Transform.mulVec2(xf, this.m_vertex1);
            var v2 = Transform.mulVec2(xf, this.m_vertex2);
            aabb.combinePoints(v1, v2);
            aabb.extend(this.m_radius)
        };
        EdgeShape.prototype.computeMass = function(massData, density) {
            massData.mass = 0;
            massData.center.setCombine(.5, this.m_vertex1, .5, this.m_vertex2);
            massData.I = 0
        };
        EdgeShape.prototype.computeDistanceProxy = function(proxy) {
            proxy.m_vertices.push(this.m_vertex1);
            proxy.m_vertices.push(this.m_vertex2);
            proxy.m_count = 2;
            proxy.m_radius = this.m_radius
        }
    }, {
        "../Settings": 9,
        "../Shape": 10,
        "../collision/AABB": 13,
        "../common/Math": 20,
        "../common/Rot": 22,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/create": 54,
        "../util/options": 55
    }],
    50: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = PolygonShape;
        var common = require("../util/common");
        var create = require("../util/create");
        var options = require("../util/options");
        var Math = require("../common/Math");
        var Transform = require("../common/Transform");
        var Rot = require("../common/Rot");
        var Vec2 = require("../common/Vec2");
        var AABB = require("../collision/AABB");
        var Settings = require("../Settings");
        var Shape = require("../Shape");
        PolygonShape._super = Shape;
        PolygonShape.prototype = create(PolygonShape._super.prototype);
        PolygonShape.TYPE = "polygon";

        function PolygonShape(vertices) {
            if (!(this instanceof PolygonShape)) {
                return new PolygonShape(vertices)
            }
            PolygonShape._super.call(this);
            this.m_type = PolygonShape.TYPE;
            this.m_radius = Settings.polygonRadius;
            this.m_centroid = Vec2.zero();
            this.m_vertices = [];
            this.m_normals = [];
            this.m_count = 0;
            if (vertices && vertices.length) {
                this._set(vertices)
            }
        }
        PolygonShape.prototype.getVertex = function(index) {
            _ASSERT && common.assert(0 <= index && index < this.m_count);
            return this.m_vertices[index]
        };
        PolygonShape.prototype._clone = function() {
            var clone = new PolygonShape;
            clone.m_type = this.m_type;
            clone.m_radius = this.m_radius;
            clone.m_count = this.m_count;
            clone.m_centroid.set(this.m_centroid);
            for (var i = 0; i < this.m_count; i++) {
                clone.m_vertices.push(this.m_vertices[i].clone())
            }
            for (var i = 0; i < this.m_normals.length; i++) {
                clone.m_normals.push(this.m_normals[i].clone())
            }
            return clone
        };
        PolygonShape.prototype.getChildCount = function() {
            return 1
        };

        function ComputeCentroid(vs, count) {
            _ASSERT && common.assert(count >= 3);
            var c = Vec2.zero();
            var area = 0;
            var pRef = Vec2.zero();
            if (false) {
                for (var i = 0; i < count; ++i) {
                    pRef.add(vs[i])
                }
                pRef.mul(1 / count)
            }
            var inv3 = 1 / 3;
            for (var i = 0; i < count; ++i) {
                var p1 = pRef;
                var p2 = vs[i];
                var p3 = i + 1 < count ? vs[i + 1] : vs[0];
                var e1 = Vec2.sub(p2, p1);
                var e2 = Vec2.sub(p3, p1);
                var D = Vec2.cross(e1, e2);
                var triangleArea = .5 * D;
                area += triangleArea;
                c.addMul(triangleArea * inv3, p1);
                c.addMul(triangleArea * inv3, p2);
                c.addMul(triangleArea * inv3, p3)
            }
            _ASSERT && common.assert(area > Math.EPSILON);
            c.mul(1 / area);
            return c
        }
        PolygonShape.prototype._set = function(vertices) {
            _ASSERT && common.assert(3 <= vertices.length && vertices.length <= Settings.maxPolygonVertices);
            if (vertices.length < 3) {
                this._setAsBox(1, 1);
                return
            }
            var n = Math.min(vertices.length, Settings.maxPolygonVertices);
            var ps = [];
            var tempCount = 0;
            for (var i = 0; i < n; ++i) {
                var v = vertices[i];
                var unique = true;
                for (var j = 0; j < tempCount; ++j) {
                    if (Vec2.distanceSquared(v, ps[j]) < .25 * Settings.linearSlopSquared) {
                        unique = false;
                        break
                    }
                }
                if (unique) {
                    ps[tempCount++] = v
                }
            }
            n = tempCount;
            if (n < 3) {
                _ASSERT && common.assert(false);
                this._setAsBox(1, 1);
                return
            }
            var i0 = 0;
            var x0 = ps[0].x;
            for (var i = 1; i < n; ++i) {
                var x = ps[i].x;
                if (x > x0 || x == x0 && ps[i].y < ps[i0].y) {
                    i0 = i;
                    x0 = x
                }
            }
            var hull = [];
            var m = 0;
            var ih = i0;
            for (;;) {
                hull[m] = ih;
                var ie = 0;
                for (var j = 1; j < n; ++j) {
                    if (ie == ih) {
                        ie = j;
                        continue
                    }
                    var r = Vec2.sub(ps[ie], ps[hull[m]]);
                    var v = Vec2.sub(ps[j], ps[hull[m]]);
                    var c = Vec2.cross(r, v);
                    if (c < 0) {
                        ie = j
                    }
                    if (c == 0 && v.lengthSquared() > r.lengthSquared()) {
                        ie = j
                    }
                }++m;
                ih = ie;
                if (ie == i0) {
                    break
                }
            }
            if (m < 3) {
                _ASSERT && common.assert(false);
                this._setAsBox(1, 1);
                return
            }
            this.m_count = m;
            for (var i = 0; i < m; ++i) {
                this.m_vertices[i] = ps[hull[i]]
            }
            for (var i = 0; i < m; ++i) {
                var i1 = i;
                var i2 = i + 1 < m ? i + 1 : 0;
                var edge = Vec2.sub(this.m_vertices[i2], this.m_vertices[i1]);
                _ASSERT && common.assert(edge.lengthSquared() > Math.EPSILON * Math.EPSILON);
                this.m_normals[i] = Vec2.cross(edge, 1);
                this.m_normals[i].normalize()
            }
            this.m_centroid = ComputeCentroid(this.m_vertices, m)
        };
        PolygonShape.prototype._setAsBox = function(hx, hy, center, angle) {
            this.m_vertices[0] = Vec2.neo(-hx, -hy);
            this.m_vertices[1] = Vec2.neo(hx, -hy);
            this.m_vertices[2] = Vec2.neo(hx, hy);
            this.m_vertices[3] = Vec2.neo(-hx, hy);
            this.m_normals[0] = Vec2.neo(0, -1);
            this.m_normals[1] = Vec2.neo(1, 0);
            this.m_normals[2] = Vec2.neo(0, 1);
            this.m_normals[3] = Vec2.neo(-1, 0);
            this.m_count = 4;
            if (Vec2.isValid(center)) {
                angle = angle || 0;
                this.m_centroid.set(center);
                var xf = Transform.identity();
                xf.p.set(center);
                xf.q.set(angle);
                for (var i = 0; i < this.m_count; ++i) {
                    this.m_vertices[i] = Transform.mulVec2(xf, this.m_vertices[i]);
                    this.m_normals[i] = Rot.mulVec2(xf.q, this.m_normals[i])
                }
            }
        };
        PolygonShape.prototype.testPoint = function(xf, p) {
            var pLocal = Rot.mulTVec2(xf.q, Vec2.sub(p, xf.p));
            for (var i = 0; i < this.m_count; ++i) {
                var dot = Vec2.dot(this.m_normals[i], Vec2.sub(pLocal, this.m_vertices[i]));
                if (dot > 0) {
                    return false
                }
            }
            return true
        };
        PolygonShape.prototype.rayCast = function(output, input, xf, childIndex) {
            var p1 = Rot.mulTVec2(xf.q, Vec2.sub(input.p1, xf.p));
            var p2 = Rot.mulTVec2(xf.q, Vec2.sub(input.p2, xf.p));
            var d = Vec2.sub(p2, p1);
            var lower = 0;
            var upper = input.maxFraction;
            var index = -1;
            for (var i = 0; i < this.m_count; ++i) {
                var numerator = Vec2.dot(this.m_normals[i], Vec2.sub(this.m_vertices[i], p1));
                var denominator = Vec2.dot(this.m_normals[i], d);
                if (denominator == 0) {
                    if (numerator < 0) {
                        return false
                    }
                } else {
                    if (denominator < 0 && numerator < lower * denominator) {
                        lower = numerator / denominator;
                        index = i
                    } else if (denominator > 0 && numerator < upper * denominator) {
                        upper = numerator / denominator
                    }
                }
                if (upper < lower) {
                    return false
                }
            }
            _ASSERT && common.assert(0 <= lower && lower <= input.maxFraction);
            if (index >= 0) {
                output.fraction = lower;
                output.normal = Rot.mulVec2(xf.q, this.m_normals[index]);
                return true
            }
            return false
        };
        PolygonShape.prototype.computeAABB = function(aabb, xf, childIndex) {
            var minX = Infinity,
                minY = Infinity;
            var maxX = -Infinity,
                maxY = -Infinity;
            for (var i = 0; i < this.m_count; ++i) {
                var v = Transform.mulVec2(xf, this.m_vertices[i]);
                minX = Math.min(minX, v.x);
                maxX = Math.max(maxX, v.x);
                minY = Math.min(minY, v.y);
                maxY = Math.max(maxY, v.y)
            }
            aabb.lowerBound.set(minX, minY);
            aabb.upperBound.set(maxX, maxY);
            aabb.extend(this.m_radius)
        };
        PolygonShape.prototype.computeMass = function(massData, density) {
            _ASSERT && common.assert(this.m_count >= 3);
            var center = Vec2.zero();
            var area = 0;
            var I = 0;
            var s = Vec2.zero();
            for (var i = 0; i < this.m_count; ++i) {
                s.add(this.m_vertices[i])
            }
            s.mul(1 / this.m_count);
            var k_inv3 = 1 / 3;
            for (var i = 0; i < this.m_count; ++i) {
                var e1 = Vec2.sub(this.m_vertices[i], s);
                var e2 = i + 1 < this.m_count ? Vec2.sub(this.m_vertices[i + 1], s) : Vec2.sub(this.m_vertices[0], s);
                var D = Vec2.cross(e1, e2);
                var triangleArea = .5 * D;
                area += triangleArea;
                center.addCombine(triangleArea * k_inv3, e1, triangleArea * k_inv3, e2);
                var ex1 = e1.x;
                var ey1 = e1.y;
                var ex2 = e2.x;
                var ey2 = e2.y;
                var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
                var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
                I += .25 * k_inv3 * D * (intx2 + inty2)
            }
            massData.mass = density * area;
            _ASSERT && common.assert(area > Math.EPSILON);
            center.mul(1 / area);
            massData.center.setCombine(1, center, 1, s);
            massData.I = density * I;
            massData.I += massData.mass * (Vec2.dot(massData.center, massData.center) - Vec2.dot(center, center))
        };
        PolygonShape.prototype.validate = function() {
            for (var i = 0; i < this.m_count; ++i) {
                var i1 = i;
                var i2 = i < this.m_count - 1 ? i1 + 1 : 0;
                var p = this.m_vertices[i1];
                var e = Vec2.sub(this.m_vertices[i2], p);
                for (var j = 0; j < this.m_count; ++j) {
                    if (j == i1 || j == i2) {
                        continue
                    }
                    var v = Vec2.sub(this.m_vertices[j], p);
                    var c = Vec2.cross(e, v);
                    if (c < 0) {
                        return false
                    }
                }
            }
            return true
        };
        PolygonShape.prototype.computeDistanceProxy = function(proxy) {
            proxy.m_vertices = this.m_vertices;
            proxy.m_count = this.m_count;
            proxy.m_radius = this.m_radius
        }
    }, {
        "../Settings": 9,
        "../Shape": 10,
        "../collision/AABB": 13,
        "../common/Math": 20,
        "../common/Rot": 22,
        "../common/Transform": 24,
        "../common/Vec2": 25,
        "../util/common": 53,
        "../util/create": 54,
        "../util/options": 55
    }],
    51: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports = Pool;

        function Pool(opts) {
            var _queue = [];
            var _max = opts.max || Infinity;
            var _createFn = opts.create || function() {
                return {}
            };
            var _outFn = opts.allocate || function() {};
            var _inFn = opts.release || function() {};
            var _discardFn = opts.discard || function() {};
            var _createCount = 0;
            var _outCount = 0;
            var _inCount = 0;
            var _discardCount = 0;
            this.max = function(n) {
                if (typeof n === "number") {
                    _max = n;
                    return this
                }
                return _max
            };
            this.size = function() {
                return _queue.length
            };
            this.allocate = function() {
                var obj;
                if (_queue.length > 0) {
                    obj = _queue.shift()
                } else {
                    _createCount++;
                    obj = _createFn()
                }
                _outCount++;
                _outFn(obj);
                return obj
            };
            this.release = function(obj) {
                if (_queue.length < _max) {
                    _inCount++;
                    _inFn(obj);
                    _queue.push(obj)
                } else {
                    _discardCount++;
                    _discardFn(obj)
                }
            };
            this.toString = function() {
                return " +" + _createCount + " >" + _outCount + " <" + _inCount + " -" + _discardCount + " =" + _queue.length + "/" + _max
            }
        }
    }, {}],
    52: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        module.exports.now = function() {
            return Date.now()
        };
        module.exports.diff = function(time) {
            return Date.now() - time
        }
    }, {}],
    53: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        exports.debug = function() {
            if (!_DEBUG) return;
            console.log.apply(console, arguments)
        };
        exports.assert = function(statement, err, log) {
            if (!_ASSERT) return;
            if (statement) return;
            log && console.log(log);
            throw new Error(err)
        }
    }, {}],
    54: [function(require, module, exports) {
        if (typeof Object.create == "function") {
            module.exports = function(proto, props) {
                return Object.create.call(Object, proto, props)
            }
        } else {
            module.exports = function(proto, props) {
                if (props) throw Error("Second argument is not supported!");
                if (typeof proto !== "object" || proto === null) throw Error("Invalid prototype!");
                noop.prototype = proto;
                return new noop
            };

            function noop() {}
        }
    }, {}],
    55: [function(require, module, exports) {
        var _DEBUG = typeof DEBUG === "undefined" ? false : DEBUG;
        var _ASSERT = typeof ASSERT === "undefined" ? false : ASSERT;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = function(to, from) {
            if (to === null || typeof to === "undefined") {
                to = {}
            }
            for (var key in from) {
                if (from.hasOwnProperty(key) && typeof to[key] === "undefined") {
                    to[key] = from[key]
                }
            }
            if (typeof Object.getOwnPropertySymbols === "function") {
                var symbols = Object.getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) {
                    var symbol = symbols[i];
                    if (from.propertyIsEnumerable(symbol) && typeof to[key] === "undefined") {
                        to[symbol] = from[symbol]
                    }
                }
            }
            return to
        }
    }, {}],
    56: [function(require, module, exports) {
        function createCube(sx, sy, sz, nx, ny, nz) {
            if (sx === undefined) sx = 1;
            if (sy === undefined) sy = sx;
            if (sz === undefined) sz = sx;
            if (nx === undefined) nx = 1;
            if (ny === undefined) ny = nx;
            if (nz === undefined) nz = nx;
            var x = sx / 2;
            var y = sy / 2;
            var z = sz / 2;
            var numVertices = (nx + 1) * (ny + 1) * 2 + (nx + 1) * (nz + 1) * 2 + (nz + 1) * (ny + 1) * 2;
            var vertexIndex = 0;
            var positions = [];
            var normals = [];
            var uvs = [];
            var cells = [];

            function makePlane(u, v, w, su, sv, nu, nv, pw, flipu, flipv) {
                var vertShift = vertexIndex;
                for (var j = 0; j <= nv; j++) {
                    for (var i = 0; i <= nu; i++) {
                        var vert = positions[vertexIndex] = [0, 0, 0];
                        vert[u] = (-su / 2 + i * su / nu) * flipu;
                        vert[v] = (-sv / 2 + j * sv / nv) * flipv;
                        vert[w] = pw;
                        var normal = normals[vertexIndex] = [0, 0, 0];
                        normal[u] = 0;
                        normal[v] = 0;
                        normal[w] = pw / Math.abs(pw);
                        var texCoord = uvs[vertexIndex] = [0, 0];
                        texCoord[0] = i / nu;
                        texCoord[1] = 1 - j / nv;
                        ++vertexIndex
                    }
                }
                for (var j = 0; j < nv; j++) {
                    for (var i = 0; i < nu; i++) {
                        var n = vertShift + j * (nu + 1) + i;
                        cells.push([n, n + nu + 1, n + nu + 2]);
                        cells.push([n, n + nu + 2, n + 1])
                    }
                }
            }
            makePlane(0, 1, 2, sx, sy, nx, ny, sz / 2, 1, -1);
            makePlane(0, 1, 2, sx, sy, nx, ny, -sz / 2, -1, -1);
            makePlane(2, 1, 0, sz, sy, nz, ny, -sx / 2, 1, -1);
            makePlane(2, 1, 0, sz, sy, nz, ny, sx / 2, -1, -1);
            makePlane(0, 2, 1, sx, sz, nx, nz, sy / 2, 1, 1);
            makePlane(0, 2, 1, sx, sz, nx, nz, -sy / 2, 1, -1);
            return {
                positions: positions,
                normals: normals,
                uvs: uvs,
                cells: cells
            }
        }
        module.exports = createCube
    }, {}],
    57: [function(require, module, exports) {
        "use strict";
        const mat4 = require("gl-matrix").mat4;
        const vec3 = require("gl-matrix").vec3;
        module.exports = function renderCubemap(regl, renderer, opts) {
            opts = opts || {};
            opts.resolution = opts.resolution === undefined ? 1024 : opts.resolution;
            opts.near = opts.near === undefined ? .1 : opts.near;
            opts.far = opts.far === undefined ? 1e3 : opts.far;
            opts.eye = opts.eye === undefined ? [0, 0, 0] : opts.eye;
            opts.cubeFBO = opts.cubeFBO === undefined ? regl.framebufferCube(opts.resolution) : opts.cubeFBO;
            const faces = [{
                center: [1, 0, 0],
                up: [0, -1, 0],
                fbo: opts.cubeFBO.faces[0]
            }, {
                center: [-1, 0, 0],
                up: [0, -1, 0],
                fbo: opts.cubeFBO.faces[1]
            }, {
                center: [0, 1, 0],
                up: [0, 0, 1],
                fbo: opts.cubeFBO.faces[2]
            }, {
                center: [0, -1, 0],
                up: [0, 0, -1],
                fbo: opts.cubeFBO.faces[3]
            }, {
                center: [0, 0, 1],
                up: [0, -1, 0],
                fbo: opts.cubeFBO.faces[4]
            }, {
                center: [0, 0, -1],
                up: [0, -1, 0],
                fbo: opts.cubeFBO.faces[5]
            }];
            for (let f of faces) {
                const view = mat4.lookAt([], opts.eye, vec3.add([], opts.eye, f.center), f.up);
                const projection = mat4.perspective([], Math.PI / 2, 1, opts.near, opts.far);
                const viewport = {
                    x: 0,
                    y: 0,
                    width: opts.cubeFBO.width,
                    height: opts.cubeFBO.height
                };
                renderer({
                    view: view,
                    projection: projection,
                    viewport: viewport,
                    framebuffer: f.fbo
                })
            }
            return opts.cubeFBO
        }
    }, {
        "gl-matrix": 1
    }],
    58: [function(require, module, exports) {
        (function(aa, ia) {
            "object" === typeof exports && "undefined" !== typeof module ? module.exports = ia() : "function" === typeof define && define.amd ? define(ia) : aa.createREGL = ia()
        })(this, function() {
            function aa(a, b) {
                this.id = Ab++;
                this.type = a;
                this.data = b
            }

            function ia(a) {
                if (0 === a.length) return [];
                var b = a.charAt(0),
                    c = a.charAt(a.length - 1);
                if (1 < a.length && b === c && ('"' === b || "'" === b)) return ['"' + a.substr(1, a.length - 2).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'];
                if (b = /\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(a)) return ia(a.substr(0, b.index)).concat(ia(b[1])).concat(ia(a.substr(b.index + b[0].length)));
                b = a.split(".");
                if (1 === b.length) return ['"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"'];
                a = [];
                for (c = 0; c < b.length; ++c) a = a.concat(ia(b[c]));
                return a
            }

            function Za(a) {
                return "[" + ia(a).join("][") + "]"
            }

            function Bb() {
                var a = {
                        "": 0
                    },
                    b = [""];
                return {
                    id: function(c) {
                        var e = a[c];
                        if (e) return e;
                        e = a[c] = b.length;
                        b.push(c);
                        return e
                    },
                    str: function(a) {
                        return b[a]
                    }
                }
            }

            function Cb(a, b, c) {
                function e() {
                    var b = window.innerWidth,
                        e = window.innerHeight;
                    a !== document.body && (e = a.getBoundingClientRect(), b = e.right - e.left, e = e.bottom - e.top);
                    g.width = c * b;
                    g.height = c * e;
                    E(g.style, {
                        width: b + "px",
                        height: e + "px"
                    })
                }
                var g = document.createElement("canvas");
                E(g.style, {
                    border: 0,
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0
                });
                a.appendChild(g);
                a === document.body && (g.style.position = "absolute", E(a.style, {
                    margin: 0,
                    padding: 0
                }));
                window.addEventListener("resize", e, !1);
                e();
                return {
                    canvas: g,
                    onDestroy: function() {
                        window.removeEventListener("resize", e);
                        a.removeChild(g)
                    }
                }
            }

            function Db(a, b) {
                function c(c) {
                    try {
                        return a.getContext(c, b)
                    } catch (g) {
                        return null
                    }
                }
                return c("webgl") || c("experimental-webgl") || c("webgl-experimental")
            }

            function $a(a) {
                return "string" === typeof a ? a.split() : a
            }

            function ab(a) {
                return "string" === typeof a ? document.querySelector(a) : a
            }

            function Eb(a) {
                var b = a || {},
                    c, e, g, d;
                a = {};
                var n = [],
                    f = [],
                    r = "undefined" === typeof window ? 1 : window.devicePixelRatio,
                    q = !1,
                    t = function(a) {},
                    m = function() {};
                "string" === typeof b ? c = document.querySelector(b) : "object" === typeof b && ("string" === typeof b.nodeName && "function" === typeof b.appendChild && "function" === typeof b.getBoundingClientRect ? c = b : "function" === typeof b.drawArrays || "function" === typeof b.drawElements ? (d = b, g = d.canvas) : ("gl" in b ? d = b.gl : "canvas" in b ? g = ab(b.canvas) : "container" in b && (e = ab(b.container)), "attributes" in b && (a = b.attributes), "extensions" in b && (n = $a(b.extensions)), "optionalExtensions" in b && (f = $a(b.optionalExtensions)), "onDone" in b && (t = b.onDone), "profile" in b && (q = !!b.profile), "pixelRatio" in b && (r = +b.pixelRatio)));
                c && ("canvas" === c.nodeName.toLowerCase() ? g = c : e = c);
                if (!d) {
                    if (!g) {
                        c = Cb(e || document.body, t, r);
                        if (!c) return null;
                        g = c.canvas;
                        m = c.onDestroy
                    }
                    d = Db(g, a)
                }
                return d ? {
                    gl: d,
                    canvas: g,
                    container: e,
                    extensions: n,
                    optionalExtensions: f,
                    pixelRatio: r,
                    profile: q,
                    onDone: t,
                    onDestroy: m
                } : (m(), t("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"), null)
            }

            function Fb(a, b) {
                function c(b) {
                    b = b.toLowerCase();
                    var c;
                    try {
                        c = e[b] = a.getExtension(b)
                    } catch (g) {}
                    return !!c
                }
                for (var e = {}, g = 0; g < b.extensions.length; ++g) {
                    var d = b.extensions[g];
                    if (!c(d)) return b.onDestroy(), b.onDone('"' + d + '" extension is not supported by the current WebGL context, try upgrading your system or a different browser'), null
                }
                b.optionalExtensions.forEach(c);
                return {
                    extensions: e,
                    restore: function() {
                        Object.keys(e).forEach(function(a) {
                            if (e[a] && !c(a)) throw Error("(regl): error restoring extension " + a)
                        })
                    }
                }
            }

            function J(a, b) {
                for (var c = Array(a), e = 0; e < a; ++e) c[e] = b(e);
                return c
            }

            function bb(a) {
                var b, c;
                b = (65535 < a) << 4;
                a >>>= b;
                c = (255 < a) << 3;
                a >>>= c;
                b |= c;
                c = (15 < a) << 2;
                a >>>= c;
                b |= c;
                c = (3 < a) << 1;
                return b | c | a >>> c >> 1
            }

            function cb() {
                function a(a) {
                    a: {
                        for (var b = 16; 268435456 >= b; b *= 16)
                            if (a <= b) {
                                a = b;
                                break a
                            } a = 0
                    }
                    b = c[bb(a) >> 2];
                    return 0 < b.length ? b.pop() : new ArrayBuffer(a)
                }

                function b(a) {
                    c[bb(a.byteLength) >> 2].push(a)
                }
                var c = J(8, function() {
                    return []
                });
                return {
                    alloc: a,
                    free: b,
                    allocType: function(b, c) {
                        var d = null;
                        switch (b) {
                            case 5120:
                                d = new Int8Array(a(c), 0, c);
                                break;
                            case 5121:
                                d = new Uint8Array(a(c), 0, c);
                                break;
                            case 5122:
                                d = new Int16Array(a(2 * c), 0, c);
                                break;
                            case 5123:
                                d = new Uint16Array(a(2 * c), 0, c);
                                break;
                            case 5124:
                                d = new Int32Array(a(4 * c), 0, c);
                                break;
                            case 5125:
                                d = new Uint32Array(a(4 * c), 0, c);
                                break;
                            case 5126:
                                d = new Float32Array(a(4 * c), 0, c);
                                break;
                            default:
                                return null
                        }
                        return d.length !== c ? d.subarray(0, c) : d
                    },
                    freeType: function(a) {
                        b(a.buffer)
                    }
                }
            }

            function ma(a) {
                return !!a && "object" === typeof a && Array.isArray(a.shape) && Array.isArray(a.stride) && "number" === typeof a.offset && a.shape.length === a.stride.length && (Array.isArray(a.data) || M(a.data))
            }

            function db(a, b, c, e, g, d) {
                for (var n = 0; n < b; ++n)
                    for (var f = a[n], r = 0; r < c; ++r)
                        for (var q = f[r], t = 0; t < e; ++t) g[d++] = q[t]
            }

            function eb(a, b, c, e, g) {
                for (var d = 1, n = c + 1; n < b.length; ++n) d *= b[n];
                var f = b[c];
                if (4 === b.length - c) {
                    var r = b[c + 1],
                        q = b[c + 2];
                    b = b[c + 3];
                    for (n = 0; n < f; ++n) db(a[n], r, q, b, e, g), g += d
                } else
                    for (n = 0; n < f; ++n) eb(a[n], b, c + 1, e, g), g += d
            }

            function Ha(a) {
                return Ia[Object.prototype.toString.call(a)] | 0
            }

            function fb(a, b) {
                for (var c = 0; c < b.length; ++c) a[c] = b[c]
            }

            function gb(a, b, c, e, g, d, n) {
                for (var f = 0, r = 0; r < c; ++r)
                    for (var q = 0; q < e; ++q) a[f++] = b[g * r + d * q + n]
            }

            function Gb(a, b, c, e) {
                function g(b) {
                    this.id = r++;
                    this.buffer = a.createBuffer();
                    this.type = b;
                    this.usage = 35044;
                    this.byteLength = 0;
                    this.dimension = 1;
                    this.dtype = 5121;
                    this.persistentData = null;
                    c.profile && (this.stats = {
                        size: 0
                    })
                }

                function d(b, c, k) {
                    b.byteLength = c.byteLength;
                    a.bufferData(b.type, c, k)
                }

                function n(a, b, c, h, l, e) {
                    a.usage = c;
                    if (Array.isArray(b)) {
                        if (a.dtype = h || 5126, 0 < b.length)
                            if (Array.isArray(b[0])) {
                                l = hb(b);
                                for (var v = h = 1; v < l.length; ++v) h *= l[v];
                                a.dimension = h;
                                b = Qa(b, l, a.dtype);
                                d(a, b, c);
                                e ? a.persistentData = b : x.freeType(b)
                            } else "number" === typeof b[0] ? (a.dimension = l, l = x.allocType(a.dtype, b.length), fb(l, b), d(a, l, c), e ? a.persistentData = l : x.freeType(l)) : M(b[0]) && (a.dimension = b[0].length, a.dtype = h || Ha(b[0]) || 5126, b = Qa(b, [b.length, b[0].length], a.dtype), d(a, b, c), e ? a.persistentData = b : x.freeType(b))
                    } else if (M(b)) a.dtype = h || Ha(b), a.dimension = l, d(a, b, c), e && (a.persistentData = new Uint8Array(new Uint8Array(b.buffer)));
                    else if (ma(b)) {
                        l = b.shape;
                        var g = b.stride,
                            v = b.offset,
                            f = 0,
                            q = 0,
                            r = 0,
                            t = 0;
                        1 === l.length ? (f = l[0], q = 1, r = g[0], t = 0) : 2 === l.length && (f = l[0], q = l[1], r = g[0], t = g[1]);
                        a.dtype = h || Ha(b.data) || 5126;
                        a.dimension = q;
                        l = x.allocType(a.dtype, f * q);
                        gb(l, b.data, f, q, r, t, v);
                        d(a, l, c);
                        e ? a.persistentData = l : x.freeType(l)
                    }
                }

                function f(c) {
                    b.bufferCount--;
                    for (var d = 0; d < e.state.length; ++d) {
                        var k = e.state[d];
                        k.buffer === c && (a.disableVertexAttribArray(d), k.buffer = null)
                    }
                    a.deleteBuffer(c.buffer);
                    c.buffer = null;
                    delete q[c.id]
                }
                var r = 0,
                    q = {};
                g.prototype.bind = function() {
                    a.bindBuffer(this.type, this.buffer)
                };
                g.prototype.destroy = function() {
                    f(this)
                };
                var t = [];
                c.profile && (b.getTotalBufferSize = function() {
                    var a = 0;
                    Object.keys(q).forEach(function(b) {
                        a += q[b].stats.size
                    });
                    return a
                });
                return {
                    create: function(m, e, d, h) {
                        function l(b) {
                            var m = 35044,
                                e = null,
                                d = 0,
                                k = 0,
                                g = 1;
                            Array.isArray(b) || M(b) || ma(b) ? e = b : "number" === typeof b ? d = b | 0 : b && ("data" in b && (e = b.data), "usage" in b && (m = jb[b.usage]), "type" in b && (k = Ra[b.type]), "dimension" in b && (g = b.dimension | 0), "length" in b && (d = b.length | 0));
                            u.bind();
                            e ? n(u, e, m, k, g, h) : (d && a.bufferData(u.type, d, m), u.dtype = k || 5121, u.usage = m, u.dimension = g, u.byteLength = d);
                            c.profile && (u.stats.size = u.byteLength * ja[u.dtype]);
                            return l
                        }
                        b.bufferCount++;
                        var u = new g(e);
                        q[u.id] = u;
                        d || l(m);
                        l._reglType = "buffer";
                        l._buffer = u;
                        l.subdata = function(b, c) {
                            var m = (c || 0) | 0,
                                e;
                            u.bind();
                            if (M(b)) a.bufferSubData(u.type, m, b);
                            else if (Array.isArray(b)) {
                                if (0 < b.length)
                                    if ("number" === typeof b[0]) {
                                        var d = x.allocType(u.dtype, b.length);
                                        fb(d, b);
                                        a.bufferSubData(u.type, m, d);
                                        x.freeType(d)
                                    } else if (Array.isArray(b[0]) || M(b[0])) e = hb(b), d = Qa(b, e, u.dtype), a.bufferSubData(u.type, m, d), x.freeType(d)
                            } else if (ma(b)) {
                                e = b.shape;
                                var h = b.stride,
                                    k = d = 0,
                                    g = 0,
                                    F = 0;
                                1 === e.length ? (d = e[0], k = 1, g = h[0], F = 0) : 2 === e.length && (d = e[0], k = e[1], g = h[0], F = h[1]);
                                e = Array.isArray(b.data) ? u.dtype : Ha(b.data);
                                e = x.allocType(e, d * k);
                                gb(e, b.data, d, k, g, F, b.offset);
                                a.bufferSubData(u.type, m, e);
                                x.freeType(e)
                            }
                            return l
                        };
                        c.profile && (l.stats = u.stats);
                        l.destroy = function() {
                            f(u)
                        };
                        return l
                    },
                    createStream: function(a, b) {
                        var c = t.pop();
                        c || (c = new g(a));
                        c.bind();
                        n(c, b, 35040, 0, 1, !1);
                        return c
                    },
                    destroyStream: function(a) {
                        t.push(a)
                    },
                    clear: function() {
                        S(q).forEach(f);
                        t.forEach(f)
                    },
                    getBuffer: function(a) {
                        return a && a._buffer instanceof g ? a._buffer : null
                    },
                    restore: function() {
                        S(q).forEach(function(b) {
                            b.buffer = a.createBuffer();
                            a.bindBuffer(b.type, b.buffer);
                            a.bufferData(b.type, b.persistentData || b.byteLength, b.usage)
                        })
                    },
                    _initBuffer: n
                }
            }

            function Hb(a, b, c, e) {
                function g(a) {
                    this.id = r++;
                    f[this.id] = this;
                    this.buffer = a;
                    this.primType = 4;
                    this.type = this.vertCount = 0
                }

                function d(e, d, g, h, l, u, v) {
                    e.buffer.bind();
                    if (d) {
                        var f = v;
                        v || M(d) && (!ma(d) || M(d.data)) || (f = b.oes_element_index_uint ? 5125 : 5123);
                        c._initBuffer(e.buffer, d, g, f, 3)
                    } else a.bufferData(34963, u, g), e.buffer.dtype = f || 5121, e.buffer.usage = g, e.buffer.dimension = 3, e.buffer.byteLength = u;
                    f = v;
                    if (!v) {
                        switch (e.buffer.dtype) {
                            case 5121:
                            case 5120:
                                f = 5121;
                                break;
                            case 5123:
                            case 5122:
                                f = 5123;
                                break;
                            case 5125:
                            case 5124:
                                f = 5125
                        }
                        e.buffer.dtype = f
                    }
                    e.type = f;
                    d = l;
                    0 > d && (d = e.buffer.byteLength, 5123 === f ? d >>= 1 : 5125 === f && (d >>= 2));
                    e.vertCount = d;
                    d = h;
                    0 > h && (d = 4, h = e.buffer.dimension, 1 === h && (d = 0), 2 === h && (d = 1), 3 === h && (d = 4));
                    e.primType = d
                }

                function n(a) {
                    e.elementsCount--;
                    delete f[a.id];
                    a.buffer.destroy();
                    a.buffer = null
                }
                var f = {},
                    r = 0,
                    q = {
                        uint8: 5121,
                        uint16: 5123
                    };
                b.oes_element_index_uint && (q.uint32 = 5125);
                g.prototype.bind = function() {
                    this.buffer.bind()
                };
                var t = [];
                return {
                    create: function(a, b) {
                        function k(a) {
                            if (a)
                                if ("number" === typeof a) h(a), l.primType = 4, l.vertCount = a | 0, l.type = 5121;
                                else {
                                    var b = null,
                                        c = 35044,
                                        e = -1,
                                        g = -1,
                                        f = 0,
                                        m = 0;
                                    if (Array.isArray(a) || M(a) || ma(a)) b = a;
                                    else if ("data" in a && (b = a.data), "usage" in a && (c = jb[a.usage]), "primitive" in a && (e = Sa[a.primitive]), "count" in a && (g = a.count | 0), "type" in a && (m = q[a.type]), "length" in a) f = a.length | 0;
                                    else if (f = g, 5123 === m || 5122 === m) f *= 2;
                                    else if (5125 === m || 5124 === m) f *= 4;
                                    d(l, b, c, e, g, f, m)
                                }
                            else h(), l.primType = 4, l.vertCount = 0, l.type = 5121;
                            return k
                        }
                        var h = c.create(null, 34963, !0),
                            l = new g(h._buffer);
                        e.elementsCount++;
                        k(a);
                        k._reglType = "elements";
                        k._elements = l;
                        k.subdata = function(a, b) {
                            h.subdata(a, b);
                            return k
                        };
                        k.destroy = function() {
                            n(l)
                        };
                        return k
                    },
                    createStream: function(a) {
                        var b = t.pop();
                        b || (b = new g(c.create(null, 34963, !0, !1)._buffer));
                        d(b, a, 35040, -1, -1, 0, 0);
                        return b
                    },
                    destroyStream: function(a) {
                        t.push(a)
                    },
                    getElements: function(a) {
                        return "function" === typeof a && a._elements instanceof g ? a._elements : null
                    },
                    clear: function() {
                        S(f).forEach(n)
                    }
                }
            }

            function kb(a) {
                for (var b = x.allocType(5123, a.length), c = 0; c < a.length; ++c)
                    if (isNaN(a[c])) b[c] = 65535;
                    else if (Infinity === a[c]) b[c] = 31744;
                else if (-Infinity === a[c]) b[c] = 64512;
                else {
                    lb[0] = a[c];
                    var e = Ib[0],
                        g = e >>> 31 << 15,
                        d = (e << 1 >>> 24) - 127,
                        e = e >> 13 & 1023;
                    b[c] = -24 > d ? g : -14 > d ? g + (e + 1024 >> -14 - d) : 15 < d ? g + 31744 : g + (d + 15 << 10) + e
                }
                return b
            }

            function pa(a) {
                return Array.isArray(a) || M(a)
            }

            function Ea(a) {
                return "[object " + a + "]"
            }

            function mb(a) {
                return Array.isArray(a) && (0 === a.length || "number" === typeof a[0])
            }

            function nb(a) {
                return Array.isArray(a) && 0 !== a.length && pa(a[0]) ? !0 : !1
            }

            function na(a) {
                return Object.prototype.toString.call(a)
            }

            function Ta(a) {
                if (!a) return !1;
                var b = na(a);
                return 0 <= Jb.indexOf(b) ? !0 : mb(a) || nb(a) || ma(a)
            }

            function ob(a, b) {
                36193 === a.type ? (a.data = kb(b), x.freeType(b)) : a.data = b
            }

            function Ja(a, b, c, e, g, d) {
                a = "undefined" !== typeof y[a] ? y[a] : L[a] * qa[b];
                d && (a *= 6);
                if (g) {
                    for (e = 0; 1 <= c;) e += a * c * c, c /= 2;
                    return e
                }
                return a * c * e
            }

            function Kb(a, b, c, e, g, d, n) {
                function f() {
                    this.format = this.internalformat = 6408;
                    this.type = 5121;
                    this.flipY = this.premultiplyAlpha = this.compressed = !1;
                    this.unpackAlignment = 1;
                    this.colorSpace = 37444;
                    this.channels = this.height = this.width = 0
                }

                function r(a, b) {
                    a.internalformat = b.internalformat;
                    a.format = b.format;
                    a.type = b.type;
                    a.compressed = b.compressed;
                    a.premultiplyAlpha = b.premultiplyAlpha;
                    a.flipY = b.flipY;
                    a.unpackAlignment = b.unpackAlignment;
                    a.colorSpace = b.colorSpace;
                    a.width = b.width;
                    a.height = b.height;
                    a.channels = b.channels
                }

                function q(a, b) {
                    if ("object" === typeof b && b) {
                        "premultiplyAlpha" in b && (a.premultiplyAlpha = b.premultiplyAlpha);
                        "flipY" in b && (a.flipY = b.flipY);
                        "alignment" in b && (a.unpackAlignment = b.alignment);
                        "colorSpace" in b && (a.colorSpace = wa[b.colorSpace]);
                        "type" in b && (a.type = G[b.type]);
                        var c = a.width,
                            e = a.height,
                            d = a.channels,
                            h = !1;
                        "shape" in b ? (c = b.shape[0], e = b.shape[1], 3 === b.shape.length && (d = b.shape[2], h = !0)) : ("radius" in b && (c = e = b.radius), "width" in b && (c = b.width), "height" in b && (e = b.height), "channels" in b && (d = b.channels, h = !0));
                        a.width = c | 0;
                        a.height = e | 0;
                        a.channels = d | 0;
                        c = !1;
                        "format" in b && (c = b.format, e = a.internalformat = U[c], a.format = Lb[e], c in G && !("type" in b) && (a.type = G[c]), c in W && (a.compressed = !0), c = !0);
                        !h && c ? a.channels = L[a.format] : h && !c && a.channels !== La[a.format] && (a.format = a.internalformat = La[a.channels])
                    }
                }

                function t(b) {
                    a.pixelStorei(37440, b.flipY);
                    a.pixelStorei(37441, b.premultiplyAlpha);
                    a.pixelStorei(37443, b.colorSpace);
                    a.pixelStorei(3317, b.unpackAlignment)
                }

                function m() {
                    f.call(this);
                    this.yOffset = this.xOffset = 0;
                    this.data = null;
                    this.needsFree = !1;
                    this.element = null;
                    this.needsCopy = !1
                }

                function C(a, b) {
                    var c = null;
                    Ta(b) ? c = b : b && (q(a, b), "x" in b && (a.xOffset = b.x | 0), "y" in b && (a.yOffset = b.y | 0), Ta(b.data) && (c = b.data));
                    if (b.copy) {
                        var e = g.viewportWidth,
                            d = g.viewportHeight;
                        a.width = a.width || e - a.xOffset;
                        a.height = a.height || d - a.yOffset;
                        a.needsCopy = !0
                    } else if (!c) a.width = a.width || 1, a.height = a.height || 1, a.channels = a.channels || 4;
                    else if (M(c)) a.channels = a.channels || 4, a.data = c, "type" in b || 5121 !== a.type || (a.type = Ia[Object.prototype.toString.call(c)] | 0);
                    else if (mb(c)) {
                        a.channels = a.channels || 4;
                        e = c;
                        d = e.length;
                        switch (a.type) {
                            case 5121:
                            case 5123:
                            case 5125:
                            case 5126:
                                d = x.allocType(a.type, d);
                                d.set(e);
                                a.data = d;
                                break;
                            case 36193:
                                a.data = kb(e)
                        }
                        a.alignment = 1;
                        a.needsFree = !0
                    } else if (ma(c)) {
                        e = c.data;
                        Array.isArray(e) || 5121 !== a.type || (a.type = Ia[Object.prototype.toString.call(e)] | 0);
                        var d = c.shape,
                            h = c.stride,
                            f, l, p, w;
                        3 === d.length ? (p = d[2], w = h[2]) : w = p = 1;
                        f = d[0];
                        l = d[1];
                        d = h[0];
                        h = h[1];
                        a.alignment = 1;
                        a.width = f;
                        a.height = l;
                        a.channels = p;
                        a.format = a.internalformat = La[p];
                        a.needsFree = !0;
                        f = w;
                        c = c.offset;
                        p = a.width;
                        w = a.height;
                        l = a.channels;
                        for (var z = x.allocType(36193 === a.type ? 5126 : a.type, p * w * l), I = 0, fa = 0; fa < w; ++fa)
                            for (var ga = 0; ga < p; ++ga)
                                for (var xa = 0; xa < l; ++xa) z[I++] = e[d * ga + h * fa + f * xa + c];
                        ob(a, z)
                    } else if (na(c) === Ua || na(c) === pb) na(c) === Ua ? a.element = c : a.element = c.canvas, a.width = a.element.width, a.height = a.element.height, a.channels = 4;
                    else if (na(c) === qb) a.element = c, a.width = c.width, a.height = c.height, a.channels = 4;
                    else if (na(c) === rb) a.element = c, a.width = c.naturalWidth, a.height = c.naturalHeight, a.channels = 4;
                    else if (na(c) === sb) a.element = c, a.width = c.videoWidth, a.height = c.videoHeight, a.channels = 4;
                    else if (nb(c)) {
                        e = a.width || c[0].length;
                        d = a.height || c.length;
                        h = a.channels;
                        h = pa(c[0][0]) ? h || c[0][0].length : h || 1;
                        f = Ma.shape(c);
                        p = 1;
                        for (w = 0; w < f.length; ++w) p *= f[w];
                        p = x.allocType(36193 === a.type ? 5126 : a.type, p);
                        Ma.flatten(c, f, "", p);
                        ob(a, p);
                        a.alignment = 1;
                        a.width = e;
                        a.height = d;
                        a.channels = h;
                        a.format = a.internalformat = La[h];
                        a.needsFree = !0
                    }
                }

                function k(b, c, d, h, f) {
                    var g = b.element,
                        l = b.data,
                        k = b.internalformat,
                        p = b.format,
                        w = b.type,
                        z = b.width,
                        I = b.height;
                    t(b);
                    g ? a.texSubImage2D(c, f, d, h, p, w, g) : b.compressed ? a.compressedTexSubImage2D(c, f, d, h, k, z, I, l) : b.needsCopy ? (e(), a.copyTexSubImage2D(c, f, d, h, b.xOffset, b.yOffset, z, I)) : a.texSubImage2D(c, f, d, h, z, I, p, w, l)
                }

                function h() {
                    return P.pop() || new m
                }

                function l(a) {
                    a.needsFree && x.freeType(a.data);
                    m.call(a);
                    P.push(a)
                }

                function u() {
                    f.call(this);
                    this.genMipmaps = !1;
                    this.mipmapHint = 4352;
                    this.mipmask = 0;
                    this.images = Array(16)
                }

                function v(a, b, c) {
                    var d = a.images[0] = h();
                    a.mipmask = 1;
                    d.width = a.width = b;
                    d.height = a.height = c;
                    d.channels = a.channels = 4
                }

                function N(a, b) {
                    var c = null;
                    if (Ta(b)) c = a.images[0] = h(), r(c, a), C(c, b), a.mipmask = 1;
                    else if (q(a, b), Array.isArray(b.mipmap))
                        for (var d = b.mipmap, e = 0; e < d.length; ++e) c = a.images[e] = h(), r(c, a), c.width >>= e, c.height >>= e, C(c, d[e]), a.mipmask |= 1 << e;
                    else c = a.images[0] = h(), r(c, a), C(c, b), a.mipmask = 1;
                    r(a, a.images[0])
                }

                function B(b, c) {
                    for (var d = b.images, h = 0; h < d.length && d[h]; ++h) {
                        var f = d[h],
                            g = c,
                            l = h,
                            k = f.element,
                            p = f.data,
                            w = f.internalformat,
                            z = f.format,
                            I = f.type,
                            fa = f.width,
                            ga = f.height,
                            xa = f.channels;
                        t(f);
                        k ? a.texImage2D(g, l, z, z, I, k) : f.compressed ? a.compressedTexImage2D(g, l, w, fa, ga, 0, p) : f.needsCopy ? (e(), a.copyTexImage2D(g, l, z, f.xOffset, f.yOffset, fa, ga, 0)) : ((f = !p) && (p = x.zero.allocType(I, fa * ga * xa)), a.texImage2D(g, l, z, fa, ga, 0, z, I, p), f && p && x.zero.freeType(p))
                    }
                }

                function D() {
                    var a = tb.pop() || new u;
                    f.call(a);
                    for (var b = a.mipmask = 0; 16 > b; ++b) a.images[b] = null;
                    return a
                }

                function ib(a) {
                    for (var b = a.images, c = 0; c < b.length; ++c) b[c] && l(b[c]), b[c] = null;
                    tb.push(a)
                }

                function y() {
                    this.magFilter = this.minFilter = 9728;
                    this.wrapT = this.wrapS = 33071;
                    this.anisotropic = 1;
                    this.genMipmaps = !1;
                    this.mipmapHint = 4352
                }

                function O(a, b) {
                    "min" in b && (a.minFilter = Va[b.min], 0 <= Mb.indexOf(a.minFilter) && !("faces" in b) && (a.genMipmaps = !0));
                    "mag" in b && (a.magFilter = V[b.mag]);
                    var c = a.wrapS,
                        d = a.wrapT;
                    if ("wrap" in b) {
                        var e = b.wrap;
                        "string" === typeof e ? c = d = K[e] : Array.isArray(e) && (c = K[e[0]], d = K[e[1]])
                    } else "wrapS" in b && (c = K[b.wrapS]), "wrapT" in b && (d = K[b.wrapT]);
                    a.wrapS = c;
                    a.wrapT = d;
                    "anisotropic" in b && (a.anisotropic = b.anisotropic);
                    if ("mipmap" in b) {
                        c = !1;
                        switch (typeof b.mipmap) {
                            case "string":
                                a.mipmapHint = ua[b.mipmap];
                                c = a.genMipmaps = !0;
                                break;
                            case "boolean":
                                c = a.genMipmaps = b.mipmap;
                                break;
                            case "object":
                                a.genMipmaps = !1, c = !0
                        }!c || "min" in b || (a.minFilter = 9984)
                    }
                }

                function R(c, d) {
                    a.texParameteri(d, 10241, c.minFilter);
                    a.texParameteri(d, 10240, c.magFilter);
                    a.texParameteri(d, 10242, c.wrapS);
                    a.texParameteri(d, 10243, c.wrapT);
                    b.ext_texture_filter_anisotropic && a.texParameteri(d, 34046, c.anisotropic);
                    c.genMipmaps && (a.hint(33170, c.mipmapHint), a.generateMipmap(d))
                }

                function F(b) {
                    f.call(this);
                    this.mipmask = 0;
                    this.internalformat = 6408;
                    this.id = ya++;
                    this.refCount = 1;
                    this.target = b;
                    this.texture = a.createTexture();
                    this.unit = -1;
                    this.bindCount = 0;
                    this.texInfo = new y;
                    n.profile && (this.stats = {
                        size: 0
                    })
                }

                function T(b) {
                    a.activeTexture(33984);
                    a.bindTexture(b.target, b.texture)
                }

                function Aa() {
                    var b = ha[0];
                    b ? a.bindTexture(b.target, b.texture) : a.bindTexture(3553, null)
                }

                function A(b) {
                    var c = b.texture,
                        e = b.unit,
                        h = b.target;
                    0 <= e && (a.activeTexture(33984 + e), a.bindTexture(h, null), ha[e] = null);
                    a.deleteTexture(c);
                    b.texture = null;
                    b.params = null;
                    b.pixels = null;
                    b.refCount = 0;
                    delete X[b.id];
                    d.textureCount--
                }
                var ua = {
                        "don't care": 4352,
                        "dont care": 4352,
                        nice: 4354,
                        fast: 4353
                    },
                    K = {
                        repeat: 10497,
                        clamp: 33071,
                        mirror: 33648
                    },
                    V = {
                        nearest: 9728,
                        linear: 9729
                    },
                    Va = E({
                        mipmap: 9987,
                        "nearest mipmap nearest": 9984,
                        "linear mipmap nearest": 9985,
                        "nearest mipmap linear": 9986,
                        "linear mipmap linear": 9987
                    }, V),
                    wa = {
                        none: 0,
                        browser: 37444
                    },
                    G = {
                        uint8: 5121,
                        rgba4: 32819,
                        rgb565: 33635,
                        "rgb5 a1": 32820
                    },
                    U = {
                        alpha: 6406,
                        luminance: 6409,
                        "luminance alpha": 6410,
                        rgb: 6407,
                        rgba: 6408,
                        rgba4: 32854,
                        "rgb5 a1": 32855,
                        rgb565: 36194
                    },
                    W = {};
                b.ext_srgb && (U.srgb = 35904, U.srgba = 35906);
                b.oes_texture_float && (G.float32 = G["float"] = 5126);
                b.oes_texture_half_float && (G.float16 = G["half float"] = 36193);
                b.webgl_depth_texture && (E(U, {
                    depth: 6402,
                    "depth stencil": 34041
                }), E(G, {
                    uint16: 5123,
                    uint32: 5125,
                    "depth stencil": 34042
                }));
                b.webgl_compressed_texture_s3tc && E(W, {
                    "rgb s3tc dxt1": 33776,
                    "rgba s3tc dxt1": 33777,
                    "rgba s3tc dxt3": 33778,
                    "rgba s3tc dxt5": 33779
                });
                b.webgl_compressed_texture_atc && E(W, {
                    "rgb atc": 35986,
                    "rgba atc explicit alpha": 35987,
                    "rgba atc interpolated alpha": 34798
                });
                b.webgl_compressed_texture_pvrtc && E(W, {
                    "rgb pvrtc 4bppv1": 35840,
                    "rgb pvrtc 2bppv1": 35841,
                    "rgba pvrtc 4bppv1": 35842,
                    "rgba pvrtc 2bppv1": 35843
                });
                b.webgl_compressed_texture_etc1 && (W["rgb etc1"] = 36196);
                var Nb = Array.prototype.slice.call(a.getParameter(34467));
                Object.keys(W).forEach(function(a) {
                    var b = W[a];
                    0 <= Nb.indexOf(b) && (U[a] = b)
                });
                var ca = Object.keys(U);
                c.textureFormats = ca;
                var J = [];
                Object.keys(U).forEach(function(a) {
                    J[U[a]] = a
                });
                var da = [];
                Object.keys(G).forEach(function(a) {
                    da[G[a]] = a
                });
                var oa = [];
                Object.keys(V).forEach(function(a) {
                    oa[V[a]] = a
                });
                var za = [];
                Object.keys(Va).forEach(function(a) {
                    za[Va[a]] = a
                });
                var ka = [];
                Object.keys(K).forEach(function(a) {
                    ka[K[a]] = a
                });
                var Lb = ca.reduce(function(a, b) {
                        var c = U[b];
                        6409 === c || 6406 === c || 6409 === c || 6410 === c || 6402 === c || 34041 === c ? a[c] = c : 32855 === c || 0 <= b.indexOf("rgba") ? a[c] = 6408 : a[c] = 6407;
                        return a
                    }, {}),
                    P = [],
                    tb = [],
                    ya = 0,
                    X = {},
                    ea = c.maxTextureUnits,
                    ha = Array(ea).map(function() {
                        return null
                    });
                E(F.prototype, {
                    bind: function() {
                        this.bindCount += 1;
                        var b = this.unit;
                        if (0 > b) {
                            for (var c = 0; c < ea; ++c) {
                                var e = ha[c];
                                if (e) {
                                    if (0 < e.bindCount) continue;
                                    e.unit = -1
                                }
                                ha[c] = this;
                                b = c;
                                break
                            }
                            n.profile && d.maxTextureUnits < b + 1 && (d.maxTextureUnits = b + 1);
                            this.unit = b;
                            a.activeTexture(33984 + b);
                            a.bindTexture(this.target, this.texture)
                        }
                        return b
                    },
                    unbind: function() {
                        --this.bindCount
                    },
                    decRef: function() {
                        0 >= --this.refCount && A(this)
                    }
                });
                n.profile && (d.getTotalTextureSize = function() {
                    var a = 0;
                    Object.keys(X).forEach(function(b) {
                        a += X[b].stats.size
                    });
                    return a
                });
                return {
                    create2D: function(b, c) {
                        function e(a, b) {
                            var c = f.texInfo;
                            y.call(c);
                            var d = D();
                            "number" === typeof a ? "number" === typeof b ? v(d, a | 0, b | 0) : v(d, a | 0, a | 0) : a ? (O(c, a), N(d, a)) : v(d, 1, 1);
                            c.genMipmaps && (d.mipmask = (d.width << 1) - 1);
                            f.mipmask = d.mipmask;
                            r(f, d);
                            f.internalformat = d.internalformat;
                            e.width = d.width;
                            e.height = d.height;
                            T(f);
                            B(d, 3553);
                            R(c, 3553);
                            Aa();
                            ib(d);
                            n.profile && (f.stats.size = Ja(f.internalformat, f.type, d.width, d.height, c.genMipmaps, !1));
                            e.format = J[f.internalformat];
                            e.type = da[f.type];
                            e.mag = oa[c.magFilter];
                            e.min = za[c.minFilter];
                            e.wrapS = ka[c.wrapS];
                            e.wrapT = ka[c.wrapT];
                            return e
                        }
                        var f = new F(3553);
                        X[f.id] = f;
                        d.textureCount++;
                        e(b, c);
                        e.subimage = function(a, b, c, d) {
                            b |= 0;
                            c |= 0;
                            d |= 0;
                            var p = h();
                            r(p, f);
                            p.width = 0;
                            p.height = 0;
                            C(p, a);
                            p.width = p.width || (f.width >> d) - b;
                            p.height = p.height || (f.height >> d) - c;
                            T(f);
                            k(p, 3553, b, c, d);
                            Aa();
                            l(p);
                            return e
                        };
                        e.resize = function(b, c) {
                            var d = b | 0,
                                h = c | 0 || d;
                            if (d === f.width && h === f.height) return e;
                            e.width = f.width = d;
                            e.height = f.height = h;
                            T(f);
                            for (var p, w = f.channels, z = f.type, I = 0; f.mipmask >> I; ++I) {
                                var fa = d >> I,
                                    ga = h >> I;
                                if (!fa || !ga) break;
                                p = x.zero.allocType(z, fa * ga * w);
                                a.texImage2D(3553, I, f.format, fa, ga, 0, f.format, f.type, p);
                                p && x.zero.freeType(p)
                            }
                            Aa();
                            n.profile && (f.stats.size = Ja(f.internalformat, f.type, d, h, !1, !1));
                            return e
                        };
                        e._reglType = "texture2d";
                        e._texture = f;
                        n.profile && (e.stats = f.stats);
                        e.destroy = function() {
                            f.decRef()
                        };
                        return e
                    },
                    createCube: function(b, c, e, f, g, ua) {
                        function A(a, b, c, d, e, f) {
                            var H, Y = m.texInfo;
                            y.call(Y);
                            for (H = 0; 6 > H; ++H) p[H] = D();
                            if ("number" === typeof a || !a)
                                for (a = a | 0 || 1, H = 0; 6 > H; ++H) v(p[H], a, a);
                            else if ("object" === typeof a)
                                if (b) N(p[0], a), N(p[1], b), N(p[2], c), N(p[3], d), N(p[4], e), N(p[5], f);
                                else if (O(Y, a), q(m, a), "faces" in a)
                                for (a = a.faces, H = 0; 6 > H; ++H) r(p[H], m), N(p[H], a[H]);
                            else
                                for (H = 0; 6 > H; ++H) N(p[H], a);
                            r(m, p[0]);
                            m.mipmask = Y.genMipmaps ? (p[0].width << 1) - 1 : p[0].mipmask;
                            m.internalformat = p[0].internalformat;
                            A.width = p[0].width;
                            A.height = p[0].height;
                            T(m);
                            for (H = 0; 6 > H; ++H) B(p[H], 34069 + H);
                            R(Y, 34067);
                            Aa();
                            n.profile && (m.stats.size = Ja(m.internalformat, m.type, A.width, A.height, Y.genMipmaps, !0));
                            A.format = J[m.internalformat];
                            A.type = da[m.type];
                            A.mag = oa[Y.magFilter];
                            A.min = za[Y.minFilter];
                            A.wrapS = ka[Y.wrapS];
                            A.wrapT = ka[Y.wrapT];
                            for (H = 0; 6 > H; ++H) ib(p[H]);
                            return A
                        }
                        var m = new F(34067);
                        X[m.id] = m;
                        d.cubeCount++;
                        var p = Array(6);
                        A(b, c, e, f, g, ua);
                        A.subimage = function(a, b, c, p, d) {
                            c |= 0;
                            p |= 0;
                            d |= 0;
                            var e = h();
                            r(e, m);
                            e.width = 0;
                            e.height = 0;
                            C(e, b);
                            e.width = e.width || (m.width >> d) - c;
                            e.height = e.height || (m.height >> d) - p;
                            T(m);
                            k(e, 34069 + a, c, p, d);
                            Aa();
                            l(e);
                            return A
                        };
                        A.resize = function(b) {
                            b |= 0;
                            if (b !== m.width) {
                                A.width = m.width = b;
                                A.height = m.height = b;
                                T(m);
                                for (var c = 0; 6 > c; ++c)
                                    for (var p = 0; m.mipmask >> p; ++p) a.texImage2D(34069 + c, p, m.format, b >> p, b >> p, 0, m.format, m.type, null);
                                Aa();
                                n.profile && (m.stats.size = Ja(m.internalformat, m.type, A.width, A.height, !1, !0));
                                return A
                            }
                        };
                        A._reglType = "textureCube";
                        A._texture = m;
                        n.profile && (A.stats = m.stats);
                        A.destroy = function() {
                            m.decRef()
                        };
                        return A
                    },
                    clear: function() {
                        for (var b = 0; b < ea; ++b) a.activeTexture(33984 + b), a.bindTexture(3553, null), ha[b] = null;
                        S(X).forEach(A);
                        d.cubeCount = 0;
                        d.textureCount = 0
                    },
                    getTexture: function(a) {
                        return null
                    },
                    restore: function() {
                        for (var b = 0; b < ea; ++b) {
                            var c = ha[b];
                            c && (c.bindCount = 0, c.unit = -1, ha[b] = null)
                        }
                        S(X).forEach(function(b) {
                            b.texture = a.createTexture();
                            a.bindTexture(b.target, b.texture);
                            for (var c = 0; 32 > c; ++c)
                                if (0 !== (b.mipmask & 1 << c))
                                    if (3553 === b.target) a.texImage2D(3553, c, b.internalformat, b.width >> c, b.height >> c, 0, b.internalformat, b.type, null);
                                    else
                                        for (var d = 0; 6 > d; ++d) a.texImage2D(34069 + d, c, b.internalformat, b.width >> c, b.height >> c, 0, b.internalformat, b.type, null);
                            R(b.texInfo, b.target)
                        })
                    }
                }
            }

            function Ob(a, b, c, e, g, d) {
                function n(a, b, c) {
                    this.target = a;
                    this.texture = b;
                    this.renderbuffer = c;
                    var d = a = 0;
                    b ? (a = b.width, d = b.height) : c && (a = c.width, d = c.height);
                    this.width = a;
                    this.height = d
                }

                function f(a) {
                    a && (a.texture && a.texture._texture.decRef(), a.renderbuffer && a.renderbuffer._renderbuffer.decRef())
                }

                function r(a, b, c) {
                    a && (a.texture ? a.texture._texture.refCount += 1 : a.renderbuffer._renderbuffer.refCount += 1)
                }

                function q(b, c) {
                    c && (c.texture ? a.framebufferTexture2D(36160, b, c.target, c.texture._texture.texture, 0) : a.framebufferRenderbuffer(36160, b, 36161, c.renderbuffer._renderbuffer.renderbuffer))
                }

                function t(a) {
                    var b = 3553,
                        c = null,
                        d = null,
                        e = a;
                    "object" === typeof a && (e = a.data, "target" in a && (b = a.target | 0));
                    a = e._reglType;
                    "texture2d" === a ? c = e : "textureCube" === a ? c = e : "renderbuffer" === a && (d = e, b = 36161);
                    return new n(b, c, d)
                }

                function m(a, b, c, d, f) {
                    if (c) return a = e.create2D({
                        width: a,
                        height: b,
                        format: d,
                        type: f
                    }), a._texture.refCount = 0, new n(3553, a, null);
                    a = g.create({
                        width: a,
                        height: b,
                        format: d
                    });
                    a._renderbuffer.refCount = 0;
                    return new n(36161, null, a)
                }

                function C(a) {
                    return a && (a.texture || a.renderbuffer)
                }

                function k(a, b, c) {
                    a && (a.texture ? a.texture.resize(b, c) : a.renderbuffer && a.renderbuffer.resize(b, c), a.width = b, a.height = c)
                }

                function h() {
                    this.id = O++;
                    R[this.id] = this;
                    this.framebuffer = a.createFramebuffer();
                    this.height = this.width = 0;
                    this.colorAttachments = [];
                    this.depthStencilAttachment = this.stencilAttachment = this.depthAttachment = null
                }

                function l(a) {
                    a.colorAttachments.forEach(f);
                    f(a.depthAttachment);
                    f(a.stencilAttachment);
                    f(a.depthStencilAttachment)
                }

                function u(b) {
                    a.deleteFramebuffer(b.framebuffer);
                    b.framebuffer = null;
                    d.framebufferCount--;
                    delete R[b.id]
                }

                function v(b) {
                    var d;
                    a.bindFramebuffer(36160, b.framebuffer);
                    var e = b.colorAttachments;
                    for (d = 0; d < e.length; ++d) q(36064 + d, e[d]);
                    for (d = e.length; d < c.maxColorAttachments; ++d) a.framebufferTexture2D(36160, 36064 + d, 3553, null, 0);
                    a.framebufferTexture2D(36160, 33306, 3553, null, 0);
                    a.framebufferTexture2D(36160, 36096, 3553, null, 0);
                    a.framebufferTexture2D(36160, 36128, 3553, null, 0);
                    q(36096, b.depthAttachment);
                    q(36128, b.stencilAttachment);
                    q(33306, b.depthStencilAttachment);
                    a.checkFramebufferStatus(36160);
                    a.isContextLost();
                    a.bindFramebuffer(36160, B.next ? B.next.framebuffer : null);
                    B.cur = B.next;
                    a.getError()
                }

                function N(a, b) {
                    function c(a, b) {
                        var d, f = 0,
                            h = 0,
                            g = !0,
                            k = !0;
                        d = null;
                        var q = !0,
                            u = "rgba",
                            n = "uint8",
                            N = 1,
                            da = null,
                            oa = null,
                            B = null,
                            ka = !1;
                        if ("number" === typeof a) f = a | 0, h = b | 0 || f;
                        else if (a) {
                            "shape" in a ? (h = a.shape, f = h[0], h = h[1]) : ("radius" in a && (f = h = a.radius), "width" in a && (f = a.width), "height" in a && (h = a.height));
                            if ("color" in a || "colors" in a) d = a.color || a.colors, Array.isArray(d);
                            if (!d) {
                                "colorCount" in a && (N = a.colorCount | 0);
                                "colorTexture" in a && (q = !!a.colorTexture, u = "rgba4");
                                if ("colorType" in a && (n = a.colorType, !q))
                                    if ("half float" === n || "float16" === n) u = "rgba16f";
                                    else if ("float" === n || "float32" === n) u = "rgba32f";
                                "colorFormat" in a && (u = a.colorFormat, 0 <= x.indexOf(u) ? q = !0 : 0 <= D.indexOf(u) && (q = !1))
                            }
                            if ("depthTexture" in a || "depthStencilTexture" in a) ka = !(!a.depthTexture && !a.depthStencilTexture);
                            "depth" in a && ("boolean" === typeof a.depth ? g = a.depth : (da = a.depth, k = !1));
                            "stencil" in a && ("boolean" === typeof a.stencil ? k = a.stencil : (oa = a.stencil, g = !1));
                            "depthStencil" in a && ("boolean" === typeof a.depthStencil ? g = k = a.depthStencil : (B = a.depthStencil, k = g = !1))
                        } else f = h = 1;
                        var F = null,
                            y = null,
                            E = null,
                            T = null;
                        if (Array.isArray(d)) F = d.map(t);
                        else if (d) F = [t(d)];
                        else
                            for (F = Array(N), d = 0; d < N; ++d) F[d] = m(f, h, q, u, n);
                        f = f || F[0].width;
                        h = h || F[0].height;
                        da ? y = t(da) : g && !k && (y = m(f, h, ka, "depth", "uint32"));
                        oa ? E = t(oa) : k && !g && (E = m(f, h, !1, "stencil", "uint8"));
                        B ? T = t(B) : !da && !oa && k && g && (T = m(f, h, ka, "depth stencil", "depth stencil"));
                        g = null;
                        for (d = 0; d < F.length; ++d) r(F[d], f, h), F[d] && F[d].texture && (k = Wa[F[d].texture._texture.format] * Na[F[d].texture._texture.type], null === g && (g = k));
                        r(y, f, h);
                        r(E, f, h);
                        r(T, f, h);
                        l(e);
                        e.width = f;
                        e.height = h;
                        e.colorAttachments = F;
                        e.depthAttachment = y;
                        e.stencilAttachment = E;
                        e.depthStencilAttachment = T;
                        c.color = F.map(C);
                        c.depth = C(y);
                        c.stencil = C(E);
                        c.depthStencil = C(T);
                        c.width = e.width;
                        c.height = e.height;
                        v(e);
                        return c
                    }
                    var e = new h;
                    d.framebufferCount++;
                    c(a, b);
                    return E(c, {
                        resize: function(a, b) {
                            var d = Math.max(a | 0, 1),
                                f = Math.max(b | 0 || d, 1);
                            if (d === e.width && f === e.height) return c;
                            for (var h = e.colorAttachments, g = 0; g < h.length; ++g) k(h[g], d, f);
                            k(e.depthAttachment, d, f);
                            k(e.stencilAttachment, d, f);
                            k(e.depthStencilAttachment, d, f);
                            e.width = c.width = d;
                            e.height = c.height = f;
                            v(e);
                            return c
                        },
                        _reglType: "framebuffer",
                        _framebuffer: e,
                        destroy: function() {
                            u(e);
                            l(e)
                        },
                        use: function(a) {
                            B.setFBO({
                                framebuffer: c
                            }, a)
                        }
                    })
                }
                var B = {
                        cur: null,
                        next: null,
                        dirty: !1,
                        setFBO: null
                    },
                    x = ["rgba"],
                    D = ["rgba4", "rgb565", "rgb5 a1"];
                b.ext_srgb && D.push("srgba");
                b.ext_color_buffer_half_float && D.push("rgba16f", "rgb16f");
                b.webgl_color_buffer_float && D.push("rgba32f");
                var y = ["uint8"];
                b.oes_texture_half_float && y.push("half float", "float16");
                b.oes_texture_float && y.push("float", "float32");
                var O = 0,
                    R = {};
                return E(B, {
                    getFramebuffer: function(a) {
                        return "function" === typeof a && "framebuffer" === a._reglType && (a = a._framebuffer, a instanceof h) ? a : null
                    },
                    create: N,
                    createCube: function(a) {
                        function b(a) {
                            var d, f = {
                                    color: null
                                },
                                h = 0,
                                g = null;
                            d = "rgba";
                            var l = "uint8",
                                m = 1;
                            if ("number" === typeof a) h = a | 0;
                            else if (a) {
                                "shape" in a ? h = a.shape[0] : ("radius" in a && (h = a.radius | 0), "width" in a ? h = a.width | 0 : "height" in a && (h = a.height | 0));
                                if ("color" in a || "colors" in a) g = a.color || a.colors, Array.isArray(g);
                                g || ("colorCount" in a && (m = a.colorCount | 0), "colorType" in a && (l = a.colorType), "colorFormat" in a && (d = a.colorFormat));
                                "depth" in a && (f.depth = a.depth);
                                "stencil" in a && (f.stencil = a.stencil);
                                "depthStencil" in a && (f.depthStencil = a.depthStencil)
                            } else h = 1;
                            if (g)
                                if (Array.isArray(g))
                                    for (a = [], d = 0; d < g.length; ++d) a[d] = g[d];
                                else a = [g];
                            else
                                for (a = Array(m), g = {
                                        radius: h,
                                        format: d,
                                        type: l
                                    }, d = 0; d < m; ++d) a[d] = e.createCube(g);
                            f.color = Array(a.length);
                            for (d = 0; d < a.length; ++d) m = a[d], h = h || m.width, f.color[d] = {
                                target: 34069,
                                data: a[d]
                            };
                            for (d = 0; 6 > d; ++d) {
                                for (m = 0; m < a.length; ++m) f.color[m].target = 34069 + d;
                                0 < d && (f.depth = c[0].depth, f.stencil = c[0].stencil, f.depthStencil = c[0].depthStencil);
                                if (c[d]) c[d](f);
                                else c[d] = N(f)
                            }
                            return E(b, {
                                width: h,
                                height: h,
                                color: a
                            })
                        }
                        var c = Array(6);
                        b(a);
                        return E(b, {
                            faces: c,
                            resize: function(a) {
                                var d = a | 0;
                                if (d === b.width) return b;
                                var e = b.color;
                                for (a = 0; a < e.length; ++a) e[a].resize(d);
                                for (a = 0; 6 > a; ++a) c[a].resize(d);
                                b.width = b.height = d;
                                return b
                            },
                            _reglType: "framebufferCube",
                            destroy: function() {
                                c.forEach(function(a) {
                                    a.destroy()
                                })
                            }
                        })
                    },
                    clear: function() {
                        S(R).forEach(u)
                    },
                    restore: function() {
                        B.cur = null;
                        B.next = null;
                        B.dirty = !0;
                        S(R).forEach(function(b) {
                            b.framebuffer = a.createFramebuffer();
                            v(b)
                        })
                    }
                })
            }

            function ub() {
                this.w = this.z = this.y = this.x = this.state = 0;
                this.buffer = null;
                this.size = 0;
                this.normalized = !1;
                this.type = 5126;
                this.divisor = this.stride = this.offset = 0
            }

            function Pb(a, b, c, e) {
                a = c.maxAttributes;
                b = Array(a);
                for (c = 0; c < a; ++c) b[c] = new ub;
                return {
                    Record: ub,
                    scope: {},
                    state: b
                }
            }

            function Qb(a, b, c, e) {
                function g(a, b, c, d) {
                    this.name = a;
                    this.id = b;
                    this.location = c;
                    this.info = d
                }

                function d(a, b) {
                    for (var c = 0; c < a.length; ++c)
                        if (a[c].id === b.id) {
                            a[c].location = b.location;
                            return
                        } a.push(b)
                }

                function n(c, d, e) {
                    e = 35632 === c ? q : t;
                    var f = e[d];
                    if (!f) {
                        var g = b.str(d),
                            f = a.createShader(c);
                        a.shaderSource(f, g);
                        a.compileShader(f);
                        e[d] = f
                    }
                    return f
                }

                function f(a, b) {
                    this.id = k++;
                    this.fragId = a;
                    this.vertId = b;
                    this.program = null;
                    this.uniforms = [];
                    this.attributes = [];
                    e.profile && (this.stats = {
                        uniformsCount: 0,
                        attributesCount: 0
                    })
                }

                function r(c, f) {
                    var m, k;
                    m = n(35632, c.fragId);
                    k = n(35633, c.vertId);
                    var q = c.program = a.createProgram();
                    a.attachShader(q, m);
                    a.attachShader(q, k);
                    a.linkProgram(q);
                    var r = a.getProgramParameter(q, 35718);
                    e.profile && (c.stats.uniformsCount = r);
                    var t = c.uniforms;
                    for (m = 0; m < r; ++m)
                        if (k = a.getActiveUniform(q, m))
                            if (1 < k.size)
                                for (var C = 0; C < k.size; ++C) {
                                    var y = k.name.replace("[0]", "[" + C + "]");
                                    d(t, new g(y, b.id(y), a.getUniformLocation(q, y), k))
                                } else d(t, new g(k.name, b.id(k.name), a.getUniformLocation(q, k.name), k));
                    r = a.getProgramParameter(q, 35721);
                    e.profile && (c.stats.attributesCount = r);
                    t = c.attributes;
                    for (m = 0; m < r; ++m)(k = a.getActiveAttrib(q, m)) && d(t, new g(k.name, b.id(k.name), a.getAttribLocation(q, k.name), k))
                }
                var q = {},
                    t = {},
                    m = {},
                    C = [],
                    k = 0;
                e.profile && (c.getMaxUniformsCount = function() {
                    var a = 0;
                    C.forEach(function(b) {
                        b.stats.uniformsCount > a && (a = b.stats.uniformsCount)
                    });
                    return a
                }, c.getMaxAttributesCount = function() {
                    var a = 0;
                    C.forEach(function(b) {
                        b.stats.attributesCount > a && (a = b.stats.attributesCount)
                    });
                    return a
                });
                return {
                    clear: function() {
                        var b = a.deleteShader.bind(a);
                        S(q).forEach(b);
                        q = {};
                        S(t).forEach(b);
                        t = {};
                        C.forEach(function(b) {
                            a.deleteProgram(b.program)
                        });
                        C.length = 0;
                        m = {};
                        c.shaderCount = 0
                    },
                    program: function(a, b, d) {
                        var e = m[b];
                        e || (e = m[b] = {});
                        var g = e[a];
                        g || (g = new f(b, a), c.shaderCount++, r(g, d), e[a] = g, C.push(g));
                        return g
                    },
                    restore: function() {
                        q = {};
                        t = {};
                        for (var a = 0; a < C.length; ++a) r(C[a])
                    },
                    shader: n,
                    frag: -1,
                    vert: -1
                }
            }

            function Rb(a, b, c, e, g, d, n) {
                function f(d) {
                    var f;
                    f = null === b.next ? 5121 : b.next.colorAttachments[0].texture._texture.type;
                    var g = 0,
                        r = 0,
                        k = e.framebufferWidth,
                        h = e.framebufferHeight,
                        l = null;
                    M(d) ? l = d : d && (g = d.x | 0, r = d.y | 0, k = (d.width || e.framebufferWidth - g) | 0, h = (d.height || e.framebufferHeight - r) | 0, l = d.data || null);
                    c();
                    d = k * h * 4;
                    l || (5121 === f ? l = new Uint8Array(d) : 5126 === f && (l = l || new Float32Array(d)));
                    a.pixelStorei(3333, 4);
                    a.readPixels(g, r, k, h, 6408, f, l);
                    return l
                }

                function r(a) {
                    var c;
                    b.setFBO({
                        framebuffer: a.framebuffer
                    }, function() {
                        c = f(a)
                    });
                    return c
                }
                return function(a) {
                    return a && "framebuffer" in a ? r(a) : f(a)
                }
            }

            function Ba(a) {
                return Array.prototype.slice.call(a)
            }

            function Ca(a) {
                return Ba(a).join("")
            }

            function Sb() {
                function a() {
                    var a = [],
                        b = [];
                    return E(function() {
                        a.push.apply(a, Ba(arguments))
                    }, {
                        def: function() {
                            var d = "v" + c++;
                            b.push(d);
                            0 < arguments.length && (a.push(d, "="), a.push.apply(a, Ba(arguments)), a.push(";"));
                            return d
                        },
                        toString: function() {
                            return Ca([0 < b.length ? "var " + b + ";" : "", Ca(a)])
                        }
                    })
                }

                function b() {
                    function b(a, e) {
                        d(a, e, "=", c.def(a, e), ";")
                    }
                    var c = a(),
                        d = a(),
                        e = c.toString,
                        g = d.toString;
                    return E(function() {
                        c.apply(c, Ba(arguments))
                    }, {
                        def: c.def,
                        entry: c,
                        exit: d,
                        save: b,
                        set: function(a, d, e) {
                            b(a, d);
                            c(a, d, "=", e, ";")
                        },
                        toString: function() {
                            return e() + g()
                        }
                    })
                }
                var c = 0,
                    e = [],
                    g = [],
                    d = a(),
                    n = {};
                return {
                    global: d,
                    link: function(a) {
                        for (var b = 0; b < g.length; ++b)
                            if (g[b] === a) return e[b];
                        b = "g" + c++;
                        e.push(b);
                        g.push(a);
                        return b
                    },
                    block: a,
                    proc: function(a, c) {
                        function d() {
                            var a = "a" + e.length;
                            e.push(a);
                            return a
                        }
                        var e = [];
                        c = c || 0;
                        for (var g = 0; g < c; ++g) d();
                        var g = b(),
                            C = g.toString;
                        return n[a] = E(g, {
                            arg: d,
                            toString: function() {
                                return Ca(["function(", e.join(), "){", C(), "}"])
                            }
                        })
                    },
                    scope: b,
                    cond: function() {
                        var a = Ca(arguments),
                            c = b(),
                            d = b(),
                            e = c.toString,
                            g = d.toString;
                        return E(c, {
                            then: function() {
                                c.apply(c, Ba(arguments));
                                return this
                            },
                            else: function() {
                                d.apply(d, Ba(arguments));
                                return this
                            },
                            toString: function() {
                                var b = g();
                                b && (b = "else{" + b + "}");
                                return Ca(["if(", a, "){", e(), "}", b])
                            }
                        })
                    },
                    compile: function() {
                        var a = ['"use strict";', d, "return {"];
                        Object.keys(n).forEach(function(b) {
                            a.push('"', b, '":', n[b].toString(), ",")
                        });
                        a.push("}");
                        var b = Ca(a).replace(/;/g, ";\n").replace(/}/g, "}\n").replace(/{/g, "{\n");
                        return Function.apply(null, e.concat(b)).apply(null, g)
                    }
                }
            }

            function Oa(a) {
                return Array.isArray(a) || M(a) || ma(a)
            }

            function vb(a) {
                return a.sort(function(a, c) {
                    return "viewport" === a ? -1 : "viewport" === c ? 1 : a < c ? -1 : 1
                })
            }

            function Z(a, b, c, e) {
                this.thisDep = a;
                this.contextDep = b;
                this.propDep = c;
                this.append = e
            }

            function va(a) {
                return a && !(a.thisDep || a.contextDep || a.propDep)
            }

            function D(a) {
                return new Z(!1, !1, !1, a)
            }

            function P(a, b) {
                var c = a.type;
                return 0 === c ? (c = a.data.length, new Z(!0, 1 <= c, 2 <= c, b)) : 4 === c ? (c = a.data, new Z(c.thisDep, c.contextDep, c.propDep, b)) : new Z(3 === c, 2 === c, 1 === c, b)
            }

            function Tb(a, b, c, e, g, d, n, f, r, q, t, m, C, k, h) {
                function l(a) {
                    return a.replace(".", "_")
                }

                function u(a, b, c) {
                    var d = l(a);
                    Ka.push(a);
                    Fa[d] = ra[d] = !!c;
                    sa[d] = b
                }

                function v(a, b, c) {
                    var d = l(a);
                    Ka.push(a);
                    Array.isArray(c) ? (ra[d] = c.slice(), Fa[d] = c.slice()) : ra[d] = Fa[d] = c;
                    ta[d] = b
                }

                function N() {
                    var a = Sb(),
                        c = a.link,
                        d = a.global;
                    a.id = qa++;
                    a.batchId = "0";
                    var e = c(na),
                        f = a.shared = {
                            props: "a0"
                        };
                    Object.keys(na).forEach(function(a) {
                        f[a] = d.def(e, ".", a)
                    });
                    var g = a.next = {},
                        xa = a.current = {};
                    Object.keys(ta).forEach(function(a) {
                        Array.isArray(ra[a]) && (g[a] = d.def(f.next, ".", a), xa[a] = d.def(f.current, ".", a))
                    });
                    var H = a.constants = {};
                    Object.keys(aa).forEach(function(a) {
                        H[a] = d.def(JSON.stringify(aa[a]))
                    });
                    a.invoke = function(b, d) {
                        switch (d.type) {
                            case 0:
                                var e = ["this", f.context, f.props, a.batchId];
                                return b.def(c(d.data), ".call(", e.slice(0, Math.max(d.data.length + 1, 4)), ")");
                            case 1:
                                return b.def(f.props, d.data);
                            case 2:
                                return b.def(f.context, d.data);
                            case 3:
                                return b.def("this", d.data);
                            case 4:
                                return d.data.append(a, b), d.data.ref
                        }
                    };
                    a.attribCache = {};
                    var Y = {};
                    a.scopeAttrib = function(a) {
                        a = b.id(a);
                        if (a in Y) return Y[a];
                        var d = q.scope[a];
                        d || (d = q.scope[a] = new ya);
                        return Y[a] = c(d)
                    };
                    return a
                }

                function B(a) {
                    var b = a["static"];
                    a = a.dynamic;
                    var c;
                    if ("profile" in b) {
                        var d = !!b.profile;
                        c = D(function(a, b) {
                            return d
                        });
                        c.enable = d
                    } else if ("profile" in a) {
                        var e = a.profile;
                        c = P(e, function(a, b) {
                            return a.invoke(b, e)
                        })
                    }
                    return c
                }

                function y(a, b) {
                    var c = a["static"],
                        d = a.dynamic;
                    if ("framebuffer" in c) {
                        var e = c.framebuffer;
                        return e ? (e = f.getFramebuffer(e), D(function(a, b) {
                            var c = a.link(e),
                                d = a.shared;
                            b.set(d.framebuffer, ".next", c);
                            d = d.context;
                            b.set(d, ".framebufferWidth", c + ".width");
                            b.set(d, ".framebufferHeight", c + ".height");
                            return c
                        })) : D(function(a, b) {
                            var c = a.shared;
                            b.set(c.framebuffer, ".next", "null");
                            c = c.context;
                            b.set(c, ".framebufferWidth", c + ".drawingBufferWidth");
                            b.set(c, ".framebufferHeight", c + ".drawingBufferHeight");
                            return "null"
                        })
                    }
                    if ("framebuffer" in d) {
                        var g = d.framebuffer;
                        return P(g, function(a, b) {
                            var c = a.invoke(b, g),
                                d = a.shared,
                                e = d.framebuffer,
                                c = b.def(e, ".getFramebuffer(", c, ")");
                            b.set(e, ".next", c);
                            d = d.context;
                            b.set(d, ".framebufferWidth", c + "?" + c + ".width:" + d + ".drawingBufferWidth");
                            b.set(d, ".framebufferHeight", c + "?" + c + ".height:" + d + ".drawingBufferHeight");
                            return c
                        })
                    }
                    return null
                }

                function x(a, b, c) {
                    function d(a) {
                        if (a in e) {
                            var c = e[a];
                            a = !0;
                            var p = c.x | 0,
                                ba = c.y | 0,
                                g, h;
                            "width" in c ? g = c.width | 0 : a = !1;
                            "height" in c ? h = c.height | 0 : a = !1;
                            return new Z(!a && b && b.thisDep, !a && b && b.contextDep, !a && b && b.propDep, function(a, b) {
                                var d = a.shared.context,
                                    e = g;
                                "width" in c || (e = b.def(d, ".", "framebufferWidth", "-", p));
                                var f = h;
                                "height" in c || (f = b.def(d, ".", "framebufferHeight", "-", ba));
                                return [p, ba, e, f]
                            })
                        }
                        if (a in f) {
                            var z = f[a];
                            a = P(z, function(a, b) {
                                var c = a.invoke(b, z),
                                    d = a.shared.context,
                                    e = b.def(c, ".x|0"),
                                    p = b.def(c, ".y|0"),
                                    Y = b.def('"width" in ', c, "?", c, ".width|0:", "(", d, ".", "framebufferWidth", "-", e, ")"),
                                    c = b.def('"height" in ', c, "?", c, ".height|0:", "(", d, ".", "framebufferHeight", "-", p, ")");
                                return [e, p, Y, c]
                            });
                            b && (a.thisDep = a.thisDep || b.thisDep, a.contextDep = a.contextDep || b.contextDep, a.propDep = a.propDep || b.propDep);
                            return a
                        }
                        return b ? new Z(b.thisDep, b.contextDep, b.propDep, function(a, b) {
                            var c = a.shared.context;
                            return [0, 0, b.def(c, ".", "framebufferWidth"), b.def(c, ".", "framebufferHeight")]
                        }) : null
                    }
                    var e = a["static"],
                        f = a.dynamic;
                    if (a = d("viewport")) {
                        var g = a;
                        a = new Z(a.thisDep, a.contextDep, a.propDep, function(a, b) {
                            var c = g.append(a, b),
                                d = a.shared.context;
                            b.set(d, ".viewportWidth", c[2]);
                            b.set(d, ".viewportHeight", c[3]);
                            return c
                        })
                    }
                    return {
                        viewport: a,
                        scissor_box: d("scissor.box")
                    }
                }

                function E(a) {
                    function c(a) {
                        if (a in d) {
                            var p = b.id(d[a]);
                            a = D(function() {
                                return p
                            });
                            a.id = p;
                            return a
                        }
                        if (a in e) {
                            var f = e[a];
                            return P(f, function(a, b) {
                                var c = a.invoke(b, f);
                                return b.def(a.shared.strings, ".id(", c, ")")
                            })
                        }
                        return null
                    }
                    var d = a["static"],
                        e = a.dynamic,
                        f = c("frag"),
                        g = c("vert"),
                        h = null;
                    va(f) && va(g) ? (h = t.program(g.id, f.id), a = D(function(a, b) {
                        return a.link(h)
                    })) : a = new Z(f && f.thisDep || g && g.thisDep, f && f.contextDep || g && g.contextDep, f && f.propDep || g && g.propDep, function(a, b) {
                        var c = a.shared.shader,
                            d;
                        d = f ? f.append(a, b) : b.def(c, ".", "frag");
                        var e;
                        e = g ? g.append(a, b) : b.def(c, ".", "vert");
                        return b.def(c + ".program(" + e + "," + d + ")")
                    });
                    return {
                        frag: f,
                        vert: g,
                        progVar: a,
                        program: h
                    }
                }

                function O(a, b) {
                    function c(a, b) {
                        if (a in e) {
                            var d = e[a] | 0;
                            return D(function(a, c) {
                                b && (a.OFFSET = d);
                                return d
                            })
                        }
                        if (a in f) {
                            var p = f[a];
                            return P(p, function(a, c) {
                                var d = a.invoke(c, p);
                                b && (a.OFFSET = d);
                                return d
                            })
                        }
                        return b && g ? D(function(a, b) {
                            a.OFFSET = "0";
                            return 0
                        }) : null
                    }
                    var e = a["static"],
                        f = a.dynamic,
                        g = function() {
                            if ("elements" in e) {
                                var a = e.elements;
                                Oa(a) ? a = d.getElements(d.create(a, !0)) : a && (a = d.getElements(a));
                                var b = D(function(b, c) {
                                    if (a) {
                                        var d = b.link(a);
                                        return b.ELEMENTS = d
                                    }
                                    return b.ELEMENTS = null
                                });
                                b.value = a;
                                return b
                            }
                            if ("elements" in f) {
                                var c = f.elements;
                                return P(c, function(a, b) {
                                    var d = a.shared,
                                        e = d.isBufferArgs,
                                        d = d.elements,
                                        p = a.invoke(b, c),
                                        f = b.def("null"),
                                        e = b.def(e, "(", p, ")"),
                                        p = a.cond(e).then(f, "=", d, ".createStream(", p, ");")["else"](f, "=", d, ".getElements(", p, ");");
                                    b.entry(p);
                                    b.exit(a.cond(e).then(d, ".destroyStream(", f, ");"));
                                    return a.ELEMENTS = f
                                })
                            }
                            return null
                        }(),
                        h = c("offset", !0);
                    return {
                        elements: g,
                        primitive: function() {
                            if ("primitive" in e) {
                                var a = e.primitive;
                                return D(function(b, c) {
                                    return Sa[a]
                                })
                            }
                            if ("primitive" in f) {
                                var b = f.primitive;
                                return P(b, function(a, c) {
                                    var d = a.constants.primTypes,
                                        e = a.invoke(c, b);
                                    return c.def(d, "[", e, "]")
                                })
                            }
                            return g ? va(g) ? g.value ? D(function(a, b) {
                                return b.def(a.ELEMENTS, ".primType")
                            }) : D(function() {
                                return 4
                            }) : new Z(g.thisDep, g.contextDep, g.propDep, function(a, b) {
                                var c = a.ELEMENTS;
                                return b.def(c, "?", c, ".primType:", 4)
                            }) : null
                        }(),
                        count: function() {
                            if ("count" in e) {
                                var a = e.count | 0;
                                return D(function() {
                                    return a
                                })
                            }
                            if ("count" in f) {
                                var b = f.count;
                                return P(b, function(a, c) {
                                    return a.invoke(c, b)
                                })
                            }
                            return g ? va(g) ? g ? h ? new Z(h.thisDep, h.contextDep, h.propDep, function(a, b) {
                                return b.def(a.ELEMENTS, ".vertCount-", a.OFFSET)
                            }) : D(function(a, b) {
                                return b.def(a.ELEMENTS, ".vertCount")
                            }) : D(function() {
                                return -1
                            }) : new Z(g.thisDep || h.thisDep, g.contextDep || h.contextDep, g.propDep || h.propDep, function(a, b) {
                                var c = a.ELEMENTS;
                                return a.OFFSET ? b.def(c, "?", c, ".vertCount-", a.OFFSET, ":-1") : b.def(c, "?", c, ".vertCount:-1")
                            }) : null
                        }(),
                        instances: c("instances", !1),
                        offset: h
                    }
                }

                function R(a, b) {
                    var c = a["static"],
                        d = a.dynamic,
                        e = {};
                    Ka.forEach(function(a) {
                        function b(f, g) {
                            if (a in c) {
                                var w = f(c[a]);
                                e[p] = D(function() {
                                    return w
                                })
                            } else if (a in d) {
                                var h = d[a];
                                e[p] = P(h, function(a, b) {
                                    return g(a, b, a.invoke(b, h))
                                })
                            }
                        }
                        var p = l(a);
                        switch (a) {
                            case "cull.enable":
                            case "blend.enable":
                            case "dither":
                            case "stencil.enable":
                            case "depth.enable":
                            case "scissor.enable":
                            case "polygonOffset.enable":
                            case "sample.alpha":
                            case "sample.enable":
                            case "depth.mask":
                                return b(function(a) {
                                    return a
                                }, function(a, b, c) {
                                    return c
                                });
                            case "depth.func":
                                return b(function(a) {
                                    return Xa[a]
                                }, function(a, b, c) {
                                    return b.def(a.constants.compareFuncs, "[", c, "]")
                                });
                            case "depth.range":
                                return b(function(a) {
                                    return a
                                }, function(a, b, c) {
                                    a = b.def("+", c, "[0]");
                                    b = b.def("+", c, "[1]");
                                    return [a, b]
                                });
                            case "blend.func":
                                return b(function(a) {
                                    return [Ga["srcRGB" in a ? a.srcRGB : a.src], Ga["dstRGB" in a ? a.dstRGB : a.dst], Ga["srcAlpha" in a ? a.srcAlpha : a.src], Ga["dstAlpha" in a ? a.dstAlpha : a.dst]]
                                }, function(a, b, c) {
                                    function d(a, e) {
                                        return b.def('"', a, e, '" in ', c, "?", c, ".", a, e, ":", c, ".", a)
                                    }
                                    a = a.constants.blendFuncs;
                                    var e = d("src", "RGB"),
                                        p = d("dst", "RGB"),
                                        e = b.def(a, "[", e, "]"),
                                        f = b.def(a, "[", d("src", "Alpha"), "]"),
                                        p = b.def(a, "[", p, "]");
                                    a = b.def(a, "[", d("dst", "Alpha"), "]");
                                    return [e, p, f, a]
                                });
                            case "blend.equation":
                                return b(function(a) {
                                    if ("string" === typeof a) return [X[a], X[a]];
                                    if ("object" === typeof a) return [X[a.rgb], X[a.alpha]]
                                }, function(a, b, c) {
                                    var d = a.constants.blendEquations,
                                        e = b.def(),
                                        p = b.def();
                                    a = a.cond("typeof ", c, '==="string"');
                                    a.then(e, "=", p, "=", d, "[", c, "];");
                                    a["else"](e, "=", d, "[", c, ".rgb];", p, "=", d, "[", c, ".alpha];");
                                    b(a);
                                    return [e, p]
                                });
                            case "blend.color":
                                return b(function(a) {
                                    return J(4, function(b) {
                                        return +a[b]
                                    })
                                }, function(a, b, c) {
                                    return J(4, function(a) {
                                        return b.def("+", c, "[", a, "]")
                                    })
                                });
                            case "stencil.mask":
                                return b(function(a) {
                                    return a | 0
                                }, function(a, b, c) {
                                    return b.def(c, "|0")
                                });
                            case "stencil.func":
                                return b(function(a) {
                                    return [Xa[a.cmp || "keep"], a.ref || 0, "mask" in a ? a.mask : -1]
                                }, function(a, b, c) {
                                    a = b.def('"cmp" in ', c, "?", a.constants.compareFuncs, "[", c, ".cmp]", ":", 7680);
                                    var d = b.def(c, ".ref|0");
                                    b = b.def('"mask" in ', c, "?", c, ".mask|0:-1");
                                    return [a, d, b]
                                });
                            case "stencil.opFront":
                            case "stencil.opBack":
                                return b(function(b) {
                                    return ["stencil.opBack" === a ? 1029 : 1028, Pa[b.fail || "keep"], Pa[b.zfail || "keep"], Pa[b.zpass || "keep"]]
                                }, function(b, c, d) {
                                    function e(a) {
                                        return c.def('"', a, '" in ', d, "?", p, "[", d, ".", a, "]:", 7680)
                                    }
                                    var p = b.constants.stencilOps;
                                    return ["stencil.opBack" === a ? 1029 : 1028, e("fail"), e("zfail"), e("zpass")]
                                });
                            case "polygonOffset.offset":
                                return b(function(a) {
                                    return [a.factor | 0, a.units | 0]
                                }, function(a, b, c) {
                                    a = b.def(c, ".factor|0");
                                    b = b.def(c, ".units|0");
                                    return [a, b]
                                });
                            case "cull.face":
                                return b(function(a) {
                                    var b = 0;
                                    "front" === a ? b = 1028 : "back" === a && (b = 1029);
                                    return b
                                }, function(a, b, c) {
                                    return b.def(c, '==="front"?', 1028, ":", 1029)
                                });
                            case "lineWidth":
                                return b(function(a) {
                                    return a
                                }, function(a, b, c) {
                                    return c
                                });
                            case "frontFace":
                                return b(function(a) {
                                    return wb[a]
                                }, function(a, b, c) {
                                    return b.def(c + '==="cw"?2304:2305')
                                });
                            case "colorMask":
                                return b(function(a) {
                                    return a.map(function(a) {
                                        return !!a
                                    })
                                }, function(a, b, c) {
                                    return J(4, function(a) {
                                        return "!!" + c + "[" + a + "]"
                                    })
                                });
                            case "sample.coverage":
                                return b(function(a) {
                                    return ["value" in a ? a.value : 1, !!a.invert]
                                }, function(a, b, c) {
                                    a = b.def('"value" in ', c, "?+", c, ".value:1");
                                    b = b.def("!!", c, ".invert");
                                    return [a, b]
                                })
                        }
                    });
                    return e
                }

                function F(a, b) {
                    var c = a["static"],
                        d = a.dynamic,
                        e = {};
                    Object.keys(c).forEach(function(a) {
                        var b = c[a],
                            d;
                        if ("number" === typeof b || "boolean" === typeof b) d = D(function() {
                            return b
                        });
                        else if ("function" === typeof b) {
                            var p = b._reglType;
                            if ("texture2d" === p || "textureCube" === p) d = D(function(a) {
                                return a.link(b)
                            });
                            else if ("framebuffer" === p || "framebufferCube" === p) d = D(function(a) {
                                return a.link(b.color[0])
                            })
                        } else pa(b) && (d = D(function(a) {
                            return a.global.def("[", J(b.length, function(a) {
                                return b[a]
                            }), "]")
                        }));
                        d.value = b;
                        e[a] = d
                    });
                    Object.keys(d).forEach(function(a) {
                        var b = d[a];
                        e[a] = P(b, function(a, c) {
                            return a.invoke(c, b)
                        })
                    });
                    return e
                }

                function T(a, c) {
                    var d = a["static"],
                        e = a.dynamic,
                        f = {};
                    Object.keys(d).forEach(function(a) {
                        var c = d[a],
                            e = b.id(a),
                            p = new ya;
                        if (Oa(c)) p.state = 1, p.buffer = g.getBuffer(g.create(c, 34962, !1, !0)), p.type = 0;
                        else {
                            var w = g.getBuffer(c);
                            if (w) p.state = 1, p.buffer = w, p.type = 0;
                            else if ("constant" in c) {
                                var h = c.constant;
                                p.buffer = "null";
                                p.state = 2;
                                "number" === typeof h ? p.x = h : Da.forEach(function(a, b) {
                                    b < h.length && (p[a] = h[b])
                                })
                            } else {
                                var w = Oa(c.buffer) ? g.getBuffer(g.create(c.buffer, 34962, !1, !0)) : g.getBuffer(c.buffer),
                                    k = c.offset | 0,
                                    m = c.stride | 0,
                                    I = c.size | 0,
                                    l = !!c.normalized,
                                    n = 0;
                                "type" in c && (n = Ra[c.type]);
                                c = c.divisor | 0;
                                p.buffer = w;
                                p.state = 1;
                                p.size = I;
                                p.normalized = l;
                                p.type = n || w.dtype;
                                p.offset = k;
                                p.stride = m;
                                p.divisor = c
                            }
                        }
                        f[a] = D(function(a, b) {
                            var c = a.attribCache;
                            if (e in c) return c[e];
                            var d = {
                                isStream: !1
                            };
                            Object.keys(p).forEach(function(a) {
                                d[a] = p[a]
                            });
                            p.buffer && (d.buffer = a.link(p.buffer), d.type = d.type || d.buffer + ".dtype");
                            return c[e] = d
                        })
                    });
                    Object.keys(e).forEach(function(a) {
                        var b = e[a];
                        f[a] = P(b, function(a, c) {
                            function d(a) {
                                c(w[a], "=", e, ".", a, "|0;")
                            }
                            var e = a.invoke(c, b),
                                p = a.shared,
                                f = p.isBufferArgs,
                                g = p.buffer,
                                w = {
                                    isStream: c.def(!1)
                                },
                                h = new ya;
                            h.state = 1;
                            Object.keys(h).forEach(function(a) {
                                w[a] = c.def("" + h[a])
                            });
                            var z = w.buffer,
                                k = w.type;
                            c("if(", f, "(", e, ")){", w.isStream, "=true;", z, "=", g, ".createStream(", 34962, ",", e, ");", k, "=", z, ".dtype;", "}else{", z, "=", g, ".getBuffer(", e, ");", "if(", z, "){", k, "=", z, ".dtype;", '}else if("constant" in ', e, "){", w.state, "=", 2, ";", "if(typeof " + e + '.constant === "number"){', w[Da[0]], "=", e, ".constant;", Da.slice(1).map(function(a) {
                                return w[a]
                            }).join("="), "=0;", "}else{", Da.map(function(a, b) {
                                return w[a] + "=" + e + ".constant.length>" + b + "?" + e + ".constant[" + b + "]:0;"
                            }).join(""), "}}else{", "if(", f, "(", e, ".buffer)){", z, "=", g, ".createStream(", 34962, ",", e, ".buffer);", "}else{", z, "=", g, ".getBuffer(", e, ".buffer);", "}", k, '="type" in ', e, "?", p.glTypes, "[", e, ".type]:", z, ".dtype;", w.normalized, "=!!", e, ".normalized;");
                            d("size");
                            d("offset");
                            d("stride");
                            d("divisor");
                            c("}}");
                            c.exit("if(", w.isStream, "){", g, ".destroyStream(", z, ");", "}");
                            return w
                        })
                    });
                    return f
                }

                function M(a) {
                    var b = a["static"],
                        c = a.dynamic,
                        d = {};
                    Object.keys(b).forEach(function(a) {
                        var c = b[a];
                        d[a] = D(function(a, b) {
                            return "number" === typeof c || "boolean" === typeof c ? "" + c : a.link(c)
                        })
                    });
                    Object.keys(c).forEach(function(a) {
                        var b = c[a];
                        d[a] = P(b, function(a, c) {
                            return a.invoke(c, b)
                        })
                    });
                    return d
                }

                function A(a, b, c, d, e) {
                    var f = y(a, e),
                        g = x(a, f, e),
                        h = O(a, e),
                        k = R(a, e),
                        m = E(a, e),
                        ba = g.viewport;
                    ba && (k.viewport = ba);
                    ba = l("scissor.box");
                    (g = g[ba]) && (k[ba] = g);
                    g = 0 < Object.keys(k).length;
                    f = {
                        framebuffer: f,
                        draw: h,
                        shader: m,
                        state: k,
                        dirty: g
                    };
                    f.profile = B(a, e);
                    f.uniforms = F(c, e);
                    f.attributes = T(b, e);
                    f.context = M(d, e);
                    return f
                }

                function ua(a, b, c) {
                    var d = a.shared.context,
                        e = a.scope();
                    Object.keys(c).forEach(function(f) {
                        b.save(d, "." + f);
                        e(d, ".", f, "=", c[f].append(a, b), ";")
                    });
                    b(e)
                }

                function K(a, b, c, d) {
                    var e = a.shared,
                        f = e.gl,
                        g = e.framebuffer,
                        h;
                    ha && (h = b.def(e.extensions, ".webgl_draw_buffers"));
                    var k = a.constants,
                        e = k.drawBuffer,
                        k = k.backBuffer;
                    a = c ? c.append(a, b) : b.def(g, ".next");
                    d || b("if(", a, "!==", g, ".cur){");
                    b("if(", a, "){", f, ".bindFramebuffer(", 36160, ",", a, ".framebuffer);");
                    ha && b(h, ".drawBuffersWEBGL(", e, "[", a, ".colorAttachments.length]);");
                    b("}else{", f, ".bindFramebuffer(", 36160, ",null);");
                    ha && b(h, ".drawBuffersWEBGL(", k, ");");
                    b("}", g, ".cur=", a, ";");
                    d || b("}")
                }

                function V(a, b, c) {
                    var d = a.shared,
                        e = d.gl,
                        f = a.current,
                        g = a.next,
                        h = d.current,
                        k = d.next,
                        m = a.cond(h, ".dirty");
                    Ka.forEach(function(b) {
                        b = l(b);
                        if (!(b in c.state)) {
                            var d, w;
                            if (b in g) {
                                d = g[b];
                                w = f[b];
                                var I = J(ra[b].length, function(a) {
                                    return m.def(d, "[", a, "]")
                                });
                                m(a.cond(I.map(function(a, b) {
                                    return a + "!==" + w + "[" + b + "]"
                                }).join("||")).then(e, ".", ta[b], "(", I, ");", I.map(function(a, b) {
                                    return w + "[" + b + "]=" + a
                                }).join(";"), ";"))
                            } else d = m.def(k, ".", b), I = a.cond(d, "!==", h, ".", b), m(I), b in sa ? I(a.cond(d).then(e, ".enable(", sa[b], ");")["else"](e, ".disable(", sa[b], ");"), h, ".", b, "=", d, ";") : I(e, ".", ta[b], "(", d, ");", h, ".", b, "=", d, ";")
                        }
                    });
                    0 === Object.keys(c.state).length && m(h, ".dirty=false;");
                    b(m)
                }

                function Q(a, b, c, d) {
                    var e = a.shared,
                        f = a.current,
                        g = e.current,
                        h = e.gl;
                    vb(Object.keys(c)).forEach(function(e) {
                        var k = c[e];
                        if (!d || d(k)) {
                            var m = k.append(a, b);
                            if (sa[e]) {
                                var l = sa[e];
                                va(k) ? m ? b(h, ".enable(", l, ");") : b(h, ".disable(", l, ");") : b(a.cond(m).then(h, ".enable(", l, ");")["else"](h, ".disable(", l, ");"));
                                b(g, ".", e, "=", m, ";")
                            } else if (pa(m)) {
                                var n = f[e];
                                b(h, ".", ta[e], "(", m, ");", m.map(function(a, b) {
                                    return n + "[" + b + "]=" + a
                                }).join(";"), ";")
                            } else b(h, ".", ta[e], "(", m, ");", g, ".", e, "=", m, ";")
                        }
                    })
                }

                function wa(a, b) {
                    ea && (a.instancing = b.def(a.shared.extensions, ".angle_instanced_arrays"))
                }

                function G(a, b, c, d, e) {
                    function f() {
                        return "undefined" === typeof performance ? "Date.now()" : "performance.now()"
                    }

                    function g(a) {
                        t = b.def();
                        a(t, "=", f(), ";");
                        "string" === typeof e ? a(ba, ".count+=", e, ";") : a(ba, ".count++;");
                        k && (d ? (r = b.def(), a(r, "=", q, ".getNumPendingQueries();")) : a(q, ".beginQuery(", ba, ");"))
                    }

                    function h(a) {
                        a(ba, ".cpuTime+=", f(), "-", t, ";");
                        k && (d ? a(q, ".pushScopeStats(", r, ",", q, ".getNumPendingQueries(),", ba, ");") : a(q, ".endQuery();"))
                    }

                    function m(a) {
                        var c = b.def(n, ".profile");
                        b(n, ".profile=", a, ";");
                        b.exit(n, ".profile=", c, ";")
                    }
                    var l = a.shared,
                        ba = a.stats,
                        n = l.current,
                        q = l.timer;
                    c = c.profile;
                    var t, r;
                    if (c) {
                        if (va(c)) {
                            c.enable ? (g(b), h(b.exit), m("true")) : m("false");
                            return
                        }
                        c = c.append(a, b);
                        m(c)
                    } else c = b.def(n, ".profile");
                    l = a.block();
                    g(l);
                    b("if(", c, "){", l, "}");
                    a = a.block();
                    h(a);
                    b.exit("if(", c, "){", a, "}")
                }

                function U(a, b, c, d, e) {
                    function f(a) {
                        switch (a) {
                            case 35664:
                            case 35667:
                            case 35671:
                                return 2;
                            case 35665:
                            case 35668:
                            case 35672:
                                return 3;
                            case 35666:
                            case 35669:
                            case 35673:
                                return 4;
                            default:
                                return 1
                        }
                    }

                    function g(c, d, e) {
                        function f() {
                            b("if(!", z, ".buffer){", k, ".enableVertexAttribArray(", l, ");}");
                            var c = e.type,
                                g;
                            g = e.size ? b.def(e.size, "||", d) : d;
                            b("if(", z, ".type!==", c, "||", z, ".size!==", g, "||", q.map(function(a) {
                                return z + "." + a + "!==" + e[a]
                            }).join("||"), "){", k, ".bindBuffer(", 34962, ",", I, ".buffer);", k, ".vertexAttribPointer(", [l, g, c, e.normalized, e.stride, e.offset], ");", z, ".type=", c, ";", z, ".size=", g, ";", q.map(function(a) {
                                return z + "." + a + "=" + e[a] + ";"
                            }).join(""), "}");
                            ea && (c = e.divisor, b("if(", z, ".divisor!==", c, "){", a.instancing, ".vertexAttribDivisorANGLE(", [l, c], ");", z, ".divisor=", c, ";}"))
                        }

                        function m() {
                            b("if(", z, ".buffer){", k, ".disableVertexAttribArray(", l, ");", "}if(", Da.map(function(a, b) {
                                return z + "." + a + "!==" + n[b]
                            }).join("||"), "){", k, ".vertexAttrib4f(", l, ",", n, ");", Da.map(function(a, b) {
                                return z + "." + a + "=" + n[b] + ";"
                            }).join(""), "}")
                        }
                        var k = h.gl,
                            l = b.def(c, ".location"),
                            z = b.def(h.attributes, "[", l, "]");
                        c = e.state;
                        var I = e.buffer,
                            n = [e.x, e.y, e.z, e.w],
                            q = ["buffer", "normalized", "offset", "stride"];
                        1 === c ? f() : 2 === c ? m() : (b("if(", c, "===", 1, "){"), f(), b("}else{"), m(), b("}"))
                    }
                    var h = a.shared;
                    d.forEach(function(d) {
                        var h = d.name,
                            k = c.attributes[h],
                            m;
                        if (k) {
                            if (!e(k)) return;
                            m = k.append(a, b)
                        } else {
                            if (!e(xb)) return;
                            var l = a.scopeAttrib(h);
                            m = {};
                            Object.keys(new ya).forEach(function(a) {
                                m[a] = b.def(l, ".", a)
                            })
                        }
                        g(a.link(d), f(d.info.type), m)
                    })
                }

                function W(a, c, d, e, f) {
                    for (var g = a.shared, h = g.gl, k, m = 0; m < e.length; ++m) {
                        var l = e[m],
                            n = l.name,
                            q = l.info.type,
                            t = d.uniforms[n],
                            l = a.link(l) + ".location",
                            r;
                        if (t) {
                            if (!f(t)) continue;
                            if (va(t)) {
                                n = t.value;
                                if (35678 === q || 35680 === q) q = a.link(n._texture || n.color[0]._texture), c(h, ".uniform1i(", l, ",", q + ".bind());"), c.exit(q, ".unbind();");
                                else if (35674 === q || 35675 === q || 35676 === q) n = a.global.def("new Float32Array([" + Array.prototype.slice.call(n) + "])"), t = 2, 35675 === q ? t = 3 : 35676 === q && (t = 4), c(h, ".uniformMatrix", t, "fv(", l, ",false,", n, ");");
                                else {
                                    switch (q) {
                                        case 5126:
                                            k = "1f";
                                            break;
                                        case 35664:
                                            k = "2f";
                                            break;
                                        case 35665:
                                            k = "3f";
                                            break;
                                        case 35666:
                                            k = "4f";
                                            break;
                                        case 35670:
                                            k = "1i";
                                            break;
                                        case 5124:
                                            k = "1i";
                                            break;
                                        case 35671:
                                            k = "2i";
                                            break;
                                        case 35667:
                                            k = "2i";
                                            break;
                                        case 35672:
                                            k = "3i";
                                            break;
                                        case 35668:
                                            k = "3i";
                                            break;
                                        case 35673:
                                            k = "4i";
                                            break;
                                        case 35669:
                                            k = "4i"
                                    }
                                    c(h, ".uniform", k, "(", l, ",", pa(n) ? Array.prototype.slice.call(n) : n, ");")
                                }
                                continue
                            } else r = t.append(a, c)
                        } else {
                            if (!f(xb)) continue;
                            r = c.def(g.uniforms, "[", b.id(n), "]")
                        }
                        35678 === q ? c("if(", r, "&&", r, '._reglType==="framebuffer"){', r, "=", r, ".color[0];", "}") : 35680 === q && c("if(", r, "&&", r, '._reglType==="framebufferCube"){', r, "=", r, ".color[0];", "}");
                        n = 1;
                        switch (q) {
                            case 35678:
                            case 35680:
                                q = c.def(r, "._texture");
                                c(h, ".uniform1i(", l, ",", q, ".bind());");
                                c.exit(q, ".unbind();");
                                continue;
                            case 5124:
                            case 35670:
                                k = "1i";
                                break;
                            case 35667:
                            case 35671:
                                k = "2i";
                                n = 2;
                                break;
                            case 35668:
                            case 35672:
                                k = "3i";
                                n = 3;
                                break;
                            case 35669:
                            case 35673:
                                k = "4i";
                                n = 4;
                                break;
                            case 5126:
                                k = "1f";
                                break;
                            case 35664:
                                k = "2f";
                                n = 2;
                                break;
                            case 35665:
                                k = "3f";
                                n = 3;
                                break;
                            case 35666:
                                k = "4f";
                                n = 4;
                                break;
                            case 35674:
                                k = "Matrix2fv";
                                break;
                            case 35675:
                                k = "Matrix3fv";
                                break;
                            case 35676:
                                k = "Matrix4fv"
                        }
                        c(h, ".uniform", k, "(", l, ",");
                        if ("M" === k.charAt(0)) {
                            var l = Math.pow(q - 35674 + 2, 2),
                                v = a.global.def("new Float32Array(", l, ")");
                            c("false,(Array.isArray(", r, ")||", r, " instanceof Float32Array)?", r, ":(", J(l, function(a) {
                                return v + "[" + a + "]=" + r + "[" + a + "]"
                            }), ",", v, ")")
                        } else 1 < n ? c(J(n, function(a) {
                            return r + "[" + a + "]"
                        })) : c(r);
                        c(");")
                    }
                }

                function S(a, b, c, d) {
                    function e(f) {
                        var g = l[f];
                        return g ? g.contextDep && d.contextDynamic || g.propDep ? g.append(a, c) : g.append(a, b) : b.def(m, ".", f)
                    }

                    function f() {
                        function a() {
                            c(u, ".drawElementsInstancedANGLE(", [q, t, C, r + "<<((" + C + "-5121)>>1)", v], ");")
                        }

                        function b() {
                            c(u, ".drawArraysInstancedANGLE(", [q, r, t, v], ");")
                        }
                        n ? da ? a() : (c("if(", n, "){"), a(), c("}else{"), b(), c("}")) : b()
                    }

                    function g() {
                        function a() {
                            c(k + ".drawElements(" + [q, t, C, r + "<<((" + C + "-5121)>>1)"] + ");")
                        }

                        function b() {
                            c(k + ".drawArrays(" + [q, r, t] + ");")
                        }
                        n ? da ? a() : (c("if(", n, "){"), a(), c("}else{"), b(), c("}")) : b()
                    }
                    var h = a.shared,
                        k = h.gl,
                        m = h.draw,
                        l = d.draw,
                        n = function() {
                            var e = l.elements,
                                f = b;
                            if (e) {
                                if (e.contextDep && d.contextDynamic || e.propDep) f = c;
                                e = e.append(a, f)
                            } else e = f.def(m, ".", "elements");
                            e && f("if(" + e + ")" + k + ".bindBuffer(34963," + e + ".buffer.buffer);");
                            return e
                        }(),
                        q = e("primitive"),
                        r = e("offset"),
                        t = function() {
                            var e = l.count,
                                f = b;
                            if (e) {
                                if (e.contextDep && d.contextDynamic || e.propDep) f = c;
                                e = e.append(a, f)
                            } else e = f.def(m, ".", "count");
                            return e
                        }();
                    if ("number" === typeof t) {
                        if (0 === t) return
                    } else c("if(", t, "){"), c.exit("}");
                    var v, u;
                    ea && (v = e("instances"), u = a.instancing);
                    var C = n + ".type",
                        da = l.elements && va(l.elements);
                    ea && ("number" !== typeof v || 0 <= v) ? "string" === typeof v ? (c("if(", v, ">0){"), f(), c("}else if(", v, "<0){"), g(), c("}")) : f() : g()
                }

                function ca(a, b, c, d, e) {
                    b = N();
                    e = b.proc("body", e);
                    ea && (b.instancing = e.def(b.shared.extensions, ".angle_instanced_arrays"));
                    a(b, e, c, d);
                    return b.compile().body
                }

                function L(a, b, c, d) {
                    wa(a, b);
                    U(a, b, c, d.attributes, function() {
                        return !0
                    });
                    W(a, b, c, d.uniforms, function() {
                        return !0
                    });
                    S(a, b, b, c)
                }

                function da(a, b) {
                    var c = a.proc("draw", 1);
                    wa(a, c);
                    ua(a, c, b.context);
                    K(a, c, b.framebuffer);
                    V(a, c, b);
                    Q(a, c, b.state);
                    G(a, c, b, !1, !0);
                    var d = b.shader.progVar.append(a, c);
                    c(a.shared.gl, ".useProgram(", d, ".program);");
                    if (b.shader.program) L(a, c, b, b.shader.program);
                    else {
                        var e = a.global.def("{}"),
                            f = c.def(d, ".id"),
                            g = c.def(e, "[", f, "]");
                        c(a.cond(g).then(g, ".call(this,a0);")["else"](g, "=", e, "[", f, "]=", a.link(function(c) {
                            return ca(L, a, b, c, 1)
                        }), "(", d, ");", g, ".call(this,a0);"))
                    }
                    0 < Object.keys(b.state).length && c(a.shared.current, ".dirty=true;")
                }

                function oa(a, b, c, d) {
                    function e() {
                        return !0
                    }
                    a.batchId = "a1";
                    wa(a, b);
                    U(a, b, c, d.attributes, e);
                    W(a, b, c, d.uniforms, e);
                    S(a, b, b, c)
                }

                function za(a, b, c, d) {
                    function e(a) {
                        return a.contextDep && g || a.propDep
                    }

                    function f(a) {
                        return !e(a)
                    }
                    wa(a, b);
                    var g = c.contextDep,
                        h = b.def(),
                        k = b.def();
                    a.shared.props = k;
                    a.batchId = h;
                    var m = a.scope(),
                        l = a.scope();
                    b(m.entry, "for(", h, "=0;", h, "<", "a1", ";++", h, "){", k, "=", "a0", "[", h, "];", l, "}", m.exit);
                    c.needsContext && ua(a, l, c.context);
                    c.needsFramebuffer && K(a, l, c.framebuffer);
                    Q(a, l, c.state, e);
                    c.profile && e(c.profile) && G(a, l, c, !1, !0);
                    d ? (U(a, m, c, d.attributes, f), U(a, l, c, d.attributes, e), W(a, m, c, d.uniforms, f), W(a, l, c, d.uniforms, e), S(a, m, l, c)) : (b = a.global.def("{}"), d = c.shader.progVar.append(a, l), k = l.def(d, ".id"), m = l.def(b, "[", k, "]"), l(a.shared.gl, ".useProgram(", d, ".program);", "if(!", m, "){", m, "=", b, "[", k, "]=", a.link(function(b) {
                        return ca(oa, a, c, b, 2)
                    }), "(", d, ");}", m, ".call(this,a0[", h, "],", h, ");"))
                }

                function ka(a, b) {
                    function c(a) {
                        return a.contextDep && e || a.propDep
                    }
                    var d = a.proc("batch", 2);
                    a.batchId = "0";
                    wa(a, d);
                    var e = !1,
                        f = !0;
                    Object.keys(b.context).forEach(function(a) {
                        e = e || b.context[a].propDep
                    });
                    e || (ua(a, d, b.context), f = !1);
                    var g = b.framebuffer,
                        h = !1;
                    g ? (g.propDep ? e = h = !0 : g.contextDep && e && (h = !0), h || K(a, d, g)) : K(a, d, null);
                    b.state.viewport && b.state.viewport.propDep && (e = !0);
                    V(a, d, b);
                    Q(a, d, b.state, function(a) {
                        return !c(a)
                    });
                    b.profile && c(b.profile) || G(a, d, b, !1, "a1");
                    b.contextDep = e;
                    b.needsContext = f;
                    b.needsFramebuffer = h;
                    f = b.shader.progVar;
                    if (f.contextDep && e || f.propDep) za(a, d, b, null);
                    else if (f = f.append(a, d), d(a.shared.gl, ".useProgram(", f, ".program);"), b.shader.program) za(a, d, b, b.shader.program);
                    else {
                        var g = a.global.def("{}"),
                            h = d.def(f, ".id"),
                            k = d.def(g, "[", h, "]");
                        d(a.cond(k).then(k, ".call(this,a0,a1);")["else"](k, "=", g, "[", h, "]=", a.link(function(c) {
                            return ca(za, a, b, c, 2)
                        }), "(", f, ");", k, ".call(this,a0,a1);"))
                    }
                    0 < Object.keys(b.state).length && d(a.shared.current, ".dirty=true;")
                }

                function ia(a, c) {
                    function d(b) {
                        var g = c.shader[b];
                        g && e.set(f.shader, "." + b, g.append(a, e))
                    }
                    var e = a.proc("scope", 3);
                    a.batchId = "a2";
                    var f = a.shared,
                        g = f.current;
                    ua(a, e, c.context);
                    c.framebuffer && c.framebuffer.append(a, e);
                    vb(Object.keys(c.state)).forEach(function(b) {
                        var d = c.state[b].append(a, e);
                        pa(d) ? d.forEach(function(c, d) {
                            e.set(a.next[b], "[" + d + "]", c)
                        }) : e.set(f.next, "." + b, d)
                    });
                    G(a, e, c, !0, !0);
                    ["elements", "offset", "count", "instances", "primitive"].forEach(function(b) {
                        var d = c.draw[b];
                        d && e.set(f.draw, "." + b, "" + d.append(a, e))
                    });
                    Object.keys(c.uniforms).forEach(function(d) {
                        e.set(f.uniforms, "[" + b.id(d) + "]", c.uniforms[d].append(a, e))
                    });
                    Object.keys(c.attributes).forEach(function(b) {
                        var d = c.attributes[b].append(a, e),
                            f = a.scopeAttrib(b);
                        Object.keys(new ya).forEach(function(a) {
                            e.set(f, "." + a, d[a])
                        })
                    });
                    d("vert");
                    d("frag");
                    0 < Object.keys(c.state).length && (e(g, ".dirty=true;"), e.exit(g, ".dirty=true;"));
                    e("a1(", a.shared.context, ",a0,", a.batchId, ");")
                }

                function ma(a) {
                    if ("object" === typeof a && !pa(a)) {
                        for (var b = Object.keys(a), c = 0; c < b.length; ++c)
                            if (la.isDynamic(a[b[c]])) return !0;
                        return !1
                    }
                }

                function ja(a, b, c) {
                    function d(a, b) {
                        g.forEach(function(c) {
                            var d = e[c];
                            la.isDynamic(d) && (d = a.invoke(b, d), b(l, ".", c, "=", d, ";"))
                        })
                    }
                    var e = b["static"][c];
                    if (e && ma(e)) {
                        var f = a.global,
                            g = Object.keys(e),
                            h = !1,
                            k = !1,
                            m = !1,
                            l = a.global.def("{}");
                        g.forEach(function(b) {
                            var c = e[b];
                            if (la.isDynamic(c)) "function" === typeof c && (c = e[b] = la.unbox(c)), b = P(c, null), h = h || b.thisDep, m = m || b.propDep, k = k || b.contextDep;
                            else {
                                f(l, ".", b, "=");
                                switch (typeof c) {
                                    case "number":
                                        f(c);
                                        break;
                                    case "string":
                                        f('"', c, '"');
                                        break;
                                    case "object":
                                        Array.isArray(c) && f("[", c.join(), "]");
                                        break;
                                    default:
                                        f(a.link(c))
                                }
                                f(";")
                            }
                        });
                        b.dynamic[c] = new la.DynamicVariable(4, {
                            thisDep: h,
                            contextDep: k,
                            propDep: m,
                            ref: l,
                            append: d
                        });
                        delete b["static"][c]
                    }
                }
                var ya = q.Record,
                    X = {
                        add: 32774,
                        subtract: 32778,
                        "reverse subtract": 32779
                    };
                c.ext_blend_minmax && (X.min = 32775, X.max = 32776);
                var ea = c.angle_instanced_arrays,
                    ha = c.webgl_draw_buffers,
                    ra = {
                        dirty: !0,
                        profile: h.profile
                    },
                    Fa = {},
                    Ka = [],
                    sa = {},
                    ta = {};
                u("dither", 3024);
                u("blend.enable", 3042);
                v("blend.color", "blendColor", [0, 0, 0, 0]);
                v("blend.equation", "blendEquationSeparate", [32774, 32774]);
                v("blend.func", "blendFuncSeparate", [1, 0, 1, 0]);
                u("depth.enable", 2929, !0);
                v("depth.func", "depthFunc", 513);
                v("depth.range", "depthRange", [0, 1]);
                v("depth.mask", "depthMask", !0);
                v("colorMask", "colorMask", [!0, !0, !0, !0]);
                u("cull.enable", 2884);
                v("cull.face", "cullFace", 1029);
                v("frontFace", "frontFace", 2305);
                v("lineWidth", "lineWidth", 1);
                u("polygonOffset.enable", 32823);
                v("polygonOffset.offset", "polygonOffset", [0, 0]);
                u("sample.alpha", 32926);
                u("sample.enable", 32928);
                v("sample.coverage", "sampleCoverage", [1, !1]);
                u("stencil.enable", 2960);
                v("stencil.mask", "stencilMask", -1);
                v("stencil.func", "stencilFunc", [519, 0, -1]);
                v("stencil.opFront", "stencilOpSeparate", [1028, 7680, 7680, 7680]);
                v("stencil.opBack", "stencilOpSeparate", [1029, 7680, 7680, 7680]);
                u("scissor.enable", 3089);
                v("scissor.box", "scissor", [0, 0, a.drawingBufferWidth, a.drawingBufferHeight]);
                v("viewport", "viewport", [0, 0, a.drawingBufferWidth, a.drawingBufferHeight]);
                var na = {
                        gl: a,
                        context: C,
                        strings: b,
                        next: Fa,
                        current: ra,
                        draw: m,
                        elements: d,
                        buffer: g,
                        shader: t,
                        attributes: q.state,
                        uniforms: r,
                        framebuffer: f,
                        extensions: c,
                        timer: k,
                        isBufferArgs: Oa
                    },
                    aa = {
                        primTypes: Sa,
                        compareFuncs: Xa,
                        blendFuncs: Ga,
                        blendEquations: X,
                        stencilOps: Pa,
                        glTypes: Ra,
                        orientationType: wb
                    };
                ha && (aa.backBuffer = [1029], aa.drawBuffer = J(e.maxDrawbuffers, function(a) {
                    return 0 === a ? [0] : J(a, function(a) {
                        return 36064 + a
                    })
                }));
                var qa = 0;
                return {
                    next: Fa,
                    current: ra,
                    procs: function() {
                        var a = N(),
                            b = a.proc("poll"),
                            c = a.proc("refresh"),
                            d = a.block();
                        b(d);
                        c(d);
                        var f = a.shared,
                            g = f.gl,
                            h = f.next,
                            k = f.current;
                        d(k, ".dirty=false;");
                        K(a, b);
                        K(a, c, null, !0);
                        var m;
                        ea && (m = a.link(ea));
                        for (var l = 0; l < e.maxAttributes; ++l) {
                            var n = c.def(f.attributes, "[", l, "]"),
                                q = a.cond(n, ".buffer");
                            q.then(g, ".enableVertexAttribArray(", l, ");", g, ".bindBuffer(", 34962, ",", n, ".buffer.buffer);", g, ".vertexAttribPointer(", l, ",", n, ".size,", n, ".type,", n, ".normalized,", n, ".stride,", n, ".offset);")["else"](g, ".disableVertexAttribArray(", l, ");", g, ".vertexAttrib4f(", l, ",", n, ".x,", n, ".y,", n, ".z,", n, ".w);", n, ".buffer=null;");
                            c(q);
                            ea && c(m, ".vertexAttribDivisorANGLE(", l, ",", n, ".divisor);")
                        }
                        Object.keys(sa).forEach(function(e) {
                            var f = sa[e],
                                m = d.def(h, ".", e),
                                l = a.block();
                            l("if(", m, "){", g, ".enable(", f, ")}else{", g, ".disable(", f, ")}", k, ".", e, "=", m, ";");
                            c(l);
                            b("if(", m, "!==", k, ".", e, "){", l, "}")
                        });
                        Object.keys(ta).forEach(function(e) {
                            var f = ta[e],
                                m = ra[e],
                                l, n, q = a.block();
                            q(g, ".", f, "(");
                            pa(m) ? (f = m.length, l = a.global.def(h, ".", e), n = a.global.def(k, ".", e), q(J(f, function(a) {
                                return l + "[" + a + "]"
                            }), ");", J(f, function(a) {
                                return n + "[" + a + "]=" + l + "[" + a + "];"
                            }).join("")), b("if(", J(f, function(a) {
                                return l + "[" + a + "]!==" + n + "[" + a + "]"
                            }).join("||"), "){", q, "}")) : (l = d.def(h, ".", e), n = d.def(k, ".", e), q(l, ");", k, ".", e, "=", l, ";"), b("if(", l, "!==", n, "){", q, "}"));
                            c(q)
                        });
                        return a.compile()
                    }(),
                    compile: function(a, b, c, d, e) {
                        var f = N();
                        f.stats = f.link(e);
                        Object.keys(b["static"]).forEach(function(a) {
                            ja(f, b, a)
                        });
                        Ub.forEach(function(b) {
                            ja(f, a, b)
                        });
                        c = A(a, b, c, d, f);
                        da(f, c);
                        ia(f, c);
                        ka(f, c);
                        return f.compile()
                    }
                }
            }

            function yb(a, b) {
                for (var c = 0; c < a.length; ++c)
                    if (a[c] === b) return c;
                return -1
            }
            var E = function(a, b) {
                    for (var c = Object.keys(b), e = 0; e < c.length; ++e) a[c[e]] = b[c[e]];
                    return a
                },
                Ab = 0,
                la = {
                    DynamicVariable: aa,
                    define: function(a, b) {
                        return new aa(a, Za(b + ""))
                    },
                    isDynamic: function(a) {
                        return "function" === typeof a && !a._reglType || a instanceof aa
                    },
                    unbox: function(a, b) {
                        return "function" === typeof a ? new aa(0, a) : a
                    },
                    accessor: Za
                },
                Ya = {
                    next: "function" === typeof requestAnimationFrame ? function(a) {
                        return requestAnimationFrame(a)
                    } : function(a) {
                        return setTimeout(a, 16)
                    },
                    cancel: "function" === typeof cancelAnimationFrame ? function(a) {
                        return cancelAnimationFrame(a)
                    } : clearTimeout
                },
                zb = "undefined" !== typeof performance && performance.now ? function() {
                    return performance.now()
                } : function() {
                    return +new Date
                },
                x = cb();
            x.zero = cb();
            var Vb = function(a, b) {
                    var c = 1;
                    b.ext_texture_filter_anisotropic && (c = a.getParameter(34047));
                    var e = 1,
                        g = 1;
                    b.webgl_draw_buffers && (e = a.getParameter(34852), g = a.getParameter(36063));
                    var d = !!b.oes_texture_float;
                    if (d) {
                        d = a.createTexture();
                        a.bindTexture(3553, d);
                        a.texImage2D(3553, 0, 6408, 1, 1, 0, 6408, 5126, null);
                        var n = a.createFramebuffer();
                        a.bindFramebuffer(36160, n);
                        a.framebufferTexture2D(36160, 36064, 3553, d, 0);
                        a.bindTexture(3553, null);
                        if (36053 !== a.checkFramebufferStatus(36160)) d = !1;
                        else {
                            a.viewport(0, 0, 1, 1);
                            a.clearColor(1, 0, 0, 1);
                            a.clear(16384);
                            var f = x.allocType(5126, 4);
                            a.readPixels(0, 0, 1, 1, 6408, 5126, f);
                            a.getError() ? d = !1 : (a.deleteFramebuffer(n), a.deleteTexture(d), d = 1 === f[0]);
                            x.freeType(f)
                        }
                    }
                    f = !0;
                    f = a.createTexture();
                    n = x.allocType(5121, 36);
                    a.activeTexture(33984);
                    a.bindTexture(34067, f);
                    a.texImage2D(34069, 0, 6408, 3, 3, 0, 6408, 5121, n);
                    x.freeType(n);
                    a.bindTexture(34067, null);
                    a.deleteTexture(f);
                    f = !a.getError();
                    return {
                        colorBits: [a.getParameter(3410), a.getParameter(3411), a.getParameter(3412), a.getParameter(3413)],
                        depthBits: a.getParameter(3414),
                        stencilBits: a.getParameter(3415),
                        subpixelBits: a.getParameter(3408),
                        extensions: Object.keys(b).filter(function(a) {
                            return !!b[a]
                        }),
                        maxAnisotropic: c,
                        maxDrawbuffers: e,
                        maxColorAttachments: g,
                        pointSizeDims: a.getParameter(33901),
                        lineWidthDims: a.getParameter(33902),
                        maxViewportDims: a.getParameter(3386),
                        maxCombinedTextureUnits: a.getParameter(35661),
                        maxCubeMapSize: a.getParameter(34076),
                        maxRenderbufferSize: a.getParameter(34024),
                        maxTextureUnits: a.getParameter(34930),
                        maxTextureSize: a.getParameter(3379),
                        maxAttributes: a.getParameter(34921),
                        maxVertexUniforms: a.getParameter(36347),
                        maxVertexTextureUnits: a.getParameter(35660),
                        maxVaryingVectors: a.getParameter(36348),
                        maxFragmentUniforms: a.getParameter(36349),
                        glsl: a.getParameter(35724),
                        renderer: a.getParameter(7937),
                        vendor: a.getParameter(7936),
                        version: a.getParameter(7938),
                        readFloat: d,
                        npotTextureCube: f
                    }
                },
                M = function(a) {
                    return a instanceof Uint8Array || a instanceof Uint16Array || a instanceof Uint32Array || a instanceof Int8Array || a instanceof Int16Array || a instanceof Int32Array || a instanceof Float32Array || a instanceof Float64Array || a instanceof Uint8ClampedArray
                },
                S = function(a) {
                    return Object.keys(a).map(function(b) {
                        return a[b]
                    })
                },
                Ma = {
                    shape: function(a) {
                        for (var b = []; a.length; a = a[0]) b.push(a.length);
                        return b
                    },
                    flatten: function(a, b, c, e) {
                        var g = 1;
                        if (b.length)
                            for (var d = 0; d < b.length; ++d) g *= b[d];
                        else g = 0;
                        c = e || x.allocType(c, g);
                        switch (b.length) {
                            case 0:
                                break;
                            case 1:
                                e = b[0];
                                for (b = 0; b < e; ++b) c[b] = a[b];
                                break;
                            case 2:
                                e = b[0];
                                b = b[1];
                                for (d = g = 0; d < e; ++d)
                                    for (var n = a[d], f = 0; f < b; ++f) c[g++] = n[f];
                                break;
                            case 3:
                                db(a, b[0], b[1], b[2], c, 0);
                                break;
                            default:
                                eb(a, b, 0, c, 0)
                        }
                        return c
                    }
                },
                Ia = {
                    "[object Int8Array]": 5120,
                    "[object Int16Array]": 5122,
                    "[object Int32Array]": 5124,
                    "[object Uint8Array]": 5121,
                    "[object Uint8ClampedArray]": 5121,
                    "[object Uint16Array]": 5123,
                    "[object Uint32Array]": 5125,
                    "[object Float32Array]": 5126,
                    "[object Float64Array]": 5121,
                    "[object ArrayBuffer]": 5121
                },
                Ra = {
                    int8: 5120,
                    int16: 5122,
                    int32: 5124,
                    uint8: 5121,
                    uint16: 5123,
                    uint32: 5125,
                    float: 5126,
                    float32: 5126
                },
                jb = {
                    dynamic: 35048,
                    stream: 35040,
                    static: 35044
                },
                Qa = Ma.flatten,
                hb = Ma.shape,
                ja = [];
            ja[5120] = 1;
            ja[5122] = 2;
            ja[5124] = 4;
            ja[5121] = 1;
            ja[5123] = 2;
            ja[5125] = 4;
            ja[5126] = 4;
            var Sa = {
                    points: 0,
                    point: 0,
                    lines: 1,
                    line: 1,
                    triangles: 4,
                    triangle: 4,
                    "line loop": 2,
                    "line strip": 3,
                    "triangle strip": 5,
                    "triangle fan": 6
                },
                lb = new Float32Array(1),
                Ib = new Uint32Array(lb.buffer),
                Mb = [9984, 9986, 9985, 9987],
                La = [0, 6409, 6410, 6407, 6408],
                L = {};
            L[6409] = L[6406] = L[6402] = 1;
            L[34041] = L[6410] = 2;
            L[6407] = L[35904] = 3;
            L[6408] = L[35906] = 4;
            var Ua = Ea("HTMLCanvasElement"),
                pb = Ea("CanvasRenderingContext2D"),
                qb = Ea("ImageBitmap"),
                rb = Ea("HTMLImageElement"),
                sb = Ea("HTMLVideoElement"),
                Jb = Object.keys(Ia).concat([Ua, pb, qb, rb, sb]),
                qa = [];
            qa[5121] = 1;
            qa[5126] = 4;
            qa[36193] = 2;
            qa[5123] = 2;
            qa[5125] = 4;
            var y = [];
            y[32854] = 2;
            y[32855] = 2;
            y[36194] = 2;
            y[34041] = 4;
            y[33776] = .5;
            y[33777] = .5;
            y[33778] = 1;
            y[33779] = 1;
            y[35986] = .5;
            y[35987] = 1;
            y[34798] = 1;
            y[35840] = .5;
            y[35841] = .25;
            y[35842] = .5;
            y[35843] = .25;
            y[36196] = .5;
            var Q = [];
            Q[32854] = 2;
            Q[32855] = 2;
            Q[36194] = 2;
            Q[33189] = 2;
            Q[36168] = 1;
            Q[34041] = 4;
            Q[35907] = 4;
            Q[34836] = 16;
            Q[34842] = 8;
            Q[34843] = 6;
            var Wb = function(a, b, c, e, g) {
                    function d(a) {
                        this.id = q++;
                        this.refCount = 1;
                        this.renderbuffer = a;
                        this.format = 32854;
                        this.height = this.width = 0;
                        g.profile && (this.stats = {
                            size: 0
                        })
                    }

                    function n(b) {
                        var c = b.renderbuffer;
                        a.bindRenderbuffer(36161, null);
                        a.deleteRenderbuffer(c);
                        b.renderbuffer = null;
                        b.refCount = 0;
                        delete t[b.id];
                        e.renderbufferCount--
                    }
                    var f = {
                        rgba4: 32854,
                        rgb565: 36194,
                        "rgb5 a1": 32855,
                        depth: 33189,
                        stencil: 36168,
                        "depth stencil": 34041
                    };
                    b.ext_srgb && (f.srgba = 35907);
                    b.ext_color_buffer_half_float && (f.rgba16f = 34842, f.rgb16f = 34843);
                    b.webgl_color_buffer_float && (f.rgba32f = 34836);
                    var r = [];
                    Object.keys(f).forEach(function(a) {
                        r[f[a]] = a
                    });
                    var q = 0,
                        t = {};
                    d.prototype.decRef = function() {
                        0 >= --this.refCount && n(this)
                    };
                    g.profile && (e.getTotalRenderbufferSize = function() {
                        var a = 0;
                        Object.keys(t).forEach(function(b) {
                            a += t[b].stats.size
                        });
                        return a
                    });
                    return {
                        create: function(b, c) {
                            function k(b, c) {
                                var d = 0,
                                    e = 0,
                                    m = 32854;
                                "object" === typeof b && b ? ("shape" in b ? (e = b.shape, d = e[0] | 0, e = e[1] | 0) : ("radius" in b && (d = e = b.radius | 0), "width" in b && (d = b.width | 0), "height" in b && (e = b.height | 0)), "format" in b && (m = f[b.format])) : "number" === typeof b ? (d = b | 0, e = "number" === typeof c ? c | 0 : d) : b || (d = e = 1);
                                if (d !== h.width || e !== h.height || m !== h.format) return k.width = h.width = d, k.height = h.height = e, h.format = m, a.bindRenderbuffer(36161, h.renderbuffer), a.renderbufferStorage(36161, m, d, e), g.profile && (h.stats.size = Q[h.format] * h.width * h.height), k.format = r[h.format], k
                            }
                            var h = new d(a.createRenderbuffer());
                            t[h.id] = h;
                            e.renderbufferCount++;
                            k(b, c);
                            k.resize = function(b, c) {
                                var d = b | 0,
                                    e = c | 0 || d;
                                if (d === h.width && e === h.height) return k;
                                k.width = h.width = d;
                                k.height = h.height = e;
                                a.bindRenderbuffer(36161, h.renderbuffer);
                                a.renderbufferStorage(36161, h.format, d, e);
                                g.profile && (h.stats.size = Q[h.format] * h.width * h.height);
                                return k
                            };
                            k._reglType = "renderbuffer";
                            k._renderbuffer = h;
                            g.profile && (k.stats = h.stats);
                            k.destroy = function() {
                                h.decRef()
                            };
                            return k
                        },
                        clear: function() {
                            S(t).forEach(n)
                        },
                        restore: function() {
                            S(t).forEach(function(b) {
                                b.renderbuffer = a.createRenderbuffer();
                                a.bindRenderbuffer(36161, b.renderbuffer);
                                a.renderbufferStorage(36161, b.format, b.width, b.height)
                            });
                            a.bindRenderbuffer(36161, null)
                        }
                    }
                },
                Wa = [];
            Wa[6408] = 4;
            Wa[6407] = 3;
            var Na = [];
            Na[5121] = 1;
            Na[5126] = 4;
            Na[36193] = 2;
            var Da = ["x", "y", "z", "w"],
                Ub = "blend.func blend.equation stencil.func stencil.opFront stencil.opBack sample.coverage viewport scissor.box polygonOffset.offset".split(" "),
                Ga = {
                    0: 0,
                    1: 1,
                    zero: 0,
                    one: 1,
                    "src color": 768,
                    "one minus src color": 769,
                    "src alpha": 770,
                    "one minus src alpha": 771,
                    "dst color": 774,
                    "one minus dst color": 775,
                    "dst alpha": 772,
                    "one minus dst alpha": 773,
                    "constant color": 32769,
                    "one minus constant color": 32770,
                    "constant alpha": 32771,
                    "one minus constant alpha": 32772,
                    "src alpha saturate": 776
                },
                Xa = {
                    never: 512,
                    less: 513,
                    "<": 513,
                    equal: 514,
                    "=": 514,
                    "==": 514,
                    "===": 514,
                    lequal: 515,
                    "<=": 515,
                    greater: 516,
                    ">": 516,
                    notequal: 517,
                    "!=": 517,
                    "!==": 517,
                    gequal: 518,
                    ">=": 518,
                    always: 519
                },
                Pa = {
                    0: 0,
                    zero: 0,
                    keep: 7680,
                    replace: 7681,
                    increment: 7682,
                    decrement: 7683,
                    "increment wrap": 34055,
                    "decrement wrap": 34056,
                    invert: 5386
                },
                wb = {
                    cw: 2304,
                    ccw: 2305
                },
                xb = new Z(!1, !1, !1, function() {}),
                Xb = function(a, b) {
                    function c() {
                        this.endQueryIndex = this.startQueryIndex = -1;
                        this.sum = 0;
                        this.stats = null
                    }

                    function e(a, b, d) {
                        var e = n.pop() || new c;
                        e.startQueryIndex = a;
                        e.endQueryIndex = b;
                        e.sum = 0;
                        e.stats = d;
                        f.push(e)
                    }
                    if (!b.ext_disjoint_timer_query) return null;
                    var g = [],
                        d = [],
                        n = [],
                        f = [],
                        r = [],
                        q = [];
                    return {
                        beginQuery: function(a) {
                            var c = g.pop() || b.ext_disjoint_timer_query.createQueryEXT();
                            b.ext_disjoint_timer_query.beginQueryEXT(35007, c);
                            d.push(c);
                            e(d.length - 1, d.length, a)
                        },
                        endQuery: function() {
                            b.ext_disjoint_timer_query.endQueryEXT(35007)
                        },
                        pushScopeStats: e,
                        update: function() {
                            var a, c;
                            a = d.length;
                            if (0 !== a) {
                                q.length = Math.max(q.length, a + 1);
                                r.length = Math.max(r.length, a + 1);
                                r[0] = 0;
                                var e = q[0] = 0;
                                for (c = a = 0; c < d.length; ++c) {
                                    var k = d[c];
                                    b.ext_disjoint_timer_query.getQueryObjectEXT(k, 34919) ? (e += b.ext_disjoint_timer_query.getQueryObjectEXT(k, 34918), g.push(k)) : d[a++] = k;
                                    r[c + 1] = e;
                                    q[c + 1] = a
                                }
                                d.length = a;
                                for (c = a = 0; c < f.length; ++c) {
                                    var e = f[c],
                                        h = e.startQueryIndex,
                                        k = e.endQueryIndex;
                                    e.sum += r[k] - r[h];
                                    h = q[h];
                                    k = q[k];
                                    k === h ? (e.stats.gpuTime += e.sum / 1e6, n.push(e)) : (e.startQueryIndex = h, e.endQueryIndex = k, f[a++] = e)
                                }
                                f.length = a
                            }
                        },
                        getNumPendingQueries: function() {
                            return d.length
                        },
                        clear: function() {
                            g.push.apply(g, d);
                            for (var a = 0; a < g.length; a++) b.ext_disjoint_timer_query.deleteQueryEXT(g[a]);
                            d.length = 0;
                            g.length = 0
                        },
                        restore: function() {
                            d.length = 0;
                            g.length = 0
                        }
                    }
                };
            return function(a) {
                function b() {
                    if (0 === G.length) B && B.update(), ca = null;
                    else {
                        ca = Ya.next(b);
                        t();
                        for (var a = G.length - 1; 0 <= a; --a) {
                            var c = G[a];
                            c && c(O, null, 0)
                        }
                        k.flush();
                        B && B.update()
                    }
                }

                function c() {
                    !ca && 0 < G.length && (ca = Ya.next(b))
                }

                function e() {
                    ca && (Ya.cancel(b), ca = null)
                }

                function g(a) {
                    a.preventDefault();
                    e();
                    U.forEach(function(a) {
                        a()
                    })
                }

                function d(a) {
                    k.getError();
                    l.restore();
                    Q.restore();
                    F.restore();
                    A.restore();
                    M.restore();
                    K.restore();
                    B && B.restore();
                    V.procs.refresh();
                    c();
                    W.forEach(function(a) {
                        a()
                    })
                }

                function n(a) {
                    function b(a) {
                        var c = {},
                            d = {};
                        Object.keys(a).forEach(function(b) {
                            var e = a[b];
                            la.isDynamic(e) ? d[b] = la.unbox(e, b) : c[b] = e
                        });
                        return {
                            dynamic: d,
                            static: c
                        }
                    }

                    function c(a) {
                        for (; m.length < a;) m.push(null);
                        return m
                    }
                    var d = b(a.context || {}),
                        e = b(a.uniforms || {}),
                        f = b(a.attributes || {}),
                        g = b(function(a) {
                            function b(a) {
                                if (a in c) {
                                    var d = c[a];
                                    delete c[a];
                                    Object.keys(d).forEach(function(b) {
                                        c[a + "." + b] = d[b]
                                    })
                                }
                            }
                            var c = E({}, a);
                            delete c.uniforms;
                            delete c.attributes;
                            delete c.context;
                            "stencil" in c && c.stencil.op && (c.stencil.opBack = c.stencil.opFront = c.stencil.op, delete c.stencil.op);
                            b("blend");
                            b("depth");
                            b("cull");
                            b("stencil");
                            b("polygonOffset");
                            b("scissor");
                            b("sample");
                            return c
                        }(a));
                    a = {
                        gpuTime: 0,
                        cpuTime: 0,
                        count: 0
                    };
                    var d = V.compile(g, f, e, d, a),
                        h = d.draw,
                        k = d.batch,
                        l = d.scope,
                        m = [];
                    return E(function(a, b) {
                        var d;
                        if ("function" === typeof a) return l.call(this, null, a, 0);
                        if ("function" === typeof b)
                            if ("number" === typeof a)
                                for (d = 0; d < a; ++d) l.call(this, null, b, d);
                            else if (Array.isArray(a))
                            for (d = 0; d < a.length; ++d) l.call(this, a[d], b, d);
                        else return l.call(this, a, b, 0);
                        else if ("number" === typeof a) {
                            if (0 < a) return k.call(this, c(a | 0), a | 0)
                        } else if (Array.isArray(a)) {
                            if (a.length) return k.call(this, a, a.length)
                        } else return h.call(this, a)
                    }, {
                        stats: a
                    })
                }

                function f(a, b) {
                    var c = 0;
                    V.procs.poll();
                    var d = b.color;
                    d && (k.clearColor(+d[0] || 0, +d[1] || 0, +d[2] || 0, +d[3] || 0), c |= 16384);
                    "depth" in b && (k.clearDepth(+b.depth), c |= 256);
                    "stencil" in b && (k.clearStencil(b.stencil | 0), c |= 1024);
                    k.clear(c)
                }

                function r(a) {
                    G.push(a);
                    c();
                    return {
                        cancel: function() {
                            function b() {
                                var a = yb(G, b);
                                G[a] = G[G.length - 1];
                                --G.length;
                                0 >= G.length && e()
                            }
                            var c = yb(G, a);
                            G[c] = b
                        }
                    }
                }

                function q() {
                    var a = S.viewport,
                        b = S.scissor_box;
                    a[0] = a[1] = b[0] = b[1] = 0;
                    O.viewportWidth = O.framebufferWidth = O.drawingBufferWidth = a[2] = b[2] = k.drawingBufferWidth;
                    O.viewportHeight = O.framebufferHeight = O.drawingBufferHeight = a[3] = b[3] = k.drawingBufferHeight
                }

                function t() {
                    O.tick += 1;
                    O.time = y();
                    q();
                    V.procs.poll()
                }

                function m() {
                    q();
                    V.procs.refresh();
                    B && B.update()
                }

                function y() {
                    return (zb() - D) / 1e3
                }
                a = Eb(a);
                if (!a) return null;
                var k = a.gl,
                    h = k.getContextAttributes();
                k.isContextLost();
                var l = Fb(k, a);
                if (!l) return null;
                var u = Bb(),
                    v = {
                        bufferCount: 0,
                        elementsCount: 0,
                        framebufferCount: 0,
                        shaderCount: 0,
                        textureCount: 0,
                        cubeCount: 0,
                        renderbufferCount: 0,
                        maxTextureUnits: 0
                    },
                    x = l.extensions,
                    B = Xb(k, x),
                    D = zb(),
                    J = k.drawingBufferWidth,
                    P = k.drawingBufferHeight,
                    O = {
                        tick: 0,
                        time: 0,
                        viewportWidth: J,
                        viewportHeight: P,
                        framebufferWidth: J,
                        framebufferHeight: P,
                        drawingBufferWidth: J,
                        drawingBufferHeight: P,
                        pixelRatio: a.pixelRatio
                    },
                    R = Vb(k, x),
                    J = Pb(k, x, R, u),
                    F = Gb(k, v, a, J),
                    T = Hb(k, x, F, v),
                    Q = Qb(k, u, v, a),
                    A = Kb(k, x, R, function() {
                        V.procs.poll()
                    }, O, v, a),
                    M = Wb(k, x, R, v, a),
                    K = Ob(k, x, R, A, M, v),
                    V = Tb(k, u, x, R, F, T, A, K, {}, J, Q, {
                        elements: null,
                        primitive: 4,
                        count: -1,
                        offset: 0,
                        instances: -1
                    }, O, B, a),
                    u = Rb(k, K, V.procs.poll, O, h, x, R),
                    S = V.next,
                    L = k.canvas,
                    G = [],
                    U = [],
                    W = [],
                    Z = [a.onDestroy],
                    ca = null;
                L && (L.addEventListener("webglcontextlost", g, !1), L.addEventListener("webglcontextrestored", d, !1));
                var aa = K.setFBO = n({
                    framebuffer: la.define.call(null, 1, "framebuffer")
                });
                m();
                h = E(n, {
                    clear: function(a) {
                        if ("framebuffer" in a)
                            if (a.framebuffer && "framebufferCube" === a.framebuffer_reglType)
                                for (var b = 0; 6 > b; ++b) aa(E({
                                    framebuffer: a.framebuffer.faces[b]
                                }, a), f);
                            else aa(a, f);
                        else f(null, a)
                    },
                    prop: la.define.bind(null, 1),
                    context: la.define.bind(null, 2),
                    this: la.define.bind(null, 3),
                    draw: n({}),
                    buffer: function(a) {
                        return F.create(a, 34962, !1, !1)
                    },
                    elements: function(a) {
                        return T.create(a, !1)
                    },
                    texture: A.create2D,
                    cube: A.createCube,
                    renderbuffer: M.create,
                    framebuffer: K.create,
                    framebufferCube: K.createCube,
                    attributes: h,
                    frame: r,
                    on: function(a, b) {
                        var c;
                        switch (a) {
                            case "frame":
                                return r(b);
                            case "lost":
                                c = U;
                                break;
                            case "restore":
                                c = W;
                                break;
                            case "destroy":
                                c = Z
                        }
                        c.push(b);
                        return {
                            cancel: function() {
                                for (var a = 0; a < c.length; ++a)
                                    if (c[a] === b) {
                                        c[a] = c[c.length - 1];
                                        c.pop();
                                        break
                                    }
                            }
                        }
                    },
                    limits: R,
                    hasExtension: function(a) {
                        return 0 <= R.extensions.indexOf(a.toLowerCase())
                    },
                    read: u,
                    destroy: function() {
                        G.length = 0;
                        e();
                        L && (L.removeEventListener("webglcontextlost", g), L.removeEventListener("webglcontextrestored", d));
                        Q.clear();
                        K.clear();
                        M.clear();
                        A.clear();
                        T.clear();
                        F.clear();
                        B && B.clear();
                        Z.forEach(function(a) {
                            a()
                        })
                    },
                    _gl: k,
                    _refresh: m,
                    poll: function() {
                        t();
                        B && B.update()
                    },
                    now: y,
                    stats: v
                });
                a.onDone(null, h);
                return h
            }
        })
    }, {}],
    59: [function(require, module, exports) {
        module.exports = unindex;

        function unindex(positions, cells, out) {
            if (positions.positions && positions.cells) {
                out = cells;
                cells = positions.cells;
                positions = positions.positions
            }
            var dims = positions.length ? positions[0].length : 0;
            var points = cells.length ? cells[0].length : 0;
            out = out || new Float32Array(cells.length * points * dims);
            if (points === 3 && dims === 2) {
                for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
                    var cell = cells[i];
                    out[n++] = positions[cell[0]][0];
                    out[n++] = positions[cell[0]][1];
                    out[n++] = positions[cell[1]][0];
                    out[n++] = positions[cell[1]][1];
                    out[n++] = positions[cell[2]][0];
                    out[n++] = positions[cell[2]][1]
                }
            } else if (points === 3 && dims === 3) {
                for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
                    var cell = cells[i];
                    out[n++] = positions[cell[0]][0];
                    out[n++] = positions[cell[0]][1];
                    out[n++] = positions[cell[0]][2];
                    out[n++] = positions[cell[1]][0];
                    out[n++] = positions[cell[1]][1];
                    out[n++] = positions[cell[1]][2];
                    out[n++] = positions[cell[2]][0];
                    out[n++] = positions[cell[2]][1];
                    out[n++] = positions[cell[2]][2]
                }
            } else {
                for (var i = 0, n = 0, l = cells.length; i < l; i += 1) {
                    var cell = cells[i];
                    for (var c = 0; c < cell.length; c++) {
                        var C = cell[c];
                        for (var k = 0; k < dims; k++) {
                            out[n++] = positions[C][k]
                        }
                    }
                }
            }
            return out
        }
    }, {}],
    60: [function(require, module, exports) {
        module.exports = {
            player: {
                radius: .25,
                speed: 2,
                color: {
                    near: [0, .25, 1],
                    far: [1, .25, 0]
                }
            },
            margin: 16,
            initialSize: 5,
            levelIncrease: 2,
            wallImage: "static/concrete_blood.png",
            groundImage: "static/concrete_blood.png",
            timeStep: 1.5 / 60,
            rollingSound: "static/rolling.wav",
            clinkSound: "static/clink.wav",
            dingSound: "static/ding.wav",
            initialResolution: 4
        }
    }, {}],
    61: [function(require, module, exports) {
        "use strict";
        const {
            vec2: vec2
        } = require("gl-matrix");
        const {
            Howl: Howl
        } = require("howler");
        const given = require("./given");
        const View = require("./view");
        const Model = require("./model");
        async function main() {
            const canvas = document.getElementById("render-canvas");
            let level = 1;
            let model = Model(level, onPlayerContact);
            const view = await View(canvas);
            view.setStage(model.getStage());
            const rollingSound = new Howl({
                src: [given.rollingSound],
                volume: 0,
                loop: true,
                rate: 4
            });
            rollingSound.play();

            function onPlayerContact(contact) {
                let v = vec2.dot([contact.v_normal.x, contact.v_normal.y], model.getPlayerVelocity());
                v = Math.abs(v);
                new Howl({
                    src: [given.clinkSound],
                    volume: v / 16
                }).play()
            }
            const kb = {};
            window.addEventListener("keydown", e => kb[e.code] = true);
            window.addEventListener("keyup", e => kb[e.code] = false);
            window.addEventListener("deviceorientation", e => {
                if (model.isComplete()) return;
                let dx = (e.beta - 30) / 180;
                let dy = e.gamma / 90;
                dx = Math.pow(Math.abs(dx), .5) * Math.sign(dx);
                dy = Math.pow(Math.abs(dy), .5) * Math.sign(dy);
                model.pushPlayer(given.player.speed * dy, -given.player.speed * dx)
            });
            async function loop() {
                if (kb.ArrowRight) model.pushPlayer(given.player.speed, 0);
                if (kb.ArrowLeft) model.pushPlayer(-given.player.speed, 0);
                if (kb.ArrowUp) model.pushPlayer(0, given.player.speed);
                if (kb.ArrowDown) model.pushPlayer(0, -given.player.speed);
                if (kb.Digit1) view.setResolution(1);
                if (kb.Digit2) view.setResolution(2);
                if (kb.Digit3) view.setResolution(3);
                if (kb.Digit4) view.setResolution(4);
                if (kb.Digit5) view.setResolution(5);
                if (kb.Digit6) view.setResolution(6);
                if (kb.Digit7) view.setResolution(7);
                if (kb.Digit8) view.setResolution(8);
                if (kb.KeyH) {
                    document.getElementById("help").style.display = "inline-block"
                } else {
                    document.getElementById("help").style.display = "none"
                }
                model.update();
                view.render(model.getPlayer(), model.getCamera());
                rollingSound.volume(vec2.length(model.getPlayerVelocity()) / 16);
                if (model.isComplete()) {
                    level++;
                    document.getElementById("level").innerText = `Level ${level}`;
                    new Howl({
                        src: [given.dingSound]
                    }).play();
                    for (let i = 0; i <= 60; i++) {
                        canvas.style.opacity = 1 - i / 60;
                        model.update();
                        rollingSound.volume(vec2.length(model.getPlayerVelocity()) / 16);
                        view.render(model.getPlayer(), model.getCamera());
                        await display()
                    }
                    model = Model(level, onPlayerContact);
                    view.setStage(model.getStage());
                    for (let i = 0; i <= 15; i++) {
                        canvas.style.opacity = i / 15;
                        model.update();
                        rollingSound.volume(vec2.length(model.getPlayerVelocity()) / 16);
                        view.render(model.getPlayer(), model.getCamera());
                        await display()
                    }
                }
                requestAnimationFrame(loop)
            }
            loop()
        }
        main();

        function display() {
            return new Promise(r => {
                requestAnimationFrame(r)
            })
        }
        window.mobilecheck = function() {
            var check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check
        };
        if (mobilecheck()) {
            document.getElementById("help-help").innerText = "Play me on a laptop."
        }
    }, {
        "./given": 60,
        "./model": 62,
        "./view": 63,
        "gl-matrix": 1,
        howler: 3
    }],
    62: [function(require, module, exports) {
        "use strict";
        const pl = require("planck-js");
        const {
            mat4: mat4,
            vec2: vec2,
            vec3: vec3
        } = require("gl-matrix");
        const given = require("./given");
        module.exports = function Model(level, onPlayerContact) {
            const stage = {
                size: 2 * given.margin + given.initialSize + given.levelIncrease * level,
                depth: 3,
                data: {}
            };
            const maze = generateSquareMaze(stage.size - given.margin * 2);
            maze[[stage.size - (2 * given.margin + 1), stage.size - (2 * given.margin + 2)]] = false;
            const world = pl.World({
                gravity: pl.Vec2(0, 0)
            });
            const typeGround = 1;
            const typeWall = 2;
            for (let x = 0; x < stage.size; x++) {
                for (let y = 0; y < stage.size; y++) {
                    stage.data[[x, y, 0]] = typeGround;
                    if (maze[[x - given.margin, y - given.margin]]) {
                        stage.data[[x, y, 1]] = typeWall;
                        if (Math.random() < .9) {
                            stage.data[[x, y, 2]] = typeWall
                        }
                        world.createBody({
                            position: pl.Vec2(x + .5, y + .5)
                        }).createFixture(pl.Box(.5, .5))
                    }
                }
            }
            world.on("post-solve", e => {
                if (onPlayerContact) {
                    const a = e.getFixtureA().getUserData();
                    const b = e.getFixtureB().getUserData();
                    if (a === "player" || b === "player") {
                        onPlayerContact(e)
                    }
                }
            });
            const player = world.createDynamicBody({
                position: pl.Vec2(given.margin + 1.5, given.margin + 1.5),
                linearDamping: 1.5,
                angularDamping: 1
            });
            player.createFixture(pl.Circle(given.player.radius), {
                friction: .95,
                restitution: .25,
                density: 1,
                userData: "player"
            });
            player.setBullet(true);
            const playerRotation = mat4.create();
            let playerPosition = [player.getPosition().x, player.getPosition().y];
            let playerColor = given.player.color.far;
            let cameraPosition = playerPosition.slice();

            function update() {
                world.step(given.timeStep);
                const newPosition = [player.getPosition().x, player.getPosition().y];
                const d = vec2.sub([], newPosition, playerPosition);
                mat4.rotateX(playerRotation, playerRotation, d[1] / given.player.radius);
                mat4.rotateY(playerRotation, playerRotation, -d[0] / given.player.radius);
                playerPosition = newPosition.slice();
                const exit = [stage.size - given.margin, stage.size - given.margin];
                const entrance = [given.margin + 1.5, given.margin + 1.5];
                const dist = vec2.distance(playerPosition, exit) / vec2.distance(exit, entrance);
                playerColor = vec3.lerp([], given.player.color.near, given.player.color.far, dist);
                vec2.add(cameraPosition, cameraPosition, vec2.scale([], vec2.sub([], playerPosition, cameraPosition), .1))
            }

            function pushPlayer(x, y) {
                player.applyForceToCenter(pl.Vec2(x, y), true)
            }

            function isComplete() {
                return player.getPosition().x > stage.size - given.margin
            }

            function getPlayer() {
                return {
                    position: playerPosition.slice(),
                    rotation: playerRotation.slice(),
                    color: playerColor.slice()
                }
            }

            function getCamera() {
                return cameraPosition.slice()
            }

            function getStage() {
                return stage
            }

            function getPlayerVelocity() {
                const v = player.getLinearVelocity();
                return [v.x, v.y]
            }
            return {
                update: update,
                pushPlayer: pushPlayer,
                isComplete: isComplete,
                getPlayer: getPlayer,
                getCamera: getCamera,
                getStage: getStage,
                getPlayerVelocity: getPlayerVelocity
            }
        };

        function generateSquareMaze(size) {
            const field = {};
            for (let x = 0; x < size; x++) {
                for (let y = 0; y < size; y++) {
                    field[[x, y]] = true
                }
            }
            return function iterate(field, x, y) {
                field[[x, y]] = false;
                while (true) {
                    const directions = [];
                    if (x > 1 && field[[x - 2, y]]) {
                        directions.push([-1, 0])
                    }
                    if (x < size - 2 && field[[x + 2, y]] == true) {
                        directions.push([1, 0])
                    }
                    if (y > 1 && field[[x, y - 2]] == true) {
                        directions.push([0, -1])
                    }
                    if (y < size - 2 && field[[x, y + 2]] == true) {
                        directions.push([0, 1])
                    }
                    if (directions.length == 0) {
                        return field
                    }
                    const dir = directions[Math.floor(Math.random() * directions.length)];
                    field[[x + dir[0], y + dir[1]]] = false;
                    field = iterate(field, x + dir[0] * 2, y + dir[1] * 2)
                }
            }(field, 1, 1)
        }
    }, {
        "./given": 60,
        "gl-matrix": 1,
        "planck-js": 29
    }],
    63: [function(require, module, exports) {
        "use strict";
        const REGL = require("regl");
        const {
            mat4: mat4,
            vec3: vec3,
            vec2: vec2
        } = require("gl-matrix");
        const glsl = require("glslify");
        const createCube = require("primitive-cube");
        const unindex = require("unindex-mesh");
        const renderEnvMap = require("regl-render-envmap");
        const given = require("./given");
        module.exports = async function Renderer(canvas) {
            const regl = REGL({
                canvas: canvas,
                extensions: ["OES_texture_float"],
                attributes: {
                    antialias: false
                }
            });
            const tWall = regl.texture(await loadImage(given.wallImage));
            const tGround = regl.texture(await loadImage(given.groundImage));
            const pingPong = [regl.framebuffer({
                width: canvas.width,
                height: canvas.height,
                colorType: "float"
            }), regl.framebuffer({
                width: canvas.width,
                height: canvas.height,
                colorType: "float"
            })];
            let pingPongIndex = 0;
            const tRand3 = regl.texture({
                width: 1024,
                height: 1024,
                format: "rgb",
                type: "float",
                wrap: "repeat",
                data: randVec3(1024)
            });
            const tJitter = regl.texture({
                width: 1024,
                height: 1024,
                format: "luminance alpha",
                type: "float",
                wrap: "repeat",
                data: jitter(1024)
            });
            const stage = {
                width: 3,
                height: 3,
                depth: 3,
                potSize: 16,
                texture: regl.texture()
            };
            const cube = unindex(createCube(1));
            const playerTextureCmd = regl({
                vert: glsl(["precision highp float;\n#define GLSLIFY 1\nattribute vec3 position;\nuniform mat4 view, projection;\nvarying vec3 vPos;\nvoid main() {\n  gl_Position = projection * view * vec4(position, 1);\n  vPos = position;\n}\n"]),
                frag: glsl(["precision highp float;\n#define GLSLIFY 1\nvarying vec3 vPos;\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n  float n = 0.5 * snoise(normalize(vPos)) + 0.5;\n  n = pow(n, 2.0);\n  vec3 c = vec3(smoothstep(0.0, 1.0, n));\n  gl_FragColor = vec4(c,1);\n}\n"]),
                attributes: {
                    position: cube
                },
                uniforms: {
                    view: regl.prop("view"),
                    projection: regl.prop("projection")
                },
                viewport: regl.prop("viewport"),
                framebuffer: regl.prop("framebuffer"),
                count: cube.length / 3
            });
            const tPlayerTexture = renderEnvMap(regl, function(config) {
                regl.clear({
                    color: [0, 0, 0, 1],
                    depth: 1,
                    framebuffer: config.framebuffer
                });
                playerTextureCmd({
                    view: config.view,
                    projection: config.projection,
                    viewport: config.viewport,
                    framebuffer: config.framebuffer
                })
            });
            const sampleCmd = regl({
                vert: glsl(["precision highp float;\n#define GLSLIFY 1\nattribute vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0, 1);\n}\n"]),
                frag: glsl(["precision highp float;\n#define GLSLIFY 1\nuniform samplerCube tPlayerTexture;\nuniform sampler2D source;\nuniform sampler2D tStage;\nuniform sampler2D tRand3;\nuniform sampler2D tJitter;\nuniform sampler2D tGround;\nuniform sampler2D tWall;\nuniform mat4 lRot;\nuniform mat4 invpv;\nuniform vec3 eye;\nuniform vec3 bounds;\nuniform vec3 playerPosition;\nuniform vec3 playerColor;\nuniform vec2 resolution;\nuniform vec2 tOffset;\nuniform float resStage;\nuniform float playerRadius;\nuniform float time;\n\n// Enumerate some voxel types.\nconst int NONE  = 0;\nconst int VOXEL = 1;\nconst int LIGHT = 5;\n\n// Define an ambient light value.\nvec3 ambient = vec3(0.001);\n\n// Define a small value.\nconst float epsilon = 0.001;\n\n// Define the maximum number of bounces we'll take during path tracing.\nconst int nBounces = 2;\n\n// Check if a voxel is in-bounds.\nbool inBounds(vec3 p) {\n  return all(greaterThanEqual(p, vec3(0))) && all(lessThan(p, bounds));\n}\n\n// Gets the time of intersection between a ray and AABB.\nbool rayAABB(vec3 origin, vec3 direction, vec3 bMin, vec3 bMax, out float t0) {\n    vec3 omin = (bMin - origin) / direction;\n    vec3 omax = (bMax - origin) / direction;\n    vec3 imax = max(omax, omin);\n    vec3 imin = min(omax, omin);\n    float t1 = min(imax.x, min(imax.y, imax.z));\n    t0 = max(imin.x, max(imin.y, imin.z));\n    t0 = max(t0, 0.0);\n    return t1 > t0;\n}\n\n// Gets the normal of a point on the surface of an AABB.\nvec3 rayAABBNorm(vec3 p, vec3 v) {\n  vec3 d = p - (v + 0.5);\n  vec3 dabs = abs(d);\n  if (dabs.x > dabs.y) {\n    if (dabs.x > dabs.z) {\n      return vec3(sign(d.x), 0.0, 0.0);\n    }\n    return vec3(0.0, 0.0, sign(d.z));\n  } else {\n    if (dabs.y > dabs.z) {\n      return vec3(0.0, sign(d.y), 0.0);\n    } else {\n      return vec3(0.0, 0.0, sign(d.z));\n    }\n  }\n}\n\n// Gets the UV coordinate of a point on the suface of an AABB.\nvec2 rayAABBUV(vec3 p, vec3 v) {\n  vec3 d = p - (v + 0.5);\n  vec3 dabs = abs(d);\n  if (dabs.x > dabs.y) {\n    if (dabs.x > dabs.z) {\n      return (p - v).yz;\n    } else {\n      return (p - v).xy;\n    }\n  } else {\n    if (dabs.y > dabs.z) {\n      return (p - v).xz;\n    } else {\n      return (p - v).xy;\n    }\n  }\n}\n\n// Returns the 2D UV coordinate that maps to a voxel in the 3D voxel data.\nvec2 samplePoint(vec3 v) {\n  float i = v.y * bounds.x * bounds.z + v.z * bounds.x + v.x;\n  i = i / resStage;\n  float y = floor(i);\n  float x = fract(i) * resStage;\n  x = (x + 0.5) / resStage;\n  y = (y + 0.5) / resStage;\n  return vec2(x, y);\n}\n\n// Returns the data for the voxel at v.\nvec4 getVoxel(vec3 v) {\n  if (!inBounds(v)) return vec4(0);\n  vec2 s = samplePoint(v);\n  return texture2D(tStage, s);\n}\n\n// Gets the time of intersection for a ray and a sphere, if any. Returns false\n// if no intersection.\nbool raySphereIntersect(vec3 r0, vec3 rd, vec3 s0, float sr, out float t) {\n  vec3 s0_r0 = r0 - s0;\n  float b = 2.0 * dot(rd, s0_r0);\n  float c = dot(s0_r0, s0_r0) - (sr * sr);\n  float d = b * b - 4.0 * c;\n  if (d < 0.0) return false;\n  t = (-b - sqrt(d))*0.5;\n  return t >= 0.0;\n}\n\n// Gets the voxel intersected by a ray, if any. Returns false if no intersection.\nbool rayGridIntersect(vec3 r0, vec3 r, out vec3 v) {\n  v = floor(r0);\n  vec3 stp = sign(r);\n  vec3 tDelta = 1.0 / abs(r);\n  vec3 tMax = step(0.0, r) * (1.0 - fract(r0)) + (1.0 - step(0.0, r)) * fract(r0);\n  tMax = tMax/abs(r);\n  for (int i = 0; i < 65536; i++) {\n    if (tMax.x < tMax.y) {\n      if (tMax.x < tMax.z) {\n        v.x += stp.x;\n        tMax.x += tDelta.x;\n      } else {\n        v.z += stp.z;\n        tMax.z += tDelta.z;\n      }\n    } else {\n      if (tMax.y <= tMax.z) {\n        v.y += stp.y;\n        tMax.y += tDelta.y;\n      } else {\n        v.z += stp.z;\n        tMax.z += tDelta.z;\n      }\n    }\n    if (!inBounds(v) && i != 0) return false;\n    if (getVoxel(v).a != 0.0) return true;\n  }\n  return false;\n}\n\n// Performas an intersection test between a ray and the entire scene. Fills\n// out intersection point p, normal n at p, and diffuse or emissive color c.\n// Returns NONE, LIGHT, or VOXEL according to what was hit first.\nint intersect(vec3 r0, vec3 r, out vec3 p, out vec3 n, out vec3 c) {\n  vec3 v = vec3(0);\n  bool hitVoxel = rayGridIntersect(r0, r, v);\n  float tVoxel = 0.0;\n  if (hitVoxel) {\n    rayAABB(r0, r, floor(v), floor(v) + 1.0, tVoxel);\n  }\n  float tPlayer = 0.0;\n  bool hitLight = raySphereIntersect(r0, r, playerPosition, playerRadius, tPlayer);\n  if (hitVoxel && hitLight) {\n    if (tVoxel < tPlayer) {\n      p = r0 + tVoxel * r;\n      n = rayAABBNorm(p, v);\n      if (getVoxel(v).a == 1.0/255.0) {\n        c = texture2D(tGround, rayAABBUV(p, v)).rgb;\n      } else {\n        c = texture2D(tWall, rayAABBUV(p, v)).rgb;\n      }\n      return VOXEL;\n    } else {\n      p = r0 + tPlayer * r;\n      n = normalize(p - playerPosition);\n      c = 8.0 * mix(vec3(0), vec3(playerColor), textureCube(tPlayerTexture, (lRot * vec4(n, 1)).xyz).rgb);\n      return LIGHT;\n    }\n  } else if (hitVoxel) {\n    p = r0 + tVoxel * r;\n    n = rayAABBNorm(p, v);\n    if (getVoxel(v).a == 1.0/255.0) {\n      c = texture2D(tGround, rayAABBUV(p, v)).rgb;\n    } else {\n      c = texture2D(tWall, rayAABBUV(p, v)).rgb;\n    }\n    return VOXEL;\n  } else if (hitLight) {\n    p = r0 + tPlayer * r;\n    n = normalize(p - playerPosition);\n    c = 8.0 * mix(vec3(0), vec3(playerColor), textureCube(tPlayerTexture, (lRot * vec4(n, 1)).xyz).rgb);\n    return LIGHT;\n  }\n  return NONE;\n}\n\n// Our main fragment function. Fills in a single fragment (~pixel).\nvoid main() {\n  // Calculate the inverse of the resolution to avoid multiple divisions.\n  vec2 invres = 1.0/resolution;\n\n  // Get the incoming value.\n  vec4 src = texture2D(source, gl_FragCoord.xy * invres);\n\n  // Recover NDC\n  vec2 jitter = texture2D(tJitter, tOffset + gl_FragCoord.xy * invres).ba;\n  vec4 ndc = vec4(\n    2.0 * (gl_FragCoord.xy + jitter) * invres - 1.0,\n    2.0 * gl_FragCoord.z - 1.0,\n    1.0\n  );\n\n  // Calculate clip.\n  vec4 clip = invpv * ndc;\n\n  // Calculate 3D position.\n  vec3 p3d = clip.xyz / clip.w;\n\n  // Get the initial ray.\n  vec3 r = normalize(p3d - eye);\n\n  // Abort with ambient color if we dont even hit the voxel grid.\n  float tBounds = 0.0;\n  if (!rayAABB(eye, r, vec3(0,0,0), bounds, tBounds)) {\n    gl_FragColor = src + vec4(ambient,1);\n    return;\n  }\n\n  // Scoot the initial ray origin right up to the bounds of the voxel grid.\n  vec3 r0 = eye + r * tBounds - r * epsilon;\n\n  // Initialize mask and accumulators.\n  vec3 mask = vec3(1);\n  vec3 accm = vec3(0);\n\n  // Iterate over our bounces.\n  for (int b = 0; b <= nBounces; b++) {\n    vec3 p = vec3(0);\n    vec3 n = vec3(0);\n    vec3 c = vec3(0);\n    // Perform an intersection test against the scene.\n    int type = intersect(r0, r, p, n, c);\n    if (type == NONE) {\n      // If we hit nothing, give up with the ambient color.\n      accm += mask * ambient;\n      break;\n    } else if (b == 0 && type == LIGHT) {\n      // If we hit a light source (the player), AND it's the first thing we hit,\n      // set the color and abort.\n      accm += mask * c;\n      break;\n    } else if (type == VOXEL) {\n      // We hit a voxel. Update the mask according to the texture color. Inigo\n      // Quilez would proooobably murder me for inverting the color correction\n      // we do later. What can I say? Colors still vex me.\n      mask *= pow(c, vec3(2.2));\n      vec3 r3 = texture2D(tRand3, tOffset + gl_FragCoord.xy * invres).xyz;\n      vec3 pos = playerPosition + r3 * playerRadius * 0.5;\n      vec3 _p, _n, _c;\n      // Shoot a ray at the sun.\n      vec3 sPos = normalize(vec3(cos(time), -0.1, sin(time)));\n      vec3 sc = r3 * 20.0 + 1000.0 * sPos;\n      if (intersect(p + n * epsilon, normalize(sc - (p+n*epsilon)), _p, _n, _c) == NONE) {\n        accm += mask * clamp(sin(time), 0.0, 1.0);\n      }\n      // Shoot a ray at the player.\n      if (intersect(p + n * epsilon, normalize(pos - (p + n * epsilon)), _p, _n, _c) == LIGHT) {\n        accm += mask * pow(playerRadius/distance(p, pos), 3.0) * _c;\n      }\n      // Set a new ray origin and direction.\n      r = normalize(n + r3);\n      r0 = p + epsilon * r;\n    }\n  }\n\n  gl_FragColor = src + vec4(accm, 1);\n}\n"]),
                attributes: {
                    position: ndcBox
                },
                uniforms: {
                    source: regl.prop("source"),
                    invpv: regl.prop("invpv"),
                    eye: regl.prop("eye"),
                    resolution: regl.prop("res"),
                    playerColor: regl.prop("playerColor"),
                    playerRadius: given.player.radius,
                    tJitter: tJitter,
                    tRand3: tRand3,
                    tPlayerTexture: tPlayerTexture,
                    tGround: tGround,
                    tWall: tWall,
                    tOffset: regl.prop("tOffset"),
                    tStage: stage.texture,
                    playerPosition: regl.prop("playerPosition"),
                    lRot: regl.prop("lRot"),
                    time: regl.prop("time"),
                    resStage: regl.prop("tStageSize"),
                    bounds: regl.prop("bounds")
                },
                viewport: regl.prop("viewport"),
                framebuffer: regl.prop("destination"),
                count: 6
            });
            const compositeCmd = regl({
                vert: glsl(["precision highp float;\n#define GLSLIFY 1\nattribute vec2 position;\nvarying vec2 vPos;\nvoid main() {\n  gl_Position = vec4(position, 0, 1);\n  vPos = 0.5 * position + 0.5;\n}\n"]),
                frag: glsl(["precision highp float;\n#define GLSLIFY 1\nuniform sampler2D source;\nuniform float count;\nvarying vec2 vPos;\n\nvoid main() {\n  vec4 color = texture2D(source, vPos)/count;\n  color.rgb = pow(color.rgb, vec3(1.0/2.2));\n  gl_FragColor = color;\n}\n"]),
                attributes: {
                    position: ndcBox
                },
                uniforms: {
                    source: regl.prop("source"),
                    count: regl.prop("count")
                },
                viewport: regl.prop("viewport"),
                count: 6
            });

            function setStage(s) {
                stage.width = s.size;
                stage.height = s.size;
                stage.depth = s.depth;
                stage.potSize = fitPOT(stage.width * stage.height * s.depth);
                const stageData = new Uint8Array(stage.potSize * stage.potSize);
                stageData.fill(0);
                for (let x = 0; x < stage.width; x++) {
                    for (let y = 0; y < stage.height; y++) {
                        for (let z = 0; z < stage.depth; z++) {
                            const d = s.data[[x, y, z]];
                            if (d) {
                                const i = y * stage.width * stage.depth + z * stage.width + x;
                                stageData[i] = d
                            }
                        }
                    }
                }
                stage.texture({
                    width: stage.potSize,
                    height: stage.potSize,
                    format: "alpha",
                    data: stageData
                })
            }
            let resolutionScale = mobilecheck() ? 2 * given.initialResolution : given.initialResolution;

            function onResize() {
                canvas.height = canvas.clientHeight / resolutionScale;
                canvas.width = canvas.clientWidth / resolutionScale;
                pingPong[0]({
                    width: canvas.width,
                    height: canvas.height,
                    colorType: "float"
                });
                pingPong[1]({
                    width: canvas.width,
                    height: canvas.height,
                    colorType: "float"
                })
            }
            window.addEventListener("resize", onResize);
            onResize();

            function setResolution(scale) {
                resolutionScale = scale;
                onResize()
            }

            function render(player, cam) {
                const playerPosition = [player.position[0], player.position[1], 1 + given.player.radius];
                const tilt = mobilecheck() ? 0 : 1;
                const eye = [cam[0], cam[1] - tilt, stage.depth + 4];
                const center = [eye[0], eye[1] + tilt, 0];
                const up = [0, 1, 0];
                const proj = mat4.perspective([], Math.PI / 3, canvas.width / canvas.height, .1, 1e3);
                const view = mat4.lookAt([], eye, center, up);
                const pv = mat4.multiply([], proj, view);
                const invpv = mat4.invert([], pv);
                regl.clear({
                    color: [0, 0, 0, 0],
                    framebuffer: pingPong[1 - pingPongIndex]
                });
                let time = performance.now() * 1e-5 + .1;
                let sampleCount = 4;
                for (let i = 0; i < sampleCount; i++) {
                    regl.clear({
                        depth: 1,
                        framebuffer: pingPong[pingPongIndex]
                    });
                    sampleCmd({
                        eye: eye,
                        invpv: invpv,
                        res: [canvas.width, canvas.height],
                        tOffset: vec2.random([]),
                        playerColor: player.color,
                        playerPosition: playerPosition,
                        time: time,
                        lRot: player.rotation,
                        tStageSize: stage.potSize,
                        bounds: [stage.width, stage.height, stage.depth],
                        viewport: {
                            x: 0,
                            y: 0,
                            width: canvas.width,
                            height: canvas.height
                        },
                        source: pingPong[1 - pingPongIndex],
                        destination: pingPong[pingPongIndex]
                    });
                    pingPongIndex = 1 - pingPongIndex
                }
                compositeCmd({
                    source: pingPong[1 - pingPongIndex],
                    count: sampleCount,
                    viewport: {
                        x: 0,
                        y: 0,
                        width: canvas.width,
                        height: canvas.height
                    }
                })
            }
            return {
                render: render,
                setStage: setStage,
                setResolution: setResolution
            }
        };
        const ndcBox = [-1, -1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1];

        function fitPOT(count) {
            let size = 1;
            while (size * size < count) {
                size *= 2
            }
            return size
        }

        function randVec3(size) {
            const data = new Float32Array(size * size * 3);
            for (let i = 0; i < size * size; i++) {
                let r = vec3.random([]);
                data[i * 3 + 0] = r[0];
                data[i * 3 + 1] = r[1];
                data[i * 3 + 2] = r[2]
            }
            return data
        }

        function jitter(size) {
            const data = new Float32Array(size * size * 2);
            for (let i = 0; i < size * size; i++) {
                data[i * 2 + 0] = Math.random() - .5;
                data[i * 2 + 1] = Math.random() - .5
            }
            return data
        }

        function loadImage(src) {
            return new Promise((resolve, reject) => {
                let i = new Image;
                i.onload = (() => {
                    resolve(i)
                });
                i.onerror = reject;
                i.src = src
            })
        }
    }, {
        "./given": 60,
        "gl-matrix": 1,
        glslify: 2,
        "primitive-cube": 56,
        regl: 58,
        "regl-render-envmap": 57,
        "unindex-mesh": 59
    }]
}, {}, [61]);