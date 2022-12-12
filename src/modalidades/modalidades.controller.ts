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
import { ModalidadecreateDto } from './dto/modalidade.create.dto';
import { ModalidadesupdateDto } from './dto/modalidade.update.dto';
import { ModalidadesService } from './modalidades.service';
import { Modalidade } from './models/modalidades.model';

@Controller('modalidades')
export class ModalidadesController {
  constructor(private readonly modalidadesService: ModalidadesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<Modalidade[]> {
    return this.modalidadesService.modalidadefindAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async find(@Param('id') id: string): Promise<Modalidade> {
    return await this.modalidadesService.modalidadefindOne(id);
  }

  @Post('createModalidades')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() modalidadecreateDto: ModalidadecreateDto,
  ): Promise<Modalidade> {
    return await this.modalidadesService.modalidadecreate(modalidadecreateDto);
  }

  @Put('updatemodalidades/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  public async update(
    @Param('id') id: string,
    @Body() modalidadeupdateDto: ModalidadesupdateDto,
  ) {
    return await this.modalidadesService.modalidadeupdate(
      id,
      modalidadeupdateDto,
    );
  }

  @Delete('deletemodalides/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return await this.modalidadesService.modalidadedelete(id);
  }
}
