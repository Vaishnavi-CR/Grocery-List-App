import { Injectable } from '@angular/core';
import { ITask } from './itask';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Items: ITask[] = [];
  tasks: ITask[] = [];              
  constructor() { }

   addToCart(itemsToAdd: ITask[]) {
     //var items: ITask[] = JSON.parse(JSON.stringify(itemsToAdd));
    itemsToAdd.forEach(item => {
          
      item.isChecked=false
      this.Items.push(item)
    
    });
 }
 
 sendBack(itemsToSend: ITask[]) {
  itemsToSend.forEach(task=> {
    task.isChecked=false
    this.tasks.push(task)
  })
}
    
  

}
