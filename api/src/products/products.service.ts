import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

export type Product = {
    id: string;
    title: string;
    description: string;
}

@Injectable()
export class ProductsService {
    private products: Product[];

    constructor() {
        this.products = require('../../../products.json')
    }

    getAll() {
        return this.products;
    }

    search(title: string) {
        return this.products.filter(product => product.title.includes(title));
    }
}
