interface resto {
    price:number,
    brand:string,
    items:string,
    likes:boolean,
    getlooks: ()=> string
}


let gsda:resto = {
    price:453,
    brand:"Green Aprk",
    items:"6",
    likes:true,
    getlooks: function(){
        return "lopez"
    }
}

console.log(gsda.getlooks())