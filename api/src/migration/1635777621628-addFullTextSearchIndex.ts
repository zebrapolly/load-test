import {MigrationInterface, QueryRunner} from "typeorm";

export class addFullTextSearchIndex1635777621628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE products
            ADD COLUMN product_with_idx tsvector;
            UPDATE products
            SET product_with_idx = to_tsvector(title);
        `);
        await queryRunner.query(`
            CREATE INDEX product_idx
            ON products
            USING GIN(product_with_idx);
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP INDEX product_idx');
        await queryRunner.query('ALTER TABLE products DROP COLUMN product_with_idx');
    }

}
