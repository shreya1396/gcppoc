import { Component, OnInit, ChangeDetectorRef, ViewChild, Input } from '@angular/core';
import { BoxOwner } from 'src/app/classes/box-owner';
import { BoxownerService } from 'src/app/services/BoxOwner/boxowner.service';
import { MatSort, MatPaginator, MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { Idea } from '../../classes/idea';
import { AddIdeaService } from '../../services/Idea/add-idea.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { CimsAddRevieverDialogboxComponent } from '../cims-add-reviever-dialogbox/cims-add-reviever-dialogbox.component';
import { ViewReviewComponent } from 'src/app/components/view-review/view-review.component';
import { CimsTakeDecisionDialogboxComponent } from '../cims-take-decision-dialogbox/cims-take-decision-dialogbox.component';
import { DecisionService } from 'src/app/services/Decision/decision.service';
import { DecisiontypeService } from 'src/app/services/DecisionType/decisiontype.service';
import { Decision } from 'src/app/classes/decision';


@Component({
  selector: 'app-cims-my-idea-box-creation',
  templateUrl: './cims-my-idea-box-creation.component.html',
  styleUrls: ['./cims-my-idea-box-creation.component.css']
})
export class CimsMyIdeaBoxCreationComponent implements OnInit {

  // boxOwnerArray: Array<BoxOwner>;

  currentUser;
  decisions:Array<Decision>
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ideas: Array<Idea>;
  @Input('idea')idea:Idea;
  
  dataSource;
  displayedColumns = ['title','description','category','Decision','actionsColumn'];
  constructor(private dialog: MatDialog, private getideasService: AddIdeaService, private changeDetectorRefs: ChangeDetectorRef,private decisiontypeservice: DecisiontypeService,private decisionService:DecisionService) {
    this.ideas=[];
    this.currentUser=localStorage.getItem('current_user');

   }

   displayForm(i){
    console.log(i);
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

  takeDecision(idea){
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data={
        id: idea.id,
        submitted_against: idea.submitted_against
      }
      this.dialog.open(CimsTakeDecisionDialogboxComponent, dialogConfig);
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
    new Angular5Csv(this.ideas, 'Ideas Under Me',options);
  }


  ngOnInit() {
    this.getideasService.getIdeasByManager(this.currentUser).subscribe(data => {
      console.log(data)
      this.ideas=data;
      this.decisionService.getData().subscribe(data => {
        this.decisions=data;
        console.log(this.decisions);

        const result = this.ideas.map(val => {
          return Object.assign({}, val, this.decisions.filter(v => v.idea_id === val.id));
        });

        console.log(result);
        
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      })

      
    });
    
   

    
    this.refresh();
  }

  refresh() {
    let cd = this.changeDetectorRefs;
    // // alert("is refresh called");
    // this.getideasService.getIdeasByManager(this.currentUser).subscribe(data => {
    //     this.changeDetectorRefs.detectChanges();
    //     this.ideas=data;
    // });

    this.getideasService.getIdeasByManager(this.currentUser).subscribe(data => {
      console.log(data)
      cd.detectChanges();
      this.ideas=data;
      this.decisionService.getData().subscribe(data => {
        cd.detectChanges();
        this.decisions=data;
        console.log(this.decisions);

        const result = this.ideas.map(val => {
          return Object.assign({}, val, this.decisions.filter(v => v.idea_id === val.id));
        });

        console.log(result);
        
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      })

      
    });
  }

}
