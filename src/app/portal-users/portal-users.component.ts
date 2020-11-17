import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model.product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-portal-users',
  templateUrl: './portal-users.component.html',
  styleUrls: ['./portal-users.component.css']
})
export class PortalUsersComponent implements OnInit {
  users:Array<User>;
  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getAllUsers().subscribe(data=>this.users=data);
  }

  gotoAddUser():void{
    this.router.navigate(['addUser']);
  }
  deleteUser(email,id):void {
    if (id =="5fb317297ed16d0db055b812") {
      alert("Should not delete Admin account")
      this.router.navigate(['portalHome']);
    } else {
      this.productService.deleteUserByEmail(email).subscribe(data=>this.users=data.msg);
      this.router.navigate(['portalHome']);
    }
  }
  gotoUpdateUser(id:any,username:string,email:string):void{
    this.productService.trackingUserId = id;
    this.productService.trackingUsername = username;
    this.productService.trackingEmail = email;
    this.router.navigate(['updateUser']);
    }
    cancel():void{
      this.router.navigate(['portalHome']);
    }

}
