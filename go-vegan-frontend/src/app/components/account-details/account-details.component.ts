import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../common/account';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  account = new Account();
  fourLastDigits: string;
  tempCard: string  = "xxxx-xxxx-xxxx-";

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleAccountDetails();
    })
  }

  // various navigation methods to update
  // a select portion of the logged in account
  routeToAddress() {
    this.router.navigate(['/update-account-address']);
  }

  routeToCredit() {
    this.router.navigate(['/update-account-credit']);
  }

  routeToUser() {
    this.router.navigate(['/update-account-user']);
  }

  handleAccountDetails() {

    // get the id param string. convert string to a number
    const theAccountId: number = +this.route.snapshot.paramMap.get('id')!;

    // subscribe the logged in account data into this.account object
    this.loginService.share.subscribe(u => this.account = u);

    // get the last 4 digits from the account's creditCardNumber property
    this.fourLastDigits = this.account.creditCardNumber.slice(12);

    // add the last 4 digits from the account's creditCardNumber property
    // and add them to the this.tempCard string
    // this is used to disguise the full credit card number
    this.tempCard = this.tempCard + this.fourLastDigits;
  }

}
