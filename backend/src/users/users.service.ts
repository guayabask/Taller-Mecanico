import { Injectable } from '@nestjs/common';
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
  ){}
  
  //Aqui se interactua con los usuarios
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findOneByEmail(correo_electronico: string){
    return await this.userRepository.findOneBy({ correo_electronico})
  }

  findOneByEmailWithPassword(correo_electronico: string) {
    return this.userRepository.findOne({
      where: { correo_electronico },
      select: ['id', 'nombre_usuario', 'correo_electronico', 'contraseña', 'role'],
    });
  }

  

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({id})
  }

  updateUser(id: number, updateUser: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUser)
  }

  async remove(id: number) {
    return await this.userRepository.softRemove({id})
  }
}
