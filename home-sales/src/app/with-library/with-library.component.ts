import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseChartComponent,
  calculateViewDimensions,
  ColorHelper,
  getScaleType,
  getUniqueXDomainValues,
  id,
  LegendOptions,
  LegendPosition, NgxChartsModule,
  ScaleType,
  ViewDimensions
} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-with-library',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './with-library.component.html',
  styleUrls: ['./with-library.component.scss']
})
export class WithLibraryComponent {

}
