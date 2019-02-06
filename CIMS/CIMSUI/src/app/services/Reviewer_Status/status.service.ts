import { Injectable } from '@angular/core';
import { Reviewerstatus } from 'src/app/classes/reviewerstatus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  service_url="http://10.53.17.229:8000/api/dao/review_status/";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Reviewerstatus[]>(this.service_url);
   }
}
