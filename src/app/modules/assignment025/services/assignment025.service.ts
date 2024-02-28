import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/enviroments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Assignment025Service {

  readonly URL = environment.api;

  constructor(private http:HttpClient, private cookie:CookieService) { }

  getFileType():Observable<any>{
    return this.http.get(`${this.URL}/ApiAssignment025/getFileTypeProperties`)
      .pipe(
        map((dataRaw:any)=>{
          const data = dataRaw.data.fetch.map((e:any) => {
            e.properties = JSON.parse(e.properties) 
            return e;
          });
          return data;
        })
      )
  }

  uploadFile(data:FormData):Observable<any>{
    return this.http.post(`${this.URL}/ApiAssignment025DumpAcornFile/dumpFile`,data)
      .pipe(
        map((dataRaw:any)=>{
          console.log(dataRaw); 
          return dataRaw.data;
        })
      )
  }

  updateIbFile():Observable<any>{
    return this.http.post(`${this.URL}ApiAssg025WLPInboundFile/buildFile`,{})
      .pipe(
        map((dataRaw:any)=>{
          console.log(dataRaw); 
          return dataRaw.data;
        })
      )
  }

  uploadFileOB(data:FormData):Observable<any>{
    return this.http.post(`${this.URL}/ApiAssignament025DumpWlpFile/dumpFile`,data)
      .pipe(
        map((dataRaw:any)=>{
          console.log(dataRaw); 
          return dataRaw.data;
        })
      )
  }
}
