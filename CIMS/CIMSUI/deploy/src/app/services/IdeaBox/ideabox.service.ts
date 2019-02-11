import { Injectable } from '@angular/core';
import { Ideabox } from 'src/app/classes/ideabox';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class IdeaboxService {

  msg:string;
  dialogConfig = new MatDialogConfig();

  service_url='https://innovation-230909.appspot.com/api/dao/ideabox/';
  constructor(private http:HttpClient,private dialog: MatDialog, private router: Router) {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
  }
  ideaboxes:Array<Ideabox>;
  getData(){
    return this.http.get<Ideabox[]>(this.service_url);
  }

  addIdeaBox(ideabox,ideaboxmap){ 

    this.http.post(this.service_url,ideabox).subscribe(data => {
      this.msg="Successfully added your Idea Box";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
      // alert("Idea is successfully added in the Idea Box");
    },
    error => {
      this.msg="Error in submitting Idea Box: Idea Box is already present";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
      // alert("Error in submitting Idea Box: Idea Box is already present ");
    });
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
    this.http.post('http://10.53.17.229:8000/api/dao/boxowner/',ideaboxmap).subscribe(data => {
      console.log(data)
    });
  }

  isValidType(type){
    // console.log("type passed:"+type)
    var flag=false;
     this.getData().subscribe(data => {
       
        this.ideaboxes=data;
        this.ideaboxes.forEach(function (value) {
          // console.log(value.type.toUpperCase());
          // console.log(type);
          if(type!=undefined){
            if(value.type.toUpperCase() === type.toUpperCase()){   
              console.log("found");
              flag=true;
              return true;                      
            }
          }
          
        });
        if(flag === false){
          if(localStorage.getItem('userType') === "ADMINISTRATOR"){
            this.router.navigate(['admin_dashboard/ideaboxpage']);
          }else{
            if(localStorage.getItem('userType') === "INNOVATION_MANAGER"){
              this.router.navigate(['innovation/ideaboxpage']); 
            }
          }
            
        }
         
     });
   
  }

  updateUserForIdeaBox(ideaboxmap){
    this.http.post('http://10.53.17.229:8000/api/dao/boxowner/',ideaboxmap).subscribe(data => {
      this.msg="Successfully added Box owner";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
      // alert("Idea is successfully added in the Idea Box");
    },
    error => {
      this.msg="Error in submitting Idea Box owner";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
      // alert("Error in submitting Idea Box: Idea Box is already present ");
    });
  }
}
