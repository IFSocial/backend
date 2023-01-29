import { Document } from 'mongoose';

export interface Esporte extends Document {
  nomeEsporte: string;
  Imagem: string;
  modalidade: string;
  multiPlayers: boolean;
}
