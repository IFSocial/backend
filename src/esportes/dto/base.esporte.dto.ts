import { IsNotEmpty, IsString } from 'class-validator';

export class BaseEsporteDto {
  @IsNotEmpty()
  @IsString()
  nomeEsporte: string;

  @IsNotEmpty()
  @IsString()
  Imagem: string;

  @IsNotEmpty()
  @IsString()
  modalidade: string;

  multiPlayers: boolean;
}
