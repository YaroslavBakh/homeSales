import { NgModule } from "@angular/core";
import { TestComponentComponent } from "./test-component.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  exports: [
    TestComponentComponent
  ],
  bootstrap: []
})
export class TestComponentModule { }
