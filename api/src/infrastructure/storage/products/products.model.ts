import { Column, Generated, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "../../../domain";

export class ProductsModel implements Product {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Generated('uuid')
    readonly systemId: string;

    @Column()
    readonly title: string;

    @Column()
    readonly description: string;
}