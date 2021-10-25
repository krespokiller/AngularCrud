import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'seller',loadChildren:()=>import('./Seller/seller.module').then(module=>module.SellerModule)},
  {path:'**',redirectTo:'seller'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
