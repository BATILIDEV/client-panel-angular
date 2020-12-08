import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses:Address[]=[];
  // adress:Address;
  
  constructor( private addressService :AddressService,private router:Router) { }

  ngOnInit(): void {
    this.getAllAdresses();
    // this.deleteAddress(this.adress);
  }
  getAllAdresses(){
    this.addressService.getAll().subscribe((res:Address[])=>this.addresses=res);
  }
  toAddComponent(){
    this.router.navigateByUrl("/address/new");

  }
  // editAddress(){}
  deleteAddress(adress){
    this.addressService.delete(adress.adressId).subscribe(res=>console.log(res));
     this.router.navigateByUrl("/address");
  }
}
