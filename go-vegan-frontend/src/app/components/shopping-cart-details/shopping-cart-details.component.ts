import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from '../../common/account';
import { CartFoodItem } from '../../common/cart-food-item';
import { FoodItem } from '../../common/food-item';
import { Order } from '../../common/order';
import { OrderItem } from '../../common/order-item';
import { AccountService } from '../../services/account.service';
import { CartService } from '../../services/cart.service';
import { LoginService } from '../../services/login.service';
import { OrderService } from '../../services/order.service';
import { PassMessageService } from '../../services/pass-message.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.css']
})
export class ShoppingCartDetailsComponent implements OnInit {

  cartFoodItems: CartFoodItem[] = [];
  tempFoodItem: FoodItem;
  order: Order = new Order();
  orderItems: OrderItem[] = [];
  tempAccountId: number;
  tempId: number;

  // used to check if logged in
  tempAccount: Account;

  msg = 'Please login to purchase.';
  msg2 = '';

  // boolean to disable purchase button
  disable: boolean = true;

  // boolean to disable the quantity increment button
  disableInc: boolean = false;
  
  cartTotalPrice: number;
  cartTotalQuantity: number;

  // nutrient values
  cartProtein: number;
  cartSaturatedFat: number;
  cartTransFat: number;
  cartCholesterol: number;
  cartFiber: number;
  cartSugars: number;
  cartVitaminA: number;
  cartVitaminB12: number;
  cartVitaminC: number;
  cartVitaminD: number;
  cartVitaminK: number;
  cartOmega3: number;
  cartSodium: number;
  cartCalcium: number;
  cartIron: number;
  cartPotassium: number;
  cartZinc: number;
  cartIodine: number;

  // boolean to check if any total nutrient value is zero
  zeroValue: boolean;

  constructor(private route: Router, private cartService: CartService,
    private loginService: LoginService, private orderService: OrderService,
    private accountService: AccountService, private passMessage: PassMessageService ) { }

  ngOnInit(): void {
    
    this.listShoppingCartDetails();

    // subscribe the logged in account data into this.tempAccount
    this.loginService.share.subscribe(data => this.tempAccount = data);

    
    this.checkValidCart();

    
    this.checkOverLimit();
    
  }

  // function disables purchase button if account isn't logged into
  checkValidCart() {
    // if this.tempAccount has a zero value
    // user isn't logged in
    if (this.tempAccount.id > 0) {
      // if logged in purchase button not disabled
      this.disable = false;
      this.msg = '';
    } else {
      // else purchase button is disabled
      this.disable = true;
      this.msg = "Please login";
    }

  }

  // function to subscribe the logged in account to this.order.account
  getAccount() {
    return new Observable(observer => {
      this.loginService.share.subscribe(data => this.order.account = data);
      observer.next();
    });
  }

  // http post function to post the order
  postOrderFunction() {
    return new Observable(observer => {
      this.orderService.postOrder(this.order).subscribe(
        data => {
          //console.log("post order response received");
          observer.next();
        });
    });
  }

  // http get function to get the latest order id from the logged in user
  // and assign it to this.tempId variable
  // using the id property of the logged in account
  getLatestOrderId(tempAccountId: number) {
    return new Observable(observer => {
      this.accountService.getLastOrderId(tempAccountId).subscribe(
        data => {
          this.tempId = data;
          console.log("tempId is " + this.tempId);
          observer.next();
        });
    });
  }

  // http post function to post the orderItems
  postOrderItemsFunction() {
    return new Observable(observer => {
      this.orderService.postOrderItems(this.orderItems).subscribe(
        data => {
          //console.log("post order item response received");
          this.passMessage.updateMessage('Your order has been placed');
          // navigate to SuccessComponent
          this.route.navigate(['/success']);
          observer.next();
        });
    });
  }

 resetShoppingCart() {
    this.cartService.reset();
         
 }

  // click function when user clicks the purchase button
  // post the user's order and orderItems to the database
  onSubmit() {
    this.getAccount().subscribe(() => {
      this.order.shippingAddress = "" + this.order.account.address + ", " + this.order.account.city + ", " + this.order.account.state;
      //console.log("shipping address " + this.order.shippingAddress);
      this.order.totalPrice = this.cartTotalPrice;
      this.order.totalQuantity = this.cartTotalQuantity;
      //console.log("this.order.totalPrice " + this.order.totalPrice);
      this.postOrderFunction().subscribe(() => {
        this.tempAccountId = this.order.account.id;
        this.getLatestOrderId(this.tempAccountId).subscribe(() => {
          //console.log("order's id is (before)" + this.order.id);
          this.order.id = this.tempId;
          //console.log("order's id is (after)" + this.order.id);

          // set order for each orderItem and set price based on quantity
          for (let i = 0; i < this.orderItems.length; i++) {
            this.orderItems[i].order = this.order;
            this.orderItems[i].price = this.orderItems[i].price * this.orderItems[i].quantity;
          }
          
          this.postOrderItemsFunction().subscribe(() => {
            this.resetShoppingCart();
          });
        });
      });
    });
  }

  // function to subscribe related values
  listShoppingCartDetails() {

    // get the cart items
    this.cartFoodItems = this.cartService.cartFoodItems;

    // get order items
    this.orderItems = this.cartService.orderItems;

    //console.log("value for orderItems[i] name is " + this.orderItems[0].name);

    if (this.cartFoodItems.length > 0) {

      //console.log("value for orderItems[i] name is " + this.orderItems[0].name);

      // subscribe the price
      this.cartService.totalPrice.subscribe(
        data => this.cartTotalPrice = data
      );

      // subscribe the quantity
      this.cartService.totalQuantity.subscribe(
        data => this.cartTotalQuantity = data
      )
    }

    //////// subscriber for nutritional values start ////////////

    this.cartService.protein.subscribe(
      data => this.cartProtein = data
    )

    this.cartService.saturatedFat.subscribe(
      data => this.cartSaturatedFat = data
    )

    this.cartService.transFat.subscribe(
      data => this.cartTransFat = data
    )

    this.cartService.cholesterol.subscribe(
      data => this.cartCholesterol = data
    )

    this.cartService.fiber.subscribe(
      data => this.cartFiber = data
    )

    this.cartService.sugars.subscribe(
      data => this.cartSugars = data
    )

    this.cartService.vitaminA.subscribe(
      data => this.cartVitaminA = data
    )

    this.cartService.vitaminB12.subscribe(
      data => this.cartVitaminB12 = data
    )

    this.cartService.vitaminC.subscribe(
      data => this.cartVitaminC = data
    )

    this.cartService.vitaminD.subscribe(
      data => this.cartVitaminD = data
    )

    this.cartService.vitaminK.subscribe(
      data => this.cartVitaminK = data
    )

    this.cartService.omega3.subscribe(
      data => this.cartOmega3 = data
    )

    this.cartService.sodium.subscribe(
      data => this.cartSodium = data
    )

    this.cartService.calcium.subscribe(
      data => this.cartCalcium = data
    )

    this.cartService.iron.subscribe(
      data => this.cartIron = data
    )

    this.cartService.potassium.subscribe(
      data => this.cartPotassium = data
    )

    this.cartService.zinc.subscribe(
      data => this.cartZinc = data
    )

    this.cartService.iodine.subscribe(
      data => this.cartIodine = data
    )
    //////// subscriber for nutritional values end ////////////

    // boolean checks if any value is zero
    this.cartService.lacking.subscribe(
      data => this.zeroValue = data
    )

    // compute total price and quantity
    this.cartService.getCartTotals();
  }

  // increment the quantity of the select cartFoodItem
  increment(theCartFoodItem: CartFoodItem) {
    const orderItem = new OrderItem();

    // assign the following values to the orderItem properties from theCartFoodItem
    orderItem.name = theCartFoodItem.name;
    orderItem.imageUrl = theCartFoodItem.imageUrl;
    orderItem.quantity = theCartFoodItem.quantity;
    orderItem.price = theCartFoodItem.price;

    this.checkOverLimit()

    // call function to add the cartFoodItem into the shopping cart
    this.cartService.addToCart(theCartFoodItem, orderItem);

    this.checkOverLimit();
  }

  // decrement the quantity of the select cartFoodItem
  decrement(theCartFoodItem: CartFoodItem) {
    this.cartService.decrementQuantity(theCartFoodItem);

    this.checkOverLimit();
  }

  removeBoth(theCartFoodItem: CartFoodItem) {
    this.cartService.removeBoth(theCartFoodItem);


    this.checkOverLimit();
  }

  // check if item has reached purchase limit
  checkOverLimit() {
    if (this.cartTotalQuantity >= 100) {
      // if limit reached disable purchase button
      this.disable = true;
      // if limit reached disable increment button
      this.disableInc = true;
      this.msg2 = 'Quantity limit is 100 items';
    } else if (this.cartTotalQuantity < 100) {
      // if limit not reached enable increment button
      this.disableInc = false;
      // if logged in
      if (this.tempAccount.id > 0) {
        // enable purchase button
        this.disable = false;
      }
      this.msg2 = '';
    }
  }
  
}
