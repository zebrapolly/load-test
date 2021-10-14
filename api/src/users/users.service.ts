import { Injectable } from '@nestjs/common';

export type User = {
    userId: string,
    username: string,
    password: string
};

@Injectable()
export class UsersService {
    private users;
    constructor() {
        this.users = require('../../users.json')
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}