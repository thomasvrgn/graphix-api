import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { StatsMiddleware } from 'src/stats.middleware';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  controllers: [StatsController],
  providers: [StatsService]
})
export class StatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(StatsMiddleware)
      .forRoutes('/');
  }
}
