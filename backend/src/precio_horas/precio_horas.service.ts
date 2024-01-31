import { Injectable } from '@nestjs/common';
import { CreatePrecioHoraDto } from './dto/create-precio_hora.dto';
import { UpdatePrecioHoraDto } from './dto/update-precio_hora.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PrecioHora } from './entities/precio_hora.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PrecioHorasService {

  constructor(
    @InjectRepository (PrecioHora)
    private readonly preciohoraRepository: Repository<PrecioHora>,
  ){}
  
  async create(createPrecioHoraDto: CreatePrecioHoraDto) {
      return await this.preciohoraRepository.save(createPrecioHoraDto)
  }

  async findAll() {
      return await this.preciohoraRepository.find();
  }

  async findOne(id: number) {
      return `This action returns a #${id} precioHora`;
  }

  async update(id: number, updatePrecioHoraDto: UpdatePrecioHoraDto) {
      return `This action updates a #${id} precioHora`;
  }

  async remove(id: number) {
      return `This action removes a #${id} precioHora`;
  }
}
