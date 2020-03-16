import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-app-cart',
  templateUrl: './app-cart.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css','./app-cart.component.css']
})
export class AppCartComponent implements OnInit {

  //public cartService: CartService;
  constructor(public cartService: CartService) { 
    
    //this.cartService = cartService;
  }
  
  
  ngOnInit(): void {
    
  }
  
  onClickDelete(){

    this.cartService.delete()
  }

  onClickSendBack() {

    this.cartService.sendBack()
  }
  onClickCheckout() {
    
    this.cartService.checkout()

  }

    
}
