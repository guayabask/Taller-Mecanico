import { Injectable } from '@nestjs/common';
import { CreateTiposDeVehiculoDto } from './dto/create-tipos_de_vehiculo.dto';
import { UpdateTiposDeVehiculoDto } from './dto/update-tipos_de_vehiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TiposDeVehiculo } from './entities/tipos_de_vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TiposDeVehiculoService {

  constructor(
    @InjectRepository(TiposDeVehiculo)
    private readonly tipovehiculoRepository: Repository<TiposDeVehiculo>,
  ){}
  

  async create(createTiposDeVehiculoDto: CreateTiposDeVehiculoDto) {
    return await this.tipovehiculoRepository.save(createTiposDeVehiculoDto)
  }

  async findAll() {
    return await this.tipovehiculoRepository.find();
  }

  async findOne(id: number) {
    return await this.tipovehiculoRepository.findOneBy({id})
  }

  async update(id: number, updateTiposDeVehiculoDto: UpdateTiposDeVehiculoDto) {
    return `This action updates a #${id} tiposDeVehiculo`;
  }

  async remove(id: number) {
    return await this.tipovehiculoRepository.softRemove({id})
  }
}
