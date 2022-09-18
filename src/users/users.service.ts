import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const entity = this.userRepository.create();
    entity.name = createUserDto.name;
    entity.email = createUserDto.email;
    entity.password = createUserDto.password;
    const response = this.userRepository.save(entity);
    return response != undefined;
  }

  findAll() {
    const response = this.userRepository.find();
    return response;
  }

  findOneBy(id: string) {
    const response = this.userRepository.findOneBy({ id });
    return response;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.save({
      id: id,
      updateUserDto,
    });
  }

  remove(id: string) {
    this.userRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id: id })
      .execute();
  }
}
