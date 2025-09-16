// src/app/core/services/employee.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, catchError, tap } from 'rxjs/operators';
import { Employee } from '../../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private data: Employee[] = [
    { id: 1, name: 'Alice', role: 'Frontend Developer', performance: [80, 85, 90] },
    { id: 2, name: 'Bob', role: 'UX Designer', performance: [70, 75, 78] },
    { id: 3, name: 'Charlie', role: 'QA Engineer', performance: [60, 65, 70] }
  ];

  private employees$ = new BehaviorSubject<Employee[]>(this.data);

  // Simulate GET
  getEmployees(): Observable<Employee[]> {
    return this.employees$.asObservable().pipe(
      // simulate latency
      delay(200),
      catchError(err => {
        // In real app we'd log
        return throwError(() => new Error('Failed to fetch employees'));
      })
    );
  }

  // Simulate Add
  addEmployee(emp: Omit<Employee, 'id'>): Observable<Employee> {
    const newEmp: Employee = { id: this.generateId(), ...emp };
    this.data = [...this.data, newEmp];
    this.employees$.next(this.data);
    return of(newEmp).pipe(delay(150));
  }

  // Utility for tests
  simulateError() {
    this.employees$.error(new Error('Simulated backend error'));
  }

  private generateId(): number {
    return Math.max(0, ...this.data.map(e => e.id)) + 1;
  }
}
