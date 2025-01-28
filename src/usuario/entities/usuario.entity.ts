import { Entity, PrimaryGeneratedColumn, Column  } from 'typeorm';
import { IsNotEmpty, IsEmail, IsString, MinLength, IsDateString } from 'class-validator';

@Entity('tb_usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  nomeUsuario: string;

  @Column({ length: 255, unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({ length: 255 , nullable: false })
  @IsString()
  @MinLength(6, )
  senha: string;

  @Column({ type: 'date' })
  @IsDateString()
  dataNascimento: string;
  

  
}