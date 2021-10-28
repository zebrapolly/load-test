import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { CardsModule } from './cards/cards.module';
import { CardsService } from './cards/cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfrastructureModule } from './infrastructure';

import pgConfig from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: ["/src/infrastructure/storage/**/*.model.ts"],
    synchronize: true,
  }), AuthModule, UsersModule, ProductsModule, CardsModule, InfrastructureModule],
  controllers: [AppController],
  providers: [ProductsService, CardsService],
})
export class AppModule {}
