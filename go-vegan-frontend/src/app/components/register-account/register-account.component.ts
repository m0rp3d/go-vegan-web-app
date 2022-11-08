import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../../common/account';
import { AccountService } from '../../services/account.service';
import { PassMessageService } from '../../services/pass-message.service';
import { checkCode } from '../../shared/check-code';
import { checkExpired } from '../../shared/check-expired';
import { checkMonth } from '../../shared/check-month';
import { nameValidator } from '../../shared/check-special-chars';
import { passwordValidator } from '../../shared/password.validator';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  account = new Account();
  msg = '';


  /*
  get creditCardExpirationYear() {
    return this.registrationForm.get('creditCardExpirationYear');
  }
  */
  
  
  

  constructor(private fb: FormBuilder, private accountService:
              AccountService, private route: Router,
              private passMessage: PassMessageService  ) { }

  // validation form for the registration form with their validators
  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z]*$")]],
    lastName: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z]*$")]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(30), Validators.minLength(12)]],
    userName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(6), nameValidator]],
    password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]],
    cpassword: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]],
    address: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z0-9 ]*$")]],
    city: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    state: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    country: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    zipcode: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5), Validators.pattern("^[0-9]*$")]],
    creditCardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16), Validators.pattern("^[0-9]*$")]],
    creditCardCode: [0, [Validators.required, checkCode]],
    creditCardName: ['', [Validators.required, Validators.maxLength(150), Validators.pattern("^[a-zA-Z ]*$")]],
    creditCardExpirationMonth: [0, [Validators.required, checkMonth]],
    creditCardExpirationYear: [0, [Validators.required, checkExpired]]
  }, { validator: passwordValidator});

  ngOnInit(): void {
    this.msg = '';
  }

  // function to register the 'registrationForm' as an account
  // to the database
  registerAccount(submitBtn: HTMLButtonElement) {

    // prevents double submitting
    submitBtn.disabled = true;

    // checks if username exists
    //console.log("this username is " + this.account);
    this.accountService.registerAccount(this.account).subscribe(
      data => {
        console.log("response received");

        // update the message that shows up in the SuccessComponent
        this.passMessage.updateMessage('Account registered successfully');

        // navigate to the 'SuccessComponent'
        this.route.navigate(['/success']);
        
      }, // update this.msg if an error occurs
      error => {
        console.log("exception occured");
        this.msg = "Account already exists";
      }

    )
    // set the disabled of the submit button false
    // so that if register account creation fails
    // user can submit the form again
    submitBtn.disabled = false;

  }


}


