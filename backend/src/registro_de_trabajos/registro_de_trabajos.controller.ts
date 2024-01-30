import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroDeTrabajosService } from './registro_de_trabajos.service';
import { CreateRegistroDeTrabajoDto } from './dto/create-registro_de_trabajo.dto';
import { UpdateRegistroDeTrabajoDto } from './dto/update-registro_de_trabajo.dto';

@Controller('registro-de-trabajos')
export class RegistroDeTrabajosController {
  constructor(private readonly registroDeTrabajosService: RegistroDeTrabajosService) {}

  
  @Post()
  create(@Body() createRegistroDeTrabajoDto: CreateRegistroDeTrabajoDto) {
    return this.registroDeTrabajosService.create(createRegistroDeTrabajoDto);
  }

  @Get()
  findAll() {
    return this.registroDeTrabajosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.registroDeTrabajosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRegistroDeTrabajoDto: UpdateRegistroDeTrabajoDto) {
    return this.registroDeTrabajosService.update(id, updateRegistroDeTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.registroDeTrabajosService.remove(id);
  }
}
