import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultResolver } from './api/ng';
import { DefaultComponent } from './default/default.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: '',
    component: DefaultComponent,
    resolve: {
      message: DefaultResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
