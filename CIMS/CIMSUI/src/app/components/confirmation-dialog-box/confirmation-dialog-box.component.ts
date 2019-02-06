import { AuthService } from 'src/app/services/Authentication/auth.service';
import { Router } from '@angular/router';
import { Idea } from 'src/app/classes/idea';
import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';
import { IfStmt } from '@angular/compiler/src/output/output_ast';

import { User } from '../../classes/user';
import { GetUserService } from '../../services/User/get-user.service';
import { Location } from '@angular/common';
import { IdeaboxService } from '../../services/IdeaBox/ideabox.service';
import { Ideabox } from '../../classes/ideabox';
import { Ideaneed } from '../../classes/ideaneed';
import { IdeaneedService } from '../../services/IdeaNeed/ideaneed.service';
import { BoxOwner } from 'src/app/classes/box-owner';
import { BoxownerService } from '../../services/BoxOwner/boxowner.service';

@Component({
  selector: 'app-confirmation-dialog-box',
  templateUrl: './confirmation-dialog-box.component.html',
  styleUrls: ['./confirmation-dialog-box.component.css']
})
export class ConfirmationDialogBoxComponent implements OnInit {


  idea:Idea;
  type:string;
  title:string;
  user: User;
  ideabox: Ideabox;
  ideaneed: Ideaneed;
  boxowner: BoxOwner;
  // usersToAssign: BoxOwner;
  @Output() messageEvent = new EventEmitter<boolean>();
  //
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private location: Location, private boxownerService: BoxownerService, private ideaneedsService:IdeaneedService, private ideaboxService:IdeaboxService, private userService: GetUserService, public dialogRef: MatDialogRef<ConfirmationDialogBoxComponent>,private ideaService:AddIdeaService,private router:Router,private authservice:AuthService) {

    this.idea=data["idea"];
    this.type=data["type"];
    this.title=data["title"];
    this.user=data["user"];
    this.ideabox=data["ideabox"];
    this.ideaneed=data["ideaneeds"];
    this.boxowner=data["boxOwner"];
    // this.usersToAssign=data["usersToAssign"];
    
    // console.log(this.ideaneed);
    console.log(this.type);
   }

  proceed(){
    let newIdea= Object.assign({}, this.idea);
    console.log(newIdea);
    if (this.type === "new") {
      this.clearNewFormFeilds();
      this.ideaService.addIdea(newIdea);
      this.goBack();
    } 
    if(this.type === "update") {
      this.ideaService.updateIdea(newIdea);
      
    }
    if(this.type === "logout") {
      this.authservice.setLoggedInStatus(false);
      localStorage.removeItem('showheader-footer');
      localStorage.removeItem('userType');
      localStorage.removeItem('current_user');
      
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('isInnovationManager');
      localStorage.removeItem('isReviewer');
      localStorage.removeItem('isUser');

      
      this.router.navigate(['login']);
    }
    if(this.type === "manage_user"){
      this.userService.updateUser(this.user);
    }
    if(this.type === "idea_box"){
      this.ideaboxService.addIdeaBox(this.ideabox,this.boxowner);
      // this.ideaboxService.updateUserForIdeaBox(this.boxowner);
      this.goBack();
    }
    if(this.type === "requirement"){
      let newreq= Object.assign({}, this.ideaneed);
      this.ideaneedsService.addIdeaNeeds(newreq);
      // this.goBack();
    }
    //this.idea.idea_description="";
    if(this.type === "idea_box_access"){
      // let newBoxOwner= Object.assign({}, this.boxowner);
      this.ideaboxService.updateUserForIdeaBox(this.boxowner);
    }

    // if(this.type === "assign_user"){
    //   this.boxownerService.updateUsers(this.usersToAssign);
    // }
    this.dialogRef.close();
  }

  goBack(){
    this.location.back();
  }

  doNotProceed(){
    
    this.dialogRef.close();
  }
  clearNewFormFeilds(){
    // this.idea.idea_description="";
    // this.idea.idea_title="";
    // this.idea.category="";
    // this.idea.tags="";   
  }
  ngOnInit() {
  }

}
