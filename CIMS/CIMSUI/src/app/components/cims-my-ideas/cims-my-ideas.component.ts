import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { Idea } from '../../classes/idea';
import { AddIdeaService } from '../../services/Idea/add-idea.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ViewReviewComponent } from 'src/app/components/view-review/view-review.component';


@Component({
  selector: 'app-cims-my-ideas',
  templateUrl: './cims-my-ideas.component.html',
  styleUrls: ['./cims-my-ideas.component.css']
})
export class CimsMyIdeasComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ideas: Array<Idea>;

  currentUser;
  
  dataSource;
  displayedColumns = ['title','description','category','actionsColumn'];
  constructor(private getideasService: AddIdeaService, private dialog: MatDialog) {
    this.currentUser= localStorage.getItem('current_user');
    // alert(this.currentUser);
   }

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
    new Angular5Csv(this.ideas, 'My Ideas',options);
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
  
  // myIdeas(){
  //   this.getideasService.getData().subscribe(data => {
  //     // console.log(this.currentUser+" "+data);

  //     this.ideas=data.filter(data => 
  //       data.idea_owner.toString() == this.currentUser
  //     );
  //     this.dataSource = new MatTableDataSource(this.ideas);
  //     this.dataSource.sort = this.sort;
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }

  // mySelectedIdeas(){
  //   this.getideasService.getData().subscribe(data => {
  //     // console.log(this.currentUser+" "+data);

  //     this.ideas=data.filter(data => 
  //       data.idea_owner.toString() == this.currentUser && data.review_status.toString() == 'Done'
  //     );
  //     this.dataSource = new MatTableDataSource(this.ideas);
  //   });
  // }

  // myUnreviewedIdeas(){
  //   this.getideasService.getData().subscribe(data => {
  //     // console.log(this.currentUser+" "+data);

  //     this.ideas=data.filter(data => 
  //       data.idea_owner.toString() == this.currentUser && data.review_status.toString() == 'Pending'
  //     );
  //     this.dataSource = new MatTableDataSource(this.ideas);
  //   });
  // }
  ngOnInit() {
    this.getideasService.getData().subscribe(data => {
      console.log(data)
      this.ideas=data.filter(data => 
        data.idea_owner.toString() == this.currentUser
      );
      this.dataSource = new MatTableDataSource(this.ideas);
      // this.myIdeas();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });


  }
}
