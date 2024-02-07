import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //Aqui se interactua con los usuarios
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findOneByEmail(correo_electronico: string) {
    return await this.userRepository.findOneBy({ correo_electronico });
  }

  findOneByEmailWithPassword(correo_electronico: string) {
    return this.userRepository.findOne({
      where: { correo_electronico },
      select: [
        'id',
        'nombre_usuario',
        'correo_electronico',
        'contraseña',
        'role',
      ],
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async updateUser(id: number, updateUser: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
        throw new BadRequestException('Usuario no encontrado');
    }

    // Actualizar propiedades si existen en el DTO
    for (const key in updateUser) {
        if (updateUser.hasOwnProperty(key)) {
            if (updateUser[key] !== undefined) {
                // Verificar si la propiedad existe en el usuario antes de asignarla
                if (user.hasOwnProperty(key)) {
                    user[key] = updateUser[key];
                }
            }
        }
    }
    // Actualizar otras propiedades de manera similar...

    // Guardar el usuario actualizado
    return await this.userRepository.save(user);
}

  async remove(id: number) {
    return await this.userRepository.softRemove({ id });
  }
}
