import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Horarios } from './models/horario.model';
import { Model } from 'mongoose';
import { HorariocreateDto } from './dto/horarioscreate.dto';
import { HorariosupdateDto } from './dto/horario.update.dto';

@Injectable()
export class HorariosService {
  constructor(
    @InjectModel('Horario')
    private readonly horariosModel: Model<Horarios>,
  ) {}

  async horariofindAll(): Promise<Horarios[]> {
    return await this.horariosModel.find().exec();
  }

  public async horariofindOne(id: string): Promise<Horarios> {
    return await this.horariosModel.findById(id).exec();
  }

  public async horariocreate(
    horariocreateDto: HorariocreateDto,
  ): Promise<Horarios> {
    const horario = new this.horariosModel(horariocreateDto);
    return horario.save();
  }

  async horarioupdate(
    id: string,
    horarioupdateDto: HorariosupdateDto,
  ): Promise<Horarios> {
    return await this.horariosModel
      .findByIdAndUpdate(id, horarioupdateDto)
      .exec();
  }

  async horariodelete(id: string): Promise<Horarios> {
    return await this.horariosModel.findByIdAndDelete(id).exec();
  }
}
