import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment025PageComponent } from './pages/assignment025-page/assignment025-page.component';

const routes: Routes = [
  {
    path:'',
    component:Assignment025PageComponent,
    outlet:'child'
  },
  {
    path:'**',
    redirectTo:'home/group6/assignment025'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Assignment025RoutingModule { }
