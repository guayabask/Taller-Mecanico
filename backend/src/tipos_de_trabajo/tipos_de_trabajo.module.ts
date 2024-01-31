import { Module } from '@nestjs/common';
import { TiposDeTrabajoService } from './tipos_de_trabajo.service';
import { TiposDeTrabajoController } from './tipos_de_trabajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposDeTrabajo } from './entities/tipos_de_trabajo.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([TiposDeTrabajo])],
  controllers: [TiposDeTrabajoController],
  providers: [TiposDeTrabajoService],
  exports: [TypeOrmModule]
})
export class TiposDeTrabajoModule {}
