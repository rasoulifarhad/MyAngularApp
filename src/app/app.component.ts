import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from './student.service';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  // template: `<div>
  //               <h1>{{'FirstName:' + firstName + ', LastName: ' + lastName}}</h1>
  //               <br/>
  //               <h2>{{getFullName()}}</h2>
  //               <br/>
  //               <img src={{imagePath}}/>
  //               <br/>
  //               <span [innerHtml]='title'></span>
  //               <br/>
  //               <img [src]='imagePath'/>
  //               <br/>
  //               <img src='https://dotnettutorials.net{{imageUriPath}}'/>
  //               <br/>
  //               <br/>
  //               <button [disabled]='isDisabledClick'> Click Here </button>
  //               <br/>
  //               <button disabled={{isDisabledClick}}> Click Here </button>
  //               <br/>
  //               {{maliciousData}}
  //               <br/>
  //               <div  [innerHtml]='maliciousData'></div>
  //               <input id='inputId' type='text' value='TestInput'>
  //           </div>`
  providers:[StudentService]
})
export class AppComponent {

  constructor(private router: Router, private _studentService: StudentService) {
    // this.students = _studentService.getStudents();
  }

  getStudent() {
    this.router.navigate(['/studentLink']);
  }

  getStudentDetails() {
    this.router.navigate(['/studentDetalsLink'])
  }

  title = 'MyAngularApp';
  pageHeader: string = 'Student Details';
  firstName = "first name #1";
  lastName = "last name +1;"
  imagePath: string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
  imageUriPath: string = "/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
  isDisabledClick: boolean = true;

  maliciousData: string = "Hello <script>alert('your application is hacked')</script>";


  name: string = "name#1";
  branch: string = "Branch#1"  ;
  mobile: number = 123456;
  gender: string = "Male";
  age: number = 40;

  columnSpan: number = 2;

  classesToApply: string = "italicClass boldClass"

  applyBoldClass: boolean = true;
  applyItalicClass: boolean = true;

  getFullName() : string {
    return this.firstName + ' ' + this.lastName;
  }


  addCssClasses()  {
    let cssClasses = {
      boldClass : this.applyBoldClass,
      italicClass : this.applyItalicClass
    };
    return cssClasses;
  }

  isBold: boolean = true;

  fontSize: number = 40;

  isItalic: boolean =true;

  addCssStyles() {
    let cssStyle = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize
    };
    return cssStyle;
  }

  onClick() : void {
    console.log('button is clicked');
  }

  showDetails: boolean = false;

  toggleDetails() :void {
    this.showDetails = !this.showDetails;
    console.log("--> " + this.showDetails);
  }

  name01: string = "name#01";
  name02: string = "name#02";
  name03: string = "name#03";


  handleInput(event: Event) {
    this.name01 = (event.target as HTMLInputElement).value;
  }

  today: number = Date.now();

  isValid: boolean = true;
  changeData(valid: boolean) {
    this.isValid = valid;
  }

    students : any[] = [];
    pageTitle : string = "";

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.students = this._studentService.getStudents();
      this.pageTitle = this._studentService.getTitle();
    }

}


