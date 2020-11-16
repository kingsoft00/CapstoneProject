import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { RouterModule } from '@angular/router';
import { applicationRoutes } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { PortalhomeComponent } from './portalhome/portalhome.component';
import { PortalBrandsComponent } from './portal-brands/portal-brands.component';
import { PortalProductsComponent } from './portal-products/portal-products.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AuthModule } from './auth/auth.module';
import { PortalUsersComponent } from './portal-users/portal-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    CheckoutComponent,
    MenComponent,
    WomenComponent,
    AccountComponent,
    PortalhomeComponent,
    PortalBrandsComponent,
    PortalProductsComponent,
    AddBrandComponent,
    AddProductComponent,
    UpdateProductComponent,
    PortalUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
