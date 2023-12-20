import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  counter$ = new BehaviorSubject(0);
  counterSignal = signal(0);
  constructor() { }

  increaseObsCounter() {
    this.counter$.next(this.counter$.getValue() + 1);
  }

  increaseSignalCounter() {
    this.counterSignal.update((counter) => counter + 1);
  }
}
