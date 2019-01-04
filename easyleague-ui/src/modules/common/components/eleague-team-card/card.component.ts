import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() team;

  constructor() {}

  ngOnInit() {
    this.team['logo'] = atob(this.team.logo);
  }
}
