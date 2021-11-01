import { Column, Entity, Generated, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../../domain';

@Entity('products')
export class ProductsModel implements Product {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ name: 'system_id', type: 'uuid'})
  @Generated('uuid')
  @Index({ unique: true })
  readonly systemId: string;

  @Column()
  readonly title: string;

  @Column()
  readonly description: string;

  @Column("tsvector", { select: false })
  readonly product_with_idx: any;
}
