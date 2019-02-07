import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/app/classes/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  service_url='https://innovation-230909.appspot.com/api/dao/roles/';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Role[]>(this.service_url)
  }
}
