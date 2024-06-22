import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JWTTokenService } from '../../authenticate/services/jwttoken.service';


export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const jwtTokenService = inject(JWTTokenService);
  const router = inject(Router);

  let token = jwtTokenService.getDecodedToken();


  if (jwtTokenService.isLoggedIn() && token && token.role == "ROLE_ADMIN") 
    return true;

  router.navigate(['/']);
  return false;

}

export const adminGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state)