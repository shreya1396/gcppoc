import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LoginUser } from 'src/app/classes/login-user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  service_url='http://10.53.17.229:8000/api/dao/auth/';

  private isAdmin=JSON.parse(localStorage.getItem('isAdmin') || 'false');
  private isInnovationManagaer=JSON.parse(localStorage.getItem('isInnovationManager') || 'false');
  private isReviewer=JSON.parse(localStorage.getItem('isReviewer') || 'false');
  private isUser=JSON.parse(localStorage.getItem('isUser') || 'false');

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false' );
  user:LoginUser;


  constructor(private http:HttpClient) {
      this.isLoggedIn.next(JSON.parse(localStorage.getItem('showheader-footer') || 'false' ));
  }

  getAdmin(){
     return this.isAdmin;
  }
  setAdmin(value){
     localStorage.setItem('isAdmin',value);
     this.isAdmin=JSON.parse(localStorage.getItem('isAdmin'));
  }

  getInnovationManagaer(){
     return this.isInnovationManagaer;
  }
  setInnovationManagaer(value){
     localStorage.setItem('isInnovationManager',value);
     this.isInnovationManagaer=JSON.parse(localStorage.getItem('isInnovationManager'));
     
  }

  getReviewer(){
     return this.isReviewer;
  }
  setReviewer(value){
    localStorage.setItem('isReviewer',value);
     this.isReviewer=JSON.parse(localStorage.getItem('isReviewer'));
  }

  getUser(){
     return this.isUser;
  }
  setUser(value){
     localStorage.setItem('isUser',value);
     this.isUser=JSON.parse(localStorage.getItem('isUser'));
  }



  getLoggedInStatus(){
    //return this.isLoggedIn;
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString() )
  }

  showheader(){
    return this.isLoggedIn;
  }

  setLoggedInStatus(value){
    this.loggedInStatus=value;
    localStorage.setItem('loggedIn', value);

    //for header
    this.isLoggedIn.next(value);
    
      localStorage.setItem('showheader-footer', value.toString());

    
  }
  getUserDetails(username,password){
    return this.http.post<LoginUser>(this.service_url,{
      username,
      password
    });

  }

  OnInit(){
    this.isLoggedIn = JSON.parse(localStorage.getItem('showheader-footer'));
  }
}
