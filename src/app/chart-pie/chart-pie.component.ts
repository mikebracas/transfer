import { Component, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";


import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};


@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.less']
})
export class ChartPieComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  title:"History";

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      }
    };
  }

  ngOnInit(): void {
  }

}
