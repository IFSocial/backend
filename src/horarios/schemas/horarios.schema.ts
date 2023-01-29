import * as mongoose from 'mongoose';

export const HorariosSchema = new mongoose.Schema({
  jogos: {
    type: String,
  },
  partidaVS: {
    type: String,
  },
  data: {
    type: String,
  },
  horarios: {
    type: String,
  },
  rodada: {
    type: String,
  },
  times: {
    type: String,
  },
});
