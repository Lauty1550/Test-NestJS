import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaModule } from './module/persona.module';
import { PersonaController } from './controller/persona.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lauty:qazpoeazClewa8W3@ingenieria.jwq3s.mongodb.net/Test?retryWrites=true&w=majority&appName=Ingenieria')
    ,PersonaModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
