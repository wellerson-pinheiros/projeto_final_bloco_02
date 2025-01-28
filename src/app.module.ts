import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaEntity } from "./categoria/entities/categoria.entity";
import { CategoriaModule } from "./categoria/categoria.module";




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
      entities: [CategoriaEntity],
      synchronize: true,
      logging: true,
    }),
   CategoriaModule,
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
