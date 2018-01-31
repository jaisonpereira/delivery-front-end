import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews : Observable<any>

  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  //estamos em um componente filho. temos que acessar o componente do parent da rota
  ngOnInit() {
    this.reviews=this.restaurantsService.getReviewsById(this.route.parent.snapshot.params['id'])
  }

}
