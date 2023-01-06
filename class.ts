/* Class in typescript
    Define A class
    Create a Object For class
    Make property
    Make FUnction
    Define Data type of Function and property
    Define Data type to params
    */

class polk {
    name:string = "Bazighar";
    constructor (namghye:string){
        this.name=namghye
    }
    getname():string
    {
       return  this.name
    }
}
let sdaobj = new polk("sheik");
console.warn(sdaobj.getname())


