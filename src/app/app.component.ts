import { Component } from '@angular/core';
import { CartService } from './cart.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'Grocery-List-App';
  constructor(public cartService: CartService) {

  }
}
