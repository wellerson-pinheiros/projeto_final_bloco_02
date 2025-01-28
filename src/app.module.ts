import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaEntity } from "./categoria/entities/categoria.entity";
import { CategoriaModule } from "./categoria/categoria.module";
import { ProdutoModule } from "./produto/produto.module";
import { ProdutosEntity } from "./produto/entities/produto.entity";




@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [CategoriaEntity, ProdutosEntity],
      synchronize: true,
      logging: true,
    }),
   CategoriaModule,
   ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
