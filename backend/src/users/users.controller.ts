import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import UsersService from './users.service';
// import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }
  // @ApiOperation({ summary: 'Создание нового пользователя'})
  // @ApiResponse({ status: 200 })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  @Get()
  // @ApiOperation({ summary: 'Получение всех пользователей' })
  // @ApiResponse({ status: 200 })
  getAllUser() {
    return this.usersService.getAllUser();
  }
}
