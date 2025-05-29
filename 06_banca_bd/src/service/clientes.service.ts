import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimiento } from 'src/model/Movimiento';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
 

@Injectable()
export class ClientesService {
     constructor(
    @InjectRepository(Cuenta) private readonly cuentasRepository: Repository<Cuenta>,
    @InjectRepository(Cliente) private readonly clientesRepository: Repository<Cliente>,
    @InjectRepository(Movimiento) private readonly movimientosRepository: Repository<Movimiento>
    ) {
    }
    
 //
 async findByNumeroCuenta(numeroCuenta):Promise<Cliente[]>{
const cuenta:Cuenta=await this.cuentasRepository.findOne({
where:{
  numeroCuenta:numeroCuenta
},
relations:["clientes"]
});
return cuenta.clientes;
 }


}

