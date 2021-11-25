import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  URL = "https://restcountries.com/v2/";
  allCountries = [];

  constructor(private httpClient: HttpClient) {}

  getAllCountries() {
    return this.httpClient.get(`${this.URL}/all`);
  }

  getCountryByPartialName(countryName: string): any {
    return this.httpClient.get(`${this.URL}/name/${countryName}`);
  }
  
  getCountryByFullName(countryName: string): any {
    return this.httpClient.get(`${this.URL}/name/${countryName}?fullText=true`);
  }

  getCountryByRegion(countryRegion: string): any {
    return this.httpClient.get(`${URL}/region/${countryRegion}`);
  }

  getCountriesByPage(page: number): any {
    this.getAllCountries()
      .subscribe((countries: any) => {
        this.allCountries = countries;
      })

    console.log(this.allCountries);
    
  }
}
