import { Module } from '@nestjs/common';
import { EsportesController } from './esportes.controller';
import { EsportesService } from './esportes.service';
import { EsportesSchema } from './schemas/esportes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Esporte',
        schema: EsportesSchema,
      },
    ]),
  ],
  controllers: [EsportesController],
  providers: [EsportesService],
})
export class EsportesModule {}
