import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
