import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposDeVehiculoService } from './tipos_de_vehiculo.service';
import { CreateTiposDeVehiculoDto } from './dto/create-tipos_de_vehiculo.dto';
import { UpdateTiposDeVehiculoDto } from './dto/update-tipos_de_vehiculo.dto';

@Controller('tipos-de-vehiculo')
export class TiposDeVehiculoController {
  constructor(private readonly tiposDeVehiculoService: TiposDeVehiculoService) {}

  @Post()
  create(@Body() createTiposDeVehiculoDto: CreateTiposDeVehiculoDto) {
    return this.tiposDeVehiculoService.create(createTiposDeVehiculoDto);
  }

  @Get()
  findAll() {
    return this.tiposDeVehiculoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposDeVehiculoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTiposDeVehiculoDto: UpdateTiposDeVehiculoDto) {
    return this.tiposDeVehiculoService.update(id, updateTiposDeVehiculoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposDeVehiculoService.remove(id);
  }
}
