import { IsNotEmpty } from "class-validator";
import { ProdutosEntity } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: "tb_categoria"})
export class CategoriaEntity{

@PrimaryGeneratedColumn()    
id: number;

@IsNotEmpty()
@Column({length: 255, nullable: false})
tipoCategoria: string;

@Column({length: 500, nullable: true})
descricao: string;

@OneToMany(() => ProdutosEntity, (produto) => produto.categoria)
    produto: ProdutosEntity[]

}