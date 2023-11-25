import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'home-sales';
  boxClass: string = 'six';

  isButtonClicked: boolean = false;

  async workWithFile(event: Event) {
    //@ts-ignore
    const data = event.target.files[0];

    // Извлечь данные из PDF-файла
    const pdfData = new Blob([data], {type: 'application/pdf'});
    const text = await pdfData.text();
    console.log(text)
  }

  changeValue() {
    this.isButtonClicked = true;
  }
}
