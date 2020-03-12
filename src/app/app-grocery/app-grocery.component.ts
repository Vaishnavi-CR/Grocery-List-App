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
  itemQty: string;
  tasks: ITask[] = [];
  filteredItems: ITask[] = [];
  cartItems: ITask[] = [];
  enteredItems: string[];
  onClick() {
    if (this.groceryItem.id == 0) {
      this.enteredItems = this.tasks.map(val => val.name);
      var result = this.enteredItems.filter (item => item == this.groceryItem.name)

      if(result.length == 0)
      
       {
        this.tasks.push({
          name: this.groceryItem.name,
          isChecked: false,
          quantity: this.itemQty,
          id: new Date().getTime()
        });
      }
      else {
        
        this.tasks.forEach(item => {
          
          if ( item.name == this.groceryItem.name) {
            item.quantity = +item.quantity + +this.itemQty
          }
           
        })
      }
    }
    this.groceryItem = {
      name: "",
      id: 0
    };
    this.itemQty = "";
  }
  onEdit(item) {
    this.groceryItem = item;
  }

  onDelete(item) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (item.id == this.tasks[i].id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  onSubmit(f: NgForm) {
    this.filteredItems = this.tasks
      .filter(task => task.isChecked === true)
      .concat(this.cartService.tasks.filter(task => task.isChecked === true));
    console.log("filtered items");
    console.log(this.filteredItems);
    this.tasks = this.tasks.filter(task => task.isChecked === false);
    this.cartService.tasks = this.cartService.tasks.filter(
      task => task.isChecked === false
    );

    this.cartService.addToCart(this.filteredItems);
  }
}
