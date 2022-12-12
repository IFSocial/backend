import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticiasModule } from './noticias/noticias.module';
import { ModalidadesModule } from './modalidades/modalidades.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
    NoticiasModule,
    ModalidadesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
