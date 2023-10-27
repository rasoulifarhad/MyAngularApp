import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { MyComponentComponent } from './my-component/my-component.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    StudentComponent,
    StudentListComponent,
    StudentCountComponent,
    StudentdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [StudentListComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
