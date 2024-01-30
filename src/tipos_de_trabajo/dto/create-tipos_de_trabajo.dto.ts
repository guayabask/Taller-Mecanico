import { IsDecimal, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateTiposDeTrabajoDto {

    @IsString()
    @MinLength(3)
    tipo_de_trabajo: string;

    @IsNumber()
    valor_de_tipo: number;
}
