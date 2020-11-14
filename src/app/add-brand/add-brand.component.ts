import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandRef = new FormGroup({ //to add new element to Db by form
    brand:new FormControl(),
  })
  result:string;

  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  storeBrand():void{
    this.productService.storeBrandDetails(this.brandRef.value)
    .subscribe(data=>this.result=data.msg);
    this.router.navigate(['portalBrands']);
  }

}
