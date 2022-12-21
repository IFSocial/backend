import { Module } from '@nestjs/common';
import { HorariosController } from './horarios.controller';
import { HorariosService } from './horarios.service';
import { HorariosSchema } from './schemas/horarios.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Horario',
        schema: HorariosSchema,
      },
    ]),
  ],
  controllers: [HorariosController],
  providers: [HorariosService],
})
export class HorariosModule {}
