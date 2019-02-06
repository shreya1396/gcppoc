
import { forEach } from '@angular/router/src/utils/collection';
import { Injectable } from '@angular/core';
import { BoxOwner } from '../../classes/box-owner';
import { HttpClient } from '@angular/common/http';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
// import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BoxownerService {

  msg:string;
  dialogConfig = new MatDialogConfig();
  service_url='http://10.53.17.229:8000/api/dao/boxowner/';
  constructor(private http:HttpClient, private dialog: MatDialog, private router: Router) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
   }

   getData(){
    return this.http.get<BoxOwner[]>(this.service_url);
  }

  getDataByType(type){
    return this.http.get<BoxOwner[]>(this.service_url+type+'/');
  }

  updateUsers(data){
    let http = this.http;
    let url = this.service_url;
    let msg:string;
    let dialogConfig = this.dialogConfig;
    let router = this.router;
    let dialog=this.dialog;
    // let location =this.location;
    data.forEach(function(value){
      // let http:HttpClient
      
      http.post(url,value).subscribe(data => {
        // msg="Successfully added Box owner";
        // dialogConfig.data = msg;
        // dialog.open(DialogBoxComponent,this.dialogConfig);
        alert("User updated for Idea Box");
        window.location.reload();
        // alert("Idea is successfully added in the Idea Box");
      },
      error => {
        // msg="Error in submitting Idea Box owner";
        // dialogConfig.data = msg;
        // dialog.open(DialogBoxComponent,this.dialogConfig);

        alert("Error in updating user ");
      })
    });
    // this.dialog.open(DialogBoxComponent,this.dialogConfig);
  }
}
