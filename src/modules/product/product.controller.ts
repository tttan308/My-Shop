import { Body, Controller, Param, Post } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post(':id/ask')
  async askQuestion(
    @Param('id') productId: string,
    @Body('question') question: string,
  ) {
    const answer = await this.productService.getAnswer(productId, question);

    return { answer };
  }
}
