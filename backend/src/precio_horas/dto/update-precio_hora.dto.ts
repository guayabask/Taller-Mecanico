import { PartialType } from '@nestjs/mapped-types';
import { CreatePrecioHoraDto } from './create-precio_hora.dto';
import { IsInt, IsOptional } from 'class-validator';

export class UpdatePrecioHoraDto{
    @IsOptional()
    @IsInt() // Valida que el valor sea un número entero
    precio_por_hora: number;
}
