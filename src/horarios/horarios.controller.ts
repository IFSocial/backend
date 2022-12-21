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
import { HorariosService } from './horarios.service';
import { Horarios } from './models/horario.model';
import { HorariocreateDto } from './dto/horarioscreate.dto';
import { HorariosupdateDto } from './dto/horario.update.dto';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<Horarios[]> {
    return this.horariosService.horariofindAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async find(@Param('id') id: string): Promise<Horarios> {
    return await this.horariosService.horariofindOne(id);
  }

  @Post('createHorarios')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() horariocreateDto: HorariocreateDto,
  ): Promise<Horarios> {
    return await this.horariosService.horariocreate(horariocreateDto);
  }

  @Put('updatehorarios/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  public async update(
    @Param('id') id: string,
    @Body() horarioupdateDto: HorariosupdateDto,
  ) {
    return await this.horariosService.horarioupdate(id, horarioupdateDto);
  }

  @Delete('deletehorarios/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return await this.horariosService.horariodelete(id);
  }
}
