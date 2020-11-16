import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand, Item, Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  brands:Brand[];
  products:Product[];
  cart:[];
  item:Item;
  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllBrandDetails().subscribe(data=>this.brands=data);
    this.productService.getAllProductByGender('Women').subscribe(data=>this.products=data)
  }
  selectItem(id):void{
    // for(let i = 0; i< this.products.length; i++) {
    //   if(this.products[i]._id == id) {
    //     this.cart.push(this.products[i],1);
    //   }
    // }
  }
  addToCart(id):void{

  }
  chooseBrand(brand):void {
    this.productService.getAllProductByBrand(brand,'Women').subscribe(data=>this.products=data)
  }
  chooseAll():void{
    this.ngOnInit();
  }
  gotoCart():void{
    this.router.navigate(['cart']);
  }
}
