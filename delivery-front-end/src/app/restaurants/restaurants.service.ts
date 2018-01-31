
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Restaurant } from './restaurant/restaurant.model'
import { APP_API } from '../app.api'
import { ErrorHandler } from '../app.error-handler'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
//estamos recebendo outro servico no caso o http
@Injectable()
export class RestaurantService {
    //injetou dependencia aqui
    constructor(private http: Http) {
    }

    //precisamos mapear nossa resposta recebemos o response , porem so queremos o json
    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${APP_API}/restaurants`).map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getById(id: string): Observable<Restaurant> {
        return this.http.get(`${APP_API}/restaurants/${id}`).map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getReviewsById(id: string): Observable<any> {
        return this.http.get(`${APP_API}/restaurants/${id}/reviews`).map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

}