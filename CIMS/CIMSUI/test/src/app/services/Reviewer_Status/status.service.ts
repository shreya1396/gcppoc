import { Injectable } from '@angular/core';
import { Reviewerstatus } from 'src/app/classes/reviewerstatus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  service_url="https://innovation-230909.appspot.com/api/dao/review_status/";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Reviewerstatus[]>(this.service_url);
   }
}
