import {
  Body,
  Controller,
  
  Get,
   
  Post,
} from '@nestjs/common';
import { Item } from 'src/model/Item';
import { BuscadorService } from 'src/service/buscador.service';

 

@Controller('buscador')
export class BuscadorController {
  constructor(private readonly buscadorService: BuscadorService) {}

@Post("alta")
alta(@Body() item:Item):void{
   this.buscadorService.alta(item);
}

@Get("buscar")
buscar(tematica:string):Item[]{
 return this.buscadorService.buscar(tematica);
}

}
