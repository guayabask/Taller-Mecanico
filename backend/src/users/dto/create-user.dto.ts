import { IsEmail, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
    
    @IsString()
    nombre_usuario: string;

    @IsEmail()
    correo_electronico: string;
    
    @IsString()
    contraseña: string;

    @IsOptional()
    id_pregunta_control_id: string;

    @IsOptional()
    role: string;
}
