import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { Coffee } from '../../model/coffee.interface';
import { CoffeCardComponent } from '../coffe-card/coffe-card.component';
import { tap } from 'rxjs';
import { ActivatedButtonEnum } from '../../model/enums/activatedButton.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-container',
  standalone: true,
  imports: [CoffeCardComponent,CommonModule],
  templateUrl: './coffee-container.component.html',
  styleUrl: './coffee-container.component.css'
})
export class CoffeeContainerComponent implements OnInit{

  allProducts !:Coffee[];
  availableProducts !: Coffee[];
  activatedButton !: ActivatedButtonEnum;

  constructor(private getProducts: GetProductsService){}

  ngOnInit():void {
    this.getProducts.getProducts().subscribe(
      (data:Coffee[]) => this.allProducts = data
    )
    this.activatedButton = ActivatedButtonEnum.ALL;
  }


  handleClickButtons(newActivatedButton: string):void {
    if(newActivatedButton == 'ALL'){
      this.activatedButton = ActivatedButtonEnum.ALL
    }else{
      this.activatedButton = ActivatedButtonEnum.AVAILABLE
    }
  }

  buttonSelectedIsAll(): boolean {
    return this.activatedButton == ActivatedButtonEnum.ALL
  }

  buttonSelectedIsAvailable(): boolean {
    return this.activatedButton == ActivatedButtonEnum.AVAILABLE
  }

}
