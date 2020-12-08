import { AddressService } from './../../services/address.service';
import { Address } from './../../models/address';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  form= new FormGroup({
    type:new FormControl(null,Validators.required),
    country:new FormControl(null,[Validators.required]),
    city:new FormControl(null,[Validators.required]),
    street:new FormControl(null,[Validators.required]),
    code_postal:new FormControl(null,[Validators.required])

  });
  address:Address;
  constructor(private addressService:AddressService,private router:Router) { }

  ngOnInit(): void {
  }
  addAddress(){
    this.address=this.form.value;
    // console.log(this.address);

    this.addressService.addAddress(this.address).subscribe(res=>console.log(res));
    this.router.navigateByUrl("/");



  }
}
