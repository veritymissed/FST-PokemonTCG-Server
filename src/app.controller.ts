import { Controller, Request, Response, Get, Post, UseGuards, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

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
      throw error
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.body
  }
}
