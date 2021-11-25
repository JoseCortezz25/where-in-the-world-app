import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterPipe implements PipeTransform {
  /**
   * Filtering countries by name or capital
   * @param {any[]} countries
   * @param {string} searchText
   * @returns {any[]}
   */

  transform(countries: any[], searchText: string): any[] {

    if (!countries) {
      return [];
    }

    if (!searchText) {
      return countries;
    }

    console.log("countries");
    console.log(countries);
    
    searchText = searchText.toLocaleLowerCase();

    return countries.filter(country => {
      return country.name?.toLocaleLowerCase().includes(searchText) ||
        country.capital?.toLocaleLowerCase().includes(searchText) ||
        country.alpha3Code?.toLocaleLowerCase().includes(searchText);
    });
  }


}
