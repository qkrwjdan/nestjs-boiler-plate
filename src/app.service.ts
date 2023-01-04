import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): string {
    return '<h1>Cake-Moim Backend Server</h1>';
  }
}
