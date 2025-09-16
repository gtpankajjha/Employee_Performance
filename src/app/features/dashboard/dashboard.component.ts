// src/app/features/dashboard/dashboard.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.services';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from '../../shared/employee-form/employee-form.component';
import { EmployeeCardComponent } from '../../shared/employee-card/employee-card.component';
import { ChartComponent } from '../../shared/chart/chart.component';
import { Employee } from '../../models/employee.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: `dashboard.component.html`,
  styleUrls: [`dashboard.component.scss`],
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent, EmployeeCardComponent, ChartComponent]
})
export class DashboardComponent implements OnInit, OnDestroy {
  employees$!: Observable<Employee[]>;
  avgData: number[] = [];
  sub?: Subscription;

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.employees$ = this.empService.getEmployees();
    this.sub = this.employees$.subscribe(list => {
      // compute average by quarter index (assuming all have same length or fill zeros)
      const maxLen = Math.max(...list.map(l => l.performance.length));
      const sums = Array(maxLen).fill(0);
      const counts = Array(maxLen).fill(0);
      list.forEach(e => {
        e.performance.forEach((p, i) => { sums[i] += p; counts[i] += 1; });
      });
      this.avgData = sums.map((s, i) => counts[i] ? Math.round(s / counts[i]) : 0);
    });
  }

  add(payload: Omit<Employee, 'id'>) {
    this.empService.addEmployee(payload).subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
