class computer {
    brand: string
    price: number


    setcompetre() {
        this.brand = "Asus",
            this.price = 65000
    }

    getcopmert() {
        console.log(`my brand name is ${this.brand} & and its Price ${this.price}`)
    }
}

var ploobj = new computer;
ploobj.setcompetre();
ploobj.getcopmert();