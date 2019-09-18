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
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { ManageSkillsComponent } from './manage-skills/manage-skills.component';
import { AddNewEmpComponent } from './add-new-emp/add-new-emp.component';
import { TestForm1Component } from './test-form1/test-form1.component';
import { ViewEmployeeeeeComponent } from './view-employeeeee/view-employeeeee.component';
import { AppRoutingModule } from './/app-routing.module';
import { UpdateEmpSnackbarComponent } from './update-emp-snackbar/update-emp-snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    MyNavComponent,
    ManageSkillsComponent,
    AddNewEmpComponent,
    TestForm1Component,
    ViewEmployeeeeeComponent,
    UpdateEmpSnackbarComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
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
    AppRoutingModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

