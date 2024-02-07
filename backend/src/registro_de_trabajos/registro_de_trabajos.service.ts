import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateRegistroDeTrabajoDto } from './dto/create-registro_de_trabajo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroDeTrabajo } from './entities/registro_de_trabajo.entity';
import { User } from 'src/users/entities/user.entity';
import { UpdateRegistroDeTrabajoDto } from './dto/update-registro_de_trabajo.dto';

@Injectable()
export class RegistroDeTrabajosService {
  constructor(
    @InjectRepository(RegistroDeTrabajo)
    private readonly registrodetrabajoRepository: Repository<RegistroDeTrabajo>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createRegistroDeTrabajoDto: CreateRegistroDeTrabajoDto) {
    const usuario_registro_ = await this.userRepository.findOneBy({
      nombre_usuario: createRegistroDeTrabajoDto.usuario_c,
    });

    if (!usuario_registro_) {
      throw new BadRequestException('No existe ese usuario brother');
    }

    return await this.registrodetrabajoRepository.save({
      ...createRegistroDeTrabajoDto,
      usuario_registro_,
    });
  }

  async findAll() {
    return await this.registrodetrabajoRepository.find();
  }

  async findOne(id_registro: number) {
    return await this.registrodetrabajoRepository.findOneBy({ id_registro });
  }

  async update(
    id_registro: number,
    updateRegistroDeTrabajoDto: UpdateRegistroDeTrabajoDto,
  ) {
    const registro = await this.registrodetrabajoRepository.findOneBy({
      id_registro,
    });

    if (!registro) {
      throw new BadRequestException('Registro de trabajo no encontrado');
    }

    // Update properties if they exist in the DTO
    for (const key in updateRegistroDeTrabajoDto) {
      if (updateRegistroDeTrabajoDto.hasOwnProperty(key)) {
        if (updateRegistroDeTrabajoDto[key] !== undefined) {
          // Verificar si la propiedad existe en registro antes de asignarla
          if (registro.hasOwnProperty(key)) {
            registro[key] = updateRegistroDeTrabajoDto[key];
          }
        }
      }
    }
    // Update other properties in a similar manner...

    // Save the updated registro
    return await this.registrodetrabajoRepository.save(registro);
  }

  async remove(id_registro: number) {
    return await this.registrodetrabajoRepository.softDelete({ id_registro });
  }
}
