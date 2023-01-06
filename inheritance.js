"use strict";
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
exports.__esModule = true;
var Papa = /** @class */ (function () {
    function Papa() {
    }
    Papa.prototype.setHabbits = function (rem) {
        this.running = rem;
    };
    return Papa;
}());
var Brother = /** @class */ (function (_super) {
    __extends(Brother, _super);
    function Brother() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Brother.prototype.getpers = function () {
        return this.running;
    };
    return Brother;
}(Papa));
var outcomeobj = new Brother;
outcomeobj.setHabbits('4km');
console.log(outcomeobj.getpers());
