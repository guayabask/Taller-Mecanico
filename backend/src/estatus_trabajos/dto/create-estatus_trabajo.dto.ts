import { IsString, MinLength } from "class-validator";

export class CreateEstatusTrabajoDto {

    @IsString()
    @MinLength(3)
    tipo_estatus: string;
}
