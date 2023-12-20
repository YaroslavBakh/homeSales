import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BackgroundColorService} from "../backgroun-color.service";
import {StateService} from "../state.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  styleUrl: './grand-child.component.scss',
  template: `
    <div class="box" [style.background]="getBackgroundColor()">
        Grand Child
        <br>
        obs {{stateService.counter$ | async}}
        <br>
        signal {{stateService.counterSignal()}}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {

  private currentColor: string | undefined;
  private backgroundService = inject(BackgroundColorService);
  stateService = inject(StateService);
  test() {
    console.log('test')
  }

  getBackgroundColor() {
    return this.currentColor = this.backgroundService.getColor(this.currentColor);
  }

}
