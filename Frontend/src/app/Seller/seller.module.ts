import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';




import { SellerRoutingModule } from './seller-routing.module';

import { GetSellersComponent } from './pages/get-sellers/get-sellers.component';
import { SellerComponent } from './pages/seller/seller.component';
import { CreateSellerComponent } from './pages/create-seller/create-seller.component';
import { MainComponent } from './pages/main/main.component';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    GetSellersComponent,
    SellerComponent,
    CreateSellerComponent,
    MainComponent
  ],
  imports: [
    FormsModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    ScrollingModule,
    DragDropModule,
    CommonModule,
    NzGridModule,
    NzDividerModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    NzInputNumberModule,
    NzCardModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
    SellerRoutingModule
  ],
  providers: [ { provide: NZ_ICONS, useValue: icons } ]
})
export class SellerModule { }
