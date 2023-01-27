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
import { DataEventoService } from './data-evento.service';
import { DataEvento } from './models/data-eventos.model';
import { DataEventocreateDto } from './dto/data-eventocreate.dto';
import { DataEventosupdateDto } from './dto/data-evento.update.dto';

@Controller('data-evento')
export class DataEventoController {
  constructor(private readonly dataEventosService: DataEventoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<DataEvento[]> {
    return this.dataEventosService.dataeventosfindAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async find(@Param('id') id: string): Promise<DataEvento> {
    return await this.dataEventosService.dataeventofindOne(id);
  }

  @Post('createDataeventos')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() dataeventocreateDto: DataEventocreateDto,
  ): Promise<DataEvento> {
    return await this.dataEventosService.dataeventocreate(dataeventocreateDto);
  }

  @Put('updateDataeventos/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  public async update(
    @Param('id') id: string,
    @Body() dataeventoupdateDto: DataEventosupdateDto,
  ) {
    return await this.dataEventosService.dataeventoupdate(
      id,
      dataeventoupdateDto,
    );
  }

  @Delete('deleteDataeventos/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return await this.dataEventosService.dataeventodelete(id);
  }
}
