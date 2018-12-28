import { TeamsService } from './../../../common/services/teams/teams.service';
import { Component, OnInit } from '@angular/core';
import { routeAnimations } from 'src/modules/common/animations/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [routeAnimations],
})
export class ListPageComponent implements OnInit {
  myTeams; searchedTeams;

  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
    this.teamsService.getMyTeams('user-davi').subscribe((teams) => {
      this.myTeams = teams;
      this.searchedTeams = teams;
      console.log(this.myTeams);
    });
  }

  find(searched: string) {
    this.searchedTeams = [];
    if (searched) {
      this.myTeams.find((team) => {
        console.log(team);
        if (team.name.toLowerCase().includes(searched.toLowerCase())) {
          this.searchedTeams.push(team);
        }
        console.log(this.searchedTeams);
      });
    } else {
      this.searchedTeams = this.myTeams;
    }
  }

  openSideForm() {
    this.router.navigate([{ outlets: { sideform: ['add'] } }]);
  }
}
