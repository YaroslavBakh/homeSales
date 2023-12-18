import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundColorService {

  constructor() { }
  colors = ['red', 'blue', 'green', 'lightblue', 'orange', 'purple', 'pink', 'brown', 'black', 'coral']

  getColor(color: string | null): string {
    if (color) {
      const availableColors = this.colors.filter(c => c !== color);
      return availableColors[Math.floor(Math.random() * availableColors.length)];
    }

    return this.colors[Math.floor(Math.random() * this.colors.length)];

  }

}
