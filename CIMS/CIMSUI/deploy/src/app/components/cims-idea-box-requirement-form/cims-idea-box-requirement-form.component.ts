import { Component, OnInit } from '@angular/core';
import { Ideabox } from 'src/app/classes/ideabox';
import { Ideaneed } from 'src/app/classes/ideaneed';
import { IdeaboxService } from 'src/app/services/IdeaBox/ideabox.service';
import { IdeaneedService } from 'src/app/services/IdeaNeed/ideaneed.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';

@Component({
  selector: 'app-cims-idea-box-requirement-form',
  templateUrl: './cims-idea-box-requirement-form.component.html',
  styleUrls: ['./cims-idea-box-requirement-form.component.css']
})
export class CimsIdeaBoxRequirementFormComponent implements OnInit {

  ideaboxArray: Array<Ideabox>;
  ideaneeds = new Ideaneed(3,'','','');

  constructor(private ideaboxService:IdeaboxService,private ideaneedsService:IdeaneedService, private dialog: MatDialog) { }

  submitFunc(){
    // console.log(this.ideaneeds);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      title: "Add Requirement?",
      type: "requirement",
      ideaneeds: this.ideaneeds
    } 
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);

    // this.ideaneedsService.addIdeaNeeds(this.ideaneeds);
    // this.ideaneeds.requirement="";
    // this.ideaneeds.description="";
    // this.ideaneeds.idea_box="";
}
  ngOnInit() {
    this.ideaboxService.getData().subscribe(data=>{
      this.ideaboxArray=data;
      // console.log("sssssssss");
      // console.log(this.ideaboxArray);
    });
}
}