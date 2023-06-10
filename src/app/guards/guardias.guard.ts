import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { ServiciosService } from '../servicios/servicios.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class GuardiasGuard implements CanActivate{
    constructor(private serviciosService: ServiciosService,  private router: Router) { }

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {
        let isLoggedIn = this.serviciosService.isAutenticated();
        if(isLoggedIn){
          return true;
        }else {
          this.router.navigate(['home']);
          return false;
        }
      }

}
