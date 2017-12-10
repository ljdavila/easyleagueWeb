import { IStats } from '../shared/stats.model';

export const MOCK_STATS: IStats[] = [
  {
    user_id: 0,
    team_id: 0,
    basketball:{
      pts: 25,
      reb: 5,
      ast: 5,
      stl: 5,
      blk: 5,
      fgMade: 5,
      fgAttempts: 5,
      TO: 5
    }
  },
  {
    user_id: 1,
    team_id: 0,
    basketball:{
      pts: 35,
      reb: 5,
      ast: 5,
      stl: 5,
      blk: 5,
      fgMade: 5,
      fgAttempts: 5,
      TO: 5
    }
  },
  {
    user_id: 0,
    team_id: 1,
    baseball:{
      AB: 2,
      R: 2,
      H: 2,
      RBI: 2,
      BB: 2,
      K: 2,
      // #P: 2,
      AVG: 2,
      OBP: 2,
      SLG: 2
    }
  }
]
