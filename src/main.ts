import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "https://my-chat-r57izxo0l-nicos-projects-7661041f.vercel.app/"
  })
  await app.listen(8000);
}
bootstrap();
