import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposDeVehiculoDto } from './create-tipos_de_vehiculo.dto';

export class UpdateTiposDeVehiculoDto extends PartialType(CreateTiposDeVehiculoDto) {}
