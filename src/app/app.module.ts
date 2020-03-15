import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppCartComponent } from './app-cart/app-cart.component';
import { CartService } from './cart.service';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent,
    AppCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
