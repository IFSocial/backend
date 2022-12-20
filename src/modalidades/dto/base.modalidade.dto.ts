import { IsNotEmpty, IsString } from 'class-validator';

export class BaseModalidadeDto {
  @IsNotEmpty()
  @IsString()
  modalidade: string;

  @IsNotEmpty()
  @IsString()
  sexo: string;
}
