import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ){}

  async validateUserByName(username: string, password: string): Promise<any>{
    const user = this.usersService.findOneByName(username);
    if(user && user.password === password){
      const { password, ...result} = user;
      return result
    }
    else return null
  }

  async validateUserByEmail(useremail: string, password: string): Promise<any>{
    const user = await this.usersService.findOneByEmail(useremail);
    if(user && user.password === password){
      const { password, ...result} = user;
      return result
    }
    else return null
  }

  async login(user: any){
    try {
      const payload = { username: user.username, sub: user.password };
      return {
        access_token: this.jwtService.sign(payload),
      }
    } catch (error) {
      throw error;
    }
  }
}
