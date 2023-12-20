import {
  ChangeDetectionStrategy,
  Component,
  signal,
  effect,
  Injector,
  OnInit,
  WritableSignal,
  computed, untracked
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-sales';

  roleId = signal(0);
  isAdmin = computed(() => [2,3,4].includes(this.roleId()))


  constructor(private injector: Injector) {}



}
