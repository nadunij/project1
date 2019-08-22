import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { RemoveEmpComponent } from './remove-emp/remove-emp.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';

const appRoutes: Routes = [
  { path: 'add-emp', component: AddEmpComponent },
  { path: 'view-emp', component: ViewEmpComponent },
  { path: 'update-emp', component: UpdateEmpComponent },
  { path: 'remove-emp', component: RemoveEmpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmpComponent,
    ViewEmpComponent,
    UpdateEmpComponent,
    RemoveEmpComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
