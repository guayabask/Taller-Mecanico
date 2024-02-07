
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRegistroDeTrabajoDto {
    @IsNotEmpty()
    @IsString()
    nombre_cliente: string;

    @IsNotEmpty()
    @IsString()
    telefono_celular: string;

    @IsNotEmpty()
    @IsString()
    correo_electronico: string;

    @IsNotEmpty()
    @IsString()
    modelo_vehiculo: string;

    @IsNotEmpty()
    @IsString()
    placas: string;

    @IsNotEmpty()
    @IsString()
    año_vehiculo: string;

    @IsNotEmpty()
    @IsString()
    color_vehiculo: string;

    @IsNotEmpty()
    @IsString()
    descripcion_de_trabajo: string;

    @IsNotEmpty()
    @IsNumber()
    cantidad_de_horas: number;

    @IsNotEmpty()
    @IsNumber()
    precio_de_material: number;

    @IsNotEmpty()
    @IsNumber()
    precio_fijo: number;

    @IsNotEmpty()
    costo_total: number;

    @IsNotEmpty()
    tipo_trabajo: string;

    @IsNotEmpty()
    estatus: boolean;

    @IsNotEmpty()
    @IsNumber()
    precio_por_hora: number

    @IsNotEmpty()
    tipo_vehiculo: string;

    @IsNotEmpty()
    usuario_c: string;
}

