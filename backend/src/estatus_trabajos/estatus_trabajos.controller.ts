import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstatusTrabajosService } from './estatus_trabajos.service';
import { CreateEstatusTrabajoDto } from './dto/create-estatus_trabajo.dto';
import { UpdateEstatusTrabajoDto } from './dto/update-estatus_trabajo.dto';
import { Role } from 'src/common/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Auth(Role.admin)
@Controller('estatus-trabajos')
export class EstatusTrabajosController {
  constructor(private readonly estatusTrabajosService: EstatusTrabajosService) {}

  @Auth(Role.admin)
  @Post()
  create(@Body() createEstatusTrabajoDto: CreateEstatusTrabajoDto) {
    return this.estatusTrabajosService.create(createEstatusTrabajoDto);
  }

  @Auth(Role.admin)
  @Get()
  findAll() {
    return this.estatusTrabajosService.findAll();
  }

  @Auth(Role.admin)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.estatusTrabajosService.findOne(id);
  }

  @Auth(Role.admin)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEstatusTrabajoDto: UpdateEstatusTrabajoDto) {
    return this.estatusTrabajosService.update(id, updateEstatusTrabajoDto);
  }

  @Auth(Role.admin)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.estatusTrabajosService.remove(id);
  }
}
