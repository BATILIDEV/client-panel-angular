import { AfterAuthGuard } from './guards/after-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { LoginComponent } from './components/login/login.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes : Routes=[
  {path:"",redirectTo:"/address",pathMatch:'full',canActivate:[AuthGuard]},
  {path:"address",canActivate:[AuthGuard], children:[
    {path:"",component:ListAddressComponent },
    {path:"edit/:id",component:EditAddressComponent },
    {path:"new",component:AddAddressComponent }
  ]},
  {path:"login",component:LoginComponent,canActivate:[AfterAuthGuard]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
