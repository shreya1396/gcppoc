import { DecisionType } from './../../classes/decision-type';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Decision } from 'src/app/classes/decision';
import { DecisiontypeService } from 'src/app/services/DecisionType/decisiontype.service';
import { DecisionService } from 'src/app/services/Decision/decision.service';

@Component({
  selector: 'app-cims-take-decision-dialogbox',
  templateUrl: './cims-take-decision-dialogbox.component.html',
  styleUrls: ['./cims-take-decision-dialogbox.component.css']
})
export class CimsTakeDecisionDialogboxComponent implements OnInit {

  decision:Decision= new Decision(1,1,'','',1);
  decisions:Array<DecisionType>


  constructor(@Inject(MAT_DIALOG_DATA) public data:any, public dialogRef: MatDialogRef<CimsTakeDecisionDialogboxComponent>,private decisiontypeservice: DecisiontypeService,private decisionService:DecisionService) { 

    this.decision.idea_id=data['id'];
    this.decision.need_id=data['submitted_against'];

  }
  closeDialog(){
    event.preventDefault()
    this.dialogRef.close();
  }

  submitFunc(){
    console.log(this.decision);
    this.decisionService.updateData(this.decision);
  }


  ngOnInit() {

    this.decisiontypeservice.getData().subscribe(data => {
      this.decisions=data;
      console.log(this.decisions);
    })

  }

}
