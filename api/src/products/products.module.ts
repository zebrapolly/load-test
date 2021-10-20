import { Module } from '@nestjs/common';
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { InfrastructureModule } from "../infrastructure";

@Module({
    imports: [InfrastructureModule],
    providers: [ProductsService]
})
export class ProductsModule {}
