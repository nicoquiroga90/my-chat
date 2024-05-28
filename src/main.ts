import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "https://my-chat-seven-phi.vercel.app/"
  })
  await app.listen(8000);
}
bootstrap();
