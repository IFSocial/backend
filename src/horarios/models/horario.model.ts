import { Document } from 'mongoose';

export interface Horarios extends Document {
  jogos: string;
  partidaVS: string;
  data: string;
  horarios: string;
  rodada: string;
  times: string;
}
