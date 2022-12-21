import * as mongoose from 'mongoose';

export const ModalidadesSchema = new mongoose.Schema({
  imagem: {
    type: String,
  },
  modalidade: {
    type: String,
  },
});
