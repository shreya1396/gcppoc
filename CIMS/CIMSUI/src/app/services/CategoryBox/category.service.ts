import { Category } from './../../classes/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  service_url="http://10.53.17.229:8000/api/dao/ideabox/";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Category[]>(this.service_url);
   }
}
