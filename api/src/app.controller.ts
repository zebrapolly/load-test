import { Controller, Get, Request, Query, Post, Body, UseGuards, Param, HttpCode } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { ProductsService } from "./products/products.service";
import { CardsService } from "./cards/cards.service";

@Controller()
export class AppController {
  constructor(
      private authService: AuthService,
      private productsService: ProductsService,
      private cardService: CardsService
  ) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  @Get('products')
  getProducts(@Request() req) {
    return this.productsService.getAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('products/search')
  searchProducts(@Query('title') title: string) {
    return this.productsService.search(title);
  }

  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return this.productsService.get(productId);
  }

  @Post('cards')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  addProduct(@Request() req) {
    return this.cardService.addProduct(req.user.userId, req.body.productId);
  }

  @Get('cards')
  @UseGuards(JwtAuthGuard)
  getCard(@Request() req) {
    return this.cardService.get(req.user.userId);
  }
}