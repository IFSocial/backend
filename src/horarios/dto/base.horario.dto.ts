import { IsNotEmpty, IsString } from 'class-validator';

export class BaseHorarioDto {
  @IsNotEmpty()
  @IsString()
  jogos: string;

  @IsNotEmpty()
  @IsString()
  partidaVS: string;

  @IsNotEmpty()
  data: string;

  @IsNotEmpty()
  @IsString()
  horarios: string;

  @IsNotEmpty()
  @IsString()
  rodada: string;

  @IsNotEmpty()
  @IsString()
  times: string;
}
