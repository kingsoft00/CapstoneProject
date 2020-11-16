import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userRef = new FormGroup({ //to add new element to Db by form
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  result:string;

  constructor(public productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  storeUser():void{
    this.productService.storeUser(this.userRef.value)
    .subscribe(data=>this.result=data.msg);
    this.router.navigate(['portalHome']);
  }

}
