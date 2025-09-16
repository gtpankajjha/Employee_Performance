import { TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('Employee', () => {
  let service: EmployeeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
