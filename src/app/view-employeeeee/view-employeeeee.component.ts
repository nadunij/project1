import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee";
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-view-employeeeee',
  templateUrl: './view-employeeeee.component.html',
  styleUrls: ['./view-employeeeee.component.css']
})


export class ViewEmployeeeeeComponent implements OnInit {


  displayedColumns: string[] = ['id', 'employee_name', 'employee_dob', 'email', 'skills', 'delete-button', 'update-button'];


  employeeInfoTabale: any;
  public dataSource = new MatTableDataSource(this.employeeInfoTabale);

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {}



  ngOnInit() {
    this.getAllEmployes();
  }

getAllEmployes(){
  this.employeeService.getEmployeesList().subscribe(data=>
    {
      this.employeeInfoTabale=data;
      this.employeeInfoTabale.forEach(element => {
        let skills: any = element.skills
        let skillSet : string ="";
        for(let i=0; i< skills.length; i++) {
          console.log(skills[i]);
          if(i === skills.length - 1) {
          skillSet = skillSet + skills[i].skill_name;
          }
          else {
            skillSet = skillSet + skills[i].skill_name + ", ";
          }
        };
        element.skills = skillSet;
      });
      this.dataSource.data = this.employeeInfoTabale;
    })
}


  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
        data => {
          console.log(data);
          this.getAllEmployes();
        },
        error => console.log(error));
  }


  updateEmployee(id: number){
    this.employeeService.currentEmpId=id;

      }
    
  

  

}
