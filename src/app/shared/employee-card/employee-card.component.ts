// src/app/shared/components/employee-card/employee-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: `./employee-card.component.html`,
  styleUrls: ['./employee-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
}
