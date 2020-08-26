import { StatsMiddleware } from './stats.middleware';

describe('StatsMiddleware', () => {
  it('should be defined', () => {
    expect(new StatsMiddleware()).toBeDefined();
  });
});
