import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: any[] = [
    {
      ID: 'std101', FirstName: 'std101 first', LastName: 'std101 last', 
      DOB: '12/8/1988', Gender: 'Male', CourseFee: 1234.56
    },
    {
      ID: 'std102', FirstName: 'std102 first', LastName: 'std102 last', 
      DOB: '10/14/1989', Gender: 'Male', CourseFee: 6666.00
    },
    {
      ID: 'std103', FirstName: 'std103 first', LastName: 'std103 last', 
      DOB: '7/24/1992', Gender: 'Female', CourseFee: 6543.21
    },
    {
      ID: 'std104', FirstName: 'std104 first', LastName: 'std104 last', 
      DOB: '8/19/1990', Gender: 'Female', CourseFee: 9000.50
    },
    {
      ID: 'std105', FirstName: 'std105 first', LastName: 'std105 last', 
      DOB: '4/12/1991', Gender: 'Male', CourseFee: 9876.54
    },
    {
      ID: 'std106', FirstName: 'Tarun', LastName: 'Mallick',
      DOB: '4/10/1992', Gender: 'Male', CourseFee: 1278.55
    }    

  ];

  getTotalStudentsCount(): number {
    return this.students.length;
  }

  // = Assign a value
  // == Compare two values
  // === Compare two values and their types
  getMaleStudentsCount(): number {
    return this.students.filter(std => std.Gender === 'Male').length;
  }

  getFemaleStudentsCount(): number {
    return this.students.filter(std => std.Gender === 'Female').length;
  }

  // This property will keep track of the radio button which is selected
  // We have set the default value to All, so all the students
  // are displayed in the table by default
  selectedStudentCountRadioButton: string = 'All';

  // Depending on the radio button which is selected, this method updates
  // the selectedStudentCountRadioButton property
  // This method is going to called when the child component (StudentCountComponent)
  // raises the custom event - countRadioButtonSelectionChanged
  // The event binding is specified in StudentList.component.html
  onStudentCountRadioButtonChange(selectedRadioButtonValue: string) : void {
    this.selectedStudentCountRadioButton = selectedRadioButtonValue;
  }
}
