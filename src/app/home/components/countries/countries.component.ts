import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core/country/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  allCountries = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.fetchCountries();
  }
  
  fetchCountries() {
    this.countryService.getAllCountries()
    .subscribe((countries: any) => {
      this.allCountries = countries;
      console.log(this.allCountries);
      })
  }

}
