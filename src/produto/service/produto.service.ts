import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutosEntity } from "../entities/produto.entity";
import { DeleteResult, Like, Repository } from "typeorm";
import { CategoriaService } from "src/categoria/service/categoria.service";

@Injectable()
export class ProdutoService{
    findByNome(nome: string): Promise<ProdutosEntity[]> {
      throw new Error("Method not implemented.");
    }
    
    constructor(
        @InjectRepository(ProdutosEntity)
        private produtoRepository: Repository<ProdutosEntity>,
        private categoriaService : CategoriaService
    ){}

    async findAll(): Promise<ProdutosEntity[]> {
        return await this.produtoRepository.find(
            {
                relations: {
                    categoria: true
                }
            }
        );
    }

    async findById(id: number): Promise<ProdutosEntity> {

        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
            
        });

        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto;

    }

    async findByNomeProduto(nomeProduto: string): Promise<ProdutosEntity[]> {
        return await this.produtoRepository.find({
            where: {
                nomeProduto: Like(`%${nomeProduto}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(produto: ProdutosEntity): Promise<ProdutosEntity> {

        await this.categoriaService.findById(produto.categoria.id)

        return await this.produtoRepository.save(produto);

    }

    async update(produto: ProdutosEntity): Promise<ProdutosEntity> {

        await this.findById(produto.id);

        await this.categoriaService.findById(produto.categoria.id)

        return await this.produtoRepository.save(produto);

    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.produtoRepository.delete(id);

    }

}