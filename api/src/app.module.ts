import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { CardsModule } from './cards/cards.module';
import { CardsService } from "./cards/cards.service";

@Module({
  imports: [AuthModule, UsersModule, ProductsModule, CardsModule],
  controllers: [AppController],
  providers: [AppService, ProductsService, CardsService],
})
export class AppModule {}
