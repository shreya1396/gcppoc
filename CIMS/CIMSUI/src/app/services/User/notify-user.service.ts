import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class NotifyUserService {

  service_url= "https://innovation-230909.appspot.com/api/dao/notify/"
  msg:string
  dialogConfig = new MatDialogConfig();
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  notify(idea_id,recipient,notifier){
    let data= {
      "recipient": recipient,
      "notifier": notifier
    }
    this.http.post(this.service_url+idea_id+'/',data).subscribe(data => {
      //console.log(data);
       this.msg="Successfully Notified User";   
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
