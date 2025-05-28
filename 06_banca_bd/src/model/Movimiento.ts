import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Cuenta } from "./Cuenta";

@Entity('movimientos')
export class Movimiento{
@PrimaryGeneratedColumn()
idMovimiento:number

@Column()
fecha:Date;
@Column()
cantidad: number;
@Column()
operacion:string;

@ManyToOne(() => Cuenta,
              cuenta => cuenta.movimientos)
@JoinColumn({name: 'idCuenta', referencedColumnName: 'numeroCuenta'})
cuenta:Cuenta;

constructor(idMovimiento?:number,  cuenta?:Cuenta, fecha?:Date, cantidad?:number, operacion?:string){
    this.idMovimiento = idMovimiento= idMovimiento || 0; 
    this.fecha = fecha  || new Date();
    this.cantidad = cantidad|| 0;
    this.operacion = operacion|| '';
    this.cuenta = cuenta|| null; 
  }
  
}