import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public productService:ProductService, private router:Router) { }
  checkoutRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    phonenumber: new FormControl(),
    street: new FormControl(),
    suit_apt:new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipcode: new FormControl()
  })
  ngOnInit(): void {
  }

  cancel():void{
    this.router.navigate(['cart']);
  }
  checkoutProduct():void{
    if(confirm(`Your Address is:\n
    Your Name is ${this.checkoutRef.value.fname} ${this.checkoutRef.value.lname}\n
    Email: ${this.checkoutRef.value.email}\n
    Phone Number: ${this.checkoutRef.value.phonenumber}\n
    Shipping Address: ${this.checkoutRef.value.street}, Suit|Apt#: ${this.checkoutRef.value.suit_apt}, 
    City: ${this.checkoutRef.value.city}, State: ${this.checkoutRef.value.state}, Zip Code: ${this.checkoutRef.value.zipcode}\n
    Are they correct?`)){
      if(confirm(`and Your Order Total is $${this.productService.total}. Is that right???`)){
        localStorage.removeItem('cart');
        let cart: any = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        this.router.navigate(['thankyou']);
      } else {
        this.router.navigate(['cart']);
      }
    } else {
      this.router.navigate(['checkout']);
    }
  }
}
