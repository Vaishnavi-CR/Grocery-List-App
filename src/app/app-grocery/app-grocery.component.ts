import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CartService } from '../cart.service'
import { EventEmitter } from '@angular/core';
import { ITask } from '../itask';


@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css','./app-grocery.component.css'],
  
})
export class AppGroceryComponent implements OnInit {
  
  public cartService: CartService;
  constructor(cartService: CartService) {
    this.cartService = cartService;
  }
  ngOnInit(): void {}

  groceryItem: string;
  tasks: ITask[] = [];
  filteredItems: ITask[] = [];
  cartItems: ITask[] = [];
  
  onClick(){
    this.tasks.push({name: this.groceryItem, isChecked: false});
    this.groceryItem = '';
  }

  onSubmit(f: NgForm) {
    this.filteredItems = this.tasks.filter(task => task.isChecked === true).concat(this.cartService.tasks.filter(task => task.isChecked === true))  
    console.log("filtered items")
    console.log(this.filteredItems)
    this.tasks = this.tasks.filter(task => task.isChecked === false)
    this.cartService.tasks = this.cartService.tasks.filter(task => task.isChecked === false)
    
    this.cartService.addToCart(this.filteredItems)
  
    
    
  }
}
