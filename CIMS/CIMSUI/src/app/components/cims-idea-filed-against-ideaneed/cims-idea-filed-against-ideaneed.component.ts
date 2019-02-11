import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idea } from '../../classes/idea';
import { AddIdeaService } from '../../services/Idea/add-idea.service';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { CimsAddRevieverDialogboxComponent } from '../cims-add-reviever-dialogbox/cims-add-reviever-dialogbox.component';
import { ViewReviewComponent } from '../view-review/view-review.component';

@Component({
  selector: 'app-cims-idea-filed-against-ideaneed',
  templateUrl: './cims-idea-filed-against-ideaneed.component.html',
  styleUrls: ['./cims-idea-filed-against-ideaneed.component.css']
})
export class CimsIdeaFiledAgainstIdeaneedComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  idea_need_id: number;
  ideaArray: Array<Idea>;
  // idea: Idea;
 
  dataSource;
  displayedColumns;
  displayedColumns_admin = ['title','description','category'];
  displayedColumns_innovation = ['title','description','category','actionsColumn']; 
  constructor(private dialog: MatDialog, private route: ActivatedRoute, private ideaService: AddIdeaService,private router: Router) { 
    this.route.params.subscribe( params => this.idea_need_id=(params['idea_need_id']));
    if(localStorage.getItem('userType') == 'INNOVATION_MANAGER'){
      this.displayedColumns=this.displayedColumns_innovation
      }else{
      this.displayedColumns=this.displayedColumns_admin;
      } 
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  ngOnInit() {
    this.ideaService.getIdeaByNeed(this.idea_need_id).subscribe(data=>{
      this.ideaArray=data;
      // console.log(data);
      this.dataSource = new MatTableDataSource(this.ideaArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  addReviewer(idea){
    console.log(idea.id+" "+idea.idea_title);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      id: idea.id,
      title: idea.idea_title
    }
    this.dialog.open(CimsAddRevieverDialogboxComponent, dialogConfig);
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


}
