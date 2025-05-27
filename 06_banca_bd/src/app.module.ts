import { Module } from '@nestjs/common';
 
import { MovimientosController } from './controller/movimientos.controller';
import { MovimientosService } from './service/movimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './model/Movimiento';

@Module({
imports: [TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'admin',
password: 'admin',
database: 'bancabd',
entities: [Movimiento],
synchronize: false,
}),TypeOrmModule.forFeature([Movimiento])],
controllers: [MovimientosController],
providers: [MovimientosService],
})

 
export class AppModule {}
