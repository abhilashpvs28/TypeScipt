class lemonnn1 {
    mathoper(a: number, b: number) {
        console.log(a + b);
    }
}

class appleee1 extends lemonnn1 {
    mathoper(a: number, b: number) {
        console.log(a * b);
    }
}

var lemonobj = new lemonnn1;
var appleobj = new appleee1;

lemonobj.mathoper(6, 4);
appleobj.mathoper(6, 4);
