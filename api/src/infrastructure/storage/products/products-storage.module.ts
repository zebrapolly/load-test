import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsAdapter } from './products.adapter';
import { ProductsModel } from './products.model';

@Module({
  imports: [TypeOrmModule.forFeature([ProductsModel])],
  providers: [ProductsAdapter],
  exports: [ProductsAdapter],
})
export class ProductsStorageModule {}
