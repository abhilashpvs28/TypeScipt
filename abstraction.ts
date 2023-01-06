class mobile {
    brand: string;
    price: number;
    network: string;
    earphone: mobile;

    grame() {
        console.log("HI this is Angular")
    }
}

const gadgt = new mobile;
gadgt.brand = "Nokia"
gadgt.price = 85644
gadgt.network = "5g"

const gdgt1 = new mobile;
gdgt1.brand = "Asus"
gdgt1.price = 554654
gdgt1.network = "5g"


gadgt.earphone = gdgt1;
console.log(gadgt.earphone.network)

gadgt.grame();
gdgt1.grame();