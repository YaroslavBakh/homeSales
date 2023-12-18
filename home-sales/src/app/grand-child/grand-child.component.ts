import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BackgroundColorService} from "../backgroun-color.service";
import {StateService} from "../state.service";

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [],
  styleUrl: './grand-child.component.scss',
  template: `
    <div class="box" [style.background]="getBackgroundColor()">
        Grand Child
        <button (click)="test()">Click to test</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {

  private currentColor: string | undefined;
  private backgroundService = inject(BackgroundColorService);
  private stateService = inject(StateService);
  test() {
    console.log('test')
  }

  getBackgroundColor() {
    return this.currentColor = this.backgroundService.getColor(this.currentColor);
  }

}
