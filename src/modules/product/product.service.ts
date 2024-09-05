import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  private genAI: GoogleGenerativeAI;

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {
    const geminiApiKey = process.env.GEMINI_API_KEY ?? 'default-api-key';
    this.genAI = new GoogleGenerativeAI(geminiApiKey);
  }

  async getAnswer(question: string): Promise<string> {
    const products = await this.productRepository.find();

    if (products.length === 0) {
      return 'No products available';
    }

    const model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const data = products.map((product) => product.name).join('\n');

    const result = await model.generateContent(question + '\n' + data);

    return result.response.text();
  }
}
