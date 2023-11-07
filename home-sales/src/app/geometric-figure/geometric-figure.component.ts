import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@Component({
  selector: 'app-geometric-figure',
  standalone: true,
  imports: [CommonModule, BrowserAnimationsModule],
  templateUrl: './geometric-figure.component.html',
  styleUrls: ['./geometric-figure.component.scss'],
})
export class GeometricFigureComponent implements OnInit {

  legend = [
    {text: 'test 1', result: 444, id: 1},
    {text: 'test 2', result: 555, id: 2},
    {text: 'test 3', result: 666, id: 3},
    {text: 'test 4', result: 777, id: 4},
    {text: 'test 5', result: 888, id: 5},
    {text: 'test 6', result: 999, id: 6},
  ];
  triangles: any[] = [];
  styles = {
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
  }


  ngOnInit() {
    this.triangles = structuredClone(this.legend);
  }

  showHideLegendItem(item: { result: number; text: string , id: number }) {
    const index = this.triangles.findIndex((legendItem) => legendItem.id === item.id);
    if (index !== -1) {
      this.triangles.splice(index, 1);
    } else {
      const legendIndex = this.getLegendIndex(item.id);
      this.triangles.splice(legendIndex, 0, structuredClone(item));
    }
  }

  findItemInTriangles(item: { result: number; text: string; id: number }): boolean {
    return this.triangles.findIndex((legendItem) => legendItem.id === item.id) !== -1;
  }

  getLegendIndex(legendId: number): number {
    if (this.legend[0].id === legendId) {
      return 0
    }

    for (let i = 0; i < this.triangles.length; i++) {
      if (this.triangles[i].id < legendId && this.triangles[i+1]?.id > legendId) {
        return i+1;
      }
    }
    return this.triangles.length - 1;
  }
}
