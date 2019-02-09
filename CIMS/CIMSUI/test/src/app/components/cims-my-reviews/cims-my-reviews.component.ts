import { AddReviewComponent } from './../add-review/add-review.component';
import { Reviewer } from './../../classes/reviewer';
import { ReviewerService } from './../../services/Reviewer/reviewer.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { MatTableDataSource, MatSort, MatPaginator, MatDialogConfig, MatDialog } from '@angular/material';
import { Idea } from 'src/app/classes/idea';
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';
import { Router } from '@angular/router';
import { ViewReviewComponent } from 'src/app/components/view-review/view-review.component';

@Component({
  selector: 'app-cims-my-reviews',
  templateUrl: './cims-my-reviews.component.html',
  styleUrls: ['./cims-my-reviews.component.css']
})
export class CimsMyReviewsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ideas: Array<Idea>;
  reviewers:Array<Reviewer>
  @Input('idea')idea:Idea;

  dataSource;
  displayedColumns = ['title','description','category','actionsColumn'];
  constructor(private getideasService: AddIdeaService,private router: Router,private reviewservice: ReviewerService,private dialog: MatDialog) { 
    this.ideas=[];
    localStorage.removeItem('current_idea');
  }

  // onRowClicked(row){
  //   // console.log(" Row Clicked:",row);
  //   if(localStorage.getItem('userType') !== 'USER'){
     
  //     localStorage.setItem('current_idea',JSON.stringify(row));
  //     this.idea=row;
  //     this.getideasService.setIdeaForReview(this.idea);
  //     if(this.router.url == '/innovation/showideas'){
  //       this.router.navigate(['innovation/review']);
  //     }else{
  //       if(this.router.url == '/admin_dashboard/showideas'){
  //         this.router.navigate(['admin_dashboard/review']);
  //       }else{
  //         // window.history.back();
  //         if(this.router.url == '/reviewer/showideas' || this.router.url == '/reviewer/my_reviews'){
  //           this.router.navigate(['reviewer/review']);
  //         }
  //       }
  //     }
  //   }
    
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toCSV(){
    var options = { 
      showLabels: true, 
      headers: ["ID", "IDEA TITLE","IDEA DESCRIPTION", 
              "IDEA OWNER","TAGS","SUBMISSION DATE", "UPDATED DATE", "IDEA BOX TYPE","REQUIREMENT NUMBER"
              ]
    };
    console.log("toCSV clicked");
    // console.log(this.dataSource.length);
    new Angular5Csv(this.ideas, 'Ideas To Be Reviewed',options);
  }

  addReview(idea){
      console.log(idea)
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={
        id: idea.id
      }
      this.dialog.open(AddReviewComponent, dialogConfig);
  }

  viewReviews(idea){
    //console.log(idea)
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={
        id: idea.id
      }
      this.dialog.open(ViewReviewComponent, dialogConfig);
  }

  ngOnInit() {
    this.getideasService.getData().subscribe(data => {
      console.log(data)
      this.ideas=data;
      this.reviewservice.getData().subscribe(data => {
          this.reviewers=data;
          this.reviewers = this.reviewers.filter(data => data.reviewer.includes(localStorage.getItem('current_user')));
          console.log(this.reviewers)
          let rew_data=this.reviewers;
          this.ideas=this.ideas.filter(function(data1){
            return rew_data.some(function(data2) {
              return data1.id == data2.idea_id;
          });
            // data.name !== boxdata['innovation_manager_name']
  
          })
          
          this.dataSource = new MatTableDataSource(this.ideas);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
      })
      // this.ideas = this.ideas.filter(data => data.reviewer_name.includes(localStorage.getItem('current_user')));
      
    });
  }

}
