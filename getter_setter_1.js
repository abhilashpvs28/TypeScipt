var motor = /** @class */ (function () {
    function motor() {
    }
    motor.prototype.setcmot = function () {
        this.brand = "Royal Enfield";
        this.engine = 349;
    };
    motor.prototype.getcmotor = function () {
        console.log("My bike is ".concat(this.brand, " and it Engine CC is ").concat(this.engine));
    };
    return motor;
}());
var getcmotorobj = new motor;
getcmotorobj.setcmot();
getcmotorobj.getcmotor();
