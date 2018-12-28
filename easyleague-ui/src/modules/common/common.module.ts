import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatDividerModule, MatInputModule } from '@angular/material';
import { COMPONENT_DECLARATIONS } from './components';
import { SERVICES_DECLARATIONS } from './services';
import { RESOLVER_DECLARATIONS } from './resolvers';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT_DECLARATIONS,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule

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
    MatButtonModule
  ],
  providers: [
    ...SERVICES_DECLARATIONS,
    ...RESOLVER_DECLARATIONS,
  ],
})
export class CommonModule { }
