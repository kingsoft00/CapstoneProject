import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand, Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  trackingIdUpdate:number = 0;
  trackingNameUpdate:string;
  trackingSizeUpdate:string;
  trackingPriceUpdate:number;
  
  constructor(public httpClient:HttpClient) { } //DI for HttpClient
  getAllProductDetails():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:5000/product/productFromDb");
  }

  storeProductDetails(prodRef):Observable<any>{
    return this.httpClient.post("http://localhost:5000/product/storeProduct",prodRef);
  }

  deleteProductById(prodId):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/product/deleteProductById/"+prodId);
  }
  updateProductDetailsFromDb(prodRef):Observable<any> {
    return this.httpClient.put("http://localhost:5000/product/updateProduct",prodRef);
  }

  getAllBrandDetails():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>("http://localhost:5000/product/brandFromDb");
  }
  storeBrandDetails(prodRef):Observable<any>{
    return this.httpClient.post("http://localhost:5000/product/storeBrand",prodRef);
  }
  deleteBrandByBrand(prodBrand):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/product/deleteBrandByBrand/"+prodBrand);
  }
}
