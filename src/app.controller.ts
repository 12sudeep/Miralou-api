import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HomeResponse } from './dto/home.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOkResponse({
    description: 'Data for home page',
    type: HomeResponse,
  })
  @Get('/home')
  getHome(): Promise<HomeResponse> {
    return this.appService.home();
  }
}
