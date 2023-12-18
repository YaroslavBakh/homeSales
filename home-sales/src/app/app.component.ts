import {ChangeDetectionStrategy, Component, signal, effect} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'home-sales';
  isDarkTheme = signal(false);
  counter = signal(0)

 constructor() {
   const darkThemeEffect = effect(() => {
     console.log('isDarkTheme', this.isDarkTheme());
   });

   const counterEffect = effect(() => {
     console.log(this.counter())
   })
 }

  increaseCounter() {
    this.counter.set(2)
    // this.counter.update((counter) => counter + 1)
  }

  changeTheme() {
    this.isDarkTheme.update((isDarkTheme) => !isDarkTheme);
  }
}
