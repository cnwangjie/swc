(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports);
    else if (typeof define === "function" && define.amd) define([
        "exports"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.input = {});
})(this, function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "foo", {
        enumerable: true,
        get: ()=>foo
    });
    let foo = 1;
    foo = 2;
    foo += 2;
    foo -= 2;
    foo *= 2;
    foo /= 2;
    foo %= 2;
    foo <<= 2;
    foo >>= 2;
    foo >>>= 2;
    foo |= 2;
    foo ^= 2;
    foo &= 2;
    foo **= 2;
    foo &&= 2;
    foo ||= 2;
    foo ??= 2;
    [foo] = [
        2
    ];
    [foo = 3] = [];
    ({ bar: foo  } = {
        bar: 2
    });
});