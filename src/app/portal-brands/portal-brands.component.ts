import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-portal-brands',
  templateUrl: './portal-brands.component.html',
  styleUrls: ['./portal-brands.component.css']
})
export class PortalBrandsComponent implements OnInit {
  brands:Array<Brand>;
  constructor(public productService:ProductService, private router:Router) { }
  result:string;
  ngOnInit(): void {
    this.productService.getAllBrandDetails().subscribe(data=>this.brands=data);
  }
  gotoAddBrand():void{
    this.router.navigate(['addBrand'])
  }
  deleteBrand(brand:string):void {
    this.productService.deleteBrandByBrand(brand).subscribe(data=>this.result=data.msg);
    this.router.navigate(['portalHome']);
  }
}
