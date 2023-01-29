import * as mongoose from 'mongoose';

export const EquipesSchema = new mongoose.Schema({
  nomeTime: {
    type: String,
  },
  nomeParticipantes: {
    type: [String],
  },
  matricula: {
    type: [String],
  },
  categoria: {
    type: String,
  },
  turma: {
    type: String,
  },
  esporte: {
    type: String,
  },
});
