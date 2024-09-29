import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';
import { spec } from 'node:test/reporters';
import { vd as uuidv4} from 'uuid';

export type PersonaDocument = HydratedDocument<Persona>;

@Schema()
export class Persona {
    @Prop({default: uuidv4})
    id: string;

    @Prop({ unique: true, nullable: false})
    name: string;

    @Prop()
    age: number;

}
export const PersonaSchema = SchemaFactory.createForClass(Persona);
