import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountBackendService {
  getHello(): string {
    return 'Hello World!';
  }
}
