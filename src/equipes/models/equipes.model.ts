import { Document } from 'mongoose';

export interface Equipes extends Document {
  nomeTime: string;
  nomeParticipantes: string;
  Matricula: string;
  sexo: string;
  Turma: string;
}
