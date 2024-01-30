import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstatusTrabajosService } from './estatus_trabajos.service';
import { CreateEstatusTrabajoDto } from './dto/create-estatus_trabajo.dto';
import { UpdateEstatusTrabajoDto } from './dto/update-estatus_trabajo.dto';

@Controller('estatus-trabajos')
export class EstatusTrabajosController {
  constructor(private readonly estatusTrabajosService: EstatusTrabajosService) {}

  @Post()
  create(@Body() createEstatusTrabajoDto: CreateEstatusTrabajoDto) {
    return this.estatusTrabajosService.create(createEstatusTrabajoDto);
  }

  @Get()
  findAll() {
    return this.estatusTrabajosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.estatusTrabajosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEstatusTrabajoDto: UpdateEstatusTrabajoDto) {
    return this.estatusTrabajosService.update(id, updateEstatusTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.estatusTrabajosService.remove(id);
  }
}
