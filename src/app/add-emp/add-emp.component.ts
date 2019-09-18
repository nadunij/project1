import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'MMM DD, YYYY',
    monthYearA11yLabel: 'MMM YYYY',
  },
};

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class AddEmpComponent implements OnInit {

  //multiple selection
  skillss = new FormControl();
  skillList: string[] = ['Java', 'Python', 'Html', 'CSS', 'C#', 'C'];
// -------------------------

  employee: Employee = new Employee();
  submitted = false;

  //binding the object (ngModel)

  contactName: String
  dateOfBirth: Date
  emailAddress: String
  skillSet: String[]
  

  
  //mat-chip
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  skillCtrl = new FormControl();
  filteredSkills: Observable<string[]>;
  skills: string[] = ['Java'];
  allSkills: string[] = ['Python', 'Java', 'Html', 'CSS', 'C#', 'Spring boot', 'Git'];


  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;



  constructor(private employeeService: EmployeeService) { 
    this.filteredSkills = this.skillCtrl.valueChanges.pipe(
      startWith(null),
      map((skill: string | null) => skill ? this._filter(skill) : this.allSkills.slice()));
  }


  ngOnInit() {
    this.dateOfBirth=new Date();
  }



// --------------------------------------------------------------
  // delay(ms: number) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  // async ngOnInit() {
  //   this.skillService.getSkillsList().subscribe(data => {
  //     this.skillsObject = data;
  //     error => console.log(error);
  //   });
    // await this.delay(300);
    // console.log(this.skillsObject);
  // }
// ----------------------------------------------------------------------



// ----------------
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
  }

  onSubmit(form: NgForm) {

    this.submitted = true;
    // console.log(this.contactName)
    // console.log(this.dateOfBirth)
    // console.log(this.emailAddress)
    // console.log(this.skillSet)

    // this.employee.name = this.contactName
    // this.employee.dob = this.dateOfBirth
    // this.employee.email = this.emailAddress
    // this.employee.skills = this.skillSet

    this.employeeService.createEmployee(form.value).subscribe(data=>{
      console.log("employee created")});

    // this.employeeService.createEmployee(this.employee).subscribe(data=>{
    //   console.log("employee created")
    // })
  }
// ---------------------

newCustomer(){
  this.submitted=false;
}


  
// ---------
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
// --------------

  matcher = new MyErrorStateMatcher();



  //mat-chip
  add(event: MatChipInputEvent): void {
    // Add skill only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our skill
      if ((value || '').trim()) {
        this.skills.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.skillCtrl.setValue(null);
    }
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(skill => skill.toLowerCase().indexOf(filterValue) === 0);
  }


}
