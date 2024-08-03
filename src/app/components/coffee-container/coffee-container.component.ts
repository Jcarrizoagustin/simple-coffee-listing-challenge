import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { Coffee } from '../../model/coffee.interface';
import { CoffeCardComponent } from '../coffe-card/coffe-card.component';

@Component({
  selector: 'app-coffee-container',
  standalone: true,
  imports: [CoffeCardComponent],
  templateUrl: './coffee-container.component.html',
  styleUrl: './coffee-container.component.css'
})
export class CoffeeContainerComponent implements OnInit{

  products !:Coffee[];

  constructor(private getProducts: GetProductsService){}

  ngOnInit():void {
    this.getProducts.getProducts().subscribe(
      (data:Coffee[]) => this.products = data
    )
  }

}
