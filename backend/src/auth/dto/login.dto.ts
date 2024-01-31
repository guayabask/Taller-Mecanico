import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class LoginDto {

    @IsEmail()
    correo_electronico: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(3)
    contraseña: string;
    
}