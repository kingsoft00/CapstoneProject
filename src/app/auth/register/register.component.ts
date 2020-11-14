import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any = {};
  errors: any = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.errors = [];
    this.auth.register(this.formData)
      .subscribe(() => {
        this.router.navigate(['/auth/login'], { queryParams: { registered: 'success' } });
       },
        (errorResponse) => {
          console.log("Just want to report that you entered invalid infor with an following ERROR")
          this.errors.push(errorResponse.error.error);
        });
  }
}
