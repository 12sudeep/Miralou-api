import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  image: string;
}
