import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpSnackbarComponent } from './update-emp-snackbar.component';

describe('UpdateEmpSnackbarComponent', () => {
  let component: UpdateEmpSnackbarComponent;
  let fixture: ComponentFixture<UpdateEmpSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
