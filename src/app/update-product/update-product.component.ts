import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productRef = new FormGroup({ //to add new element to Db by form
    _id:new FormControl(),
    name:new FormControl(),
    size:new FormControl(),
    price:new FormControl
  })
  result:string;
  constructor(public productService:ProductService, private router: Router) { }
  in = this.productService.trackingIdUpdate;
  nameU = this.productService.trackingNameUpdate;
  sizeU = this.productService.trackingSizeUpdate;
  priceU = this.productService.trackingPriceUpdate;
  ngOnInit(): void {
  }

  updateProductDetails(){
    this.productService.updateProductDetailsFromDb(this.productRef.value)
    .subscribe(data=>this.result=data.msg);
    this.router.navigate(['portalProducts']);
  }
  cancel():void{
    this.router.navigate(['portalProducts']);
  }
}
