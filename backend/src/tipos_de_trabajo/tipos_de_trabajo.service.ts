import { Injectable } from '@nestjs/common';
import { CreateTiposDeTrabajoDto } from './dto/create-tipos_de_trabajo.dto';
import { UpdateTiposDeTrabajoDto } from './dto/update-tipos_de_trabajo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposDeTrabajo } from './entities/tipos_de_trabajo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TiposDeTrabajoService {

  constructor (
    @InjectRepository(TiposDeTrabajo)
    private readonly tiposdetrabajoRepository: Repository<TiposDeTrabajo>
  ){}

  async create(createTiposDeTrabajoDto: CreateTiposDeTrabajoDto) {
    return await this.tiposdetrabajoRepository.save(createTiposDeTrabajoDto)
  }

  async findAll() {
    return await  this.tiposdetrabajoRepository.find()
  }

  async findOne(id: number) {
    return `This action returns a #${id} tiposDeTrabajo`;
  }

  async update(id: number, updateTiposDeTrabajoDto: UpdateTiposDeTrabajoDto) {
    return `This action updates a #${id} tiposDeTrabajo`;
  }

  async remove(id: number) {
    return `This action removes a #${id} tiposDeTrabajo`;
  }
}
