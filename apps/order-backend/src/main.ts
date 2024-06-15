import { NestFactory } from '@nestjs/core';
import { OrderBackendModule } from './order-backend.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderBackendModule);
  await app.listen(3000);
}
bootstrap();
