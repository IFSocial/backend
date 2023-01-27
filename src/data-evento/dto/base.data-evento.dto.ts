import { IsNotEmpty, IsString } from 'class-validator';

export class BaseDataEventoDto {
  @IsNotEmpty()
  @IsString()
  dataEvento: string;
}
