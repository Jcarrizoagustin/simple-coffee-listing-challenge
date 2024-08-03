import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coffee } from '../model/coffee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private API_URL = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
  
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Coffee[]>{
    return this.httpClient.get<Coffee[]>(this.API_URL);
  }
}
