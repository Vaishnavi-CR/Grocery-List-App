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
    this.cartService.Items = this.cartService.Items.filter(items=>items.isChecked === false)
  }

  onSubmit(f: NgForm) {

    let itemsToSend = this.cartService.Items.filter(task => task.isChecked === true)
    this.cartService.Items = this.cartService.Items.filter(task => task.isChecked === false)
    this.cartService.sendBack(itemsToSend)
 
  }

    
}
