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
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        foo: ()=>foo,
        foo2: ()=>foo2,
        bar: ()=>bar,
        foo3: ()=>foo3,
        foo4: ()=>foo4,
        foo5: ()=>foo5,
        foo6: ()=>foo6,
        foo7: ()=>foo7,
        foo8: ()=>foo8,
        foo9: ()=>foo9
    });
    var foo = 1;
    var foo2 = 1, bar = 2;
    var foo3 = function() {};
    var foo4;
    let foo5 = 2;
    let foo6;
    const foo7 = 3;
    function foo8() {}
    class foo9 {
    }
});