import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() response: Response) {
    const result = this.usersService.create(createUserDto);
    if (result) {
      return response.status(HttpStatus.CREATED).json({
        msg: 'User Created',
      });
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      msg: 'Error Creating User',
    });
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.usersService.findOneBy(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response: Response,
  ) {
    const result = this.usersService.update(id, updateUserDto);
    if (result) {
      return response.status(HttpStatus.CREATED).json({
        msg: 'User Updated',
      });
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      msg: 'Error Updating User',
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
