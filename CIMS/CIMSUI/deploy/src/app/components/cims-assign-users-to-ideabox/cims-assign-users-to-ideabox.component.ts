import { forEach } from '@angular/router/src/utils/collection';
import { filter } from 'rxjs/operators';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatDialog, MatTableDataSource, MatCheckbox, MatDialogConfig } from '@angular/material';
import { User } from 'src/app/classes/user';
import { GetUserService } from 'src/app/services/User/get-user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { SelectionModel } from '@angular/cdk/collections'
import { BoxownerService } from 'src/app/services/BoxOwner/boxowner.service';
import { BoxOwner } from 'src/app/classes/box-owner';
import { IdeaboxService } from 'src/app/services/IdeaBox/ideabox.service';
import { ConfirmationDialogBoxComponent } from '../confirmation-dialog-box/confirmation-dialog-box.component';
@Component({
  selector: 'app-cims-assign-users-to-ideabox',
  templateUrl: './cims-assign-users-to-ideabox.component.html',
  styleUrls: ['./cims-assign-users-to-ideabox.component.css']
})
export class CimsAssignUsersToIdeaboxComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  selection: SelectionModel<User>
  userArray: Array<User>;
  uA: Array<User>;

  user: User;
  renderedData:any;

  usersToAssign:Array<User>;
  boxownerArray: Array<BoxOwner>;
  idea_type:string;

  dataSource1;
  displayedColumns1 = ['idea_box','innovation_manager_name'];

  dataSource;
  displayedColumns=['select','user_name','role'];
  constructor(private getUserService: GetUserService,private router: Router,public dialog: MatDialog, private boxownerService: BoxownerService, private route : ActivatedRoute,private ideaboxservice: IdeaboxService) {
    this.route.params.subscribe( params => {
      
      this.ideaboxservice.isValidType(params['type'])
      this.idea_type=params['type'];
    }); 
    this.userArray=[];
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<User>(allowMultiSelect, initialSelection);
  }

  // editThisUser(id): void{
  //   this.router.navigate(['/manage_access_form',id]);
  // }

  
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

  // toCSV(){
  //   var options = { 
  //     showLabels: true, 
  //     headers: ["Id", "Name","Role", "Email-id"]
  //   };
  //   // console.log("toCSV clicked");
  //   // new Angular5Csv(this.renderedData, 'Users');
  //   new Angular5Csv(this.userArray, 'Users', options);

  // }

  assignUsers(){
      //console.log(this.selection.selected);

      
      
      let type=this.idea_type;
      this.usersToAssign=this.selection.selected;
      let usersToAssign= new Array<BoxOwner>();
      this.usersToAssign.forEach(function(value){
          let bo = new BoxOwner(1,value['name'],type)
          usersToAssign.push(bo);
      })
      console.log(usersToAssign);



      // const dialogConfig = new MatDialogConfig();
      //   dialogConfig.disableClose = true;
      //   dialogConfig.autoFocus = true;
      //   dialogConfig.data={
      //     title: "Assign User To Idea Box?",
      //     type: "assign_user",
      //     userToAssign: usersToAssign
      //   } 
      //   this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);



      this.boxownerService.updateUsers(usersToAssign);
  }
  
  ngOnInit() {
    
    this.getUserService.getUser().subscribe(data => {
      // console.log(data)
      // this.userArray=data;
      this.userArray=data.filter(data => 
        data.role.toString() == 'INNOVATION_MANAGER'
      );
      // console.log(this.userArray)

      this.boxownerService.getDataByType(this.idea_type).subscribe(data=>{
        this.boxownerArray=data;
        this.dataSource1 = new MatTableDataSource(this.boxownerArray);
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;

        // console.log(this.dataSource);
        let boxdata=this.boxownerArray;
        
        this.uA=this.userArray.filter(function(data1){
          return !boxdata.some(function(data2) {
            return data1.name == data2.innovation_manager_name;
        });
          // data.name !== boxdata['innovation_manager_name']

        } //!this.boxownerArray['innovation_manager_name'].includes(data.name)



        
          // {

        //     boxdata.forEach(value => {
        //     if(data.name === value.innovation_manager_name){
        //       return true;
        //     }
        //     })
        // }
        );
        console.log(this.uA)
        this.dataSource = new MatTableDataSource(this.uA);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })


      


      // this.dataSource = new MatTableDataSource(this.userArray);
      // this.dataSource.connect().subscribe(d=>this.renderedData=d);
      
      // this.dataSource.sort = this.sort;
      // this.dataSource.paginator = this.paginator;

    });
    
    
  }

}
