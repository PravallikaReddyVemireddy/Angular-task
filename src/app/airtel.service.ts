import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirtelService {

  constructor() { }
  getEmployees(){
	
return[
  {"id": 1,"name": "cat","age": 21},
   {"id": 2,"name": "tit","age": 20},
   {"id": 3,"name": "tat","age": 21},
    {"id": 4,"name": "bat","age": 22},
	
];
}
}
