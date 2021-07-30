import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';


@NgModule({
  declarations: [
    LayoutComponent,
    CountryComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
