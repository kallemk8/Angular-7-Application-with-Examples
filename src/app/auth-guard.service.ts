import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { serverServices } from 'src/app/server.services';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private serverService: serverServices, private router: Router){}
  canActivate() {
    var userid = this.serverService.getCookie('userid');
    if(userid){
        return true;
    }else{
        this.router.navigate(['/login']);
        return false;
    }
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}