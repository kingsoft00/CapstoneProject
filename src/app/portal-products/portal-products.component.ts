import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-portal-products',
  templateUrl: './portal-products.component.html',
  styleUrls: ['./portal-products.component.css']
})
export class PortalProductsComponent implements OnInit {
  products:Array<Product>;
  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllProductDetails().subscribe(data=>this.products=data);
  }

  gotoAddProduct():void{
    this.router.navigate(['addProduct']);
  }
  deleteProduct(id):void {
    this.productService.deleteProductById(id).subscribe(data=>this.products=data.msg);
    this.router.navigate(['portalHome']);
  }
  gotoUpdateProduct(id:number,name:string,size:string,price:number):void{
    this.productService.trackingIdUpdate = id;
    this.productService.trackingNameUpdate = name;
    this.productService.trackingSizeUpdate = size;
    this.productService.trackingPriceUpdate = price;
    this.router.navigate(['updateProduct']);
    }
    cancel():void{
      this.router.navigate(['portalHome']);
    }
}
