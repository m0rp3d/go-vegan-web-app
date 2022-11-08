import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartFoodItem } from '../../common/cart-food-item';
import { FoodItem } from '../../common/food-item';
import { OrderItem } from '../../common/order-item';
import { CartService } from '../../services/cart.service';
import { FoodItemService } from '../../services/food-item.service';

@Component({
  selector: 'app-food-item-details',
  templateUrl: './food-item-details.component.html',
  styleUrls: ['./food-item-details.component.css']
})
export class FoodItemDetailsComponent implements OnInit {

  foodItem!: FoodItem;
  orderItem: OrderItem;

  // if true, disables the 'Add to cart' button
  disableInc: boolean = true;

  // used to keep track of items in shopping cart
  cartTotalQuantity: number = 0;

  // message that displays to the user
  msg = '';

  constructor(private foodItemService: FoodItemService,
    private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      //this.checkOverLimit();
      this.handleFoodItemDetails();
    })
  }

  ngOnChange(): void {

  }

  handleFoodItemDetails() {

    // get the id param string. convert string to a number
    const theFoodId: number = +this.route.snapshot.paramMap.get('id')!;

    // call method to get quantity of items in shopping cart
    this.getTheCartTotal();

    // get array of foodItem objects and subscribe to
    // this.foodItem object array
    // that correspond with theFoodId number variable
    this.foodItemService.getFoodItem(theFoodId).subscribe(
      data => {
        this.foodItem = data;
        
      }
    )
  }

  // function to add items to shopping cart
  addToCart() {
    //console.log(`Adding  to cart: ${this.foodItem.name}, ${this.foodItem.price}`);
    const theCartFoodItem = new CartFoodItem(this.foodItem);
    const orderItem = new OrderItem();

    // assign the following values to the orderItem properties from the this.foodItem
    orderItem.name = theCartFoodItem.name;
    orderItem.imageUrl = theCartFoodItem.imageUrl;
    orderItem.quantity = theCartFoodItem.quantity;
    orderItem.price = theCartFoodItem.price;

    this.getTheCartTotal();

    // if the disableInc boolean is false
    // call the addToCart function to add item to the shopping cart
    if (!this.disableInc) {
      this.cartService.addToCart(theCartFoodItem, orderItem);
    }


  }

  // get the quantity of items in shopping cart and subscribe to this.cartTotalQuantity
  getTheCartTotal() {

    this.cartService.share.subscribe(data => this.cartTotalQuantity = data);

    // call function to check if items in shopping cart exceed 100 items
    this.checkOverLimit();

    //console.log("getTheCartTotal cart total quantity " + this.cartTotalQuantity);

  }

  // checks if the total number of items added to shopping cart exceeds 100 item limit
  checkOverLimit() {
    if (this.cartTotalQuantity >= 100) {

      // sets disableInc to true
      // disabling the 'Add to cart' button
      this.disableInc = true;

      // update message to show item limit reached
      this.msg = 'Quantity limit is 100 items';

    } else if (this.cartTotalQuantity < 100) {

      // sets disableInc to false
      // enabling the 'Add to cart' button
      this.disableInc = false;

      // update message to show nothing is wrong
      this.msg = '';

    }
  }

}
