
import { SetMetadata } from "@nestjs/common";
import { Role } from "../../common/enums/rol.enum";

export const RolesK = 'roles'
export const Roles = (role: Role) => SetMetadata(RolesK, role);