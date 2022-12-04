import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiasController } from './noticias.controller';
import { NoticiasService } from './noticias.service';
import { NoticiasSchema } from './schemas/noticias.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Noticia',
        schema: NoticiasSchema,
      },
    ]),
  ],
  controllers: [NoticiasController],
  providers: [NoticiasService],
})
export class NoticiasModule {}
