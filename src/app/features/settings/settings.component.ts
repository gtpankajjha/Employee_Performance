import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  template: `<h2>Settings</h2><p>Theme & preferences will be here.</p>`
  ,
  standalone: true,
  imports: [CommonModule]
})
export class SettingsComponent {}
