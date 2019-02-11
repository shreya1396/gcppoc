import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cims-admin-layout',
  templateUrl: './cims-admin-layout.component.html',
  styleUrls: ['./cims-admin-layout.component.css']
})
export class CimsAdminLayoutComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
  }

}
