import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../shared/user.model';
import { ISport } from '../../shared/sport.model';

import { IStats } from '../../shared/stats.model';
import { KeysPipe } from '../../shared/pipes/keys.pipe';

@Component({
  selector: 'app-user-avg',
  templateUrl: './user-avg.component.html',
  styleUrls: ['./user-avg.component.scss'],
  providers: [KeysPipe]
})

export class UserAvgComponent implements OnInit {
  @Input() user: IUser;
  @Output() statsSelected = new EventEmitter();
  sport: ISport; // indexes: 0 = basketball, 1 = baseball
  stats: any;
  statsKeys = Object.keys;
  test: string;
  constructor(private keys: KeysPipe) {
      this.test = "test";
}

  ngOnInit() {
    this.sport = this.user.sports[0];
    this.stats = this.user.stats.basketball
    console.log("user 1: " + this.sport.name)

    // this.stats = this.user.sports[0].stats.basketball;
//     this.user.sports.forEach((item, index) => {
//       // console.log("real test: " + this.user.sports['baseball'])
//     console.log(item);
//     console.log(index);
// });

  }

  onSportSelected(item){

    this.sport = item;
    console.log("AB " + item.name.toLowerCase());
    this.stats = this.user.stats[item.name.toLowerCase()];
    // console.log("stats " + this.stats.AB);
    for(let i in this.stats){
      console.log(i + ":  " + this.stats[i] );
      // console.log("stats selected " + this.statsSelected[k])
    }
    this.statsSelected.emit(this.stats);
  }

}
