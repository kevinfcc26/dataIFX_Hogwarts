import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  constructor(private http: HttpClient) { }
  private url = 'http://hp-api.herokuapp.com/api/characters';

  getHouse( house: string ){
    return this.http.get(`${ this.url }/house/${house}`);
  }
  getStudents(){
    return this.http.get(`${ this.url }/students`);
  }

  getTeachers(){
    return this.http.get(`${ this.url}/staff`);
  }
}
