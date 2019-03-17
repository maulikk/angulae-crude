import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpployeesComponent } from './empployees.component';

describe('EmpployeesComponent', () => {
  let component: EmpployeesComponent;
  let fixture: ComponentFixture<EmpployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
