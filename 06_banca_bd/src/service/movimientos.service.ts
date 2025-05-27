import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimiento } from 'src/model/Movimiento';
import { Between, Repository } from 'typeorm';
 

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

  findByIdCuenta(idCuenta: number): Promise<Movimiento[]> {
    return this.movimientosRepository.findBy({idCuenta:idCuenta})
  }

   findByRange(fecha1: Date, fecha2:Date): Promise<Movimiento[]> {
  return this.movimientosRepository.findBy({ fecha:Between ( fecha1 , fecha2 ) })
  } 

 
}
