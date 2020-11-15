import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinayakShopFormService {

  constructor() { }

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
