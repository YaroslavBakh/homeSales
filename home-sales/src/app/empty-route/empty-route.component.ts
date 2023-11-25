import { ChangeDetectionStrategy, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from "../test-component/test-component.component";

@Component({
  selector: 'app-empty-route',
  standalone: true,
  imports: [CommonModule, TestComponentComponent],
  templateUrl: './empty-route.component.html',
  styleUrls: ['./empty-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyRouteComponent implements OnInit {

  constructor() {
  }

  isBlockShown: WritableSignal<boolean> = signal(null);
  blocks = signal([{test: 1}, {test: 2}, {test: 3}, {test: 4}])

ngOnInit() {
}

handleClick() {
  this.isBlockShown.update(prev => !prev);
  console.log(this.isBlockShown())
}
}
