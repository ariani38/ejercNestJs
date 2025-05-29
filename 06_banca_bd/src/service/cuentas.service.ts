import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { equal, strictEqual } from 'assert';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { Between, In, LessThan, MoreThan, Repository } from 'typeorm';
 

@Injectable()
export class CuentasService {
  constructor(
@InjectRepository(Cuenta) private readonly cuentasRepository: Repository<Cuenta>,
@InjectRepository(Cliente) private readonly clientesRepository: Repository<Cliente>,
@InjectRepository(Movimiento) private readonly movimientosRepository: Repository<Movimiento>
) {
}

 
//cuentas asociadas al titular cuyo dni se proporciona como parámetro
async findByDni(dni:number):Promise<Cuenta[]>{
  const cliente:Cliente=await this.clientesRepository.findOne({
    
   where:{
        dni:dni
      },
      relations:["cuentas"]
    });

    if(cliente){
      return cliente.cuentas;
    }else{
      return [];
    }
    
  }

  //recibe un objeto cuenta y un array con lo dni de los titulares
 //el método dará de alta dicha cuenta y le asignará esos titulares
  async altaCuenta(cuenta:Cuenta, dniTitulares:number[]):Promise<Cuenta>{
   const clientes:Cliente[]=await this.clientesRepository.findBy({dni: In (dniTitulares) });
   cuenta.clientes=clientes;
return this.cuentasRepository.save(cuenta);

  }




}
