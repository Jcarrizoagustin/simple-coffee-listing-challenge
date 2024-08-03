import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { Coffee } from '../../model/coffee.interface';
import { CoffeCardComponent } from '../../components/coffe-card/coffe-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoffeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  coffeeList: Coffee[] = []

  constructor(private getProducts: GetProductsService){}

  ngOnInit():void {
    this.getProducts.getProducts().subscribe(
      (data:Coffee[]) => this.coffeeList = data
    )
  }
}
