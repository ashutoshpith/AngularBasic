import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
 
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   name:string[];
   age:number;
   address:{
     street:string;
     pincode:number;
   }
  constructor() { }

  ngOnInit() {
    this.name=["Ashutosh", "kumar"];
    this.age=22;
    this.address={
      street:"randi khana",
      pincode:253651
  }
  }

  addHobby(hobby){
    this.name.unshift(hobby);
    this.name.push(hobby);
  }




}
