import { Body, Controller, Get, Post, Header } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller('api')
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post('messages')
  @Header('Access-Control-Allow-Origin', 'https://my-chat-seven-phi.vercel.app')
  async messages(
    @Body() body: { username: string; message: string }
  ): Promise<any> {
    const { username, message } = body;
    await this.pusherService.trigger('my-chat', 'message', { username, message });
    return "Message sent";
  }
}
