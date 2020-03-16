import { Injectable } from '@angular/core';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Grocery_Items: ITask[] = []; //local to groceryapp component
  CartItems: ITask[] = []; //shared between groceryapp and cart components
  CheckedoutItems: ITask[] = [];  
  subtotalarray: number[];      
  subtotal: number = 0; 
  subtotalcheckout: number[];
  checkoutbeforetax = 0;
  checkoutaftertax = 0;
  addtax = 0;

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
    this.subtotalarray = this.CartItems.map(item=>item.price)
    this.subtotal = this.subtotalarray.reduce((a,b) => a + b, 0)
    
 }
 delete() {
   this.CartItems = this.CartItems.filter(items=>items.isChecked === false)
   this.subtotalarray = this.CartItems.map(item=>item.price)
    this.subtotal = this.subtotalarray.reduce((a,b) => a + b, 0)
   
 }
 sendBack() {
  let filteredItems = this.CartItems.filter(task => task.isChecked === true)
  this.CartItems = this.CartItems.filter(task => task.isChecked === false);
  filteredItems.forEach(item => {
          
    item.isChecked=false
    this.Grocery_Items.push(item)
  
  });
  // this.Grocery_Items.forEach(item => {
  //   this.subtotal = +this.subtotal - +item.price
  // })
  this.subtotalarray = this.CartItems.map(item=>item.price)
  this.subtotal = this.subtotalarray.reduce((a,b) => a + b, 0)
  
 }
 
checkout() {

  let filteredItems = this.CartItems.filter(task => task.isChecked === true)
  this.CartItems = this.CartItems.filter(task => task.isChecked === false);
  filteredItems.forEach(item => {
    item.isChecked=false
    this.CheckedoutItems.push(item)
  })
  this.subtotalarray = this.CartItems.map(item=>item.price)
  this.subtotal = this.subtotalarray.reduce((a,b) => a + b, 0)
  this.subtotalcheckout = this.CheckedoutItems.map(item=>item.price)
  this.checkoutbeforetax = this.subtotalcheckout.reduce((a,b) => a + b, 0)
  this.addtax = Number(this.checkoutbeforetax * 0.1)
  this.checkoutaftertax = this.addtax + this.checkoutbeforetax
  console.log(this.checkoutbeforetax)
  console.log(this.checkoutaftertax)
}
    
  

}
