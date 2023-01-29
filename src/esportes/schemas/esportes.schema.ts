import * as mongoose from 'mongoose';

export const EsportesSchema = new mongoose.Schema({
  nomeEsporte: {
    type: String,
  },
  Imagem: {
    type: String,
  },
  modalidade: {
    type: String,
  },
  multiPlayers: {
    type: Boolean,
  },
});
