import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/enviroments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Assignment025Service {

  readonly URL = environment.api;

  constructor(private http:HttpClient ) { }

  getFileType():Observable<any>{
    return this.http.get(`${this.URL}/ApiAssignment025/getFileTypeProperties`)
      .pipe(
        map((dataRaw:any)=>{
          return dataRaw.data.fetch
        })
      )
  }
}
