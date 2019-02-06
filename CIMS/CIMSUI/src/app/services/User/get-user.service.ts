import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Idea } from 'src/app/classes/idea';
import { User } from 'src/app/classes/user';
import { LoginUser } from 'src/app/classes/login-user';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';


@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  msg:string;
  dialogConfig = new MatDialogConfig();

  service_url='http://10.53.17.229:8000/api/dao/users/';
  constructor(private http:HttpClient,private dialog: MatDialog, private router: Router) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
 }

  getUser(){
    return this.http.get<User[]>(this.service_url)
  }
  
  getUserById(id){
    return this.http.get<User>(this.service_url+id+"/");
  }

  updateUser(user: User){
    const httpOptions={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    // console.log(user);
     return this.http.put(this.service_url + user.user_id +'/',user,httpOptions).subscribe(data => {
      this.msg="Successfully Updated User Role";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
      this.router.navigate(['admin_dashboard/manage_users']);
     },
     error => {
        this.msg="Error! Please Try Again";
        this.dialogConfig.data = this.msg;
        this.dialog.open(DialogBoxComponent,this.dialogConfig);
     });
  }
}
