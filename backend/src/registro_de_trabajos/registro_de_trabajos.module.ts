import { Module } from '@nestjs/common';
import { RegistroDeTrabajosService } from './registro_de_trabajos.service';
import { RegistroDeTrabajosController } from './registro_de_trabajos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroDeTrabajo } from './entities/registro_de_trabajo.entity';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroDeTrabajo]), UsersModule],
  controllers: [RegistroDeTrabajosController],
  providers: [RegistroDeTrabajosService, UsersService],
  exports: [],
})
export class RegistroDeTrabajosModule {}
