import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reuirement } from 'src/app/classes/reuirement';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  service_url="https://innovation-230909.appspot.com/api/dao/ideaneeds/";
  
  req:Array<Reuirement>;
  requirement:Reuirement;
  constructor(private http: HttpClient) {
    
   }

   getData(){
    return this.http.get<Reuirement[]>(this.service_url)
   }

   getObjectById(id){
      // return this.getData().subscribe(data => {
      //     this.req=data;
      //     this.req.forEach(function(value){
      //       if(value.id == id){
      //         return value;
      //       }
      //     })
      // });
      return this.http.get<Reuirement>("https://innovation-230909.appspot.com/api/dao/ideaneeds/"+id);
   }

   
}
