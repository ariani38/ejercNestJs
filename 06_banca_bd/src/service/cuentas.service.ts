import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { equal, strictEqual } from 'assert';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { Between, LessThan, MoreThan, Repository } from 'typeorm';
 

@Injectable()
export class CuentasService {
  constructor(@InjectRepository(Cuenta)
 private readonly cuentasRepository: Repository<Cuenta>){
}

 
  



}
