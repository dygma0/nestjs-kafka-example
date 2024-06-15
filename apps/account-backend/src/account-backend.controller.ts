import { Controller, Get } from '@nestjs/common';
import { AccountBackendService } from './account-backend.service';

@Controller()
export class AccountBackendController {
  constructor(private readonly accountBackendService: AccountBackendService) {}

  @Get()
  getHello(): string {
    return this.accountBackendService.getHello();
  }
}
