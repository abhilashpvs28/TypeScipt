var mobile = /** @class */ (function () {
    function mobile() {
    }
    mobile.prototype.grame = function () {
        console.log("HI this is Angular");
    };
    return mobile;
}());
var gadgt = new mobile;
gadgt.brand = "Nokia";
gadgt.price = 85644;
gadgt.network = "5g";
var gdgt1 = new mobile;
gdgt1.brand = "Asus";
gdgt1.price = 554654;
gdgt1.network = "5g";
gadgt.earphone = gdgt1;
console.log(gadgt.earphone.network);
gadgt.grame();
gdgt1.grame();
