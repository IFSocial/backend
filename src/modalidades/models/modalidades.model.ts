import { Document } from 'mongoose';

export interface Modalidade extends Document {
  imagem: string;
  modalidade: string;
}
