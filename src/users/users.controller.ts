import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Create
  @Post()
  create(@Body() user: Omit<User, 'id'>): User {
    return this.usersService.create(user);
  }

  // Read All
  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  // Read One
  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(Number(id));
  }

  // Update
  @Put(':id')
  update(@Param('id') id: string, @Body() user: Partial<User>): User | undefined {
    return this.usersService.update(Number(id), user);
  }

  // Delete
  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.usersService.delete(Number(id));
  }
}
