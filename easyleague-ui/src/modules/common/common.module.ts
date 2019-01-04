import { LoginComponent } from './../eleague/pages/login/login.component';
import { EleagueModule } from './../eleague/eleague.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatDividerModule,
         MatInputModule, MatTooltipModule, MatAutocompleteModule, MatSelectModule } from '@angular/material';
import { COMPONENT_DECLARATIONS } from './components';
import { SERVICES_DECLARATIONS } from './services';
import { RESOLVER_DECLARATIONS } from './resolvers';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './routing.module';
import {NgbModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { GUARDS_DECLARATIONS } from './guards';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT_DECLARATIONS,
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbDropdownModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    ...COMPONENT_DECLARATIONS,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    NgbDropdownModule
  ],
  providers: [
    ...GUARDS_DECLARATIONS,
    ...SERVICES_DECLARATIONS,
    ...RESOLVER_DECLARATIONS,
  ],
})
export class CommonModule { }
