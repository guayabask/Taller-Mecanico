import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrecioHorasService } from './precio_horas.service';
import { CreatePrecioHoraDto } from './dto/create-precio_hora.dto';
import { UpdatePrecioHoraDto } from './dto/update-precio_hora.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('precio-horas')
export class PrecioHorasController {
  constructor(private readonly precioHorasService: PrecioHorasService) {}

  @Auth(Role.admin)
  @Post()
  create(@Body() createPrecioHoraDto: CreatePrecioHoraDto) {
    return this.precioHorasService.create(createPrecioHoraDto);
  }

  @Auth(Role.admin)
  @Get()
  findAll() {
    return this.precioHorasService.findAll();
  }

  @Auth(Role.admin)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.precioHorasService.findOne(id);
  }

  @Auth(Role.admin)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePrecioHoraDto: UpdatePrecioHoraDto) {
    return this.precioHorasService.update(id, updatePrecioHoraDto);
  }

  @Auth(Role.admin)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.precioHorasService.remove(id);
  }
}
