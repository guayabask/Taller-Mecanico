import { IsOptional } from "class-validator";


export class CreateUserDto {
    
    nombre_usuario: string;

    correo_electronico: string;
    
    contraseña: string;

    id_pregunta_control_id: string;

    @IsOptional()
    foto_perfil: string;

    @IsOptional()
    role: string;
}
