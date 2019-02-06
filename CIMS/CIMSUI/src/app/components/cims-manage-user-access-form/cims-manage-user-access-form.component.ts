import { Component, OnInit } from '@angular/core';
import { Role } from '../../classes/role';
import { User } from '../../classes/user';
import { RoleService } from '../../services/Role/role.service';
import { GetUserService } from '../../services/User/get-user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';


@Component({
  selector: 'app-cims-manage-user-access-form',
  templateUrl: './cims-manage-user-access-form.component.html',
  styleUrls: ['./cims-manage-user-access-form.component.css']
})
export class CimsManageUserAccessFormComponent implements OnInit {

  roleArray: Array<Role>;
  user= new User(3,'','','');
  user_id: number;

  submitFunc(){
    // console.log("form submitted");
    // console.log(this.user);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      title: "Confirm the changes?",
      type: "manage_user",
      user: this.user
    } 
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
  }
 
  constructor(private location: Location,private roleService:RoleService,private dialog: MatDialog, private userService: GetUserService, private route : ActivatedRoute) {
    this.route.params.subscribe( params => this.user_id=(params['id']));
    // console.log(this.user_id);
   }

  ngOnInit() {
    this.roleService.getData().subscribe(data=>{
      this.roleArray=data;
      // console.log(this.roleArray);
    })
    // console.log(this.user_id);

    this.userService.getUserById(this.user_id).subscribe(data=>{
      this.user=data;
      // console.log(data)
    })

  }

}
