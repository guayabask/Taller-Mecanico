import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposDeVehiculoService } from './tipos_de_vehiculo.service';
import { CreateTiposDeVehiculoDto } from './dto/create-tipos_de_vehiculo.dto';
import { UpdateTiposDeVehiculoDto } from './dto/update-tipos_de_vehiculo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';

@Controller('tipos-de-vehiculo')
export class TiposDeVehiculoController {
  constructor(private readonly tiposDeVehiculoService: TiposDeVehiculoService) {}

  @Auth(Role.admin)
  @Post()
  create(@Body() createTiposDeVehiculoDto: CreateTiposDeVehiculoDto) {
    return this.tiposDeVehiculoService.create(createTiposDeVehiculoDto);
  }

  @Auth(Role.admin)
  @Get()
  findAll() {
    return this.tiposDeVehiculoService.findAll();
  }

  @Auth(Role.admin)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposDeVehiculoService.findOne(id);
  }

  @Auth(Role.admin)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTiposDeVehiculoDto: UpdateTiposDeVehiculoDto) {
    return this.tiposDeVehiculoService.update(id, updateTiposDeVehiculoDto);
  }

  @Auth(Role.admin)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposDeVehiculoService.remove(id);
  }
}
