import { ITeam } from './team.model';
import { ISport } from './sport.model';
import { IStats } from './stats.model';

export interface IGame {
  // id: number;
  // startTime: string;
  // endTime: string;
  // homeTeam:{
  //   team_id: number,
  //   players: [{
  //     user_id: number,
  //     stats: IStats
  //   }]
  // };
  // visitorTeam:{
  //   team_id: number,
  //   players: [{
  //     user_id: number,
  //     stats: IStats
  //   }]
  // },
  // stats: IStats[];



  //// Version 2

  id: number;
  sport_id: number;
  name?: string;
  date: string;
  homeTeam_id: number;
  visitorTeam_id: number;
  gameStats: IStats[];
}
