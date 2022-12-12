import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModalidadecreateDto } from './dto/modalidade.create.dto';
import { ModalidadesupdateDto } from './dto/modalidade.update.dto';
import { Modalidade } from './models/modalidades.model';

@Injectable()
export class ModalidadesService {
  constructor(
    @InjectModel('Modalidade')
    private readonly modalidadesModel: Model<Modalidade>,
  ) {}

  async modalidadefindAll(): Promise<Modalidade[]> {
    return await this.modalidadesModel.find().exec();
  }

  public async modalidadefindOne(id: string): Promise<Modalidade> {
    return await this.modalidadesModel.findById(id).exec();
  }

  public async modalidadecreate(
    modalidadecreateDto: ModalidadecreateDto,
  ): Promise<Modalidade> {
    const modalidade = new this.modalidadesModel(modalidadecreateDto);
    return modalidade.save();
  }

  async modalidadeupdate(
    id: string,
    modalidadeupdateDto: ModalidadesupdateDto,
  ): Promise<Modalidade> {
    return await this.modalidadesModel
      .findByIdAndUpdate(id, modalidadeupdateDto)
      .exec();
  }

  async modalidadedelete(id: string): Promise<Modalidade> {
    return await this.modalidadesModel.findByIdAndDelete(id).exec();
  }
}
