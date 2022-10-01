import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { HoursService } from './hours.service';

@Component({
  selector: 'app-grafico-user',
  templateUrl: './grafico-user.component.html',
  styleUrls: ['./grafico-user.component.scss'],
})
export class GraficoUserComponent implements OnInit {
  @Input() PONTOS!: any;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Hours';
  timeline: boolean = true;

  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#1A75FF ', '#2196f3', '#0026e9', '#81c9fa'],
  };

  constructor(private HoursService: HoursService) {}

  get multi() {
    return this.HoursService.hoursData;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {}
}
