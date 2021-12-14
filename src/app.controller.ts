import { Controller, Request, Response, Get, Post, UseGuards, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { UsersService } from './users/users.service';

//for userRole authorization
import { UserRoles } from './userRole/userRole.decorator';
import { UserRole } from './userRole/userRole.enum';
import { RolesGuard } from './userRole/userRoles.guard'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  //If you don't config serve static (ex. SPA), un-commit this
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    try {
      const { useremail, ...resObject } = await this.authService.login(req.body);
      const { password, ...userObject } = await this.usersService.findOneByEmail(useremail);

      resObject['user'] = userObject;

      return res
      .status(HttpStatus.OK)
      .cookie('access_token', resObject.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
      })
      .json(resObject)

    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // @UseGuards(JwtAuthGuard)
  // used in /api prefix controller

  // @UseGuards(RolesGuard)
  @Get('profile')
  // @UserRoles(UserRole.ADMIN)
  getProfile(@Request() req){
    return 'take the profile back'
  }
}
