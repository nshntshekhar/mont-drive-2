import { Injectable } from '@angular/core';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if(this.authService.isLoggedIn()){
          return true;
        }
        this.router.navigate(["/login"]);
        return false;
      }
    
       canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if(this.authService.isLoggedIn()){
          return true;
        }
        this.router.navigate(["/login"]);
        return false;
      }
}