import { Routes } from '@angular/router';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { PortalBrandsComponent } from './portal-brands/portal-brands.component';
import { PortalProductsComponent } from './portal-products/portal-products.component';
import { PortalhomeComponent } from './portalhome/portalhome.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { WomenComponent } from './women/women.component';

export const applicationRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'men', component: MenComponent},
  {path: 'women', component: WomenComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'portalHome', component: PortalhomeComponent},
  {path: 'portalBrands', component: PortalBrandsComponent},
  {path: 'portalProducts', component: PortalProductsComponent},
  {path: 'addBrand', component: AddBrandComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'updateProduct', component: UpdateProductComponent}
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: [AuthGuard]
// })


