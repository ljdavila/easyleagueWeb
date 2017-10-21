import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class ProfileUserDetailsComponent implements OnInit {
  @Input() user: User;
  content = {msg: "Send a message", invite: "Send an invite"}

  constructor() { }

  ngOnInit() {

  }

  mouseEnter(div : string){
    //  console.log("mouse enter : " + div);

  }

  mouseLeave(div : string){
    console.log('mouse leave :' + div);
  }



}
