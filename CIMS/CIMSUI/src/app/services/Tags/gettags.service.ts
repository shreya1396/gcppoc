import { Tag } from './../../classes/tag';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GettagsService {
  service_url='http://10.53.17.229:8000/api/dao/tags/';

  constructor(private http:HttpClient) {

   }

   getData(){
    return this.http.get<Tag[]>(this.service_url)
   }
}
