export class User {

  public id: number;
  public name: string;
  public picture: string;
  public age: number;
  public sports: {
            id: number,
            name: string,
            position: string,
            avgPerGames: {
                points: number,
                rebounds: number,
                assist: number
            }
         }[];
  public teams: {
           id: number,
           name: string,
           sportId: number
         }[];


  constructor(id: number, name: string, picture: string, age: number, sports:{
                  id: number, name: string,  position: string, avgPerGames:{
                    points: number, rebounds: number, assist: number }}[],
                      teams: { id: number, name: string, sportId: number}[]){

    this.id = id;
    this.name = name;
    this.picture = picture;
    this.age = age;
    this.sports = sports;
    // this.avgPerGames = avgPerGames;
    this.teams = teams;

  }
}
