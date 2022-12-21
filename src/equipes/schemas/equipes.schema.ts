import * as mongoose from 'mongoose';

export const EquipesSchema = new mongoose.Schema({
  nomeTime: {
    type: String,
  },
  nomeParticipantes: {
    type: String,
  },
  Matricula: {
    type: String,
  },
  sexo: {
    type: String,
  },
  Turma: {
    type: String,
  },
});
