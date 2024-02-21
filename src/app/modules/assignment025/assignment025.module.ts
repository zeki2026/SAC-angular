import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Assignment025RoutingModule } from './assignment025-routing.module';
import { Assignment025PageComponent } from './pages/assignment025-page/assignment025-page.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    Assignment025PageComponent
  ],
  imports: [
    CommonModule,
    Assignment025RoutingModule,
    DataTablesModule
  ]
})
export class Assignment025Module { }
