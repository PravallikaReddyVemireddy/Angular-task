import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

 
 /*<p>{{greetuser()}}</p>
 <h2 [style.color]="hasError ? 'yellow':'blue'">colors mela</h2>
 <h2 [ngClass]="msg">message  classes</h2>
 <h2>{{state}}</h2>
 <h2>{{state | uppercase}}</h2>
 <h2>{{state | titlecase}}</h2>
 <h2>{{state | slice:5}}</h2>
 <h2>{{state |slice:3:8}}</h2>
 <h2>{{person | json}}</h2>
 <h2>{{5.6788 | number:'1.2-3'}}</h2>
 <h2>{{5.6788 | number:'2.5-6'}}</h2>
 <h2>Employee detail </h2>
<ul *ngFor = "let emp of employees">
   <li>  {{emp.id}} {{emp.name}}   {{emp.age}}</li> 
</ul>
 
 <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
   <h2>{{0.25 | currency:"GBP"}}</h2>
   <h2>{{698 | currency:"GBP":'code'}}</h2>
   <h2>{{678 | currency:"INR ":'code'}}</h2>
   
   
    <h2>{{0.25 | currency:"EURO":'code'}}</h2>
    <h3>{{date}}</h3>
    <h3>{{date | date:"short"}}</h3>
   <h3>{{date | date:"shortDate"}}</h3>
   <h3>{{date | date:"shortTime"}}</h3>
   
     <h3>{{date | date:"medium"}}</h3>
       <h3>{{date | date:"mediumTime"}}</h3>
         <h3>{{date | date:"mediumDate"}}</h3>
       <h3>{{date | date:"long"}}</h3>
             <h3>{{date | date:"longTime"}}</h3>     
              <h3>{{date | date:"longDate"}}</h3>
             
   
  <h3>
  <p class ="text-sp"  [class]="Class">Hello team</p>
  
  </h3>
  <button (click)="onClick($event)">Greet</button>
  <app-test></app-test>
  <input #myinput type="text">
  <button (click)="logMsg(myinput.value)">Log</button>
  
  <p [class.text-success]="hasError">Please gimme correct output</p>
  
  `,*/
  styles: [`
	.text-success{background-color:green}
	.text-sp{font-style: bold}
	.text-special{ font-style: italic}
	`]
})
export class AppComponent {
	public isDisabled=false;
  title = 'Routing';
  person={
	"fn":"valli",
	"ln":"reddy"
}
  status='single';
  greeting=" "
 state="Andhra Pradesh";
 public gas="hp";
  Class='text-special';
  hasError=false;
  date=new Date();
  public message="hiiiiiiiiii";
  msg={
	"text-success":!this.hasError,
	"text-special":!this.hasError
}
public employees  = [
    {"id":101, "name": "abc", age: 20},
    {"id":121, "name": "bcd", age: 30},
    {"id":131, "name": "cde", age: 40},
    {"id":141, "name": "def", age: 25}
  ]
  greetuser()
  {
	return this.title+ " welcome"
}
onClick(event:any)
{
	console.log(event.type);
	this.greeting="welcome";
}
logMsg(value:any)
{
	console.log(value)
	
}
}
