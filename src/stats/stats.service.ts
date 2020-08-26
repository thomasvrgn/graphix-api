import { Injectable } from '@nestjs/common';
import { Stats } from './interfaces/stats.interface';

@Injectable()
export class StatsService {

  private stats: Stats;

  public find (): Stats {
    return this.stats;
  }

  public findOne (category: string): number | string {
    return this.stats[category];
  }

  public post (informations: Stats): void {
    this.stats = informations;
  }

}
