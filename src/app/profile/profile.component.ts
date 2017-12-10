import { Component, OnInit } from '@angular/core';
import { IGame } from '../shared/game.model';
import { IUser } from '../shared/user.model';
import { UserService } from '../services/user.service';
import {GameService } from '../services/game.service';
// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService, GameService] // add NgbDropdownConfig to the component providers]
})
export class ProfileComponent implements OnInit {
  profileUser: IUser;
  statsKeys = Object.keys;
  table: any = [];
  games: IGame;

  constructor( private userService: UserService, private gameService: GameService) {
     // customize default values of dropdowns used by this component tree
    //  config.up = true;
    //  config.autoClose = false;
  }

  ngOnInit() {
    this.profileUser = this.userService.getUser(0);
    for(let game_id of this.profileUser.games_id){
      this.table.push(this.gameService.getGameById(game_id));
    }
    console.log("user: " + this.profileUser.name)
    // this.table = this.profileUser.sports[0].stats.basketball;
    // this.gameService.getGamesByUser().then(games => this.games = games);

  }

  checkSport(stats){
    this.table = [];
    console.log("table " + stats.AB)
    for(let game_id of this.profileUser.games_id){
      for(let gameStats of this.gameService.getGameById(game_id).gameStats){
        console.log("game Id " + gameStats.user_id + " user id " + this.profileUser.id)
        if(gameStats.user_id === this.profileUser.id)
          this.table.push(gameStats);
      };
    }

    console.log("table " + this.table[0].basketball.pts)
    //  this.table = stats;
    for(let i in this.table[0].basketball ){
      console.log("data: "+ i)
    }
  }

}
