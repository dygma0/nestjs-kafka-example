import { Controller, Get } from '@nestjs/common';
import { OrderBackendService } from './order-backend.service';

@Controller()
export class OrderBackendController {
  constructor(private readonly orderBackendService: OrderBackendService) {}

  @Get()
  getHello(): string {
    return this.orderBackendService.getHello();
  }
}
