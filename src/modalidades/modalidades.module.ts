import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModalidadesController } from './modalidades.controller';
import { ModalidadesService } from './modalidades.service';
import { ModalidadesSchema } from './schemas/modalidades.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Modalidade',
        schema: ModalidadesSchema,
      },
    ]),
  ],
  controllers: [ModalidadesController],
  providers: [ModalidadesService],
})
export class ModalidadesModule {}
