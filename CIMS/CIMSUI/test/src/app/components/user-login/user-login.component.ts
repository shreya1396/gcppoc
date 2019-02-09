import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Authentication/auth.service';
import { error } from '@angular/compiler/src/util';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username:string;
  password:string;
  msg:string;
  dialogConfig = new MatDialogConfig();
  //To store current username locally
  
  constructor(private authservice: AuthService,private router:Router,private dialog: MatDialog,private spinner: NgxSpinnerService) { 
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.authservice.setLoggedInStatus(false);

      localStorage.removeItem('userType');
      localStorage.removeItem('current_user');
      
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('isInnovationManager');
      localStorage.removeItem('isReviewer');
      localStorage.removeItem('isUser');
    //this.authservice.setLoggedInStatus(false);
  }

  
  
  ngOnInit() {

    
    
  }

  submitFunc(event){
    event.preventDefault();
    
    
    console.log(this.username+','+this.password);
    this.authservice.getUserDetails(this.username,this.password).subscribe(user => {
      //console.log(user['type']);
      this.spinner.show();
 
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
      
      if(user.success){
        console.log(user);
        if(user.type === "ADMINISTRATOR"){
          this.authservice.setAdmin(true);
          this.router.navigate(['admin_dashboard']);
        }else{
          if(user.type === "INNOVATION_MANAGER"){
            this.authservice.setInnovationManagaer(true);
            
            this.router.navigate(['innovation']);
          }else{
            if(user.type === "REVIEWER"){
              this.authservice.setReviewer(true);
              this.router.navigate(['reviewer']);
            }else{
              if(user.type === "USER"){
                this.authservice.setUser(true);
                this.router.navigate(['user_dashboard']);
              }else{
                  alert("NOT A VALID USER!!");
              }
            }           
          }
        }
        
        localStorage.setItem('current_user', user.username);
        localStorage.setItem('userType', user.type);
        this.authservice.setLoggedInStatus(true);
      }     
      
    },error => {
      localStorage.removeItem('loggedIn');
      console.log(error['error']);
      this.msg="Invalid Credentials!!";   
       this.dialogConfig.data = this.msg;
       this.dialog.open(DialogBoxComponent,this.dialogConfig);
       this.username="";
       this.password="";
    });
    
    
    
  }

}
