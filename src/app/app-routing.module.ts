import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { AppCartComponent } from './app-cart/app-cart.component'
import { AppGroceryComponent } from './app-grocery/app-grocery.component'
import { CheckoutComponent } from './checkout/checkout.component'

const routes: Routes = [
  
  { path: 'GroceryList', component: AppGroceryComponent },
  { path: 'Cart', component: AppCartComponent },
  { path: 'Checkout', component: CheckoutComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
