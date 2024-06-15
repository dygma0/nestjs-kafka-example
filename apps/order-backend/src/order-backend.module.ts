import { Module } from '@nestjs/common';
import { OrderBackendController } from './order-backend.controller';
import { OrderBackendService } from './order-backend.service';

@Module({
  imports: [],
  controllers: [OrderBackendController],
  providers: [OrderBackendService],
})
export class OrderBackendModule {}
