import { Transform } from "class-transformer";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class RegisterDto{
    @IsString()
    nombre_usuario: string;

    @IsEmail()
    correo_electronico: string;

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(3)
    contraseña: string;
    
    @IsString()
    id_pregunta_control_id: string;

    @IsString()
    @IsOptional()
    foto_perfil: string;

    @IsString()
    @IsOptional()
    role: string;
}
