import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/interfaces/Seller.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-get-sellers',
  templateUrl: './get-sellers.component.html',
  styleUrls: ['./get-sellers.component.css']
})
export class GetSellersComponent implements OnInit {
  Sellers: Seller[]=[];
  constructor(private _services:ServicesService) { }
  ngOnInit(): void {
    this._services.getEmployees().subscribe(
      res=>this.Sellers=res,
      err=>console.error(err)
    )
  }

}
