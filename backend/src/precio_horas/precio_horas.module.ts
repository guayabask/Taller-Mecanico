import { Module } from '@nestjs/common';
import { PrecioHorasService } from './precio_horas.service';
import { PrecioHorasController } from './precio_horas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecioHora } from './entities/precio_hora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrecioHora])],
  controllers: [PrecioHorasController],
  providers: [PrecioHorasService],
  exports: [TypeOrmModule]
})
export class PrecioHorasModule {}
