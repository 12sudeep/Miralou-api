import { Injectable } from '@nestjs/common';
import { HomeResponse } from './product/dto/home.dto';
import { PrismaService } from './services/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Healthy and running!';
  }

  async home(): Promise<HomeResponse> {
    const categories = await this.prisma.category.findMany({
      take: 4,
    });
    const new_arrivals = await this.prisma.product.findMany({
      take: 4,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return {
      data: {
        categories: categories,
        new_arrivals,
      },
    };
  }
}
