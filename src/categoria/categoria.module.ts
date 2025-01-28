import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaEntity } from "./entities/categoria.entity";

@Module({

   imports: [TypeOrmModule.forFeature([CategoriaEntity])],
   exports: [],
   providers:[],
   controllers:[]
    
    
    
})
export class CategoriaModule{}