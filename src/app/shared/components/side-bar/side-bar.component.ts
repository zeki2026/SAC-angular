import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SideBarModel } from '@core/models/sidebar.model';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from '@shared/services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  sidebarProperties: SideBarModel = {};

  wrap:boolean = true;

  constructor(private _service: SidebarService, private route:Router){
    
  }

  ngOnInit(): void {
    this.getSideBarProperties();
  }

  getSideBarProperties():void{
    this._service.getSideBarProperties()
    .subscribe(
      {
        next: (data) => {
          this.sidebarProperties = data;
          // console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      }
      )
    }
    
    redirect(internalKey:number,bundle:string){
      this.route.navigate([`/home/group${bundle}/`,`assignment${internalKey}`]);
    }
  
}
