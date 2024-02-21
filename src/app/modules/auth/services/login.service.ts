import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../enviroments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie:CookieService, private route:Router) {

  }

  sendCredentials$(data:object):Observable<any>{
    return this.http.post(`${this.URL}/apiSession/signIn`,data)
      .pipe(
        tap((dataRaw: any)=>{
          const{ tokenSession } = dataRaw;
          this.cookie.set('Token',tokenSession,4,'/');
        })
      ); 
  }

  checkSessionCookie():boolean{
    const cookieStatus = this.cookie.check('Token')

    if(!cookieStatus) this.route.navigate(['/','auth']);

    return cookieStatus;
  }

}
