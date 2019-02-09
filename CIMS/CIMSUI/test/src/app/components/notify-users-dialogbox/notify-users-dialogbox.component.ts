import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatSort, MatPaginator, MatTableDataSource, MatDialogRef } from '@angular/material';
import { User } from 'src/app/classes/user';
import { GetUserService } from 'src/app/services/User/get-user.service';
import { SelectionModel } from '@angular/cdk/collections';
import { NotifyUserService } from 'src/app/services/User/notify-user.service';

@Component({
  selector: 'app-notify-users-dialogbox',
  templateUrl: './notify-users-dialogbox.component.html',
  styleUrls: ['./notify-users-dialogbox.component.css']
})
export class NotifyUsersDialogboxComponent implements OnInit {

  id:number
  owner:string
  users:string;

  userArray: Array<User>;
  usersToAssign:Array<User>;
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection: SelectionModel<User>
  displayedColumns=['select','user_name','role'];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<NotifyUsersDialogboxComponent>,private getUserService: GetUserService,private notifyuser:NotifyUserService) { 
    this.id=data['id'];
    this.owner=data['owner'];
    console.log(this.id+" " + this.owner)
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<User>(allowMultiSelect, initialSelection);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  notifyUsers(){
    let id=this.id;
    this.usersToAssign=this.selection.selected;
    let str="";
    this.usersToAssign.forEach(function(value){
        str+=value.name+",";
    })
    this.users=str.substring(0,str.length-1);
    console.log(this.users);
    this.notifyuser.notify(this.id,this.users,this.owner);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  ngOnInit() {

    this.getUserService.getUser().subscribe(data => {
       console.log(data)
      // this.userArray=data;
      this.userArray=data;
    
        this.dataSource = new MatTableDataSource(this.userArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    });

  }
}
