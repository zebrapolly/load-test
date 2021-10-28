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
  imports: [
    TypeOrmModule.forRoot(pgConfig),
    AuthModule,
    UsersModule,
    ProductsModule,
    CardsModule,
    InfrastructureModule,
  ],
  controllers: [AppController],
  providers: [ProductsService, CardsService],
})
export class AppModule {}
