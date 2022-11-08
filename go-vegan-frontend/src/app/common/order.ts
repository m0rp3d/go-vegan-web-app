import { Account } from "./account";

export class Order {

  //id: number;
  id: number = 0;
  totalPrice: number;
  totalQuantity: number;
  dateCreated: string;// will add date later
  shippingAddress: string;
  account: Account;

  constructor() {

  }

  /*
  constructor(public id: number,
    public totalPrice: number,
    public totalQuantity: number,
    public shippingAddress: string) {

  }
  */

  

}
