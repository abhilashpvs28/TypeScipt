var Child = /** @class */ (function () {
    function Child() {
        this.name = 'Akash sen';
    }
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}());
var childobj = new Child();
console.log(childobj.getName());
