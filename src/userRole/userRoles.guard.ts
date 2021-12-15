import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './userRole.decorator'
import { UserRole } from './userRole.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }
    // below code needed to be implement, maybe session.user
    const { user } = context.switchToHttp().getRequest();
    console.log('user', user)
    return requiredRoles.some((role) => user?.roles?.includes(role));
  }
}
