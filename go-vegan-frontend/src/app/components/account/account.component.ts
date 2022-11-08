import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../common/account';
import { Order } from '../../common/order';
import { AccountService } from '../../services/account.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {



  account = new Account();

  orders: Order[];

  // pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  

  constructor(private accountService: AccountService, private loginService: LoginService) { }



  ngOnInit(): void {
    this.getLoginAccount().subscribe(() => {
      this.getAccountByEmailAndPassword().subscribe(() => {
        this.getOrderDataByAccountId();
      });
    });
    
  }


  // will subscribe data from logged in account
  // into this.account
  // only password and email is passed into this.account
  getLoginAccount() {

    return new Observable(observer => {
      this.loginService.share.subscribe(u => this.account = u);
      observer.next();
    });
  }
  
  // using the email and password property subscribed into this.account
  // we can assign the actual account object from the database into this.account
  getAccountByEmailAndPassword() {

    return new Observable(observer => {

      this.accountService.getAccount(this.account.email, this.account.password).subscribe(
        data => {
          this.account = data;
          //console.log(this.account.id);
          observer.next();
        }
      )

    });
  }


  // use account id property to subscribe orders of the account
  // into the this.orders order object array
  // includes pagination
  getOrderDataByAccountId() {

    this.accountService.getOrderByAccountIdPaginate(this.thePageNumber - 1, this.thePageSize, this.account.id).subscribe(
      data => {
        this.orders = data._embedded.orders;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
        console.log("the date is " + this.orders[0].dateCreated);
      }
    )
  }


}
