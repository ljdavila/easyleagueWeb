import { map } from 'rxjs/operators';
import { UsersService, TeamsService } from '../../../common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, query, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(500)),
    ]),
  ],
})
export class TeamComponent implements OnInit {
  searchedPlayer;
  team; show = false;
  cards = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
  animate;
  constructor(
    private teamService: TeamsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.data.pipe(map(data => data)).subscribe((dataIn: any) => {
      this.team = dataIn['team'][0];
    });
  }

  findPlayer(searched: string) {
    if (searched) {
      this.team.players.find((player) => {
        console.log(player);
        if (player.name.toLowerCase().includes(searched.toLowerCase())) {
          this.searchedPlayer = player;
        }
        console.log(this.searchedPlayer);
        if (this.searchedPlayer) {
          this.show = true;
          setTimeout(() => this.animate = 'start', 1000);
        }
      });
    } else {
      this.show = false;
    }
  }
}
