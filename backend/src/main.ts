// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(new ValidationPipe({
//     whitelist: true,
//     forbidNonWhitelisted: true,
//     transform: true,
//     transformOptions:{enableImplicitConversion: true}
//   }))
//   app.setGlobalPrefix('api');
//   await app.listen(3333);
// }
// bootstrap();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.setGlobalPrefix('api');
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true,
  //   transform: true
  // }))
  await app.listen(7000);
}
bootstrap();

