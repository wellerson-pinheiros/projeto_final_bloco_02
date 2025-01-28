import {   HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaEntity } from "../entities/categoria.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    categoriaService: any;
    constructor(
        @InjectRepository(CategoriaEntity)
        private categoriaRepository: Repository<CategoriaEntity>
    ){}

    async findAll(): Promise<CategoriaEntity[]>{
        return await this.categoriaRepository.find()
    }

    async findById(id: number): Promise <CategoriaEntity> {

        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            
        })

        if(!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;
    
    }

    async findByTipo(tipoCategoria: string): Promise<CategoriaEntity[]> {
        return await this.categoriaRepository.find({
            where: {
                tipoCategoria: ILike(`%${tipoCategoria}%`)
            },
            
            
        })
    }

    async create(categoria: CategoriaEntity): Promise<CategoriaEntity> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: CategoriaEntity): Promise<CategoriaEntity> {
        
        await this.findById(categoria.id);
        
        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        
        await this.findById(id);

        return await this.categoriaRepository.delete(id);

    }
    

}