import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Reviewer } from 'src/app/classes/reviewer';
import { Reviewerstatus } from 'src/app/classes/reviewerstatus';
import { MAT_DIALOG_DATA, MatDialogRef, MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AddReviewComponent } from 'src/app/components/add-review/add-review.component';
import { DatePipe } from '@angular/common';
import { StatusService } from 'src/app/services/Reviewer_Status/status.service';
import { ReviewerService } from 'src/app/services/Reviewer/reviewer.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  id:number;
  reviewer_name:string;
  reviewers:Array<Reviewer>
  r:Reviewer
  review_status:Array<Reviewerstatus>;
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['reviewer_name','review_status','review_comment'];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<AddReviewComponent>,private datePipe: DatePipe, private statusserivce: StatusService,private reviewservice: ReviewerService) { 
    this.id=data['id'];
  }

  closeDialog(){
    this.dialogRef.close();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() 
  {

    this.reviewservice.getData().subscribe(data => {
      this.reviewers=data;
      this.reviewers = this.reviewers.filter(data => data.idea_id==this.id);
     
      this.dataSource = new MatTableDataSource(this.reviewers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  })
 }

}
