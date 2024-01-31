
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroDeTrabajosModule } from './registro_de_trabajos/registro_de_trabajos.module';
import { TiposDeTrabajoModule } from './tipos_de_trabajo/tipos_de_trabajo.module';
import { EstatusTrabajosModule } from './estatus_trabajos/estatus_trabajos.module';
import { PrecioHorasModule } from './precio_horas/precio_horas.module';
import { TiposDeVehiculoModule } from './tipos_de_vehiculo/tipos_de_vehiculo.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'taller_mecanico',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RegistroDeTrabajosModule,
    TiposDeTrabajoModule,
    EstatusTrabajosModule,
    PrecioHorasModule,
    TiposDeVehiculoModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
