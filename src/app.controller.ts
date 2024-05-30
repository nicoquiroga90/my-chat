import { Body, Controller, Post, Get } from '@nestjs/common';
import { PusherService } from './pusher.service';

@Controller('api')
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post('messages')
  async messages(
    @Body() body: { username: string; message: string }
  ): Promise<any> {
    const { username, message } = body;
    await this.pusherService.trigger('my-chat', 'message', { username, message });
    return "Message sent";
  }

  @Get('status')
  getStatus(): string {
    return "Api online";
  }
}