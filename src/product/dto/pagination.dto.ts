import { ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<TData> {
  @ApiProperty({
    description: 'Total number of items',
  })
  total: number;

  @ApiProperty({
    description: 'Number of items per page',
    default: 5,
  })
  take: number;

  @ApiProperty({
    description: 'Current page',
    default: 1,
  })
  page: number;

  data: TData[];
}
