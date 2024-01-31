import { BadRequestException, Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ){}

    async register({nombre_usuario, correo_electronico, contraseña, id_pregunta_control_id, foto_perfil, role}: RegisterDto){
        const user = await this.usersService.findOneByEmail(correo_electronico) 

        if (user){
            throw new BadRequestException("Chale brother ya existe ese correo")
        }
        
        await this.usersService.create({
            nombre_usuario, 
            correo_electronico, 
            contraseña: await bcryptjs.hash(contraseña, 10), 
            id_pregunta_control_id, 
            foto_perfil,
            role})
        return {
            nombre_usuario,
            correo_electronico
        } 
    }

    async login({correo_electronico, contraseña}: LoginDto){
        const user = await this.usersService.findOneByEmailWithPassword(correo_electronico);
        if (!user){
            throw new UnauthorizedException("Chale brother el correo esta mal");
        }
        const esCorrectaLaContra = await bcryptjs.compare(contraseña, user.contraseña)
        if (!esCorrectaLaContra){
            throw new UnauthorizedException("Chale brother la contra es incorrecta");
        }

        const payload = { correo_electronico: user.correo_electronico, role: user.role};

        const token = await this.jwtService.signAsync(payload)
        return {
            token,
            correo_electronico
        }
    }
    async perfil_cliente({correo_electronico, role}: {correo_electronico: string, role: string}){
        return await this.usersService.findOneByEmail(correo_electronico)
    }

    async perfil_mecanico({correo_electronico, role}: {correo_electronico: string, role: string}){
        return await this.usersService.findOneByEmail(correo_electronico)
    }

    async perfil_admin({correo_electronico, role}: {correo_electronico: string, role: string}){
        return await this.usersService.findOneByEmail(correo_electronico)
    }

}
