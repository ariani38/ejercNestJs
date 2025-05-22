 
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';
import { BancoService } from 'src/service/banco.service';
import { Response } from 'express';
 

@Controller('banco')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}


@Post("alta")
altaCuenta (@Body() cuenta:Cuenta, @Res() response:Response):void{
 const resultado:boolean= this.bancoService.altaCuenta(cuenta);
 if(resultado){
//devolvemos codigo 200
response.status(200).send();
 }else{
//devolvemos codigo 409
response.status(409).send();
 }

}

@Get("buscarSalMin/:saldoMin")
buscarSalMin(@Param("saldoMin") saldoMin:number):Cuenta[]{
  return this.bancoService.buscarSalMin(saldoMin);
}

@Get("buscarCuenta/:numeroCuenta")
buscarCuenta(@Param("numeroCuenta") numeroCuenta:string, @Res () response: Response):any{
  const cuenta:Cuenta= this.bancoService.buscarCuenta(numeroCuenta);
  if (cuenta){
    return response.status(200).json(cuenta);
  }else{
    return response.status(418).json(new Cuenta());
  }
}


@Get("buscarCuentaTipo/:tipo")
buscarCuentaTipo(@Param("tipo") tipo:string):Cuenta[]{
  return this.bancoService.buscarCuentaTipo(tipo);
}
@Delete('eliminar/:numeroCuenta')
eliminar(@Param ('numeroCuenta') numeroCuenta:string):void{
  this.bancoService.eliminar(numeroCuenta);
}

}