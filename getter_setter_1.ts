class motor {
  brand: string;
  engine: number;

  setcmot() {
    this.brand = "Royal Enfield";
    this.engine = 349;
  }

  getcmotor() {
    console.log(`My bike is ${this.brand} and it Engine CC is ${this.engine}`);
  }
}

let getcmotorobj = new motor();
getcmotorobj.setcmot();
getcmotorobj.getcmotor();
