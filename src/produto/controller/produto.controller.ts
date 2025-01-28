import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProdutoService } from "../service/produto.service";
import { ProdutosEntity } from "../entities/produto.entity";



@Controller("/produtos")
export class ProdutoController{
    constructor(
        private readonly produtoService : ProdutoService
    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<ProdutosEntity[]> {
      return this.produtoService.findAll();
    }
  
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<ProdutosEntity> {
      return this.produtoService.findById(id);
    }
  
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNomeProduto(@Param('nome') nomeProduto: string): Promise<ProdutosEntity[]> {
      return this.produtoService.findByNomeProduto(nomeProduto);
    }
  
    @Post()
    @HttpCode(HttpStatus.CREATED)
    post(@Body() produto: ProdutosEntity): Promise<ProdutosEntity> {
      return this.produtoService.create(produto);
    }
  
    @Put()
    @HttpCode(HttpStatus.OK)
    put(@Body() produto: ProdutosEntity): Promise<ProdutosEntity> {
      return this.produtoService.update(produto);
    }
  
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.produtoService.delete(id);
    }
  



}