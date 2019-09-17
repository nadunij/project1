import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { ManageSkillsComponent } from './manage-skills/manage-skills.component';
import { AddNewEmpComponent } from './add-new-emp/add-new-emp.component';
import { TestForm1Component } from './test-form1/test-form1.component';
import { ViewEmployeeeeeComponent } from './view-employeeeee/view-employeeeee.component';
import { UpdateEmpSnackbarComponent } from './update-emp-snackbar/update-emp-snackbar.component';


const routes: Routes = [
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'add-new-emp', component: AddNewEmpComponent },

  { path: 'test-form1', component: TestForm1Component },
  { path: 'view-employeeeee', component: ViewEmployeeeeeComponent },

  { path: 'my-dashboard', component: MyDashboardComponent },
  { path: 'update-emp', component: UpdateEmpComponent },
  { path: 'update-emp-snackbar', component: UpdateEmpSnackbarComponent },

  { path: 'manage-skills', component: ManageSkillsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
