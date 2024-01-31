import { Module } from '@nestjs/common';
import { EstatusTrabajosService } from './estatus_trabajos.service';
import { EstatusTrabajosController } from './estatus_trabajos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstatusTrabajo } from './entities/estatus_trabajo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstatusTrabajo])],
  controllers: [EstatusTrabajosController],
  providers: [EstatusTrabajosService],
  exports: [TypeOrmModule]
})
export class EstatusTrabajosModule {}
