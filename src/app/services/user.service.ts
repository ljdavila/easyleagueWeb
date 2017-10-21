import { User } from '../shared/user.model';


export class UserService {
  users: User[] = [
    new User( 0, "Luis Davila", "../../assets/images/luis.jpg", 26,
              [{ id: 0, name: "Basketball", position: "Shooting Guard",
                avgPerGames: {points: 25.4, rebounds: 5, assist: 7 }},
                { id: 1, name: "Baseball", position: "Second Base",
                  avgPerGames: {points: 5.4, rebounds: 5, assist: 3 }},
                  { id: 2, name: "Hockey", position: "Goallie",
                    avgPerGames: {points: 4, rebounds: 15, assist: 7 }}],
                [{ id: 0,  name: "Sharks",  sportId: 0}])
  ]

  getUsers() {
    return this.users.slice();
  }

  getUser(id: number){
    return this.users[id];
  }

}
