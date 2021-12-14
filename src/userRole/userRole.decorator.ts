import { SetMetadata } from '@nestjs/common';
import { UserRole } from './userRole.enum';

export const ROLES_KEY = 'roles';
export const UserRoles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
