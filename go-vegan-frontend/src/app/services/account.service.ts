import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Account } from '../common/account';
import { Order } from '../common/order';
import { OrderItem } from '../common/order-item';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api";

  private accountUrl = "http://localhost:8080/api/accounts";

  private orderUrl = "http://localhost:8080/api/orders";

  private orderItemUrl = "http://localhost:8080/api/orderItems";

  // http get request function to get account using the Account's id
  getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.accountUrl}/${id}`);
  }

  // http get request function for orders using the account id property
  // includes pagination
  getOrderByAccountIdPaginate(thePage: number,
                              thePageSize: number,
                              id: number): Observable<GetResponseOrder> {
    return this.httpClient.get<GetResponseOrder>(`${this.orderUrl}/search/findByAccountId?id=${id}&page=${thePage}&size=${thePageSize}`);
    
  }


  // http get request function for order items using order id property
  // with pagination
  getOrderItemsByOrderId(id: number, thePage: number,
    thePageSize: number): Observable<GetResponseOrderItem> {

    const newUrl = `${this.orderItemUrl}/search/findByOrderId?id=${id}&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseOrderItem>(newUrl);
  }

  // http post request function  to post new account into database
  registerAccount(account: Account): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/api/register", account);
  }

  // http request function to get an account using email and password
  getAccount(email: string, password: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/check/${email}/${password}`)
  }

  // http get request function to get the latest order id property using the account id
  getLastOrderId(id: number): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/recent-id/${id}`)
  }

  // http put request function using account id property and new account data
  updateAccount(id: number, account: Account): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/api/account-update/${id}`, account)
  }
  
}

interface GetResponseOrder {
  _embedded: {
    orders: Order[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


interface GetResponseOrderItem {
  _embedded: {
    orderItems: OrderItem[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number

  }
}
