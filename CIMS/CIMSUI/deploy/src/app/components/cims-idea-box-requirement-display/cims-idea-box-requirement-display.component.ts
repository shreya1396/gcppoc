import { IdeaboxService } from './../../services/IdeaBox/ideabox.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Ideaneed } from 'src/app/classes/ideaneed';
import { IdeaneedService } from 'src/app/services/IdeaNeed/ideaneed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cims-idea-box-requirement-display',
  templateUrl: './cims-idea-box-requirement-display.component.html',
  styleUrls: ['./cims-idea-box-requirement-display.component.css']
})
export class CimsIdeaBoxRequirementDisplayComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ideaneedsArray: Array<Ideaneed>;
  ideaneeds:Ideaneed;
  ideaneedsArrayTemp: Array<Ideaneed>;
  idea_type:string;

  
  dataSource;
  displayedColumns = ['idea_box_type','requirement','requirement_description','actionsColumn'];
  constructor(private getideaneeds : IdeaneedService, private route : ActivatedRoute,private ideaboxservice:IdeaboxService,private router: Router,private changeDetectorRefs: ChangeDetectorRef) { 
    this.ideaneedsArray=[];
    this.idea_type="";
    this.route.params.subscribe( params => {
      this.ideaboxservice.isValidType(params['type']);
      this.idea_type=(params['type']);
    });
  }

  // submitFunc(){
  //   console.log("rrrrrrrrr");
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  ngOnInit() {
      this.getideaneeds.getDataByType(this.idea_type).subscribe(data => {
      // console.log(data)
      this.ideaneedsArray=data;
      this.dataSource = new MatTableDataSource(this.ideaneedsArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
  });

  this.refresh();
  } 

  refresh() {
    // alert("is refresh called");
    this.getideaneeds.getDataByType(this.idea_type).subscribe((res) => {  
    // console.log(res);
    this.changeDetectorRefs.detectChanges();
     this.ideaneedsArray=res;
     
      // this.ideaneedsArray=res;

    });
  } 
}


