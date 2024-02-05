import { Injectable } from '@nestjs/common';
import { CreatePrecioHoraDto } from './dto/create-precio_hora.dto';
import { UpdatePrecioHoraDto } from './dto/update-precio_hora.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PrecioHora } from './entities/precio_hora.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrecioHorasService {
  constructor(
    @InjectRepository(PrecioHora)
    private readonly preciohoraRepository: Repository<PrecioHora>,
  ) {}

  async create(createPrecioHoraDto: CreatePrecioHoraDto) {
    return await this.preciohoraRepository.save(createPrecioHoraDto);
  }

  async findAll() {
    return await this.preciohoraRepository.find();
  }

  async findOne(id: number) {
    return await this.preciohoraRepository.findOneBy({id})
  }

  async update(id: number, updatePrecioHoraDto: UpdatePrecioHoraDto) {
    return await this.preciohoraRepository.update({id}, updatePrecioHoraDto)
  }

  async remove(id: number) {
    return await this.preciohoraRepository.softRemove({id})
  }
}
