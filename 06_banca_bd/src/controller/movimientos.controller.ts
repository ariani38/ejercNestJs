import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movimiento } from 'src/model/Movimiento';
import { MovimientosService } from 'src/service/movimientos.service';
 

@Controller('movimientos')
export class MovimientosController {
  constructor(private readonly movimientosService: MovimientosService) {}

  @Post("alta")
  create(@Body()movimiento:Movimiento) {
    return this.movimientosService.save(movimiento );
  }

  @Get("buscarPorCuenta/:idCuenta")
  findByIdCuenta(@Param('idCuenta')idCuenta:number) {
    return this.movimientosService.findByIdCuenta(idCuenta);
  }

  @Get('fechas')
  findByFecha(@Query ('fecha1') fecha1: Date,@Query('fecha2')fecha2:Date) {
    return this.movimientosService.findByRange(fecha1,fecha2);
  }

  @Get('cuentasFechas')
  findCuentasByFecha(@Query ('fecha1') fecha1: Date,@Query('fecha2')fecha2:Date) {
    return this.movimientosService.findByRange(fecha1,fecha2);
  }
   
}
