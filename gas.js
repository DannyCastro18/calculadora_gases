class Gas {
    
    constructor(presion, volumen, temperatura, masaMolecular) {
        this._presion = presion;
        this._volumen = volumen;
        this._temperatura = temperatura;
        this._masaMolecular = masaMolecular;
        this._R = 0.0821 ;
    }

    get presion() { 
        return this._presion;
    }

    get volumen() {
        return this._volumen;
    }

    get temperatura() {
        return this._temperatura;
    }

    get masaMolecular() {
        return this._masaMolecular;
    }

    set presion(presion) {
        this._presion = presion;
    }

    set volumen(volumen) {
        this._volumen = volumen;
    }

    set temperatura(temperatura) {
        this._temperatura = temperatura;
    }
    
    set masaMolecular(masaM){
        this._masaMolecular = masaM;
    }

    calcularMasa() { 
        let n = (this._presion * this._volumen) / (this._R  * this._temperatura);
        let masa = n * this._masaMolecular;
        return masa;
    }
}

let presion = 8;


let volumen = 16;
let temperatura = 230;
let masaMolecular = 22;
let gas = new Gas(presion, volumen, temperatura, masaMolecular);
let masa = gas.calcularMasa();
console.log(`La masa del gas es de: ${masa} gramos`) 

