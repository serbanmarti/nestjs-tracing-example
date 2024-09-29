// IMPORTANT: These need to be the first imports, in this order! DO NOT MOVE!!!
/* eslint-disable sort-imports */
import tracing from '@app/tracing';
import '@app/sentry'; // <- If you're using Sentry, make sure it's imported after the tracing service
/* eslint-enable sort-imports */

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  // Start the tracing service
  tracing.start();

  const app = await NestFactory.create(AppModule);

  const openApiConfig = new DocumentBuilder()
    .setTitle('NestJS Tracing Example API')
    .setDescription('The NestJS Tracing Example API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
