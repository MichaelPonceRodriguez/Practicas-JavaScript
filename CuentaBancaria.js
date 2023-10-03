class CuentaBancaria{

    constructor(saldo){
        this._saldo = saldo;
    }

    saldo(){
        return this._saldo;
    }

    newSaldo(saldo){
        this._saldo = saldo;
    }
    depositar(monto){
        this._saldo += monto;
        return "Deposito exitoso";
    }
    extraer(monto){
        if(monto > this._saldo){
            return "el monto no puede ser mayor al saldo";
        }
        else{
            this._saldo-= monto;
            return "Extraccion Exitosa"
        }
    }
}











let michael = new CuentaBancaria(100000);
console.log(michael.saldo());
console.log(michael.depositar(15000));
console.log(michael.extraer(1000000));