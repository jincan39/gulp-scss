!function r(e, t, n) {
    function o(i, f) {
        if (!t[i]) {
            if (!e[i]) {
                var a = "function" == typeof require && require;
                if (!f && a)return a(i, !0);
                if (u)return u(i, !0);
                var c = new Error("Cannot find module '" + i + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = t[i] = {exports: {}};
            e[i][0].call(l.exports, function (r) {
                var t = e[i][1][r];
                return o(t ? t : r)
            }, l, l.exports, r, e, t, n)
        }
        return t[i].exports
    }

    for (var u = "function" == typeof require && require, i = 0; i < n.length; i++)o(n[i]);
    return o
}({
    1: [function (r, e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (r, e) {
            return Math.floor(Math.random() * (e - r + 1) + r)
        }
    }, {}], 2: [function (r, e, t) {
        "use strict";
        function n(r) {
            return r && r.__esModule ? r : {"default": r}
        }

        var o = r("./library/randomInt"), u = n(o);
        console.log((0, u["default"])(0, 100))
    }, {"./library/randomInt": 1}]
}, {}, [2]);
