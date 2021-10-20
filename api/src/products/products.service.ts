import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsAdapter } from "../infrastructure";

@Injectable()
export class ProductsService {
    constructor(
        private readonly productsAdapter: ProductsAdapter
    ) {}


    getAll() {
        return this.productsAdapter.find();
    }

    search(title: string) {
        return this.productsAdapter.find({ title });
    }

    async get (systemId: string) {
        const res = await this.productsAdapter.findOne({ systemId });
        if (!res) {
            throw new NotFoundException();
        }
        return res;
    }
}
