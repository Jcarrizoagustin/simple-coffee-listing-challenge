import { Component, Input } from '@angular/core';
import { Coffee } from '../../model/coffee.interface';

@Component({
  selector: 'app-coffe-card',
  standalone: true,
  imports: [],
  templateUrl: './coffe-card.component.html',
  styleUrl: './coffe-card.component.css'
})
export class CoffeCardComponent {
  @Input() coffee : Coffee = {
    "id": 1,
    "name": "Cappuccino",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
    "price": "$5.20",
    "rating": 4.7,
    "votes": 65,
    "popular": true,
    "available": false
  }

  constructor(){}


}
