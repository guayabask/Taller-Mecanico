
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroDeTrabajosModule } from './registro_de_trabajos/registro_de_trabajos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CorreoController } from './correo/correo.controller';

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
    UsersModule,
    AuthModule,
  ],
  controllers: [CorreoController],
  providers: [],
})
export class AppModule {}
