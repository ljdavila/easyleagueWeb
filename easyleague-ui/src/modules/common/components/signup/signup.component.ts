import { AuthenticationService } from './../../services/authentication/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services';
import { TokenPayload } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  @Input() animation;
  @Output() animationChange = new EventEmitter();
  credentials: TokenPayload;
  signupForm: FormGroup;
  imgURL: any;
  imagePath;
  encodedImage: string;
  message: string;
  reemail: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) {

    this.signupForm = this.fb.group({
      name: [''],
      hometown: [''],
      country: [''],
      picture: [''],
      email: [''],
      password: [''],
      birthday: ['']
    });
  }

  closeSideForm() {
    this.animation = this.animation === 'out' ? 'in' : 'out';
    this.animationChange.emit(this.animation);
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.encodedImage = this.imgURL;
    };
  }

  removePreview() {
    this.imgURL = '';
  }


  createAccount(data) {
    data.value.picture = btoa(this.encodedImage) || '';
    data.value.rank = -1;
    data.value.team_id = [];
    data.value.league_id = [];
    console.log(data);

    this.authService.register(data.value).subscribe(() => {
      this.closeSideForm();
    }, (err) => {
      console.error(err);
    });
  }
}
