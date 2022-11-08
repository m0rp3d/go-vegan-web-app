import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartFoodItem } from '../common/cart-food-item';
import { FoodItem } from '../common/food-item';
import { OrderItem } from '../common/order-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartFoodItems: CartFoodItem[] = [];
  orderItems: OrderItem[] = [];
  
  // used to subscribe totalPrice of items in the shopping cart
  totalPrice: Subject<number> = new Subject<number>();

  // used to subscribe totalQuantity of items in the shopping cart
  totalQuantity: Subject<number> = new Subject<number>();

  // used to subscribe the total number of items
  // without changing the value
  private transferQuantity = new BehaviorSubject<number>(0);
  public share = this.transferQuantity.asObservable();

  // used to subscribe nutritional values
  protein: Subject<number> = new Subject<number>();
  saturatedFat: Subject<number> = new Subject<number>();
  transFat: Subject<number> = new Subject<number>();
  cholesterol: Subject<number> = new Subject<number>();
  fiber: Subject<number> = new Subject<number>();
  sugars: Subject<number> = new Subject<number>();
  vitaminA: Subject<number> = new Subject<number>();
  vitaminB12: Subject<number> = new Subject<number>();
  vitaminC: Subject<number> = new Subject<number>();
  vitaminD: Subject<number> = new Subject<number>();
  vitaminK: Subject<number> = new Subject<number>();
  omega3: Subject<number> = new Subject<number>();
  sodium: Subject<number> = new Subject<number>();
  calcium: Subject<number> = new Subject<number>();
  iron: Subject<number> = new Subject<number>();
  potassium: Subject<number> = new Subject<number>();
  zinc: Subject<number> = new Subject<number>();
  iodine: Subject<number> = new Subject<number>();

  // boolean will tell us if any nutrient value has a total of zero
  lacking: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  // function to add item to the shopping cart
  addToCart(theCartFoodItem: CartFoodItem, orderItem: OrderItem) {

    //console.log("this added orderItems values are, name: " + orderItem.name + ", imageUrl: " + orderItem.imageUrl + ", quantity: " + orderItem.quantity + ", price: " + orderItem.price);

    // check if we already have item in cart
    let alreadyExistsInCart: boolean = false;
    let existingFoodCartItem: CartFoodItem = undefined;

    if (this.cartFoodItems.length > 0) {

      // find the item in the cart based on item id
      for (let tempFoodCartItem of this.cartFoodItems) {
        if (tempFoodCartItem.id === theCartFoodItem.id) {
          existingFoodCartItem = tempFoodCartItem;
          break;
        }
      }

      // check if we found it
      alreadyExistsInCart = (existingFoodCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      // if item already exists in cart, increment
      existingFoodCartItem.quantity++;
    } else {
      // otherwise add the food item to the array
      this.cartFoodItems.push(theCartFoodItem);
    }

    // get the totalprice and total quanity
    this.getCartTotals();

    ///////////////////////////////////////////////////////add function for orderItems array


    // check if we order item exists in array of order items
    let alreadyExistsInOrderItems: boolean = false;
    let existingOrderItem: OrderItem = undefined;

    if (this.orderItems.length > 0) {
      // find the orderItem in the cart based on item id

      for (let tempOrderItem of this.orderItems) {
        if (tempOrderItem.name === orderItem.name) {
          existingOrderItem = tempOrderItem;
          break;
        }
      }

      // check if we found it
      alreadyExistsInOrderItems = (existingOrderItem != undefined);
    }

    if (alreadyExistsInOrderItems) {
      // if item already exists in cart, increment
      existingOrderItem.quantity++;
    } else {
      // otherwise add the food item to the array
      this.orderItems.push(orderItem);
    }

  }


  getCartTotals() {
    // array to keep track of values
    let arr = [];

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;


    // variables for nutrition
    let protein: number = 0;
    let saturatedFat: number = 0;
    let transFat: number = 0;
    let cholesterol: number = 0;
    let fiber: number = 0;
    let sugars: number = 0;
    let vitaminA: number = 0;
    let vitaminB12: number = 0;
    let vitaminC: number = 0;
    let vitaminD: number = 0;
    let vitaminK: number = 0;
    let omega3: number = 0;
    let sodium: number = 0;
    let calcium: number = 0;
    let iron: number = 0;
    let potassium: number = 0;
    let zinc: number = 0;
    let iodine: number = 0;

    

    for (let currentFoodCartItem of this.cartFoodItems) {
      // tally the total price of all the cartFoodItems
      totalPriceValue += currentFoodCartItem.quantity * currentFoodCartItem.price;

      // tally the total quantity of all the cartFoodItems
      totalQuantityValue += currentFoodCartItem.quantity;

      // tally nutrition totals
      protein += currentFoodCartItem.protein * currentFoodCartItem.quantity;
      saturatedFat += currentFoodCartItem.saturatedFat * currentFoodCartItem.quantity;
      transFat += currentFoodCartItem.transFat * currentFoodCartItem.quantity;
      cholesterol += currentFoodCartItem.cholesterol * currentFoodCartItem.quantity;
      fiber += currentFoodCartItem.fiber * currentFoodCartItem.quantity;
      sugars += currentFoodCartItem.sugars * currentFoodCartItem.quantity;
      vitaminA += currentFoodCartItem.vitaminA * currentFoodCartItem.quantity;
      vitaminB12 += currentFoodCartItem.vitaminB12 * currentFoodCartItem.quantity;
      vitaminC += currentFoodCartItem.vitaminC * currentFoodCartItem.quantity;
      vitaminD += currentFoodCartItem.vitaminD * currentFoodCartItem.quantity;
      vitaminK += currentFoodCartItem.vitaminK * currentFoodCartItem.quantity;
      omega3 += currentFoodCartItem.omega3 * currentFoodCartItem.quantity;
      sodium += currentFoodCartItem.sodium * currentFoodCartItem.quantity;
      calcium += currentFoodCartItem.calcium * currentFoodCartItem.quantity;
      iron += currentFoodCartItem.iron * currentFoodCartItem.quantity;
      potassium += currentFoodCartItem.potassium * currentFoodCartItem.quantity;
      zinc += currentFoodCartItem.zinc * currentFoodCartItem.quantity;
      iodine += currentFoodCartItem.iodine * currentFoodCartItem.quantity;

      
    }

    // push the nutritional values into the arr array
    arr.push(protein);
    arr.push(saturatedFat);
    
    arr.push(fiber);
    arr.push(sugars);
    arr.push(sodium);
    arr.push(calcium);
    arr.push(iron);
    arr.push(potassium);
    arr.push(vitaminD);

    arr.push(transFat);
    arr.push(cholesterol);
    /*
    arr.push(vitaminA);
    arr.push(vitaminB12);
    arr.push(vitaminC);
    
    arr.push(vitaminK);
    arr.push(omega3);
    
    arr.push(zinc);
    arr.push(iodine);
    */

    //checks if any nutritional value has a zero value
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 1) {
        // if any of the nutritional values is zero
        // publish true to the lacking boolean
        this.lacking.next(true);
      }
    }


    // publish new values to subscribers
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.transferQuantity.next(totalQuantityValue);

    // publish nutritional values to subscribers
    this.protein.next(protein);
    this.saturatedFat.next(saturatedFat);
    this.transFat.next(transFat);
    this.cholesterol.next(cholesterol);
    this.fiber.next(fiber);
    this.sugars.next(sugars);
    this.vitaminA.next(vitaminA);
    this.vitaminB12.next(vitaminB12);
    this.vitaminC.next(vitaminC);
    this.vitaminD.next(vitaminD);
    this.vitaminK.next(vitaminK);
    this.omega3.next(omega3);
    this.sodium.next(sodium);
    this.calcium.next(calcium);
    this.iron.next(iron);
    this.potassium.next(potassium);
    this.zinc.next(zinc);
    this.iodine.next(iodine);
   
    // for debugging
    this.logCartData(totalPriceValue, totalQuantityValue);

  }


  logCartData(totalPriceValue: number, totalQuantityValue: number) {
      console.log('Contents of the cart');
      
      for (let tempFoodCartItem of this.cartFoodItems) {
        const subTotalPrice = tempFoodCartItem.quantity * tempFoodCartItem.price;
        console.log(`name: ${tempFoodCartItem.name}, quantity=${tempFoodCartItem.quantity}, price=${tempFoodCartItem.price}, subTotalPrice=${subTotalPrice}`);
      }

      console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue.toFixed(2)}`);
      console.log(`-----`);
      
  }

  // function to decrement the quantity of the shopping cart item
  decrementQuantity(theCartFoodItem: CartFoodItem) {

    theCartFoodItem.quantity--;

    // if the quantity value of an item is zero
    // remove that item
    if (theCartFoodItem.quantity === 0) {
      this.remove(theCartFoodItem);
    } else {
      this.getCartTotals();
    }

    /// check if orderItem has same name as theCartFoodItem
    // will use that order to decrement

    let index;
    // get the index of the orderItem
    for (let i = 0; i < this.orderItems.length; i++) {
      if (this.orderItems[i].name === theCartFoodItem.name) {
        index = i;
      }
    }

    this.orderItems[index].quantity--;

    // if the orderItem has a quantity value of zero
    // remove that orderItem from the orderItems object array
    if (this.orderItems[index].quantity === 0) {
      this.removeOrderItem(index);
    }

  }

  removeOrderItem(index: number) {
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }
  }

  // for removing the CartFoodItem and its' corresponding OrderItem
  // at the same time
  removeBoth(theCartFoodItem: CartFoodItem) {

    let index;
    // get the index of the orderItem
    // based on CartFoodItem with same name
    for (let i = 0; i < this.orderItems.length; i++) {
      if (this.orderItems[i].name === theCartFoodItem.name) {
        index = i;
      }
    }

    // remove order item from orderItem array orderItems
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }

    // get index for CartFoodItem
    const itemIndex = this.cartFoodItems.findIndex(tempCartFoodItem => tempCartFoodItem.id === theCartFoodItem.id);

    // if found remove the item from the array at given index
    if (itemIndex > -1) {
      this.cartFoodItems.splice(itemIndex, 1);

      this.getCartTotals();
    }
  }

  // function to remove item from shopping cart
  remove(theCartFoodItem: CartFoodItem) {

      // get index of item in the array
      const itemIndex = this.cartFoodItems.findIndex(tempCartFoodItem => tempCartFoodItem.id === theCartFoodItem.id);

      // if found remove the item from the array at given index
      if (itemIndex > -1) {
        this.cartFoodItems.splice(itemIndex, 1);

        this.getCartTotals();
      }
  }

  // function used to reset the shopping cart
  reset() {
    this.cartFoodItems.splice(0);
    this.orderItems.splice(0);
    this.getCartTotals();
  }


}


