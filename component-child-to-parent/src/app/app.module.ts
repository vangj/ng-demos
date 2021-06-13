import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildBindComponent } from './child-bind/child-bind.component';
import { ChildOutputComponent } from './child-output/child-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildBindComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
