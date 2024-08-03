import { Component } from '@angular/core';
import { CoffeeContainerComponent } from '../../components/coffee-container/coffee-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoffeeContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(){}

  
}
