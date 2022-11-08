import { Order } from "./order";

export class OrderItem {

  name: string;
  imageUrl: string;
  quantity: number;
  price: number;
  order: Order;

  constructor() {
  }

  /*
  constructor(public name: string,
    public imageUrl: string,
    public quantity: number,
    public price: number) {
  }
  */

}
