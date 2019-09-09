import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee";
import { Skill } from "../model/skill";
import { SkillService } from "../service/skill.service";

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
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class TestForm1Component implements OnInit {

  employee: Employee = new Employee();
  // employee: Employee = { employee_name:"jaja", email:"jaja@gmail.com"}

 
  skillss: any;
  currentIndex: number;
  form: FormGroup;
    

  // --validation--

  employee_name = new FormControl("", [Validators.required, Validators.maxLength(50)]);
  employee_dob = new FormControl(moment(), Validators.required);
  email = new FormControl("" , [Validators.required, Validators.email]);

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

   //multiple selection
 skills = new FormControl();
 skillList: String[] = new Array();
// -------------------------

  constructor(fb: FormBuilder, private employeeService: EmployeeService, private skillService: SkillService) {
    this.form = fb.group({
      "employee_name": this.employee_name,
      "employee_dob": this.employee_dob,
      "email": this.email,
      "skills": this.skills
      });
   }



  save() {
    this.employeeService.createEmployee(this.form.value).subscribe(data => 
      console.log(data), 
      error => console.log(error));
    // console.log(this.employee);
  }

   onSubmit() {
    console.log("model-based form submitted");
    console.log(this.form.value);
    console.log(this.employee)
    this.save();
    // this.form.reset();

}

 delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

  async ngOnInit() {
    this.skillService.getSkillsList()
      .subscribe(data => {
        this.skillss=data;
        error => console.log(error);
        
      });
      await this.delay(300);
      console.log(this.skillss);

      for (let i in this.skillss) {
        this.skillList[i]=String(this.skillss[i].skill_name);
      }
    
      console.log(this.skillList);

      console.log(this.skillss[0].skill_name);
  }

  //Current Index Setter
setCurrentIndex(index){
  this.currentIndex = index;
  console.log(this.currentIndex);
}

}
