import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PusherService } from './pusher.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PusherService],
})
export class AppModule {
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'https://my-chat-seven-phi.vercel.app');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        next();
      })
      .forRoutes('*');
  }
}
