import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposDeTrabajoDto } from './create-tipos_de_trabajo.dto';

export class UpdateTiposDeTrabajoDto extends PartialType(CreateTiposDeTrabajoDto) {}
