import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../common/order';
import { OrderItem } from '../common/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  // http post function to save order
  postOrder(order: Order): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/api/save-order", order);
  }

  // http post function to save object array of orderItems
  postOrderItems(orderItems: OrderItem[]): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/api/save-order-item", orderItems);
  }



}
