import { Component, OnInit } from '@angular/core';
import {CountryService} from "./country.service";
import {Observable} from "rxjs";
import {CountryModel} from "./country.model";

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component {

  countrySelected: string = '';
  countryList$: Observable<CountryModel[]> = this.countryService.getCountries();
  constructor(
    private countryService: CountryService
  ) { }

}
