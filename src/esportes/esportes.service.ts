import { Injectable } from '@nestjs/common';
import { Esporte } from './models/esportes.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EsportecreateDto } from './dto/esportescreate.dto';
import { EsportesupdateDto } from './dto/esporte.update.dto';

@Injectable()
export class EsportesService {
  constructor(
    @InjectModel('Esporte')
    private readonly esportesModel: Model<Esporte>,
  ) {}

  async esportefindAll(): Promise<Esporte[]> {
    return await this.esportesModel.find().exec();
  }

  public async esportefindOne(id: string): Promise<Esporte> {
    return await this.esportesModel.findById(id).exec();
  }

  public async esporteacreate(
    esportecreateDto: EsportecreateDto,
  ): Promise<Esporte> {
    const esporte = new this.esportesModel(esportecreateDto);
    return esporte.save();
  }

  async esporteupdate(
    id: string,
    esporteupdateDto: EsportesupdateDto,
  ): Promise<Esporte> {
    return await this.esportesModel
      .findByIdAndUpdate(id, esporteupdateDto)
      .exec();
  }

  async esportedelete(id: string): Promise<Esporte> {
    return await this.esportesModel.findByIdAndDelete(id).exec();
  }
}
