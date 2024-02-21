import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SideBarModel } from '@core/models/sidebar.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/enviroments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  readonly URL = environment.api;

  constructor(private Http:HttpClient) { }

  getSideBarProperties(): Observable<SideBarModel>{
  return this.Http.get(`${this.URL}/apiSideBar/getListOptions`)
    .pipe(
      map((dataRaw:any)=>{
        return dataRaw.data;
      })
    )
  }
}
