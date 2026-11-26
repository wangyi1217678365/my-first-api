import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getFDE(): string {
    return 'FDE 转型第一步成功!';
  }
}