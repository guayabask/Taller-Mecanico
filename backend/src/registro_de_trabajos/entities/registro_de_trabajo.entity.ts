
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

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
    precio_fijo: number;

    @Column()
    costo_total: number;

    @Column()
    tipo_trabajo: string;

    @Column()
    tipo_vehiculo: string;

    @Column()
    precio_por_hora: number

    @Column()
    estatus: boolean;

    @CreateDateColumn()
    fecha_de_inicio: Date;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;
        
        //Vinculacion con tabla usuario
        @ManyToOne(() => User, (user) => user.id,{
            eager: true
        })
        usuario_registro_: User;

}