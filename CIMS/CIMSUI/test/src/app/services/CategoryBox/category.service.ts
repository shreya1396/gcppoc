import { Category } from './../../classes/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  service_url="https://innovation-230909.appspot.com/api/dao/ideabox/";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Category[]>(this.service_url);
   }
}
