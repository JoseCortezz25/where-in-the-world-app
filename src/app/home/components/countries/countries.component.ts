import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryService } from 'src/app/core/country/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  searchText = '';
  allCountriesShow = [];
  allCountry = [];

  listOfRegion: string[] = ["Africa", "America", "Asia", "Europe", "Oceania", "All"]
  selectOpcion = new FormControl("");

  showButtonUp = false;
  private scrollHeight = 500;
  private pageNum = 5;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private countryService: CountryService,
    ) { }

  ngOnInit(): void {
    this.fetchCountries();
    this.selectOpcion.valueChanges
      .subscribe(countryRegion => {
        this.allCountriesShow = this.filterByRegionPipe(this.allCountry, countryRegion)
        console.log(this.allCountriesShow);
      })
  }

  fetchCountries() {
    this.countryService.getAllCountries()
      .subscribe((countries: any) => {
        this.allCountriesShow = countries;
        this.allCountry = countries;
      })
  }

  filterByRegionPipe(countries: any[], region: string): any {
    if(region === "All"){
      return this.allCountry;
    }

    return countries.filter((country: any) => {
      return country.region.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop
    this.showButtonUp = (yOffSet || scrollTop) > this.scrollHeight;
    console.log(scrollTop);
    
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    this.pageNum++;
    this.countryService.getCountriesByPage(this.pageNum);
    console.log("down!");
    
  }
}
