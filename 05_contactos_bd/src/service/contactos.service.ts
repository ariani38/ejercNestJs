import { Delete, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from 'src/model/Contacto';
import { DeleteResult, Repository } from 'typeorm';


@Injectable()
export class ContactosService {
  constructor(@InjectRepository(Contacto)
 private readonly contactorRepository: Repository<Contacto>){
}
//no se permien contactos con el mismo email
//si se intenta con uno repetido no se dará de alta y devolverá false
async save(contacto:Contacto):Promise<boolean>{
  const resultado:Contacto=await this.contactorRepository.findOneBy({email:contacto.email})
  if(resultado){
    return false;
  }else{
      this.contactorRepository.save(contacto);
      return true;
  }

}

findByNombre(n:string):Promise<Contacto>{
  return this.contactorRepository.findOneBy({nombre:n});
}

findAll():Promise<Contacto[]>{
  return this.contactorRepository.find({})
}


async deleteByEmail(email:string):Promise<boolean>{
  const result:DeleteResult=await this.contactorRepository.delete({email:email});
   return  result.affected>0;
  
  }  
}