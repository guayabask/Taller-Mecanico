import { Role } from '../../common/enums/rol.enum';

export class UpdateUserDto {
    nombre_usuario?: string;
    correo_electronico?: string;
    contraseña?: string;
    id_pregunta_control_id?: string;
    role?: string;
}