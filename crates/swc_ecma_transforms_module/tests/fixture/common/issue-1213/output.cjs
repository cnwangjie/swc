"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>NotOK
});
const _foo = /*#__PURE__*/ _interopRequireDefault(require("foo"));
class OK {
    constructor(){
        console.log(_foo.default);
    }
}
class NotOK {
    constructor(){
        console.log(_foo.default);
    }
}