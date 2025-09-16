// src/app/shared/components/employee-form/employee-form.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: `employee-form.component.html`,
  styleUrls: [`employee-form.component.scss`],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class EmployeeFormComponent {
  @Output() create = new EventEmitter<Omit<Employee, 'id'>>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      role: ['', [Validators.required]],
      performance: ['', [Validators.required, Validators.pattern(/^(\d+(,\s?\d+)*)$/)]]
    });
  }

  get name() { return this.form.get('name')!; }
  get role() { return this.form.get('role')!; }
  get performance() { return this.form.get('performance')!; }

  onSubmit() {
    if (this.form.valid) {
      const perf = this.form.value.performance
        ? (this.form.value.performance as string).split(',').map((s: string) => Number(s.trim()))
        : [];
      const payload = { name: this.form.value.name, role: this.form.value.role, performance: perf };
      this.create.emit(payload);
      this.form.reset();
    }
  }
}
