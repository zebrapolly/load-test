import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Raw, Repository } from 'typeorm';
import { ProductsModel } from './products.model';
import { IProductSearchParams } from '../../../products';
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";

@Injectable()
export class ProductsAdapter {
  constructor(
    @InjectRepository(ProductsModel)
    private productsRepository: Repository<ProductsModel>,
  ) {}

  findOne(params?: IProductSearchParams) {
    const query: FindOneOptions = {};
    if (params.title) {
      query.where = {
        title: Raw(alias =>`LOWER(${alias}) Like '%${params.title.toLowerCase()}%'`)
      }
    }
    return this.productsRepository.findOne(query);
  }

  find(params?: IProductSearchParams) {
    const query: FindManyOptions = {};
    if (params.title) {
      query.where = {
        title: Raw(alias =>`LOWER(${alias}) Like '%${params.title.toLowerCase()}%'`)
      }
    }
    return this.productsRepository.find(query);
  }
}
