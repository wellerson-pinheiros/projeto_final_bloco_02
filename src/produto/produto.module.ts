import {Module} from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutosEntity } from "./entities/produto.entity";
import { ProdutoController } from "./controller/produto.controller";
import { ProdutoService } from "./service/produto.service";
import { CategoriaService } from "../categoria/service/categoria.service";
import { CategoriaModule } from "../categoria/categoria.module";



@Module({
    exports: [TypeOrmModule],
    providers: [ProdutoService,CategoriaService],
    controllers: [ProdutoController],
    imports: [TypeOrmModule.forFeature([ProdutosEntity]),CategoriaModule],
})
export class ProdutoModule{}