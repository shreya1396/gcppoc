import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cims-back-button',
  templateUrl: './cims-back-button.component.html',
  styleUrls: ['./cims-back-button.component.css']
})
export class CimsBackButtonComponent implements OnInit {

  constructor(private location: Location,private router: Router) { }
  urls= ['innovation','admin_dashboard','user_dashboard','reviewer']
  goBack(){
    console.log(this.router.url+" is urllllllllllllllllllll");
    
    if(this.router.url == '/innovation/ideaboxpage'){
      this.router.navigate(['innovation']);
    }else{
      if(this.router.url == '/admin_dashboard/ideaboxpage'){
        this.router.navigate(['admin_dashboard']);
      }else{
        // window.history.back();
        this.location.back();
      }
    }
    
    
     

  }
  ngOnInit() {
  }

}
