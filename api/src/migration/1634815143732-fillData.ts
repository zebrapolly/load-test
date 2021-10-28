import {MigrationInterface, QueryRunner} from "typeorm";
import { readFile } from 'fs/promises';

export class fillData1634815143732 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const usersDatasetBuff = await readFile('/usr/src/datasets/users.json');
        const productsDatasetBuff = await readFile('/usr/src/datasets/products.json');

        const usersDataset = JSON.parse(usersDatasetBuff.toString());
        const productsDataset = JSON.parse(productsDatasetBuff.toString());
        let usersQuery = 'INSERT INTO users (system_id, username, password) VALUES';
        for (let user of usersDataset) {
            usersQuery +=  `('${user.userId}', '${user.username}', '${user.password}'),`;
        }

        for (let i = 0; i< productsDataset.length; i=i+10) {
            await this.insertProductsBatch(10, i, productsDataset, queryRunner);
        }

        await queryRunner.query(usersQuery.slice(0, -1));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

    async insertProductsBatch(count, offset, data, queryRunner) {

        let productsQuery = 'INSERT INTO products (system_id, title, description) VALUES ';

        for (let product of data.slice(offset, offset+count)) {
            productsQuery += `('${product.id}', '${product.title.replace('\'', '\'\'')}', '${product.description.replace('\'', '\'\'')}'),`;
        }
        await queryRunner.query(productsQuery.slice(0, -1));
    }
}
