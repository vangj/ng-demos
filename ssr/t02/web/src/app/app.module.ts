import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ShowDataComponent } from './component/show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    MainComponent,
    ShowDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'web' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
