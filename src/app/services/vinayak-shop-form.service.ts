import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Country } from '../common/country';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class VinayakShopFormService {

  private countriesUrl = environment.vinayakecomUrl + '/countries';
  private statesUrl= environment.vinayakecomUrl + 'states';

  constructor(private httpClient:HttpClient) { }

  getCountries():Observable<Country[]>{

    return this.httpClient.get<GetResponseCountries>(this.countriesUrl).pipe(
      map(response=>response._embedded.countries)
    );
  }

  getStates(theCountryCode:String):Observable<State[]>{

    //search URL
    const searchStateUrl=`${this.statesUrl}/search/findByCountryCode?code=${theCountryCode}`

    return this.httpClient.get<GetResponseStates>(searchStateUrl).pipe(
      map(response=>response._embedded.states)
    );
  }

  getCreditCardMonths(startMonth:number):Observable<number[]>{ 

    let data:number[]=[];

    //build an array for "Month" dropdown list

    for(let theMonth=startMonth;theMonth<=12;theMonth++){
      data.push(theMonth);
    }

    return of(data); 
  }

  getcreditcardYears():Observable<number[]>{

    let data:number[]=[];

    //build an array for "Year" dropdown list for next 10 years

    const startYear:number=new Date().getFullYear();
    const endYear:number=startYear+10;

    for(let theYear=startYear;theYear<=endYear;theYear++){
       data.push(theYear);
    }

    return of(data);
  } 

}

interface GetResponseCountries{
  _embedded:{
    countries:Country[]; 
  }
}

interface GetResponseStates{
  _embedded:{
    states:State[]; 
  }
}
