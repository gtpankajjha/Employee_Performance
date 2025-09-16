// src/app/core/core.module.ts
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EmployeeService } from './services/employee.services';

@NgModule({
  providers: [EmployeeService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('CoreModule is already loaded. Import only once.');
    }
  }
}
