// src/app/models/employee.model.ts
export interface Employee {
  id: number;
  name: string;
  role: string;
  performance: number[]; // e.g., quarterly scores
}
