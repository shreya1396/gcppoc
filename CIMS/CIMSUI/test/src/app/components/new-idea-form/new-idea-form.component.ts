import { Reuirement } from './../../classes/reuirement';

import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/classes/tag';

import { Idea } from 'src/app/classes/idea';
import { GettagsService } from 'src/app/services/Tags/gettags.service';
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';
import { GetUserService } from 'src/app/services/User/get-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RequirementService } from 'src/app/services/Requirement/requirement.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';
import { DatePipe } from '@angular/common';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/CategoryBox/category.service';
import { User } from 'src/app/classes/user';
import { forEach } from '@angular/router/src/utils/collection';
import { Decision } from 'src/app/classes/decision';
import { DecisionService } from 'src/app/services/Decision/decision.service';
import { DecisiontypeService } from 'src/app/services/DecisionType/decisiontype.service';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Headers } from '@angular/http';



@Component({
  selector: 'app-new-idea-form',
  templateUrl: './new-idea-form.component.html',
  styleUrls: ['./new-idea-form.component.css']
})
export class NewIdeaFormComponent implements OnInit {

  msg:string
  dateStr:string;
  title = "Example Angular Material Dialog";

  category:Array<Category>;
  tags:Array<Tag>;

  req:Array<Reuirement>;
  submitted_against:Number;

  users:Array<User>;
  idea_need_id:number;
  requirement_obj= new Reuirement('','','','');
  //2018-11-01T11:11:11Z
  date:Date
  idea = new Idea(3,'','','','','',this.dateStr,this.dateStr,1,'','','');

  constructor(private tagService:GettagsService,private ideaService:AddIdeaService,private userService:GetUserService,public router:Router,private reqservice:RequirementService,private dialog: MatDialog,private datePipe: DatePipe,private categoryservice: CategoryService, public route: ActivatedRoute,private decisiontypeservice: DecisiontypeService,private decisionService:DecisionService) { 

    this.route.params.subscribe( params => {
      this.idea_need_id=(params['idea_need_id']);
  
      this.idea.submitted_against=this.idea_need_id;
      this.getrequirements();
    });
    console.log("idea need id:"+this.idea_need_id);
    
    //Current date
    this.date= new Date();
    this.dateStr=this.transformDate(this.date);

  }

  submitFunc(){

    console.log("Hii")
    
    this.dateStr=this.transformDate(this.date);
    this.idea.submission_date=this.dateStr;
    this.idea.update_date=this.dateStr;
    console.log(this.idea)
    //confirm
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      idea: this.idea,
      type: "new",
      title: "Confirm the changes?"
    }
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
    // //decision,comment,need_id
    // let decision:Decision = new Decision(1,this.idea.id,'PENDING','---',this.idea.submitted_against)
    // this.decisionService.addData(decision);
   
    
}

getrequirements(){
  this.reqservice.getObjectById(this.idea.submitted_against).subscribe(data => {
    this.requirement_obj=data;
    console.log("RRRR:"+this.requirement_obj.requirement);
    this.idea.category=this.requirement_obj.idea_box;
  });
}

transformDate(date) {
  return this.datePipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss'); //whatever format you need. 
}

// fileChange(event) {
//   // alert("changed");
//   let fileList: FileList = event.target.files;
//   if(fileList.length > 0) {
//       let file: File = fileList[0];
//       let formData:FormData = new FormData();
//       formData.append('uploadFile', file, file.name);
//       let headers = new Headers();
//       /** In Angular 5, including the header Content-Type can invalidate your request */
//       headers.append('Content-Type', 'multipart/form-data');
//       headers.append('Accept', 'application/json');
//       let options = new RequestOptions({ headers: headers });
//       // this.http.post(`${this.apiEndPoint}`, formData, options)
//       //     .map(res => res.json())
//       //     .catch(error => Observable.throw(error))
//       //     .subscribe(
//       //         data => console.log('success'),
//       //         error => console.log(error)
//       //     )
//   }
// }

ngOnInit() {
  


  this.userService.getUser().subscribe(data => {
    this.users=data;
    for (let entry of this.users) {
      if(entry.name === localStorage.getItem('current_user')){
        this.idea.idea_owner=entry.name;
      }
    }
    // this.idea.idea_owner=data['name'];
  });
  
  this.tagService.getData().subscribe(data => {
    //console.log(data)
    this.tags=data;
    
  });

  this.reqservice.getData().subscribe(data => {
    
    this.req=data;
    
    console.log(this.req)
  });
  
  this.categoryservice.getData().subscribe(data =>{
        this.category=data;
  });
  
}

}
