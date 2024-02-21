import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../../modules/auth/services/login.service';

export const sessionGuard: CanActivateFn = (route, state) => {

  const check = inject(LoginService);
  
  return check.checkSessionCookie();
};
