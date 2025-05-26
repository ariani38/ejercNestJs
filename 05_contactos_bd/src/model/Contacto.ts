import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NodeCompatibleEventEmitter } from './../../../node_modules/rxjs/dist/types/internal/observable/fromEvent.d';
@Entity("contactos")
export class Contacto{
    @PrimaryGeneratedColumn()//generated es porque es autoincrementable en mysql
    idContacto:number;
    @Column()
    nombre:string;
     @Column()
    email:string;
     @Column()
    telefono:string;
    constructor(idContacto?:number, nombre?:string, email?:string, telefono?:string){
        this.idContacto=idContacto;
        this.nombre=nombre;
        this.email=email;
        this.telefono=telefono;
       
    }
}