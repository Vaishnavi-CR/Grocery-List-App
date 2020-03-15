import { Injectable } from '@angular/core';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Grocery_Items: ITask[] = []; //local to groceryapp component
  CartItems: ITask[] = []; //shared between groceryapp and cart components
  CheckedoutItems: ITask[] = [];            
  constructor() { }

   addToCart() {

    let filteredItems = this.Grocery_Items.filter(task => task.isChecked === true)
      //.concat(this.cartService.SentItems.filter(task => task.isChecked === true));
    
    this.Grocery_Items = this.Grocery_Items.filter(task => task.isChecked === false);
    // this.cartService.SentItems = this.cartService.SentItems.filter(
    //   task => task.isChecked === false
    // );

    filteredItems.forEach(item => {
          
      item.isChecked=false
      this.CartItems.push(item)
    
    });
 }
 delete() {
   this.CartItems = this.CartItems.filter(items=>items.isChecked === false)
 }
 sendBack() {
  let filteredItems = this.CartItems.filter(task => task.isChecked === true)
  this.CartItems = this.CartItems.filter(task => task.isChecked === false);
  filteredItems.forEach(item => {
          
    item.isChecked=false
    this.Grocery_Items.push(item)
  
  });
 }
 
checkout() {

  let filteredItems = this.CartItems.filter(task => task.isChecked === true)
  this.CartItems = this.CartItems.filter(task => task.isChecked === false);
  filteredItems.forEach(item => {
    item.isChecked=false
    this.CheckedoutItems.push(item)
  })
}
    
  

}
