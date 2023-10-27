import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  name: string = "name#1";
  branch: string = "Branch#1"  ;
  mobile: number = 123456;
  gender: string = "Male";
  age: number = 40;
}
