import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-add-new-emp',
  templateUrl: './add-new-emp.component.html',
  styleUrls: ['./add-new-emp.component.css']
})
export class AddNewEmpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddNewEmpComponent> ) { }

    onClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
