import * as mongoose from 'mongoose';

export const NoticiasSchema = new mongoose.Schema({
  titulo: {
    type: String,
  },
  descricao: {
    type: String,
  },
  data: {
    type: String,
  },
});
