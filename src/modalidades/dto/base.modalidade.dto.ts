import { IsNotEmpty, IsString } from 'class-validator';

export class BaseModalidadeDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;
}
