import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecisionType } from '../../classes/decision-type';

@Injectable({
  providedIn: 'root'
})
export class DecisiontypeService {

  service_url='https://innovation-230909.appspot.com/api/dao/decisiontypes/';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<DecisionType[]>(this.service_url);
   }
}
