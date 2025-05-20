import { Injectable } from '@nestjs/common';
import { Item } from 'src/model/Item';


@Injectable()
export class BuscadorService {
   repositorio:Item[]=[new Item("http://www.amazon.com", "compras", "todo para comprar"),
   new Item("http://www.zara.com", "moda", "todo para moda"),
   new Item("http://www.fnac.com", "libros", "todo para libros"),
    new Item("http://www.aliexpress.com", "compras", "tonterías para gastar")
       ];

  
alta(item:Item):void{
this.repositorio.push(item);
}

buscar(tematica:string):Item[]{
  return this.repositorio.filter(it=>it.tematica==tematica);
}

  

   
   
}
