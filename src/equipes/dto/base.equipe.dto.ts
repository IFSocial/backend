import { IsNotEmpty, IsString } from 'class-validator';

export class BaseEquipeDto {
  @IsNotEmpty()
  @IsString()
  nomeTime: string;

  @IsNotEmpty()
  @IsString()
  nomeParticipantes: [string];

  @IsNotEmpty()
  Matricula: [string];

  @IsNotEmpty()
  @IsString()
  sexo: string;

  @IsNotEmpty()
  @IsString()
  Turma: string;

  @IsNotEmpty()
  @IsString()
  esporte: string;
}
