import { Injectable } from '@nestjs/common';
import { UsersAdapter } from '../infrastructure/storage';
import { User } from '../domain';

@Injectable()
export class UsersService {
  private users;
  constructor(private readonly usersAdapter: UsersAdapter) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersAdapter.findOne({ username });
  }
}
