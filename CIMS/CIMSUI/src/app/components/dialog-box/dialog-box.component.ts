import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  modalMessage:string
  constructor(@Inject(MAT_DIALOG_DATA) public data:string,public dialogRef: MatDialogRef<DialogBoxComponent>) {
    this.modalMessage=data;
    console.log(data);
   }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
