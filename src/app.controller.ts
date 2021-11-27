import { Controller, Request, Response, Get, Post, UseGuards, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response() res) {
    try {
      let result = await this.authService.login(req.body);

      return res
      .status(HttpStatus.OK)
      .cookie('access_token', result.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
      })
      .json(result)

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
