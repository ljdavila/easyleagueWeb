import { IUser } from '../shared/user.model';
import { IStats } from '../shared/stats.model';
import { ISport } from '../shared/sport.model';
import { IGame } from '../shared/game.model';
// import { UserService } from '../services/user.service';
// let sports: any = {};

//Version 1
// export const MOCK_GAMES: IGame[] =[{
//   id: 0,
//   startTime: "11/05/17 2:00pm",
//   endTime: "11/05/17 3:00pm",
//   homeTeam: {
//     team_id: 0,
//     players: [{
//       user_id: 0,
//       stats:{
//         basketball:{
//           pts: 20,
//           reb: 5,
//           ast: 5,
//           stl: 2,
//           blk: 0,
//           fgMade: 6,
//           fgAttempts: 13,
//           TO: 2
//         }
//       }
//     },
//     {
//       user_id: 0,
//       stats:{
//         basketball:{
//           pts: 10,
//           reb: 7,
//           ast: 5,
//           stl: 2,
//           blk: 0,
//           fgMade: 6,
//           fgAttempts: 13,
//           TO: 4
//         }
//       }
//     },
//     {
//       user_id: 0,
//       stats:{
//         basketball:{
//           pts: 20,
//           reb: 5,
//           ast: 5,
//           stl: 2,
//           blk: 0,
//           fgMade: 6,
//           fgAttempts: 13,
//           TO: 2
//         }
//       },
//     }]
//   },
//   visitorTeam:{
//     team_id: 0,
//     players: [{
//       user_id: 0,
//       stats:{
//         basketball:{
//           pts: 20,
//           reb: 5,
//           ast: 5,
//           stl: 2,
//           blk: 0,
//           fgMade: 6,
//           fgAttempts: 13,
//           TO: 2
//         }
//       }
//     },
//     {
//       user_id: 0,
//       stats:{
//         basketball:{
//           pts: 20,
//           reb: 5,
//           ast: 5,
//           stl: 2,
//           blk: 0,
//           fgMade: 6,
//           fgAttempts: 13,
//           TO: 2
//         }
//       }
//     },
//     {
//       user_id: 0,
//       stats:{
//         basketball:{
//           pts: 20,
//           reb: 5,
//           ast: 5,
//           stl: 2,
//           blk: 0,
//           fgMade: 6,
//           fgAttempts: 13,
//           TO: 2
//         }
//       },
//     }]
//   },
// }]


//Version 2
export const MOCK_GAMES: IGame[] = [
  {
    id: 0,
    sport_id: 0,
    date: "05/11/17 2:00pm",
    homeTeam_id: 0,
    visitorTeam_id: 1,
    gameStats: [
      {
        user_id: 0,
        team_id: 0,
        basketball: {
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
        basketball: {
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
        user_id: 2,
        team_id: 1,
        basketball: {
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
    ]
  },
  {
    id: 1,
    sport_id: 0,
    date: "05/11/17 3:00pm",
    homeTeam_id: 0,
    visitorTeam_id: 1,
    gameStats: [
      {
        user_id: 0,
        team_id: 0,
        basketball: {
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
        basketball: {
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
        user_id: 2,
        team_id: 1,
        basketball: {
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
    ]
  }
]
