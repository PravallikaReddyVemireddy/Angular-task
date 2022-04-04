import { Component, OnInit } from '@angular/core';
import {AirtelService} from '../airtel.service';


@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works!
    </p>
    <h2>Employee detail </h2>
<ul *ngFor = "let e of emp;index as i">
   <li> {{i}}  {{emp.id}} {{emp.name}}   {{emp.age}}</li> 
</ul>
 
  `,
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {

 
  constructor(private _airtelService: AirtelService) { }
public emp:any=[];
  ngOnInit(): void {
	this.emp=this._airtelService.getEmployees();
  }
  

}
