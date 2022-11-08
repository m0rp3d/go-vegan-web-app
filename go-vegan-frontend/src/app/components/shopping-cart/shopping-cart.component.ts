import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  currentTotalPrice: number;
  currentTotalQuantity: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }


  // function to update the totalPrice of items
  // in the shopping cart and totalQuantity of items
  // in the shopping cart
  updateCartStatus() {
    // subscribe the cart totalprice
    this.cartService.totalPrice.subscribe(
      data => this.currentTotalPrice = data
    );

    // subscribe to cart totalquantity
    this.cartService.totalQuantity.subscribe(
      data => this.currentTotalQuantity = data
    );
  }

}
