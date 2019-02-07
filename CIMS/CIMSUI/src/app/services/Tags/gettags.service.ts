import { Tag } from './../../classes/tag';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GettagsService {
  service_url='https://innovation-230909.appspot.com/api/dao/tags/';

  constructor(private http:HttpClient) {

   }

   getData(){
    return this.http.get<Tag[]>(this.service_url)
   }
}
