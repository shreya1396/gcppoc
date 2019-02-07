import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reviewer } from 'src/app/classes/reviewer';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  reviewer:Reviewer
  msg:string;
  service_url='https://innovation-230909.appspot.com/api/dao/reviewers/';
  service_url_byideaid='https://innovation-230909.appspot.com/api/dao/review/';
  dialogConfig = new MatDialogConfig();
  
  constructor(private router: Router,private http:HttpClient,private dialog: MatDialog,) {

      this.dialogConfig.disableClose = true;
      this.dialogConfig.autoFocus = true;
   }

   getData(){
    return this.http.get<Reviewer[]>(this.service_url); 
  }

  getDataByIdeaId(id){
    return this.http.get<Reviewer[]>(this.service_url_byideaid+id+'/'); 
  }

  addReviewer(reviewer){
    let http = this.http;
    let url = this.service_url;
    let msg:string;
    let dialogConfig = this.dialogConfig;
    let router = this.router;
    let dialog=this.dialog;
    this.reviewer=reviewer;
    console.log(this.reviewer);

    reviewer.forEach(function(value){
      http.post(url,value).subscribe(data => {
        // alert("Reviewer added for idea");

          //console.log(data);
          //  this.msg="Successfully Added New Idea";   
          //  this.dialogConfig.data = this.msg;
          //  this.dialog.open(DialogBoxComponent,this.dialogConfig);
        },
        error => {
          alert("Error!!");

          //  this.msg="Error! Please Try Again";
          //  this.dialogConfig.data = this.msg;
          //  this.dialog.open(DialogBoxComponent,this.dialogConfig);
        });
    });

    // this.http.post(this.service_url,reviewer).subscribe(data => {
    //   //console.log(data);
    //    this.msg="Successfully Added New Idea";   
    //    this.dialogConfig.data = this.msg;
    //    this.dialog.open(DialogBoxComponent,this.dialogConfig);
    // },
    // error => {
    //    this.msg="Error! Please Try Again";
    //    this.dialogConfig.data = this.msg;
    //    this.dialog.open(DialogBoxComponent,this.dialogConfig);
    // });
    
   }

   updateData(reviewer){
    this.reviewer=reviewer;
    this.http.put('https://innovation-230909.appspot.com/api/dao/review/'+reviewer.idea_id+'/',reviewer).subscribe(data => {
      //console.log(data);
       this.msg="Successfully Updated review";   
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
    },
    error => {
       this.msg="Error! Please Try Again";
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
    });
   }
}
