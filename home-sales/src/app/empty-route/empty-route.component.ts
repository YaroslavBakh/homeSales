import { ChangeDetectionStrategy, Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TestComponentComponent } from "../test-component/test-component.component";
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { EmptyRouteService } from "./empty-route.service";
import { BrowserModule } from "@angular/platform-browser";
import {ParentComponent} from "../parent/parent.component";

@Component({
  selector: 'app-empty-route',
  standalone: true,
  imports: [CommonModule, TestComponentComponent, PieChartComponent, NgOptimizedImage, ParentComponent],
  templateUrl: './empty-route.component.html',
  styleUrls: ['./empty-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    BrowserModule,

  ]
})
export class EmptyRouteComponent implements OnInit {

  @Input() sportid: string | number;

  constructor(
    private emptyRouteService: EmptyRouteService,
  ) {
  }

ngOnInit() {

}

}
