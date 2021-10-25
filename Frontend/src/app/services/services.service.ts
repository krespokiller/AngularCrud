import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Seller } from 'src/app/interfaces/Seller.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url:string=environment.baseurl;
  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.http.get<Seller[]>(`${this.url}/all`);
  }
  createEmployees(employee:Seller){
    return this.http.post(`${this.url}/add`,employee);
  }
  GetEmployee(_id:string){
    return this.http.get<Seller>(`${this.url}/get/${_id}`);
  }
  DeleteEmployees(_id:string){
    return this.http.delete(`${this.url}/delete/${_id}`);
  }
   EditEmployee(_id:string,employee:Seller){
    return this.http.put(`${this.url}/update/${_id}`,employee);
  }
}
