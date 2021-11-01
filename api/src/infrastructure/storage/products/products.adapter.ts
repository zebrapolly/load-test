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
    const query = this.productsRepository.createQueryBuilder().select().where(params);
    return query.getOne();
  }

  find(params?: IProductSearchParams) {
    const query = this.productsRepository.createQueryBuilder().select();
    if (params.title) {
      query.andWhere('product_with_idx @@ to_tsquery(:query);', {query: params.title})
    };
    return query.getMany();
  }
}
