import { Document } from 'mongoose';

export interface Noticia extends Document {
  titulo: string;
  descricao: string;
  data: string;
}
