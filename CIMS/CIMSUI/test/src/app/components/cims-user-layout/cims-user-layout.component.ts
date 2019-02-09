import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cims-user-layout',
  templateUrl: './cims-user-layout.component.html',
  styleUrls: ['./cims-user-layout.component.css']
})
export class CimsUserLayoutComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    
  }

}
