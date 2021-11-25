import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter-search.pipe';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
// import { FilterSearchPipe } from '../shared/pipes/FilterSearch/filter-search.pipe';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    LayoutComponent,
    CountryComponent,
    CountriesComponent,
    FilterPipe,
    CountryDetailComponent,
    // FilterSearchPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    InfiniteScrollModule
  ]
})
export class HomeModule { }
