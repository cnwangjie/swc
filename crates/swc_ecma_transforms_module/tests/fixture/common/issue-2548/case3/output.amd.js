define([
    "require",
    "exports",
    "./Z"
], function(require, exports, _z) {
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
        X: ()=>_z.default,
        X2: ()=>_z.X2,
        Y: ()=>_z.Y
    });
    _z = /*#__PURE__*/ _interopRequireWildcard(_exportStar(_z, exports));
});