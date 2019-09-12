import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForm1Component } from './test-form1.component';

describe('TestForm1Component', () => {
  let component: TestForm1Component;
  let fixture: ComponentFixture<TestForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
