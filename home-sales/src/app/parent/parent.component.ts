import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {BackgroundColorService} from "../backgroun-color.service";
import {StateService} from "../state.service";
import {ChildOneComponent} from "../child-one/child-one.component";
import {ChildTwoComponent} from "../child-two/child-two.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildOneComponent,
    ChildTwoComponent
  ],
  template: `
    <div class="box" [style.background]="getBackgroundColor()">
        Parent
    </div>
    <div class="child-components">
        <app-child-one></app-child-one>
        <app-child-two></app-child-two>
    </div>
  `,
  styleUrl: './parent.component.scss',
})
export class ParentComponent {

  private currentColor: string | undefined;
  private backgroundService = inject(BackgroundColorService);
  private stateService = inject(StateService);
  getBackgroundColor() {
    return this.currentColor = this.backgroundService.getColor(this.currentColor);
  }


}
