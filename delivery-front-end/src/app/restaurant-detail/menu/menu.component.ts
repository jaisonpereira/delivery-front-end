import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService.getMenuOfRestaurant(this.route.parent.snapshot.params['id']);
  }


  addMenuEvent(item :MenuItem){
    alert(item.name)
  }

}
