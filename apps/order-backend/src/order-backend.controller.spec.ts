import { Test, TestingModule } from '@nestjs/testing';
import { OrderBackendController } from './order-backend.controller';
import { OrderBackendService } from './order-backend.service';

describe('OrderBackendController', () => {
  let orderBackendController: OrderBackendController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderBackendController],
      providers: [OrderBackendService],
    }).compile();

    orderBackendController = app.get<OrderBackendController>(OrderBackendController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderBackendController.getHello()).toBe('Hello World!');
    });
  });
});
