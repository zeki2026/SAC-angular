import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '@modules/auth/services/login.service';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const token = inject(LoginService);
    const session:any = token.getToken();
    let newRequest = req.clone(
      {
        setHeaders:{
          Authorization: "Bearer"+session.token,
          JobCode: session.jobcode,
          ProfileId: session.profileId
        }
      }
    );
    console.log('se agrego el header');
    return next(newRequest);
  } catch (error) {
    console.log('Error en la interceptor');
    return next(req);
    
  }
};
