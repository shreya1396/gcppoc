import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Ideaneed } from 'src/app/classes/ideaneed';
import { Ideabox } from 'src/app/classes/ideabox';
import { IdeaneedService } from 'src/app/services/IdeaNeed/ideaneed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaboxService } from 'src/app/services/IdeaBox/ideabox.service';
import { RequirementService } from 'src/app/services/Requirement/requirement.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';

@Component({
  selector: 'app-cims-idea-box-requirement-form-disabled',
  templateUrl: './cims-idea-box-requirement-form-disabled.component.html',
  styleUrls: ['./cims-idea-box-requirement-form-disabled.component.css']
})
export class CimsIdeaBoxRequirementFormDisabledComponent implements OnInit {

  ideaneeds = new Ideaneed(3,'','','');
  idea_type:string;
  ideaboxArray :Array<Ideabox>;
  ideaboxes :Observable<Ideabox>;

  constructor(private ideaneedsService:IdeaneedService,private route : ActivatedRoute,private ideaboxService:IdeaboxService,private ideaboxservice: IdeaboxService,private router:Router,private dialog: MatDialog) {
    
    this.route.params.subscribe( params => {
      
      this.ideaboxservice.isValidType(params['type'])
      this.idea_type=params['type'];
      this.ideaneeds.idea_box=this.idea_type.toUpperCase();
      
    });
    
   }

  submitFunc(event){
    // // console.log(this.ideaneeds);

    //  event.preventDefault();
    // //console.log(this);
    //   let flag=0;
    //   let temp=this.idea_type.toString();
    //   let data=this.ideaneeds;
    //   let service=this.ideaneedsService;
    //   this.ideaboxArray.forEach(function (value){
    //     if(value.type.toUpperCase() == temp.toUpperCase()){
    //       service.addIdeaNeeds(data);
    //       flag=1;
    //       data.requirement="";
    //       data.description="";
    //      data.idea_box=value.type.toUpperCase();
    //     }
    //   });
    //   if(flag==0){

    //     alert("Idea Type does not exist.Please try again");
    //     data.requirement="";
    //       data.description="";
    //      data.idea_box="Go Back and try again".toUpperCase();
    //   }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      title: "Add Requirement?",
      type: "requirement",
      ideaneeds: this.ideaneeds
    } 
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
    }
  ngOnInit() {
    this.ideaboxService.getData().subscribe(data => {
      console.log(data)
      this.ideaboxArray=data;
      });  
  }

}
