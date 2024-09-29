import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, BadRequestException, HttpStatus } from "@nestjs/common";
import { PersonaService } from "src/service/persona.service";
import { CreatePersonaDto } from "src/dto/create.persona.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdatePersonaDto } from "src/dto/update.persona.dto";
import { isValidObjectId } from "mongoose";

@ApiTags('Personas') 
@Controller ('personas')
export class PersonaController {
    constructor(private personaService: PersonaService){}

    @Post('Crear')
    @ApiOperation({ summary: 'Crear una persona' })
    async create (@Body() createPersonaDto: CreatePersonaDto){
        const persona = await this.personaService.create(createPersonaDto);
        return { status: HttpStatus.OK, messege: 'Persona Creada exitosamente'};
    }
    
    @Get('Get-All')
    @ApiOperation({ summary: 'Obtener todas las personas' })
    async findAll(){
        return this.personaService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Obtener una persona por Id'})
    async findOne(@Param('id') id:string){
        if (!isValidObjectId(id)) {
            throw new BadRequestException(`El ID ${id} no es válido`);
        }

        const persona = await this.personaService.findOne(id);
        if (!persona){
            throw new NotFoundException('Persona no encontrada');
        }
        return  { status: HttpStatus.OK,persona};
    }

    @Put('Actualizar/:id')
    @ApiOperation({summary: 'Actualizar una persona'})
    async update(@Param ('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto){
        if (!isValidObjectId(id)){
            throw new BadRequestException(`El ID ${id} no es valido`);
        }
        const persona = await this.personaService.update(id,updatePersonaDto);
        if (!persona){
            throw new NotFoundException('Persona no encontrada');
        }
        return  { status: HttpStatus.OK,persona};
    }

    @Delete('/Borrar/:id')
    @ApiOperation({summary: 'Eliminar una persona'})
    async remove(@Param('id') id:string) {
        if (!isValidObjectId(id)){
            throw new BadRequestException(`EL ID ${id} no es valido`);
        }
        const result = await this.personaService.remove(id);

        if (result.deletedCount === 0){
            throw new NotFoundException('Persona no encontrada');
        }
        return { status: HttpStatus.OK, message: 'Persona eliminada exitosamente' };
    }
    
}