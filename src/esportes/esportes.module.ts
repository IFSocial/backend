import { Module } from '@nestjs/common';
import { EsportesController } from './esportes.controller';
import { EsportesService } from './esportes.service';

@Module({
  controllers: [EsportesController],
  providers: [EsportesService],
})
export class EsportesModule {}
