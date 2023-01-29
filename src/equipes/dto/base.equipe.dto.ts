import { IsNotEmpty, IsString } from 'class-validator';

export class BaseEquipeDto {
  @IsNotEmpty()
  @IsString()
  nomeTime: string;

  @IsNotEmpty()
  nomeParticipantes: string[];

  @IsNotEmpty()
  matricula: string[];

  @IsNotEmpty()
  @IsString()
  categoria: string;

  @IsNotEmpty()
  @IsString()
  Turma: string;

  @IsNotEmpty()
  @IsString()
  esporte: string;
}
