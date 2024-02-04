import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposDeTrabajoService } from './tipos_de_trabajo.service';
import { CreateTiposDeTrabajoDto } from './dto/create-tipos_de_trabajo.dto';
import { UpdateTiposDeTrabajoDto } from './dto/update-tipos_de_trabajo.dto';
import { Role } from 'src/common/enums/rol.enum';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('tipos-de-trabajo')
export class TiposDeTrabajoController {
  constructor(private readonly tiposDeTrabajoService: TiposDeTrabajoService) {}

  //@Auth(Role.admin)
  @Post()
  create(@Body() createTiposDeTrabajoDto: CreateTiposDeTrabajoDto) {
    return this.tiposDeTrabajoService.create(createTiposDeTrabajoDto);
  }

  //@Auth(Role.admin)
  @Get()
  findAll() {
    return this.tiposDeTrabajoService.findAll();
  }

  //@Auth(Role.admin)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposDeTrabajoService.findOne(id);
  }

  //@Auth(Role.admin)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTiposDeTrabajoDto: UpdateTiposDeTrabajoDto) {
    return this.tiposDeTrabajoService.update(id, updateTiposDeTrabajoDto);
  }

  //@Auth(Role.admin)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposDeTrabajoService.remove(id);
  }
}
