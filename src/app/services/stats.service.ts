import { Injectable } from '@angular/core';
import { MOCK_STATS } from '../MOCK_DATA/stats.mockdata';
import { IStats } from '../shared/stats.model';

@Injectable()
export class StatsService {
  stats: IStats[]; ;

  getGames(): Promise<IStats[]> {
    return Promise.resolve(MOCK_STATS);
  }

  getStatsByUser(user_id): IStats[] {
    for( let stat of MOCK_STATS)
      if (stat.user_id === user_id)
        this.stats.push(stat)
    return this.stats;
  }
}
