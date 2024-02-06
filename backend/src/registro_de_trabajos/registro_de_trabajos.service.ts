import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateRegistroDeTrabajoDto } from './dto/create-registro_de_trabajo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroDeTrabajo } from './entities/registro_de_trabajo.entity';
import { TiposDeTrabajo } from 'src/tipos_de_trabajo/entities/tipos_de_trabajo.entity';
import { EstatusTrabajo } from 'src/estatus_trabajos/entities/estatus_trabajo.entity';
import { PrecioHora } from 'src/precio_horas/entities/precio_hora.entity';
import { TiposDeVehiculo } from 'src/tipos_de_vehiculo/entities/tipos_de_vehiculo.entity';
import { User } from 'src/users/entities/user.entity';
import { UpdateRegistroDeTrabajoDto } from './dto/update-registro_de_trabajo.dto';

@Injectable()
export class RegistroDeTrabajosService {

  constructor(

    @InjectRepository(RegistroDeTrabajo)
    private readonly registrodetrabajoRepository: Repository<RegistroDeTrabajo>,

    @InjectRepository(TiposDeTrabajo)
    private readonly tiposdetrabajoRepository: Repository<TiposDeTrabajo>,

    @InjectRepository(EstatusTrabajo)
    private readonly estatustrabajoRepository: Repository<EstatusTrabajo>,

    @InjectRepository (PrecioHora)
    private readonly preciohoraRepository: Repository<PrecioHora>,

    @InjectRepository(TiposDeVehiculo)
    private readonly tipovehiculoRepository: Repository<TiposDeVehiculo>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

  ) { }

  async create(createRegistroDeTrabajoDto: CreateRegistroDeTrabajoDto) {
    
    //Envio de datos de tabla tipo de trabajo
    const tipo_trabajo_ = await this.tiposdetrabajoRepository.findOneBy({ tipo_de_trabajo: createRegistroDeTrabajoDto.tipo})

    const estatus_trabajo_ = await this.estatustrabajoRepository.findOneBy({ tipo_estatus: createRegistroDeTrabajoDto.estatus})

    const hora_precio_ = await this.preciohoraRepository.findOneBy({ precio_por_hora: +createRegistroDeTrabajoDto.precio_hora });

    const tipo_de_vehiculo_ = await this.tipovehiculoRepository.findOneBy({ tipo_de_vehiculo: createRegistroDeTrabajoDto.tipo_vehiculo})

    const usuario_registro_ = await this.userRepository.findOneBy({ nombre_usuario : createRegistroDeTrabajoDto.usuario_c})

    if (!hora_precio_){
      throw new BadRequestException("Precio por hora inexistente")
    }
    if (!tipo_trabajo_ ){
      throw new BadRequestException("No existe ese tipo de chamba brother")
    }
    if (!estatus_trabajo_ ){
      throw new BadRequestException("No existe ese tipo de estatus brother")
    }
    if (!tipo_de_vehiculo_ ){
      throw new BadRequestException("No existe ese tipo de estatus brother")
    }

    if (!usuario_registro_){
      throw new BadRequestException("No existe ese usuario brother")
    }

    
    return await this.registrodetrabajoRepository.save({
      ...createRegistroDeTrabajoDto,
      tipo_trabajo_,
      estatus_trabajo_,
      hora_precio_,
      tipo_de_vehiculo_,
      usuario_registro_
    })

  }

  async findAll() {
    return await this.registrodetrabajoRepository.find();
  }

  async findOne(id_registro: number) {
    return await this.registrodetrabajoRepository.findOneBy({id_registro});
  }

  async update(id_registro: number, updateRegistroDeTrabajoDto: UpdateRegistroDeTrabajoDto) {
    const registro = await this.registrodetrabajoRepository.findOneBy({id_registro});

    if (!registro) {
      throw new BadRequestException("Registro de trabajo no encontrado");
    }

    return await this.registrodetrabajoRepository.update({id_registro}, updateRegistroDeTrabajoDto)
  }

  async remove(id_registro: number) {
    return await this.registrodetrabajoRepository.softDelete({ id_registro })
  }
}
