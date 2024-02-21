import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment017PageComponent } from './pages/assignment017-page/assignment017-page.component';

const routes: Routes = [
  {
    path:'',
    component:Assignment017PageComponent,
    outlet:'child'
  },
  {
    path:'**',
    redirectTo:'home/group6/assignment017'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Assignment017RoutingModule { }
