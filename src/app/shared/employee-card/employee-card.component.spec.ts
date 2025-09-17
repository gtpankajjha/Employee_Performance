import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardComponent } from './employee-card.component';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCardComponent);
    component = fixture.componentInstance;
      // Provide a mock employee input
    component.employee = { name: 'Test', id: 1, role: 'Developer', performance: [1,2,3,4] };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
