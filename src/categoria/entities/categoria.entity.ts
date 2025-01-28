import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: "tb_categoria"})
export class CategoriaEntity{

@PrimaryGeneratedColumn()    
id: number;

@IsNotEmpty()
@Column({length: 255, nullable: false})
nomeCategoria: string;

@Column({length: 255, nullable: true})
descricao: string;

}