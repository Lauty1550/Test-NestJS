import {IsString, IsInt, Min,Max, isString, isInt, IsOptional} from 'class-validator';

export class UpdatePersonaDto{
    @IsOptional()
    @IsString()
     name?: string;

     @IsOptional()
     @IsInt()
     @Min(0)
     @Max(110)
     age?: number;
}