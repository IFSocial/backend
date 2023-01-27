import { Module } from '@nestjs/common';
import { DataEventoController } from './data-evento.controller';
import { DataEventoService } from './data-evento.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DataEventosSchema } from './schemas/data-eventos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'DataEvento',
        schema: DataEventosSchema,
      },
    ]),
  ],
  controllers: [DataEventoController],
  providers: [DataEventoService],
})
export class DataEventoModule {}
