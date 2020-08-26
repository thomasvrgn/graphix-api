import { Injectable } from '@nestjs/common';
import { Stats } from './interfaces/stats.interface';

@Injectable()
export class StatsService {

  private stats: Stats;

  public find (): Stats | Object {
    if (!this.stats) return {
      status: 500,
      message: 'Stats does not exists!'
    };
    return this.stats;
  }

  public findOne (category: string): number | string | Object {
    if (!this.stats) return {
      status: 500,
      message: 'Stats does not exists!'
    };
    return this.stats[category];
  }

  public post (informations: Stats): void | Object {
    if (!informations) return {
      status: 500,
      message: 'Body must be defined!'
    };
    this.stats = informations;
  }

}
