import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildRefComponent } from './child-ref/child-ref.component';
import { ChildLifecycleComponent } from './child-lifecycle/child-lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildRefComponent,
    ChildLifecycleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
