export interface IStats {
// user_id: number
// basketball?: {
//     pts: number,
//     reb: number,
//     ast: number,
//     stl: number,
//     blk: number,
//     fgMade: number,
//     fgAttempts: number,
//     TO: number
//   };
//   //
//   // public football: {
//   //   C: number,
//   //   ATT: number,
//   //   YDS: number,
//   //   AVG: number,
//   //   TD: number,
//   //   INT: number,
//   //   SACKS: number,
//   //   QBR: number,
//   //   RTG: number
//   // };
//   //
// baseball?: {
//     AB: number,
//     R: number,
//     H: number,
//     RBI: number,
//     BB: number,
//     K: number,
//     // #P: number,
//     AVG: number,
//     OBP: number,
//     SLG: number
//   };
//   //
//   // public hockey: {
//   //   G: number,
//   //   A: number,
//   //   // +/-: number,
//   //   SOG: number,
//   //   MS: number,
//   //   BS: number,
//   //   PN: number,
//   //   PIM: number,
//   //   HT: number,
//   //   TK: number,
//   //   GV: number,
//   //   SHF: number,
//   //   TOT: number,
//   //   PP: number,
//   //   SH: number,
//   //   EV: number,
//   //   FW: number,
//   //   FL: number
//   // };



//version 2
user_id: number;
team_id?: number;
game_id?: number;

basketball?: {
    pts: number,
    reb: number,
    ast: number,
    stl: number,
    blk: number,
    fgMade: number,
    fgAttempts: number,
    TO: number
  };
  //
  // public football: {
  //   C: number,
  //   ATT: number,
  //   YDS: number,
  //   AVG: number,
  //   TD: number,
  //   INT: number,
  //   SACKS: number,
  //   QBR: number,
  //   RTG: number
  // };
  //
baseball?: {
    AB: number,
    R: number,
    H: number,
    RBI: number,
    BB: number,
    K: number,
    // #P: number,
    AVG: number,
    OBP: number,
    SLG: number
  };
  //
  // public hockey: {
  //   G: number,
  //   A: number,
  //   // +/-: number,
  //   SOG: number,
  //   MS: number,
  //   BS: number,
  //   PN: number,
  //   PIM: number,
  //   HT: number,
  //   TK: number,
  //   GV: number,
  //   SHF: number,
  //   TOT: number,
  //   PP: number,
  //   SH: number,
  //   EV: number,
  //   FW: number,
  //   FL: number
  // };


}
