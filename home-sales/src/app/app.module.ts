import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { GeometricFigureComponent } from "./geometric-figure/geometric-figure.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { TestComponentComponent } from './test-component/test-component.component';
import { TestComponentModule } from "./test-component/test-component.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MapContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    GeometricFigureComponent,
    PieChartComponent,
    TestComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
