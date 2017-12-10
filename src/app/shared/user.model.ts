import { ISport } from './sport.model';
import { IStats } from './stats.model';

export interface IUser {
  //
  // id: number;
  // name: string;
  // picture: string;
  // age: number;
  // sports: ISport[];
  //


  //version 2
  id: number;
  name: string;
  picture: string;
  age: number;
  sports: ISport[];
  stats: IStats;
  games_id: number[];
}
