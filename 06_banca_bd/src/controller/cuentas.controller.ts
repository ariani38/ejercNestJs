
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CuentasService } from 'src/service/cuentas.service';
 import {Response } from 'express';
import { Cuenta } from 'src/model/Cuenta';
 

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}



//endpoint que a partir del dni del cliente devuelva sus cuentas.
//si ese cliente no exsite o no tiene cuentas, que envíe un 409
@Get('buscarPorDni/:dni')
async buscarPorDni(@Param("dni")dni:number, @Res() response:Response){
const result:Cuenta[]= await this.cuentasService.findByDni(dni);
if (result.length>0){
response.status(200).json(result);
}else{
response.status(409).json([]);
}
}

@Post('alta')
altaCuenta(@Body()datos:any){
 const  cuenta:Cuenta=datos.cuenta;
 const dnis: number []=datos.dnis;
 this.cuentasService.altaCuenta(cuenta,dnis);
}


}