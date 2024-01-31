import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRegistroDeTrabajoDto {
    @IsNotEmpty()
    @IsString()
    nombre_cliente?: string;

    @IsNotEmpty()
    @IsString()
    telefono_celular?: string;

    @IsNotEmpty()
    @IsString()
    correo_electronico?: string;

    @IsNotEmpty()
    @IsString()
    modelo_vehiculo?: string;

    @IsNotEmpty()
    @IsString()
    placas?: string;

    @IsNotEmpty()
    @IsString()
    año_vehiculo?: string;

    @IsNotEmpty()
    @IsString()
    color_vehiculo?: string;

    @IsNotEmpty()
    @IsString()
    descripcion_de_trabajo?: string;

    @IsNotEmpty()
    @IsNumber()
    cantidad_de_horas?: number;

    @IsNotEmpty()
    @IsNumber()
    precio_de_material?: number;

    @IsNotEmpty()
    @IsNumber()
    costo_total?: number;

    @IsOptional()
    fecha_de_finalizacion?: Date;

    //@IsNotEmpty()
    //@IsNumber()
    //mecanico?: number;

    @IsOptional()
    tipo?: string;

    @IsOptional()
    estatus?: string;

    @IsOptional()
    @IsNumber()
    precio_hora?: number;

    @IsOptional()
    tipo_vehiculo?: string;
}
