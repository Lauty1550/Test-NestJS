import {IsString, IsInt, Min,Max, isString, isInt} from 'class-validator';

export class CreatePersonaDto{
    @IsString()
     name: string;

     @IsInt()
     @Min(0)
     @Max(110)
     age: number;
}