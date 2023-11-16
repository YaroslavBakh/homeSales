import { NgModule } from "@angular/core";
import { TestComponentComponent } from "./test-component.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { PieChartComponent } from "../pie-chart/pie-chart.component";




@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatSlideToggleModule,
    PieChartComponent,
  ],
  providers: [],
  exports: [
    TestComponentComponent
  ],
  bootstrap: []
})
export class TestComponentModule { }
