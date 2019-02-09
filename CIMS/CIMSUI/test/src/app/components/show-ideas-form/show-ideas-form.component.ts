import { NotifyUsersDialogboxComponent } from './../notify-users-dialogbox/notify-users-dialogbox.component';
import { Router, NavigationExtras } from '@angular/router';

import { Idea } from './../../classes/idea';
import { Component, OnInit, ViewChild, Pipe, PipeTransform, Input } from '@angular/core';

import { MatSort, MatSortable, MatTableDataSource, MatPaginator, MatFormField, MatInput, MatDialogConfig, MatDialog } from '@angular/material'
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';
import { FilterCatPipe } from '../../pipes/filter-cat.pipe';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-show-ideas-form',
  templateUrl: './show-ideas-form.component.html',
  styleUrls: ['./show-ideas-form.component.css'],
})
export class ShowIdeasFormComponent implements OnInit {

  currentUser=localStorage.getItem('current_user');
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ideas: Array<Idea>;
  @Input('idea')idea:Idea;

  dataSource;
  // displayedColumns = ['title','description','category','reviewer_name','review_status','review_comment','actionsColumn'];
  displayedColumns = ['title','description','category','actionsColumn'];
  constructor(private getideasService: AddIdeaService,private router: Router,private dialog: MatDialog) { 
    this.ideas=[];
    localStorage.removeItem('current_idea');
  }

  notify(id,owner){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      id: id,
      owner: owner
    }
    this.dialog.open(NotifyUsersDialogboxComponent, dialogConfig);
  }

  onRowClicked(row){
    // console.log(" Row Clicked:",row);
    if(localStorage.getItem('userType') !== 'USER'){
     
      localStorage.setItem('current_idea',JSON.stringify(row));
      this.idea=row;
      this.getideasService.setIdeaForReview(this.idea);
      if(this.router.url == '/innovation/showideas'){
        this.router.navigate(['innovation/review']);
      }else{
        if(this.router.url == '/admin_dashboard/showideas'){
          this.router.navigate(['admin_dashboard/review']);
        }else{
          // window.history.back();
          if(this.router.url == '/reviewer/showideas'){
            this.router.navigate(['reviewer/review']);
          }
        }
      }
    }
    
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
    // let ideasTemp: Array<Idea>=[];
    
    // this.ideas.forEach(function(value){
    //   let ideaTemp = new Idea(1,"","","","","","","");
    //   ideaTemp.id=value.id;
    //   ideaTemp.idea_title=value.idea_title;
    //   ideaTemp.idea_description=value.idea_description;
    //   ideaTemp.idea_owner=value.idea_owner;
    //   ideaTemp.tags=value.tags;
    //   ideaTemp.submission_date=value.submission_date;
    //   ideaTemp.update_date=value.update_date;
    //   ideaTemp.category=value.category;
    //   ideaTemp.submitted_against=;
    //   console.log(ideaTemp);
    //   ideasTemp.push(ideaTemp);
    // });
    // console.log(ideasTemp);
    new Angular5Csv(this.ideas, 'Ideas',options);
  }

  ngOnInit() {
    this.getideasService.getData().subscribe(data => {
      console.log(data)
      this.ideas=data;
      this.dataSource = new MatTableDataSource(this.ideas);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
