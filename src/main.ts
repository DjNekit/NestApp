import { NestFactory } from '@nestjs/core';
import { AppModule } from './App/app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(process.env.PORT);
}

bootstrap();
