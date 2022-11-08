import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../common/account';
import { AccountService } from '../../services/account.service';
import { LoginService } from '../../services/login.service';
import { PassMessageService } from '../../services/pass-message.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  msg = "";

  account = new Account();

  updatedAccount = new Account();

  returnable: boolean = false;

  constructor(private formB: FormBuilder, private accountService: AccountService,
              private route: Router, private loginService: LoginService,
              private passMessage: PassMessageService) { }

  // validation form for the sign in form with validators
  signInForm = this.formB.group({
    email: ['', [Validators.required, Validators.minLength(12), Validators.email, Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
  });


  ngOnInit(): void {
  }

  // click function to login the user
  onSubmit() {
    //console.log("email is " + this.account.email + " and password is " + this.account.password);

    // http get request function to get account using email and password
    // used to check if user filled signInForm with valid email and password
    this.accountService.getAccount(this.account.email, this.account.password).subscribe(
      data => {
        //console.log("response recieved");

        // subscribe account data to this.updatedAccount
        this.updatedAccount = data;

        // use the loginService to show that user is logged in
        this.loginService.updateCurrentAccount(this.updatedAccount);

        // update the message that shows up in the SuccessComponent
        this.passMessage.updateMessage('You are now signed in');

        // navigate to SuccessComponent
        this.route.navigate(['/success']);
      }, // response if there is a login error
      error => {
        console.log("exeption occurred");
        this.msg = "Enter valid password and email";
      }
    )
  }

}
