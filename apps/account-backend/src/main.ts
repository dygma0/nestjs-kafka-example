import { NestFactory } from '@nestjs/core';
import { AccountBackendModule } from './account-backend.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountBackendModule);
  await app.listen(3000);
}
bootstrap();
