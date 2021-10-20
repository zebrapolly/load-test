import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductsModel } from "./products.model";
import { IProductSearchParams } from "../../../products";

@Injectable()
export class ProductsAdapter {
    constructor(
        @InjectRepository(ProductsModel)
        private productsRepository: Repository<ProductsModel>,
    ) {
    }

    findOne(params?: IProductSearchParams) {
        return this.productsRepository.findOne({ where: params });
    }

    find(params?: IProductSearchParams) {
        return this.productsRepository.find({ where: params} );
    }
}