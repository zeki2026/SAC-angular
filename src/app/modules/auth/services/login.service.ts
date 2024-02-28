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
          const{ tokenSession, jobCode, profileId } = dataRaw.data.user;
          // console.log(dataRaw)
          this.cookie.set('Token',tokenSession,4,'/');
          this.cookie.set('JobCode',jobCode,4,'/');
          this.cookie.set('ProfileId',profileId,4,'/');
        })
      ); 
  }

  checkSessionCookie():boolean{
    const cookieStatus = this.cookie.check('Token')

    if(!cookieStatus) this.route.navigate(['/','auth']);

    return cookieStatus;
  }

  getToken():object
  {
    const cookies= {
      "token":this.cookie.get('token'),
      "jobcode":this.cookie.get('JobCode'),
      "profileId":this.cookie.get('ProfileId')
    };
    return cookies;
  }
}
