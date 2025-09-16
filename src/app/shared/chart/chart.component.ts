// src/app/shared/components/chart/chart.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: `chart.component.html`,
  styleUrls: [`chart.component.scss`],
  standalone: true,
  imports: [CommonModule, BaseChartDirective]
})
export class ChartComponent implements OnChanges {
  @Input() data: number[] = [];
  labels: string[] = [];
  chartData: any;
  options: ChartOptions = { responsive: true };
  type: ChartType = 'bar';

  ngOnChanges(changes: SimpleChanges) {
    this.labels = this.data.map((_, i) => `Q${i + 1}`);
    this.chartData = {
      labels: this.labels,
      datasets: [{ data: this.data, label: 'Performance' }]
    };
  }
}
