import * as mongoose from 'mongoose';

export const ModalidadesSchema = new mongoose.Schema({
  modalidade: {
    type: String,
  },
  sexo: {
    type: String,
  },
});
