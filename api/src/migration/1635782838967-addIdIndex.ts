import {MigrationInterface, QueryRunner} from "typeorm";

export class addIdIndex1635782838967 implements MigrationInterface {
    name = 'addIdIndex1635782838967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b69f52f49335f53b351e0afa5a" ON "products" ("system_id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f1a16e66361771fd40f5e471cc" ON "users" ("system_id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_f1a16e66361771fd40f5e471cc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b69f52f49335f53b351e0afa5a"`);
    }

}
