import { Entity, PrimaryGeneratedColumn, Generated, Column } from 'typeorm';
import { User } from '../../../domain';

@Entity('users')
export class UsersModel implements User {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Generated('uuid')
    readonly userId: string;

    @Column()
    readonly username: string;

    @Column()
    readonly password: string;
}