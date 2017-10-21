import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../services/user.service';
// import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService] // add NgbDropdownConfig to the component providers]
})
export class ProfileComponent implements OnInit {
  profileUser: User;
  table: {headers: string[],
          data: {
            date: string,
            against: string,
            points: number,
            rebounds: number,
            assists: number,
            steals: number}[]
  }


  constructor( private userService: UserService) {

     // customize default values of dropdowns used by this component tree
    //  config.up = true;
    //  config.autoClose = false;
   }

  ngOnInit() {
    this.profileUser = this.userService.getUser(0);
    this.table =
      {
         headers:['Date','Against', 'Points','Rebounds','Assists','Steals'],
         data:[
               {date: 'Aug/28/2017',against:'Tigers',points: 14, rebounds: 9, assists: 8, steals: 0},
               {date: 'Aug/28/2017',against:'Tigers',points: 14, rebounds: 9, assists: 8, steals: 0},
               {date: 'Aug/28/2017',against:'Tigers',points: 14, rebounds: 9, assists: 8, steals: 0},
               {date: 'Aug/28/2017',against:'Tigers',points: 14, rebounds: 9, assists: 8, steals: 0},
               {date: 'Aug/28/2017',against:'Tigers',points: 14, rebounds: 9, assists: 8, steals: 0}
        ]
      };
  }




}
