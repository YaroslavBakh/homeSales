import { NgModule } from "@angular/core";
import { TestComponentComponent } from "./test-component.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [
    TestComponentComponent
  ],
  bootstrap: []
})
export class TestComponentModule { }
