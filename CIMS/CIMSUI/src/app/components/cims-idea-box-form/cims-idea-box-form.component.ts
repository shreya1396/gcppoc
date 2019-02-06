import { BoxOwner } from './../../classes/box-owner';
import { Component, OnInit } from '@angular/core';
import { Ideabox } from 'src/app/classes/ideabox';
import { IdeaboxService } from 'src/app/services/IdeaBox/ideabox.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';

@Component({
  selector: 'app-cims-idea-box-form',
  templateUrl: './cims-idea-box-form.component.html',
  styleUrls: ['./cims-idea-box-form.component.css']
})
export class CimsIdeaBoxFormComponent implements OnInit {

  ideaboxArray: Array<Ideabox>;
  ideabox = new Ideabox('');
  boxowner=  new BoxOwner(1,'','');
  constructor(private ideaboxService:IdeaboxService, private dialog: MatDialog) {
    this.ideaboxArray=[]
   }
    
  submitFunc(){
    this.boxowner.innovation_manager_name = localStorage.getItem('current_user');
    this.boxowner.idea_box = this.ideabox.type;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      title: "Add Idea Box?",
      type: "idea_box",
      ideabox: this.ideabox,
      boxOwner: this.boxowner
    } 
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
    // this.ideaboxService.addIdeaBox(this.ideabox);
    // this.ideabox.type="";
  }


   ngOnInit() {
    this.ideaboxService.getData().subscribe(data => {
      this.ideaboxArray=data;
    });
  
   }

}
