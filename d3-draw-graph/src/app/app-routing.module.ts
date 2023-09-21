import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { NxComponent } from './nx/nx.component';

const routes: Routes = [
  {path: 'nx', component: NxComponent},
  {path: 'demo', component: DemoComponent},
  {path: '', component: NxComponent},
  {path: '**', component: NxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
