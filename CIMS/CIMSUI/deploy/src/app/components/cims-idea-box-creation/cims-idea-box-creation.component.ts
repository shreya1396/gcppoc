import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Ideabox } from 'src/app/classes/ideabox';
import { IdeaboxService } from 'src/app/services/IdeaBox/ideabox.service';
import { ActivatedRoute } from '@angular/router';
import { BoxownerService } from 'src/app/services/BoxOwner/boxowner.service';

@Component({
  selector: 'app-cims-idea-box-creation',
  templateUrl: './cims-idea-box-creation.component.html',
  styleUrls: ['./cims-idea-box-creation.component.css']
})
export class CimsIdeaBoxCreationComponent implements OnInit {

  ideaboxArray: Array<Ideabox>;
  type:String
  constructor(private ideaboxService:IdeaboxService, private changeDetectorRefs: ChangeDetectorRef,private route : ActivatedRoute,private ideaboxservice: IdeaboxService,private boxownerService: BoxownerService) {
    
    this.route.params.subscribe( params => {
      
      this.ideaboxservice.isValidType(params['type'])
      this.type=params['type'];
    }); 
    this.ideaboxArray=[]
   }

   displayForm(i){
     console.log(i);
   }

  ngOnInit() {
    this.ideaboxService.getData().subscribe(data => {
      console.log(data)
      this.ideaboxArray=data;
    });

    this.refresh();
  }

  refresh() {
    this.ideaboxService.getData().subscribe((res) => {
    this.changeDetectorRefs.detectChanges();
    this.ideaboxArray=res;
    
    });
    }

}
