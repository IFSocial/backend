import { Module } from '@nestjs/common';
import { EquipesController } from './equipes.controller';
import { EquipesService } from './equipes.service';
import { EquipesSchema } from './schemas/equipes.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Equipe',
        schema: EquipesSchema,
      },
    ]),
  ],
  controllers: [EquipesController],
  providers: [EquipesService],
})
export class EquipesModule {}
