import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher'; // Importa Pusher como un módulo

@Injectable()
export class PusherService {
  private pusher: Pusher;

  constructor() {
    this.pusher = new Pusher({
      appId: '1809148',
      key: 'eee8b3baf05b95a896c6',
      secret: '281e042478084cacdb10',
      cluster: 'eu',
      useTLS: true,
    });
  }

  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data); // Usa la instancia de Pusher para llamar al método trigger
  }
}
