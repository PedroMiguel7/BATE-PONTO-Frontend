import { Component, OnInit } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { PointsService } from './points.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.scss'],
})
export class GraficoComponent implements OnInit {
  below = LegendPosition.Below;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = '';
  gradient: boolean = true;

  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#1A75FF ', '#81c9fa', '#0026e9', '#81c9fa'],
  };

  constructor(private PointsServide: PointsService) {}

  get multi() {
    return this.PointsServide.pointsData;
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
