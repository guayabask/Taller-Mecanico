import { PartialType } from '@nestjs/mapped-types';
import { CreateEstatusTrabajoDto } from './create-estatus_trabajo.dto';

export class UpdateEstatusTrabajoDto extends PartialType(CreateEstatusTrabajoDto) {}
