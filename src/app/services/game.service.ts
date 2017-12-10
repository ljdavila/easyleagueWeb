import { Injectable } from '@angular/core';
import { IGame } from '../shared/game.model';
import { MOCK_GAMES } from '../MOCK_DATA/games.mockdata';

@Injectable()
export class GameService {
  games: IGame[] = MOCK_GAMES; ;

  getGames(): Promise<IGame[]> {
    return Promise.resolve(MOCK_GAMES);
  }

  getGameById(game_id): IGame {
    // console.log()
    return this.games[game_id];
  }
  //
  // getGameByid(id: number): Promise<IGame>{
  //   return this.getGames()
  //            .then(games => games.find(game => game.id === id));
   //
  //  const url = `${this.heroesUrl}/${id}`;
  //  return this.http.get(url)
  //        .toPromise()
  //        .then(response => response.json().data as IGame)
  //        .catch(this.handleError);
 // }


  // getGameByUser(id: number){
  //
  //   return this.games.players[id];
  // }
}
