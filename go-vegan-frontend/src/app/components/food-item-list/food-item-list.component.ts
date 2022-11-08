import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartFoodItem } from '../../common/cart-food-item';
import { FoodItem } from '../../common/food-item';
import { OrderItem } from '../../common/order-item';
import { CartService } from '../../services/cart.service';
import { FoodItemService } from '../../services/food-item.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {

  foodItems: FoodItem[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  disableInc: boolean = true;
  cartTotalQuantity: number = 0;
  msg = '';

  // pagination properties
  thePageNumber: number = 1;
  thePageSize: number = 4;
  theTotalElements: number = 0;
  

  constructor(private foodItemService: FoodItemService, private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(() => {
      this.listFoodItems();
      this.getTheCartTotal();
    });
    
  }

  // function to subscribe the foodItems into this.foodItems
  listFoodItems() {

    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the id param string. convert string to a number
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
      // if the category id is not available, assign the default category id to 1
      this.currentCategoryId = 1;
    }

    ///////////////// check if we have different category than the previous

    // if we have a different category id than previous
    // set thePageNumber back to 1
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    //console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    // call the function to get the list of food items that match the category id of the object
    this.foodItemService.getFoodItemListPaginate(this.thePageNumber - 1,
                                                  this.thePageSize,
                                                  this.currentCategoryId)
                                                  .subscribe(
                                                    data => {
                                                      this.foodItems = data._embedded.foodItems;
                                                      this.thePageNumber = data.page.number + 1;
                                                      this.thePageSize = data.page.size;
                                                      this.theTotalElements = data.page.totalElements;
                                                    });

    //this.getTheCartTotal();
    
  }

  // function to add items to shopping cart
  addToCart(theFoodItem: FoodItem) {
    console.log(`Adding to cart: ${theFoodItem.name}, ${theFoodItem.price}`);

    const theCartFoodItem = new CartFoodItem(theFoodItem);
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
    
    //console.log('total cart quantity after add cart' + this.cartTotalQuantity);
    
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
    //console.log('cart total quantity is ' + this.cartTotalQuantity);
  }

}
