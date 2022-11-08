import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '../common/account';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // default Account object
  // id property value 0 means user isn't logged in
  // since Account objects from the database start from 1
  private currAccount = new BehaviorSubject<Account>({
    id: 0,
    firstName: '',
    lastName: '',
    email: null,
    userName: '',
    password: null,
    address: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    creditCardNumber: '',
    creditCardCode: 0,
    creditCardName: '',
    creditCardExpirationMonth: 0,
    creditCardExpirationYear: 0});
    
  public share = this.currAccount.asObservable();

  constructor() { }

  // function to update the currAccount BehaviorSubject
  // used for login and logout
  updateCurrentAccount(account: Account) {
    this.currAccount.next(account);
    //console.log("current account id " + account.id);
  }
}
