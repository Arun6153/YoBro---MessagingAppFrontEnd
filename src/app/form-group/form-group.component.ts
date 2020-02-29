import { Component, OnInit } from '@angular/core';
import { FormCreateService } from './form-create.service';

@Component({
  selector: 'new-group-space',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
  // provider:FormCreateService,
})

export class FormGroupComponent implements OnInit {
  group;
  constructor(private FormComponent: FormCreateService) { }
  ngOnInit(): void {
    this.group={
      name:"",
      tag:"",
    }
  }

  createGroup(){
    console.log('in'+this.group)
    this.FormComponent.createGroup(this.group).subscribe(
      res => {
        console.log(res+" "+this.group);
      },
      error => {
        console.log(error)
      }
    );
  }

}
