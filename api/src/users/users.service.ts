import { Injectable } from '@nestjs/common';

export type User = {
    userId: string,
    username: string,
    password: string
};

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: '4a5811d0-cdb6-4ffc-83b7-7a8dc2f6de5e',
            username: 'john',
            password: 'changeme',
        },
        {
            userId: '268150bc-dbeb-455d-882e-6d8bc03783c3',
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}