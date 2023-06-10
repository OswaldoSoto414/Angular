import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public isLoggedIn = true;

  constructor() { }

  isAutenticated(){
    return this.isLoggedIn;
  }

}
