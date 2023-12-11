import { ChangeDetectionStrategy, Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TestComponentComponent } from "../test-component/test-component.component";
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { EmptyRouteService } from "./empty-route.service";
import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-empty-route',
  standalone: true,
  imports: [CommonModule, TestComponentComponent, PieChartComponent, NgOptimizedImage],
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
  userStatus: 'red' | 'yellow' | 'green' = 'red'
  isBlockShown: WritableSignal<boolean> = signal(null);
  blocks = signal([{test: 1}, {test: 2}, {test: 3}, {test: 4}])

ngOnInit() {

}

// handleClick() {
//   this.isBlockShown.update(prev => !prev);
// }
}
