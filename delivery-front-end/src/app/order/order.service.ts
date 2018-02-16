import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

import { APP_API } from '../app.api'

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

    itemsValue(): number {
        return this.cartService.total();
    }
    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }
    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    clear() {
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        //chamada http
        //Mapeamos a chamada porem ela sera executada a partir de um subscribe
        const headers = new Headers();
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${APP_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers })).map(response => response.json()).map(order => order.id)
        //o ultimo map transforma para receber apenas o id da compra
    }


}