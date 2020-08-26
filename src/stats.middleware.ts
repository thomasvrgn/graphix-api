import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class StatsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip !== '::1' && req.method === 'POST')
      return console.log('Tentative de post depuis:', ip);
    next();
  }
}
