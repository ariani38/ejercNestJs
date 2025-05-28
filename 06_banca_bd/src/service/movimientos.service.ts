import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { Between, MoreThan, Repository } from 'typeorm';
 

@Injectable()
export class MovimientosService {
  constructor(@InjectRepository(Movimiento)
 private readonly movimientosRepository: Repository<Movimiento>){
}

save(movimiento:Movimiento): void{
 this.movimientosRepository.save(movimiento);
}

  findAll():Promise<Movimiento[]>{
    return this.movimientosRepository.find();
  }

  findByIdCuenta(idCuenta:number):Promise<Movimiento[]>{
  return this.movimientosRepository.find({
    where:{
        cuenta:{
            numeroCuenta:idCuenta
        }
    },
    relations: ["movimientos"]
  });
 } 

//Listado de movimientos realizados por cuentas 
// cuyo saldo sea superior a una determinada cantidad 
findMovBySaldo(saldoMin:number):Promise<Movimiento[]>{
  return this.movimientosRepository.find( {
  where:{
        cuenta:{
            saldo:MoreThan(saldoMin)
        }
    },
    relations: ["cuenta"]
  });
}
  //Listado de cuentas en las que se
//  hayan realizado extracciones superiores a una determinada cantidad
async FindByExtraccion(extrSup:number):Promise<Cuenta[]>{
const movimientos:Movimiento[]=await this.movimientosRepository.find({
  where:{
        operacion:"extraccion",
       cantidad:MoreThan(extrSup)
    
    },
    relations: ["cuenta"]
  });
  return movimientos.map(m=>m.cuenta);
}




//mov entre fechas 
   findByRange(fecha1: Date, fecha2:Date): Promise<Movimiento[]> {
  return this.movimientosRepository.findBy({ fecha:Between ( fecha1 , fecha2 ) })
  } 

//listado de cuentas que hayan tenido movimientos en una deter fecha
 async findMovByFecha(fecha1:Date,fecha2:Date):Promise<Cuenta[]>{
  const movimientos:Movimiento[]=await this.movimientosRepository.find({
    where:{
       
        fecha: Between(fecha1, fecha2)
      },
     
    relations: ["cuenta"],
  }); 
 return movimientos.map(m=>m.cuenta);
}
 
}
