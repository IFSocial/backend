import { IsNotEmpty, IsString } from 'class-validator';

export class BaseNoticiaDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  data: string;
}
