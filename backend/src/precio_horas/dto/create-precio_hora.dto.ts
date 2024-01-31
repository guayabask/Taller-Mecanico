import { IsInt, Min} from "class-validator";


export class CreatePrecioHoraDto {

    @IsInt() // Valida que el valor sea un número entero
    @Min(0) // Valida que el valor sea mayor o igual a cero
    precio_por_hora: number;
}
