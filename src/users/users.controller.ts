import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/creatr-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor (private usersService: UsersService) {}

  @Post()
  creata(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll(){
    return this.usersService.getAllUsers()
  }
}
