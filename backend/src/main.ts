import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs'

const httpsOptions = {
  key: fs.readFileSync('./secrets/create-cert-key.pem'),
  cert: fs.readFileSync('./secrets/create-cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{httpsOptions});

  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Specify your frontend URL here
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials such as cookies
  });

  await app.listen(3000);
}
bootstrap();
