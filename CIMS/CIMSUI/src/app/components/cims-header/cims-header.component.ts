import { AuthService } from './../../services/Authentication/auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogBoxComponent } from 'src/app/components/confirmation-dialog-box/confirmation-dialog-box.component';
import {TooltipPosition} from '@angular/material';

import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { SlideInOutAnimation } from 'src/assets/animations/animations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cims-header',
  templateUrl: './cims-header.component.html',
  styleUrls: ['./cims-header.component.css'],
  animations: [SlideInOutAnimation]
})
export class CIMSHeaderComponent implements OnInit {
  name: string;
  role:string;
  animationState = 'out';

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[4]);
  
  constructor(private router: Router, private authservice: AuthService, private dialog: MatDialog,private changeDetectorRefs: ChangeDetectorRef) { 

  }

  logout(){
    console.log("LOGOUT");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data={
      title: "Do you want to Exit?",
      type: "logout",
    } 
    this.dialog.open(ConfirmationDialogBoxComponent, dialogConfig);
    
  }

  goToHome(){
    if(localStorage.getItem('userType') === 'ADMINISTRATOR' ){
      this.router.navigate(['admin_dashboard']);
    }
    if(localStorage.getItem('userType') === 'INNOVATION_MANAGER' ){
      this.router.navigate(['innovation']);
    }
    if(localStorage.getItem('userType') === 'REVIEWER' ){
      this.router.navigate(['reviewer']);
    }
    if(localStorage.getItem('userType') === 'USER' ){
      this.router.navigate(['user_dashboard']);
    }
  }

  toggleShowDiv(divName: string) {
    // console.log("inside")
    event.preventDefault();
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }

  ngOnInit() { 
    this.name=localStorage.getItem('current_user');
    this.role=localStorage.getItem('userType');
    this.refresh();
  }

  refresh(){
    let cd=this.changeDetectorRefs;

    cd.detectChanges();
    this.name=localStorage.getItem('current_user');
    this.role=localStorage.getItem('userType');
  }
}