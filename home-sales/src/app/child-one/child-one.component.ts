import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BackgroundColorService} from "../backgroun-color.service";
import {StateService} from "../state.service";
import {GrandChildComponent} from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child-one',
  standalone: true,
  imports: [
    GrandChildComponent
  ],
  template: `
    <div class="box" [style.background]="getBackgroundColor()">
        Child One
    </div>

    <app-grand-child></app-grand-child>
  `,
  styleUrl: './child-one.component.scss',
})
export class ChildOneComponent {

  private currentColor: string | undefined;
  private backgroundService = inject(BackgroundColorService);
  getBackgroundColor() {
    return this.currentColor = this.backgroundService.getColor(this.currentColor);
  }

}
