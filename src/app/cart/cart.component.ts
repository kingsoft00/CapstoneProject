import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../model.item';
import { Product } from '../model.product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;
  products:Product[] = [];
  
  constructor(public productService:ProductService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var id = params['cartId'];
			if (id) {
				var item: Item = {
					product: this.find(id),
					quantity: 1
				};

				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item)); //convert JSON to string
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart')); //convert string to JSON
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product._id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
      }
		});
	}

loadCart(): void {
  this.total = 0;
  this.items = [];
  let cart = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cart.length; i++) {
    let item = JSON.parse(cart[i]);
    this.items.push({
      product: item.product,
      quantity: item.quantity
    });
    this.total += item.product.price * item.quantity;
  }
}

remove(id): void {
  let cart: any = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cart.length; i++) {
    let item: Item = JSON.parse(cart[i]);
    if (item.product._id == id) {
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  this.loadCart();
}
cartInfo:any;
checkOut() {
  let cart: any = JSON.parse(localStorage.getItem('cart'));
  this.cartInfo= cart;
  console.log(cart);
}
find(id:string): Product { 
  var num = parseInt(id);
  this.productService.getAllProductDetails().subscribe(data=>this.products=data);
  return this.products[this.getSelectedIndex(num)];
}

getSelectedIndex(id:number) {
  for (let i = 0; i < this.products.length; i++) {
    console.log(this.products[i]._id)
      if (this.products[i]._id == id) {
        console.log(i)
        console.log(typeof i)
          return i;
      }
  }
  return -1;
}

}
