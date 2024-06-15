import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderBackendService {
  getHello(): string {
    return 'Hello World!';
  }
}
