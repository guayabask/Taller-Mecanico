import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposDeTrabajoService } from './tipos_de_trabajo.service';
import { CreateTiposDeTrabajoDto } from './dto/create-tipos_de_trabajo.dto';
import { UpdateTiposDeTrabajoDto } from './dto/update-tipos_de_trabajo.dto';

@Controller('tipos-de-trabajo')
export class TiposDeTrabajoController {
  constructor(private readonly tiposDeTrabajoService: TiposDeTrabajoService) {}

  @Post()
  create(@Body() createTiposDeTrabajoDto: CreateTiposDeTrabajoDto) {
    return this.tiposDeTrabajoService.create(createTiposDeTrabajoDto);
  }

  @Get()
  findAll() {
    return this.tiposDeTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposDeTrabajoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTiposDeTrabajoDto: UpdateTiposDeTrabajoDto) {
    return this.tiposDeTrabajoService.update(id, updateTiposDeTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposDeTrabajoService.remove(id);
  }
}
