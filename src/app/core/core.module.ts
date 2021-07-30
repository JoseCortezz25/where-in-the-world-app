import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryService } from './country/country.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ 
    CountryService
  ]
})
export class CoreModule { }
