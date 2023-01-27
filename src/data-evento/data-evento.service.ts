import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DataEvento } from './models/data-eventos.model';
import { DataEventocreateDto } from './dto/data-eventocreate.dto';
import { DataEventosupdateDto } from './dto/data-evento.update.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DataEventoService {
  constructor(
    @InjectModel('DataEvento')
    private readonly DataEvetosModel: Model<DataEvento>,
  ) {}

  async dataeventosfindAll(): Promise<DataEvento[]> {
    return await this.DataEvetosModel.find().exec();
  }

  public async dataeventofindOne(id: string): Promise<DataEvento> {
    return await this.DataEvetosModel.findById(id).exec();
  }

  public async dataeventocreate(
    dataeventocreateDto: DataEventocreateDto,
  ): Promise<DataEvento> {
    const dataevento = new this.DataEvetosModel(dataeventocreateDto);
    return dataevento.save();
  }

  async dataeventoupdate(
    id: string,
    dataeventoupdateDto: DataEventosupdateDto,
  ): Promise<DataEvento> {
    return await this.DataEvetosModel.findByIdAndUpdate(
      id,
      dataeventoupdateDto,
    ).exec();
  }

  async dataeventodelete(id: string): Promise<DataEvento> {
    return await this.DataEvetosModel.findByIdAndDelete(id).exec();
  }
}
