import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Idea } from 'src/app/classes/idea';
import { AddIdeaService } from 'src/app/services/Idea/add-idea.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cims-user-dashboard',
  templateUrl: './cims-user-dashboard.component.html',
  styleUrls: ['./cims-user-dashboard.component.css']
})
export class CimsUserDashboardComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ideas: Array<Idea>;
  idea:Idea;

  dataSource;
  displayedColumns = ['title','description','category','reviewer_name','review_status','review_comment'];
  constructor(private getideasService: AddIdeaService,private router: Router) { 
    this.ideas=[];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
