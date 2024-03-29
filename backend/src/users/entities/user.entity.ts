import { RegistroDeTrabajo } from "src/registro_de_trabajos/entities/registro_de_trabajo.entity";
import { Role } from "../../common/enums/rol.enum";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_usuario: string;

    @Column({ unique:true, nullable: false })
    correo_electronico: string;

    @Column({ nullable: false, select: false })
    contraseña: string;

    @Column()
    id_pregunta_control_id: string;


    @Column( {type: 'enum', default: Role.cliente, enum: Role })
    role: string;

    @DeleteDateColumn()
    fecha_de_finalizacion: Date;

    @OneToMany(() => RegistroDeTrabajo, (registro_de_trabajo) => registro_de_trabajo.usuario_registro_)
    registro_de_trabajos_usuarios: RegistroDeTrabajo[];
}


