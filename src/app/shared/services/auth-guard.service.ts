import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JWTTokenService } from './jwttoken.service';


export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const jwtTokenService = inject(JWTTokenService);
  const router = inject(Router);

  if (!jwtTokenService.isLoggedIn()) return true;

  router.navigate(['/']);
  return false;

}

export const loggedInGuard: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state)