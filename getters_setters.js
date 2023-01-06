var computer = /** @class */ (function () {
    function computer() {
    }
    computer.prototype.setcompetre = function () {
        this.brand = "Asus",
            this.price = 65000;
    };
    computer.prototype.getcopmert = function () {
        console.log("my brand name is ".concat(this.brand, " & and its Price ").concat(this.price));
    };
    return computer;
}());
var ploobj = new computer;
ploobj.setcompetre();
ploobj.getcopmert();
