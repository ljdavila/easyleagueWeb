import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-avg',
  templateUrl: './user-avg.component.html',
  styleUrls: ['./user-avg.component.scss']
})
export class UserAvgComponent implements OnInit {
  @Input() user: User;
  sportSelected: {
    id: number,
    name: string,
    position: string,
    avgPerGames: {
      points: number,
      rebounds: number,
      assist: number
    }
  };

  constructor() {
  console.log("user: " + this.user)}

  ngOnInit() {
    this.sportSelected = this.user.sports[0];
  }

  onSportSelected(item){
    this.sportSelected = item;
  }

}
