import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../entities/category.entity';
import { Product } from '../entities/product.entity';

export class HomeDto {
  @ApiProperty({ type: [Category] })
  categories: Category[];

  @ApiProperty({ type: [Product] })
  new_arrivals: Product[];
}

export class HomeResponse {
  @ApiProperty({ type: HomeDto })
  data: HomeDto;
}
