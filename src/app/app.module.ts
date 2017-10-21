import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { CarouselModule } from 'angular4-carousel';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselSlideComponent } from './carousel/carousel-slide/carousel-slide.component';
import { HeaderComponent } from './header/header.component';
import { HeaderHomeComponent } from './header/header-home/header-home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUserDetailsComponent } from './profile/user-details/user-details.component';
import { UserAvgComponent } from './profile/user-avg/user-avg.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselSlideComponent,
    HeaderComponent,
    HeaderHomeComponent,
    ProfileComponent,
    ProfileUserDetailsComponent,
    UserAvgComponent
  ],
  imports: [
    BrowserModule,
    // CarouselModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
