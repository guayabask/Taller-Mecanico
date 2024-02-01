import { IsOptional } from "class-validator";


export class CreateUserDto {
    
    nombre_usuario: string;

    correo_electronico: string;
    
    contraseña: string;

    @IsOptional()
    id_pregunta_control_id: string;

    @IsOptional()
    role: string;
}
