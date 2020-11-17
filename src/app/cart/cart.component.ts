import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model.item';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(public productService:ProductService, public activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
			var id = params['cartId']; //get id by key 'id' from product html
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity : 1
        };
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
          cart.push(JSON.stringify(item)); //convert JSON to string
          localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart')); //convert string to JSON
          let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
						if (item.product._id == id) {
							index = i;
							break;
						}
          }
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item= JSON.parse(cart[index]);					
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
  this.productService.total = 0;
  this.productService.items = [];
  let cart = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cart.length; i++) {
    let item: Item = JSON.parse(cart[i]);
    this.productService.items.push({
      product: item.product,
      quantity: item.quantity
    });
    this.productService.total += item.product.price * item.quantity;
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
checkOut() {
  this.productService.total = 0;
  this.productService.items = [];
  let cart: any = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cart.length; i++) {
    let item: Item = JSON.parse(cart[i]);
    this.productService.items.push({
      product: item.product,
      quantity: item.quantity
    });
    this.productService.total += item.product.price * item.quantity;
    this.router.navigate(['checkout']);
  }
}

}
