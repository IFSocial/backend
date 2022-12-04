import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Noticia } from './models/noticia.model';
import { NoticiacreateDto } from './dto/noticiascreate.dto';
import { NotciasupdateDto } from './dto/noticia.update.dto';

@Injectable()
export class NoticiasService {
  constructor(
    @InjectModel('Noticia')
    private readonly noticiasModel: Model<Noticia>,
  ) {}

  async noticiafindAll(): Promise<Noticia[]> {
    return await this.noticiasModel.find().exec();
  }

  public async noticiafindOne(id: string): Promise<Noticia> {
    return await this.noticiasModel.findById(id).exec();
  }

  public async noticiacreate(
    noticiacreateDto: NoticiacreateDto,
  ): Promise<Noticia> {
    const noticia = new this.noticiasModel(noticiacreateDto);
    return noticia.save();
  }

  async noticiaupdate(
    id: string,
    noticiaupdateDto: NotciasupdateDto,
  ): Promise<Noticia> {
    return await this.noticiasModel
      .findByIdAndUpdate(id, noticiaupdateDto)
      .exec();
  }

  async noticiadelete(id: string): Promise<Noticia> {
    return await this.noticiasModel.findByIdAndDelete(id).exec();
  }
}
