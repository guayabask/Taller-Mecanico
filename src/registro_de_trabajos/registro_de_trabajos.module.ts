import { Module } from '@nestjs/common';
import { RegistroDeTrabajosService } from './registro_de_trabajos.service';
import { RegistroDeTrabajosController } from './registro_de_trabajos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroDeTrabajo } from './entities/registro_de_trabajo.entity';
import { TiposDeTrabajoModule } from 'src/tipos_de_trabajo/tipos_de_trabajo.module';
import { TiposDeTrabajoService } from 'src/tipos_de_trabajo/tipos_de_trabajo.service';
import { EstatusTrabajosModule } from 'src/estatus_trabajos/estatus_trabajos.module';
import { EstatusTrabajosService } from 'src/estatus_trabajos/estatus_trabajos.service';
import { PrecioHorasModule } from 'src/precio_horas/precio_horas.module';
import { PrecioHorasService } from 'src/precio_horas/precio_horas.service';
import { TiposDeVehiculoModule } from 'src/tipos_de_vehiculo/tipos_de_vehiculo.module';
import { TiposDeVehiculoService } from 'src/tipos_de_vehiculo/tipos_de_vehiculo.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroDeTrabajo]), TiposDeTrabajoModule, EstatusTrabajosModule, PrecioHorasModule, TiposDeVehiculoModule],
  controllers: [RegistroDeTrabajosController],
  providers: [RegistroDeTrabajosService, TiposDeTrabajoService, EstatusTrabajosService, PrecioHorasService, TiposDeVehiculoService],
  exports: [],
})
export class RegistroDeTrabajosModule {}
