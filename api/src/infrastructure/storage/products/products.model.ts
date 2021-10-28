import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../../domain';

@Entity('products')
export class ProductsModel implements Product {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'system_id', type: 'uuid'})
  @Generated('uuid')
  readonly systemId: string;

  @Column()
  readonly title: string;

  @Column()
  readonly description: string;
}
