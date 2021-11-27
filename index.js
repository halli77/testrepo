

class Sepa {
    constructor () {
        this.info = 'base class';
    }

    static checkIBAN(i) {
        return `${i} is not a valid iban`;
    }
}



class SepaSct extends Sepa {
    constructor () {
        super();
    }

    getInfo() {
        return this.info;
    }
}


const sct = new SepaSct();

console.log(sct.getInfo());