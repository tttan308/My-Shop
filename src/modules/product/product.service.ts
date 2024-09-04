import Anthropic from '@anthropic-ai/sdk';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  private client: Anthropic;

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {
    this.client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });
  }

  async getAnswer(question: string): Promise<string> {
    const products = await this.productRepository.find();

    if (products.length === 0) {
      return 'No products available';
    }

    const response = await this.client.messages.create({
      max_tokens: 1024,
      messages: [{ role: 'user', content: question }],
      model: 'claude-3-opus-20240229',
    });

    return response.content.toString();
  }
}
