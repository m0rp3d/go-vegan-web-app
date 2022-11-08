import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderItem } from '../../common/order-item';
import { AccountService } from '../../services/account.service';
import { FoodItemService } from '../../services/food-item.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  theId: number;
  orderItems: OrderItem[];
  idOfItem: number;

  // pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService,
              private foodItemService: FoodItemService, private router: Router) { }

  ngOnInit(): void {

    // get the order id property passed as id param and assign to this.theId
    this.theId = +this.activatedRoute.snapshot.paramMap.get("id");

    this.listOrderItems();
  }

  // click function that navigates user to the foodItem
  // whose id property matches the this.idOfItem route param
  goToItem(name: string) {

    // this function gets the foodItem id property
    this.getTheFoodItemId(name).subscribe(() => {
      // function used to navigate to the component for the 'FoodItemDetailsComponent'
      this.router.navigate(["foodItems", this.idOfItem]);
    });
    
  }

  // function to get the id property for a foodItem the user clicks
  // using the name of that foodItem
  // then assigning the id property value for the foodItem to this.idOfItem
  getTheFoodItemId(name: string) {
    return new Observable(observer => {
      this.foodItemService.getFoodItemId(name).subscribe(
        data => {
          // subscribe the id property of the foodItem to the this.idOfItem value
          this.idOfItem = data;
          //console.log("id of item is " + this.idOfItem);
          observer.next();
        });
    });
  }

  // function to get array of orderItems using this.theId (order id property)
  // with pagination
  listOrderItems() {
   
    this.accountService.getOrderItemsByOrderId(this.theId, this.thePageNumber - 1,
      this.thePageSize)
      .subscribe(
        data => {
          this.orderItems = data._embedded.orderItems;
          this.thePageNumber = data.page.number + 1;
          this.thePageSize = data.page.size;
          this.theTotalElements = data.page.totalElements;
        });
  }

}
