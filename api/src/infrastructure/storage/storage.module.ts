import { Module } from "@nestjs/common";
import { ProductsStorageModule } from "./products/products-storage.module";
import { UsersStorageModule } from "./users/users-storage.module";

@Module({
    imports: [ProductsStorageModule, UsersStorageModule],
    exports: [ProductsStorageModule, UsersStorageModule]
})
export class StorageModule {}