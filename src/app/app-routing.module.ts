import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';

const routes: Routes = [
  { path: 'product/create', component: ProductCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
