import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EsportesService } from './esportes.service';
import { Esporte } from './models/esportes.model';
import { EsportecreateDto } from './dto/esportescreate.dto';
import { EsportesupdateDto } from './dto/esporte.update.dto';

@Controller('esportes')
export class EsportesController {
  constructor(private readonly esportesService: EsportesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<Esporte[]> {
    return this.esportesService.esportefindAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async find(@Param('id') id: string): Promise<Esporte> {
    return await this.esportesService.esportefindOne(id);
  }

  @Post('createEsportes')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() esportecreateDto: EsportecreateDto,
  ): Promise<Esporte> {
    return await this.esportesService.esporteacreate(esportecreateDto);
  }

  @Put('updateesportes/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  public async update(
    @Param('id') id: string,
    @Body() esporteupdateDto: EsportesupdateDto,
  ) {
    return await this.esportesService.esporteupdate(id, esporteupdateDto);
  }

  @Delete('deleteesportes/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return await this.esportesService.esportedelete(id);
  }
}
