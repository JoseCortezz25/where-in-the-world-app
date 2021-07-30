import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  URL = "https://restcountries.eu/rest/v2";
  countries = [];

  constructor(private httpClient: HttpClient) {}

  getAllCountries() {
    return this.httpClient.get(`${this.URL}/all`);
  }

  getCountryByPartialName(countryName: string) {
    return this.httpClient.get(`${this.URL}/name/${countryName}`);
  }
  
  getCountryByFullName(countryName: string) {
    return this.httpClient.get(`${this.URL}/name/${countryName}?fullText=true`);
  }

}
