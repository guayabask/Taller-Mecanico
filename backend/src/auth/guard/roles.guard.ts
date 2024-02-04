import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { RolesK } from "../decorators/roles.decorator";
import { Role } from "../../common/enums/rol.enum";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const rolRequerido = this.reflector.getAllAndOverride<Role>(RolesK, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!rolRequerido) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    // si es administrador lo dejamos hacer lo que sea :D
    if (user.role === Role.admin) return true;

    if (user.role === Role.mecanico) return true;

    return user.role === rolRequerido;
  }
}
