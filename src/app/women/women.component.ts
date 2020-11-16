import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand, Product } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  brands:Brand[];
  products:Product[];
  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllBrandDetails().subscribe(data=>this.brands=data);
    this.productService.getAllProductByGender('Women').subscribe(data=>this.products=data)
  }
  chooseBrand(brand):void {
    this.productService.getAllProductByBrand(brand,'Women').subscribe(data=>this.products=data)
  }
  chooseAll():void{
    this.ngOnInit();
  }
  gotoCart(id):void{
    this.router.navigate(['/cart', {cartId:id}]);
  }
}
