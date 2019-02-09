import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/Authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InnovationManagerGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router,private location: Location){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
      if(this.auth.getInnovationManagaer()){
        return true;
      }else{
        this.location.back();
      }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if(this.auth.getInnovationManagaer()){
        return true;
      }else{
        this.location.back();
      }
    }
}
