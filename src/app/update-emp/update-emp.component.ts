import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';


import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee";
import { Skill } from "../model/skill";
import { SkillService } from "../service/skill.service";
import { UpdateEmpSnackbarComponent } from '../update-emp-snackbar/update-emp-snackbar.component';



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
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class UpdateEmpComponent implements OnInit {

  employee: any = {};
  empSkills: any = {};
  skillNames: string = "";

  skillsObject: any;
  form: FormGroup;


  //data binding and validation
  id = new FormControl("", [Validators.required]);
  employee_name = new FormControl("", [Validators.required, Validators.maxLength(50)]);
  employee_dob = new FormControl(moment(), Validators.required);
  email = new FormControl("", [Validators.required, Validators.email]);
  skills = new FormControl();

  getErrorMessageForEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessageForName() {
    return this.employee_name.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessageForDoB() {
    return this.employee_dob.hasError('required') ? 'You must choose a value' :
      '';
  }



  constructor(fb: FormBuilder, private employeeService: EmployeeService, private skillService: SkillService, public router: Router, public snackBar: MatSnackBar) {

    this.form = fb.group({
      "id": this.id,
      "employee_name": this.employee_name,
      "employee_dob": this.employee_dob,
      "email": this.email,
      "skills": this.skills
    });
  }


  onUpdate() {
    console.log("model-based form updated");
    console.log(this.form.value);

    this.employeeService.updateEmployee(this.form.value).subscribe(data => {
      console.log(data),
        error => console.log(error)
    });

    // this.employeeService.createEmployee(this.form.value).subscribe(data => {
    //   console.log(data),
    //   error => console.log(error)
    // });

    this.router.navigate(['/view-employeeeee']);

  }

  
   ngOnInit() {

    this.employeeService.getEmployee(this.employeeService.currentEmpId).subscribe(data => {
      this.employee = data;
      console.log(this.employee.skills);

      this.empSkills = this.employee.skills;

          for(let i=0; i< this.empSkills.length; i++) {
            if(i === this.empSkills.length - 1) {
              this.skillNames = this.skillNames + this.empSkills[i].skill_name;
            }
            else {
              this.skillNames = this.skillNames + this.empSkills[i].skill_name + ", ";
            }
          };

          this.employee.skills = this.skillNames;

          console.log(this.empSkills)
      //     console.log(skillNames)
      // console.log(empSkills);

      });

    this.skillService.getSkillsList().subscribe(data => {
      this.skillsObject = data;
      error => console.log(error);

    });


  }

  openSnackBar() {
    this.snackBar.openFromComponent(UpdateEmpSnackbarComponent, {
      duration: 1500,
    });
  }

}
