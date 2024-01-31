import { IsString, MinLength } from "class-validator";

export class CreateTiposDeVehiculoDto {
    @IsString()
    @MinLength(3)
    tipo_de_vehiculo: string;
}
