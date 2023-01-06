var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lemonnn1 = /** @class */ (function () {
    function lemonnn1() {
    }
    lemonnn1.prototype.mathoper = function (a, b) {
        console.log(a + b);
    };
    return lemonnn1;
}());
var appleee1 = /** @class */ (function (_super) {
    __extends(appleee1, _super);
    function appleee1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    appleee1.prototype.mathoper = function (a, b) {
        console.log(a * b);
    };
    return appleee1;
}(lemonnn1));
var lemonobj = new lemonnn1;
var appleobj = new appleee1;
lemonobj.mathoper(6, 4);
appleobj.mathoper(6, 4);
