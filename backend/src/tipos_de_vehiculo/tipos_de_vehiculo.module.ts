import { Module } from '@nestjs/common';
import { TiposDeVehiculoService } from './tipos_de_vehiculo.service';
import { TiposDeVehiculoController } from './tipos_de_vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposDeVehiculo } from './entities/tipos_de_vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TiposDeVehiculo])],
  controllers: [TiposDeVehiculoController],
  providers: [TiposDeVehiculoService],
  exports: [TypeOrmModule]
})
export class TiposDeVehiculoModule {}
