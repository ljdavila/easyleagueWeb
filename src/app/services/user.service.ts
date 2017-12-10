import { IUser } from '../shared/user.model';
import { MOCK_USERS } from '../MOCK_DATA/users.mockdata';

export class UserService {
  users: IUser[] = MOCK_USERS;
  // console.log(this.users);
  getUsers() {
    return this.users.slice();
  }

  getUser(id: number){
    return this.users[id];
  }

  // getUserGames(user_id){
  //   games = [];
  //   for ( let game of users[user_id].games_id){
  //     games.push()
  //   }
  // }

}
