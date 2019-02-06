import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from 'src/app/classes/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  service_url='http://10.53.17.229:8000/api/dao/roles/';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Role[]>(this.service_url)
  }
}
