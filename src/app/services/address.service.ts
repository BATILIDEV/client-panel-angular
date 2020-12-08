import { Observable } from 'rxjs';
import { Address } from './../models/address';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AddressService {
  // url="http://localhost:8080/addresses"

  constructor(private http:HttpClient) { }
  getAll(){
  return this.http.get(`${environment.baseUrl}/addresses`);
  }
  delete(id:string){
     return this.http.delete(`${environment.baseUrl}/addresses/${id}`);
  }
  
  addAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${environment.baseUrl}/addresses`, address);
}
}
