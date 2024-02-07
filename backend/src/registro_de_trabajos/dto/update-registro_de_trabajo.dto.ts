import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRegistroDeTrabajoDto {
    
    @IsOptional()
    @IsString()
    nombre_cliente?: string;

    @IsOptional()
    @IsString()
    telefono_celular?: string;

    @IsOptional()
    @IsString()
    correo_electronico?: string;

    @IsOptional()
    @IsString()
    modelo_vehiculo?: string;

    @IsOptional()
    @IsString()
    placas?: string;

    @IsOptional()
    @IsString()
    año_vehiculo?: string;

    @IsOptional()
    @IsString()
    color_vehiculo?: string;

    @IsOptional()
    @IsString()
    descripcion_de_trabajo?: string;

    @IsOptional()
    @IsNumber()
    cantidad_de_horas?: number;

    @IsOptional()
    @IsNumber()
    precio_de_material?: number;

    @IsOptional()
    precio_fijo:number;

    @IsOptional()
    @IsNumber()
    costo_total?: number;

    @IsOptional()
    fecha_de_finalizacion?: Date;

    //@IsNotEmpty()
    //@IsNumber()
    //mecanico?: number;

    @IsOptional()
    tipo_trabajo?: string;

    @IsOptional()
    estatus?: boolean;

    @IsOptional()
    @IsNumber()
    precio_por_hora?: number;

    @IsOptional()
    tipo_vehiculo?: string;

    @IsOptional()
    usuario_c?: string;
}
