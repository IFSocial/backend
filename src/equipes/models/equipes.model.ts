import { Document } from 'mongoose';

export interface Equipes extends Document {
  nomeTime: string;
  nomeParticipantes: string[];
  matricula: string[];
  categoria: string;
  turma: string;
  esporte: string;
}
