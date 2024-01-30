
import { EstatusTrabajo } from "src/estatus_trabajos/entities/estatus_trabajo.entity";
import { PrecioHora } from "src/precio_horas/entities/precio_hora.entity";
import { TiposDeTrabajo } from "src/tipos_de_trabajo/entities/tipos_de_trabajo.entity";
import { TiposDeVehiculo } from "src/tipos_de_vehiculo/entities/tipos_de_vehiculo.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class RegistroDeTrabajo {

    @Column({ primary: true, generated: true })
    id_registro: number;

    @Column()
    nombre_cliente: string;

    @Column()
    telefono_celular: string;

    @Column()
    correo_electronico: string;

    @Column()
    modelo_vehiculo: string;

    @Column()
    placas: string;
    
    @Column()
    año_vehiculo: string;

    @Column()
    color_vehiculo: string;

    @Column()
    descripcion_de_trabajo: string;

    @Column()
    cantidad_de_horas: number;

    @Column()
    precio_de_material: number;

    @Column()
    costo_total: number;

    @CreateDateColumn()
    fecha_de_inicio: Date;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;

    
    //Vinculacion con tabla usuario
        @Column()
        id_usuario_id: number;

    //Relaciones de tablas foraneas a tabla registro_de_trabajo

        //Aparece en la tabla "registro_de_trabajo" como tipoTrabajo_id
        @ManyToOne(() => TiposDeTrabajo, (tipo_de_trabajo) => tipo_de_trabajo.id, {
            eager: true,
        })
        tipo_trabajo_: TiposDeTrabajo;

        //Aparece en la tabla "registro_de_trabajo" como estatusTrabajo_id
        @ManyToOne(() => EstatusTrabajo, (estatus_trabajo) => estatus_trabajo.id, {
            eager: true,
        })
        estatus_trabajo_: EstatusTrabajo;

        //Aparece en la tabla "registro_de_trabajo" como horaPrecio_id
        @ManyToOne(() => PrecioHora, (preciohora) => preciohora.id,{
            eager: true,
        })
        hora_precio_: PrecioHora;

        //Aparece en la tabla "registro_de_trabajo" como tipoDeVehiculo_id
        @ManyToOne (() => TiposDeVehiculo, (tipo_de_vehiculo) => tipo_de_vehiculo.id,{
            eager: true,
        })
        tipo_de_vehiculo_: TiposDeVehiculo;
    

    
}