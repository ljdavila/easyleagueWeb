import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { COMPONENT_DECLARATIONS } from './pages/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';
import { CommonModule } from '../common/common.module';
import { AppComponent } from './../common/components/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ELEAGUE_COMPONENT_DECLARATIONS } from './component';

@NgModule({
  declarations: [
    ...COMPONENT_DECLARATIONS,
    ...ELEAGUE_COMPONENT_DECLARATIONS
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],

  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class EleagueModule { }
