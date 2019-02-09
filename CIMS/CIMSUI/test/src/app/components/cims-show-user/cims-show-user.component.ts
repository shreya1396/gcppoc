import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../classes/user';
import { GetUserService } from '../../services/User/get-user.service';
import { Router } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-cims-show-user',
  templateUrl: './cims-show-user.component.html',
  styleUrls: ['./cims-show-user.component.css']
})
export class CimsShowUserComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  userArray: Array<User>;
  user: User;
  renderedData:any;

  dataSource;
  displayedColumns=['user_name','role','actionsColumn'];
  constructor(private getUserService: GetUserService,private router: Router,public dialog: MatDialog) { 
    this.userArray=[];
  }

  // editThisUser(id): void{
  //   this.router.navigate(['/manage_access_form',id]);
  // }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toCSV(){
    var options = { 
      showLabels: true, 
      headers: ["ID", "NAME","ROLE", "EMAIL-ID"]
    };
    // console.log("toCSV clicked");
    // new Angular5Csv(this.renderedData, 'Users');
    new Angular5Csv(this.userArray, 'Users', options);

  }
  
  ngOnInit() {
    this.getUserService.getUser().subscribe(data => {
      // console.log(data)
      this.userArray=data;
      this.dataSource = new MatTableDataSource(this.userArray);
      // this.dataSource.connect().subscribe(d=>this.renderedData=d);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

}

