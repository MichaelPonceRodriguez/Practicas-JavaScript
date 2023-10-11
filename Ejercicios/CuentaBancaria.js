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

class CajaDeAhorro extends CuentaBancaria{
    
    static _extraccionesPosibles = 10;
    constructor(saldo){
        super(saldo);
    }

    extraccionesPosible(){
        return this._extraccionesPosibles;
    }
    
    extraccionesPosibles(monto){
        return this._extraccionesPosibles <= monto;
    }
    hayExtraccionesPosibles(){
        return this._extraccionesPosibles <= 10 && this._extraccionesPosibles > 0;
    }
    decrementarUnaExtraccion(){
        --this._extraccionesPosibles;
    }
    realizarExtraccion(monto){
        if(this.hayExtraccionesPosibles()){
            this._saldo -= monto;
            this.decrementarUnaExtraccion();
        }else return false;
    }
    puedoExtraer(monto){
        if(this.hayExtraccionesPosibles())return this._saldo > monto;
        else return false;
    }
}