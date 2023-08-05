import { PrismaService } from '@/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PaginatedDto } from './dto/pagination.dto';
import { PaginationQuery } from './dto/pagination.query';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(query: PaginationQuery): Promise<PaginatedDto<Product>> {
    const data = await this.prisma.product.findMany({
      take: Number(query.take),
      skip: Number(query.page - 1) * Number(query.take),
      where: {
        name: {
          contains: query.query ?? '',
        },
      },
    });
    const total = await this.prisma.product.count({
      where: {
        name: {
          contains: query.query ?? '',
        },
      },
    });
    return {
      total,
      take: Number(query.take),
      page: Number(query.page),
      data,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
