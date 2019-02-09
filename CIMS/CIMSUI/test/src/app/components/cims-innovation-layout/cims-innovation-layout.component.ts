import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cims-innovation-layout',
  templateUrl: './cims-innovation-layout.component.html',
  styleUrls: ['./cims-innovation-layout.component.css']
})
export class CimsInnovationLayoutComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService) { }

  ngOnInit() {
  }

}
