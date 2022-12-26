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
import { EquipesService } from './equipes.service';
import { Equipes } from './models/equipes.model';
import { EquipecreateDto } from './dto/equipescreate.dto';
import { EquipesupdateDto } from './dto/equipe.update.dto';

@Controller('equipes')
export class EquipesController {
  constructor(private readonly equipesService: EquipesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<Equipes[]> {
    return this.equipesService.equipefindAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async find(@Param('id') id: string): Promise<Equipes> {
    return await this.equipesService.equipefindOne(id);
  }

  @Post('createEquipes')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() equipecreateDto: EquipecreateDto,
  ): Promise<Equipes> {
    return await this.equipesService.equipecreate(equipecreateDto);
  }

  @Put('updateequipes/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  public async update(
    @Param('id') id: string,
    @Body() equipeupdateDto: EquipesupdateDto,
  ) {
    return await this.equipesService.equipeupdate(id, equipeupdateDto);
  }

  @Delete('deleteequipes/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return await this.equipesService.equipedelete(id);
  }
}
