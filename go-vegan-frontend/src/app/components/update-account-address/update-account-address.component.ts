import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../../common/account';
import { AccountService } from '../../services/account.service';
import { LoginService } from '../../services/login.service';
import { PassMessageService } from '../../services/pass-message.service';

@Component({
  selector: 'app-update-account-address',
  templateUrl: './update-account-address.component.html',
  styleUrls: ['./update-account-address.component.css']
})
export class UpdateAccountAddressComponent implements OnInit {

  account = new Account();
  tempAccount = new Account();
  msg = '';

  constructor(private fb: FormBuilder, private accountService: AccountService,
    private loginService: LoginService, private router: Router,
    private passMessage: PassMessageService  ) { }

  // validation form for part of the registration form with their validators
  registrationForm = this.fb.group({
    address: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z0-9 ]*$")]],
    city: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    state: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    country: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    zipcode: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), Validators.pattern("^[0-9]*$")]]
  });

  ngOnInit(): void {
    
    this.getLoggedInAccount().subscribe(() => {
      this.getAccountByEmailAndPassword();
    });
    this.msg = '';
  }

  // function to get the current logged in account and assign it to this.tempAccount
  getLoggedInAccount() {
    return new Observable(observer => {
      this.loginService.share.subscribe(u => this.tempAccount = u);
      observer.next();
    });

  }

  // function to get the full account data using the email and password property
  // which we have from signing in from the SignInComponent
  getAccountByEmailAndPassword() {

    this.accountService.getAccount(this.tempAccount.email, this.tempAccount.password).subscribe(
      data => {
        this.account = data;
      });

  }

  // click function used to update the account using registration form
  updateAccount(submitBtn: HTMLButtonElement) {

    // prevents double submitting
    submitBtn.disabled = true;

    // function to update the portion of the account that we
    // filled up in the registrationForm
    this.accountService.updateAccount(this.account.id, this.account).subscribe(data => {

      // function to update the logged in account to match
      // the changes made
      this.loginService.updateCurrentAccount(this.account);

      this.goToSuccess();
    })

    // change back to false so user can click submit button if they made an error
    submitBtn.disabled = false;

  }

  // function to navigate to the SuccessComponent
  goToSuccess() {

    // update the message that shows up in the SuccessComponent
    this.passMessage.updateMessage('Account updated successfully');

    // navigate to SuccessComponent
    this.router.navigate(['/success']);
  }

}
