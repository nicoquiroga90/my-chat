import { Body, Controller, Get, Post, Res } from '@nestjs/common'; // Importa Res para obtener acceso a la respuesta HTTP
import { PusherService } from './pusher.service';

@Controller('api')
export class AppController {
  constructor(private pusherService: PusherService) {}

  @Post('messages')
  async messages(
    @Body() body: { username: string; message: string },
    @Res() res: any 
  ): Promise<any> {
    const { username, message } = body;
    await this.pusherService.trigger('my-chat', 'message', { username, message });
    
    res.setHeader('Access-Control-Allow-Origin', 'https://my-chat-seven-phi.vercel.app');

    return "Message sent";
  }
}
