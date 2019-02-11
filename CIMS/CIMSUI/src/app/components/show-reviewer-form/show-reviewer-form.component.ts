
import { Idea } from 'src/app/classes/idea';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Tag } from 'src/app/classes/tag';
import { GettagsService } from 'src/app/services/Tags/gettags.service';
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';
import { StatusService } from 'src/app/services/Reviewer_Status/status.service';
import { Reviewerstatus } from 'src/app/classes/reviewerstatus';
@Component({
  selector: 'app-show-reviewer-form',
  templateUrl: './show-reviewer-form.component.html',
  styleUrls: ['./show-reviewer-form.component.css']
})
export class ShowReviewerFormComponent implements OnInit {

  idea = new Idea('','','','','','','','','');
  tags:Array<Tag>;
  review_status:Array<Reviewerstatus>;

  constructor(private route: ActivatedRoute, private tagService:GettagsService,private statusserivce: StatusService,private ideaService:AddIdeaService,private dialog: MatDialog) { 
    
  }

  // submitFunc(){
  //     this.idea.reviewer_name=localStorage.getItem('current_user');
  //     const dialogConfig = new MatDialogConfig();
  //     dialogConfig.disableClose = true;
  //     dialogConfig.autoFocus = true;
  //     dialogConfig.data={
  //       idea: this.idea,
  //       type: "update",
  //       title: "Confirm the changes?"
  //     }
  //     this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);

  //   //this.ideaService.updateIdea(this.idea);
  // }

  ngOnInit() {

    // this.route.queryParams.subscribe(params => {
    //   this.idea=JSON.parse(params['idea']);
    //   //this.idea.id=params['row["id"]'];
    //   console.log(this.idea);
    // });

    this.idea=this.ideaService.getIdeaForReview();

    this.tagService.getData().subscribe(data => {
      //console.log(data)
      this.tags=data;
      
    });

    this.statusserivce.getData().subscribe(data => {
      this.review_status=data;
    });
  }

}
