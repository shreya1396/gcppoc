import { ReviewerService } from './../../services/Reviewer/reviewer.service';
import { Reviewer } from './../../classes/reviewer';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DatePipe } from '@angular/common';
import { StatusService } from 'src/app/services/Reviewer_Status/status.service';
import { Reviewerstatus } from 'src/app/classes/reviewerstatus';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id:number;
  reviewer_name:string;
  r:Reviewer = new Reviewer(1,this.reviewer_name,this.id,'','','');
  review_status:Array<Reviewerstatus>;
  
  dateStr:string;
  date:Date;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<AddReviewComponent>,private datePipe: DatePipe, private statusserivce: StatusService,private reviewservice: ReviewerService) { 
    this.id=data['id'];

    this.reviewer_name=localStorage.getItem('current_user');
    this.date= new Date();
    this.dateStr=this.transformDate(this.date);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  transformDate(date) {
    return this.datePipe.transform(this.date, 'yyyy-MM-dd HH:mm:ss'); //whatever format you need. 
  }

  submitFunc(){
    this.r.reviewer=this.reviewer_name;
    this.r.idea_id=this.id;
    this.r.review_date=this.dateStr;

    this.reviewservice.updateData(this.r);
  }


  ngOnInit() {

    this.statusserivce.getData().subscribe(data => {
      this.review_status=data;
    });
  }

}
