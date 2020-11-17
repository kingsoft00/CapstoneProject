import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './model.item';
import { Brand, Product, User } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  trackingIdUpdate:number = 0;
  trackingNameUpdate:string;
  trackingSizeUpdate:string;
  trackingPriceUpdate:number;

  trackingUserId:any;
  trackingUsername:string;
  trackingEmail:string;

  items: Item[];
  total: number = 0.00;
  totalString:string;

  private products:Product[]=[];
  
  constructor(public httpClient:HttpClient) { 
    this.getAllProductDetails().subscribe(data=>this.products=data);
  }

  find(id:string): Product { 
    var num = parseInt(id);
    return this.products[this.getSelectedIndex(num)];
  }
  
  private getSelectedIndex(id) {
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i]._id == id) {
            return i;
        }
    }
    return -1;
  }

  getAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:5000/api/users/allUser");
  }
  deleteUserByEmail(email):Observable<any>{
    return this.httpClient.delete("http://localhost:5000/api/users/deleteUserByEmail/"+email);
  }
  storeUser(ref):Observable<any>{
    return this.httpClient.post("http://localhost:5000/api/users/storeUser",ref);
  }
  updateUserById(id):Observable<any> {
    return this.httpClient.put("http://localhost:5000/api/users/updateUserById",id);
  }

  getAllProductDetails():Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:5000/product/productFromDb");
  }
 
  getAllProductByGender(gender):Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:5000/product/productInfoByGender/"+gender);
  }
  getAllProductByBrand(brand,gender):Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:5000/product/productInfoByBrand/"+brand+"/"+gender);
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
