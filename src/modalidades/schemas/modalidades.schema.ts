import * as mongoose from 'mongoose';

export const ModalidadesSchema = new mongoose.Schema({
  titulo: {
    type: String,
  },
  imagem: {
    type: String,
  },
});
