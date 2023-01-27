import * as mongoose from 'mongoose';

export const DataEventosSchema = new mongoose.Schema({
  dataEvento: {
    type: String,
  },
});
