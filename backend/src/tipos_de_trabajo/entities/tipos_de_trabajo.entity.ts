
import { RegistroDeTrabajo } from "src/registro_de_trabajos/entities/registro_de_trabajo.entity";
import { Column, DeleteDateColumn, Entity, OneToMany } from "typeorm";

@Entity()
export class TiposDeTrabajo {

    @Column({ primary: true, generated: true })
    id: number;

    @Column({ length: 30})
    tipo_de_trabajo: string;

    @Column("decimal", { precision: 10, scale: 1 })
    valor_de_tipo: number;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;


    @OneToMany(() => RegistroDeTrabajo, (registro_de_trabajo) => registro_de_trabajo.tipo_trabajo_)
    registro_de_trabajos_tipo: RegistroDeTrabajo[];

}
