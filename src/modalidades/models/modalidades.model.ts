import { Document } from 'mongoose';

export interface Modalidade extends Document {
  titulo: string;
  imagem: string;
}
