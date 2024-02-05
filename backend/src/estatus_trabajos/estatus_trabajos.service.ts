import { Injectable } from '@nestjs/common';
import { CreateEstatusTrabajoDto } from './dto/create-estatus_trabajo.dto';
import { UpdateEstatusTrabajoDto } from './dto/update-estatus_trabajo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstatusTrabajo } from './entities/estatus_trabajo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstatusTrabajosService {

  constructor(
    @InjectRepository(EstatusTrabajo)
    private readonly estatustrabajoRepository: Repository<EstatusTrabajo>,
  ){}
  
  async create(createEstatusTrabajoDto: CreateEstatusTrabajoDto) {
    return await this.estatustrabajoRepository.save(createEstatusTrabajoDto)
  }

  async findAll() {
    return await this.estatustrabajoRepository.find()
  }

  async findOne(id: number) {
    return await this.estatustrabajoRepository.findOneBy({id})
  }

  async update(id: number, updateEstatusTrabajoDto: UpdateEstatusTrabajoDto) {
    return `This action updates a #${id} estatusTrabajo`;
  }

  async remove(id: number) {
    return await this.estatustrabajoRepository.softRemove({id})
  }
}
