import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from './common/account';
import { LoginService } from './services/login.service';
import { PassMessageService } from './services/pass-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-vegan-frontend';

  // account object used to set account to reset
  resetAccount: Account = {
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
  creditCardExpirationYear: 0
};

  // account object to hold account data
  // used to determine if account is logged in
  mainAccount = new Account();

  constructor(private loginService: LoginService, private route: Router, private passMessage: PassMessageService) { }

  ngOnInit(): void {
    // if account is logged in
    // account data will be subscribed to mainAccount
    this.loginService.share.subscribe(u => this.mainAccount = u);
  }

  // function used to logout
  // account will and set to resetAccount data
  logout(accountValue: Account) {
    this.loginService.updateCurrentAccount(accountValue);

    // update the message that shows up in the SuccessComponent
    this.passMessage.updateMessage('You are now logged out');

    // navigate to SuccessComponent
    this.route.navigate(['/success']);
  }
}
