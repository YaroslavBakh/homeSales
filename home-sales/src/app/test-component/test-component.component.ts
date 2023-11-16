import { Component } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { PieChartComponent } from "../pie-chart/pie-chart.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MAT_DATE_LOCALE } from "@angular/material/core";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
  standalone: true,
  imports: [
    BrowserAnimationsModule,
    MatSlideToggleModule,
    PieChartComponent,
  ],
})
export class TestComponentComponent {

}
