import { IsInt, IsOptional, Min} from "class-validator";
import { IsNull } from "typeorm";


export class CreatePrecioHoraDto {
    @IsInt() // Valida que el valor sea un número entero
    precio_por_hora: number;
}
