import { Http } from '@angular/http';
import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { Idea } from 'src/app/classes/idea';
import { Decision } from 'src/app/classes/decision';
import { DecisiontypeService } from 'src/app/services/DecisionType/decisiontype.service';
import { DecisionService } from 'src/app/services/Decision/decision.service';
@Injectable({
  providedIn: 'root'
})
export class AddIdeaService {

  msg:string;
  dialogConfig = new MatDialogConfig();
  idea:Idea;  
  service_url='http://10.53.17.229:8000/api/dao/ideas/';
  service_url_byneed='http://10.53.17.229:8000/api/dao/ideas/needs/';
  service_url_bymanager='http://10.53.17.229:8000/api/dao/ideas/managers/';
  constructor(private http:HttpClient,private dialog: MatDialog,private decisiontypeservice: DecisiontypeService,private decisionService:DecisionService) {
      this.dialogConfig.disableClose = true;
      this.dialogConfig.autoFocus = true;
   }


   getIdeasByManager(name){
    return this.http.get<Idea[]>(this.service_url_bymanager+name+'/');
  }

  getIdeasById(id){
    return this.http.get<Idea>(this.service_url+id+'/'); 
  }
  
  addIdea(idea){
    this.idea=idea;
    this.http.post(this.service_url,idea).subscribe(data => {
      let idea:Idea;
      idea=JSON.parse(JSON.stringify(data))
       console.log("idea added just now:");
       
       let decision:Decision = new Decision(1,data['id'],'PENDING','---',data['submitted_against'])
       console.log(decision)
       this.decisionService.addData(decision);
       
       this.msg="Successfully Added New Idea";   
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
    },
    error => {
       this.msg="Error! Please Try Again";
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
    });
    

  }

  updateIdea(idea){
    
    this.http.put(this.service_url + idea.id + '/',idea).subscribe(data => {
      //alert("Successfully Updated Idea "+ data);
      this.msg="Successfully Updated Idea";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
      localStorage.removeItem('current_idea');
    },
    error => {
      //alert("Error! Please Try Again.");
      this.msg="Error! Please Try Again.";
      this.dialogConfig.data = this.msg;
      this.dialog.open(DialogBoxComponent,this.dialogConfig);
    });
  }

  getData(){

    return this.http.get<Idea[]>(this.service_url); 
  }

  getIdeaByNeed(id){
    return this.http.get<Idea[]>(this.service_url_byneed+id+'/');
  }

  setIdeaForReview(idea){
      this.idea=JSON.parse(localStorage.getItem('current_idea'));
      console.log(this.idea);
  }

  getIdeaForReview(){
    return this.idea=JSON.parse(localStorage.getItem('current_idea'));
  }

  OnInit(){
  }
}
