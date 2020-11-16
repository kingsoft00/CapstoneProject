import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userRef = new FormGroup({ //to add new element to Db by form
    _id:new FormControl(),
    username:new FormControl(),
    email:new FormControl()
  })
  result:string;
  constructor(public productService:ProductService, private router: Router) { }
  idU = this.productService.trackingUserId;
  nameU = this.productService.trackingUsername;
  emailU = this.productService.trackingEmail;
  ngOnInit(): void {
  }

  updateUserDetails(){
    this.productService.updateUserById(this.userRef.value)
    .subscribe(data=>this.result=data.msg);
    this.router.navigate(['portalUsers']);
  }
  cancel():void{
    this.router.navigate(['portalUsers']);
  }
}
