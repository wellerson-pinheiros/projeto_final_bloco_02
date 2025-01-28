import { CategoriaEntity } from "src/categoria/entities/categoria.entity";
import { NumericTransformer } from "src/util/numerictrasforme";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name : "tb_produtos"})
export class ProdutosEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255, nullable: false})
    nomeProduto: string;

    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new 
    NumericTransformer() , nullable: false })
    preco : number;

    @Column({length: 500 , nullable: true})
    foto : string;
    
    @Column({length: 255, nullable: true})
    marca : string;

    @Column({length: 500, nullable: true})
    descricao : string;

    // @Column({nullable:true})
    //quantidadeEmEstoque: number;









    @ManyToOne(() => CategoriaEntity, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: CategoriaEntity
        //   implementação caso sobre tempo
        // quantidadeComprimido: number; implementação
        // peso: number 
        //

}