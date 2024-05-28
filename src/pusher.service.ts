import { Injectable } from '@nestjs/common';

require('dotenv').config();

const Pusher = require('pusher');
@Injectable()
export class PusherService {
  private pusher: typeof Pusher;

  constructor() {
   this.pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: process.env.PUSHER_KEY,
      secret: process.env.PUSHER_SECRET,
      cluster: process.env.PUSHER_CLUSTER,
      useTLS: true,
    });
  }

  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data); 
  }
}
