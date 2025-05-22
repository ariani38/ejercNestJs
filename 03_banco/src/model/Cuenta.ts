export class Cuenta{
    numeroCuenta:string;
    saldo:number;
    titular: string;
    tipoCuenta: string;
    constructor(numeroCuenta?:string, saldo?:number,titular?:string,tipoCuenta?:string){
    this.numeroCuenta=numeroCuenta;
    this.saldo=saldo;
    this.titular=titular;
    this.tipoCuenta=tipoCuenta;
  }
}