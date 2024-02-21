import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren:()=>import('@modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'group6/assignment017',
    loadChildren:()=>import('@modules/assignment017/assignment017.module').then(m=>m.Assignment017Module)
  },
  {
    path: 'group4/assignment025',
    loadChildren:()=>import('@modules/assignment025/assignment025.module').then(m=>m.Assignment025Module)
  },
  {
    path:'**',
    redirectTo:'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
