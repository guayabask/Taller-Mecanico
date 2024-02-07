import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from '../common/enums/rol.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';

interface RequestWithUser extends Request {
    user: { email: string; role: string };
}

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ){}

    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto
    ){
        return this.authService.register(registerDto)
    }

    @Post('login')
    login(
        @Body()
        loginDto: LoginDto,
    ){
        return this.authService.login(loginDto)
    }

    @Get('validar')
    @UseGuards(AuthGuard)
    validar(
        @Request() req,
    ){
        return {user: req.user}
    }

    /*@Get('perfil-mecanico')
    @Auth(Role.mecanico)
    perfil_mecanico(
    @ActiveUser()
    user: ActiveUserInterface,) {
    return this.authService.perfil_mecanico(user)
    }*/

    @Get('perfil-mecanico')
    @Auth(Role.mecanico)
    profile2(
    @Request()
    req: RequestWithUser,
    ) {
    return req.user;
    }

    @Get('perfil-admin')
    @Auth(Role.admin)
    perfil_admin(
        @Request()
        req: RequestWithUser,
        ) {
        return req.user;
        }

    @Get('perfil-cliente')
    @Auth(Role.cliente)
    perfil_cliente(
        @Request()
        req: RequestWithUser,
        ) {
        return req.user;
        }

}
