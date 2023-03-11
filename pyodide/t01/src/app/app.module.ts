import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { UploadComponent } from './components/upload/upload.component';
import { ShapeComponent } from './components/data/shape/shape.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    UploadComponent,
    ShapeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
