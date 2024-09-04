import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import OpenAI from 'openai';
import { Repository } from 'typeorm';

import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  private openai: OpenAI;

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async getAnswer(question: string): Promise<string> {
    const products = await this.productRepository.find();

    if (products.length === 0) {
      return 'No products available';
    }

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    return response.choices[0].message.content?.trim() ?? 'No answer available';
  }
}
