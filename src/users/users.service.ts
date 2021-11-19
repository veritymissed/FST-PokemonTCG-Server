import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  create(createUserDto: CreateUserDto) {
    console.log(`This action adds a new user
     username: ${createUserDto.username}
     password: ${createUserDto.password}`);
    return this.users.push(createUserDto)
  }

  findAll() {
    console.log(`This action returns all users`);
    return this.users
  }

  findOne(id: number) {
    return this.users.find((user) => user.userId === id);
  }

  findOneByName(username: string){
    return this.users.find((user) => user.username === username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
