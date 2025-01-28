import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioEntity } from "../entities/usuario.entity";

@Injectable()
export  class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
        private  usuariorepository: Promise<UsuarioEntity>
    ){}

    assyc findAll() : Promise <UsuarioEntity[]> {
        return await this.usuariorepository.find()
    }

    



}