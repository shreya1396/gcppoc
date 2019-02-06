import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ideaneed } from 'src/app/classes/ideaneed';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class IdeaneedService {

  msg:string;
  dialogConfig = new MatDialogConfig();
  service_url='http://10.53.17.229:8000/api/dao/ideaneeds/';
  constructor(private http:HttpClient,private dialog: MatDialog, private router: Router) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
 }

  getData(){
    return this.http.get<Ideaneed[]>(this.service_url)
  }

  getDataByType(idea_type){
    return this.http.get<Ideaneed[]>(this.service_url+idea_type+"/")
  }
  
  addIdeaNeeds(ideaneeds){
    this.http.post(this.service_url,ideaneeds).subscribe(data => {
      this.msg="Successfully added the requirement";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
    },
    error => {
        this.msg="Error in adding the requirement.";
        this.dialogConfig.data = this.msg;
        this.dialog.open(DialogBoxComponent,this.dialogConfig);
      // alert("Error in adding the requirement.");
    });
  }
}
