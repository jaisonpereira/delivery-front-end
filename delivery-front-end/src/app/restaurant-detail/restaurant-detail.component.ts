import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant
  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  //precisa ter acesso a rota que foi acionada
  ngOnInit() {
    this.restaurantsService.getById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant)
  }

}