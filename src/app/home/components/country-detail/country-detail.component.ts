import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from 'src/app/core/country/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country: any;
  currencies: any;
  
  constructor(private route: ActivatedRoute, private countryService: CountryService) {
  }

  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.countryService.getCountryByFullName(params.name)
      .subscribe(((country: any) => {    
        this.country = country[0]
        this.currencies = Array.from(Object.values(this.country.currencies[0]))
      }))
    })
  }

}
