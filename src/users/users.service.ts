import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {getManager, getConnection} from "typeorm";
import { User } from './entities/user.entity';
// import * as favorite_cards from './favorite_cards.json';

@Injectable()
export class UsersService {
  constructor(){
    // console.log('favorite_cards', favorite_cards)
  }
  private readonly users = [
    {
      id: uuidv4(),
      username: 'john',
      email: 'john@gmail.com',
      password: 'changeme',
    },
    {
      id: uuidv4(),
      username: 'maria',
      email: 'maria@gmail.com',
      password: 'guess',
    },
  ];

  async create(createUserDto: CreateUserDto) {
    try {
      console.log(`This action adds a new user
        username: ${createUserDto.username}
        password: ${createUserDto.password}`);
      const entityManager = getManager();
      const {id, ...newUser} = createUserDto;
      const result = await entityManager.insert(User, newUser);
      return result;

    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      console.log(`This action returns all users`);
      const entityManager = getManager();
      const users = await entityManager.find(User, {});
      return users;

    } catch (error) {
      throw error
    }

  }

  async findOne(id: string) {
    try {
      const entityManager = getManager();
      const user = await entityManager.findOne(User, {id: id});
      console.log('user in postgres', user);
      return user;

    } catch (error) {
      throw error;
    }
  }

  findOneByName(username: string){
    return this.users.find((user) => user.username === username);
  }

  async findOneByEmail(userEmail: string){
    try {
      const entityManager = getManager();
      const user = await entityManager.findOne(User, {email: userEmail});
      console.log('user in postgres', user);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const result = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(updateUserDto)
      .where("id = :id", { id: id })
      .execute();
      return result;

    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id: id })
      .execute();
      return result;

    } catch (error) {
      throw error;
    }
  }
}
