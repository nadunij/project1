import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEmpComponent } from './remove-emp.component';

describe('RemoveEmpComponent', () => {
  let component: RemoveEmpComponent;
  let fixture: ComponentFixture<RemoveEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
