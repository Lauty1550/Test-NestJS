import {Module} from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import {PersonaController} from "../controller/persona.controller";
import {PersonaService} from "../service/persona.service";
import {Persona, PersonaSchema} from "../schemas/persona.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Persona.name, schema: PersonaSchema}])],
    controllers: [PersonaController],
    providers: [PersonaService],
})
export class PersonaModule{}