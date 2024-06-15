import { Module } from '@nestjs/common';
import { AccountBackendController } from './account-backend.controller';
import { AccountBackendService } from './account-backend.service';

@Module({
  imports: [],
  controllers: [AccountBackendController],
  providers: [AccountBackendService],
})
export class AccountBackendModule {}
