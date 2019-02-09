import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { CanActivateChild } from '@angular/router/src/interfaces';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LogInOutGuard implements CanActivate,CanActivateChild {
  
  constructor(private authService: AuthService,private router:Router,private location: Location){
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
     // let myItem = this.authService.getLoggedInStatus();
      console.log("Loginout guard: "+this.authService.getLoggedInStatus());
      
     if(this.authService.getLoggedInStatus() ){
          return true;
     }else{
          //this.router.navigate(['login']);
          this.location.back();;
     }
    }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> 
  {
    if(this.authService.getLoggedInStatus() ){
      return true;
    }else{
      //this.router.navigate(['login']);
      this.location.back();
    }
  }
}
