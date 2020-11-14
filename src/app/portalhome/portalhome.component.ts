import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portalhome',
  templateUrl: './portalhome.component.html',
  styleUrls: ['./portalhome.component.css']
})
export class PortalhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showBrands():void {
    this.router.navigate(['/portalBrands']);
  }
  showProducts():void{
    this.router.navigate(['/portalProducts']);
  }
}
