import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroDeTrabajosService } from './registro_de_trabajos.service';
import { CreateRegistroDeTrabajoDto } from './dto/create-registro_de_trabajo.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/common/enums/rol.enum';


@Controller('registro-de-trabajos')
export class RegistroDeTrabajosController {
  constructor(private readonly registroDeTrabajosService: RegistroDeTrabajosService) {}

  @Auth(Role.admin)
  @Auth(Role.mecanico)
  @Post()
  create(@Body() createRegistroDeTrabajoDto: CreateRegistroDeTrabajoDto) {
    return this.registroDeTrabajosService.create(createRegistroDeTrabajoDto);
  }

  
  @Get()
  findAll() {
    return this.registroDeTrabajosService.findAll();
  }

  @Auth(Role.mecanico)
  @Auth(Role.cliente)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.registroDeTrabajosService.findOne(id);
  }



  @Auth(Role.mecanico)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.registroDeTrabajosService.remove(id);
  }
}
