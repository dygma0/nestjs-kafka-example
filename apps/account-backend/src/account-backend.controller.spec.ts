import { Test, TestingModule } from '@nestjs/testing';
import { AccountBackendController } from './account-backend.controller';
import { AccountBackendService } from './account-backend.service';

describe('AccountBackendController', () => {
  let accountBackendController: AccountBackendController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountBackendController],
      providers: [AccountBackendService],
    }).compile();

    accountBackendController = app.get<AccountBackendController>(AccountBackendController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(accountBackendController.getHello()).toBe('Hello World!');
    });
  });
});
