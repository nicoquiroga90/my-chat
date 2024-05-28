import { Injectable } from '@nestjs/common';

require('dotenv').config();

const Pusher = require('pusher');
@Injectable()
export class PusherService {
  private pusher: typeof Pusher;

  constructor() {
   this.pusher = new Pusher({
      appId: 1809148,
      key: "eee8b3baf05b95a896c6",
      secret: "281e042478084cacdb10",
      cluster: "eu",
      useTLS: true,
    });
  }

  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data); 
  }
}
