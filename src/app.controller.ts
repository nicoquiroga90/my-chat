import { Body, Controller, Get, Post } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller('api')
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post('messages')
  async messages(
    @Body() body: { username: string; message: string }
  ): Promise<any> {
    const { username, message } = body;
    await this.pusherService.trigger('chat', 'message', { username, message });
    return "Message sent";
  }
}
