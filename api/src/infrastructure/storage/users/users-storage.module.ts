import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModel } from "./users.model";
import { UsersAdapter } from "./users.adapter";

@Module({
    imports: [TypeOrmModule.forFeature([UsersModel])],
    providers: [UsersAdapter],
    exports: [UsersAdapter]
})
export class UsersStorageModule {}