import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 public vehicles=["van ","bus ","bike ","jeep "];
  display=false;
  color="purple";
  @Input('ParentData') public valli:any;
isdisplay=true;
@Output() public childEvent=new EventEmitter();
fireEvent()
{
	this.childEvent.emit("hey pravalli");
}
}
