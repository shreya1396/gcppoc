import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecisionType } from '../../classes/decision-type';

@Injectable({
  providedIn: 'root'
})
export class DecisiontypeService {

  service_url='http://10.53.17.229:8000/api/dao/decisiontypes/';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<DecisionType[]>(this.service_url);
   }
}
