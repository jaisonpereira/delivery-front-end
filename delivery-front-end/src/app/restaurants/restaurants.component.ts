import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantService} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

restaurants : Restaurant[]

//injecao de dependencia provida pelo angular
  constructor(private restaurantService: RestaurantService) { 

  }
//falando sobre eventos precisamos antes fazer um subscribe (como é um http nao e necessario fazer um unsubscribe)
//mas agora estamos escutando o evento
  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
