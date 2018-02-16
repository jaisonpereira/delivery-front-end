import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model'
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //TODO
  delivery: number = 8;


  payementOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartao de Débito', value: 'DEB' },
    { label: 'Cartao Refeicao', value: 'REF' }
  ]

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(`Compra concluida : ${orderId}`)
      this.orderService.clear()
      this.router.navigate(['/order-summary'])
    })

    console.log(order);
    console.log("Envia para o backend");

  }

}
