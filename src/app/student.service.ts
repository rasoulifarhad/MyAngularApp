import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents() : any[] {
    return [
      {
        ID: 'std101',
        FirstName: 'std101 first',
        LastName: 'std101 last',
        DOB: '12/8/1988',
        Gender: 'Male',
        CourseFee: 1234.56,
      },
      {
        ID: 'std102',
        FirstName: 'std102 first',
        LastName: 'std102 last',
        DOB: '10/14/1989',
        Gender: 'Male',
        CourseFee: 6666.0,
      },
      {
        ID: 'std103',
        FirstName: 'std103 first',
        LastName: 'std103 last',
        DOB: '7/24/1992',
        Gender: 'Female',
        CourseFee: 6543.21,
      },
      {
        ID: 'std104',
        FirstName: 'std104 first',
        LastName: 'std104 last',
        DOB: '8/19/1990',
        Gender: 'Female',
        CourseFee: 9000.5,
      },
      {
        ID: 'std105',
        FirstName: 'std105 first',
        LastName: 'std105 last',
        DOB: '4/12/1991',
        Gender: 'Male',
        CourseFee: 9876.54,
      },
      {
        ID: 'std106',
        FirstName: 'Tarun',
        LastName: 'Mallick',
        DOB: '4/10/1992',
        Gender: 'Male',
        CourseFee: 1278.55,
      }
    ];
  }
}
