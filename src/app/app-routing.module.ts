import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateNewProductComponent } from './create-new-product/create-new-product.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "list", component: ProductListComponent },
  { path: "create", component: CreateNewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
