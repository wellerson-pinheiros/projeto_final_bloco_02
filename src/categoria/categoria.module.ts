import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaEntity } from "./entities/categoria.entity";
import { CategoriaService } from "./service/categoria.service";
import { CategoriaController } from "./controller/categoria.controller";

@Module({

   imports: [TypeOrmModule.forFeature([CategoriaEntity])],
   exports: [],
   providers:[CategoriaService],
   controllers:[CategoriaController]
    
    
    
})
export class CategoriaModule{}