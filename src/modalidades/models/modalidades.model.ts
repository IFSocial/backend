import { Document } from 'mongoose';

export interface Modalidade extends Document {
  modalidade: string;
  sexo: string;
}
