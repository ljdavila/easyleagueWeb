import { IUser } from '../shared/user.model';
import { IStats } from '../shared/stats.model';
import { ISport } from '../shared/sport.model';
// import { UserService } from '../services/user.service';
// let sports: any = {};
//

//Version 1
// export const MOCK_USERS: IUser[] = [
//     // new User (
//       {
//         id: 0,
//         name: "Luis Davila",
//         picture: "../../assets/images/luis.jpg",
//         age: 26,
//         sports:[{
//            name: "Basketball",
//            position: "Shooting Guard",
//            stats: {
//               basketball:{
//                   pts: 25.4,
//                   reb: 5,
//                   ast: 7,
//                   stl: 2,
//                   blk: 3,
//                   fgMade: 30,
//                   fgAttempts: 80,
//                   TO: 3
//               },
//           },
//          teams: [{
//            id: 0,
//            name: "Sharks",
//           //  players: ,
//            coachID: 0,
//            stats: {
//              basketball: {
//                pts: 80.4,
//                reb: 35,
//                ast: 47,
//                stl: 12,
//                blk: 13,
//                fgMade: 50,
//                fgAttempts: 110,
//                TO: 13
//              },
//            },
//            playersId: [0,1,2]
//          },
//          {
//            id: 1,
//            name: "Bogos",
//           //  players: ,
//            coachID: 0,
//            stats: {
//              basketball: {
//                pts: 40.4,
//                reb: 25,
//                ast: 27,
//                stl: 2,
//                blk: 33,
//                fgMade: 40,
//                fgAttempts: 110,
//                TO: 15
//              },
//            },
//             playersId: [0,1,2]
//          },
//        ],
//       //  games:[{
//       //    homeTeam:{
//       //      id: 0,
//       //      name: "Sharks",
//       //     //  players: ,
//       //      coachID: 0,
//       //      stats: {
//       //        basketball: {
//       //          pts: 80.4,
//       //          reb: 35,
//       //          ast: 47,
//       //          stl: 12,
//       //          blk: 13,
//       //          fgMade: 50,
//       //          fgAttempts: 110,
//       //          TO: 13
//       //        },
//       //      }
//       //    },
//       //    visitorTeam: {
//       //      id: 1,
//       //      name: "Bogos",
//       //     //  players: ,
//       //      coachID: 0,
//       //      stats: {
//       //        basketball: {
//       //          pts: 40.4,
//       //          reb: 25,
//       //          ast: 27,
//       //          stl: 2,
//       //          blk: 33,
//       //          fgMade: 40,
//       //          fgAttempts: 110,
//       //          TO: 15
//       //        },
//       //      }
//       //    },
//       //    startTime: "15/05/2017 2:00pm",
//       //    endTime: "15/05/2017 2:00pm",
//       //  }]
//        },
//        { name: "Baseball", position: "null",
//            stats: {
//              baseball:{
//                AB: 3,
//                R: 4,
//                H: 2,
//                RBI: 0,
//                BB: 1,
//                K: 2,
//               //  #P: 22,
//                AVG: .234,
//                OBP: .184,
//                SLG: .500
//              }
//           },
//            teams: [
//              {
//                id: 2,
//                name: "Ants",
//               //  players: ,
//                coachID: 0,
//                stats: {
//                  baseball: {
//                    AB: 3,
//                    R: 5,
//                    H: 2,
//                    RBI: 2,
//                    BB: 1,
//                    K: 2,
//                   //  #P: 22,
//                    AVG: .234,
//                    OBP: .184,
//                    SLG: .500
//                  }
//                },
//                playersId: [0,1,2]
//              }
//            ]
//          }
//        ]
//      }
//    ]



export const MOCK_USERS: IUser[] =[
  {
    id: 0,
    name: "Luis Davila",
    picture: "../../assets/images/luis.jpg",
    age: 26,
    games_id: [0,1],
    sports: [{name: "Basketball"},{name: "Baseball"}],
    stats: {
      user_id: 0,
      basketball: {
          pts: 25,
          reb: 5,
          ast: 5,
          stl: 5,
          blk: 5,
          fgMade: 5,
          fgAttempts: 5,
          TO: 5
        },
        baseball: {
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
  },
  {
    id: 1,
    name: "Janiel Davila",
    picture: "../../assets/images/luis.jpg",
    age: 20,
    games_id: [0,1],
    sports: [{name: "Basketball"}],
    stats: {
      user_id: 1,
      basketball: {
        pts: 25,
        reb: 5,
        ast: 5,
        stl: 5,
        blk: 5,
        fgMade: 5,
        fgAttempts: 5,
        TO: 5
      },
      baseball: {
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
  },
  {
    id: 2,
    name: "Jasiel Davila",
    picture: "../../assets/images/luis.jpg",
    age: 23,
    games_id: [0,1],
    sports: [{name: "Basketball"}],
    stats:{
      user_id: 2,
      basketball: {
        pts: 25,
        reb: 5,
        ast: 5,
        stl: 5,
        blk: 5,
        fgMade: 5,
        fgAttempts: 5,
        TO: 5
      },
      baseball: {
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
  }
]
