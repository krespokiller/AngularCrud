import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetSellersComponent } from './pages/get-sellers/get-sellers.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CreateSellerComponent } from './pages/create-seller/create-seller.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [{
  path:'', 
  component:MainComponent 
  ,children:[
    {path:'GetSellers',component:GetSellersComponent},
    {path:'Seller',component:SellerComponent},
    {path:'CreateSellers',component:CreateSellerComponent},
    {path:'**',redirectTo:'GetSellers'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
