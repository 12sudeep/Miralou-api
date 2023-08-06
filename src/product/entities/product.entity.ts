import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  image: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: Number })
  category_id: number;

  @ApiProperty({ type: Number })
  rating: number;
}
