/* Class in typescript
    Define A class
    Create a Object For class
    Make property
    Make FUnction
    Define Data type of Function and property
    Define Data type to params
    */
var polk = /** @class */ (function () {
    function polk(namghye) {
        this.name = "Bazighar";
        this.name = namghye;
    }
    polk.prototype.getname = function () {
        return this.name;
    };
    return polk;
}());
var sdaobj = new polk("sheik");
console.warn(sdaobj.getname());
