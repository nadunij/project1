import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EmployeeService } from "../service/employee.service";
import { SkillService } from "../service/skill.service";
import { AddNewEmpComponent } from '../add-new-emp/add-new-emp.component';


const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-test-form1',
  templateUrl: './test-form1.component.html',
  styleUrls: ['./test-form1.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})



export class TestForm1Component implements OnInit {

  skillsObject: any;
  form: FormGroup;

  // --validation and data binding--

  employee_name = new FormControl("", [Validators.required, Validators.maxLength(50)]);
  employee_dob = new FormControl(moment(), Validators.required);
  email = new FormControl("", [Validators.required, Validators.email]);
  skills = new FormControl();


  getErrorMessageForName() {
    return this.employee_name.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessageForDoB() {
    return this.employee_dob.hasError('required') ? 'You must choose a value' : '';
  }

  getErrorMessageForEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }


  constructor(fb: FormBuilder, private employeeService: EmployeeService, private skillService: SkillService, public dialog: MatDialog) {
    this.form = fb.group({
      "employee_name": this.employee_name,
      "employee_dob": this.employee_dob,
      "email": this.email,
      "skills": this.skills
    });
  }

  save() {
    this.employeeService.createEmployee(this.form.value).subscribe(data =>
      // console.log(data),
      error => console.log(error));
  }

  onSubmit() {
    console.log("model-based form submitted");
    console.log(this.form.value);
    this.save();
  }


  async ngOnInit() {
    this.skillService.getSkillsList().subscribe(data => {
      this.skillsObject = data;
      error => console.log(error);

    });


  }


  openDialog(): void {

    const dialogRef = this.dialog.open(AddNewEmpComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.form.reset();
      window.location.reload();
    });


  }

}
