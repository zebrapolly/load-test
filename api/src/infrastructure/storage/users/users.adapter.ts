import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersModel } from './users.model';
import { IUserSearch } from '../../../users';
import { FindOneOptions } from "typeorm";

@Injectable()
export class UsersAdapter {
  constructor(
    @InjectRepository(UsersModel)
    private usersRepository: Repository<UsersModel>,
  ) {}

  findOne(params: IUserSearch) {
    const query: FindOneOptions = {};
    if (params) { query.where = params}
    return this.usersRepository.findOne(query);
  }
}
