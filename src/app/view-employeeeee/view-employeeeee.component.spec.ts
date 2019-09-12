import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeeeeComponent } from './view-employeeeee.component';

describe('ViewEmployeeeeeComponent', () => {
  let component: ViewEmployeeeeeComponent;
  let fixture: ComponentFixture<ViewEmployeeeeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeeeeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeeeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
