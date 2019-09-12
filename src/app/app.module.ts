import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDialogModule} from '@angular/material/dialog';




import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { ManageSkillsComponent } from './manage-skills/manage-skills.component';
import { AddNewEmpComponent } from './add-new-emp/add-new-emp.component';
import { TestForm1Component } from './test-form1/test-form1.component';
import { ViewEmployeeeeeComponent } from './view-employeeeee/view-employeeeee.component';
// import { ViewEmployeeeeeComponent } from './view-employeeeee/view-employeeeee.component';

const appRoutes: Routes = [
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'add-new-emp', component: AddNewEmpComponent },

  { path: 'test-form1', component: TestForm1Component },
  { path: 'view-employeeeee', component: ViewEmployeeeeeComponent },

  { path: 'my-dashboard', component: MyDashboardComponent },
  { path: 'update-emp', component: UpdateEmpComponent },
  { path: 'manage-skills', component: ManageSkillsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    MyNavComponent,
    MyDashboardComponent,
    ManageSkillsComponent,
    AddNewEmpComponent,
    TestForm1Component,
    ViewEmployeeeeeComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatRadioModule, 
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatMomentDateModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

