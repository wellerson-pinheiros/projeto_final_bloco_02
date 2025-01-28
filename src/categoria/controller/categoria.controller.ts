import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoriaService } from "../service/categoria.service";
import { CategoriaEntity } from "../entities/categoria.entity";

@Controller("/categorias")
export class CategoriaController {
    constructor (
        private readonly categoriaService:CategoriaService
    ){}



    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<CategoriaEntity[]> {
      return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id') id: number): Promise<CategoriaEntity> {
    return this.categoriaService.findById(id);
    }

    @Get('/tipo/:tipo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('tipo') tipo: string): Promise<CategoriaEntity[]> {
    return this.categoriaService.findByTipo(tipo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    post(@Body() categoria: CategoriaEntity): Promise<CategoriaEntity> {
    return this.categoriaService.create(categoria);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    put(@Body() categoria: CategoriaEntity): Promise<CategoriaEntity> {
    return this.categoriaService.update(categoria);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(id)
  }




}