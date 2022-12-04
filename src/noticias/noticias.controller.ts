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
import { NoticiacreateDto } from './dto/noticiascreate.dto';
import { NoticiasService } from './noticias.service';
import { Noticia } from './models/noticia.model';
import { NotciasupdateDto } from './dto/noticia.update.dto';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<Noticia[]> {
    return this.noticiasService.noticiafindAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async find(@Param('id') id: string): Promise<Noticia> {
    return await this.noticiasService.noticiafindOne(id);
  }

  @Post('createNoticias')
  @HttpCode(HttpStatus.CREATED)
  public async create(
    @Body() noticiacreateDto: NoticiacreateDto,
  ): Promise<Noticia> {
    return await this.noticiasService.noticiacreate(noticiacreateDto);
  }

  @Put('updatenoticias/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  public async update(
    @Param('id') id: string,
    @Body() noticiaupdateDto: NotciasupdateDto,
  ) {
    return await this.noticiasService.noticiaupdate(id, noticiaupdateDto);
  }

  @Delete('deletenoticias/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return await this.noticiasService.noticiadelete(id);
  }
}
