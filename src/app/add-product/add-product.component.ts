import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productRef = new FormGroup({ //to add new element to Db by form
    _id:new FormControl(),
    name:new FormControl(),
    size:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    gender:new FormControl(),
    price:new FormControl(),
    brand:new FormControl()
  })
  result:string;
  brands:Brand[];
  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllBrandDetails().subscribe(data=>this.brands=data);
  }

  storeProduct():void{
    console.log(this.productRef.value.brand);
    this.productService.storeProductDetails(this.productRef.value)
    .subscribe(data=>this.result=data.msg);
    this.router.navigate(['portalHome']);
  }
  cancel():void{
    this.router.navigate(['portalProducts']);
  }

}
