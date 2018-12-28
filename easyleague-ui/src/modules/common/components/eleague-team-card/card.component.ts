import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class TeamCardComponent {
  @Input() team;

  constructor() {}
}
