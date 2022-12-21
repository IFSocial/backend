import { Injectable } from '@nestjs/common';
import { Equipes } from './models/equipes.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EquipecreateDto } from './dto/equipescreate.dto';
import { EquipesupdateDto } from './dto/equipe.update.dto';

@Injectable()
export class EquipesService {
  constructor(
    @InjectModel('Equipe')
    private readonly equipesModel: Model<Equipes>,
  ) {}

  async equipefindAll(): Promise<Equipes[]> {
    return await this.equipesModel.find().exec();
  }

  public async equipefindOne(id: string): Promise<Equipes> {
    return await this.equipesModel.findById(id).exec();
  }

  public async equipecreate(
    equipecreateDto: EquipecreateDto,
  ): Promise<Equipes> {
    const equipe = new this.equipesModel(equipecreateDto);
    return equipe.save();
  }

  async equipeupdate(
    id: string,
    equipeupdateDto: EquipesupdateDto,
  ): Promise<Equipes> {
    return await this.equipesModel
      .findByIdAndUpdate(id, equipeupdateDto)
      .exec();
  }

  async equipedelete(id: string): Promise<Equipes> {
    return await this.equipesModel.findByIdAndDelete(id).exec();
  }
}
