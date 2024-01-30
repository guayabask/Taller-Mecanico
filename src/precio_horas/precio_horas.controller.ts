import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrecioHorasService } from './precio_horas.service';
import { CreatePrecioHoraDto } from './dto/create-precio_hora.dto';
import { UpdatePrecioHoraDto } from './dto/update-precio_hora.dto';

@Controller('precio-horas')
export class PrecioHorasController {
  constructor(private readonly precioHorasService: PrecioHorasService) {}

  @Post()
  create(@Body() createPrecioHoraDto: CreatePrecioHoraDto) {
    return this.precioHorasService.create(createPrecioHoraDto);
  }

  @Get()
  findAll() {
    return this.precioHorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.precioHorasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePrecioHoraDto: UpdatePrecioHoraDto) {
    return this.precioHorasService.update(id, updatePrecioHoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.precioHorasService.remove(id);
  }
}
