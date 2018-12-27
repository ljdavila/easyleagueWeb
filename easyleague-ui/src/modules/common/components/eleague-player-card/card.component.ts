import { UsersService } from './../../services/users/users.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() player;

  constructor( private userService: UsersService) {}

  ngOnInit() {
    this.player.info = {};
    console.log(this.player.info);
    this.userService.getUser(this.player.id).subscribe(
      (user) => {
        console.log(this.player.id);
        console.log(user);

      this.player.info = user[0];
    }, (error) => {
      console.log('in errpr');

      console.log(error);
    });
  }
}
