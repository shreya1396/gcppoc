import { Component, OnInit, Inject, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../classes/user';
import { ViewChild } from '@angular/core';
import { SelectionModel} from '@angular/cdk/collections';
import { GetUserService } from '../../services/User/get-user.service';
import { AddIdeaService } from '../../services/Idea/add-idea.service';
import { ReviewerService } from '../../services/Reviewer/reviewer.service';
import { Idea } from 'src/app/classes/idea';
import { Reviewer } from 'src/app/classes/reviewer';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ViewRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cims-add-reviever-dialogbox',
  templateUrl: './cims-add-reviever-dialogbox.component.html',
  styleUrls: ['./cims-add-reviever-dialogbox.component.css']
})
export class CimsAddRevieverDialogboxComponent implements OnInit,OnDestroy {

  id:number;
  title:string=""; 

  uA: Array<User>;
  idea: Idea;
  reviewerArray: Array<Reviewer>=[];
  userArray: Array<User>;
  usersToAssign:Array<User>;


  dataSource;
  dataSource1;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  selection: SelectionModel<User>
  displayedColumns=['idea','reviewer'];
  displayedColumns1=['select','user_name','role'];

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private router: Router, private spinner: NgxSpinnerService,public dialogRef: MatDialogRef<CimsAddRevieverDialogboxComponent>,private ideaService: AddIdeaService, private reviewerService: ReviewerService, private userService: GetUserService,  private changeDetectorRefs: ChangeDetectorRef) { 
    this.id=data['id'];
    this.title=data['title'];
    console.log(this.id+" " + this.title)
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<User>(allowMultiSelect, initialSelection);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  } 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource1.data.forEach(row => this.selection.select(row));
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addReviewer(){
    let id=this.id;
    // let url=this.router.url;
    // console.log(this.dataSource)
    // console.log(this.dataSource1)
    console.log("addReviewer()");
    this.usersToAssign=this.selection.selected;
    let usersToAssign= new Array<Reviewer>();
    this.usersToAssign.forEach(function(value){
            let bo = new Reviewer(1,value['name'],id,"","",null);
            usersToAssign.push(bo);
        });
    console.log(this.usersToAssign);
    this.reviewerService.addReviewer(usersToAssign);

    var a = function(param,n){
      // console.log(url);
      param.refresh();
      if(n!=0){
        setTimeout(()=>{
          a(param,--n); // this will be called for 3 min after that stop and if user again clicks "assign user" it will continue for next 3 min 
        },2000) //90*2s=180s=3min
      }
      
    }

    // this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      a(this,90);
      // this.spinner.hide();
      // this.refresh();
  }, 2000);
    
  }

  ngOnInit() {

    // this.ideaService.getIdeasById(this.id).subscribe(data=>{
    //   this.idea=data;
    //   console.log(data.idea_title);
    // });

    this.userService.getUser().subscribe(data=>{
      
      this.userArray=data.filter(data => 
        data.role == 'REVIEWER'
      );
      // console.log("rrrrrrr:"+this.userArray);

      this.reviewerService.getDataByIdeaId(this.id).subscribe(data=>{
        this.reviewerArray=data;
        // console.log(data);
        
        let reviewerData=this.reviewerArray;
        
      this.uA=this.userArray.filter(function(data1){
          return !reviewerData.some(function(data2) {
            return data1.name == data2.reviewer;
        });
      });
      this.dataSource1 = new MatTableDataSource(this.uA);
      this.dataSource1.sort = this.sort;
      this.dataSource1.paginator = this.paginator;

      
        this.dataSource = new MatTableDataSource(this.reviewerArray);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
  
       
  
      });
      
      


  });
 
 

    
}//onNgInit

// someFunction(){
//   if(!this.changeDetectorRefs['destroyed']){
//     this.changeDetectorRefs.detectChanges();
//   }
// }

ngOnDestroy(){
//  alert("ngondestroy");
  // this.changeDetectorRefs.detach();
}

refresh() {
  // alert("is refresh called");
  let cD=this.changeDetectorRefs
  this.userService.getUser().subscribe(data=>{
    // if( cD !== null &&
    //   cD !== undefined &&
    //   ! (cD as ViewRef).destroyed){
    if(!cD['destroyed']){
    cD.detectChanges();
    }
    this.userArray=data.filter(data => 
      data.role == 'REVIEWER'
    );
    // console.log("rrrrrrr:"+this.userArray);

    this.reviewerService.getDataByIdeaId(this.id).subscribe(data=>{
      // cD.detectChanges();
      // if( cD !== null &&
      //   cD !== undefined &&
      //   ! (cD as ViewRef).destroyed){
      if(!cD['destroyed']){
        cD.detectChanges();
        }
      this.reviewerArray=data;
      // console.log(data);
      
      let reviewerData=this.reviewerArray;
      
    this.uA=this.userArray.filter(function(data1){
        return !reviewerData.some(function(data2) {
          return data1.name == data2.reviewer;
      });
    });
    this.dataSource1 = new MatTableDataSource(this.uA);
    this.dataSource1.sort = this.sort;
    this.dataSource1.paginator = this.paginator;

    
      this.dataSource = new MatTableDataSource(this.reviewerArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

     

    });
   
    
    


});
}
}
