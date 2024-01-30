import { PartialType } from '@nestjs/mapped-types';
import { CreatePrecioHoraDto } from './create-precio_hora.dto';

export class UpdatePrecioHoraDto extends PartialType(CreatePrecioHoraDto) {}
