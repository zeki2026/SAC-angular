import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment017RoutingModule } from './assignment017-routing.module';
import { Assignment017PageComponent } from './pages/assignment017-page/assignment017-page.component';


@NgModule({
  declarations: [
    Assignment017PageComponent
  ],
  imports: [
    CommonModule,
    Assignment017RoutingModule
  ]
})
export class Assignment017Module { }
