import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Decision } from 'src/app/classes/decision';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  service_url='https://innovation-230909.appspot.com/api/dao/decision/';
  msg:string
  dialogConfig = new MatDialogConfig();

  constructor(private http:HttpClient,private dialog: MatDialog,) { 
    this.dialogConfig.disableClose = true;
      this.dialogConfig.autoFocus = true;
  }
 
  getData(){
    return this.http.get<Decision[]>(this.service_url);
   }

   updateData(decision){
    this.http.put(this.service_url+decision.idea_id+'/',decision).subscribe(data => {
      //console.log(data);
       this.msg="Successfully Updated Decision";   
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
    },
    error => {
       this.msg="Error! Please Try Again";
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
    });
   }

   addData(decision){
    this.http.post(this.service_url,decision).subscribe(data => {
      //console.log(data);
      //  this.msg="Successfully Added Decision";   
      //  this.dialogConfig.data = this.msg;
      //  this.dialog.open(DialogBoxComponent,this.dialogConfig);
    },
    error => {
      //  this.msg="Error! Please Try Again";
      //  this.dialogConfig.data = this.msg;
      //  this.dialog.open(DialogBoxComponent,this.dialogConfig);
    });
   }
}
