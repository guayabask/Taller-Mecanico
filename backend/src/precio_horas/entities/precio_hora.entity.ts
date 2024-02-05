import { RegistroDeTrabajo } from "src/registro_de_trabajos/entities/registro_de_trabajo.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class PrecioHora {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ type: 'integer', nullable: true }) // Utiliza 'integer' para especificar un número entero
    precio_por_hora: number;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;


    @OneToMany (() => RegistroDeTrabajo, (registro_de_trabajo) => registro_de_trabajo.hora_precio_)
    precio_x_horas: RegistroDeTrabajo[];
}
