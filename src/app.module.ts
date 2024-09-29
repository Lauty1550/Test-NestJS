import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaModule } from './module/persona.module';
import { PersonaController } from './controller/persona.controller';

@Module({
  imports: [
    MongooseModule.forRoot()
    ,PersonaModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
