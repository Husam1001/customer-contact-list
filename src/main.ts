import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

// Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Customer API')
    .setDescription('Customer API description')
    .setVersion('1.0')
    .addTag('Cusomer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidocs', app, document);

  await app.listen(3000);
}
bootstrap();
