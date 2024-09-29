import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Persona } from 'src/schemas/persona.schema';
import { CreatePersonaDto } from "src/dto/create.persona.dto";
import { UpdatePersonaDto } from 'src/dto/update.persona.dto';

@Injectable()
export class PersonaService {
    constructor(@InjectModel(Persona.name) private personaModel: Model<Persona>) { }

    async create(createPersonaDto: CreatePersonaDto): Promise<Persona> {
        const newPersona = new this.personaModel(createPersonaDto);
        return newPersona.save();
    }

    async findAll(): Promise<Persona[]> {
        return this.personaModel.find().exec();
    }

    async findOne(id: string): Promise<Persona | null> {
        return this.personaModel.findById(id).exec();
      }
      

    async update(id: String, updatePersonaDto: UpdatePersonaDto): Promise<Persona> {
        return this.personaModel.findByIdAndUpdate(id , updatePersonaDto, { new: true }).exec();
    }

    async remove(id: string): Promise<any> {
        return this.personaModel.deleteOne({_id: id }).exec();
    }
}
