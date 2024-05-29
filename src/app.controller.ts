import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
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

  @Get('messages')
  options(@Res() res: Response) {
    res.set({
      'Access-Control-Allow-Origin': 'https://my-chat-seven-phi.vercel.app',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.status(204).end();
  }
}
