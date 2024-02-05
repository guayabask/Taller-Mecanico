import { RegistroDeTrabajo } from "src/registro_de_trabajos/entities/registro_de_trabajo.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class TiposDeVehiculo {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ length:30 })
    tipo_de_vehiculo: string;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;


    @OneToMany(() => RegistroDeTrabajo, (registro_de_trabajo) => registro_de_trabajo.tipo_de_vehiculo_)
    registro_de_trabajos_tipo_v: RegistroDeTrabajo[];
}
