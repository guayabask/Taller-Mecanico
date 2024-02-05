import { RegistroDeTrabajo } from "src/registro_de_trabajos/entities/registro_de_trabajo.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class EstatusTrabajo {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ length:30 })
    tipo_estatus: string;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;

    @OneToMany(() => RegistroDeTrabajo, (registro_de_trabajo) => registro_de_trabajo.estatus_trabajo_)
    registro_de_trabajos_estatus: RegistroDeTrabajo[];
}
