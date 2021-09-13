import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/creatr-user.dto';
import { UsersService } from './users.service';
import { User } from './users.models';

@Controller('users')
export class UsersController {

  constructor (private usersService: UsersService) {}

  @ApiOperation({summary: 'Create new user'})
  @ApiResponse({status: 200, type: User})
  @Post()
  creata(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  
  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll(){
    return this.usersService.getAllUsers()
  }
}
