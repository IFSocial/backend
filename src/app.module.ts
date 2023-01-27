import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiasModule } from './noticias/noticias.module';
import { ModalidadesModule } from './modalidades/modalidades.module';
import { EsportesModule } from './esportes/esportes.module';
import { EquipesModule } from './equipes/equipes.module';
import { HorariosModule } from './horarios/horarios.module';
import { DataEventoModule } from './data-evento/data-evento.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    NoticiasModule,
    ModalidadesModule,
    EsportesModule,
    EquipesModule,
    HorariosModule,
    DataEventoModule,
  ],
  controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
