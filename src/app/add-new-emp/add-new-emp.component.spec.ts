import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewEmpComponent } from './add-new-emp.component';

describe('AddNewEmpComponent', () => {
  let component: AddNewEmpComponent;
  let fixture: ComponentFixture<AddNewEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
