import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryModel} from "./country.model";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountries(): Observable<CountryModel[]> {
    return this.httpClient.get<CountryModel[]>('http://localhost:3000/countries')
  }
}
