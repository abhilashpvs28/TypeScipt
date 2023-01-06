export {}
class Papa{
    running;
    setHabbits(rem){
        this.running = rem
    }
}

class Brother extends Papa {

    getpers(){
        return this.running
    }
}

let outcomeobj = new Brother;
outcomeobj.setHabbits('4km')

console.log(outcomeobj.getpers())