import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('fde')
  getFDE(@Query('name') name: string, @Query('age') age: number): string {
    return `${this.appService.getFDE()} ${name} ${age}`;
  }
  @Post('submitData/:id')
  postSubmitData(
    @Param('id') id: string,
    @Query('type') type: string,
    @Body() body: any
  ) {
  return {
      接收到的ID: id,
      接收到的类型: type,
      接收到的Body: body.msg
    };
  }
}
