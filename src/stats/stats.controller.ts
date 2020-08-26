import { Controller, Get, Body, Post, Param, Ip } from '@nestjs/common';
import { Stats } from './interfaces/stats.interface';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor (private readonly StatsService: StatsService) {}

  @Get()
  public find (@Ip() ip): Stats | Object {
    return this.StatsService.find();
  }

  @Get(':category')
  public findOne (@Param('category') category: string): number | string | Object {
    return this.StatsService.findOne(category);
  }

  @Post()
  public post (@Body() params: Stats): Object {
    this.StatsService.post(params);
    return {
      status: 200,
      message: 'OK'
    };
  }
}
