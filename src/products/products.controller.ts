import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  subscriptions(): string {
    return this.productsService.subscriptions();
  }
  
  @Post()
  cancellations(): string {
    return this.productsService.cancellations();
  }
  
  @Get()
  cancellations(id): string {
    let id = id
    return this.productsService.cancellations(id);
  }
}
