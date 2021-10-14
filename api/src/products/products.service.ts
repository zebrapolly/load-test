import { Injectable, NotFoundException } from '@nestjs/common';

export type Product = {
    id: string;
    title: string;
    description: string;
}

@Injectable()
export class ProductsService {
    private products: Product[];

    constructor() {
        this.products = require('../../products.json')
    }

    getAll() {
        return this.products;
    }

    search(title: string) {
        return this.products.filter(product => product.title.toLowerCase().includes(title.toLowerCase()));
    }

    get(id: string) {
        const res = this.products.find(product => product.id === id);
        if (!res) {
            throw new NotFoundException();
        }
        return res;
    }
}
