import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
import { CustomerComponent } from './Pages/customer/customer.component';
const routes: Routes = [];
{
  path : 'aboutus';
  Component : AboutusComponent
};
{
  path : 'home';
  Component : HomeComponent
};
{
  path:'contact';
  Component : ContactComponent
};
{
  path:'customer';
  Component : CustomerComponent
}



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
