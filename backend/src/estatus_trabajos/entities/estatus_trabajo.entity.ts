import { RegistroDeTrabajo } from "src/registro_de_trabajos/entities/registro_de_trabajo.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class EstatusTrabajo {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ length:30 })
    tipo_estatus: string;

    @OneToMany(() => RegistroDeTrabajo, (registro_de_trabajo) => registro_de_trabajo.estatus_trabajo_)
    registro_de_trabajos_estatus: RegistroDeTrabajo[];
}
