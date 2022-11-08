import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'
import { Account } from '../common/account';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {

  checkAccount: Account;

  constructor(private router: Router, private loginService: LoginService) { }

  // guard function will block a route if they user isn't logged in
  // default account id will be 0 unless user is logged in
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // subscribe account data into this.checkAccount
    this.loginService.share.subscribe(data => this.checkAccount = data);
    console.log("checkAccount id is " + this.checkAccount.id);
    if (this.checkAccount.id > 0) {
      // if this.checkAccount.id is greater than zero
      // it means the user is logged in
      return true;
    } else {
      // if user is not logged in navigate to 'PageNotFoundComponent'
      this.router.navigate(['notFound']);
      return false;
    }

  }
}
