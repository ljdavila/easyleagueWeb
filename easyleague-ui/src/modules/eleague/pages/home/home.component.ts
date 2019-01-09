import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [1, 2, 3, 4, 5];
  options = [ 'Basketball', 'Baseball', 'Volleyball', 'Hockey'];
  users;

  constructor() {   }

    ngOnInit() {}
}
