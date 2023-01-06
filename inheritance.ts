class Parent {
    name='Akash sen';
}

class Child extends Parent{

    getName(){
        return this.name
    }
}

let saobj = new Child();
console.log(saobj.getName())