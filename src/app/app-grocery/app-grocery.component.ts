import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CartService } from "../cart.service";
import { EventEmitter } from "@angular/core";
import { ITask } from "../itask";

@Component({
  selector: "app-app-grocery",
  templateUrl: "./app-grocery.component.html",
  styleUrls: [
    "../../assets/css/bootstrap.min.css",
    "./app-grocery.component.css"
  ]
})
export class AppGroceryComponent implements OnInit {
  public cartService: CartService;
  constructor(cartService: CartService) {
    this.cartService = cartService;
  }
  ngOnInit(): void {}

  groceryItem = {
    name: "",
    id: 0
  };
  //itemvalue: string;
  itemQty: number;
  enteredItems: string[];
  itemprice: number

 onClick() {

    if (this.groceryItem.id == 0) {
      this.enteredItems = this.cartService.Grocery_Items.map(val => val.name)
      var result = this.enteredItems.filter (item => item == this.groceryItem.name)

      if(result.length == 0 && this.groceryItem.name.trim() != '')
      
       {
        this.cartService.Grocery_Items.push({
          name: this.groceryItem.name,
          isChecked: false,
          quantity: this.itemQty,
          id: new Date().getTime(),
          price: Number(this.itemprice * this.itemQty)
        });
      }
      else {
        
        this.cartService.Grocery_Items.forEach(item => {
          
          if ( item.name == this.groceryItem.name) {
            item.quantity = +item.quantity + +this.itemQty
          }
           
        })

        
      }
    }
    this.groceryItem = {
      name: "",
      id: 0,

    };
    this.itemQty = 0;
    this.itemprice = 0
  }
  onEdit(item) {
    this.groceryItem = item;
  }

  

  onClickAddToCart() {

    
    this.cartService.addToCart();
  }
}
