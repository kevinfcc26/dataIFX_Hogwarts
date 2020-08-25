import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  constructor(private http: HttpClient) {
    console.log('service runnig ');
   }
  private url = 'http://hp-api.herokuapp.com/api/characters/house';

  getHouse( house: string ){
    return this.http.get(`${ this.url }/${house}`);
  }
}
