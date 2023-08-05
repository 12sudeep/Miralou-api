import { Category } from '@/entity/category.entity';
import { Product } from '@/entity/product.entity';
import { ApiProperty } from '@nestjs/swagger';

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
