import { ApiProperty } from '@nestjs/swagger';

export class PaginationQuery {
  @ApiProperty({
    minimum: 1,
    title: 'Page',
    format: 'int32',
    default: 1,
  })
  page: number;

  @ApiProperty({
    minimum: 0,
    maximum: 20,
    description: 'Total number of items',
    required: false,
    default: 5,
  })
  take: number;

  @ApiProperty({
    description: 'Search query',
    required: false,
  })
  query: string;
}
