import { Component, OnInit } from '@angular/core';
import { Ideabox } from 'src/app/classes/ideabox';
import { Ideaneed } from 'src/app/classes/ideaneed';
import { IdeaboxService } from 'src/app/services/IdeaBox/ideabox.service';
import { IdeaneedService } from 'src/app/services/IdeaNeed/ideaneed.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';
import { User } from 'src/app/classes/user';
import { GetUserService } from '../../services/User/get-user.service';
import { BoxOwner } from '../../classes/box-owner';

@Component({
  selector: 'app-cims-manage-ideabox-access-form',
  templateUrl: './cims-manage-ideabox-access-form.component.html',
  styleUrls: ['./cims-manage-ideabox-access-form.component.css']
})
export class CimsManageIdeaboxAccessFormComponent implements OnInit {

  ideaboxArray: Array<Ideabox>;
  userArray: Array<User>;
  boxOwner= new BoxOwner(1,'','');
  
  constructor(private userService: GetUserService, private ideaboxService:IdeaboxService,private ideaneedsService:IdeaneedService, private dialog: MatDialog) { }

  submitFunc(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      title: "Allocate Idea Box to User?",
      type: "idea_box_access",
      boxOwner: this.boxOwner
    } 
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
    // console.log("manage ideabox access form submitted");
  }
  ngOnInit() {
    this.ideaboxService.getData().subscribe(data=>{
      this.ideaboxArray=data;
    });
    this.userService.getUser().subscribe(data=>{
      this.userArray=data;
    })
  }
}
