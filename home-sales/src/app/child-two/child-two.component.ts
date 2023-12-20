import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BackgroundColorService} from "../backgroun-color.service";
import {StateService} from "../state.service";

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [],
  template: `
    <div class="box" [style.background]="getBackgroundColor()">
        Child Two
    </div>
  `,
  styleUrl: './child-two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent {

  private currentColor: string | undefined;
  private backgroundService = inject(BackgroundColorService);
  getBackgroundColor() {
    return this.currentColor = this.backgroundService.getColor(this.currentColor);
  }
}
